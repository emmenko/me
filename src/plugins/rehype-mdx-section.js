const isHeading = require('hast-util-heading');

// Since we are mapping the headings shifted to one in the markdown provider
// (e.g. h1 -> h2, h2 -> h3), we return the shifted tagName here as well.
const mapNodeTagName = (tagName) =>
  tagName.replace(/([0-9])$/, (match) => parseInt(match, 10) + 1);

module.exports = () => (ast) => {
  const newNodes = [];
  let sectionNode = {
    type: 'element',
    tagName: 'section',
    properties: {
      class: `section-lead`,
    },
    children: [],
  };
  // eslint-disable-next-line no-restricted-syntax
  for (const node of ast.children) {
    if (isHeading(node)) {
      if (sectionNode.children.length > 0) {
        newNodes.push(sectionNode);
      }
      sectionNode = {
        type: 'element',
        tagName: 'section',
        properties: {
          id: `section-${node.properties.id}`,
          class: `section-${mapNodeTagName(node.tagName)}`,
        },
        children: [node],
      };
    } else if (['import', 'export'].includes(node.type)) {
      newNodes.push(node);
    } else {
      sectionNode.children.push(node);
    }
  }
  if (sectionNode.children.length > 0) {
    newNodes.push(sectionNode);
  }
  // eslint-disable-next-line no-param-reassign
  ast.children = newNodes;
  return ast;
};
