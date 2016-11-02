# Introduction

[![npm version](https://img.shields.io/npm/v/restart-electron-webpack-plugin.svg?style=flat-square)](https://www.npmjs.com/package/restart-electron-webpack-plugin)
[![dependencies](https://img.shields.io/david/neruchev/restart-electron-webpack-plugin.svg?style=flat-square)](https://david-dm.org/neruchev/restart-electron-webpack-plugin)
[![peerDependencies](https://img.shields.io/david/peer/neruchev/restart-electron-webpack-plugin.svg?style=flat-square)](https://david-dm.org/neruchev/restart-electron-webpack-plugin?type=peer)
[![downloads](https://img.shields.io/npm/dm/restart-electron-webpack-plugin.svg?style=flat-square)](http://npm-stat.com/charts.html?package=restart-electron-webpack-plugin)
[![MIT License](https://img.shields.io/npm/l/restart-electron-webpack-plugin.svg?style=flat-square)](http://opensource.org/licenses/MIT)


[Webpack](https://webpack.github.io/) plugin that automatically (re)starts your [Electron.js](http://electron.atom.io/) app after code changes.


## Installation

Source can be loaded via [npm](https://www.npmjs.com/package/restart-electron-webpack-plugin).

```
# npm package
$ npm install --save-dev restart-electron-webpack-plugin
```


## Usage

Update your `webpack.config.js`:

```javascript
module.exports = {
  ...
  plugins: [
    new RestartElectronPlugin({
      // Defaults to process.cwd() + '/app.js'
      script: 'path/to/app.js',
    }),
  ],
  ...
};
```
