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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/BlogPost.module.css */ \"./styles/BlogPost.module.css\");\n/* harmony import */ var _styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// Step 1: Find the file corresponding to the slug\n// Step 2: Populate them inside the page\nconst Slug = (props)=>{\n    function createMarkup(c) {\n        return {\n            __html: c\n        };\n    }\n    const { 0: blog , 1: setBlog  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.myBlog);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            className: (_styles_BlogPost_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: blog && blog.title\n                }, void 0, false, {\n                    fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                    lineNumber: 17,\n                    columnNumber: 7\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                    fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                }, undefined),\n                blog && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    dangerouslySetInnerHTML: createMarkup(blog.content)\n                }, void 0, false, {\n                    fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n                    lineNumber: 19,\n                    columnNumber: 16\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n            lineNumber: 16,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/gauravg/Documents/github/Hunting-Bugs/hunting-bugs/pages/blogpost/[slug].js\",\n        lineNumber: 15,\n        columnNumber: 10\n    }, undefined));\n};\nasync function getStaticPaths() {\n    return {\n        paths: [\n            {\n                params: {\n                    slug: 'how-to-learn-flask'\n                }\n            },\n            {\n                params: {\n                    slug: 'how-to-learn-javascript'\n                }\n            },\n            {\n                params: {\n                    slug: 'how-to-learn-nextjs'\n                }\n            }, \n        ],\n        fallback: true // false or 'blocking'\n    };\n}\nasync function getStaticProps(context) {\n    const { slug  } = context.params;\n    let myBlog = await fs__WEBPACK_IMPORTED_MODULE_3__.promises.readFile(`blogdata/${slug}.json`, 'utf-8');\n    return {\n        props: {\n            myBlog: JSON.parse(myBlog)\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slug);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdC9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0Q7QUFDWDtBQUNjO0FBQzdCO0FBRXhCLEVBQWtEO0FBQ2xELEVBQXdDO0FBQ3hDLEtBQUssQ0FBQ00sSUFBSSxJQUFJQyxLQUFLLEdBQUssQ0FBQzthQUNkQyxZQUFZLENBQUNDLENBQUMsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sQ0FBQyxDQUFDO1lBQUNDLE1BQU0sRUFBRUQsQ0FBQztRQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNELEtBQUssTUFBRUUsSUFBSSxNQUFFQyxPQUFPLE1BQUlYLCtDQUFRLENBQUNNLEtBQUssQ0FBQ00sTUFBTTtJQUc3QyxNQUFNLDZFQUFFQyxDQUFHO1FBQUNDLFNBQVMsRUFBRVgsOEVBQWdCOzhGQUNwQ2EsQ0FBSTtZQUFDRixTQUFTLEVBQUVYLHlFQUFXOzs0RkFDekJjLENBQUU7OEJBQUVQLElBQUksSUFBSUEsSUFBSSxDQUFDUSxLQUFLOzs7Ozs7NEZBQ3RCQyxDQUFFOzs7OztnQkFDRlQsSUFBSSxnRkFBS0csQ0FBRztvQkFBQ08sdUJBQXVCLEVBQUViLFlBQVksQ0FBQ0csSUFBSSxDQUFDVyxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUt0RSxDQUFDO0FBRU0sZUFBZUMsY0FBYyxHQUFHLENBQUM7SUFDdEMsTUFBTSxDQUFDLENBQUM7UUFDTkMsS0FBSyxFQUFFLENBQUM7WUFDTixDQUFDO2dCQUFDQyxNQUFNLEVBQUUsQ0FBQztvQkFBQ0MsSUFBSSxFQUFFLENBQW9CO2dCQUFDLENBQUM7WUFBQyxDQUFDO1lBQzFDLENBQUM7Z0JBQUNELE1BQU0sRUFBRSxDQUFDO29CQUFDQyxJQUFJLEVBQUUsQ0FBeUI7Z0JBQUMsQ0FBQztZQUFDLENBQUM7WUFDL0MsQ0FBQztnQkFBQ0QsTUFBTSxFQUFFLENBQUM7b0JBQUNDLElBQUksRUFBRSxDQUFxQjtnQkFBQyxDQUFDO1lBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0RDLFFBQVEsRUFBRSxJQUFJLENBQXVCO0lBQ3ZDLENBQUM7QUFDSCxDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDQyxPQUFPLEVBQUUsQ0FBQztJQUM3QyxLQUFLLENBQUMsQ0FBQyxDQUFDSCxJQUFJLEVBQUMsQ0FBQyxHQUFHRyxPQUFPLENBQUNKLE1BQU07SUFHL0IsR0FBRyxDQUFDWixNQUFNLEdBQUcsS0FBSyxDQUFDUixpREFBb0IsRUFBRSxTQUFTLEVBQUVxQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQU87SUFFeEUsTUFBTSxDQUFDLENBQUM7UUFDTm5CLEtBQUssRUFBRSxDQUFDO1lBQUNNLE1BQU0sRUFBRW1CLElBQUksQ0FBQ0MsS0FBSyxDQUFDcEIsTUFBTTtRQUFFLENBQUM7SUFDdkMsQ0FBQztBQUNILENBQUM7QUFDRCxpRUFBZVAsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaHVudGluZy1idWdzLy4vcGFnZXMvYmxvZ3Bvc3QvW3NsdWddLmpzP2I4OWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0Jsb2dQb3N0Lm1vZHVsZS5jc3MnXG5pbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbi8vIFN0ZXAgMTogRmluZCB0aGUgZmlsZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBzbHVnXG4vLyBTdGVwIDI6IFBvcHVsYXRlIHRoZW0gaW5zaWRlIHRoZSBwYWdlXG5jb25zdCBTbHVnID0gKHByb3BzKSA9PiB7XG4gIGZ1bmN0aW9uIGNyZWF0ZU1hcmt1cChjKSB7XG4gICAgcmV0dXJuIHsgX19odG1sOiBjIH07XG4gIH1cbiAgY29uc3QgW2Jsb2csIHNldEJsb2ddID0gdXNlU3RhdGUocHJvcHMubXlCbG9nKTtcblxuXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICA8aDE+e2Jsb2cgJiYgYmxvZy50aXRsZX08L2gxPlxuICAgICAgPGhyIC8+XG4gICAgICB7YmxvZyAmJiA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXtjcmVhdGVNYXJrdXAoYmxvZy5jb250ZW50KX0+PC9kaXY+fVxuXG5cbiAgICA8L21haW4+XG4gIDwvZGl2Pjtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW1xuICAgICAgeyBwYXJhbXM6IHsgc2x1ZzogJ2hvdy10by1sZWFybi1mbGFzaycgfSB9LFxuICAgICAgeyBwYXJhbXM6IHsgc2x1ZzogJ2hvdy10by1sZWFybi1qYXZhc2NyaXB0JyB9IH0sXG4gICAgICB7IHBhcmFtczogeyBzbHVnOiAnaG93LXRvLWxlYXJuLW5leHRqcycgfSB9LFxuICAgIF0sXG4gICAgZmFsbGJhY2s6IHRydWUgLy8gZmFsc2Ugb3IgJ2Jsb2NraW5nJ1xuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xuICBjb25zdCB7IHNsdWcgfSA9IGNvbnRleHQucGFyYW1zO1xuXG5cbiAgbGV0IG15QmxvZyA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGBibG9nZGF0YS8ke3NsdWd9Lmpzb25gLCAndXRmLTgnKVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgbXlCbG9nOiBKU09OLnBhcnNlKG15QmxvZykgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFNsdWc7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJvdXRlciIsInN0eWxlcyIsImZzIiwiU2x1ZyIsInByb3BzIiwiY3JlYXRlTWFya3VwIiwiYyIsIl9faHRtbCIsImJsb2ciLCJzZXRCbG9nIiwibXlCbG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsImgxIiwidGl0bGUiLCJociIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiY29udGVudCIsImdldFN0YXRpY1BhdGhzIiwicGF0aHMiLCJwYXJhbXMiLCJzbHVnIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJwcm9taXNlcyIsInJlYWRGaWxlIiwiSlNPTiIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/blogpost/[slug].js\n");

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