import path                           from 'path';
import {stringifyRequest, parseQuery} from 'loader-utils';

function normalizePath(path) {
  if (path[0] === '/') {
    return path;
  } else {
    return './' + path;
  }
}

module.exports = function(source) {
  this.cacheable && this.cacheable();
  let options = parseQuery(this.query);
  if (options.asContext) {
    source = `
      var site = Sitegen.createSite({
        path: '/',
        page: require.context('page!${normalizePath(options.content)}', true, /.+/)
      });
    `;
  } else {
    source = `
      var site = Sitegen.createSite({
        path: '/',
        page: require('page!${normalizePath(options.content)}')
      });
    `;
  }
  source = `
    var Sitegen = require('sitegen');
    ${source}
    module.exports = site;
  `;
  return source;
}
