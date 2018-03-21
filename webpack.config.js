// 開発環境によって切り分ける際に使用するための定数を定義
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const ENV = 'development';
const userSourceMap = (ENV === 'development');

module.exports = {
  entry: ['./app.js', './scss/fluffy.scss'],
  mode: ENV,
  module: {
    rules: [
      {
        test: /\.scss/, // 対象となるファイルの拡張子
        use: ExtractTextPlugin.extract({
          use:
            [
            {
              loader: 'css-loader',
              options: {
                url: false,
                sourceMap: userSourceMap,
                importLoaders: 2
              },
            },
            {
              loader: 'sass-loader',
              options: {
                // ソースマップの利用有無
                sourceMap: userSourceMap,
              }
            }
          ]
        }),
      },
    ],
  },

  plugins: [
    new ExtractTextPlugin('fluffy.css'),
  ],
};
