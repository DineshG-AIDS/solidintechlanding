"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6139:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/2.b988fbc9.png","height":500,"width":500,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAPklEQVR42o3KoQ2EAABD0dczFwQGDJsxAJIBMDgSJmBgVD1PVDQfotIZLWb/XpPL43a0HWx2pxUhVEUEP5+8ZmAEHGSouPYAAAAASUVORK5CYII="});

/***/ }),

/***/ 3032:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ClientOnly)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ClientOnly(props) {
    const { children , ...rest } = props;
    const { 0: hasMounted , 1: setHasMounted  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setHasMounted(true);
    }, []);
    if (!hasMounted) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...rest
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: props.children
    }));
};


/***/ }),

/***/ 7219:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CloseIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9320);


function CloseIcon(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            viewBox: "0 0 24 24",
            focusable: "false",
            "aria-hidden": "true",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                fill: "currentColor",
                d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
            })
        })
    }));
};


/***/ }),

/***/ 2284:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-f1d27b44-0"
})`
  position: relative;
  max-width: 130em;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 215:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _accessible_drawer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7672);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_accessible_drawer__WEBPACK_IMPORTED_MODULE_0__]);
_accessible_drawer__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_accessible_drawer__WEBPACK_IMPORTED_MODULE_0__);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: external "react-share"
const external_react_share_namespaceObject = require("react-share");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(2284);
// EXTERNAL MODULE: ./utils/media.ts
var media = __webpack_require__(3274);
;// CONCATENATED MODULE: ./components/Footer.tsx






const footerItems = [
    {
        title: 'Company',
        items: [
            {
                title: 'Privacy Policy',
                href: '/privacy-policy'
            },
            {
                title: 'Cookies Policy',
                href: '/cookies-policy'
            }, 
        ]
    },
    {
        title: 'Product',
        items: [
            {
                title: 'SAP service',
                href: '/servicesap'
            },
            {
                title: 'Web App development',
                href: '/webapp'
            },
            {
                title: 'Mob App development ',
                href: '/mobileapp'
            }, 
        ]
    },
    {
        title: 'Knowledge',
        items: [
            {
                title: 'Blog',
                href: '/blog'
            },
            {
                title: 'Contact',
                href: '/contact'
            },
            {
                title: 'FAQ',
                href: '/faq'
            },
            {
                title: 'Help Center',
                href: '/help-center'
            }, 
        ]
    }, 
];
function Footer() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(FooterWrapper, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Container/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ListContainer, {
                    children: footerItems.map((singleItem)=>/*#__PURE__*/ jsx_runtime_.jsx(FooterList, {
                            ...singleItem
                        }, singleItem.title)
                    )
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(BottomBar, {
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ShareBar, {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.TwitterIcon, {
                                            size: 50,
                                            round: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.FacebookIcon, {
                                            size: 50,
                                            round: true
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: "/",
                                    passHref: true,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_share_namespaceObject.LinkedinIcon, {
                                            size: 50,
                                            round: true
                                        })
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Copyright, {
                            children: "\xa9 Copyright 2024 Solid In Tech"
                        })
                    ]
                })
            ]
        })
    }));
};
function FooterList({ title , items  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(ListWrapper, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(ListHeader, {
                children: title
            }),
            items.map((singleItem)=>/*#__PURE__*/ jsx_runtime_.jsx(ListItem, {
                    ...singleItem
                }, singleItem.href)
            )
        ]
    }));
}
function ListItem({ title , href  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(ListItemWrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: href,
            passHref: true,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                children: title
            })
        })
    }));
}
const FooterWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-6cf7b093-0"
})`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;
const ListContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-6cf7b093-1"
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const ListHeader = external_styled_components_default().p.withConfig({
    componentId: "sc-6cf7b093-2"
})`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;
const ListWrapper = external_styled_components_default().div.withConfig({
    componentId: "sc-6cf7b093-3"
})`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${(0,media/* media */.B)('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${(0,media/* media */.B)('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;
const ListItemWrapper = external_styled_components_default().p.withConfig({
    componentId: "sc-6cf7b093-4"
})`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;
const ShareBar = external_styled_components_default().div.withConfig({
    componentId: "sc-6cf7b093-5"
})`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;
const Copyright = external_styled_components_default().p.withConfig({
    componentId: "sc-6cf7b093-6"
})`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;
const BottomBar = external_styled_components_default().div.withConfig({
    componentId: "sc-6cf7b093-7"
})`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${(0,media/* media */.B)('<=tablet')} {
    flex-direction: column;
  }
`;


/***/ }),

/***/ 2295:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ GlobalStyle)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

// default breakpoints
// {
//   smallPhone: 320;
//   phone: 375;
//   tablet: 768;
//   desktop: 1024;
//   largeDesktop: 1440;
// }
const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`

.next-light-theme {
  --background: 251,251,253;
  --secondBackground: 255,255,255;
  --text: 10,18,30;
  --textSecondary: 255,255,255;
  --primary: 22,115,255; 
  --secondary: 10,18,30;
  --tertiary: 231,241,251;
  --cardBackground: 255,255,255;
  --inputBackground: 255,255,255;
  --navbarBackground: 255,255,255;
  --modalBackground: 251,251,253;
  --errorColor: 207,34,46;
  --logoColor: #243A5A;
}

.next-dark-theme {
  --background: 26,32,44;
  --secondBackground: 45,55,72;
  --text: 237,237,238;
  --textSecondary: 255,255,255;
  --primary: 22,115,255; 
  --secondary: 10,18,30;
  --tertiary: 231,241,251;
  --cardBackground: 45,55,72;
  --inputBackground: 45,55,72;
  --navbarBackground: 45,55,72;
  --modalBackground: 26,32,44;
  --errorColor: 207,34,46;
  --logoColor: #fff;
}

:root {
  --font: 'Poppins', sans-serif;
  
  --shadow-md: 0 2px 4px 0 rgb(12 0 46 / 4%);
  --shadow-lg: 0 10px 14px 0 rgb(12 0 46 / 6%);

  --z-sticky: 7777;
  --z-navbar: 8888;
  --z-drawer: 9999;
  --z-modal: 9999;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}


/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
} 

html {
  -webkit-font-smoothing: antialiased;
  touch-action: manipulation;
  text-rendering: optimizelegibility;
  text-size-adjust: 100%;
  font-size: 62.5%;

  @media (max-width: 37.5em) {
    font-size: 50%;
  }

  @media (max-width: 48.0625em) {
    font-size: 55%;
  }

  @media (max-width: 56.25em) {
    font-size: 60%;
  }
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
  font-family: var(--font);
  color: rgb(var(--text));
  background: rgb(var(--background));
  font-feature-settings: "kern";
}

svg {
  color: rgb(var(--text));
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

}`;


/***/ }),

/***/ 5886:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ HamburgerIcon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9320);


function HamburgerIcon(props) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Icon__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
            viewBox: "0 0 1024 1024",
            "aria-hidden": "true",
            focusable: "false",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"
            })
        })
    }));
}


/***/ }),

/***/ 9320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Icon)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);



function Icon({ _ref , ...rest }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(IconWrapper, {
        type: "button",
        ...rest,
        ..._ref && {
            ref: _ref
        }
    }));
};
const IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().button.withConfig({
    componentId: "sc-51760da4-0"
})`
  border: none;
  background-color: transparent;
  width: 4rem;
`;


/***/ }),

/***/ 4276:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3130);
/* harmony import */ var hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(195);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3274);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(570);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2284);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(215);
/* harmony import */ var _HamburgerIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5886);
/* harmony import */ var _public_2_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6139);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5675);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Drawer__WEBPACK_IMPORTED_MODULE_11__]);
_Drawer__WEBPACK_IMPORTED_MODULE_11__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













// import Logo from './Logo';


const ColorSwitcher = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "../components/Navbar.tsx -> " + "../components/ColorSwitcher"
        ]
    },
    ssr: false
});
function Navbar({ items  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { toggle  } = _Drawer__WEBPACK_IMPORTED_MODULE_11__/* ["default"].useDrawer */ .Z.useDrawer();
    const { 0: scrollingDirection , 1: setScrollingDirection  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('none');
    let lastScrollY = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(0);
    const lastRoute = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)('');
    const stepSize = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(50);
    (0,hooks_useScrollPosition__WEBPACK_IMPORTED_MODULE_7__/* .useScrollPosition */ .R)(scrollPositionCallback, [
        router.asPath
    ], undefined, undefined, 50);
    function scrollPositionCallback({ currPos  }) {
        const routerPath = router.asPath;
        const hasRouteChanged = routerPath !== lastRoute.current;
        if (hasRouteChanged) {
            lastRoute.current = routerPath;
            setScrollingDirection('none');
            return;
        }
        const currentScrollY = currPos.y;
        const isScrollingUp = currentScrollY > lastScrollY.current;
        const scrollDifference = Math.abs(lastScrollY.current - currentScrollY);
        const hasScrolledWholeStep = scrollDifference >= stepSize.current;
        const isInNonCollapsibleArea = lastScrollY.current > -50;
        if (isInNonCollapsibleArea) {
            setScrollingDirection('none');
            lastScrollY.current = currentScrollY;
            return;
        }
        if (!hasScrolledWholeStep) {
            lastScrollY.current = currentScrollY;
            return;
        }
        setScrollingDirection(isScrollingUp ? 'up' : 'down');
        lastScrollY.current = currentScrollY;
    }
    const isNavbarHidden = scrollingDirection === 'down';
    const isTransparent = scrollingDirection === 'none';
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavbarContainer, {
        hidden: isNavbarHidden,
        transparent: isTransparent,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    href: "/",
                    passHref: true,
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(LogoWrapper, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_14__["default"], {
                                alt: "Logo",
                                src: _public_2_png__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,
                                width: 120,
                                height: 120
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LogoWrapperForText, {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "Solid In Tech"
                                })
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItemList, {
                    children: items.map((singleItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                            ...singleItem
                        }, singleItem.href)
                    )
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorSwitcherContainer, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ColorSwitcher, {})
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(HamburgerMenuWrapper, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_HamburgerIcon__WEBPACK_IMPORTED_MODULE_12__/* .HamburgerIcon */ .U, {
                        "aria-label": "Toggle menu",
                        onClick: toggle
                    })
                })
            ]
        })
    }));
};
function NavItem({ href , title , outlined  }) {
    const { setIsModalOpened  } = (0,contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_6__/* .useNewsletterModalContext */ .rd)();
    function showNewsletterModal() {
        setIsModalOpened(true);
    }
    if (outlined) {
        return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomButton, {
            onClick: showNewsletterModal,
            children: title
        }));
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItemWrapper, {
        outlined: outlined,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: href,
            passHref: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                children: title
            })
        })
    }));
}
const CustomButton = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Button__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a849bb8c-0"
})`
  padding: 0.75rem 1.5rem;
  line-height: 1.8;
`;
const NavItemList = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-a849bb8c-1"
})`
  display: flex;
  list-style: none;

  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('<desktop')} {
    display: none;
  }
