const path = require('path');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, './.env'),
});
const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  mode: process.env.NODE_ENV,
  // mode: development,
  devServer: {
    host: 'localhost',
    port: 8080,
    hot: true,
    // match the output path
    contentBase: path.resolve(__dirname, './build'),
    // match the output 'publicPath'
    publicPath: '/',
    // fallback to root for other urls
    historyApiFallback: true,
    inline: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    proxy: {
      // express/postman calls to endpoints
      '/stock/**': {  // '/api/**'
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  }
  // plugins: [
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "./index.html")
    // }),
  // ],
};
