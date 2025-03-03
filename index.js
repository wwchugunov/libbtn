/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var plpb;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../src/library/consts/index.ts":
/*!**************************************!*\
  !*** ../src/library/consts/index.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ALLOWED_BOOLEAN_PARAMS: () => (/* binding */ ALLOWED_BOOLEAN_PARAMS),\n/* harmony export */   ALLOWED_STRING_PARAMS: () => (/* binding */ ALLOWED_STRING_PARAMS),\n/* harmony export */   CANDIDATE_INITIAL_VALUES: () => (/* binding */ CANDIDATE_INITIAL_VALUES),\n/* harmony export */   PATH: () => (/* binding */ PATH)\n/* harmony export */ });\nconst PATH = '/payment-button/checkout/?params=';\nconst CANDIDATE_INITIAL_VALUES = {\n    merchantId: null,\n    buttonId: null,\n    host: null,\n    url: null,\n    amount: null,\n    amountReadonly: null,\n    currency: null,\n    description: null,\n    responseUrl: null,\n    telephone: null,\n    email: null,\n    contract: null,\n    fullname: null,\n    product: null,\n    group: null,\n};\nconst ALLOWED_STRING_PARAMS = [\n    'merchantId',\n    'buttonId',\n    'currency',\n    'description',\n    'host',\n    'url',\n    'responseUrl',\n];\nconst ALLOWED_BOOLEAN_PARAMS = [\n    'amountReadonly',\n    'telephone',\n    'email',\n    'contract',\n    'fullname',\n    'product',\n    'group',\n];\n\n\n//# sourceURL=webpack:///../src/library/consts/index.ts?");

/***/ }),

/***/ "../src/library/index.ts":
/*!*******************************!*\
  !*** ../src/library/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getButton: () => (/* binding */ getButton)\n/* harmony export */ });\n/* harmony import */ var _consts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consts */ \"../src/library/consts/index.ts\");\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/helpers */ \"../src/library/utils/helpers.ts\");\n/* harmony import */ var _utils_validations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/validations */ \"../src/library/utils/validations.ts\");\n\n\n\nfunction Button(params) {\n    const candidate = params;\n    const errors = {\n    // merchantId: getMissingParameterError('merchantId'),\n    // buttonId: getMissingParameterError('buttonId'),\n    // host: getMissingParameterError('host'),\n    };\n    this.setParams = function (params) {\n        setNullableStringParams(params);\n        setNullableBooleanParams(params);\n        setAmount(params?.amount || null);\n    };\n    function setNullableStringParams(params) {\n        const filteredParams = Object.entries(params || {}).filter((item) => _consts__WEBPACK_IMPORTED_MODULE_0__.ALLOWED_STRING_PARAMS.some((param) => param === item[0]));\n        filteredParams.forEach(([key, value]) => {\n            if (!(0,_utils_validations__WEBPACK_IMPORTED_MODULE_2__.isString)(value)) {\n                errors[key] = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTypeValidationError)(key, 'string');\n                return;\n            }\n            candidate[key] = value;\n            delete errors[key];\n        });\n    }\n    function setNullableBooleanParams(params) {\n        const filteredParams = Object.entries(params || {}).filter((item) => _consts__WEBPACK_IMPORTED_MODULE_0__.ALLOWED_BOOLEAN_PARAMS.some((param) => param === item[0]));\n        filteredParams.forEach(([key, value]) => {\n            if (Object.is(value, null))\n                return;\n            if (!(0,_utils_validations__WEBPACK_IMPORTED_MODULE_2__.isBoolean)(value)) {\n                errors[key] = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTypeValidationError)(key, 'boolean');\n                return;\n            }\n            candidate[key] = value;\n            delete errors[key];\n        });\n    }\n    function setAmount(amount) {\n        const key = 'amount';\n        if (!(0,_utils_validations__WEBPACK_IMPORTED_MODULE_2__.isNumber)(amount)) {\n            errors[key] = (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_1__.getTypeValidationError)(key, 'number');\n            return;\n        }\n        candidate[key] = amount;\n        delete errors[key];\n    }\n    this.getUrl = function () {\n        // TODO: add validation for required fields and add errors to the errors object\n        if (Object.keys(errors).length > 0) {\n            throw new Error(`Validation error!\\n\\n${Object.values(errors).join('\\n')}\\n`);\n        }\n        const queryParams = encodeURIComponent(JSON.stringify(candidate));\n        return `https://${candidate.host}${_consts__WEBPACK_IMPORTED_MODULE_0__.PATH}${queryParams}`;\n    };\n    this.getCandidate = function () {\n        return candidate;\n    };\n    this.getErrors = function () {\n        return errors;\n    };\n}\nconst getButton = function (params = _consts__WEBPACK_IMPORTED_MODULE_0__.CANDIDATE_INITIAL_VALUES) {\n    return new Button(params);\n};\n\n\n\n//# sourceURL=webpack:///../src/library/index.ts?");

/***/ }),

/***/ "../src/library/utils/helpers.ts":
/*!***************************************!*\
  !*** ../src/library/utils/helpers.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getMissingParameterError: () => (/* binding */ getMissingParameterError),\n/* harmony export */   getTypeValidationError: () => (/* binding */ getTypeValidationError),\n/* harmony export */   logError: () => (/* binding */ logError)\n/* harmony export */ });\nconst getTypeValidationError = (paramKey, expectedType) => {\n    return `Parameter \\`${paramKey}\\` is required and must be ${expectedType}`;\n};\nconst getMissingParameterError = (parameter) => {\n    return `Parameter \\`${parameter}\\` is incorrect or missing`;\n};\nconst logError = (paramKey, expectedType) => {\n    console.error(getTypeValidationError(paramKey, expectedType));\n};\n\n\n//# sourceURL=webpack:///../src/library/utils/helpers.ts?");

/***/ }),

/***/ "../src/library/utils/validations.ts":
/*!*******************************************!*\
  !*** ../src/library/utils/validations.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isArray: () => (/* binding */ isArray),\n/* harmony export */   isBoolean: () => (/* binding */ isBoolean),\n/* harmony export */   isError: () => (/* binding */ isError),\n/* harmony export */   isNumber: () => (/* binding */ isNumber),\n/* harmony export */   isObject: () => (/* binding */ isObject),\n/* harmony export */   isString: () => (/* binding */ isString)\n/* harmony export */ });\nconst isString = (value) => typeof value === 'string';\nconst isObject = (value) => typeof value === 'object';\nconst isNumber = (value) => typeof value === 'number';\nconst isBoolean = (value) => typeof value === 'boolean';\nconst isArray = (value) => Array.isArray(value);\nconst isError = (value) => value instanceof Error;\n\n\n//# sourceURL=webpack:///../src/library/utils/validations.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("../src/library/index.ts");
/******/ 	plpb = __webpack_exports__;
/******/ 	
/******/ })()
;
