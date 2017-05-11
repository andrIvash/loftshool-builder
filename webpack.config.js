var webpack = require('webpack');

module.exports = {
  context: __dirname + "/source",
  devtool: 'source-map',
  entry: {
    app: ['./js/app.js', './js/second.js'],
    //common:['./bower_components/jquery/dist/jquery.min.js']
  },
  output: {
    //publicPath: '',
    filename: 'assets/js/[name].bundle.js',
    path: __dirname + "./build"
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: "common",
    //   filename: "assets/scripts/common.js",
    //   minChunks: 2
    // }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        },
        sourceMap: true
    }),
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
    })
    //new FaviconsWebpackPlugin('./favicon.png')
  ]
};