`;
const HamburgerMenuWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-a849bb8c-2"
})`
  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('>=desktop')} {
    display: none;
  }
`;
const LogoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().a.withConfig({
    componentId: "sc-a849bb8c-3"
})`
  display: flex;
  align-items: center;
  margin-right: auto;
  text-decoration: none;
  color: rgb(var(--logoColor));
  padding-top:15px;
  gap: 0.5rem;
  margin-top:12px;
`;
const LogoWrapperForText = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-a849bb8c-4"
})`
  font-size: 2rem;
  font-weight: bold;
  margin-top:-35px;
  margin-left:-25px;
`;
const NavItemWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default().li.withConfig({
    componentId: "sc-a849bb8c-5"
})`
  background-color: ${(p)=>p.outlined ? 'rgb(var(--primary))' : 'transparent'
};
  border-radius: 0.5rem;
  font-size: 1.3rem;
  text-transform: uppercase;
  line-height: 2;

  &:hover {
    background-color: ${(p)=>p.outlined ? 'rgb(var(--primary), 0.8)' : 'transparent'
};
    transition: background-color 0.2s;
  }

  a {
    display: flex;
    color: ${(p)=>p.outlined ? 'rgb(var(--textSecondary))' : 'rgb(var(--text), 0.75)'
};
    letter-spacing: 0.025em;
    text-decoration: none;
    padding: 0.75rem 1.5rem;
    font-weight: 700;
  }

  &:not(:last-child) {
    margin-right: 2rem;
  }
