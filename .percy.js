module.exports = {
  version: 2,
  static: {
    include: [
      'index.html',
      'notes/building-a-git-hub-action-to-verify-pull-request-labels/index.html',
      'stories/a-binary-tale/index.html',
    ],
  },
  snapshot: {
    widths: [1024],
  },
  discovery: {
    // ms (https://docs.percy.io/docs/command-line-client#section--network-idle-timeout-t)
    networkIdleTimeout: 750,
  },
};
