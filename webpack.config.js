const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      serveIndex: true,
      watch: true,
      staticOptions: {
        extensions: ['mp3', 'ogg'],
        setHeaders(res) {
          res.set('Access-Control-Allow-Origin', '*');
        },
      },
    },
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      // favicon: './src/images/gunboundIcon.ico',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(mp3)$/,
        type: 'asset/resource',
        generator: {
          filename: 'audio/[hash][ext][query]',
        },
      },
    ],
  },
};
