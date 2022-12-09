/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!**************************************!*\
  !*** ./src/utilities/dom-manager.js ***!
  \**************************************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tTWFuYWdlci5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTEE7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0VBQXdFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVEsMkNBQTJDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wX3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3Bfd2VhdGhlcl9hcHAvLi9zcmMvdXRpbGl0aWVzL2RvbS1tYW5hZ2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5jb25zdCBpbWFnZVBhdGggPSAnLi9pbWFnZXMvJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9tTWFuYWdlciB7XG4gIC8vIFJldHVybnMgdHJ1ZSBpZiBpdCBpcyBhIERPTSBlbGVtZW50XG4gIHN0YXRpYyAjaXNFbGVtZW50KG8pIHtcbiAgICByZXR1cm4gKFxuICAgICAgdHlwZW9mIEhUTUxFbGVtZW50ID09PSBcIm9iamVjdFwiID8gbyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50IDogLy8gRE9NMlxuICAgICAgbyAmJiB0eXBlb2YgbyA9PT0gXCJvYmplY3RcIiAmJiBvICE9PSBudWxsICYmIG8ubm9kZVR5cGUgPT09IDEgJiYgdHlwZW9mIG8ubm9kZU5hbWU9PT1cInN0cmluZ1wiXG4gICAgKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAgIGNvbnN0IGVsZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuICAgIC8vIEFkZCBjbGFzcyBuYW1lIG9yIElEXG4gICAgaWYoY2xhc3NOYW1lKSBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICBpZihpZCkgZWxlbS5pZCA9IGlkO1xuICAgIC8vIEFkZCB0ZXh0IGNvbnRlbnRcbiAgICBpZihjb250ZW50KSBlbGVtLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAvLyBFdmVudHVhbGx5IGFkZCBjaGlsZCBvciBjaGlsZHJlblxuICAgIERvbU1hbmFnZXIuYWRkTm9kZUNoaWxkKGVsZW0sIGNoaWxkcmVuKTtcbiAgICByZXR1cm4gZWxlbTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlQ29udGVudCh0eXBlLCBjb250ZW50LCBjbGFzc05hbWUgPSBudWxsLCBpZCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVDbGFzcyh0eXBlLCBjbGFzc05hbWUsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVJRCh0eXBlLCBpZCwgY2xhc3NOYW1lID0gbnVsbCwgY29udGVudCA9IG51bGwpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIG51bGwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBsb2NhbCA9IHRydWUpIHtcbiAgICBjb25zdCBmaWxlRnVsbFBhdGggPSBsb2NhbCA/IGltYWdlUGF0aCArIGltZ0ZpbGVOYW1lIDogaW1nRmlsZU5hbWU7IC8vIGxvY2FsIHBhdGggb3IgdXJsXG4gICAgY29uc3Qgbm9kZSA9IERvbU1hbmFnZXIuY3JlYXRlTm9kZSgnaW1nJywgY2xhc3NOYW1lLCBpZCwgbnVsbCwgbnVsbCk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGZpbGVGdWxsUGF0aCk7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGFsdCk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm9kZUltZ0NsYXNzKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQgPSBudWxsLCBsb2NhbCA9IHRydWUpIHtcbiAgICByZXR1cm4gRG9tTWFuYWdlci5jcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQsIGxvY2FsKTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVOb2RlSW1nSUQoaW1nRmlsZU5hbWUsIGFsdCwgaWQsIGNsYXNzTmFtZSA9IG51bGwsIGxvY2FsID0gdHJ1ZSkge1xuICAgIHJldHVybiBEb21NYW5hZ2VyLmNyZWF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGFsdCwgY2xhc3NOYW1lLCBpZCwgbG9jYWwpO1xuICB9XG5cbiAgc3RhdGljIGNyZWF0ZU5vZGVMaW5rKGxpbmssIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgY29udGVudCA9IG51bGwsIGNoaWxkcmVuID0gbnVsbCkge1xuICAgIGNvbnN0IG5vZGUgPSBEb21NYW5hZ2VyLmNyZWF0ZU5vZGUoJ2EnLCBjbGFzc05hbWUsIGlkLCBjb250ZW50LCBjaGlsZHJlbik7XG4gICAgbm9kZS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBsaW5rKTtcbiAgICBub2RlLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xuICAgIHJldHVybiBub2RlO1xuICB9XG5cbiAgc3RhdGljIGFkZE5vZGVDaGlsZChmYXRoZXIsIGNoaWxkcmVuKSB7XG4gICAgaWYoY2hpbGRyZW4pIHtcbiAgICAgIGlmKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7IC8vIENvbnRhaW5zIG1vcmUgdGhhbiBvbmUgY2hpbGQgaW4gQXJyYXlcbiAgICAgICAgY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgZmF0aGVyLmFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYoRG9tTWFuYWdlci4jaXNFbGVtZW50KGNoaWxkcmVuKSkgeyAvLyBDb250YWlucyBqdXN0IG9uZSBjaGlsZFxuICAgICAgICBmYXRoZXIuYXBwZW5kQ2hpbGQoY2hpbGRyZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGVBZGROb2RlKHR5cGUsIGZhdGhlciwgY2xhc3NOYW1lID0gbnVsbCwgaWQgPSBudWxsLCBjb250ZW50ID0gbnVsbCwgY2hpbGRyZW4gPSBudWxsKSB7XG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlKHR5cGUsIGNsYXNzTmFtZSwgaWQsIGNvbnRlbnQsIGNoaWxkcmVuKTtcbiAgICBmYXRoZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlQWRkTm9kZUltZyhpbWdGaWxlTmFtZSwgYWx0LCBmYXRoZXIsIGNsYXNzTmFtZSA9IG51bGwsIGlkID0gbnVsbCwgbG9jYWwgPSB0cnVlKSB7XG4gICAgLy8gQXBwZW5kIHRoZSBuZXcgbm9kZSBpbiBmYXRoZXJcbiAgICBjb25zdCBub2RlID0gRG9tTWFuYWdlci5jcmVhdGVOb2RlSW1nKGltZ0ZpbGVOYW1lLCBhbHQsIGNsYXNzTmFtZSwgaWQsIGxvY2FsKTtcbiAgICBmYXRoZXIuYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlTm9kZUltZ0J5U2VsZWN0b3IoaW1nRmlsZU5hbWUsIGZhdGhlciwgc2VsZWN0b3IsIGxvY2FsID0gdHJ1ZSkge1xuICAgIGNvbnN0IGltZ05vZGUgPSBmYXRoZXIucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgY29uc3QgdXJsID0gbG9jYWwgPyBpbWFnZVBhdGggKyBpbWdGaWxlTmFtZSA6IGltZ0ZpbGVOYW1lO1xuICAgIGlmKGltZ05vZGUpIGltZ05vZGUuc2V0QXR0cmlidXRlKCdzcmMnLCB1cmwpO1xuICB9XG5cbiAgc3RhdGljIHVwZGF0ZU5vZGVJbWcoaW1nRmlsZU5hbWUsIGltZ05vZGUsIGxvY2FsID0gdHJ1ZSkge1xuICAgIGNvbnN0IHVybCA9IGxvY2FsID8gaW1hZ2VQYXRoICsgaW1nRmlsZU5hbWUgOiBpbWdGaWxlTmFtZTtcbiAgICBpZihpbWdOb2RlKSBpbWdOb2RlLnNldEF0dHJpYnV0ZSgnc3JjJywgdXJsKTtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVBbGxDaGlsZE5vZGVzKHBhcmVudCkge1xuICAgIHdoaWxlIChwYXJlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgaXNOb2RlSGlkZShub2RlKSB7XG4gICAgcmV0dXJuIG5vZGUuc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnO1xuICB9XG5cbiAgc3RhdGljIHRvZ2dsZURpc3BsYXlCeU5vZGUobm9kZSwgbmV4dERpc3BsYXkgPSB1bmRlZmluZWQpIHtcbiAgICBpZihub2RlKSB7XG4gICAgICBpZihub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPSBuZXh0RGlzcGxheSB8fCBub2RlLnN0eWxlLmRpc3BsYXk7XG4gICAgICB9XG4gICAgICBjb25zdCBwcmV2RGlzcGxheSA9IG5vZGUuc3R5bGUuZGlzcGxheTtcbiAgICAgIG5vZGUuc3R5bGUuZGlzcGxheSA9IChub2RlLnN0eWxlLmRpc3BsYXkgIT09ICdub25lJykgPyAnbm9uZScgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBub2RlLmRhdGFzZXQucHJldkRpc3BsYXk7XG4gICAgICBub2RlLmRhdGFzZXQucHJldkRpc3BsYXkgPSBwcmV2RGlzcGxheTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlRGlzcGxheShub2RlTmFtZSwgbmV4dERpc3BsYXkgPSB1bmRlZmluZWQpIHtcbiAgICBjb25zdCBub2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihub2RlTmFtZSk7XG4gICAgRG9tTWFuYWdlci50b2dnbGVEaXNwbGF5QnlOb2RlKG5vZGUsIG5leHREaXNwbGF5KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9