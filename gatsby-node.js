const kebabCase = require('lodash.kebabcase');
const { createFilePath } = require('gatsby-source-filesystem');

const trimTrailingSlash = (url) => url.replace(/(\/?)$/, '');

const mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions, schema }) => {
  const slugify = (source) => {
    const slug = source.slug ? source.slug : kebabCase(source.title);

    return `/${slug}`.replace(/\/\/+/g, `/`);
  };

  actions.createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve: slugify,
      };
    },
  });

  actions.createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      };
    },
  });

  actions.createTypes([
    schema.buildInterfaceType({
      name: 'StoryPage',
      fields: {
        id: { type: 'ID!' },
        slug: { type: 'String!', extensions: { slugify: {} } },
        title: { type: 'String!' },
        description: { type: 'String' },
        releaseDate: { type: 'Date!', extensions: { dateformat: {} } },
        body: { type: 'String!' },
        timeToRead: { type: 'Int' },
        cover: { type: 'File', extensions: { fileByRelativePath: {} } },
        coverCredits: { type: 'File', extensions: { fileByRelativePath: {} } },
        epub: { type: 'File', extensions: { fileByRelativePath: {} } },
        pdf: { type: 'File', extensions: { fileByRelativePath: {} } },
      },
      extensions: {
        nodeInterface: true,
      },
    }),
    schema.buildObjectType({
      name: 'MdxStoryPage',
      fields: {
        slug: { type: 'String!', extensions: { slugify: {} } },
        title: { type: 'String!' },
        description: { type: 'String' },
        releaseDate: { type: 'Date!', extensions: { dateformat: {} } },
        body: {
          type: 'String!',
          extensions: { mdxpassthrough: { fieldName: 'body' } },
        },
        timeToRead: {
          type: 'Int',
          extensions: { mdxpassthrough: { fieldName: 'timeToRead' } },
        },
        cover: { type: 'File', extensions: { fileByRelativePath: {} } },
        coverCredits: { type: 'File', extensions: { fileByRelativePath: {} } },
        epub: { type: 'File', extensions: { fileByRelativePath: {} } },
        pdf: { type: 'File', extensions: { fileByRelativePath: {} } },
      },
      interfaces: ['Node', 'StoryPage'],
    }),
  ]);

  actions.createTypes([
    schema.buildObjectType({
      name: 'NotePageTag',
      fields: {
        name: { type: 'String' },
        slug: { type: 'String' },
      },
    }),
    schema.buildInterfaceType({
      name: 'NotePage',
      fields: {
        id: { type: 'ID!' },
        slug: { type: 'String!', extensions: { slugify: {} } },
        title: { type: 'String!' },
        description: { type: 'String' },
        date: { type: 'Date!', extensions: { dateformat: {} } },
        excerpt: {
          type: 'String!',
          args: { pruneLength: { type: 'Int', defaultValue: 160 } },
          extensions: { mdxpassthrough: { fieldName: 'excerpt' } },
        },
        body: { type: 'String!' },
        html: { type: 'String' },
        timeToRead: { type: 'Int' },
        tags: { type: '[NotePageTag]' },
        banner: { type: 'File', extensions: { fileByRelativePath: {} } },
      },
      extensions: {
        nodeInterface: true,
      },
    }),
    schema.buildObjectType({
      name: 'MdxNotePage',
      fields: {
        slug: { type: 'String!', extensions: { slugify: {} } },
        title: { type: 'String!' },
        description: { type: 'String' },
        date: { type: 'Date!', extensions: { dateformat: {} } },
        excerpt: {
          type: 'String!',
          args: { pruneLength: { type: 'Int', defaultValue: 160 } },
          extensions: { mdxpassthrough: { fieldName: 'excerpt' } },
        },
        body: {
          type: 'String!',
          extensions: { mdxpassthrough: { fieldName: 'body' } },
        },
        html: {
          type: 'String!',
          extensions: { mdxpassthrough: { fieldName: 'html' } },
        },
        timeToRead: {
          type: 'Int',
          extensions: { mdxpassthrough: { fieldName: 'timeToRead' } },
        },
        tags: { type: '[NotePageTag]' },
        banner: { type: 'File', extensions: { fileByRelativePath: {} } },
      },
      interfaces: ['Node', 'NotePage'],
    }),
  ]);
};

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createParentChildLink } = actions;

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsPath" and "pagesPath"
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  if (source === 'notes') {
    let modifiedTags;
    if (node.frontmatter.tags) {
      modifiedTags = node.frontmatter.tags.map((tag) => ({
        name: tag,
        slug: kebabCase(tag),
      }));
    } else {
      modifiedTags = null;
    }

    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'notes',
    });
    const slug = `/notes${relativeFilePath}`;
    const fieldData = {
      slug: trimTrailingSlash(slug),
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      date: node.frontmatter.date,
      tags: modifiedTags,
      banner: node.frontmatter.banner,
    };

    const mdxNoteId = createNodeId(`${node.id} >>> MdxNotePage`);

    createNode({
      ...fieldData,
      // Required fields
      id: mdxNoteId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxNotePage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the NotePage interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxNoteId) });
  }

  if (
    source === 'stories' &&
    !fileNode.relativeDirectory.includes('/material')
  ) {
    const relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'stories',
    });
    const slug = `/stories${relativeFilePath}`;
    const fieldData = {
      slug: trimTrailingSlash(slug),
      title: node.frontmatter.title,
      description: node.frontmatter.description,
      releaseDate: node.frontmatter.releaseDate,
      cover: node.frontmatter.cover,
      coverCredits: node.frontmatter.coverCredits,
      epub: node.frontmatter.epub,
      pdf: node.frontmatter.pdf,
    };

    const mdxStoryPageId = createNodeId(`${node.id} >>> MdxStoryPage`);

    createNode({
      ...fieldData,
      // Required fields
      id: mdxStoryPageId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxStoryPage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the StoryPage interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxStoryPageId) });
  }
};

