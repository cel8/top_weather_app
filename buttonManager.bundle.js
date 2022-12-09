/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/utilities/dom-manager.js":
/*!**************************************!*\
  !*** ./src/utilities/dom-manager.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DomManager)
/* harmony export */ });

const imagePath = './images/';

class DomManager {
  // Returns true if it is a DOM element
  static #isElement(o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : // DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  }

  static createNode(type, className = null, id = null, content = null, children = null) {
    const elem = document.createElement(type);
    // Add class name or ID
    if(className) elem.className = className;
    if(id) elem.id = id;
    // Add text content
    if(content) elem.textContent = content;
    // Eventually add child or children
    DomManager.addNodeChild(elem, children);
    return elem;
  }

  static createNodeContent(type, content, className = null, id = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeClass(type, className, id = null, content = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeID(type, id, className = null, content = null) {
    return DomManager.createNode(type, className, id, content, null);
  }

  static createNodeImg(imgFileName, alt, className = null, id = null, local = true) {
    const fileFullPath = local ? imagePath + imgFileName : imgFileName; // local path or url
    const node = DomManager.createNode('img', className, id, null, null);
    node.setAttribute('src', fileFullPath);
    node.setAttribute('alt', alt);
    return node;
  }

  static createNodeImgClass(imgFileName, alt, className, id = null, local = true) {
    return DomManager.createNodeImg(imgFileName, alt, className, id, local);
  }

  static createNodeImgID(imgFileName, alt, id, className = null, local = true) {
    return DomManager.createNodeImg(imgFileName, alt, className, id, local);
  }

  static createNodeLink(link, className = null, id = null, content = null, children = null) {
    const node = DomManager.createNode('a', className, id, content, children);
    node.setAttribute('href', link);
    node.setAttribute('target', '_blank');
    return node;
  }

  static addNodeChild(father, children) {
    if(children) {
      if(Array.isArray(children)) { // Contains more than one child in Array
        children.forEach(child => {
          father.appendChild(child);
        });
      } else if(DomManager.#isElement(children)) { // Contains just one child
        father.appendChild(children);
      }
    }
  }

  static createAddNode(type, father, className = null, id = null, content = null, children = null) {
    // Append the new node in father
    const node = DomManager.createNode(type, className, id, content, children);
    father.appendChild(node);
    return node;
  }

  static createAddNodeImg(imgFileName, alt, father, className = null, id = null, local = true) {
    // Append the new node in father
    const node = DomManager.createNodeImg(imgFileName, alt, className, id, local);
    father.appendChild(node);
    return node;
  }

  static updateNodeImgBySelector(imgFileName, father, selector, local = true) {
    const imgNode = father.querySelector(selector);
    const url = local ? imagePath + imgFileName : imgFileName;
    if(imgNode) imgNode.setAttribute('src', url);
  }

  static updateNodeImg(imgFileName, imgNode, local = true) {
    const url = local ? imagePath + imgFileName : imgFileName;
    if(imgNode) imgNode.setAttribute('src', url);
  }

  static removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }

  static isNodeHide(node) {
    return node.style.display === 'none';
  }

  static toggleDisplayByNode(node, nextDisplay = undefined) {
    if(node) {
      if(node.dataset.prevDisplay === undefined) {
        node.dataset.prevDisplay = nextDisplay || node.style.display;
      }
      const prevDisplay = node.style.display;
      node.style.display = (node.style.display !== 'none') ? 'none' 
                                                          : node.dataset.prevDisplay;
      node.dataset.prevDisplay = prevDisplay;
    }
  }

  static toggleDisplay(nodeName, nextDisplay = undefined) {
    const node = document.querySelector(nodeName);
    DomManager.toggleDisplayByNode(node, nextDisplay);
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
/*!*****************************************!*\
  !*** ./src/utilities/button-manager.js ***!
  \*****************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ButtonManager)
/* harmony export */ });
/* harmony import */ var Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Utilities/dom-manager */ "./src/utilities/dom-manager.js");


