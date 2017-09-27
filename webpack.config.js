const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    app: ["react-hot-loader/patch", "./src/index"]
  },
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }, {
        test: /\.pug$/,
        use: ['raw-loader', 'pug-html-loader']
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, "src"),
    port: 9000,
    hot: true,
    open: true,
    inline: true
  },
  plugins: [new HtmlWebpackPlugin({
      title: 'Webpacks projects + plugin',
      hash: true,
      template: './views/index.pug'
    }),new webpack.HotModuleReplacementPlugin()]
}
