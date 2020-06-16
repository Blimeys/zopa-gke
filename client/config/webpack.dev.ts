import '@babel/polyfill';
import path from 'path';
import HtmlWebPackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import { aliases } from './aliases';
import HappyPack from 'happypack';

const htmlPlugin = new HtmlWebPackPlugin({
  template: path.resolve(__dirname, '../public/index.html'),
});

const config = {
  mode: 'development',
  output: {
    publicPath: '/',
  },
  entry: [path.resolve(__dirname, '../index.tsx')],
  resolve: {
    alias: aliases,
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  // devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        use: 'happypack/loader?id=tsx',
      },
    ],
  },
  plugins: [
    new HappyPack({
      id: 'tsx',
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: false,
            happyPackMode: true,
          },
        },
      ],
    }),
    htmlPlugin,
    new Dotenv({ path: './.env.development' }),
  ],
};

export default config;
