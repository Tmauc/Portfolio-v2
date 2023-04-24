var HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: "./src/index.js",
  mode: 'production',

  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      minify: false,
    }),
    new FaviconsWebpackPlugin('./src/assets/favicon/favicon-32x32.png'),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(svg|png|jpe?g|gif|woff2?|eot|ttf|otf|ico)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: "[name].[contenthash].[ext]",
            outputhPath: "imgs"
          }
        }
      },
    ]
  }
}