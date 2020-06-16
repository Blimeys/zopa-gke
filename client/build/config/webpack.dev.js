"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
require("@babel/polyfill");
const path_1 = tslib_1.__importDefault(require("path"));
const html_webpack_plugin_1 = tslib_1.__importDefault(require("html-webpack-plugin"));
const dotenv_webpack_1 = tslib_1.__importDefault(require("dotenv-webpack"));
const aliases_1 = require("./aliases");
const happypack_1 = tslib_1.__importDefault(require("happypack"));
const htmlPlugin = new html_webpack_plugin_1.default({
    template: path_1.default.resolve(__dirname, '../public/index.html'),
});
const config = {
    mode: 'development',
    output: {
        publicPath: '/',
    },
    entry: [path_1.default.resolve(__dirname, '../index.tsx')],
    resolve: {
        alias: aliases_1.aliases,
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                use: 'happypack/loader?id=tsx',
            },
        ],
    },
    plugins: [
        new happypack_1.default({
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
        new dotenv_webpack_1.default({ path: './.env.development' }),
    ],
};
exports.default = config;
//# sourceMappingURL=webpack.dev.js.map