`;
const NavbarContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-a849bb8c-6"
})`
  display: flex;
  position: sticky;
  top: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 8rem;
  z-index: var(--z-navbar);

  background-color: rgb(var(--navbarBackground));
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  visibility: ${(p)=>p.hidden ? 'hidden' : 'visible'
};
  transform: ${(p)=>p.hidden ? `translateY(-8rem) translateZ(0) scale(1)` : 'translateY(0) translateZ(0) scale(1)'
};

  transition-property: transform, visibility, height, box-shadow, background-color;
  transition-duration: 0.15s;
  transition-timing-function: ease-in-out;
`;
const Content = styled_components__WEBPACK_IMPORTED_MODULE_5___default()(_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z).withConfig({
    componentId: "sc-a849bb8c-7"
})`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
const ColorSwitcherContainer = styled_components__WEBPACK_IMPORTED_MODULE_5___default().div.withConfig({
    componentId: "sc-a849bb8c-8"
})`
  width: 4rem;
  margin: 0 1rem;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6236:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ NavigationDrawer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ClientOnly__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3032);
/* harmony import */ var _CloseIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7219);
/* harmony import */ var _Drawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(215);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Drawer__WEBPACK_IMPORTED_MODULE_7__]);
_Drawer__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function NavigationDrawer({ children , items  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Drawer */ .Z.Drawer, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Wrapper, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ClientOnly__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].Target */ .Z.Target, {
                        openClass: "drawer-opened",
                        closedClass: "drawer-closed",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "my-drawer",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "my-drawer-container",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DrawerCloseButton, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItemsList, {
                                        items: items
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            children
        ]
    }));
};
function NavItemsList({ items  }) {
    const { close  } = _Drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useDrawer */ .Z.useDrawer();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        function handleRouteChangeComplete() {
            close();
        }
        router.events.on('routeChangeComplete', handleRouteChangeComplete);
        return ()=>router.events.off('routeChangeComplete', handleRouteChangeComplete)
        ;
    }, [
        close,
        router
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        children: items.map((singleItem, idx)=>{
            return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    href: singleItem.href,
                    children: singleItem.title
                })
            }, idx));
        })
    }));
}
function DrawerCloseButton() {
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const a11yProps = _Drawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"].useA11yCloseButton */ .Z.useA11yCloseButton(ref);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CloseIcon__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
        className: "close-icon",
        _ref: ref,
        ...a11yProps
    }));
}
const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default().div.withConfig({
    componentId: "sc-a8229387-0"
})`
  .my-drawer {
    width: 100%;
    height: 100%;
    z-index: var(--z-drawer);
    background: rgb(var(--background));
    transition: margin-left 0.3s cubic-bezier(0.82, 0.085, 0.395, 0.895);
    overflow: hidden;
  }

  .my-drawer-container {
    position: relative;
    height: 100%;
    margin: auto;
    max-width: 70rem;
    padding: 0 1.2rem;
  }

  .close-icon {
    position: absolute;
    right: 2rem;
    top: 2rem;
  }

  .drawer-closed {
    margin-left: -100%;
  }

  .drawer-opened {
    margin-left: 0;
  }

  ul {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    list-style: none;

    & > *:not(:last-child) {
      margin-bottom: 3rem;
    }
  }
