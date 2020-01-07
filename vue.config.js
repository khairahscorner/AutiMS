const webpack = require("webpack");

module.exports = {
  lintOnSave: false,
  // chainWebpack: config => {
  //   config
  //   .plugin('provide')
  //   .use(require('webpack').ProvidePlugin, [{
  //     $: 'jquery',
  //     jquery: 'jquery',
  //     jQuery: 'jquery',
  //     'window.jQuery': 'jquery',
  //     Popper: 'popper.js'
  //   }])
  // }
  // configureWebpack: {
  //   plugins: [
  //     new webpack.ProvidePlugin({
  //       $: 'jquery',
  //       jquery: 'jquery',
  //       'window.jQuery': 'jquery',
  //       jQuery: 'jquery',
  //       // Popper: ['popper.js', 'default']

  //     })
  //   ]
  // }

};
