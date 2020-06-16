"use strict";
const babel = require('@babel/core');
const compilerOptions = {
    ast: false,
    sourceMaps: 'inline',
    presets: ['@babel/env', '@babel/react', '@babel/typescript'],
    plugins: [
        '@babel/plugin-transform-react-jsx',
        '@babel/plugin-proposal-export-default-from',
    ],
};
module.exports = {
    process(src, path) {
        if (path.endsWith('.js') ||
            path.endsWith('.jsx') ||
            path.endsWith('.ts') ||
            path.endsWith('.tsx')) {
            return babel.transform(src, Object.assign(Object.assign({}, compilerOptions), { filename: path, sourceFileName: path })).code;
        }
        else {
            console.log('Unknown file extension received for transforming.');
        }
        return src;
    },
};
//# sourceMappingURL=transformer.js.map