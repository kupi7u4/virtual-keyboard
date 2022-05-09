/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Button.js":
/*!***********************!*\
  !*** ./src/Button.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Button)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Button = /*#__PURE__*/function () {
  function Button(name, ru, en) {
    _classCallCheck(this, Button);

    this.en = en;
    this.name = name;
    this.ru = ru;
  }

  _createClass(Button, [{
    key: "generateButton",
    value: function generateButton() {
      var button = document.createElement('button');
      button.className = 'key key-k';
      button.setAttribute('data', "".concat(this.name));

      if (localStorage.getItem('lang') === 'ru') {
        button.innerHTML = "".concat(this.ru);
      } else {
        button.innerHTML = "".concat(this.en);
      }

      return button;
    }
  }]);

  return Button;
}();



/***/ }),

/***/ "./src/ControlButton.js":
/*!******************************!*\
  !*** ./src/ControlButton.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ControlButton)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var ControlButton = /*#__PURE__*/function (_Button) {
  _inherits(ControlButton, _Button);

  var _super = _createSuper(ControlButton);

  function ControlButton() {
    _classCallCheck(this, ControlButton);

    return _super.apply(this, arguments);
  }

  _createClass(ControlButton, [{
    key: "generateControlButton",
    value: function generateControlButton() {
      var button = document.createElement('button');
      button.className = 'key key-control';
      button.innerHTML = "".concat(this.ru);
      button.setAttribute('data', "".concat(this.name));

      if (this.name === 'Backspace' || this.name === 'CapsLock' || this.name === 'Enter' || this.name === 'ShiftLeft' || this.name === 'ShiftRight' || this.code === 'Enter') {
        button.classList.add('key-wide');
      } else if (this.name === 'Tab' || this.name === 'Delete' || this.name === 'ControlLeft' || this.name === 'ControlRight' || this.name === 'Win') {
        button.classList.add('key-wide2');
      } else if (this.name === 'Space') {
        button.classList.add('space');
      }

      return button;
    }
  }]);

  return ControlButton;
}(_Button__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/btn.js":
/*!********************!*\
  !*** ./src/btn.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BTN_DATA": () => (/* binding */ BTN_DATA)
