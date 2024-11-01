require('./runtime.js');
require('./remax-vendors.js');
"use strict";
(() => {
var exports = {};
exports.id = 0;
exports.ids = [0];
exports.modules = {

/***/ 4:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 0:
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__);


var pluginDriver = new remax_runtime__WEBPACK_IMPORTED_MODULE_0__.PluginDriver([].map(function (p) {
  return p.default || p;
}));
remax_runtime__WEBPACK_IMPORTED_MODULE_0__.RuntimeOptions.apply({
  platform: "toutiao",
  debug: false,
  pxToRpx: true,
  pluginDriver: pluginDriver,
  hostComponents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__.hostComponents,
  pageEvents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__.pageEvents,
  appEvents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__.appEvents
});

/***/ }),

/***/ 3:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
__webpack_require__(4);


App((0,_remax_runtime__WEBPACK_IMPORTED_MODULE_0__.createAppConfig)(_app_js__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ 56:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _app_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);

var App = function App(props) {
  return props.children;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ 9:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ ((module) => {

module.exports = require("remax/runtime");

/***/ }),

/***/ 2:
/***/ ((module) => {

module.exports = require('/__remax_runtime_options__');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2], () => (__webpack_exec__(0), __webpack_exec__(3)));

})();