`;
const NavItem = styled_components__WEBPACK_IMPORTED_MODULE_4___default().li.withConfig({
    componentId: "sc-a8229387-1"
})`
  a {
    font-size: 3rem;
    text-transform: uppercase;
    display: block;
    color: currentColor;
    text-decoration: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    text-align: center;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7591:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ NewsletterModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(4409);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./utils/media.ts
var media = __webpack_require__(3274);
// EXTERNAL MODULE: ./components/Button.tsx
var Button = __webpack_require__(570);
// EXTERNAL MODULE: ./components/CloseIcon.tsx
var CloseIcon = __webpack_require__(7219);
// EXTERNAL MODULE: ./components/Container.tsx
var Container = __webpack_require__(2284);
// EXTERNAL MODULE: ./components/Input.tsx
var Input = __webpack_require__(3034);
// EXTERNAL MODULE: ./components/MailSentState.tsx
var MailSentState = __webpack_require__(89);
;// CONCATENATED MODULE: ./components/Overlay.tsx

const Overlay = external_styled_components_default().div.withConfig({
    componentId: "sc-d8d84135-0"
})`
  position: fixed;
  inset: 0;
  background: rgba(var(--secondary), 0.997);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: var(--z-modal);
  color: rgb(var(--textSecondary));
`;
/* harmony default export */ const components_Overlay = (Overlay);

;// CONCATENATED MODULE: ./components/NewsletterModal.tsx











function NewsletterModal({ onClose  }) {
    const { 0: hasSuccessfullySentMail , 1: setHasSuccessfullySentMail  } = (0,external_react_.useState)(false);
    const { 0: hasErrored , 1: setHasErrored  } = (0,external_react_.useState)(false);
    const { register , handleSubmit , formState  } = (0,external_react_hook_form_.useForm)();
    const { isSubmitSuccessful , isSubmitting , isSubmitted , errors  } = formState;
    async function onSubmit(payload) {
        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    subject: 'Email from contact form',
                    ...payload
                })
            });
            if (res.status !== 204) {
                setHasErrored(true);
            } else {
                setHasSuccessfullySentMail(true);
            }
        } catch  {
            setHasErrored(true);
        }
    }
    const isSent = isSubmitSuccessful && isSubmitted;
    const isDisabled = isSubmitting || isSent;
    const isSubmitDisabled = Object.keys(errors).length > 0 || isDisabled;
    return(/*#__PURE__*/ jsx_runtime_.jsx(components_Overlay, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Container/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card, {
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CloseIconContainer, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(CloseIcon/* default */.Z, {
                            onClick: onClose
                        })
                    }),
                    hasSuccessfullySentMail && /*#__PURE__*/ jsx_runtime_.jsx(MailSentState/* default */.Z, {}),
                    !hasSuccessfullySentMail && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Title, {
                                children: "Contact Us"
                            }),
                            hasErrored && /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                                children: "Couldnt send email. Please try again."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputGroup, {
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputStack, {
                                        children: [
                                            errors.name && /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                                                children: "Name is required"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                                placeholder: "Your Name",
                                                id: "name",
                                                disabled: isDisabled,
                                                ...register('name', {
                                                    required: true
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputStack, {
                                        children: [
                                            errors.email && /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                                                children: "Email is required"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                                placeholder: "Your Email",
                                                id: "email",
                                                disabled: isDisabled,
                                                ...register('email', {
                                                    required: true
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputStack, {
                                children: [
                                    errors.mobile && /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                                        children: "Mobile number is required"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* default */.Z, {
                                        placeholder: "Your Mobile Number",
                                        id: "mobile",
                                        type: "tel",
                                        disabled: isDisabled,
                                        ...register('mobile', {
                                            required: true,
                                            pattern: /^[0-9]{10}$/
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(InputStack, {
                                children: [
                                    errors.description && /*#__PURE__*/ jsx_runtime_.jsx(ErrorMessage, {
                                        children: "Description is required"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Textarea, {
                                        as: "textarea",
                                        placeholder: "Enter Your Message...",
                                        id: "description",
                                        disabled: isDisabled,
                                        ...register('description', {
                                            required: true
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                                as: "button",
                                type: "submit",
                                disabled: isSubmitDisabled,
                                children: "Send Message"
                            })
                        ]
                    })
                ]
            })
        })
    }));
};
const Card = external_styled_components_default().form.withConfig({
    componentId: "sc-f305859e-0"
})`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: auto;
  padding: 10rem 5rem;
  background: rgb(var(--modalBackground));
  border-radius: 0.6rem;
  max-width: 70rem;
  overflow: hidden;
  color: rgb(var(--text));

  ${(0,media/* media */.B)('<=tablet')} {
    padding: 7.5rem 2.5rem;
  }
`;
const CloseIconContainer = external_styled_components_default().div.withConfig({
    componentId: "sc-f305859e-1"
})`
  position: absolute;
  right: 2rem;
  top: 2rem;

  svg {
    cursor: pointer;
    width: 2rem;
  }
`;
const Title = external_styled_components_default().div.withConfig({
    componentId: "sc-f305859e-2"
})`
  font-size: 3.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;
  color: rgb(var(--text));

  ${(0,media/* media */.B)('<=tablet')} {
    font-size: 2.6rem;
  }
`;
const ErrorMessage = external_styled_components_default().p.withConfig({
    componentId: "sc-f305859e-3"
})`
  color: rgb(var(--errorColor));
  font-size: 1.5rem;
  margin: 1rem 0;
  text-align: center;
`;
const InputGroup = external_styled_components_default().div.withConfig({
    componentId: "sc-f305859e-4"
})`
  display: flex;
  align-items: center;

  & > *:first-child {
    margin-right: 2rem;
  }

  & > * {
    flex: 1;
  }

  ${(0,media/* media */.B)('<=tablet')} {
    flex-direction: column;
    & > *:first-child {
      margin-right: 0rem;
      margin-bottom: 2rem;
    }
  }
`;
const InputStack = external_styled_components_default().div.withConfig({
    componentId: "sc-f305859e-5"
})`
  display: flex;
  flex-direction: column;

  & > *:not(:first-child) {
    margin-top: 0.5rem;
  }
`;
const Textarea = external_styled_components_default()(Input/* default */.Z).withConfig({
    componentId: "sc-f305859e-6"
})`
  width: 100%;
  min-height: 20rem;
`;


/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3274);


const SectionTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-2658e253-0"
})`
  font-size: 5.2rem;
  font-weight: bold;
  line-height: 1.1;
  letter-spacing: -0.03em;
  text-align: center;

  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_1__/* .media */ .B)('<=tablet')} {
    font-size: 4.6rem;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionTitle);


/***/ }),

/***/ 8778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ WaveCta)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(570);
/* harmony import */ var components_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3353);
/* harmony import */ var components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2284);
/* harmony import */ var components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(619);
/* harmony import */ var contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3130);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3274);









function WaveCta() {
    const { setIsModalOpened  } = (0,contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_7__/* .useNewsletterModalContext */ .rd)();
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 1440 320",
                preserveAspectRatio: "none",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                    fill: "#0A121E",
                    fillOpacity: "1",
                    d: "M0,64L80,58.7C160,53,320,43,480,80C640,117,800,203,960,197.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CtaWrapper, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Container__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Title, {
                            children: "Stay Updated with Our Latest Insights and Features"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(CustomButtonGroup, {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    onClick: ()=>setIsModalOpened(true)
                                    ,
                                    children: [
                                        "Join Our Newsletter ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "→"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__["default"], {
                                    href: "/servicesap",
                                    passHref: true,
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(OutlinedButton, {
                                        transparent: true,
                                        children: [
                                            "Explore Features ",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "→"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    }));
};
const CtaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default().div.withConfig({
    componentId: "sc-3f708c03-0"
})`
  background: rgb(var(--secondary));
  margin-top: -1rem;
  padding-bottom: 16rem;

  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_8__/* .media */ .B)('<=tablet')} {
    padding-top: 8rem;
  }
`;
const Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(components_SectionTitle__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z).withConfig({
    componentId: "sc-3f708c03-1"
})`
  color: rgb(var(--textSecondary));
  margin-bottom: 4rem;
`;
const OutlinedButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z).withConfig({
    componentId: "sc-3f708c03-2"
})`
  border: 1px solid rgb(var(--textSecondary));
  color: rgb(var(--textSecondary));
`;
const CustomButtonGroup = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(components_ButtonGroup__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z).withConfig({
    componentId: "sc-3f708c03-3"
})`
  justify-content: center;
`;


/***/ }),

/***/ 195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ useScrollPosition)
});

;// CONCATENATED MODULE: external "@n8tb1t/use-scroll-position"
const use_scroll_position_namespaceObject = require("@n8tb1t/use-scroll-position");
;// CONCATENATED MODULE: ./hooks/useScrollPosition.ts

function useScrollPosition(effect, deps, element, useWindow, wait, boundingElement) {
    return (0,use_scroll_position_namespaceObject.useScrollPosition)(effect, deps, element, useWindow, wait, boundingElement);
}


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var nextjs_color_mode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9918);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var tinacms_dist_edit_state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6161);
/* harmony import */ var tinacms_dist_edit_state__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tinacms_dist_edit_state__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2422);
/* harmony import */ var components_GlobalStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2295);
/* harmony import */ var components_Navbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4276);
/* harmony import */ var components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6236);
/* harmony import */ var components_NewsletterModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7591);
/* harmony import */ var components_WaveCta__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8778);
/* harmony import */ var contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(3130);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Navbar__WEBPACK_IMPORTED_MODULE_8__, components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_9__]);
([components_Navbar__WEBPACK_IMPORTED_MODULE_8__, components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const navItems = [
    {
        title: 'SAP CPI Services',
        href: '/servicesap'
    },
    {
        title: 'WebPage development',
        href: '/webapp'
    },
    {
        title: 'Mobile App',
        href: '/mobileapp'
    },
    {
        title: 'Contact Us',
        href: '/contact'
    }, 
];
const TinaCMS = (0,next_dynamic__WEBPACK_IMPORTED_MODULE_1__["default"])(null, {
    loadableGenerated: {
        modules: [
            "_app.tsx -> " + "tinacms"
        ]
    },
    ssr: false
});
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.googleapis.com"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "preconnect",
                        href: "https://fonts.gstatic.com",
                        crossOrigin: ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        type: "image/png",
                        href: "/favicon.png"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(nextjs_color_mode__WEBPACK_IMPORTED_MODULE_3__/* .ColorModeScript */ .ZQ, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_GlobalStyles__WEBPACK_IMPORTED_MODULE_7__/* .GlobalStyle */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Providers, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Modals, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Navbar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                        items: navItems
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(tinacms_dist_edit_state__WEBPACK_IMPORTED_MODULE_5__.TinaEditProvider, {
                        editMode: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(TinaCMS, {
                            query: pageProps.query,
                            variables: pageProps.variables,
                            data: pageProps.data,
                            isLocalClient: !process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
                            branch: process.env.NEXT_PUBLIC_EDIT_BRANCH,
                            clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
                            ...pageProps,
                            children: (livePageProps)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...livePageProps
                                })
                        }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_WaveCta__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Footer__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                ]
            })
        ]
    }));
}
function Providers({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_12__/* .NewsletterModalContextProvider */ .mR, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NavigationDrawer__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
            items: navItems,
            children: children
        })
    }));
}
function Modals() {
    const { isModalOpened , setIsModalOpened  } = (0,contexts_newsletter_modal_context__WEBPACK_IMPORTED_MODULE_12__/* .useNewsletterModalContext */ .rd)();
    if (!isModalOpened) {
        return null;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_NewsletterModal__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
        onClose: ()=>setIsModalOpened(false)
    }));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ media)
/* harmony export */ });
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_0__);

const media = (css_in_js_media__WEBPACK_IMPORTED_MODULE_0___default());


/***/ }),

/***/ 8135:
/***/ ((module) => {

module.exports = require("css-in-js-media");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 4409:
/***/ ((module) => {

module.exports = require("react-hook-form");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 6161:
/***/ ((module) => {

module.exports = require("tinacms/dist/edit-state");

/***/ }),

/***/ 7672:
/***/ ((module) => {

module.exports = import("@accessible/drawer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,664,733,996,739], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();