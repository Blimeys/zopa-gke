"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_dom_1 = require("react-dom");
const App_1 = tslib_1.__importDefault(require("./App"));
const targetElement = document.querySelector('#app');
react_dom_1.render(react_1.default.createElement(App_1.default, null), targetElement);
//# sourceMappingURL=index.js.map