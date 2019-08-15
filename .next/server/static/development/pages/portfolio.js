module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Project.js":
/*!*******************************!*\
  !*** ./components/Project.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/portfolio/components/Project.js";



function Project({
  title,
  date,
  image,
  excerpt,
  url
}) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3372940452" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: url,
    className: "jsx-3372940452",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image,
    type: "image/jpeg",
    className: "jsx-3372940452",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3372940452" + " " + "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    className: "jsx-3372940452",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-3372940452",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, date), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3372940452",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, excerpt)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3372940452",
    __self: this
  }, ".container.jsx-3372940452{cursor:pointer;height:453px;margin-bottom:48px;}a.jsx-3372940452{border-bottom:none;}a.jsx-3372940452:hover{border-bottom:none;}.text.jsx-3372940452{margin-top:-160px;padding:24px;position:absolute;}h2.jsx-3372940452{color:white;font-size:24px;margin-bottom:0;}h4.jsx-3372940452{color:rgba(255,255,255,0.8);font-size:16px;font-weight:500;margin-top:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvYy9Vc2Vycy9SeWFuL0Rlc2t0b3AvcG9ydGZvbGlvL2NvbXBvbmVudHMvUHJvamVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZUyxBQUc0QixBQUtJLEFBR0EsQUFHRCxBQUtOLEFBS21CLFlBSmhCLEdBaEJGLEdBV0EsQ0FOZixBQUdBLFFBU2tCLENBaEJHLEFBb0JKLEdBVEcsWUFNcEIsQUFJa0IsSUFwQmxCLEVBV0EsVUFVaUIsZUFDakIiLCJmaWxlIjoiL21udC9jL1VzZXJzL1J5YW4vRGVza3RvcC9wb3J0Zm9saW8vY29tcG9uZW50cy9Qcm9qZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gUHJvamVjdCh7IHRpdGxlLCBkYXRlLCBpbWFnZSwgZXhjZXJwdCwgdXJsIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGEgaHJlZj17dXJsfT5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlfSB0eXBlPVwiaW1hZ2UvanBlZ1wiPjwvaW1nPlxuICAgICAgPC9hPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgICAgPGg0PntkYXRlfTwvaDQ+XG4gICAgICAgIDxwPntleGNlcnB0fTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogNDUzcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE2MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjRweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDIge1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDtcbiJdfQ== */\n/*@ sourceURL=/mnt/c/Users/Ryan/Desktop/portfolio/components/Project.js */"));
}

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./pages/portfolio.js":
/*!****************************!*\
  !*** ./pages/portfolio.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Project */ "./components/Project.js");
var _jsxFileName = "/mnt/c/Users/Ryan/Desktop/portfolio/pages/portfolio.js";




console.log("ekk80296xyez");
console.log("LVoIUq_OCNL81O5jAochRy8CHYiAJazAoyh98esDlV8"); // create a Contentful client to provide access to helper methods for retreiving data from Contentful

const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: "ekk80296xyez",
  accessToken: "LVoIUq_OCNL81O5jAochRy8CHYiAJazAoyh98esDlV8"
}); // this function retreives and displays our content from Contentful


function Portfolio() {
  async function fetchContentTypes() {
    const types = await client.getContentTypes();
    if (types.items) return types.items;
    console.log("Error getting Content Types.");
  }

  async function fetchEntriesForContentType(contentType) {
    const entries = await client.getEntries({
      content_type: contentType.sys.id
    });
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const [projects, setProjects] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]); // use above async functions to retreive content on initial load

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    async function getProjects() {
      const contentTypes = await fetchContentTypes();
      const allProjects = await fetchEntriesForContentType(contentTypes[0]);
      setProjects([...allProjects]);
    }

    getProjects();
  }, []);
  console.log(projects.map(p => p.fields)); // when content is retreived, the fields are mapped over to be displayed by our component

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Daniel Alegria | Web Developer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://css.zeit.sh/v1.css",
    type: "text/css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), projects.length > 0 ? projects.map(p => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: p.fields.title,
    date: p.fields.date // image has fields of it's own
    ,
    image: p.fields.image.fields.file.url,
    excerpt: p.fields.excerpt,
    url: p.fields.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  })) : null);
}

/* harmony default export */ __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/portfolio.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/c/Users/Ryan/Desktop/portfolio/pages/portfolio.js */"./pages/portfolio.js");


/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=portfolio.js.map