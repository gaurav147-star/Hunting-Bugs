(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 4652:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Blog_main__KCbyI",
	"blogItemh3": "Blog_blogItemh3__06tit",
	"blogItemp": "Blog_blogItemp___AXUJ",
	"btn": "Blog_btn__v45XJ"
};


/***/ }),

/***/ 895:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ blog),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./styles/Blog.module.css
var Blog_module = __webpack_require__(4652);
var Blog_module_default = /*#__PURE__*/__webpack_require__.n(Blog_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(7147);
;// CONCATENATED MODULE: external "react-infinite-scroll-component"
const external_react_infinite_scroll_component_namespaceObject = require("react-infinite-scroll-component");
var external_react_infinite_scroll_component_default = /*#__PURE__*/__webpack_require__.n(external_react_infinite_scroll_component_namespaceObject);
;// CONCATENATED MODULE: ./pages/blog.js






// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them
const Blog = (props)=>{
    const { 0: blogs , 1: setBlogs  } = (0,external_react_.useState)(props.allBlogs);
    const { 0: count , 1: setCount  } = (0,external_react_.useState)(2);
    const fetchData = async ()=>{
        let d = await fetch(`http://localhost:3000/api/blogs/?count=${count + 2}`);
        setCount(count + 2);
        let data = await d.json();
        setBlogs(data);
    };
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: (Blog_module_default()).container,
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            className: (Blog_module_default()).main,
            children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_infinite_scroll_component_default()), {
                dataLength: blogs.length,
                next: fetchData,
                hasMore: props.allCount !== blogs.length,
                loader: /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                    children: "Loading..."
                }),
                endMessage: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    style: {
                        textAlign: 'center'
                    },
                    children: /*#__PURE__*/ jsx_runtime_.jsx("b", {
                        children: "Yay! You have seen it all"
                    })
                }),
                children: blogs.map((blogitem)=>{
                    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/blogpost/${blogitem.slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: (Blog_module_default()).blogItemh3,
                                    children: blogitem.title
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: (Blog_module_default()).blogItemp,
                                children: [
                                    blogitem.metadesc.substr(0, 140),
                                    "..."
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: `/blogpost/${blogitem.slug}`,
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: (Blog_module_default()).btn,
                                    children: "Read More"
                                })
                            })
                        ]
                    }, blogitem.slug));
                })
            })
        })
    }));
};
async function getStaticProps(context) {
    let data = await external_fs_.promises.readdir("blogdata");
    let allCount = data.length;
    let myfile;
    let allBlogs = [];
    for(let index = 0; index < 2; index++){
        const item = data[index];
        myfile = await external_fs_.promises.readFile('blogdata/' + item, 'utf-8');
        allBlogs.push(JSON.parse(myfile));
    }
    return {
        props: {
            allBlogs,
            allCount
        }
    };
}
/* harmony default export */ const blog = (Blog);


/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [730,664], () => (__webpack_exec__(895)));
module.exports = __webpack_exports__;

})();