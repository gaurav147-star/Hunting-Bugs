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

eval("// Exports\nmodule.exports = {\n\t\"main\": \"BlogPost_main___fHoC\",\n\t\"container\": \"BlogPost_container__R5l2X\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvQmxvZ1Bvc3QubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVudGluZy1idWdzLy4vc3R5bGVzL0Jsb2dQb3N0Lm1vZHVsZS5jc3M/MDYwYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiQmxvZ1Bvc3RfbWFpbl9fX2ZIb0NcIixcblx0XCJjb250YWluZXJcIjogXCJCbG9nUG9zdF9jb250YWluZXJfX1I1bDJYXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/BlogPost.module.css\n");

/***/ }),

/***/ "./pages/blogpost/[slug].js":
/*!**********************************!*\
  !*** ./pages/blogpost/[slug].js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/BlogPost.module.css */ \"./styles/BlogPost.module.css\");\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// Step 1: Find the file corresponding to the slug\n// Step 2: Populate them inside the page\nconst Slug = (props)=>{\n    function createMarkup(c) {\n        return {\n            __html: c\n        };\n    }\n    const { 0: blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.myBlog);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: blog && blog.title\n                }, void 0, false, {\n                    fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined),\n                blog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: createMarkup(blog.content)\n                }, void 0, false, {\n                    fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n            lineNumber: 16,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, undefined);\n};\nasync function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    slug: \"how-to-learn-flask\"\n                }\n            },\n            {\n                params: {\n                    slug: \"how-to-learn-javascript\"\n                }\n            },\n            {\n                params: {\n                    slug: \"how-to-learn-nextjs\"\n                }\n            }, \n        ],\n        fallback: true // false or 'blocking'\n    };\n}\nasync function getStaticProps(context) {\n    const { slug  } = context.params;\n    let myBlog = await fs__WEBPACK_IMPORTED_MODULE_3__.promises.readFile(`blogdata/${slug}.json`, \"utf-8\");\n    return {\n        props: {\n            myBlog: JSON.parse(myBlog)\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW1EO0FBQ1o7QUFDYztBQUM1QjtBQUV6QixrREFBa0Q7QUFDbEQsd0NBQXdDO0FBQ3hDLE1BQU1NLElBQUksR0FBRyxDQUFDQyxLQUFLLEdBQUs7SUFDdEIsU0FBU0MsWUFBWSxDQUFDQyxDQUFDLEVBQUU7UUFDdkIsT0FBTztZQUFDQyxNQUFNLEVBQUVELENBQUM7U0FBQyxDQUFDO0tBQ3BCO0lBQ0QsTUFBTSxLQUFDRSxJQUFJLE1BQUVDLE9BQU8sTUFBSVgsK0NBQVEsQ0FBQ00sS0FBSyxDQUFDTSxNQUFNLENBQUM7SUFHOUMscUJBQU8sOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFWCw4RUFBZ0I7a0JBQ3JDLDRFQUFDYSxNQUFJO1lBQUNGLFNBQVMsRUFBRVgseUVBQVc7OzhCQUMxQiw4REFBQ2MsSUFBRTs4QkFBRVAsSUFBSSxJQUFJQSxJQUFJLENBQUNRLEtBQUs7Ozs7OzZCQUFNOzhCQUM3Qiw4REFBQ0MsSUFBRTs7Ozs2QkFBRztnQkFDSlQsSUFBSSxrQkFBSSw4REFBQ0csS0FBRztvQkFBQ08sdUJBQXVCLEVBQUViLFlBQVksQ0FBQ0csSUFBSSxDQUFDVyxPQUFPLENBQUM7Ozs7OzZCQUFROzs7Ozs7cUJBR3JFOzs7OztpQkFDSCxDQUFDO0NBQ1I7QUFFTSxlQUFlQyxjQUFjLEdBQUc7SUFDckMsT0FBTztRQUNMQyxLQUFLLEVBQUU7WUFDTDtnQkFBRUMsTUFBTSxFQUFFO29CQUFFQyxJQUFJLEVBQUUsb0JBQW9CO2lCQUFDO2FBQUU7WUFDekM7Z0JBQUVELE1BQU0sRUFBRTtvQkFBRUMsSUFBSSxFQUFFLHlCQUF5QjtpQkFBQzthQUFFO1lBQzlDO2dCQUFFRCxNQUFNLEVBQUU7b0JBQUVDLElBQUksRUFBRSxxQkFBcUI7aUJBQUM7YUFBRTtTQUMzQztRQUNEQyxRQUFRLEVBQUUsSUFBSSxDQUFDLHNCQUFzQjtLQUN0QyxDQUFDO0NBQ0g7QUFFTSxlQUFlQyxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNLEVBQUVILElBQUksR0FBRSxHQUFHRyxPQUFPLENBQUNKLE1BQU07SUFHL0IsSUFBSVosTUFBTSxHQUFHLE1BQU1SLGlEQUFvQixDQUFDLENBQUMsU0FBUyxFQUFFcUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFDLE9BQU8sQ0FBQztJQUV4RSxPQUFPO1FBQ0xuQixLQUFLLEVBQUU7WUFBRU0sTUFBTSxFQUFFbUIsSUFBSSxDQUFDQyxLQUFLLENBQUNwQixNQUFNLENBQUM7U0FBRTtLQUN0QztDQUNGO0FBQ0QsaUVBQWVQLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2h1bnRpbmctYnVncy8uL3BhZ2VzL2Jsb2dwb3N0L1tzbHVnXS5qcz9iODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy9CbG9nUG9zdC5tb2R1bGUuY3NzJ1xuaW1wb3J0ICogYXMgZnMgZnJvbSAnZnMnO1xuXG4vLyBTdGVwIDE6IEZpbmQgdGhlIGZpbGUgY29ycmVzcG9uZGluZyB0byB0aGUgc2x1Z1xuLy8gU3RlcCAyOiBQb3B1bGF0ZSB0aGVtIGluc2lkZSB0aGUgcGFnZVxuY29uc3QgU2x1ZyA9IChwcm9wcykgPT4ge1xuICBmdW5jdGlvbiBjcmVhdGVNYXJrdXAoYykge1xuICAgIHJldHVybiB7X19odG1sOiBjfTtcbiAgfVxuICBjb25zdCBbYmxvZywgc2V0QmxvZ10gPSB1c2VTdGF0ZShwcm9wcy5teUJsb2cpO1xuXG5cbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxoMT57YmxvZyAmJiBibG9nLnRpdGxlfTwvaDE+XG4gICAgICA8aHIgLz5cbiAgICAgIHsgYmxvZyAmJiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAoYmxvZy5jb250ZW50KX0+PC9kaXY+fVxuICAgICAgXG4gICAgICBcbiAgICA8L21haW4+XG4gIDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW1xuICAgICAgeyBwYXJhbXM6IHsgc2x1ZzogJ2hvdy10by1sZWFybi1mbGFzayd9IH0sXG4gICAgICB7IHBhcmFtczogeyBzbHVnOiAnaG93LXRvLWxlYXJuLWphdmFzY3JpcHQnfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgc2x1ZzogJ2hvdy10by1sZWFybi1uZXh0anMnfSB9LFxuICAgIF0sXG4gICAgZmFsbGJhY2s6IHRydWUgLy8gZmFsc2Ugb3IgJ2Jsb2NraW5nJ1xuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkgeyAgXG4gIGNvbnN0IHsgc2x1ZyB9ID0gY29udGV4dC5wYXJhbXM7XG5cblxuICBsZXQgbXlCbG9nID0gYXdhaXQgZnMucHJvbWlzZXMucmVhZEZpbGUoYGJsb2dkYXRhLyR7c2x1Z30uanNvbmAsJ3V0Zi04JylcbiAgICAgIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IG15QmxvZzogSlNPTi5wYXJzZShteUJsb2cpIH0sIC8vIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBTbHVnO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJmcyIsIlNsdWciLCJwcm9wcyIsImNyZWF0ZU1hcmt1cCIsImMiLCJfX2h0bWwiLCJibG9nIiwic2V0QmxvZyIsIm15QmxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJoMSIsInRpdGxlIiwiaHIiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsImNvbnRlbnQiLCJnZXRTdGF0aWNQYXRocyIsInBhdGhzIiwicGFyYW1zIiwic2x1ZyIsImZhbGxiYWNrIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwicHJvbWlzZXMiLCJyZWFkRmlsZSIsIkpTT04iLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blogpost/[slug].js\n");

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

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

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