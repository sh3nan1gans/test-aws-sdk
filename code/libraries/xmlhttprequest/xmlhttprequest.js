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
/******/ 	return __webpack_require__(__webpack_require__.s = 443);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __extends = function __extends(child, parent) {
  function fn() {
    this.constructor = child; // this can be omitted
  }

  fn.prototype = parent.prototype;
  child.prototype = new fn();
};

/* harmony default export */ __webpack_exports__["a"] = (__extends);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _xmlhttprequesteventtarget__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _util_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
var _methodMap;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var HttpMethods;

(function (HttpMethods) {
  HttpMethods["GET"] = "GET";
  HttpMethods["POST"] = "POST";
  HttpMethods["PUT"] = "PUT";
  HttpMethods["DELETE"] = "DELETE";
})(HttpMethods || (HttpMethods = {}));

var ReadyState;

(function (ReadyState) {
  ReadyState[ReadyState["UNSENT"] = 0] = "UNSENT";
  ReadyState[ReadyState["OPENED"] = 1] = "OPENED";
  ReadyState[ReadyState["HEADERS_RECEIVED"] = 2] = "HEADERS_RECEIVED";
  ReadyState[ReadyState["LOADING"] = 3] = "LOADING";
  ReadyState[ReadyState["DONE"] = 4] = "DONE";
})(ReadyState || (ReadyState = {}));

var methodMap = (_methodMap = {}, _defineProperty(_methodMap, HttpMethods.GET, 'get'), _defineProperty(_methodMap, HttpMethods.PUT, 'put'), _defineProperty(_methodMap, HttpMethods.POST, 'post'), _defineProperty(_methodMap, HttpMethods.DELETE, 'delete'), _methodMap);

var XMLHttpRequest = function (XMLHttpRequestEventTarget) {
  var XMLHttpRequest = function XMLHttpRequest() {
    XMLHttpRequestEventTarget.call(this);
    this.options = {
      uri: ''
    };
    this.method = HttpMethods.GET;
    this.async = true;
    this.readyState = ReadyState.UNSENT;
    this.status = 0;
    this.statusText = '';
    this.UNSENT = ReadyState.UNSENT;
    this.OPENED = ReadyState.OPENED;
    this.HEADERS_RECEIVED = ReadyState.HEADERS_RECEIVED;
    this.LOADING = ReadyState.LOADING;
    this.DONE = ReadyState.DONE;
  };

  Object(_util_extends__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(XMLHttpRequest, XMLHttpRequestEventTarget);

  XMLHttpRequest.prototype.abort = function () {
    throw new Error('XMLHttpRequest.abort not implemented');
  };

  XMLHttpRequest.prototype.getAllResponseHeaders = function () {
    return '';
  };

  XMLHttpRequest.prototype.getResponseHeader = function (header) {
    return '';
  };

  XMLHttpRequest.prototype.open = function (method, url) {
    var async = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var // todo: support async - if true, use events to notify of completion, if false/null, .send must return response synchronously
    user = arguments.length > 3 ? arguments[3] : undefined;
    var pass = arguments.length > 4 ? arguments[4] : undefined;
    this.readyState = ReadyState.OPENED;
    this.status = 0;
    this.statusText = '';
    this.options.uri = url;
    this.method = method;
    this.async = async;

    if (user && pass) {
      this.options.auth = {
        user: user,
        pass: pass
      };
    }
  };

  XMLHttpRequest.prototype.overrideMimeType = function () {
    throw new Error('XMLHttpRequest.overrideMimeType not implemented');
  };

  XMLHttpRequest.prototype.send = function (body) {
    var _this = this;

    switch (this.method) {
      case HttpMethods.GET:
      case HttpMethods.DELETE:
        this.options.qs = body;
        break;

      case HttpMethods.POST:
      case HttpMethods.PUT:
        this.options.body = body;
        break;
    }

    var reqObject = global.Requests();
    var method = methodMap[this.method];
    reqObject[method](this.options, function (err, data) {
      if (err) {
        _this.readyState = ReadyState.DONE;
        _this.status = 400; // since the Requests object doesn't return status or response headers, status will be hardcoded

        _this.statusText = '';
        _this.responseText = err;
        global.log('HTTP error: ', err);

        _this.dispatchEvent({
          type: 'error'
        });

        return;
      }

      _this.readyState = ReadyState.DONE;
      _this.status = 200;
      _this.statusText = 'OK';
      _this.responseText = data;

      _this.dispatchEvent({
        type: 'readystatechange'
      });
    });
  };

  XMLHttpRequest.prototype.setRequestHeader = function (header, value) {
    if (!this.options.headers) {
      this.options.headers = {};
    }

    this.options.headers[header] = value;
  };

  XMLHttpRequest.prototype.upload = new XMLHttpRequestEventTarget();
  return XMLHttpRequest;
}(_xmlhttprequesteventtarget__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]);

/* harmony default export */ __webpack_exports__["a"] = (XMLHttpRequest);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_polyfills_xmlhttprequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(444);


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var _shims_xhr_xmlhttprequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);

global.XMLHttpRequest = _shims_xhr_xmlhttprequest__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]; // place XMLHttpRequest on global so that aws-sdk can use it
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(3)))

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/shims/xhr/eventtarget.ts
var EventTarget = function EventTarget() {
  this.listeners = {};
};

EventTarget.prototype.listeners = null;

EventTarget.prototype.addEventListener = function (type, callback) {
  if (!(type in this.listeners)) {
    this.listeners[type] = [];
  }

  this.listeners[type].push(callback);
};

EventTarget.prototype.removeEventListener = function (type, callback) {
  if (!(type in this.listeners)) {
    return;
  }

  var stack = this.listeners[type];

  for (var i = 0, l = stack.length; i < l; i++) {
    if (stack[i] === callback) {
      stack.splice(i, 1);
      return;
    }
  }
};

EventTarget.prototype.dispatchEvent = function (event) {
  if (!(event.type in this.listeners)) {
    return true;
  }

  var stack = this.listeners[event.type].slice();

  for (var i = 0, l = stack.length; i < l; i++) {
    stack[i].call(this, event);
  }

  return !event.defaultPrevented;
};

/* harmony default export */ var eventtarget = (EventTarget);
// EXTERNAL MODULE: ./src/util/extends.ts
var util_extends = __webpack_require__(10);

// CONCATENATED MODULE: ./src/shims/xhr/xmlhttprequesteventtarget.ts



var xmlhttprequesteventtarget_XMLHttpRequestEventTarget = function (MyEventTarget) {
  var XMLHttpRequestEventTarget = function XMLHttpRequestEventTarget() {
    MyEventTarget.call(this);
  };

  Object(util_extends["a" /* default */])(XMLHttpRequestEventTarget, MyEventTarget);

  XMLHttpRequestEventTarget.prototype.onabort = function () {
    return;
  };

  XMLHttpRequestEventTarget.prototype.onerror = function () {
    return;
  };

  XMLHttpRequestEventTarget.prototype.onload = function () {
    return;
  };

  XMLHttpRequestEventTarget.prototype.onloadstart = function () {
    return;
  };

  XMLHttpRequestEventTarget.prototype.onprogress = function () {
    return;
  };

  return XMLHttpRequestEventTarget;
}(eventtarget);

/* harmony default export */ var xmlhttprequesteventtarget = __webpack_exports__["a"] = (xmlhttprequesteventtarget_XMLHttpRequestEventTarget);

/***/ })

/******/ });