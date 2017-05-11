  var HtmlWebpackPlugin = require('html-webpack-plugin');
  const path = require('path');

  module.exports = {
    entry: './src/js/app.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'pack.bundle.js'
    },
      module: {
          rules: [
            {test: /\.scss$/, use: ['style-loader','css-loader', 'sass-loader']}
          ]
      },
    plugins: [
      new HtmlWebpackPlugin({
        //hash: true,
        template: './src/template.html', })
      ]}