/* harmony export */ });
var BTN_DATA = [{
  name: 'Backquote',
  ru: 'ё',
  en: '`',
  ruShift: '~',
  enShift: '~'
}, {
  name: 'Digit1',
  ru: '1',
  en: '1',
  ruShift: '!',
  enShift: '!'
}, {
  name: 'Digit2',
  ru: '2',
  en: '2',
  ruShift: '"',
  enShift: '@'
}, {
  name: 'Digit3',
  ru: '3',
  en: '3',
  ruShift: '№',
  enShift: '#'
}, {
  name: 'Digit4',
  ru: '4',
  en: '4',
  ruShift: ';',
  enShift: '$'
}, {
  name: 'Digit5',
  ru: '5',
  en: '5',
  ruShift: '%',
  enShift: '%'
}, {
  name: 'Digit6',
  ru: '6',
  en: '6',
  ruShift: ':',
  enShift: '^'
}, {
  name: 'Digit7',
  ru: '7',
  en: '7',
  ruShift: '?',
  enShift: '&'
}, {
  name: 'Digit8',
  ru: '8',
  en: '8',
  ruShift: '*',
  enShift: '*'
}, {
  name: 'Digit9',
  ru: '9',
  en: '9',
  ruShift: '(',
  enShift: '('
}, {
  name: 'Digit0',
  ru: '0',
  en: '0',
  ruShift: ')',
  enShift: ')'
}, {
  name: 'Minus',
  ru: '-',
  en: '-',
  ruShift: '_',
  enShift: '_'
}, {
  name: 'Equal',
  ru: '=',
  en: '=',
  ruShift: '+',
  enShift: '+'
}, {
  name: 'Backspace',
  ru: 'Backspace',
  en: 'Backspace'
}, {
  name: 'Tab',
  ru: 'Tab',
  en: 'Tab'
}, {
  name: 'KeyQ',
  ru: 'й',
  en: 'q'
}, {
  name: 'KeyW',
  ru: 'ц',
  en: 'w'
}, {
  name: 'KeyE',
  ru: 'у',
  en: 'e'
}, {
  name: 'KeyR',
  ru: 'к',
  en: 'r'
}, {
  name: 'KeyT',
  ru: 'е',
  en: 't'
}, {
  name: 'KeyY',
  ru: 'н',
  en: 'y'
}, {
  name: 'KeyU',
  ru: 'г',
  en: 'u'
}, {
  name: 'KeyI',
  ru: 'ш',
  en: 'i'
}, {
  name: 'KeyO',
  ru: 'щ',
  en: 'o'
}, {
  name: 'KeyP',
  ru: 'з',
  en: 'p'
}, {
  name: 'BracketLeft',
  ru: 'х',
  en: '[',
  enShift: '{'
}, {
  name: 'BracketRight',
  ru: 'ъ',
  en: ']',
  enShift: '}'
}, {
  name: 'Backslash',
  ru: '\\',
  en: '\\',
  ruShift: '/',
  enShift: '|'
}, {
  name: 'Delete',
  ru: 'Del',
  en: 'Del'
}, {
  name: 'CapsLock',
  ru: 'CapsLock',
  en: 'CapsLock'
}, {
  name: 'KeyA',
  ru: 'ф',
  en: 'a'
}, {
  name: 'KeyS',
  ru: 'ы',
  en: 's'
}, {
  name: 'KeyD',
  ru: 'в',
  en: 'd'
}, {
  name: 'KeyF',
  ru: 'а',
  en: 'f'
}, {
  name: 'KeyG',
  ru: 'п',
  en: 'g'
}, {
  name: 'KeyH',
  ru: 'р',
  en: 'h'
}, {
  name: 'KeyJ',
  ru: 'о',
  en: 'j'
}, {
  name: 'KeyK',
  ru: 'л',
  en: 'k'
}, {
  name: 'KeyL',
  ru: 'д',
  en: 'l'
}, {
  name: 'Semicolon',
  ru: 'ж',
  en: ';',
  enShift: ':'
}, {
  name: 'Quote',
  ru: 'э',
  en: '\'\'',
  enShift: '"'
}, {
  name: 'Enter',
  ru: 'Enter',
  en: 'Enter'
}, {
  name: 'ShiftLeft',
  ru: 'Shift',
  en: 'Shift'
}, {
  name: 'KeyZ',
  ru: 'я',
  en: 'z'
}, {
  name: 'KeyX',
  ru: 'ч',
  en: 'x'
}, {
  name: 'KeyC',
  ru: 'с',
  en: 'c'
}, {
  name: 'KeyV',
  ru: 'м',
  en: 'v'
}, {
  name: 'KeyB',
  ru: 'и',
  en: 'b'
}, {
  name: 'KeyN',
  ru: 'т',
  en: 'n'
}, {
  name: 'KeyM',
  ru: 'ь',
  en: 'm'
}, {
  name: 'Comma',
  ru: 'б',
  en: ',',
  enShift: '<'
}, {
  name: 'Period',
  ru: 'ю',
  en: '.',
  enShift: '>'
}, {
  name: 'Slash',
  ru: '.',
  en: '/',
  ruShift: ',',
  enShift: '?'
}, {
  name: 'ArrowUp',
  ru: '&#8593;',
  en: '&#8593;'
}, {
  name: 'ShiftRight',
  ru: 'Shift',
  en: 'Shift'
}, {
  name: 'ControlLeft',
  ru: 'Ctrl',
  en: 'Ctrl'
}, {
  name: 'Win',
  ru: 'Win'
}, {
  name: 'AltLeft',
  ru: 'Alt',
  en: 'Alt'
}, {
  name: 'Space',
  ru: '',
  en: ''
}, {
  name: 'AltRight',
  ru: 'Alt',
  en: 'Alt'
}, {
  name: 'ArrowLeft',
  ru: '&#8592;',
  en: '&#8592;'
}, {
  name: 'ArrowDown',
  ru: '&#8595;',
  en: '&#8595;'
}, {
  name: 'ArrowRight',
  ru: '&#8594;',
  en: '&#8594;'
}, {
  name: 'ControlRight',
  ru: 'Ctrl',
  en: 'Ctrl'
}];

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./src/Button.js");
/* harmony import */ var _btn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./btn */ "./src/btn.js");
/* harmony import */ var _ControlButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ControlButton */ "./src/ControlButton.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




 // отрисовка блоков страницы

