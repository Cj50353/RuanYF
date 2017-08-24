const path = require('path');
const fs = require('fs');
const glob = require('glob');

const isDev = process.env.NODE_ENV === 'development';

module.exports = function (webpackConfig) {
  console.log("isDev",isDev);
  if (isDev) {
    webpackConfig.devtool = "source-map";
  } else {
    // webpackConfig.devtool = "inline-source-map";
  }
  // webpackConfig.plugins = webpackConfig.plugins.filter(item => item.constructor.name !== 'CommonsChunkPlugin')


  webpackConfig.babel.plugins.push('transform-runtime');
  webpackConfig.babel.plugins.push([
    'import',
    [
      {
        libraryName: 'antd',
        style: true
      }, {
      libraryName: 'antd',
      style: 'css'
    }
    ]
  ]);


  // webpackConfig.resolve = {
  //     modulesDirectories: ['node_modules', path.join(__dirname, '../node_modules')],
  //     extensions: ['', '.web.js', '.js', '.jsx', '.json']
  // };

  // Load src/entries/*.js as entry automatically.
  const files = glob.sync('./src/index.js');
  const newEntries = files.reduce(function (memo, file) {
    const name = path.basename(file, '.js');
    memo[name] = file;
    return memo;
  }, {});

  // antd-mobile icon
  //const svgDirs = [
  //  require.resolve('antd-mobile').replace(/warn\.js$/, ''),  // 1. 属于 antd-mobile 内置 svg 文件
  //  path.resolve(__dirname, 'src/components/svg'),  // 2. 自己私人的 svg 存放目录
  //];

  // 因为一个 SVG 文件不能被处理两遍. 在 atool-build 默认为 svg配置的svg-url-loade 里 exclude 掉需要 svg-sprite-loader处理的目录
  // https://github.com/ant-tool/atool-build/blob/master/src/getWebpackCommonConfig.js#L162
  // https://github.com/kisenka/svg-sprite-loader/issues/4
  //webpackConfig.module.loaders.forEach(loader => {
  //  if (loader.test && typeof loader.test.test === 'function' && loader.test.test('.svg')) {
  //    loader.exclude = svgDirs;
  //  }
  //});
  // 4. 配置 webpack loader
  //webpackConfig.module.loaders.unshift({
  //  test: /\.(svg)$/i,
  //  loader: 'svg-sprite',
  //  include: svgDirs, // 把 svgDirs 路径下的所有 svg 文件交给 svg-sprite-loader 插件处理
  //});

  // Support CSS Modules
  // Parse all less files as css module.
  //webpackConfig.module.loaders.forEach(function (loader, index) {
  //  if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.less$') > -1) {
  //    loader.include = /node_modules/;
  //    loader.test = /\.less$/;
  //  }
  //  if (loader.test.toString() === '/\\.module\\.less$/') {
  //    loader.exclude = /node_modules/;
  //    loader.test = /\.less$/;
  //  }
  //  if (typeof loader.test === 'function' && loader.test.toString().indexOf('\\.css$') > -1) {
  //    loader.include = /node_modules/;
  //    loader.test = /\.css$/;
  //  }
  //  if (loader.test.toString() === '/\\.module\\.css$/') {
  //    loader.exclude = /node_modules/;
  //    loader.test = /\.css$/;
  //  }
  //});


  webpackConfig.entry = Object.assign({}, webpackConfig.entry, newEntries);

  const packageJson = require('./package.json');
  webpackConfig.output.path = path.join(__dirname, "dist", packageJson.name, packageJson.version);
  webpackConfig.output.publicPath = "/" + packageJson.name + "/" + packageJson.version;

  return webpackConfig;
};
