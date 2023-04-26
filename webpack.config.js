const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const RobotstxtPlugin = require('robotstxt-webpack-plugin');
const SitemapPlugin = require('sitemap-webpack-plugin').default;
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');

const path = require('path');

const paths = ['/'];

const options = {
  filePath: '/robots.txt',
  policy: [
    {
      userAgent: '*',
      Allow: 'All',
      crawlDelay: 30,
    },
  ],
  sitemap: 'https://tmauc.com/sitemap.xml',
  host: 'https://tmauc.com',
};

module.exports = {
  entry: './src/index.js',
  mode: 'production',

  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      minify: false,
    }),
    new FaviconsWebpackPlugin('./src/assets/favicon/favicon-32x32.png'),
    new RobotstxtPlugin(options),
    new SitemapPlugin({ base: 'https://tmauc.com', paths }),
    new PreloadWebpackPlugin({
      rel: 'preload',
      include: 'allAssets',
      fileBlacklist: [/\.(js|ttf|png|eot|jpe?g|css|svg)/]
    }),
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(css|scss)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpe?g|webp|gif|woff2?|eot|ttf|otf|ico)$/i,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[contenthash].[ext]',
            outputhPath: 'imgs',
            throwIfNamespace: false,
          },
        },
      },
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};
