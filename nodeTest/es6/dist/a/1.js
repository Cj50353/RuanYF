/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************!*\
  !*** ./1.js ***!
  \**************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _marked = [fibs].map(regeneratorRuntime.mark);
	
	function fibs() {
	    var a, b;
	    return regeneratorRuntime.wrap(function fibs$(_context) {
	        while (1) {
	            switch (_context.prev = _context.next) {
	                case 0:
	                    // Generator Function
	                    a = 0;
	                    b = 1;
	
	                case 2:
	                    if (false) {
	                        _context.next = 9;
	                        break;
	                    }
	
	                    _context.next = 5;
	                    return a;
	
	                case 5:
	                    // [a, b] = [b, a + b];
	                    b = a + b;
	                    a = b - a;
	                    _context.next = 2;
	                    break;
	
	                case 9:
	                case "end":
	                    return _context.stop();
	            }
	        }
	    }, _marked[0], this);
	}
	
	var _fibs = fibs(),
	    _fibs2 = _slicedToArray(_fibs, 6),
	    first = _fibs2[0],
	    second = _fibs2[1],
	    third = _fibs2[2],
	    fourth = _fibs2[3],
	    fifth = _fibs2[4],
	    sixth = _fibs2[5];
	
	console.log(first, second, third, fourth, fifth, sixth);

/***/ }
/******/ ]);
//# sourceMappingURL=1.js.map