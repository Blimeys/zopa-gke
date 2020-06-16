"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@babel/polyfill");
const path_1 = tslib_1.__importDefault(require("path"));
const dotenv_webpack_1 = tslib_1.__importDefault(require("dotenv-webpack"));
const html_webpack_plugin_1 = tslib_1.__importDefault(require("html-webpack-plugin"));
const aliases_1 = require("./aliases");
const compression_webpack_plugin_1 = tslib_1.__importDefault(require("compression-webpack-plugin"));
const htmlPlugin = new html_webpack_plugin_1.default({
    template: path_1.default.resolve(__dirname, '../public/index.html'),
    filename: './index.html',
});
const config = {
    mode: 'production',
    entry: ['@babel/polyfill', path_1.default.resolve(__dirname, '../index.tsx')],
    output: {
        path: path_1.default.resolve(__dirname, '../build'),
        filename: 'main.js',
    },
    resolve: {
        alias: aliases_1.aliases,
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
        new compression_webpack_plugin_1.default({ filename: '[path].gz[query]' }),
        htmlPlugin,
        new dotenv_webpack_1.default({ path: './.env.production' }),
    ],
};
exports.default = config;
//# sourceMappingURL=webpack.prod.js.map