import path from 'path';
import express from 'express';


const port = 8000;
const app = express();
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);
const middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  quiet: false,
  lazy: false,
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  stats: {
    colors: true
  }
});
const bundlePath = path.join(__dirname, './dist/index.html');

app.use(middleware);
app.get('*', (req, res) => {
  res.write(middleware.fileSystem.readFileSync(bundlePath));
  res.end();
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }
  console.info(`==> Listening on http://0.0.0.0:${port}/`)
})
