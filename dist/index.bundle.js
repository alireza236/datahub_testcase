module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/constant.js":
/*!********************************!*\
  !*** ./src/config/constant.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ \"@babel/runtime/helpers/objectSpread\");\n/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_1__);\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_1___default.a.config();\nvar devConfig = {\n  MONGO_URL: process.env.DB_URL //JWT_SECRET:process.env.JWT_SECRET\n\n};\nvar testConfig = {}; //\n\nvar prodConfig = {}; //entry this prodConfig if you build in prod \n\nvar defaultConfig = {\n  PORT: process.env.PORT || 3000\n}; //\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n\n    case 'test':\n      return testConfig;\n\n    default:\n      return prodConfig;\n  }\n} //Take defaultConfig and make it a single object \n//So, we have concatenated two objects into one \n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, defaultConfig, envConfig(\"development\")));\n\n//# sourceURL=webpack:///./src/config/constant.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ \"./src/config/constant.js\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dotenv */ \"dotenv\");\n/* harmony import */ var dotenv__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dotenv__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\ndotenv__WEBPACK_IMPORTED_MODULE_2___default.a.config(); //Removes the warning with promises \n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.set('useCreateIndex', true); //Connect the db with the url provided \n\ntry {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connect(process.env.DB_URL, {\n    useNewUrlParser: true\n  });\n} catch (err) {\n  mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.createConnection(process.env.DB_URL, {\n    useNewUrlParser: true\n  });\n}\n\nmongoose__WEBPACK_IMPORTED_MODULE_0___default.a.connection.once('open', function () {\n  return console.log('MongoDB Running');\n}).on('error', function (e) {\n  throw e;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middleware.js":
/*!**********************************!*\
  !*** ./src/config/middleware.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! morgan */ \"morgan\");\n/* harmony import */ var morgan__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(morgan__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar isDev = \"development\" === 'development';\nvar isProd = \"development\" === 'production';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  if (isProd) {\n    app.use(compression__WEBPACK_IMPORTED_MODULE_2___default()());\n  }\n\n  app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.json());\n  app.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.urlencoded({\n    extended: true\n  }));\n\n  if (isDev) {\n    app.use(morgan__WEBPACK_IMPORTED_MODULE_1___default()('dev'));\n  }\n});\n\n//# sourceURL=webpack:///./src/config/middleware.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! http-errors */ \"http-errors\");\n/* harmony import */ var http_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(http_errors__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! debug */ \"debug\");\n/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! http */ \"http\");\n/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n/* harmony import */ var _config_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config/constant */ \"./src/config/constant.js\");\n/* harmony import */ var _config_middleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./config/middleware */ \"./src/config/middleware.js\");\n/* harmony import */ var _modules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\nObject(_config_middleware__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(app);\napp.get('/', function (req, res) {\n  res.status(200).json({\n    status: \"Succes\"\n  });\n});\nObject(_modules__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(app);\napp.listen(_config_constant__WEBPACK_IMPORTED_MODULE_5__[\"default\"].PORT, function () {\n  console.log(\" Server running on port: \".concat(_config_constant__WEBPACK_IMPORTED_MODULE_5__[\"default\"].PORT, \" --- Running on \").concat(\"development\", \" --- Service is running\"));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_user_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user/user.route */ \"./src/modules/user/user.route.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (app) {\n  app.use('/api/v1/', _user_user_route__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n});\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/user/user.controller.js":
/*!*********************************************!*\
  !*** ./src/modules/user/user.controller.js ***!
  \*********************************************/
/*! exports provided: signUp, getList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signUp\", function() { return signUp; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getList\", function() { return getList; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction signUp(_x, _x2) {\n  return _signUp.apply(this, arguments);\n}\n\nfunction _signUp() {\n  _signUp = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(req, res) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            return _context.abrupt(\"return\", res.status(200).send(req.body));\n\n          case 4:\n            _context.prev = 4;\n            _context.t0 = _context[\"catch\"](0);\n            return _context.abrupt(\"return\", res.status(500).send(_context.t0));\n\n          case 7:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, this, [[0, 4]]);\n  }));\n  return _signUp.apply(this, arguments);\n}\n\nfunction getList(_x3, _x4) {\n  return _getList.apply(this, arguments);\n}\n\nfunction _getList() {\n  _getList = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(\n  /*#__PURE__*/\n  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(req, res) {\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            return _context2.abrupt(\"return\", res.status(200).send(req.method));\n\n          case 4:\n            _context2.prev = 4;\n            _context2.t0 = _context2[\"catch\"](0);\n            return _context2.abrupt(\"return\", res.status(500).send(_context2.t0));\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, this, [[0, 4]]);\n  }));\n  return _getList.apply(this, arguments);\n}\n\n//# sourceURL=webpack:///./src/modules/user/user.controller.js?");

/***/ }),

/***/ "./src/modules/user/user.route.js":
/*!****************************************!*\
  !*** ./src/modules/user/user.route.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.controller */ \"./src/modules/user/user.controller.js\");\n\n\nvar routes = new express__WEBPACK_IMPORTED_MODULE_0__[\"Router\"]();\nroutes.post('/signup', _user_controller__WEBPACK_IMPORTED_MODULE_1__[\"signUp\"]);\nroutes.get('/', _user_controller__WEBPACK_IMPORTED_MODULE_1__[\"getList\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (routes);\n\n//# sourceURL=webpack:///./src/modules/user/user.route.js?");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/asyncToGenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/asyncToGenerator%22?");

/***/ }),

/***/ "@babel/runtime/helpers/objectSpread":
/*!******************************************************!*\
  !*** external "@babel/runtime/helpers/objectSpread" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/helpers/objectSpread\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/helpers/objectSpread%22?");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/runtime/regenerator\");\n\n//# sourceURL=webpack:///external_%22@babel/runtime/regenerator%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "debug":
/*!************************!*\
  !*** external "debug" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"debug\");\n\n//# sourceURL=webpack:///external_%22debug%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "http-errors":
/*!******************************!*\
  !*** external "http-errors" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-errors\");\n\n//# sourceURL=webpack:///external_%22http-errors%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ })

/******/ });