// These template are only data-fetching wrappers that import components
// const homepageTemplate = require.resolve(`./src/templates/homepage-query.tsx`);
const notesPageTemplate = require.resolve(
  `./src/templates/notes-page-query.js`
);
const notePageTemplate = require.resolve(`./src/templates/note-page-query.js`);
const notesTagsPageTemplate = require.resolve(
  `./src/templates/notes-tags-page-query.js`
);
const notesTagPageTemplate = require.resolve(
  `./src/templates/notes-tag-page-query.js`
);
const storiesPageTemplate = require.resolve(
  `./src/templates/stories-page-query.js`
);
const storyPageTemplate = require.resolve(
  `./src/templates/story-page-query.js`
);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  createPage({
    path: `/notes`,
    component: notesPageTemplate,
    context: {
      breadcrumbs: ['notes'],
      formatString: `LL`,
    },
  });

  createPage({
    path: `/notes/tags`,
    component: notesTagsPageTemplate,
    context: {
      breadcrumbs: ['notes'],
      formatString: `LL`,
    },
  });

  createPage({
    path: `/stories`,
    component: storiesPageTemplate,
    context: {
      breadcrumbs: ['stories'],
      formatString: `LL`,
    },
  });

  const result = await graphql(`
    query {
      allNotePage(sort: { fields: date, order: DESC }) {
        nodes {
          slug
        }
      }
      allNoteTags: allNotePage(sort: { fields: tags___name, order: DESC }) {
        group(field: tags___name) {
          fieldValue
        }
      }
      allStoryPage(sort: { fields: releaseDate, order: DESC }) {
        nodes {
          slug
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your pages`,
      result.errors
    );
    return;
  }

  result.data.allNotePage.nodes.forEach((page) => {
    const breadcrumbs = page.slug.split('/').filter(Boolean);
    createPage({
      path: trimTrailingSlash(page.slug),
      component: notePageTemplate,
      context: {
        breadcrumbs,
        slug: page.slug,
        formatString: `LL`,
      },
    });
  });

  result.data.allNoteTags.group.forEach((tag) => {
    const tagPath = `/notes/tags/${kebabCase(tag.fieldValue)}`;
    const breadcrumbs = tagPath.split('/').filter(Boolean);
    createPage({
      path: trimTrailingSlash(tagPath),
      component: notesTagPageTemplate,
      context: {
        breadcrumbs,
        slug: kebabCase(tag.fieldValue),
        name: tag.fieldValue,
        formatString: `LL`,
      },
    });
  });

  result.data.allStoryPage.nodes.forEach((page) => {
    const breadcrumbs = page.slug.split('/').filter(Boolean);
    createPage({
      path: trimTrailingSlash(page.slug),
      component: storyPageTemplate,
      context: {
        breadcrumbs,
        slug: page.slug,
        formatString: `LL`,
      },
    });
  });
};
