require('./../runtime.js');
(my["webpackChunk"] = my["webpackChunk"] || []).push([[0],[
/* 0 */
/***/ ((module) => {

var data = 'init data';
function getData() {
  return data;
}
function setData(value) {
  data = value;
}
module.exports = {
  getData: getData,
  setData: setData
};

/***/ })
],
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__(0));
/******/ module.exports = __webpack_exports__;
/******/ }
]);