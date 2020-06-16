"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const enzyme_1 = require("enzyme");
const enzyme_adapter_react_16_1 = tslib_1.__importDefault(require("enzyme-adapter-react-16"));
require("@babel/polyfill");
require("jest-date-mock");
require("jest-canvas-mock");
enzyme_1.configure({ adapter: new enzyme_adapter_react_16_1.default() });
global.shallow = enzyme_1.shallow;
global.render = enzyme_1.render;
global.mount = enzyme_1.mount;
//# sourceMappingURL=setup.js.map