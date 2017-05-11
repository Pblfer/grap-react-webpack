  var HtmlWebpackPlugin = require('html-webpack-plugin');
  var path = require('path');

  module.exports = {
    entry: './src/js/app.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'pack.bundle.js'
    },
        devServer: {
          contentBase: path.join(__dirname, "dist"),
          compress: true,
          port: 9000,
          stats: "errors-only",
          open: true
        },
      module: {
          rules: [
            {test: /\.scss$/, use: ['style-loader','css-loader', 'sass-loader']},
            {test: /\.js$/, exclude:/node_modules/, use: 'babel-loader'}
          ]
      },
    plugins: [
      new HtmlWebpackPlugin({
        //hash: true,
        template: './src/template.html', })
      ]}
