require('./../runtime.js');
require('./../remax-vendors.js');
"use strict";
(() => {
var exports = {};
exports.id = 1;
exports.ids = [1];
exports.modules = {

/***/ 56:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57);


Page((0,_remax_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_index_js__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index'));

/***/ }),

/***/ 57:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (props) {
  var columns = [[{
    label: '1.1'
  }, {
    label: '1.2'
  }], [{
    label: '2.1'
  }, {
    label: '2.2'
  }]];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(remax__WEBPACK_IMPORTED_MODULE_1__.View, {
    _tid: "5da6971-1",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(remax__WEBPACK_IMPORTED_MODULE_1__.PickerView, {
      children: columns.map(function (colum, idx) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(remax__WEBPACK_IMPORTED_MODULE_1__.PickerViewColumn, {
          children: colum.map(function (item, index) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(remax__WEBPACK_IMPORTED_MODULE_1__.View, {
              _tid: "5da6971-2",
              __key: index,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("block", {
                children: item.label
              })
            }, index);
          })
        }, idx);
      })
    })
  });
});

/***/ }),

/***/ 8:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 59:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 58:
/***/ ((module) => {

module.exports = require("remax");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2], () => (__webpack_exec__(56)));

})();