/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/popup.js":
/*!*********************************!*\
  !*** ./src/components/popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ openPopup)\n/* harmony export */ });\nfunction openPopup($) {\n  function closePopup(event) {\n    var $popup = $('.dvp-popup');\n    var $articles = $('.dvp-articles');\n    if (!$articles.is(event.target) && $articles.has(event.target).length === 0 && !$popup.is(event.target) && $popup.has(event.target).length === 0 && !$(event.target).hasClass('dvp-open-article-popup-js')) {\n      $popup.hide();\n    }\n  }\n  $(document).on('click', function (event) {\n    closePopup(event);\n  });\n  $('.dvp-open-article-popup-js').each(function () {\n    $(this).on('click', function (event) {\n      event.preventDefault();\n      var $trigger = $(this);\n      var imageUrl = $trigger.find('img').attr('src');\n      var title = $trigger.find('.dvp-title').text();\n      var date = $trigger.find('.dvp-date').text();\n      var articleUrl = $trigger.find('.dvp-title').attr('href');\n      var content = $trigger.find('.dvp-content').text();\n      $('.dvp-popup').html(\"\\n            <span class=\\\"dvp-close-popup-js\\\">\\u2716</span>\\n            <img src=\\\"\".concat(imageUrl, \"\\\" alt=\\\"\").concat(title, \"\\\">\\n            <div>\\n                <date class=\\\"dvp-date\\\">\").concat(date, \"</date>\\n                <a href=\\\"\").concat(articleUrl, \"\\\" class=\\\"dvp-title\\\">\").concat(title, \"</a>\\n                <p class=\\\"dvp-content\\\">\").concat(content, \"</p>\\n                <a href=\\\"\").concat(articleUrl, \"\\\">Read more</a>\\n            </div>\\n        \"));\n      $('.dvp-popup').show();\n      $('.dvp-close-popup-js').on('click', function () {\n        $('.dvp-popup').hide();\n      });\n    });\n  });\n}\n\n//# sourceURL=webpack://date-view-posts/./src/components/popup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/popup */ \"./src/components/popup.js\");\n/* harmony import */ var _styles_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.sass */ \"./src/styles.sass\");\n\n\njQuery(document).ready(function ($) {\n  (0,_components_popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"])($);\n});\n\n//# sourceURL=webpack://date-view-posts/./src/index.js?");

/***/ }),

/***/ "./src/styles.sass":
/*!*************************!*\
  !*** ./src/styles.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://date-view-posts/./src/styles.sass?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;