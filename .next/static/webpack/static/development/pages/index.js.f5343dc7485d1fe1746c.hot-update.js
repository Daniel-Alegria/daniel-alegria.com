webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProjectCard.js":
/*!***********************************!*\
  !*** ./components/ProjectCard.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/portfolio/components/ProjectCard.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  height: 150px;\n  width: 150px;\n\n  border: solid 3px #4b4b4b;\n  border-radius: 5px;\n  display: flex;\n  flex-direction: column;\n\n  a {\n    width: 100px;\n    height: 100px;\n  }\n  im\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var StyledCard = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

function ProjectCard(_ref) {
  var title = _ref.title,
      date = _ref.date,
      image = _ref.image,
      excerpt = _ref.excerpt,
      url = _ref.url;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledCard, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, title));
}

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ })

})
//# sourceMappingURL=index.js.f5343dc7485d1fe1746c.hot-update.js.map