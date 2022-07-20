"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getblog";
exports.ids = ["pages/api/getblog"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./pages/api/getblog.js":
/*!******************************!*\
  !*** ./pages/api/getblog.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\nfunction handler(req, res) {\n    fs__WEBPACK_IMPORTED_MODULE_0__.readFile(`blogdata/${req.query.slug}.json`, \"utf-8\", (err, data)=>{\n        if (err) {\n            res.status(500).json({\n                error: \"No such blog exist\"\n            });\n        }\n        // console.log(req.query.slug);\n        res.status(200).json(JSON.parse(data));\n    });\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0YmxvZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSw2RUFBNkU7QUFDcEQ7QUFFVixTQUFTQyxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3hDSCx3Q0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFRSxHQUFHLENBQUNHLEtBQUssQ0FBQ0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDQyxHQUFHLEVBQUVDLElBQUksR0FBSztRQUNyRSxJQUFJRCxHQUFHLEVBQUU7WUFDUEosR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztnQkFBRUMsS0FBSyxFQUFFLG9CQUFvQjthQUFFLENBQUMsQ0FBQztTQUN2RDtRQUNELCtCQUErQjtRQUMvQlIsR0FBRyxDQUFDTSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0UsSUFBSSxDQUFDQyxLQUFLLENBQUNMLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDeEMsQ0FBQyxDQUFDO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odW50aW5nLWJ1Z3MvLi9wYWdlcy9hcGkvZ2V0YmxvZy5qcz82NjE4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXG5pbXBvcnQgKiBhcyBmcyBmcm9tIFwiZnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICBmcy5yZWFkRmlsZShgYmxvZ2RhdGEvJHtyZXEucXVlcnkuc2x1Z30uanNvbmAsIFwidXRmLThcIiwgKGVyciwgZGF0YSkgPT4ge1xuICAgIGlmIChlcnIpIHtcbiAgICAgIHJlcy5zdGF0dXMoNTAwKS5qc29uKHsgZXJyb3I6IFwiTm8gc3VjaCBibG9nIGV4aXN0XCIgfSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHJlcS5xdWVyeS5zbHVnKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihKU09OLnBhcnNlKGRhdGEpKTtcbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwicmVhZEZpbGUiLCJxdWVyeSIsInNsdWciLCJlcnIiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImVycm9yIiwiSlNPTiIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getblog.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getblog.js"));
module.exports = __webpack_exports__;

})();