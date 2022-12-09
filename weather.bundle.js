/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/temperature.js":
/*!************************************!*\
  !*** ./src/modules/temperature.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/modules/wind.js":
/*!*****************************!*\
  !*** ./src/modules/wind.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ }),

/***/ "./src/modules/zone.js":
/*!*****************************!*\
  !*** ./src/modules/zone.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Zone)
/* harmony export */ });
class Zone {
  constructor(city, country, state, longitude, latitude) {
    this.city = city;
    this.country = country;
    this.state = state;
    this.longitude = longitude;
    this.latitude = latitude;
  }

  get getCity() { return this.city; }

  get getCountry() { return this.country; }

  get getState() { return this.state; }

  getCoordinate() { return { longitude: this.longitude, latitude: this.latitude }; }
}


/***/ }),

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
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Weather)
/* harmony export */ });
/* harmony import */ var Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/math-helper */ "./src/utilities/math-helper.js");
/* harmony import */ var Modules_temperature__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Modules/temperature */ "./src/modules/temperature.js");
/* harmony import */ var Modules_wind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Modules/wind */ "./src/modules/wind.js");
/* harmony import */ var Modules_zone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Modules/zone */ "./src/modules/zone.js");





const spaceUnit = {
  inches:     'in',
  kilometer:  'km',
  meter:      'm',
  miles:      'mi',
  millimeter: 'mm'
};

class Weather {
  constructor() {
    this.zone = undefined;
    this.temperature = undefined;
    this.wind = undefined;
    this.cloudiness = 0;
    this.visibility = 0;
    this.precipitation = 0;
    this.currentWeather = undefined;
    this.current = '';
    this.dayTime = undefined;
  }

  get getTemp() { return this.temperature; }

  get getWind() { return this.wind; }

  get getZone() { return this.zone; }

  get getCurrentWeather() { return this.currentWeather; }

  get getCloudiness() { return `${this.cloudiness}%`; }

  get getCurrentTime() { return this.current; }

  get getDayTime() { return this.dayTime; }

  getPrecipitation(isMetricUnit = true) {
    if(this.precipitation !== 0)
      return isMetricUnit ? this.#toMilliMeter() : this.#toInches();
    return 'none';
  }

  getVisibility(isMetricUnit = true) {
    return isMetricUnit ? this.#toMeter() : this.#toMiles();
  }

  /**
   * @param {Zone} zone
   */
   set setZone(zone) {
    if (!(zone instanceof(Modules_zone__WEBPACK_IMPORTED_MODULE_3__["default"]))) throw new 'Invalid zone type.'
    this.zone = zone;
  }

  /**
   * @param {Temperature} temperature
   */
  set setTemperature(temperature) {
    if (!(temperature instanceof(Modules_temperature__WEBPACK_IMPORTED_MODULE_1__["default"]))) throw new 'Invalid temperature type.'
    this.temperature = temperature;
  }

  /**
   * @param {Wind} wind
   */
  set setWind(wind) {
    if (!(wind instanceof(Modules_wind__WEBPACK_IMPORTED_MODULE_2__["default"]))) throw new 'Invalid wind type.'
    this.wind = wind;
  }

  /**
   * @param {number} cloudiness
   */
  set setCloudiness(cloudiness) {
    this.cloudiness = cloudiness || 0;
  }

  /**
   * @param {number} visibility
   */
  set setVisibility(visibility) {
    this.visibility = visibility || 0;
  }

  /**
   * @param {string} current
   */
   set setCurrentTime(current) {
    this.current = current;
  }

  /**
   * @param {number} precipitation
   */
   set setPrecipitation(precipitation) {
    this.precipitation = precipitation || 0;
  }

  setDayTime(strSunset, strSunrise) {
    this.dayTime = {
      sunset: strSunset,
      sunrise: strSunrise
    };
  }

  setCurrentWeather(wid, wMain, wDescription, wIcon) {
    this.currentWeather = {
      id: wid,
      main: wMain,
      description: wDescription,
      icon: wIcon
    };
  }

  #toMilliMeter() {
    const conversionHelper = (mm) => Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(mm * 1, 2);

