webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Content.js":
/*!*******************************!*\
  !*** ./components/Content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectCard */ "./components/ProjectCard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/portfolio/components/Content.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Showcase = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
console.log("ekk80296xyez");
console.log("LVoIUq_OCNL81O5jAochRy8CHYiAJazAoyh98esDlV8"); // create a Contentful client to provide access to helper methods for retreiving data from Contentful

var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "ekk80296xyez",
  accessToken: "LVoIUq_OCNL81O5jAochRy8CHYiAJazAoyh98esDlV8"
}); // this function retreives and displays our content from Contentful


function Content() {
  function fetchContentTypes() {
    return _fetchContentTypes.apply(this, arguments);
  }

  function _fetchContentTypes() {
    _fetchContentTypes = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var types;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.getContentTypes();

            case 2:
              types = _context2.sent;

              if (!types.items) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", types.items);

            case 5:
              console.log("Error getting Content Types.");

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchContentTypes.apply(this, arguments);
  }

  function fetchEntriesForContentType(_x) {
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  function _fetchEntriesForContentType() {
    _fetchEntriesForContentType = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(contentType) {
      var entries;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.getEntries({
                content_type: contentType.sys.id
              });

            case 2:
              entries = _context3.sent;

              if (!entries.items) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      projects = _useState2[0],
      setProjects = _useState2[1]; // use above async functions to retreive content on initial load


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    function getProjects() {
      return _getProjects.apply(this, arguments);
    }

    function _getProjects() {
      _getProjects = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var contentTypes, allProjects;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchContentTypes();

              case 2:
                contentTypes = _context.sent;
                _context.next = 5;
                return fetchEntriesForContentType(contentTypes[0]);

              case 5:
                allProjects = _context.sent;
                setProjects(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allProjects));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getProjects.apply(this, arguments);
    }

    getProjects();
  }, []);
  console.log(projects.map(function (p) {
    return p.fields;
  })); // when content is retreived, the fields are mapped over to be displayed by our component

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, projects.length > 0 ? projects.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ProjectCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: p.fields.title // image has fields of it's own
      ,
      image: p.fields.image.fields.file.url,
      url: p.fields.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    });
  }) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ }),

/***/ "./components/content.js":
/*!*******************************!*\
  !*** ./components/content.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectCard */ "./components/ProjectCard.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");





var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/portfolio/components/content.js";


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Showcase = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject());
console.log("ekk80296xyez");
console.log("LVoIUq_OCNL81O5jAochRy8CHYiAJazAoyh98esDlV8"); // create a Contentful client to provide access to helper methods for retreiving data from Contentful

var client = __webpack_require__(/*! contentful */ "./node_modules/contentful/dist/es-modules/contentful.js").createClient({
  space: "ekk80296xyez",
  accessToken: "LVoIUq_OCNL81O5jAochRy8CHYiAJazAoyh98esDlV8"
}); // this function retreives and displays our content from Contentful


function Content() {
  function fetchContentTypes() {
    return _fetchContentTypes.apply(this, arguments);
  }

  function _fetchContentTypes() {
    _fetchContentTypes = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var types;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return client.getContentTypes();

            case 2:
              types = _context2.sent;

              if (!types.items) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", types.items);

            case 5:
              console.log("Error getting Content Types.");

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _fetchContentTypes.apply(this, arguments);
  }

  function fetchEntriesForContentType(_x) {
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  function _fetchEntriesForContentType() {
    _fetchEntriesForContentType = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(contentType) {
      var entries;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return client.getEntries({
                content_type: contentType.sys.id
              });

            case 2:
              entries = _context3.sent;

              if (!entries.items) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", entries.items);

            case 5:
              console.log("Error getting Entries for ".concat(contentType.name, "."));

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _fetchEntriesForContentType.apply(this, arguments);
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      projects = _useState2[0],
      setProjects = _useState2[1]; // use above async functions to retreive content on initial load


  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    function getProjects() {
      return _getProjects.apply(this, arguments);
    }

    function _getProjects() {
      _getProjects = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var contentTypes, allProjects;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchContentTypes();

              case 2:
                contentTypes = _context.sent;
                _context.next = 5;
                return fetchEntriesForContentType(contentTypes[0]);

              case 5:
                allProjects = _context.sent;
                setProjects(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(allProjects));

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return _getProjects.apply(this, arguments);
    }

    getProjects();
  }, []);
  console.log(projects.map(function (p) {
    return p.fields;
  })); // when content is retreived, the fields are mapped over to be displayed by our component

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, projects.length > 0 ? projects.map(function (p) {
    return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ProjectCard__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: p.fields.title // image has fields of it's own
      ,
      image: p.fields.image.fields.file.url,
      url: p.fields.url,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    });
  }) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (Content);

/***/ })

})
//# sourceMappingURL=index.js.5e390cd5ee6e941a0833.hot-update.js.map