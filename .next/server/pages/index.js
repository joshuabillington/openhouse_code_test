module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/components/DisplayCards/index.tsx":
/*!*************************************************!*\
  !*** ./pages/components/DisplayCards/index.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _SimpleCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../SimpleCard */ \"./pages/components/SimpleCard/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/josh/devprojects/openhouse_code_test/pages/components/DisplayCards/index.tsx\";\n\n\n\n\nconst DisplayCards = ({\n  communities,\n  homes\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Container\"], {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Row\"], {\n        children: communities && communities.map(community => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__[\"Col\"], {\n          md: 24,\n          lg: 6,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SimpleCard__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            img: community.imgUrl,\n            title: community.name,\n            homes: homes,\n            id: community.id\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 20,\n            columnNumber: 17\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 13\n        }, undefined))\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 17\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (DisplayCards);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL0Rpc3BsYXlDYXJkcy9pbmRleC50c3g/MjY5MyJdLCJuYW1lcyI6WyJEaXNwbGF5Q2FyZHMiLCJjb21tdW5pdGllcyIsImhvbWVzIiwibWFwIiwiY29tbXVuaXR5IiwiaW1nVXJsIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVFBLE1BQU1BLFlBQWtELEdBQUksQ0FBQztBQUFDQyxhQUFEO0FBQWNDO0FBQWQsQ0FBRCxLQUEwQjtBQUdsRixzQkFDSTtBQUFBLDJCQUNJLHFFQUFDLHlEQUFEO0FBQUEsNkJBQ0kscUVBQUMsbURBQUQ7QUFBQSxrQkFDUEQsV0FBVyxJQUFJQSxXQUFXLENBQUNFLEdBQVosQ0FBZ0JDLFNBQVMsaUJBQ3JDLHFFQUFDLG1EQUFEO0FBQUssWUFBRSxFQUFFLEVBQVQ7QUFBYSxZQUFFLEVBQUUsQ0FBakI7QUFBQSxpQ0FDSSxxRUFBQyxtREFBRDtBQUFZLGVBQUcsRUFBRUEsU0FBUyxDQUFDQyxNQUEzQjtBQUFtQyxpQkFBSyxFQUFFRCxTQUFTLENBQUNFLElBQXBEO0FBQTBELGlCQUFLLEVBQUVKLEtBQWpFO0FBQXdFLGNBQUUsRUFBRUUsU0FBUyxDQUFDRztBQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFEWTtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBYUgsQ0FoQkQ7O0FBa0JlUCwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2NvbXBvbmVudHMvRGlzcGxheUNhcmRzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW1wbGVDYXJkIGZyb20gJy4uL1NpbXBsZUNhcmQnOyBcbmltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtDb250YWluZXIsIFJvdywgQ29sfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG50eXBlIERpc3BsYXlDYXJkc1Byb3BzID0ge1xuICAgIGNvbW11bml0aWVzOiBBcnJheTxhbnk+LFxuICAgIGhvbWVzOiBBcnJheTxhbnk+XG59XG5cbmNvbnN0IERpc3BsYXlDYXJkczogRnVuY3Rpb25Db21wb25lbnQ8RGlzcGxheUNhcmRzUHJvcHM+ICA9ICh7Y29tbXVuaXRpZXMsIGhvbWVzfSkgPT4ge1xuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgPFJvdz5cbiAgICAgICAge2NvbW11bml0aWVzICYmIGNvbW11bml0aWVzLm1hcChjb21tdW5pdHkgPT4gKFxuICAgICAgICAgICAgPENvbCBtZD17MjR9IGxnPXs2fT5cbiAgICAgICAgICAgICAgICA8U2ltcGxlQ2FyZCBpbWc9e2NvbW11bml0eS5pbWdVcmx9IHRpdGxlPXtjb21tdW5pdHkubmFtZX0gaG9tZXM9e2hvbWVzfSBpZD17Y29tbXVuaXR5LmlkfSAvPlxuICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvUm93PlxuICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheUNhcmRzOyAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/DisplayCards/index.tsx\n");

