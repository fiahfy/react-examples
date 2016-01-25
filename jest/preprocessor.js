var babel = require('babel-core');

module.exports = {
  process: function(src, filename) {
    return babelJest(src, filename);
  }
};

function babelJest(src, filename) {
  if (!babel.util.canCompile(filename)) {
    return '';
  }

  if (filename.indexOf('node_modules') === -1) {
    return babel.transform(src, {
      filename: filename,
      retainLines: true,
      auxiliaryCommentBefore: 'istanbul ignore next'
    }).code;
  }

  return src;
}
