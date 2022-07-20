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
exports.id = "pages/blogpost/[slug]";
exports.ids = ["pages/blogpost/[slug]"];
exports.modules = {

/***/ "./styles/BlogPost.module.css":
/*!************************************!*\
  !*** ./styles/BlogPost.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"BlogPost_main___fHoC\",\n\t\"blogDetails\": \"BlogPost_blogDetails__RP4FX\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQmxvZ1Bvc3QubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVudGluZy1idWdzLy4vc3R5bGVzL0Jsb2dQb3N0Lm1vZHVsZS5jc3M/MDYwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiQmxvZ1Bvc3RfbWFpbl9fX2ZIb0NcIixcblx0XCJibG9nRGV0YWlsc1wiOiBcIkJsb2dQb3N0X2Jsb2dEZXRhaWxzX19SUDRGWFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/BlogPost.module.css\n");

/***/ }),

/***/ "./pages/blogpost/[slug].js":
/*!**********************************!*\
  !*** ./pages/blogpost/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/BlogPost.module.css */ \"./styles/BlogPost.module.css\");\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst Slug = (props)=>{\n    // const router = useRouter();\n    // const { slug } = router.query;\n    const { 0: blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.Blog);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: blog && blog.title\n            }, void 0, false, {\n                fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_3___default().blogDetails),\n                children: blog && blog.content\n            }, void 0, false, {\n                fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\nasync function getServerSideProps(context) {\n    console.log(context.query);\n    const { slug  } = context.query;\n    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);\n    let Blog = await data.json();\n    return {\n        props: {\n            Blog\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ1g7QUFDYztBQUV0RCxNQUFNSyxJQUFJLEdBQUcsQ0FBQ0MsS0FBSyxHQUFLO0lBQ3RCLDhCQUE4QjtJQUM5QixpQ0FBaUM7SUFDakMsTUFBTSxLQUFDQyxJQUFJLE1BQUVDLE9BQU8sTUFBSU4sK0NBQVEsQ0FBQ0ksS0FBSyxDQUFDRyxJQUFJLENBQUM7SUFFNUMscUJBQ0UsOERBQUNDLE1BQUk7UUFBQ0MsU0FBUyxFQUFFUCx5RUFBVzs7MEJBQzFCLDhEQUFDUSxJQUFFOzBCQUFFTCxJQUFJLElBQUlBLElBQUksQ0FBQ00sS0FBSzs7Ozs7eUJBQU07MEJBQzdCLDhEQUFDQyxJQUFFOzs7O3lCQUFHOzBCQUNOLDhEQUFDQyxLQUFHO2dCQUFDSixTQUFTLEVBQUVQLGdGQUFrQjswQkFBR0csSUFBSSxJQUFJQSxJQUFJLENBQUNVLE9BQU87Ozs7O3lCQUFPOzs7Ozs7aUJBQzNELENBQ1A7Q0FDSDtBQUVNLGVBQWVDLGtCQUFrQixDQUFDQyxPQUFPLEVBQUU7SUFDaERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixPQUFPLENBQUNHLEtBQUssQ0FBQyxDQUFDO0lBQzNCLE1BQU0sRUFBRUMsSUFBSSxHQUFFLEdBQUdKLE9BQU8sQ0FBQ0csS0FBSztJQUU5QixJQUFJRSxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUFDLENBQUMsdUNBQXVDLEVBQUVGLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDeEUsSUFBSWQsSUFBSSxHQUFHLE1BQU1lLElBQUksQ0FBQ0UsSUFBSSxFQUFFO0lBQzVCLE9BQU87UUFDTHBCLEtBQUssRUFBRTtZQUFFRyxJQUFJO1NBQUU7S0FDaEIsQ0FBQztDQUNIO0FBRUQsaUVBQWVKLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h1bnRpbmctYnVncy8uL3BhZ2VzL2Jsb2dwb3N0L1tzbHVnXS5qcz9iODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9CbG9nUG9zdC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFNsdWcgPSAocHJvcHMpID0+IHtcbiAgLy8gY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIC8vIGNvbnN0IHsgc2x1ZyB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbYmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZShwcm9wcy5CbG9nKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgPGgxPntibG9nICYmIGJsb2cudGl0bGV9PC9oMT5cbiAgICAgIDxociAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nRGV0YWlsc30+e2Jsb2cgJiYgYmxvZy5jb250ZW50fTwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuICBjb25zb2xlLmxvZyhjb250ZXh0LnF1ZXJ5KTtcbiAgY29uc3QgeyBzbHVnIH0gPSBjb250ZXh0LnF1ZXJ5O1xuXG4gIGxldCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvZ2V0YmxvZz9zbHVnPSR7c2x1Z31gKTtcbiAgbGV0IEJsb2cgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBCbG9nIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTbHVnO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJTbHVnIiwicHJvcHMiLCJibG9nIiwic2V0QmxvZyIsIkJsb2ciLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJ0aXRsZSIsImhyIiwiZGl2IiwiYmxvZ0RldGFpbHMiLCJjb250ZW50IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInNsdWciLCJkYXRhIiwiZmV0Y2giLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogpost/[slug].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogpost/[slug].js"));
module.exports = __webpack_exports__;

})();