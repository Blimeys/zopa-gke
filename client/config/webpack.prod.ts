import '@babel/polyfill';
import path from 'path';
import Dotenv from 'dotenv-webpack';
import webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import { aliases } from './aliases';
import CompressionPlugin from 'compression-webpack-plugin';

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
//   .BundleAnalyzerPlugin; Enable this to see the bundle analyzer and add it to the plugin as new BundleAnalyzerPlugin()

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
  filename: './index.html',
});

const config: webpack.Configuration = {
  mode: 'production',
  entry: ['@babel/polyfill', path.resolve(__dirname, '../index.tsx')],
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js',
  },
  resolve: {
    alias: aliases,
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  },
  plugins: [
    new CompressionPlugin({ filename: '[path].gz[query]' }),
    htmlPlugin,
    new Dotenv({ path: './.env.production' }),
  ],
};

export default config;