    return `${conversionHelper(this.precipitation)} ${spaceUnit.millimeter}`;
  }

  #toInches() {
    const conversionHelper = (mm) => Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(mm * 0.0393701, 2);

    return `${conversionHelper(this.precipitation)} ${spaceUnit.inches}`;
  }

  #toMeter() {
    const conversionHelper = (meter) =>  Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(meter / 1000, 1);
    if(this.visibility >= 1000) {
      const value = conversionHelper(this.visibility);
      return value >= 10 ? `>= ${value} ${spaceUnit.kilometer}` : `${value} ${spaceUnit.kilometer}`;
    }
    return `${this.visibility} ${spaceUnit.meter}`;
  }

  #toMiles() {
    const conversionHelper = (meter) => Utilities_math_helper__WEBPACK_IMPORTED_MODULE_0__["default"].getRound(meter * 0.00062137, 1);
    const value = conversionHelper(this.visibility);

    return value >= 6.2 ? `>= ${value} ${spaceUnit.miles}` : `${value} ${spaceUnit.miles}`;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsMEJBQTBCLG9EQUFJO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQ0FBcUMsc0VBQW1COztBQUV4RCxjQUFjLHNDQUFzQyxFQUFFLHFCQUFxQjtBQUMzRTs7QUFFQTtBQUNBLHFDQUFxQyxzRUFBbUI7O0FBRXhELGNBQWMsc0NBQXNDLEVBQUUsaUJBQWlCO0FBQ3ZFOztBQUVBO0FBQ0EseUNBQXlDLHNFQUFtQjtBQUM1RDtBQUNBO0FBQ0EsaUNBQWlDLE9BQU8sRUFBRSxvQkFBb0IsT0FBTyxPQUFPLEVBQUUsb0JBQW9CO0FBQ2xHO0FBQ0EsY0FBYyxpQkFBaUIsRUFBRSxnQkFBZ0I7QUFDakQ7O0FBRUE7QUFDQSx3Q0FBd0Msc0VBQW1CO0FBQzNEOztBQUVBLGdDQUFnQyxPQUFPLEVBQUUsZ0JBQWdCLE9BQU8sT0FBTyxFQUFFLGdCQUFnQjtBQUN6RjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvdGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvd2luZC5qcyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy96b25lLmpzIiwid2VicGFjazovL3RvcF93ZWF0aGVyX2FwcC8uL3NyYy91dGlsaXRpZXMvbWF0aC1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwLy4vc3JjL21vZHVsZXMvd2VhdGhlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTWF0aEhlbHBlciBmcm9tICdVdGlsaXRpZXMvbWF0aC1oZWxwZXInO1xuXG5jb25zdCB0ZW1wVW5pdCA9IHtcbiAgYzogJ8KwQycsXG4gIGY6ICfCsEYnXG59O1xuXG5jb25zdCBwcmVzc1VuaXQgPSB7XG4gIG1pbGxpYmFyOiAnbWJhcicsXG4gIGhlY3RvcGFzY2FsOiAnaFBhJyxcbiAgaW5jaDogJ2luSGcnXG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlbXBlcmF0dXJlIHtcbiAgY29uc3RydWN0b3Iob2JqVGVtcGVyYXR1cmUpIHtcbiAgICBpZiAoIW9ialRlbXBlcmF0dXJlKSB0aHJvdyBuZXcgJ0ludmFsaWQgdGVtcGVyYXR1cmUuJztcbiAgICB0aGlzLnRlbXAgPSBNYXRoSGVscGVyLmdldFJvdW5kKG9ialRlbXBlcmF0dXJlLnRlbXApO1xuICAgIHRoaXMudGVtcE1pbiA9IE1hdGhIZWxwZXIuZ2V0Um91bmQob2JqVGVtcGVyYXR1cmUudGVtcF9taW4pO1xuICAgIHRoaXMudGVtcE1heCA9IE1hdGhIZWxwZXIuZ2V0Um91bmQob2JqVGVtcGVyYXR1cmUudGVtcF9tYXgpO1xuICAgIHRoaXMudGVtcEZlZWxzTGlrZSA9IE1hdGhIZWxwZXIuZ2V0Um91bmQob2JqVGVtcGVyYXR1cmUuZmVlbHNfbGlrZSk7XG4gICAgdGhpcy5odW1pZGl0eSA9IG9ialRlbXBlcmF0dXJlLmh1bWlkaXR5O1xuICAgIHRoaXMucHJlc3N1cmUgPSBvYmpUZW1wZXJhdHVyZS5wcmVzc3VyZTtcbiAgfVxuXG4gIGdldFByZXNzdXJlKGlzTWV0cmljVW5pdCA9IHRydWUpIHtcbiAgICByZXR1cm4gaXNNZXRyaWNVbml0ID8gdGhpcy4jdG9CYXIoKSA6IHRoaXMuI3RvSW5jaGVzKCk7XG4gIH1cblxuICBnZXQgZ2V0SHVtaWRpdHkoKSB7IHJldHVybiBgJHt0aGlzLmh1bWlkaXR5fSVgOyB9XG5cbiAgZ2V0VGVtcGVyYXR1cmUoaXNNZXRyaWNVbml0ID0gdHJ1ZSkge1xuICAgIHJldHVybiBpc01ldHJpY1VuaXQgPyB0aGlzLiN0b0NlbHNpdXMoKSA6IHRoaXMuI3RvRmVocmVuaGVpdCgpO1xuICB9XG5cbiAgI3RvQ2Vsc2l1cygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVtcDogYCR7dGhpcy50ZW1wfSAke3RlbXBVbml0LmN9YCxcbiAgICAgIG1pbjogYCR7dGhpcy50ZW1wTWlufSAke3RlbXBVbml0LmN9YCxcbiAgICAgIG1heDogYCR7dGhpcy50ZW1wTWF4fSAke3RlbXBVbml0LmN9YCxcbiAgICAgIGZlZWxzOiBgJHt0aGlzLnRlbXBGZWVsc0xpa2V9ICR7dGVtcFVuaXQuY31gXG4gICAgfVxuICB9XG5cbiAgI3RvRmVocmVuaGVpdCgpIHtcbiAgICBjb25zdCBjb252ZXJzaW9uSGVscGVyID0gKHRlbXBlcmF0dXJlKSA9PiBNYXRoSGVscGVyLmdldFJvdW5kKCh0ZW1wZXJhdHVyZSAqIDEuOCkgKyAzMi4wKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZW1wOiBgJHtjb252ZXJzaW9uSGVscGVyKHRoaXMudGVtcCl9ICR7dGVtcFVuaXQuZn1gLFxuICAgICAgbWluOiBgJHtjb252ZXJzaW9uSGVscGVyKHRoaXMudGVtcE1pbil9ICR7dGVtcFVuaXQuZn1gLFxuICAgICAgbWF4OiBgJHtjb252ZXJzaW9uSGVscGVyKHRoaXMudGVtcE1heCl9ICR7dGVtcFVuaXQuZn1gLFxuICAgICAgZmVlbHM6IGAke2NvbnZlcnNpb25IZWxwZXIodGhpcy50ZW1wRmVlbHNMaWtlKX0gJHt0ZW1wVW5pdC5mfWBcbiAgICB9XG4gIH1cblxuICAjdG9CYXIoKSB7XG4gICAgY29uc3QgY29udmVyc2lvbkhlbHBlciA9IChocGFzY2FsKSA9PiBNYXRoSGVscGVyLmdldFJvdW5kKGhwYXNjYWwgKiAxLCAyKTtcblxuICAgIHJldHVybiBgJHtjb252ZXJzaW9uSGVscGVyKHRoaXMucHJlc3N1cmUpfSAke3ByZXNzVW5pdC5taWxsaWJhcn1gO1xuICB9XG5cbiAgI3RvSW5jaGVzKCkge1xuICAgIGNvbnN0IGNvbnZlcnNpb25IZWxwZXIgPSAoaHBhc2NhbCkgPT4gTWF0aEhlbHBlci5nZXRSb3VuZChocGFzY2FsICogMC4wMjk1MywgMik7XG5cbiAgICByZXR1cm4gYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnByZXNzdXJlKX0gJHtwcmVzc1VuaXQuaW5jaH1gO1xuICB9XG59XG4iLCJpbXBvcnQgTWF0aEhlbHBlciBmcm9tICdVdGlsaXRpZXMvbWF0aC1oZWxwZXInO1xuXG5jb25zdCB3aW5kVW5pdCA9IHtcbiAga21oOiAna20vaCcsXG4gIG1waDogJ21waCdcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdpbmQge1xuICBjb25zdHJ1Y3RvcihvYmpXaW5kKSB7XG4gICAgaWYgKCFvYmpXaW5kKSB0aHJvdyBuZXcgJ0ludmFsaWQgd2luZC4nO1xuXG4gICAgdGhpcy5zcGVlZCA9IG9ialdpbmQuc3BlZWQ7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBvYmpXaW5kLmRlZztcbiAgICB0aGlzLmhhc0d1c3QgPSAob2JqV2luZC5ndXN0ICE9PSB1bmRlZmluZWQpICYmIChvYmpXaW5kLmd1c3QgPiAuMSk7XG4gIH1cblxuICBnZXQgZ2V0RGlyZWN0aW9uKCkgeyByZXR1cm4gdGhpcy5kaXJlY3Rpb247IH1cblxuICBnZXQgaXNHdXN0T2ZXaW5kKCkgeyByZXR1cm4gdGhpcy5oYXNHdXN0OyB9XG5cbiAgZ2V0U3BlZWQoaXNNZXRyaWNVbml0ID0gdHJ1ZSkge1xuICAgIHJldHVybiBpc01ldHJpY1VuaXQgPyB0aGlzLiN0b0tNaCgpIDogdGhpcy4jdG9NUGgoKTtcbiAgfVxuXG4gICN0b0tNaCgpIHtcbiAgICBjb25zdCBjb252ZXJzaW9uSGVscGVyID0gKHNwZWVkKSA9PiBNYXRoSGVscGVyLmdldFJvdW5kKHNwZWVkICogMy42LCAxKTtcblxuICAgIHJldHVybiBgJHtjb252ZXJzaW9uSGVscGVyKHRoaXMuc3BlZWQpfSAke3dpbmRVbml0LmttaH1gO1xuICB9XG5cbiAgI3RvTVBoKCkge1xuICAgIGNvbnN0IGNvbnZlcnNpb25IZWxwZXIgPSAoc3BlZWQpID0+IE1hdGhIZWxwZXIuZ2V0Um91bmQoc3BlZWQgKiAyLjIzNjk0LCAxKTtcblxuICAgIHJldHVybiBgJHtjb252ZXJzaW9uSGVscGVyKHRoaXMuc3BlZWQpfSAke3dpbmRVbml0Lm1waH1gO1xuICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBab25lIHtcbiAgY29uc3RydWN0b3IoY2l0eSwgY291bnRyeSwgc3RhdGUsIGxvbmdpdHVkZSwgbGF0aXR1ZGUpIHtcbiAgICB0aGlzLmNpdHkgPSBjaXR5O1xuICAgIHRoaXMuY291bnRyeSA9IGNvdW50cnk7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMubG9uZ2l0dWRlID0gbG9uZ2l0dWRlO1xuICAgIHRoaXMubGF0aXR1ZGUgPSBsYXRpdHVkZTtcbiAgfVxuXG4gIGdldCBnZXRDaXR5KCkgeyByZXR1cm4gdGhpcy5jaXR5OyB9XG5cbiAgZ2V0IGdldENvdW50cnkoKSB7IHJldHVybiB0aGlzLmNvdW50cnk7IH1cblxuICBnZXQgZ2V0U3RhdGUoKSB7IHJldHVybiB0aGlzLnN0YXRlOyB9XG5cbiAgZ2V0Q29vcmRpbmF0ZSgpIHsgcmV0dXJuIHsgbG9uZ2l0dWRlOiB0aGlzLmxvbmdpdHVkZSwgbGF0aXR1ZGU6IHRoaXMubGF0aXR1ZGUgfTsgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWF0aEhlbHBlciB7XG4gIHN0YXRpYyBnZXRSb3VuZCh2YWx1ZSwgZGVjaW1hbCA9IDApIHtcbiAgICBjb25zdCByb3VuZCA9ICghZGVjaW1hbCB8fCBkZWNpbWFsIDwgMCkgPyAxIDogMTAgKiogZGVjaW1hbDtcbiAgICByZXR1cm4gTWF0aC5yb3VuZCgodmFsdWUgKyBOdW1iZXIuRVBTSUxPTikgKiByb3VuZCkgLyByb3VuZDtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTWF0aEhlbHBlciBmcm9tICdVdGlsaXRpZXMvbWF0aC1oZWxwZXInO1xuaW1wb3J0IFRlbXBlcmF0dXJlIGZyb20gJ01vZHVsZXMvdGVtcGVyYXR1cmUnO1xuaW1wb3J0IFdpbmQgZnJvbSAnTW9kdWxlcy93aW5kJztcbmltcG9ydCBab25lIGZyb20gJ01vZHVsZXMvem9uZSc7XG5cbmNvbnN0IHNwYWNlVW5pdCA9IHtcbiAgaW5jaGVzOiAgICAgJ2luJyxcbiAga2lsb21ldGVyOiAgJ2ttJyxcbiAgbWV0ZXI6ICAgICAgJ20nLFxuICBtaWxlczogICAgICAnbWknLFxuICBtaWxsaW1ldGVyOiAnbW0nXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBXZWF0aGVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy56b25lID0gdW5kZWZpbmVkO1xuICAgIHRoaXMudGVtcGVyYXR1cmUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy53aW5kID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuY2xvdWRpbmVzcyA9IDA7XG4gICAgdGhpcy52aXNpYmlsaXR5ID0gMDtcbiAgICB0aGlzLnByZWNpcGl0YXRpb24gPSAwO1xuICAgIHRoaXMuY3VycmVudFdlYXRoZXIgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jdXJyZW50ID0gJyc7XG4gICAgdGhpcy5kYXlUaW1lID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZ2V0IGdldFRlbXAoKSB7IHJldHVybiB0aGlzLnRlbXBlcmF0dXJlOyB9XG5cbiAgZ2V0IGdldFdpbmQoKSB7IHJldHVybiB0aGlzLndpbmQ7IH1cblxuICBnZXQgZ2V0Wm9uZSgpIHsgcmV0dXJuIHRoaXMuem9uZTsgfVxuXG4gIGdldCBnZXRDdXJyZW50V2VhdGhlcigpIHsgcmV0dXJuIHRoaXMuY3VycmVudFdlYXRoZXI7IH1cblxuICBnZXQgZ2V0Q2xvdWRpbmVzcygpIHsgcmV0dXJuIGAke3RoaXMuY2xvdWRpbmVzc30lYDsgfVxuXG4gIGdldCBnZXRDdXJyZW50VGltZSgpIHsgcmV0dXJuIHRoaXMuY3VycmVudDsgfVxuXG4gIGdldCBnZXREYXlUaW1lKCkgeyByZXR1cm4gdGhpcy5kYXlUaW1lOyB9XG5cbiAgZ2V0UHJlY2lwaXRhdGlvbihpc01ldHJpY1VuaXQgPSB0cnVlKSB7XG4gICAgaWYodGhpcy5wcmVjaXBpdGF0aW9uICE9PSAwKVxuICAgICAgcmV0dXJuIGlzTWV0cmljVW5pdCA/IHRoaXMuI3RvTWlsbGlNZXRlcigpIDogdGhpcy4jdG9JbmNoZXMoKTtcbiAgICByZXR1cm4gJ25vbmUnO1xuICB9XG5cbiAgZ2V0VmlzaWJpbGl0eShpc01ldHJpY1VuaXQgPSB0cnVlKSB7XG4gICAgcmV0dXJuIGlzTWV0cmljVW5pdCA/IHRoaXMuI3RvTWV0ZXIoKSA6IHRoaXMuI3RvTWlsZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1pvbmV9IHpvbmVcbiAgICovXG4gICBzZXQgc2V0Wm9uZSh6b25lKSB7XG4gICAgaWYgKCEoem9uZSBpbnN0YW5jZW9mKFpvbmUpKSkgdGhyb3cgbmV3ICdJbnZhbGlkIHpvbmUgdHlwZS4nXG4gICAgdGhpcy56b25lID0gem9uZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1RlbXBlcmF0dXJlfSB0ZW1wZXJhdHVyZVxuICAgKi9cbiAgc2V0IHNldFRlbXBlcmF0dXJlKHRlbXBlcmF0dXJlKSB7XG4gICAgaWYgKCEodGVtcGVyYXR1cmUgaW5zdGFuY2VvZihUZW1wZXJhdHVyZSkpKSB0aHJvdyBuZXcgJ0ludmFsaWQgdGVtcGVyYXR1cmUgdHlwZS4nXG4gICAgdGhpcy50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7V2luZH0gd2luZFxuICAgKi9cbiAgc2V0IHNldFdpbmQod2luZCkge1xuICAgIGlmICghKHdpbmQgaW5zdGFuY2VvZihXaW5kKSkpIHRocm93IG5ldyAnSW52YWxpZCB3aW5kIHR5cGUuJ1xuICAgIHRoaXMud2luZCA9IHdpbmQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNsb3VkaW5lc3NcbiAgICovXG4gIHNldCBzZXRDbG91ZGluZXNzKGNsb3VkaW5lc3MpIHtcbiAgICB0aGlzLmNsb3VkaW5lc3MgPSBjbG91ZGluZXNzIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZpc2liaWxpdHlcbiAgICovXG4gIHNldCBzZXRWaXNpYmlsaXR5KHZpc2liaWxpdHkpIHtcbiAgICB0aGlzLnZpc2liaWxpdHkgPSB2aXNpYmlsaXR5IHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGN1cnJlbnRcbiAgICovXG4gICBzZXQgc2V0Q3VycmVudFRpbWUoY3VycmVudCkge1xuICAgIHRoaXMuY3VycmVudCA9IGN1cnJlbnQ7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHByZWNpcGl0YXRpb25cbiAgICovXG4gICBzZXQgc2V0UHJlY2lwaXRhdGlvbihwcmVjaXBpdGF0aW9uKSB7XG4gICAgdGhpcy5wcmVjaXBpdGF0aW9uID0gcHJlY2lwaXRhdGlvbiB8fCAwO1xuICB9XG5cbiAgc2V0RGF5VGltZShzdHJTdW5zZXQsIHN0clN1bnJpc2UpIHtcbiAgICB0aGlzLmRheVRpbWUgPSB7XG4gICAgICBzdW5zZXQ6IHN0clN1bnNldCxcbiAgICAgIHN1bnJpc2U6IHN0clN1bnJpc2VcbiAgICB9O1xuICB9XG5cbiAgc2V0Q3VycmVudFdlYXRoZXIod2lkLCB3TWFpbiwgd0Rlc2NyaXB0aW9uLCB3SWNvbikge1xuICAgIHRoaXMuY3VycmVudFdlYXRoZXIgPSB7XG4gICAgICBpZDogd2lkLFxuICAgICAgbWFpbjogd01haW4sXG4gICAgICBkZXNjcmlwdGlvbjogd0Rlc2NyaXB0aW9uLFxuICAgICAgaWNvbjogd0ljb25cbiAgICB9O1xuICB9XG5cbiAgI3RvTWlsbGlNZXRlcigpIHtcbiAgICBjb25zdCBjb252ZXJzaW9uSGVscGVyID0gKG1tKSA9PiBNYXRoSGVscGVyLmdldFJvdW5kKG1tICogMSwgMik7XG5cbiAgICByZXR1cm4gYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnByZWNpcGl0YXRpb24pfSAke3NwYWNlVW5pdC5taWxsaW1ldGVyfWA7XG4gIH1cblxuICAjdG9JbmNoZXMoKSB7XG4gICAgY29uc3QgY29udmVyc2lvbkhlbHBlciA9IChtbSkgPT4gTWF0aEhlbHBlci5nZXRSb3VuZChtbSAqIDAuMDM5MzcwMSwgMik7XG5cbiAgICByZXR1cm4gYCR7Y29udmVyc2lvbkhlbHBlcih0aGlzLnByZWNpcGl0YXRpb24pfSAke3NwYWNlVW5pdC5pbmNoZXN9YDtcbiAgfVxuXG4gICN0b01ldGVyKCkge1xuICAgIGNvbnN0IGNvbnZlcnNpb25IZWxwZXIgPSAobWV0ZXIpID0+ICBNYXRoSGVscGVyLmdldFJvdW5kKG1ldGVyIC8gMTAwMCwgMSk7XG4gICAgaWYodGhpcy52aXNpYmlsaXR5ID49IDEwMDApIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29udmVyc2lvbkhlbHBlcih0aGlzLnZpc2liaWxpdHkpO1xuICAgICAgcmV0dXJuIHZhbHVlID49IDEwID8gYD49ICR7dmFsdWV9ICR7c3BhY2VVbml0LmtpbG9tZXRlcn1gIDogYCR7dmFsdWV9ICR7c3BhY2VVbml0LmtpbG9tZXRlcn1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy52aXNpYmlsaXR5fSAke3NwYWNlVW5pdC5tZXRlcn1gO1xuICB9XG5cbiAgI3RvTWlsZXMoKSB7XG4gICAgY29uc3QgY29udmVyc2lvbkhlbHBlciA9IChtZXRlcikgPT4gTWF0aEhlbHBlci5nZXRSb3VuZChtZXRlciAqIDAuMDAwNjIxMzcsIDEpO1xuICAgIGNvbnN0IHZhbHVlID0gY29udmVyc2lvbkhlbHBlcih0aGlzLnZpc2liaWxpdHkpO1xuXG4gICAgcmV0dXJuIHZhbHVlID49IDYuMiA/IGA+PSAke3ZhbHVlfSAke3NwYWNlVW5pdC5taWxlc31gIDogYCR7dmFsdWV9ICR7c3BhY2VVbml0Lm1pbGVzfWA7XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==