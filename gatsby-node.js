const kebabCase = require('lodash.kebabcase');
const { createRemoteFileNode } = require('gatsby-source-filesystem');

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

const createFeatureImage = async (gatsbyApi) => {
  const imageNode = await createRemoteFileNode({
    url: gatsbyApi.node.frontmatter.featureImage.url,
    parentNodeId: gatsbyApi.node.id,
    createNode: gatsbyApi.actions.createNode,
    createNodeId: gatsbyApi.createNodeId,
    cache: gatsbyApi.cache,
    store: gatsbyApi.store,
  });
  return {
    image___NODE: imageNode.id,
    author: gatsbyApi.node.frontmatter.featureImage.author,
    authorUrl: gatsbyApi.node.frontmatter.featureImage.authorUrl,
  };
};

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions, schema }) => {
  actions.createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve: (source) => {
          return trimTrailingSlash(
            `${source.___slugPrefix}/${kebabCase(source.title || source.name)}`
          );
        },
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
    schema.buildObjectType({
      name: 'FeatureImage',
      fields: {
        image: {
          type: 'File',
          extensions: { link: { from: 'image___NODE' } },
        },
        author: { type: 'String!' },
        authorUrl: { type: 'String!' },
      },
    }),
  ]);

  actions.createTypes([
    schema.buildObjectType({
      name: 'NotePageTag',
      fields: {
        name: { type: 'String' },
        slug: { type: 'String', extensions: { slugify: {} } },
      },
    }),
    schema.buildInterfaceType({
      name: 'NotePage',
      fields: {
        isDraft: { type: 'Boolean!' },
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
        featureImage: { type: 'FeatureImage' },
      },
      extensions: {
        nodeInterface: true,
      },
    }),
    schema.buildObjectType({
      name: 'MdxNotePage',
      fields: {
        isDraft: { type: 'Boolean!' },
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
        featureImage: { type: 'FeatureImage' },
      },
      interfaces: ['Node', 'NotePage'],
    }),
  ]);

  actions.createTypes([
    schema.buildInterfaceType({
      name: 'StoryPage',
      fields: {
        isDraft: { type: 'Boolean!' },
        id: { type: 'ID!' },
        slug: { type: 'String!', extensions: { slugify: {} } },
        title: { type: 'String!' },
        description: { type: 'String' },
        releaseDate: { type: 'Date!', extensions: { dateformat: {} } },
        body: { type: 'String!' },
        timeToRead: { type: 'Int' },
        featureImage: { type: 'FeatureImage' },
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
        isDraft: { type: 'Boolean!' },
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
        featureImage: { type: 'FeatureImage' },
        epub: { type: 'File', extensions: { fileByRelativePath: {} } },
        pdf: { type: 'File', extensions: { fileByRelativePath: {} } },
      },
      interfaces: ['Node', 'StoryPage'],
    }),
  ]);
};

exports.onCreateNode = async (gatsbyApi) => {
  // Make sure that it's an MDX node
  if (gatsbyApi.node.internal.type !== `Mdx`) {
    return;
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsPath" and "pagesPath"
  const fileNode = gatsbyApi.getNode(gatsbyApi.node.parent);
  const source = fileNode.sourceInstanceName;
  const isDraft = Boolean(gatsbyApi.node.frontmatter.draft);
  const isProduction = process.env.NODE_ENV === 'production';

  if (source === 'notes' && !(isDraft && isProduction)) {
    let modifiedTags;
    if (gatsbyApi.node.frontmatter.tags) {
      modifiedTags = gatsbyApi.node.frontmatter.tags.map((tag) => ({
        name: tag,
        ___slugPrefix: '/notes/tags',
      }));
    } else {
      modifiedTags = null;
    }

    const fieldData = {
      ___slugPrefix: '/notes',
      isDraft,
      title: gatsbyApi.node.frontmatter.title,
      description: gatsbyApi.node.frontmatter.description,
      date: gatsbyApi.node.frontmatter.date,
      tags: modifiedTags,
    };
    if (gatsbyApi.node.frontmatter.featureImage) {
      fieldData.featureImage = await createFeatureImage(gatsbyApi);
    }

    const mdxNoteId = gatsbyApi.createNodeId(
      `${gatsbyApi.node.id} >>> MdxNotePage`
    );

    gatsbyApi.actions.createNode({
      ...fieldData,
      // Required fields
      id: mdxNoteId,
      parent: gatsbyApi.node.id,
      children: [],
      internal: {
        type: `MdxNotePage`,
        contentDigest: gatsbyApi.createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the NotePage interface`,
      },
    });

    gatsbyApi.actions.createParentChildLink({
      parent: gatsbyApi.node,
      child: gatsbyApi.getNode(mdxNoteId),
    });
  }

  if (source === 'stories' && !(isDraft && isProduction)) {
    const fieldData = {
      ___slugPrefix: '/stories',
      isDraft,
      title: gatsbyApi.node.frontmatter.title,
      description: gatsbyApi.node.frontmatter.description,
      releaseDate: gatsbyApi.node.frontmatter.releaseDate,
      epub: gatsbyApi.node.frontmatter.epub,
      pdf: gatsbyApi.node.frontmatter.pdf,
    };
    if (gatsbyApi.node.frontmatter.featureImage) {
      fieldData.featureImage = await createFeatureImage(gatsbyApi);
    }

    const mdxStoryPageId = gatsbyApi.createNodeId(
      `${gatsbyApi.node.id} >>> MdxStoryPage`
    );

    gatsbyApi.actions.createNode({
      ...fieldData,
      // Required fields
      id: mdxStoryPageId,
      parent: gatsbyApi.node.id,
      children: [],
      internal: {
        type: `MdxStoryPage`,
        contentDigest: gatsbyApi.createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the StoryPage interface`,
      },
    });

    gatsbyApi.actions.createParentChildLink({
      parent: gatsbyApi.node,
      child: gatsbyApi.getNode(mdxStoryPageId),
    });
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
      breadcrumbs: ['notes', 'tags'],
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
    const slug = trimTrailingSlash(page.slug);
    createPage({
      path: slug,
      component: notePageTemplate,
      context: {
        breadcrumbs,
        slug,
        formatString: `LL`,
      },
    });
  });

  result.data.allNoteTags.group.forEach((tag) => {
    const tagPath = trimTrailingSlash(
      `/notes/tags/${kebabCase(tag.fieldValue)}`
    );
    const breadcrumbs = tagPath.split('/').filter(Boolean);
    createPage({
      path: tagPath,
      component: notesTagPageTemplate,
      context: {
        breadcrumbs,
        slug: tagPath,
        name: tag.fieldValue,
        formatString: `LL`,
      },
    });
  });

  result.data.allStoryPage.nodes.forEach((page) => {
    const breadcrumbs = page.slug.split('/').filter(Boolean);
    const slug = trimTrailingSlash(page.slug);
    createPage({
      path: slug,
      component: storyPageTemplate,
      context: {
        breadcrumbs,
        slug,
        formatString: `LL`,
      },
    });
  });
};
