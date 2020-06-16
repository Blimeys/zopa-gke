"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const history_1 = require("./history");
const Main = () => (react_1.default.createElement("div", null,
    react_1.default.createElement("h1", null, "Zopa GKE example"),
    react_1.default.createElement("a", { href: "https://github.com/Blimeys/zopa-gke", target: "_blank" }, "Example repository")));
const App = () => (react_1.default.createElement(react_router_dom_1.Router, { history: history_1.history },
    react_1.default.createElement(react_router_dom_1.Route, { path: '/', component: Main })));
exports.default = App;
//# sourceMappingURL=App.js.map