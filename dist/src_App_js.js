"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkapp1"] = self["webpackChunkapp1"] || []).push([["src_App_js"],{

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n\n\nconst App1 = () => {\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setUser(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './auth'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }())());\n  }, []);\n  return user ? /*#__PURE__*/React.createElement(\"h1\", null, \"Welcome to App1, \", user.username, \" (Role: \", user.role, \")\") : /*#__PURE__*/React.createElement(\"p\", null, \"Please log in first\");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App1);\n\n//# sourceURL=webpack://app1/./src/App.js?");

/***/ })

}]);