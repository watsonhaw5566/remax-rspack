require('./runtime.js');
(() => {
var exports = {};
exports.id = 0;
exports.ids = [0];
exports.modules = [
/* 0 */
/* istanbul ignore next */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var remax_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(remax_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__);


var pluginDriver = new remax_runtime__WEBPACK_IMPORTED_MODULE_0__.PluginDriver([].map(function (p) {
  return p.default || p;
}));
remax_runtime__WEBPACK_IMPORTED_MODULE_0__.RuntimeOptions.apply({
  platform: "ali",
  debug: false,
  pxToRpx: true,
  pluginDriver: pluginDriver,
  hostComponents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__.hostComponents,
  pageEvents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__.pageEvents,
  appEvents: _remax_runtime_options___WEBPACK_IMPORTED_MODULE_1__.appEvents
});

/***/ }),
/* 1 */
/***/ ((module) => {

"use strict";
module.exports = require("remax/runtime");

/***/ }),
/* 2 */
/***/ ((module) => {

"use strict";
module.exports = require('/__remax_runtime_options__');

/***/ }),
/* 3 */
/***/ (() => {

App({});

/***/ })
];
;

// load runtime
var __webpack_require__ = require("./runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(0), __webpack_exec__(3));

})();