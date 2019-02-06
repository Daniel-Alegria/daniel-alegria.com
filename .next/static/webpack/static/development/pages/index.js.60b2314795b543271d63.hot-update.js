webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/daniel-alegria.com/components/Navbar.js";


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // TODO: REMEMBER TO REPLACE VARIABLES WITH UTILS
// nav links

var links = [{
  href: '#',
  label: 'Item 1'
}, {
  href: '#',
  label: 'Item 2'
}, {
  href: '#',
  label: 'Item 3'
}, {
  href: '#',
  label: 'Item 4'
}, {
  href: '#',
  label: 'Item 5'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
}); // variables to add:
// - border
// - border-radius
// - light-blue
// - dark-blue
// - light-blue
// - spacer-1
// - spacer-2
// - add margin-right and margin-left

var ClassicNavbar = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__ClassicNavbar",
  componentId: "sc-1wj62en-0"
})(["display:flex;align-items:center;width:100%;height:100%;border:solid 3px #4b4b4b;border-radius:5px;background-color:#3498db;"]);
var NavWrapper = style.nav(_templateObject());
var NavContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__NavContainer",
  componentId: "sc-1wj62en-1"
})(["display:flex;align-items:center;justify-content:space-between;height:100%;width:100%;margin-left:10%;margin-right:10%;"]);
var Brand = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Navbar__Brand",
  componentId: "sc-1wj62en-2"
})(["flex:0 1 auto;display:flex;height:100%;a{display:flex;justify-content:center;align-items:center;padding:0;width:150px;border-radius:5px;&:hover{background-color:#2980b9;cursor:pointer;color:#fafafa;}img{height:auto;width:150px;}"]);
var NavItems = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Navbar__NavItems",
  componentId: "sc-1wj62en-3"
})(["display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-around;align-items:center;height:100%;padding-left:0;padding-right:0;margin-top:0;margin-bottom:0;list-style:none;li{border-radius:5px;margin-right:15px;&:active{background-color:darken(#2980b9,25%);}}a{border-radius:5px;text-decoration:none;color:#4b4b4b;padding:7.5px 15px;transition:all 250ms;&:hover{background-color:#2980b9;cursor:pointer;color:#fafafa;"]);

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ClassicNavbar, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Brand, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://i.imgur.com/6YnTsXz.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NavItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: key,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, label)));
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.60b2314795b543271d63.hot-update.js.map