class ButtonManager {
  static createButton(btnText = '', svgIconFileName = null, className = null, cbEvent = undefined) {
    const btn = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeClass('button', className || 'navButton');
    // Insert icon when exist
    if(svgIconFileName) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNodeImg(svgIconFileName, btnText, btn, 'icon');
    }
    // Add text when contains something
    if(btnText.length > 0) {
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('p', btn, null, null, btnText);
    }
    // Add button event
    btn.onclick = cbEvent;
    return btn;  
  }

  static editButtonText(btn, text = '') {
    const btnText = btn.querySelector('p');
    if(btnText) {
      /* Remove or edit text */
      if(text === '') {
        btnText.remove();
      } else {
        btnText.textContent = text;
      }
    } else if(btnText.length > 0) { /* Create node */
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNode('p', btn, null, null, btnText);
    }
  }

  static editButtonImage(btn, svgIconFileName = null) {
    const btnText    = btn.querySelector('p');
    const btnImgNode = btn.querySelector('.icon');
    if(btnImgNode) {
      if(!svgIconFileName) {
        btnImgNode.remove();
      } else {
        Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].updateNodeImg(svgIconFileName, btnImgNode);
      }
    } else if(svgIconFileName) { // Insert icon when exist
      const altText = btnText ? btnText.textContent : '';
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createAddNodeImg(svgIconFileName, altText, btn, 'icon');
    }
  }

  static createImageButton(svgIconFileName, className = null, cbEvent = undefined) {
    return ButtonManager.createButton('', svgIconFileName, className, cbEvent)
  }

  static createTextButton(btnText, className = null, cbEvent = undefined) {
    return ButtonManager.createButton(btnText, null, className, cbEvent)
  }

  static createImageLinkButton(link, svgIconFileName) {
    const node = Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeLink(link, null, null, null, 
      Utilities_dom_manager__WEBPACK_IMPORTED_MODULE_0__["default"].createNodeImg(svgIconFileName, 'imageLink', 'icon-link')
    );
    return node;
  }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uTWFuYWdlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsMkNBQTJDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFaEM7QUFDZjtBQUNBLGdCQUFnQiw2RUFBMEI7QUFDMUM7QUFDQTtBQUNBLE1BQU0sOEVBQTJCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLE1BQU0sMkVBQXdCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNLDhCQUE4QjtBQUNwQyxNQUFNLDJFQUF3QjtBQUM5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUixRQUFRLDJFQUF3QjtBQUNoQztBQUNBLE1BQU0sMkJBQTJCO0FBQ2pDO0FBQ0EsTUFBTSw4RUFBMkI7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCLDRFQUF5QjtBQUMxQyxNQUFNLDJFQUF3QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcF93ZWF0aGVyX2FwcC8uL3NyYy91dGlsaXRpZXMvZG9tLW1hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcF93ZWF0aGVyX2FwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwLy4vc3JjL3V0aWxpdGllcy9idXR0b24tbWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmNvbnN0IGltYWdlUGF0aCA9ICcuL2ltYWdlcy8nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb21NYW5hZ2VyIHtcbiAgLy8gUmV0dXJucyB0cnVlIGlmIGl0IGlzIGEgRE9NIGVsZW1lbnRcbiAgc3RhdGljICNpc0VsZW1lbnQobykge1xuICAgIHJldHVybiAoXG4gICAgICB0eXBlb2YgSFRNTEVsZW1lbnQgPT09IFwib2JqZWN0XCIgPyBvIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQgOiAvLyBET00yXG4gICAgICBvICYmIHR5cGVvZiBvID09PSBcIm9iamVjdFwiICYmIG8gIT09IG51bGwgJiYgby5ub2RlVHlwZSA9PT0gMSAmJiB0eXBlb2Ygby5ub2RlTmFtZT09PVwic3RyaW5nXCJcbiAgICApO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gICAgY29uc3QgZWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodHlwZSk7XG4gICAgLy8gQWRkIGNsYXNzIG5hbWUgb3IgSURcbiAgICBpZihjbGFzc05hbWUpIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIGlmKGlkKSBlbGVtLmlkID0gaWQ7XG4gICAgLy8gQWRkIHRleHQgY29udGVudFxuICAgIGlmKGNvbnRlbnQpIGVsZW0udGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIC8vIEV2ZW50dWFsbHkgYWRkIGNoaWxkIG9yIGNoaWxkcmVuXG4gICAgRG9tTWFuYWdlci5hZGROb2RlQ2hpbGQoZWxlbSwgY2hpbGRyZW4pO1xuICAgIHJldHVybiBlbGVtO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVDb250ZW50KHR5cGUsIGNvbnRlbnQsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCkge1xuICAgIHJldHVybiBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUNsYXNzKHR5cGUsIGNsYXNzTmFtZSwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCkge1xuICAgIHJldHVybiBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUlEKHR5cGUsIGlkLCBjbGFzc05hbWUgPSBudWxsLCBjb250ZW50ID0gbnVsbCkge1xuICAgIHJldHVybiBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgbnVsbCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGxvY2FsID0gdHJ1ZSkge1xuICAgIGNvbnN0IGZpbGVGdWxsUGF0aCA9IGxvY2FsID8gaW1hZ2VQYXRoICsgaW1nRmlsZU5hbWUgOiBpbWdGaWxlTmFtZTsgLy8gbG9jYWwgcGF0aCBvciB1cmxcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlKCdpbWcnLCBjbGFzc05hbWUsIGlkLCBudWxsLCBudWxsKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgZmlsZUZ1bGxQYXRoKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnYWx0JywgYWx0KTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlSW1nQ2xhc3MoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCA9IG51bGwsIGxvY2FsID0gdHJ1ZSkge1xuICAgIHJldHVybiBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCwgbG9jYWwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVJbWdJRChpbWdGaWxlTmFtZSwgYWx0LCBpZCwgY2xhc3NOYW1lID0gbnVsbCwgbG9jYWwgPSB0cnVlKSB7XG4gICAgcmV0dXJuIERvbU1hbmFnZXIuY3JlYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBjbGFzc05hbWUsIGlkLCBsb2NhbCk7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUxpbmsobGluaywgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gICAgY29uc3Qgbm9kZSA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZSgnYScsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIGNoaWxkcmVuKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgnaHJlZicsIGxpbmspO1xuICAgIG5vZGUuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgYWRkTm9kZUNoaWxkKGZhdGhlciwgY2hpbGRyZW4pIHtcbiAgICBpZihjaGlsZHJlbikge1xuICAgICAgaWYoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHsgLy8gQ29udGFpbnMgbW9yZSB0aGFuIG9uZSBjaGlsZCBpbiBBcnJheVxuICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZihEb21NYW5hZ2VyLiNpc0VsZW1lbnQoY2hpbGRyZW4pKSB7IC8vIENvbnRhaW5zIGp1c3Qgb25lIGNoaWxkXG4gICAgICAgIGZhdGhlci5hcHBlbmRDaGlsZChjaGlsZHJlbik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUFkZE5vZGUodHlwZSwgZmF0aGVyLCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwsIGNvbnRlbnQgPSBudWxsLCBjaGlsZHJlbiA9IG51bGwpIHtcbiAgICAvLyBBcHBlbmQgdGhlIG5ldyBub2RlIGluIGZhdGhlclxuICAgIGNvbnN0IG5vZGUgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUodHlwZSwgY2xhc3NOYW1lLCBpZCwgY29udGVudCwgY2hpbGRyZW4pO1xuICAgIGZhdGhlci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVBZGROb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGZhdGhlciwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBsb2NhbCA9IHRydWUpIHtcbiAgICAvLyBBcHBlbmQgdGhlIG5ldyBub2RlIGluIGZhdGhlclxuICAgIGNvbnN0IG5vZGUgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCwgbG9jYWwpO1xuICAgIGZhdGhlci5hcHBlbmRDaGlsZChub2RlKTtcbiAgICByZXR1cm4gbm9kZTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVOb2RlSW1nQnlTZWxlY3RvcihpbWdGaWxlTmFtZSwgZmF0aGVyLCBzZWxlY3RvciwgbG9jYWwgPSB0cnVlKSB7XG4gICAgY29uc3QgaW1nTm9kZSA9IGZhdGhlci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICBjb25zdCB1cmwgPSBsb2NhbCA/IGltYWdlUGF0aCArIGltZ0ZpbGVOYW1lIDogaW1nRmlsZU5hbWU7XG4gICAgaWYoaW1nTm9kZSkgaW1nTm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHVybCk7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTm9kZUltZyhpbWdGaWxlTmFtZSwgaW1nTm9kZSwgbG9jYWwgPSB0cnVlKSB7XG4gICAgY29uc3QgdXJsID0gbG9jYWwgPyBpbWFnZVBhdGggKyBpbWdGaWxlTmFtZSA6IGltZ0ZpbGVOYW1lO1xuICAgIGlmKGltZ05vZGUpIGltZ05vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICB9XG5cbiAgc3RhdGljIHJlbW92ZUFsbENoaWxkTm9kZXMocGFyZW50KSB7XG4gICAgd2hpbGUgKHBhcmVudC5maXJzdENoaWxkKSB7XG4gICAgICBwYXJlbnQucmVtb3ZlQ2hpbGQocGFyZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBpc05vZGVIaWRlKG5vZGUpIHtcbiAgICByZXR1cm4gbm9kZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZSc7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlRGlzcGxheUJ5Tm9kZShub2RlLCBuZXh0RGlzcGxheSA9IHVuZGVmaW5lZCkge1xuICAgIGlmKG5vZGUpIHtcbiAgICAgIGlmKG5vZGUuZGF0YXNldC5wcmV2RGlzcGxheSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vZGUuZGF0YXNldC5wcmV2RGlzcGxheSA9IG5leHREaXNwbGF5IHx8IG5vZGUuc3R5bGUuZGlzcGxheTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByZXZEaXNwbGF5ID0gbm9kZS5zdHlsZS5kaXNwbGF5O1xuICAgICAgbm9kZS5zdHlsZS5kaXNwbGF5ID0gKG5vZGUuc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKSA/ICdub25lJyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5vZGUuZGF0YXNldC5wcmV2RGlzcGxheTtcbiAgICAgIG5vZGUuZGF0YXNldC5wcmV2RGlzcGxheSA9IHByZXZEaXNwbGF5O1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyB0b2dnbGVEaXNwbGF5KG5vZGVOYW1lLCBuZXh0RGlzcGxheSA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IG5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG5vZGVOYW1lKTtcbiAgICBEb21NYW5hZ2VyLnRvZ2dsZURpc3BsYXlCeU5vZGUobm9kZSwgbmV4dERpc3BsYXkpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBEb21NYW5hZ2VyIGZyb20gJ1V0aWxpdGllcy9kb20tbWFuYWdlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJ1dHRvbk1hbmFnZXIge1xuICBzdGF0aWMgY3JlYXRlQnV0dG9uKGJ0blRleHQgPSAnJywgc3ZnSWNvbkZpbGVOYW1lID0gbnVsbCwgY2xhc3NOYW1lID0gbnVsbCwgY2JFdmVudCA9IHVuZGVmaW5lZCkge1xuICAgIGNvbnN0IGJ0biA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZUNsYXNzKCdidXR0b24nLCBjbGFzc05hbWUgfHwgJ25hdkJ1dHRvbicpO1xuICAgIC8vIEluc2VydCBpY29uIHdoZW4gZXhpc3RcbiAgICBpZihzdmdJY29uRmlsZU5hbWUpIHtcbiAgICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZUltZyhzdmdJY29uRmlsZU5hbWUsIGJ0blRleHQsIGJ0biwgJ2ljb24nKTtcbiAgICB9XG4gICAgLy8gQWRkIHRleHQgd2hlbiBjb250YWlucyBzb21ldGhpbmdcbiAgICBpZihidG5UZXh0Lmxlbmd0aCA+IDApIHtcbiAgICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGJ0biwgbnVsbCwgbnVsbCwgYnRuVGV4dCk7XG4gICAgfVxuICAgIC8vIEFkZCBidXR0b24gZXZlbnRcbiAgICBidG4ub25jbGljayA9IGNiRXZlbnQ7XG4gICAgcmV0dXJuIGJ0bjsgIFxuICB9XG5cbiAgc3RhdGljIGVkaXRCdXR0b25UZXh0KGJ0biwgdGV4dCA9ICcnKSB7XG4gICAgY29uc3QgYnRuVGV4dCA9IGJ0bi5xdWVyeVNlbGVjdG9yKCdwJyk7XG4gICAgaWYoYnRuVGV4dCkge1xuICAgICAgLyogUmVtb3ZlIG9yIGVkaXQgdGV4dCAqL1xuICAgICAgaWYodGV4dCA9PT0gJycpIHtcbiAgICAgICAgYnRuVGV4dC5yZW1vdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ0blRleHQudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZihidG5UZXh0Lmxlbmd0aCA+IDApIHsgLyogQ3JlYXRlIG5vZGUgKi9cbiAgICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZSgncCcsIGJ0biwgbnVsbCwgbnVsbCwgYnRuVGV4dCk7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGVkaXRCdXR0b25JbWFnZShidG4sIHN2Z0ljb25GaWxlTmFtZSA9IG51bGwpIHtcbiAgICBjb25zdCBidG5UZXh0ICAgID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJ3AnKTtcbiAgICBjb25zdCBidG5JbWdOb2RlID0gYnRuLnF1ZXJ5U2VsZWN0b3IoJy5pY29uJyk7XG4gICAgaWYoYnRuSW1nTm9kZSkge1xuICAgICAgaWYoIXN2Z0ljb25GaWxlTmFtZSkge1xuICAgICAgICBidG5JbWdOb2RlLnJlbW92ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgRG9tTWFuYWdlci51cGRhdGVOb2RlSW1nKHN2Z0ljb25GaWxlTmFtZSwgYnRuSW1nTm9kZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmKHN2Z0ljb25GaWxlTmFtZSkgeyAvLyBJbnNlcnQgaWNvbiB3aGVuIGV4aXN0XG4gICAgICBjb25zdCBhbHRUZXh0ID0gYnRuVGV4dCA/IGJ0blRleHQudGV4dENvbnRlbnQgOiAnJztcbiAgICAgIERvbU1hbmFnZXIuY3JlYXRlQWRkTm9kZUltZyhzdmdJY29uRmlsZU5hbWUsIGFsdFRleHQsIGJ0biwgJ2ljb24nKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlSW1hZ2VCdXR0b24oc3ZnSWNvbkZpbGVOYW1lLCBjbGFzc05hbWUgPSBudWxsLCBjYkV2ZW50ID0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIEJ1dHRvbk1hbmFnZXIuY3JlYXRlQnV0dG9uKCcnLCBzdmdJY29uRmlsZU5hbWUsIGNsYXNzTmFtZSwgY2JFdmVudClcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVUZXh0QnV0dG9uKGJ0blRleHQsIGNsYXNzTmFtZSA9IG51bGwsIGNiRXZlbnQgPSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQnV0dG9uTWFuYWdlci5jcmVhdGVCdXR0b24oYnRuVGV4dCwgbnVsbCwgY2xhc3NOYW1lLCBjYkV2ZW50KVxuICB9XG5cbiAgc3RhdGljIGNyZWF0ZUltYWdlTGlua0J1dHRvbihsaW5rLCBzdmdJY29uRmlsZU5hbWUpIHtcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlTGluayhsaW5rLCBudWxsLCBudWxsLCBudWxsLCBcbiAgICAgIERvbU1hbmFnZXIuY3JlYXRlTm9kZUltZyhzdmdJY29uRmlsZU5hbWUsICdpbWFnZUxpbmsnLCAnaWNvbi1saW5rJylcbiAgICApO1xuICAgIHJldHVybiBub2RlO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=