var renderBlock = function renderBlock(element, name, content) {
  var node = document.createElement("".concat(element));
  node.className = name;
  node.textContent = content;
  return node;
};

var body = document.querySelector('body');
var wrap = renderBlock('div', 'wrap');
var header = renderBlock('h1', 'h1', 'Виртуальная клавиатура');
var textarea = renderBlock('textarea', 'textarea');
var keyboardWrap = renderBlock('div', 'keyboard_wrap');
var keyboard = renderBlock('div', 'keyboard');
var note = renderBlock('div', 'notes');
var note1 = renderBlock('p', 'note-text', 'Клавиатура создана в операционной системе Windows');
var note2 = renderBlock('p', 'note-text', 'Комбинация для переключения языка: левыe ctrl + alt');
window.addEventListener('DOMContentLoaded', function () {
  textarea.focus();
});
body.append(wrap);
wrap.append(header);
wrap.append(textarea);
wrap.append(keyboardWrap);
keyboardWrap.append(keyboard);
wrap.append(note);
note.append(note1);
note.append(note2); // отрисовка клавиатуры

var controls = ['Backspace', 'Tab', 'Delete', 'CapsLock', 'Enter', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'Win', 'AltLeft', 'Space', 'AltRight', 'ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];

var renderButtons = function renderButtons(arr, container) {
  arr.forEach(function (button) {
    var element;

    if (controls.includes(button.name)) {
      element = new _ControlButton__WEBPACK_IMPORTED_MODULE_3__["default"](button.name, button.ru);
      container.append(element.generateControlButton());
    } else {
      element = new _Button__WEBPACK_IMPORTED_MODULE_1__["default"](button.name, button.ru, button.en);
      container.append(element.generateButton());
    }

    return container;
  });
};

renderButtons(_btn__WEBPACK_IMPORTED_MODULE_2__.BTN_DATA, keyboard); // Клик по кнопке

document.addEventListener('keydown', function (el) {
  var keys = document.querySelectorAll('.key');

  var _iterator = _createForOfIteratorHelper(keys),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var key = _step.value;
      console.log('клавиша нажата ', el.key);

      if (el.code === key.getAttribute('data')) {
        key.classList.add('active');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
document.addEventListener('keyup', function (el) {
  var keys = document.querySelectorAll('.key');

  var _iterator2 = _createForOfIteratorHelper(keys),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var key = _step2.value;

      if (el.code === key.getAttribute('data')) {
        key.classList.remove('active');
      }
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
});
keyboard.addEventListener('mousedown', function (el) {
  var keys = document.querySelectorAll('.key');

  var _iterator3 = _createForOfIteratorHelper(keys),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var key = _step3.value;

      if (el.target.getAttribute('data') === key.getAttribute('data')) {
        key.classList.add('active');
      }
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }
});
keyboard.addEventListener('mouseup', function (el) {
  var keys = document.querySelectorAll('.key');

  var _iterator4 = _createForOfIteratorHelper(keys),
      _step4;

  try {
    for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
      var key = _step4.value;

      if (el.target.getAttribute('data') === key.getAttribute('data')) {
        key.classList.remove('active');
      }
    }
  } catch (err) {
    _iterator4.e(err);
  } finally {
    _iterator4.f();
  }
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map