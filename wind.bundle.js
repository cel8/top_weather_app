/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utilities/math-helper.js":
/*!**************************************!*\
  !*** ./src/utilities/math-helper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MathHelper)
/* harmony export */ });
class MathHelper {
  static getRound(value, decimal = 0) {
    const round = (!decimal || decimal < 0) ? 1 : 10 ** decimal;
    return Math.round((value + Number.EPSILON) * round) / round;
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/modules/wind.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Wind)
/* harmony export */ });
/* harmony import */ var Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/math-helper */ "./src/utilities/math-helper.js");


const windUnit = {
  kmh: 'km/h',
  mph: 'mph'
};

class Wind {
  constructor(objWind) {
    if (!objWind) throw new 'Invalid wind.';

    this.speed = objWind.speed;
    this.direction = objWind.deg;
    this.hasGust = (objWind.gust !== undefined) && (objWind.gust > .1);
  }

  get getDirection() { return this.direction; }

  get isGustOfWind() { return this.hasGust; }

  getSpeed(isMetricUnit = true) {
    return isMetricUnit ? this.#toKMh() : this.#toMPh();
  }

  #toKMh() {
    const conversionHelper = (speed) => Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(speed * 3.6, 1);

    return `${conversionHelper(this.speed)} ${windUnit.kmh}`;
  }

  #toMPh() {
    const conversionHelper = (speed) => Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(speed * 2.23694, 1);

    return `${conversionHelper(this.speed)} ${windUnit.mph}`;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2luZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNMQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTitDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCOztBQUV2Qix1QkFBdUI7O0FBRXZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3QyxzRUFBbUI7O0FBRTNELGNBQWMsOEJBQThCLEVBQUUsYUFBYTtBQUMzRDs7QUFFQTtBQUNBLHdDQUF3QyxzRUFBbUI7O0FBRTNELGNBQWMsOEJBQThCLEVBQUUsYUFBYTtBQUMzRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwLy4vc3JjL3V0aWxpdGllcy9tYXRoLWhlbHBlci5qcyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy93aW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhIZWxwZXIge1xuICBzdGF0aWMgZ2V0Um91bmQodmFsdWUsIGRlY2ltYWwgPSAwKSB7XG4gICAgY29uc3Qgcm91bmQgPSAoIWRlY2ltYWwgfHwgZGVjaW1hbCA8IDApID8gMSA6IDEwICoqIGRlY2ltYWw7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHZhbHVlICsgTnVtYmVyLkVQU0lMT04pICogcm91bmQpIC8gcm91bmQ7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE1hdGhIZWxwZXIgZnJvbSAnVXRpbGl0aWVzL21hdGgtaGVscGVyJztcblxuY29uc3Qgd2luZFVuaXQgPSB7XG4gIGttaDogJ2ttL2gnLFxuICBtcGg6ICdtcGgnXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXaW5kIHtcbiAgY29uc3RydWN0b3Iob2JqV2luZCkge1xuICAgIGlmICghb2JqV2luZCkgdGhyb3cgbmV3ICdJbnZhbGlkIHdpbmQuJztcblxuICAgIHRoaXMuc3BlZWQgPSBvYmpXaW5kLnNwZWVkO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gb2JqV2luZC5kZWc7XG4gICAgdGhpcy5oYXNHdXN0ID0gKG9ialdpbmQuZ3VzdCAhPT0gdW5kZWZpbmVkKSAmJiAob2JqV2luZC5ndXN0ID4gLjEpO1xuICB9XG5cbiAgZ2V0IGdldERpcmVjdGlvbigpIHsgcmV0dXJuIHRoaXMuZGlyZWN0aW9uOyB9XG5cbiAgZ2V0IGlzR3VzdE9mV2luZCgpIHsgcmV0dXJuIHRoaXMuaGFzR3VzdDsgfVxuXG4gIGdldFNwZWVkKGlzTWV0cmljVW5pdCA9IHRydWUpIHtcbiAgICByZXR1cm4gaXNNZXRyaWNVbml0ID8gdGhpcy4jdG9LTWgoKSA6IHRoaXMuI3RvTVBoKCk7XG4gIH1cblxuICAjdG9LTWgoKSB7XG4gICAgY29uc3QgY29udmVyc2lvbkhlbHBlciA9IChzcGVlZCkgPT4gTWF0aEhlbHBlci5nZXRSb3VuZChzcGVlZCAqIDMuNiwgMSk7XG5cbiAgICByZXR1cm4gYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnNwZWVkKX0gJHt3aW5kVW5pdC5rbWh9YDtcbiAgfVxuXG4gICN0b01QaCgpIHtcbiAgICBjb25zdCBjb252ZXJzaW9uSGVscGVyID0gKHNwZWVkKSA9PiBNYXRoSGVscGVyLmdldFJvdW5kKHNwZWVkICogMi4yMzY5NCwgMSk7XG5cbiAgICByZXR1cm4gYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnNwZWVkKX0gJHt3aW5kVW5pdC5tcGh9YDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9