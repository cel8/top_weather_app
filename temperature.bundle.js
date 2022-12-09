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
/*!************************************!*\
  !*** ./src/modules/temperature.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Temperature)
/* harmony export */ });
/* harmony import */ var Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/math-helper */ "./src/utilities/math-helper.js");


const tempUnit = {
  c: '°C',
  f: '°F'
};

const pressUnit = {
  millibar: 'mbar',
  hectopascal: 'hPa',
  inch: 'inHg'
};


class Temperature {
  constructor(objTemperature) {
    if (!objTemperature) throw new 'Invalid temperature.';
    this.temp = Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(objTemperature.temp);
    this.tempMin = Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(objTemperature.temp_min);
    this.tempMax = Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(objTemperature.temp_max);
    this.tempFeelsLike = Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(objTemperature.feels_like);
    this.humidity = objTemperature.humidity;
    this.pressure = objTemperature.pressure;
  }

  getPressure(isMetricUnit = true) {
    return isMetricUnit ? this.#toBar() : this.#toInches();
  }

  get getHumidity() { return `${this.humidity}%`; }

  getTemperature(isMetricUnit = true) {
    return isMetricUnit ? this.#toCelsius() : this.#toFehrenheit();
  }

  #toCelsius() {
    return {
      temp: `${this.temp} ${tempUnit.c}`,
      min: `${this.tempMin} ${tempUnit.c}`,
      max: `${this.tempMax} ${tempUnit.c}`,
      feels: `${this.tempFeelsLike} ${tempUnit.c}`
    }
  }

  #toFehrenheit() {
    const conversionHelper = (temperature) => Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound((temperature * 1.8) + 32.0);

    return {
      temp: `${conversionHelper(this.temp)} ${tempUnit.f}`,
      min: `${conversionHelper(this.tempMin)} ${tempUnit.f}`,
      max: `${conversionHelper(this.tempMax)} ${tempUnit.f}`,
      feels: `${conversionHelper(this.tempFeelsLike)} ${tempUnit.f}`
    }
  }

  #toBar() {
    const conversionHelper = (hpascal) => Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(hpascal * 1, 2);

    return `${conversionHelper(this.pressure)} ${pressUnit.millibar}`;
  }

  #toInches() {
    const conversionHelper = (hpascal) => Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(hpascal * 0.02953, 2);

    return `${conversionHelper(this.pressure)} ${pressUnit.inch}`;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGVyYXR1cmUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR2U7QUFDZjtBQUNBO0FBQ0EsZ0JBQWdCLHNFQUFtQjtBQUNuQyxtQkFBbUIsc0VBQW1CO0FBQ3RDLG1CQUFtQixzRUFBbUI7QUFDdEMseUJBQXlCLHNFQUFtQjtBQUM1QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHNCQUFzQixVQUFVLGNBQWM7O0FBRTlDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxXQUFXLEVBQUUsV0FBVztBQUN2QyxjQUFjLGNBQWMsRUFBRSxXQUFXO0FBQ3pDLGNBQWMsY0FBYyxFQUFFLFdBQVc7QUFDekMsZ0JBQWdCLG9CQUFvQixFQUFFLFdBQVc7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxzRUFBbUI7O0FBRWpFO0FBQ0EsZUFBZSw2QkFBNkIsRUFBRSxXQUFXO0FBQ3pELGNBQWMsZ0NBQWdDLEVBQUUsV0FBVztBQUMzRCxjQUFjLGdDQUFnQyxFQUFFLFdBQVc7QUFDM0QsZ0JBQWdCLHNDQUFzQyxFQUFFLFdBQVc7QUFDbkU7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxzRUFBbUI7O0FBRTdELGNBQWMsaUNBQWlDLEVBQUUsbUJBQW1CO0FBQ3BFOztBQUVBO0FBQ0EsMENBQTBDLHNFQUFtQjs7QUFFN0QsY0FBYyxpQ0FBaUMsRUFBRSxlQUFlO0FBQ2hFO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvLi9zcmMvdXRpbGl0aWVzL21hdGgtaGVscGVyLmpzIiwid2VicGFjazovL3RvcF93ZWF0aGVyX2FwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcF93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL3RlbXBlcmF0dXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hdGhIZWxwZXIge1xuICBzdGF0aWMgZ2V0Um91bmQodmFsdWUsIGRlY2ltYWwgPSAwKSB7XG4gICAgY29uc3Qgcm91bmQgPSAoIWRlY2ltYWwgfHwgZGVjaW1hbCA8IDApID8gMSA6IDEwICoqIGRlY2ltYWw7XG4gICAgcmV0dXJuIE1hdGgucm91bmQoKHZhbHVlICsgTnVtYmVyLkVQU0lMT04pICogcm91bmQpIC8gcm91bmQ7XG4gIH1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IE1hdGhIZWxwZXIgZnJvbSAnVXRpbGl0aWVzL21hdGgtaGVscGVyJztcblxuY29uc3QgdGVtcFVuaXQgPSB7XG4gIGM6ICfCsEMnLFxuICBmOiAnwrBGJ1xufTtcblxuY29uc3QgcHJlc3NVbml0ID0ge1xuICBtaWxsaWJhcjogJ21iYXInLFxuICBoZWN0b3Bhc2NhbDogJ2hQYScsXG4gIGluY2g6ICdpbkhnJ1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZW1wZXJhdHVyZSB7XG4gIGNvbnN0cnVjdG9yKG9ialRlbXBlcmF0dXJlKSB7XG4gICAgaWYgKCFvYmpUZW1wZXJhdHVyZSkgdGhyb3cgbmV3ICdJbnZhbGlkIHRlbXBlcmF0dXJlLic7XG4gICAgdGhpcy50ZW1wID0gTWF0aEhlbHBlci5nZXRSb3VuZChvYmpUZW1wZXJhdHVyZS50ZW1wKTtcbiAgICB0aGlzLnRlbXBNaW4gPSBNYXRoSGVscGVyLmdldFJvdW5kKG9ialRlbXBlcmF0dXJlLnRlbXBfbWluKTtcbiAgICB0aGlzLnRlbXBNYXggPSBNYXRoSGVscGVyLmdldFJvdW5kKG9ialRlbXBlcmF0dXJlLnRlbXBfbWF4KTtcbiAgICB0aGlzLnRlbXBGZWVsc0xpa2UgPSBNYXRoSGVscGVyLmdldFJvdW5kKG9ialRlbXBlcmF0dXJlLmZlZWxzX2xpa2UpO1xuICAgIHRoaXMuaHVtaWRpdHkgPSBvYmpUZW1wZXJhdHVyZS5odW1pZGl0eTtcbiAgICB0aGlzLnByZXNzdXJlID0gb2JqVGVtcGVyYXR1cmUucHJlc3N1cmU7XG4gIH1cblxuICBnZXRQcmVzc3VyZShpc01ldHJpY1VuaXQgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGlzTWV0cmljVW5pdCA/IHRoaXMuI3RvQmFyKCkgOiB0aGlzLiN0b0luY2hlcygpO1xuICB9XG5cbiAgZ2V0IGdldEh1bWlkaXR5KCkgeyByZXR1cm4gYCR7dGhpcy5odW1pZGl0eX0lYDsgfVxuXG4gIGdldFRlbXBlcmF0dXJlKGlzTWV0cmljVW5pdCA9IHRydWUpIHtcbiAgICByZXR1cm4gaXNNZXRyaWNVbml0ID8gdGhpcy4jdG9DZWxzaXVzKCkgOiB0aGlzLiN0b0ZlaHJlbmhlaXQoKTtcbiAgfVxuXG4gICN0b0NlbHNpdXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRlbXA6IGAke3RoaXMudGVtcH0gJHt0ZW1wVW5pdC5jfWAsXG4gICAgICBtaW46IGAke3RoaXMudGVtcE1pbn0gJHt0ZW1wVW5pdC5jfWAsXG4gICAgICBtYXg6IGAke3RoaXMudGVtcE1heH0gJHt0ZW1wVW5pdC5jfWAsXG4gICAgICBmZWVsczogYCR7dGhpcy50ZW1wRmVlbHNMaWtlfSAke3RlbXBVbml0LmN9YFxuICAgIH1cbiAgfVxuXG4gICN0b0ZlaHJlbmhlaXQoKSB7XG4gICAgY29uc3QgY29udmVyc2lvbkhlbHBlciA9ICh0ZW1wZXJhdHVyZSkgPT4gTWF0aEhlbHBlci5nZXRSb3VuZCgodGVtcGVyYXR1cmUgKiAxLjgpICsgMzIuMCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdGVtcDogYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnRlbXApfSAke3RlbXBVbml0LmZ9YCxcbiAgICAgIG1pbjogYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnRlbXBNaW4pfSAke3RlbXBVbml0LmZ9YCxcbiAgICAgIG1heDogYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnRlbXBNYXgpfSAke3RlbXBVbml0LmZ9YCxcbiAgICAgIGZlZWxzOiBgJHtjb252ZXJzaW9uSGVscGVyKHRoaXMudGVtcEZlZWxzTGlrZSl9ICR7dGVtcFVuaXQuZn1gXG4gICAgfVxuICB9XG5cbiAgI3RvQmFyKCkge1xuICAgIGNvbnN0IGNvbnZlcnNpb25IZWxwZXIgPSAoaHBhc2NhbCkgPT4gTWF0aEhlbHBlci5nZXRSb3VuZChocGFzY2FsICogMSwgMik7XG5cbiAgICByZXR1cm4gYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnByZXNzdXJlKX0gJHtwcmVzc1VuaXQubWlsbGliYXJ9YDtcbiAgfVxuXG4gICN0b0luY2hlcygpIHtcbiAgICBjb25zdCBjb252ZXJzaW9uSGVscGVyID0gKGhwYXNjYWwpID0+IE1hdGhIZWxwZXIuZ2V0Um91bmQoaHBhc2NhbCAqIDAuMDI5NTMsIDIpO1xuXG4gICAgcmV0dXJuIGAke2NvbnZlcnNpb25IZWxwZXIodGhpcy5wcmVzc3VyZSl9ICR7cHJlc3NVbml0LmluY2h9YDtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9