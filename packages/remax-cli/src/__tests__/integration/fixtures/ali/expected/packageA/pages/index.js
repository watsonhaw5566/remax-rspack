require('./../../runtime.js');
require('./../../remax-vendors.js');
require('./../../remax-styles.js');
"use strict";
(() => {
var exports = {};
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 70:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 69:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
__webpack_require__(70);


Page((0,_remax_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'packageA/pages/index'));

/***/ }),

/***/ 71:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_C__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(70);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(64);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {
  var props = {};
  var TextElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.cloneElement( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_1__.Text, {}));
  function handleClick() {}
  function handleTouchStart() {}
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(remax__WEBPACK_IMPORTED_MODULE_1__.View, {
    className: "pageA-index",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_C__WEBPACK_IMPORTED_MODULE_2__["default"], {
      className: "a"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_1__.View, _objectSpread(_objectSpread({
      onClick: handleClick,
      onTouchStart: handleTouchStart,
      id: "view",
      "data-foo": "bar"
    }, props), {}, {
      children: "foo"
    })), TextElement]
  });
});

/***/ }),

/***/ 9:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 64:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 61:
/***/ ((module) => {

module.exports = require("remax");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5,4], () => (__webpack_exec__(69)));

})();