require('./../runtime.js');
require('./../remax-vendors.js');
"use strict";
(() => {
var exports = {};
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 60:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ A),
/* harmony export */   C: () => (/* reexport safe */ _circularDependency2__WEBPACK_IMPORTED_MODULE_0__.C)
/* harmony export */ });
/* harmony import */ var _circularDependency2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);

var A = 'A';


/***/ }),

/***/ 61:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* reexport safe */ _circularDependency1__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   C: () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var _circularDependency1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);

var C = 'C';


/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);


Page((0,_remax_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index'));

/***/ }),

/***/ 58:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _circularDependency1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _circularDependency2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(62);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(remax__WEBPACK_IMPORTED_MODULE_1__.View, {
    children: [_circularDependency1__WEBPACK_IMPORTED_MODULE_2__.A, _circularDependency2__WEBPACK_IMPORTED_MODULE_3__.C]
  });
});

/***/ }),

/***/ 9:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 62:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 59:
/***/ ((module) => {

module.exports = require("remax");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2], () => (__webpack_exec__(57)));

})();