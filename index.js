const path = require('path');
const express = require('express');
const errorHandler = require('errorhandler');
const serveIndex = require('serve-index');
const ip = require('ip');

const root = process.cwd();
module.exports = ({ port }) => {
  const app = express();

  app.use('/', express.static(path.join(root), {index:"index.html"}));
  app.use(serveIndex(root));
  app.use(errorHandler());

  const log = `
      http://127.0.0.1:${port}
      http://${ip.address()}:${port}
  `;
  console.log('Server listening on port:')
  app.listen(port, () => console.log('\x1B[32m%s\x1B[0m', log));
}