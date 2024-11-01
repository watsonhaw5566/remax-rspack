require('./../runtime.js');
require('./../remax-vendors.js');
"use strict";
(() => {
var exports = {};
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 59:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_remax_runtime__WEBPACK_IMPORTED_MODULE_0__.createNativeComponent)('native-component-index-f24c316'));

/***/ }),

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
/* harmony export */   "default": () => (/* binding */ Index)
/* harmony export */ });
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(58);
/* harmony import */ var remax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(remax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_nativeComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var RenameView = remax__WEBPACK_IMPORTED_MODULE_2__.View;
var Deep = {
  Object: {
    View: remax__WEBPACK_IMPORTED_MODULE_2__.View
  }
};
var DDD = (0,_remax_runtime__WEBPACK_IMPORTED_MODULE_0__.createHostComponent)('ddd');
function ReactComp(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
        children: "react component"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
          children: "Text inside Fragment"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
        children: "View inside Expression"
      }), react__WEBPACK_IMPORTED_MODULE_1__.Children.map(children, function (child, index) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.cloneElement(child, {
          id: 'reactComp' + index
        });
      })]
    })
  });
}
function Index() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1__.useState(1),
    _React$useState2 = _slicedToArray(_React$useState, 1),
    count = _React$useState2[0];
  var props = {
    id: 'spreadId'
  };
  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1__.useState(true),
    _React$useState4 = _slicedToArray(_React$useState3, 1),
    show = _React$useState4[0];
  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1__.useState(true),
    _React$useState6 = _slicedToArray(_React$useState5, 1),
    showPlainText = _React$useState6[0];
  var plainText = 'plain-text-leaf';
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
    entry: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: ['expression entry', 123313, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
          children: "Fragment Text 1"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
          children: "Fragment Text 2"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: "Fragment Text 3"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
            children: "Fragment Text 4"
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: "Fragment"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
        children: "React.Fragment"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(DDD, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
        children: "remax.Text"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_nativeComponent__WEBPACK_IMPORTED_MODULE_3__["default"], {
        "ns:attr": "1"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(ReactComp, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
          children: "React Component First Child"
        }), 'React Component Second Child']
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
        className: "className",
        children: ["Count: ", count]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
        id: count,
        className: 'class',
        children: "view"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
        children: "custom view"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement('view', {
        id: 'view'
      }, [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
        __key: "1",
        children: "create element children 1"
      }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement('view', {
        key: '2'
      })]), [1, 2, 3].map(function (item) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
          __key: item,
          children: ["array map: ", item]
        }, item);
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.View, _objectSpread(_objectSpread({}, props), {}, {
        children: "Spread Attributes View"
      })), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
        children: "long long long long long long long long long long long long text long long long long long long long long long long long long text"
      }), 'Literal Expression', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Deep.Object.View, {
        children: "Deep Object View"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(RenameView, {
        children: "Rename View"
      }), show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.View, {
        children: "Conditional View"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(remax__WEBPACK_IMPORTED_MODULE_2__.Text, {
        leaf: true,
        children: showPlainText && plainText
      })]
    })
  });
}

/***/ }),

/***/ 8:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 60:
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
var __webpack_exports__ = __webpack_require__.X(0, [3], () => (__webpack_exec__(56)));

})();