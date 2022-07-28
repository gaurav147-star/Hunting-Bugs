(() => {
var exports = {};
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 821:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "BlogPost_main___fHoC",
	"container": "BlogPost_container__R5l2X"
};


/***/ }),

/***/ 7769:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _slug_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./styles/BlogPost.module.css
var BlogPost_module = __webpack_require__(821);
var BlogPost_module_default = /*#__PURE__*/__webpack_require__.n(BlogPost_module);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: ./pages/blogpost/[slug].js





// Step 1: Find the file corresponding to the slug
// Step 2: Populate them inside the page
const Slug = (props)=>{
    function createMarkup(c) {
        return {
            __html: c
        };
    }
    const { 0: blog , 1: setBlog  } = (0,external_react_.useState)(props.myBlog);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (BlogPost_module_default()).container,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
            className: (BlogPost_module_default()).main,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: blog && blog.title
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {}),
                blog && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    dangerouslySetInnerHTML: createMarkup(blog.content)
                })
            ]
        })
    }));
};
async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    slug: 'how-to-learn-flask'
                }
            },
            {
                params: {
                    slug: 'how-to-learn-javascript'
                }
            },
            {
                params: {
                    slug: 'how-to-learn-nextjs'
                }
            }, 
        ],
        fallback: true // false or 'blocking'
    };
}
async function getStaticProps(context) {
    const { slug  } = context.params;
    let myBlog = await external_fs_.promises.readFile(`blogdata/${slug}.json`, 'utf-8');
    return {
        props: {
            myBlog: JSON.parse(myBlog)
        }
    };
}
/* harmony default export */ const _slug_ = (Slug);


/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7147:
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
var __webpack_exports__ = (__webpack_exec__(7769));
module.exports = __webpack_exports__;

})();