/***/ }),

/***/ "./pages/components/SimpleCard/index.tsx":
/*!***********************************************!*\
  !*** ./pages/components/SimpleCard/index.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/josh/devprojects/openhouse_code_test/pages/components/SimpleCard/index.tsx\";\n\n\n\nconst SimpleCard = ({\n  img,\n  title,\n  homes,\n  id\n}) => {\n  const first = homes.indexOf(id);\n  const last = homes.lastIndexOf(id);\n  const all = homes.slice(first, last);\n\n  for (var i = all.length - 1; i >= 0; i--) {\n    if (all[i] === id) {\n      all.splice(i, 1);\n    }\n  }\n\n  const avgPrice = all.reduce((a, b) => a + b, 0);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n    className: \"simple-card\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Img, {\n      variant: \"top\",\n      src: img,\n      style: {\n        borderRadius: '15px 15px 0 0',\n        width: '500px',\n        height: '350px',\n        objectFit: 'cover'\n      },\n      alt: \"image of\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Body, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Title, {\n        style: {\n          fontSize: '1.5em',\n          color: '#606060',\n          fontWeight: '200'\n        },\n        children: [\" \", title, \" \"]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 5\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Text, {\n        style: {\n          color: '#606060',\n          fontWeight: '600',\n          fontSize: '2em'\n        },\n        children: [\"Average Price: $\", avgPrice]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 5\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 5\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SimpleCard);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb21wb25lbnRzL1NpbXBsZUNhcmQvaW5kZXgudHN4PzE1NzkiXSwibmFtZXMiOlsiU2ltcGxlQ2FyZCIsImltZyIsInRpdGxlIiwiaG9tZXMiLCJpZCIsImZpcnN0IiwiaW5kZXhPZiIsImxhc3QiLCJsYXN0SW5kZXhPZiIsImFsbCIsInNsaWNlIiwiaSIsImxlbmd0aCIsInNwbGljZSIsImF2Z1ByaWNlIiwicmVkdWNlIiwiYSIsImIiLCJib3JkZXJSYWRpdXMiLCJ3aWR0aCIsImhlaWdodCIsIm9iamVjdEZpdCIsImZvbnRTaXplIiwiY29sb3IiLCJmb250V2VpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQVNBLE1BQU1BLFVBQXdDLEdBQUcsQ0FBQztBQUFDQyxLQUFEO0FBQU1DLE9BQU47QUFBYUMsT0FBYjtBQUFvQkM7QUFBcEIsQ0FBRCxLQUE2QjtBQUM1RSxRQUFNQyxLQUFLLEdBQUdGLEtBQUssQ0FBQ0csT0FBTixDQUFjRixFQUFkLENBQWQ7QUFDQSxRQUFNRyxJQUFJLEdBQUdKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkosRUFBbEIsQ0FBYjtBQUNBLFFBQU1LLEdBQUcsR0FBR04sS0FBSyxDQUFDTyxLQUFOLENBQVlMLEtBQVosRUFBbUJFLElBQW5CLENBQVo7O0FBR0EsT0FBSyxJQUFJSSxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csTUFBSixHQUFhLENBQTFCLEVBQTZCRCxDQUFDLElBQUksQ0FBbEMsRUFBcUNBLENBQUMsRUFBdEMsRUFBMEM7QUFDeEMsUUFBSUYsR0FBRyxDQUFDRSxDQUFELENBQUgsS0FBV1AsRUFBZixFQUFtQjtBQUNsQkssU0FBRyxDQUFDSSxNQUFKLENBQVdGLENBQVgsRUFBYyxDQUFkO0FBQ0E7QUFDRDs7QUFDRixRQUFNRyxRQUFRLEdBQUdMLEdBQUcsQ0FBQ00sTUFBSixDQUFXLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVRCxDQUFDLEdBQUdDLENBQXpCLEVBQTRCLENBQTVCLENBQWpCO0FBR0Usc0JBQ0EscUVBQUMsb0RBQUQ7QUFBTSxhQUFTLEVBQUMsYUFBaEI7QUFBQSw0QkFDQSxxRUFBQyxvREFBRCxDQUFNLEdBQU47QUFBVSxhQUFPLEVBQUMsS0FBbEI7QUFBd0IsU0FBRyxFQUFFaEIsR0FBN0I7QUFBa0MsV0FBSyxFQUFFO0FBQUNpQixvQkFBWSxFQUFFLGVBQWY7QUFBZ0NDLGFBQUssRUFBRSxPQUF2QztBQUFnREMsY0FBTSxFQUFFLE9BQXhEO0FBQWlFQyxpQkFBUyxFQUFFO0FBQTVFLE9BQXpDO0FBQWdJLFNBQUcsRUFBQztBQUFwSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBRUEscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQUEsOEJBQ0EscUVBQUMsb0RBQUQsQ0FBTSxLQUFOO0FBQVksYUFBSyxFQUFFO0FBQUNDLGtCQUFRLEVBQUUsT0FBWDtBQUFvQkMsZUFBSyxFQUFFLFNBQTNCO0FBQXNDQyxvQkFBVSxFQUFFO0FBQWxELFNBQW5CO0FBQUEsd0JBQStFdEIsS0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURBLGVBRUEscUVBQUMsb0RBQUQsQ0FBTSxJQUFOO0FBQVcsYUFBSyxFQUFFO0FBQUVxQixlQUFLLEVBQUUsU0FBVDtBQUFvQkMsb0JBQVUsRUFBRSxLQUFoQztBQUF1Q0Ysa0JBQVEsRUFBRTtBQUFqRCxTQUFsQjtBQUFBLHVDQUNtQlIsUUFEbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEQTtBQVlILENBMUJEOztBQTRCZWQseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL1NpbXBsZUNhcmQvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBDYXJkIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJ1xuXG50eXBlIENhcmRQcm9wcyA9IHtcbiAgICBpbWc6IHN0cmluZywgXG4gICAgdGl0bGU6IHN0cmluZywgXG4gICAgaG9tZXM6IEFycmF5PGFueT4sIFxuICAgIGlkOiBTdHJpbmcsIFxufVxuXG5jb25zdCBTaW1wbGVDYXJkOiBGdW5jdGlvbkNvbXBvbmVudDxDYXJkUHJvcHM+ID0gKHtpbWcsIHRpdGxlLCBob21lcywgaWR9KSA9PiB7XG4gIGNvbnN0IGZpcnN0ID0gaG9tZXMuaW5kZXhPZihpZClcbiAgY29uc3QgbGFzdCA9IGhvbWVzLmxhc3RJbmRleE9mKGlkKVxuICBjb25zdCBhbGwgPSBob21lcy5zbGljZShmaXJzdCwgbGFzdClcbiAgXG5cbiAgZm9yICh2YXIgaSA9IGFsbC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChhbGxbaV0gPT09IGlkKSB7XG4gICAgIGFsbC5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICAgfVxuICBjb25zdCBhdmdQcmljZSA9IGFsbC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKVxuXG5cbiAgICByZXR1cm4gKFxuICAgIDxDYXJkIGNsYXNzTmFtZT0nc2ltcGxlLWNhcmQnPlxuICAgIDxDYXJkLkltZyB2YXJpYW50PVwidG9wXCIgc3JjPXtpbWd9IHN0eWxlPXt7Ym9yZGVyUmFkaXVzOiAnMTVweCAxNXB4IDAgMCcsIHdpZHRoOiAnNTAwcHgnLCBoZWlnaHQ6ICczNTBweCcsIG9iamVjdEZpdDogJ2NvdmVyJyB9fSBhbHQ9J2ltYWdlIG9mJyAvPlxuICAgIDxDYXJkLkJvZHk+XG4gICAgPENhcmQuVGl0bGUgc3R5bGU9e3tmb250U2l6ZTogJzEuNWVtJywgY29sb3I6ICcjNjA2MDYwJywgZm9udFdlaWdodDogJzIwMCd9fT4ge3RpdGxlfSA8L0NhcmQuVGl0bGU+XG4gICAgPENhcmQuVGV4dCBzdHlsZT17eyBjb2xvcjogJyM2MDYwNjAnLCBmb250V2VpZ2h0OiAnNjAwJywgZm9udFNpemU6ICcyZW0nfX0+XG4gICAgICBBdmVyYWdlIFByaWNlOiAke2F2Z1ByaWNlfVxuICAgIDwvQ2FyZC5UZXh0PlxuICAgIDwvQ2FyZC5Cb2R5PlxuICAgIDwvQ2FyZD4gIFxuXG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaW1wbGVDYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/SimpleCard/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_DisplayCards__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DisplayCards */ \"./pages/components/DisplayCards/index.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _jsxFileName = \"/Users/josh/devprojects/openhouse_code_test/pages/index.tsx\";\n\n\n\n\n //using axios to fetch data from api \n\nfunction Home() {\n  const defaultCommunity = [];\n  const defaultHome = [];\n  const [homes, setHomes] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(defaultHome);\n  const [communities, setCommunties] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(defaultCommunity);\n  const [loading, setLoading] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(true);\n  const [error, setError] = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(\"\");\n  console.log(communities);\n  console.log(loading);\n  console.log(error);\n  react__WEBPACK_IMPORTED_MODULE_4___default.a.useEffect(() => {\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities').then(response => {\n      setCommunties(response.data);\n      setLoading(false);\n    }).catch(ex => {\n      const err = ex.response.status === 404 ? \"Resource not found\" : \"An unexpected error has occured\";\n      setError(err);\n      setLoading(false);\n    });\n    axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes').then(response => {\n      setHomes(response.data);\n      setLoading(false);\n    }).catch(ex => {\n      const err = ex.response.status === 404 ? \"Resource not found\" : \"An unexpected error has occured\";\n      setError(err);\n      setLoading(false);\n    });\n  }, []);\n  communities.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);\n  const homePrice = [];\n\n  for (let i = 0; i < communities.length; i++) {\n    for (let x = 0; x < homes.length; x++) if (communities[i].id === homes[x].communityId) {\n      homePrice.push(homes[x].communityId, homes[x].price);\n    }\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"stylesheet\",\n        href: \"https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css\",\n        integrity: \"sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk\",\n        crossorigin: \"anonymous\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.main,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n        style: {\n          color: '#606060'\n        },\n        children: \" Communities in Calgary \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_DisplayCards__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        communities: communities,\n        homes: homePrice\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n      className: _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.footer\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 90,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIiwiZGVmYXVsdENvbW11bml0eSIsImRlZmF1bHRIb21lIiwiaG9tZXMiLCJzZXRIb21lcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJjb21tdW5pdGllcyIsInNldENvbW11bnRpZXMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImVycm9yIiwic2V0RXJyb3IiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJleCIsImVyciIsInN0YXR1cyIsInNvcnQiLCJhIiwiYiIsIm5hbWUiLCJob21lUHJpY2UiLCJpIiwibGVuZ3RoIiwieCIsImlkIiwiY29tbXVuaXR5SWQiLCJwdXNoIiwicHJpY2UiLCJzdHlsZXMiLCJjb250YWluZXIiLCJtYWluIiwiY29sb3IiLCJmb290ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7O0FBaUJlLFNBQVNBLElBQVQsR0FBZ0I7QUFFN0IsUUFBTUMsZ0JBQTRCLEdBQUcsRUFBckM7QUFDQSxRQUFNQyxXQUFrQixHQUFHLEVBQTNCO0FBR0YsUUFBTSxDQUFDQyxLQUFELEVBQVFDLFFBQVIsSUFDTkMsNENBQUssQ0FBQ0MsUUFBTixDQUFlSixXQUFmLENBREE7QUFHQSxRQUFNLENBQUNLLFdBQUQsRUFBY0MsYUFBZCxJQUNOSCw0Q0FBSyxDQUFDQyxRQUFOLENBQWVMLGdCQUFmLENBREE7QUFHQSxRQUFNLENBQUNRLE9BQUQsRUFBVUMsVUFBVixJQUNOTCw0Q0FBSyxDQUFDQyxRQUFOLENBQXdCLElBQXhCLENBREE7QUFHQSxRQUFNLENBQUNLLEtBQUQsRUFBUUMsUUFBUixJQUF1RFAsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEVBQWYsQ0FBN0Q7QUFJQU8sU0FBTyxDQUFDQyxHQUFSLENBQVlQLFdBQVo7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QSxZQVZGLGVBZUU7QUFBUSxlQUFTLEVBQUVRLDhEQUFNLENBQUNJO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRCIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBEaXNwbGF5Q2FyZHMgZnJvbSAnLi9jb21wb25lbnRzL0Rpc3BsYXlDYXJkcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuLy91c2luZyBheGlvcyB0byBmZXRjaCBkYXRhIGZyb20gYXBpIFxuXG5pbnRlcmZhY2UgQ29tbXVuaXR5IHtcbiAgaWQ6IFN0cmluZywgXG4gIG5hbWU6IFN0cmluZywgXG4gIGltZ1VybDogU3RyaW5nLCBcbiAgZ3JvdXA6IFN0cmluZyxcbn1cblxuaW50ZXJmYWNlIEhvbWUge1xuICBpZDogU3RyaW5nLCBcbiAgY29tbXVuaXR5SWQ6IFN0cmluZywgXG4gIHByaWNlOiBOdW1iZXI7IFxuICBhcmVhOiBOdW1iZXI7IFxuICB0eXBlOiBTdHJpbmc7IFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IGRlZmF1bHRDb21tdW5pdHk6Q29tbXVuaXR5W10gPSBbXTsgXG4gIGNvbnN0IGRlZmF1bHRIb21lOkhvbWVbXSA9IFtdOyBcblxuXG5jb25zdCBbaG9tZXMsIHNldEhvbWVzXTogW0hvbWVbXSwgKGhvbWVzOiBIb21lW10pID0+IHZvaWRdID0gXG5SZWFjdC51c2VTdGF0ZShkZWZhdWx0SG9tZSk7IFxuXG5jb25zdCBbY29tbXVuaXRpZXMsIHNldENvbW11bnRpZXNdOiBbQ29tbXVuaXR5W10sIChjb21tdW5pdGllczogQ29tbXVuaXR5W10pID0+IHZvaWRdID0gXG5SZWFjdC51c2VTdGF0ZShkZWZhdWx0Q29tbXVuaXR5KTsgXG5cbmNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXTogW2Jvb2xlYW4sIChsb2FkaW5nOiBib29sZWFuKSA9PiB2b2lkXSA9IFxuUmVhY3QudXNlU3RhdGU8Ym9vbGVhbj4odHJ1ZSk7IFxuXG5jb25zdCBbZXJyb3IsIHNldEVycm9yXTogW3N0cmluZywgKGVycm9yOiBzdHJpbmcpID0+IHZvaWRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7IFxuXG5cblxuY29uc29sZS5sb2coY29tbXVuaXRpZXMpOyBcbmNvbnNvbGUubG9nKGxvYWRpbmcpOyBcbmNvbnNvbGUubG9nKGVycm9yKTsgXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3NcbiAgICAuZ2V0PENvbW11bml0eVtdPignaHR0cHM6Ly9hMThmZGE0OS0yMTVlLTQ3ZDEtOWRjNi1jNjEzNmEwNGEzM2EubW9jay5wc3Rtbi5pby9jb21tdW5pdGllcycpXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgc2V0Q29tbXVudGllcyhyZXNwb25zZS5kYXRhKTsgXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgXG4gICAgfSlcbiAgICAuY2F0Y2goZXggPT4ge1xuICAgICAgY29uc3QgZXJyID1cbiAgICAgIGV4LnJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0IFxuICAgICAgPyBcIlJlc291cmNlIG5vdCBmb3VuZFwiIFxuICAgICAgOiBcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VyZWRcIjsgXG4gICAgICBzZXRFcnJvcihlcnIpOyBcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpOyBcbiAgICB9XG4gICAgICApXG4gICAgYXhpb3NcbiAgICAuZ2V0PEhvbWVbXT4oJ2h0dHBzOi8vYTE4ZmRhNDktMjE1ZS00N2QxLTlkYzYtYzYxMzZhMDRhMzNhLm1vY2sucHN0bW4uaW8vaG9tZXMnKVxuICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHNldEhvbWVzKHJlc3BvbnNlLmRhdGEpOyBcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pXG4gICAgICAuY2F0Y2goZXggPT4ge1xuICAgICAgICBjb25zdCBlcnIgPSBcbiAgICAgICAgZXgucmVzcG9uc2Uuc3RhdHVzID09PSA0MDQgXG4gICAgICAgID8gXCJSZXNvdXJjZSBub3QgZm91bmRcIiBcbiAgICAgICAgOiBcIkFuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VyZWRcIjsgXG4gICAgICAgIHNldEVycm9yKGVycik7IFxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTsgXG4gICAgICB9KVxuICAgIH0sIFtdKTsgXG5cbiAgICBjb21tdW5pdGllcy5zb3J0KChhLGIpID0+IGEubmFtZSAhPT0gYi5uYW1lID8gYS5uYW1lIDwgYi5uYW1lID8gLTEgOiAxIDogMCk7IFxuXG4gICAgY29uc3QgaG9tZVByaWNlID0gW107IFxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tdW5pdGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IGhvbWVzLmxlbmd0aDsgeCsrKVxuICAgICAgICBpZihjb21tdW5pdGllc1tpXS5pZCA9PT0gaG9tZXNbeF0uY29tbXVuaXR5SWQpIHtcbiAgICAgICAgICBob21lUHJpY2UucHVzaChob21lc1t4XS5jb21tdW5pdHlJZCwgaG9tZXNbeF0ucHJpY2UpXG4gICAgIH1cbiAgICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuNS4wL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMzg0LTlhSXQyblJwQzEyVWs5Z1M5YmFEbDQxMU5RQXBGbUMyNkV3QU9IOFdnWmw1TVlZeEZmYytOY1BiMWRLR2o3U2tcIlxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxoMSBzdHlsZT17eyBjb2xvcjogJyM2MDYwNjAnfX0gPiBDb21tdW5pdGllcyBpbiBDYWxnYXJ5IDwvaDE+XG4gICAgICAgIDxEaXNwbGF5Q2FyZHMgY29tbXVuaXRpZXM9e2NvbW11bml0aWVzfSBob21lcz17aG9tZVByaWNlfSAvPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2VmZDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIkhvbWVfY29udGFpbmVyX18xRWNzVVwiLFxuXHRcIm1haW5cIjogXCJIb21lX21haW5fXzF4OGdDXCIsXG5cdFwiZm9vdGVyXCI6IFwiSG9tZV9mb290ZXJfXzFXZGhEXCIsXG5cdFwidGl0bGVcIjogXCJIb21lX3RpdGxlX18zRGpSN1wiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fMTdaNEZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19heHgyWVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfXzJFaTJGXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fMlNkdEJcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18xWWJySFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-bootstrap\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1ib290c3RyYXBcIj8zODUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWJvb3RzdHJhcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWJvb3RzdHJhcFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-bootstrap\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });