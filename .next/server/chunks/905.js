"use strict";
exports.id = 905;
exports.ids = [905];
exports.modules = {

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

/***/ 4887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3274);


const OverTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span.withConfig({
    componentId: "sc-e0da1836-0"
})`
  display: block;
  &::before {
    position: relative;
    bottom: -0.1em;
    content: '';
    display: inline-block;
    width: 0.9em;
    height: 0.9em;
    background-color: rgb(var(--primary));
    line-height: 0;
    margin-right: 1em;
  }

  font-size: 1.3rem;
  letter-spacing: 0.02em;
  font-weight: bold;
  line-height: 0;
  text-transform: uppercase;

  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_1__/* .media */ .B)('<=desktop')} {
    line-height: 1.5;
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OverTitle);


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

/***/ 7160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3274);


const ThreeLayersCircle = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
    componentId: "sc-a71c41bd-0"
})`
  position: relative;
  display: inline-block;
  opacity: 0.8;
  width: 5rem;
  height: 5rem;
  border-radius: 100rem;
  background: rgb(${(p)=>p.baseColor
});
  z-index: 0;
  transition: background 0.2s;

  ${(0,utils_media__WEBPACK_IMPORTED_MODULE_1__/* .media */ .B)('<=tablet')} {
    width: 4rem;
    height: 4rem;
  }

  &:after,
  &:before {
    content: '';
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 100rem;
    z-index: -1;
  }

  &:after {
    width: 4rem;
    height: 4rem;
    background: rgb(${(p)=>p.secondColor
});
    z-index: -2;
  }

  &:before {
    width: 2rem;
    height: 2rem;
    background: rgb(${(p)=>p.baseColor
});
  }
`;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThreeLayersCircle);


/***/ }),

/***/ 1431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ EnvVars)
/* harmony export */ });
const EnvVars = {
    SITE_NAME: 'Solid In Tech',
    OG_IMAGES_URL: '',
    URL: ''
};


/***/ }),

/***/ 3274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ media)
/* harmony export */ });
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8135);
/* harmony import */ var css_in_js_media__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_in_js_media__WEBPACK_IMPORTED_MODULE_0__);

const media = (css_in_js_media__WEBPACK_IMPORTED_MODULE_0___default());


/***/ })

};
;