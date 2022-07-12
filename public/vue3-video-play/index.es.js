var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, unref, ref, onUnmounted, createElementVNode, toDisplayString, defineComponent, withDirectives, createVNode, createTextVNode, vShow, useCssVars, pushScopeId, popScopeId, nextTick, getCurrentInstance, createCommentVNode, reactive, withModifiers, watch, onMounted, Transition, withCtx, Fragment, renderList, useAttrs, mergeProps, createBlock, withKeys } from "vue";
function throttle(delay, noTrailing, callback, debounceMode) {
  var timeoutID;
  var cancelled = false;
  var lastExec = 0;
  function clearExistingTimeout() {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }
  }
  function cancel() {
    clearExistingTimeout();
    cancelled = true;
  }
  if (typeof noTrailing !== "boolean") {
    debounceMode = callback;
    callback = noTrailing;
    noTrailing = void 0;
  }
  function wrapper() {
    for (var _len = arguments.length, arguments_ = new Array(_len), _key = 0; _key < _len; _key++) {
      arguments_[_key] = arguments[_key];
    }
    var self2 = this;
    var elapsed = Date.now() - lastExec;
    if (cancelled) {
      return;
    }
    function exec() {
      lastExec = Date.now();
      callback.apply(self2, arguments_);
    }
    function clear() {
      timeoutID = void 0;
    }
    if (debounceMode && !timeoutID) {
      exec();
    }
    clearExistingTimeout();
    if (debounceMode === void 0 && elapsed > delay) {
      exec();
    } else if (noTrailing !== true) {
      timeoutID = setTimeout(debounceMode ? clear : exec, debounceMode === void 0 ? delay - elapsed : delay);
    }
  }
  wrapper.cancel = cancel;
  return wrapper;
}
function debounce(delay, atBegin, callback) {
  return callback === void 0 ? throttle(delay, atBegin, false) : throttle(delay, callback, atBegin !== false);
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var hls = { exports: {} };
(function(module, exports) {
  typeof window !== "undefined" && function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  }(commonjsGlobal, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "/dist/";
      return __webpack_require__(__webpack_require__.s = "./src/hls.ts");
    }({
      "./node_modules/eventemitter3/index.js": function(module2, exports2, __webpack_require__) {
        var has = Object.prototype.hasOwnProperty, prefix = "~";
        function Events() {
        }
        if (Object.create) {
          Events.prototype = Object.create(null);
          if (!new Events().__proto__)
            prefix = false;
        }
        function EE(fn, context, once) {
          this.fn = fn;
          this.context = context;
          this.once = once || false;
        }
        function addListener(emitter, event, fn, context, once) {
          if (typeof fn !== "function") {
            throw new TypeError("The listener must be a function");
          }
          var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
          if (!emitter._events[evt])
            emitter._events[evt] = listener, emitter._eventsCount++;
          else if (!emitter._events[evt].fn)
            emitter._events[evt].push(listener);
          else
            emitter._events[evt] = [emitter._events[evt], listener];
          return emitter;
        }
        function clearEvent(emitter, evt) {
          if (--emitter._eventsCount === 0)
            emitter._events = new Events();
          else
            delete emitter._events[evt];
        }
        function EventEmitter() {
          this._events = new Events();
          this._eventsCount = 0;
        }
        EventEmitter.prototype.eventNames = function eventNames() {
          var names = [], events, name;
          if (this._eventsCount === 0)
            return names;
          for (name in events = this._events) {
            if (has.call(events, name))
              names.push(prefix ? name.slice(1) : name);
          }
          if (Object.getOwnPropertySymbols) {
            return names.concat(Object.getOwnPropertySymbols(events));
          }
          return names;
        };
        EventEmitter.prototype.listeners = function listeners(event) {
          var evt = prefix ? prefix + event : event, handlers = this._events[evt];
          if (!handlers)
            return [];
          if (handlers.fn)
            return [handlers.fn];
          for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
            ee[i] = handlers[i].fn;
          }
          return ee;
        };
        EventEmitter.prototype.listenerCount = function listenerCount(event) {
          var evt = prefix ? prefix + event : event, listeners = this._events[evt];
          if (!listeners)
            return 0;
          if (listeners.fn)
            return 1;
          return listeners.length;
        };
        EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
          var evt = prefix ? prefix + event : event;
          if (!this._events[evt])
            return false;
          var listeners = this._events[evt], len = arguments.length, args, i;
          if (listeners.fn) {
            if (listeners.once)
              this.removeListener(event, listeners.fn, void 0, true);
            switch (len) {
              case 1:
                return listeners.fn.call(listeners.context), true;
              case 2:
                return listeners.fn.call(listeners.context, a1), true;
              case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
              case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
              case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
              case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
            }
            for (i = 1, args = new Array(len - 1); i < len; i++) {
              args[i - 1] = arguments[i];
            }
            listeners.fn.apply(listeners.context, args);
          } else {
            var length = listeners.length, j;
            for (i = 0; i < length; i++) {
              if (listeners[i].once)
                this.removeListener(event, listeners[i].fn, void 0, true);
              switch (len) {
                case 1:
                  listeners[i].fn.call(listeners[i].context);
                  break;
                case 2:
                  listeners[i].fn.call(listeners[i].context, a1);
                  break;
                case 3:
                  listeners[i].fn.call(listeners[i].context, a1, a2);
                  break;
                case 4:
                  listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                  break;
                default:
                  if (!args)
                    for (j = 1, args = new Array(len - 1); j < len; j++) {
                      args[j - 1] = arguments[j];
                    }
                  listeners[i].fn.apply(listeners[i].context, args);
              }
            }
          }
          return true;
        };
        EventEmitter.prototype.on = function on2(event, fn, context) {
          return addListener(this, event, fn, context, false);
        };
        EventEmitter.prototype.once = function once(event, fn, context) {
          return addListener(this, event, fn, context, true);
        };
        EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
          var evt = prefix ? prefix + event : event;
          if (!this._events[evt])
            return this;
          if (!fn) {
            clearEvent(this, evt);
            return this;
          }
          var listeners = this._events[evt];
          if (listeners.fn) {
            if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
              clearEvent(this, evt);
            }
          } else {
            for (var i = 0, events = [], length = listeners.length; i < length; i++) {
              if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
              }
            }
            if (events.length)
              this._events[evt] = events.length === 1 ? events[0] : events;
            else
              clearEvent(this, evt);
          }
          return this;
        };
        EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
          var evt;
          if (event) {
            evt = prefix ? prefix + event : event;
            if (this._events[evt])
              clearEvent(this, evt);
          } else {
            this._events = new Events();
            this._eventsCount = 0;
          }
          return this;
        };
        EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
        EventEmitter.prototype.addListener = EventEmitter.prototype.on;
        EventEmitter.prefixed = prefix;
        EventEmitter.EventEmitter = EventEmitter;
        {
          module2.exports = EventEmitter;
        }
      },
      "./node_modules/url-toolkit/src/url-toolkit.js": function(module2, exports2, __webpack_require__) {
        (function(root) {
          var URL_REGEX = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/;
          var FIRST_SEGMENT_REGEX = /^([^\/?#]*)([^]*)$/;
          var SLASH_DOT_REGEX = /(?:\/|^)\.(?=\/)/g;
          var SLASH_DOT_DOT_REGEX = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g;
          var URLToolkit = {
            buildAbsoluteURL: function(baseURL, relativeURL, opts) {
              opts = opts || {};
              baseURL = baseURL.trim();
              relativeURL = relativeURL.trim();
              if (!relativeURL) {
                if (!opts.alwaysNormalize) {
                  return baseURL;
                }
                var basePartsForNormalise = URLToolkit.parseURL(baseURL);
                if (!basePartsForNormalise) {
                  throw new Error("Error trying to parse base URL.");
                }
                basePartsForNormalise.path = URLToolkit.normalizePath(basePartsForNormalise.path);
                return URLToolkit.buildURLFromParts(basePartsForNormalise);
              }
              var relativeParts = URLToolkit.parseURL(relativeURL);
              if (!relativeParts) {
                throw new Error("Error trying to parse relative URL.");
              }
              if (relativeParts.scheme) {
                if (!opts.alwaysNormalize) {
                  return relativeURL;
                }
                relativeParts.path = URLToolkit.normalizePath(relativeParts.path);
                return URLToolkit.buildURLFromParts(relativeParts);
              }
              var baseParts = URLToolkit.parseURL(baseURL);
              if (!baseParts) {
                throw new Error("Error trying to parse base URL.");
              }
              if (!baseParts.netLoc && baseParts.path && baseParts.path[0] !== "/") {
                var pathParts = FIRST_SEGMENT_REGEX.exec(baseParts.path);
                baseParts.netLoc = pathParts[1];
                baseParts.path = pathParts[2];
              }
              if (baseParts.netLoc && !baseParts.path) {
                baseParts.path = "/";
              }
              var builtParts = {
                scheme: baseParts.scheme,
                netLoc: relativeParts.netLoc,
                path: null,
                params: relativeParts.params,
                query: relativeParts.query,
                fragment: relativeParts.fragment
              };
              if (!relativeParts.netLoc) {
                builtParts.netLoc = baseParts.netLoc;
                if (relativeParts.path[0] !== "/") {
                  if (!relativeParts.path) {
                    builtParts.path = baseParts.path;
                    if (!relativeParts.params) {
                      builtParts.params = baseParts.params;
                      if (!relativeParts.query) {
                        builtParts.query = baseParts.query;
                      }
                    }
                  } else {
                    var baseURLPath = baseParts.path;
                    var newPath = baseURLPath.substring(0, baseURLPath.lastIndexOf("/") + 1) + relativeParts.path;
                    builtParts.path = URLToolkit.normalizePath(newPath);
                  }
                }
              }
              if (builtParts.path === null) {
                builtParts.path = opts.alwaysNormalize ? URLToolkit.normalizePath(relativeParts.path) : relativeParts.path;
              }
              return URLToolkit.buildURLFromParts(builtParts);
            },
            parseURL: function(url) {
              var parts = URL_REGEX.exec(url);
              if (!parts) {
                return null;
              }
              return {
                scheme: parts[1] || "",
                netLoc: parts[2] || "",
                path: parts[3] || "",
                params: parts[4] || "",
                query: parts[5] || "",
                fragment: parts[6] || ""
              };
            },
            normalizePath: function(path) {
              path = path.split("").reverse().join("").replace(SLASH_DOT_REGEX, "");
              while (path.length !== (path = path.replace(SLASH_DOT_DOT_REGEX, "")).length) {
              }
              return path.split("").reverse().join("");
            },
            buildURLFromParts: function(parts) {
              return parts.scheme + parts.netLoc + parts.path + parts.params + parts.query + parts.fragment;
            }
          };
          module2.exports = URLToolkit;
        })();
      },
      "./node_modules/webworkify-webpack/index.js": function(module2, exports2, __webpack_require__) {
        function webpackBootstrapFunc(modules) {
          var installedModules = {};
          function __webpack_require__2(moduleId) {
            if (installedModules[moduleId])
              return installedModules[moduleId].exports;
            var module3 = installedModules[moduleId] = {
              i: moduleId,
              l: false,
              exports: {}
            };
            modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__2);
            module3.l = true;
            return module3.exports;
          }
          __webpack_require__2.m = modules;
          __webpack_require__2.c = installedModules;
          __webpack_require__2.i = function(value) {
            return value;
          };
          __webpack_require__2.d = function(exports3, name, getter) {
            if (!__webpack_require__2.o(exports3, name)) {
              Object.defineProperty(exports3, name, {
                configurable: false,
                enumerable: true,
                get: getter
              });
            }
          };
          __webpack_require__2.r = function(exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
          };
          __webpack_require__2.n = function(module3) {
            var getter = module3 && module3.__esModule ? function getDefault() {
              return module3["default"];
            } : function getModuleExports() {
              return module3;
            };
            __webpack_require__2.d(getter, "a", getter);
            return getter;
          };
          __webpack_require__2.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
          };
          __webpack_require__2.p = "/";
          __webpack_require__2.oe = function(err) {
            console.error(err);
            throw err;
          };
          var f = __webpack_require__2(__webpack_require__2.s = ENTRY_MODULE);
          return f.default || f;
        }
        var moduleNameReqExp = "[\\.|\\-|\\+|\\w|/|@]+";
        var dependencyRegExp = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?(" + moduleNameReqExp + ").*?\\)";
        function quoteRegExp(str) {
          return (str + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
        }
        function isNumeric(n) {
          return !isNaN(1 * n);
        }
        function getModuleDependencies(sources, module3, queueName) {
          var retval = {};
          retval[queueName] = [];
          var fnString = module3.toString();
          var wrapperSignature = fnString.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
          if (!wrapperSignature)
            return retval;
          var webpackRequireName = wrapperSignature[1];
          var re = new RegExp("(\\\\n|\\W)" + quoteRegExp(webpackRequireName) + dependencyRegExp, "g");
          var match;
          while (match = re.exec(fnString)) {
            if (match[3] === "dll-reference")
              continue;
            retval[queueName].push(match[3]);
          }
          re = new RegExp("\\(" + quoteRegExp(webpackRequireName) + '\\("(dll-reference\\s(' + moduleNameReqExp + '))"\\)\\)' + dependencyRegExp, "g");
          while (match = re.exec(fnString)) {
            if (!sources[match[2]]) {
              retval[queueName].push(match[1]);
              sources[match[2]] = __webpack_require__(match[1]).m;
            }
            retval[match[2]] = retval[match[2]] || [];
            retval[match[2]].push(match[4]);
          }
          var keys = Object.keys(retval);
          for (var i = 0; i < keys.length; i++) {
            for (var j = 0; j < retval[keys[i]].length; j++) {
              if (isNumeric(retval[keys[i]][j])) {
                retval[keys[i]][j] = 1 * retval[keys[i]][j];
              }
            }
          }
          return retval;
        }
        function hasValuesInQueues(queues) {
          var keys = Object.keys(queues);
          return keys.reduce(function(hasValues, key) {
            return hasValues || queues[key].length > 0;
          }, false);
        }
        function getRequiredModules(sources, moduleId) {
          var modulesQueue = {
            main: [moduleId]
          };
          var requiredModules = {
            main: []
          };
          var seenModules = {
            main: {}
          };
          while (hasValuesInQueues(modulesQueue)) {
            var queues = Object.keys(modulesQueue);
            for (var i = 0; i < queues.length; i++) {
              var queueName = queues[i];
              var queue = modulesQueue[queueName];
              var moduleToCheck = queue.pop();
              seenModules[queueName] = seenModules[queueName] || {};
              if (seenModules[queueName][moduleToCheck] || !sources[queueName][moduleToCheck])
                continue;
              seenModules[queueName][moduleToCheck] = true;
              requiredModules[queueName] = requiredModules[queueName] || [];
              requiredModules[queueName].push(moduleToCheck);
              var newModules = getModuleDependencies(sources, sources[queueName][moduleToCheck], queueName);
              var newModulesKeys = Object.keys(newModules);
              for (var j = 0; j < newModulesKeys.length; j++) {
                modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]] || [];
                modulesQueue[newModulesKeys[j]] = modulesQueue[newModulesKeys[j]].concat(newModules[newModulesKeys[j]]);
              }
            }
          }
          return requiredModules;
        }
        module2.exports = function(moduleId, options) {
          options = options || {};
          var sources = {
            main: __webpack_require__.m
          };
          var requiredModules = options.all ? { main: Object.keys(sources.main) } : getRequiredModules(sources, moduleId);
          var src = "";
          Object.keys(requiredModules).filter(function(m) {
            return m !== "main";
          }).forEach(function(module3) {
            var entryModule = 0;
            while (requiredModules[module3][entryModule]) {
              entryModule++;
            }
            requiredModules[module3].push(entryModule);
            sources[module3][entryModule] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })";
            src = src + "var " + module3 + " = (" + webpackBootstrapFunc.toString().replace("ENTRY_MODULE", JSON.stringify(entryModule)) + ")({" + requiredModules[module3].map(function(id) {
              return "" + JSON.stringify(id) + ": " + sources[module3][id].toString();
            }).join(",") + "});\n";
          });
          src = src + "new ((" + webpackBootstrapFunc.toString().replace("ENTRY_MODULE", JSON.stringify(moduleId)) + ")({" + requiredModules.main.map(function(id) {
            return "" + JSON.stringify(id) + ": " + sources.main[id].toString();
          }).join(",") + "}))(self);";
          var blob = new window.Blob([src], { type: "text/javascript" });
          if (options.bare) {
            return blob;
          }
          var URL2 = window.URL || window.webkitURL || window.mozURL || window.msURL;
          var workerUrl = URL2.createObjectURL(blob);
          var worker = new window.Worker(workerUrl);
          worker.objectURL = workerUrl;
          return worker;
        };
      },
      "./src/config.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "hlsDefaultConfig", function() {
          return hlsDefaultConfig;
        });
        __webpack_require__.d(__webpack_exports__, "mergeConfig", function() {
          return mergeConfig;
        });
        __webpack_require__.d(__webpack_exports__, "enableStreamingMode", function() {
          return enableStreamingMode;
        });
        var _controller_abr_controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/controller/abr-controller.ts");
        var _controller_audio_stream_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/controller/audio-stream-controller.ts");
        var _controller_audio_track_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/controller/audio-track-controller.ts");
        var _controller_subtitle_stream_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/controller/subtitle-stream-controller.ts");
        var _controller_subtitle_track_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/controller/subtitle-track-controller.ts");
        var _controller_buffer_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/controller/buffer-controller.ts");
        var _controller_timeline_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/controller/timeline-controller.ts");
        var _controller_cap_level_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/controller/cap-level-controller.ts");
        var _controller_fps_controller__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/controller/fps-controller.ts");
        var _controller_eme_controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/controller/eme-controller.ts");
        var _controller_cmcd_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/controller/cmcd-controller.ts");
        var _utils_xhr_loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/utils/xhr-loader.ts");
        var _utils_fetch_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/utils/fetch-loader.ts");
        var _utils_cues__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/utils/cues.ts");
        var _utils_mediakeys_helper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/utils/mediakeys-helper.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/utils/logger.ts");
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
              symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
              });
            }
            keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
              ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
              });
            } else if (Object.getOwnPropertyDescriptors) {
              Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
              ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
              });
            }
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        var hlsDefaultConfig = _objectSpread(_objectSpread({
          autoStartLoad: true,
          startPosition: -1,
          defaultAudioCodec: void 0,
          debug: false,
          capLevelOnFPSDrop: false,
          capLevelToPlayerSize: false,
          initialLiveManifestSize: 1,
          maxBufferLength: 30,
          backBufferLength: Infinity,
          maxBufferSize: 60 * 1e3 * 1e3,
          maxBufferHole: 0.1,
          highBufferWatchdogPeriod: 2,
          nudgeOffset: 0.1,
          nudgeMaxRetry: 3,
          maxFragLookUpTolerance: 0.25,
          liveSyncDurationCount: 3,
          liveMaxLatencyDurationCount: Infinity,
          liveSyncDuration: void 0,
          liveMaxLatencyDuration: void 0,
          maxLiveSyncPlaybackRate: 1,
          liveDurationInfinity: false,
          liveBackBufferLength: null,
          maxMaxBufferLength: 600,
          enableWorker: true,
          enableSoftwareAES: true,
          manifestLoadingTimeOut: 1e4,
          manifestLoadingMaxRetry: 1,
          manifestLoadingRetryDelay: 1e3,
          manifestLoadingMaxRetryTimeout: 64e3,
          startLevel: void 0,
          levelLoadingTimeOut: 1e4,
          levelLoadingMaxRetry: 4,
          levelLoadingRetryDelay: 1e3,
          levelLoadingMaxRetryTimeout: 64e3,
          fragLoadingTimeOut: 2e4,
          fragLoadingMaxRetry: 6,
          fragLoadingRetryDelay: 1e3,
          fragLoadingMaxRetryTimeout: 64e3,
          startFragPrefetch: false,
          fpsDroppedMonitoringPeriod: 5e3,
          fpsDroppedMonitoringThreshold: 0.2,
          appendErrorMaxRetry: 3,
          loader: _utils_xhr_loader__WEBPACK_IMPORTED_MODULE_11__["default"],
          fLoader: void 0,
          pLoader: void 0,
          xhrSetup: void 0,
          licenseXhrSetup: void 0,
          licenseResponseCallback: void 0,
          abrController: _controller_abr_controller__WEBPACK_IMPORTED_MODULE_0__["default"],
          bufferController: _controller_buffer_controller__WEBPACK_IMPORTED_MODULE_5__["default"],
          capLevelController: _controller_cap_level_controller__WEBPACK_IMPORTED_MODULE_7__["default"],
          fpsController: _controller_fps_controller__WEBPACK_IMPORTED_MODULE_8__["default"],
          stretchShortVideoTrack: false,
          maxAudioFramesDrift: 1,
          forceKeyFrameOnDiscontinuity: true,
          abrEwmaFastLive: 3,
          abrEwmaSlowLive: 9,
          abrEwmaFastVoD: 3,
          abrEwmaSlowVoD: 9,
          abrEwmaDefaultEstimate: 5e5,
          abrBandWidthFactor: 0.95,
          abrBandWidthUpFactor: 0.7,
          abrMaxWithRealBitrate: false,
          maxStarvationDelay: 4,
          maxLoadingDelay: 4,
          minAutoBitrate: 0,
          emeEnabled: false,
          widevineLicenseUrl: void 0,
          drmSystemOptions: {},
          requestMediaKeySystemAccessFunc: _utils_mediakeys_helper__WEBPACK_IMPORTED_MODULE_14__["requestMediaKeySystemAccess"],
          testBandwidth: true,
          progressive: false,
          lowLatencyMode: true,
          cmcd: void 0
        }, timelineConfig()), {}, {
          subtitleStreamController: _controller_subtitle_stream_controller__WEBPACK_IMPORTED_MODULE_3__["SubtitleStreamController"],
          subtitleTrackController: _controller_subtitle_track_controller__WEBPACK_IMPORTED_MODULE_4__["default"],
          timelineController: _controller_timeline_controller__WEBPACK_IMPORTED_MODULE_6__["TimelineController"],
          audioStreamController: _controller_audio_stream_controller__WEBPACK_IMPORTED_MODULE_1__["default"],
          audioTrackController: _controller_audio_track_controller__WEBPACK_IMPORTED_MODULE_2__["default"],
          emeController: _controller_eme_controller__WEBPACK_IMPORTED_MODULE_9__["default"],
          cmcdController: _controller_cmcd_controller__WEBPACK_IMPORTED_MODULE_10__["default"]
        });
        function timelineConfig() {
          return {
            cueHandler: _utils_cues__WEBPACK_IMPORTED_MODULE_13__["default"],
            enableCEA708Captions: true,
            enableWebVTT: true,
            enableIMSC1: true,
            captionsTextTrack1Label: "English",
            captionsTextTrack1LanguageCode: "en",
            captionsTextTrack2Label: "Spanish",
            captionsTextTrack2LanguageCode: "es",
            captionsTextTrack3Label: "Unknown CC",
            captionsTextTrack3LanguageCode: "",
            captionsTextTrack4Label: "Unknown CC",
            captionsTextTrack4LanguageCode: "",
            renderTextTracksNatively: true
          };
        }
        function mergeConfig(defaultConfig, userConfig) {
          if ((userConfig.liveSyncDurationCount || userConfig.liveMaxLatencyDurationCount) && (userConfig.liveSyncDuration || userConfig.liveMaxLatencyDuration)) {
            throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
          }
          if (userConfig.liveMaxLatencyDurationCount !== void 0 && (userConfig.liveSyncDurationCount === void 0 || userConfig.liveMaxLatencyDurationCount <= userConfig.liveSyncDurationCount)) {
            throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
          }
          if (userConfig.liveMaxLatencyDuration !== void 0 && (userConfig.liveSyncDuration === void 0 || userConfig.liveMaxLatencyDuration <= userConfig.liveSyncDuration)) {
            throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
          }
          return _extends({}, defaultConfig, userConfig);
        }
        function enableStreamingMode(config) {
          var currentLoader = config.loader;
          if (currentLoader !== _utils_fetch_loader__WEBPACK_IMPORTED_MODULE_12__["default"] && currentLoader !== _utils_xhr_loader__WEBPACK_IMPORTED_MODULE_11__["default"]) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_15__["logger"].log("[config]: Custom loader detected, cannot enable progressive streaming");
            config.progressive = false;
          } else {
            var canStreamProgressively = Object(_utils_fetch_loader__WEBPACK_IMPORTED_MODULE_12__["fetchSupported"])();
            if (canStreamProgressively) {
              config.loader = _utils_fetch_loader__WEBPACK_IMPORTED_MODULE_12__["default"];
              config.progressive = true;
              config.enableSoftwareAES = true;
              _utils_logger__WEBPACK_IMPORTED_MODULE_15__["logger"].log("[config]: Progressive streaming enabled, using FetchLoader");
            }
          }
        }
      },
      "./src/controller/abr-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _utils_ewma_bandwidth_estimator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/ewma-bandwidth-estimator.ts");
        var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/events.ts");
        var _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/buffer-helper.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/errors.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/types/loader.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/utils/logger.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var AbrController = /* @__PURE__ */ function() {
          function AbrController2(hls2) {
            this.hls = void 0;
            this.lastLoadedFragLevel = 0;
            this._nextAutoLevel = -1;
            this.timer = void 0;
            this.onCheck = this._abandonRulesCheck.bind(this);
            this.fragCurrent = null;
            this.partCurrent = null;
            this.bitrateTestDelay = 0;
            this.bwEstimator = void 0;
            this.hls = hls2;
            var config = hls2.config;
            this.bwEstimator = new _utils_ewma_bandwidth_estimator__WEBPACK_IMPORTED_MODULE_1__["default"](config.abrEwmaSlowVoD, config.abrEwmaFastVoD, config.abrEwmaDefaultEstimate);
            this.registerListeners();
          }
          var _proto = AbrController2.prototype;
          _proto.registerListeners = function registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_LOADING, this.onFragLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_LOADED, this.onFragLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_BUFFERED, this.onFragBuffered, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, this.onError, this);
          };
          _proto.unregisterListeners = function unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_LOADING, this.onFragLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_LOADED, this.onFragLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_BUFFERED, this.onFragBuffered, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, this.onError, this);
          };
          _proto.destroy = function destroy() {
            this.unregisterListeners();
            this.clearTimer();
            this.hls = this.onCheck = null;
            this.fragCurrent = this.partCurrent = null;
          };
          _proto.onFragLoading = function onFragLoading(event, data) {
            var frag = data.frag;
            if (frag.type === _types_loader__WEBPACK_IMPORTED_MODULE_5__["PlaylistLevelType"].MAIN) {
              if (!this.timer) {
                var _data$part;
                this.fragCurrent = frag;
                this.partCurrent = (_data$part = data.part) != null ? _data$part : null;
                this.timer = self.setInterval(this.onCheck, 100);
              }
            }
          };
          _proto.onLevelLoaded = function onLevelLoaded(event, data) {
            var config = this.hls.config;
            if (data.details.live) {
              this.bwEstimator.update(config.abrEwmaSlowLive, config.abrEwmaFastLive);
            } else {
              this.bwEstimator.update(config.abrEwmaSlowVoD, config.abrEwmaFastVoD);
            }
          };
          _proto._abandonRulesCheck = function _abandonRulesCheck() {
            var frag = this.fragCurrent, part = this.partCurrent, hls2 = this.hls;
            var autoLevelEnabled = hls2.autoLevelEnabled, config = hls2.config, media = hls2.media;
            if (!frag || !media) {
              return;
            }
            var stats = part ? part.stats : frag.stats;
            var duration = part ? part.duration : frag.duration;
            if (stats.aborted) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].warn("frag loader destroy or aborted, disarm abandonRules");
              this.clearTimer();
              this._nextAutoLevel = -1;
              return;
            }
            if (!autoLevelEnabled || media.paused || !media.playbackRate || !media.readyState) {
              return;
            }
            var requestDelay = performance.now() - stats.loading.start;
            var playbackRate = Math.abs(media.playbackRate);
            if (requestDelay <= 500 * duration / playbackRate) {
              return;
            }
            var levels = hls2.levels, minAutoLevel = hls2.minAutoLevel;
            var level = levels[frag.level];
            var expectedLen = stats.total || Math.max(stats.loaded, Math.round(duration * level.maxBitrate / 8));
            var loadRate = Math.max(1, stats.bwEstimate ? stats.bwEstimate / 8 : stats.loaded * 1e3 / requestDelay);
            var fragLoadedDelay = (expectedLen - stats.loaded) / loadRate;
            var pos = media.currentTime;
            var bufferStarvationDelay = (_utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].bufferInfo(media, pos, config.maxBufferHole).end - pos) / playbackRate;
            if (bufferStarvationDelay >= 2 * duration / playbackRate || fragLoadedDelay <= bufferStarvationDelay) {
              return;
            }
            var fragLevelNextLoadedDelay = Number.POSITIVE_INFINITY;
            var nextLoadLevel;
            for (nextLoadLevel = frag.level - 1; nextLoadLevel > minAutoLevel; nextLoadLevel--) {
              var levelNextBitrate = levels[nextLoadLevel].maxBitrate;
              fragLevelNextLoadedDelay = duration * levelNextBitrate / (8 * 0.8 * loadRate);
              if (fragLevelNextLoadedDelay < bufferStarvationDelay) {
                break;
              }
            }
            if (fragLevelNextLoadedDelay >= fragLoadedDelay) {
              return;
            }
            var bwEstimate = this.bwEstimator.getEstimate();
            _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].warn("Fragment " + frag.sn + (part ? " part " + part.index : "") + " of level " + frag.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + nextLoadLevel + "\n      Current BW estimate: " + (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(bwEstimate) ? (bwEstimate / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + fragLoadedDelay.toFixed(3) + " s\n      Estimated load time for the next fragment: " + fragLevelNextLoadedDelay.toFixed(3) + " s\n      Time to underbuffer: " + bufferStarvationDelay.toFixed(3) + " s");
            hls2.nextLoadLevel = nextLoadLevel;
            this.bwEstimator.sample(requestDelay, stats.loaded);
            this.clearTimer();
            if (frag.loader) {
              this.fragCurrent = this.partCurrent = null;
              frag.loader.abort();
            }
            hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_LOAD_EMERGENCY_ABORTED, {
              frag,
              part,
              stats
            });
          };
          _proto.onFragLoaded = function onFragLoaded(event, _ref) {
            var frag = _ref.frag, part = _ref.part;
            if (frag.type === _types_loader__WEBPACK_IMPORTED_MODULE_5__["PlaylistLevelType"].MAIN && Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(frag.sn)) {
              var stats = part ? part.stats : frag.stats;
              var duration = part ? part.duration : frag.duration;
              this.clearTimer();
              this.lastLoadedFragLevel = frag.level;
              this._nextAutoLevel = -1;
              if (this.hls.config.abrMaxWithRealBitrate) {
                var level = this.hls.levels[frag.level];
                var loadedBytes = (level.loaded ? level.loaded.bytes : 0) + stats.loaded;
                var loadedDuration = (level.loaded ? level.loaded.duration : 0) + duration;
                level.loaded = {
                  bytes: loadedBytes,
                  duration: loadedDuration
                };
                level.realBitrate = Math.round(8 * loadedBytes / loadedDuration);
              }
              if (frag.bitrateTest) {
                var fragBufferedData = {
                  stats,
                  frag,
                  part,
                  id: frag.type
                };
                this.onFragBuffered(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_BUFFERED, fragBufferedData);
                frag.bitrateTest = false;
              }
            }
          };
          _proto.onFragBuffered = function onFragBuffered(event, data) {
            var frag = data.frag, part = data.part;
            var stats = part ? part.stats : frag.stats;
            if (stats.aborted) {
              return;
            }
            if (frag.type !== _types_loader__WEBPACK_IMPORTED_MODULE_5__["PlaylistLevelType"].MAIN || frag.sn === "initSegment") {
              return;
            }
            var processingMs = stats.parsing.end - stats.loading.start;
            this.bwEstimator.sample(processingMs, stats.loaded);
            stats.bwEstimate = this.bwEstimator.getEstimate();
            if (frag.bitrateTest) {
              this.bitrateTestDelay = processingMs / 1e3;
            } else {
              this.bitrateTestDelay = 0;
            }
          };
          _proto.onError = function onError(event, data) {
            switch (data.details) {
              case _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorDetails"].FRAG_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorDetails"].FRAG_LOAD_TIMEOUT:
                this.clearTimer();
                break;
            }
          };
          _proto.clearTimer = function clearTimer() {
            self.clearInterval(this.timer);
            this.timer = void 0;
          };
          _proto.getNextABRAutoLevel = function getNextABRAutoLevel() {
            var fragCurrent = this.fragCurrent, partCurrent = this.partCurrent, hls2 = this.hls;
            var maxAutoLevel = hls2.maxAutoLevel, config = hls2.config, minAutoLevel = hls2.minAutoLevel, media = hls2.media;
            var currentFragDuration = partCurrent ? partCurrent.duration : fragCurrent ? fragCurrent.duration : 0;
            var pos = media ? media.currentTime : 0;
            var playbackRate = media && media.playbackRate !== 0 ? Math.abs(media.playbackRate) : 1;
            var avgbw = this.bwEstimator ? this.bwEstimator.getEstimate() : config.abrEwmaDefaultEstimate;
            var bufferStarvationDelay = (_utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].bufferInfo(media, pos, config.maxBufferHole).end - pos) / playbackRate;
            var bestLevel = this.findBestLevel(avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay, config.abrBandWidthFactor, config.abrBandWidthUpFactor);
            if (bestLevel >= 0) {
              return bestLevel;
            }
            _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].trace((bufferStarvationDelay ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
            var maxStarvationDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxStarvationDelay) : config.maxStarvationDelay;
            var bwFactor = config.abrBandWidthFactor;
            var bwUpFactor = config.abrBandWidthUpFactor;
            if (!bufferStarvationDelay) {
              var bitrateTestDelay = this.bitrateTestDelay;
              if (bitrateTestDelay) {
                var maxLoadingDelay = currentFragDuration ? Math.min(currentFragDuration, config.maxLoadingDelay) : config.maxLoadingDelay;
                maxStarvationDelay = maxLoadingDelay - bitrateTestDelay;
                _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].trace("bitrate test took " + Math.round(1e3 * bitrateTestDelay) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * maxStarvationDelay) + " ms");
                bwFactor = bwUpFactor = 1;
              }
            }
            bestLevel = this.findBestLevel(avgbw, minAutoLevel, maxAutoLevel, bufferStarvationDelay + maxStarvationDelay, bwFactor, bwUpFactor);
            return Math.max(bestLevel, 0);
          };
          _proto.findBestLevel = function findBestLevel(currentBw, minAutoLevel, maxAutoLevel, maxFetchDuration, bwFactor, bwUpFactor) {
            var _level$details;
            var fragCurrent = this.fragCurrent, partCurrent = this.partCurrent, currentLevel = this.lastLoadedFragLevel;
            var levels = this.hls.levels;
            var level = levels[currentLevel];
            var live = !!(level !== null && level !== void 0 && (_level$details = level.details) !== null && _level$details !== void 0 && _level$details.live);
            var currentCodecSet = level === null || level === void 0 ? void 0 : level.codecSet;
            var currentFragDuration = partCurrent ? partCurrent.duration : fragCurrent ? fragCurrent.duration : 0;
            for (var i = maxAutoLevel; i >= minAutoLevel; i--) {
              var levelInfo = levels[i];
              if (!levelInfo || currentCodecSet && levelInfo.codecSet !== currentCodecSet) {
                continue;
              }
              var levelDetails = levelInfo.details;
              var avgDuration = (partCurrent ? levelDetails === null || levelDetails === void 0 ? void 0 : levelDetails.partTarget : levelDetails === null || levelDetails === void 0 ? void 0 : levelDetails.averagetargetduration) || currentFragDuration;
              var adjustedbw = void 0;
              if (i <= currentLevel) {
                adjustedbw = bwFactor * currentBw;
              } else {
                adjustedbw = bwUpFactor * currentBw;
              }
              var bitrate = levels[i].maxBitrate;
              var fetchDuration = bitrate * avgDuration / adjustedbw;
              _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + i + "/" + Math.round(adjustedbw) + "/" + bitrate + "/" + avgDuration + "/" + maxFetchDuration + "/" + fetchDuration);
              if (adjustedbw > bitrate && (!fetchDuration || live && !this.bitrateTestDelay || fetchDuration < maxFetchDuration)) {
                return i;
              }
            }
            return -1;
          };
          _createClass(AbrController2, [{
            key: "nextAutoLevel",
            get: function get() {
              var forcedAutoLevel = this._nextAutoLevel;
              var bwEstimator = this.bwEstimator;
              if (forcedAutoLevel !== -1 && (!bwEstimator || !bwEstimator.canEstimate())) {
                return forcedAutoLevel;
              }
              var nextABRAutoLevel = this.getNextABRAutoLevel();
              if (forcedAutoLevel !== -1) {
                nextABRAutoLevel = Math.min(forcedAutoLevel, nextABRAutoLevel);
              }
              return nextABRAutoLevel;
            },
            set: function set(nextLevel) {
              this._nextAutoLevel = nextLevel;
            }
          }]);
          return AbrController2;
        }();
        __webpack_exports__["default"] = AbrController;
      },
      "./src/controller/audio-stream-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/controller/base-stream-controller.ts");
        var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/events.ts");
        var _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/buffer-helper.ts");
        var _fragment_tracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/controller/fragment-tracker.ts");
        var _types_level__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/types/level.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/types/loader.ts");
        var _loader_fragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/loader/fragment.ts");
        var _demux_chunk_cache__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/demux/chunk-cache.ts");
        var _demux_transmuxer_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/demux/transmuxer-interface.ts");
        var _types_transmuxer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/types/transmuxer.ts");
        var _fragment_finders__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/controller/fragment-finders.ts");
        var _utils_discontinuities__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/utils/discontinuities.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/errors.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/utils/logger.ts");
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var TICK_INTERVAL = 100;
        var AudioStreamController = /* @__PURE__ */ function(_BaseStreamController) {
          _inheritsLoose(AudioStreamController2, _BaseStreamController);
          function AudioStreamController2(hls2, fragmentTracker) {
            var _this;
            _this = _BaseStreamController.call(this, hls2, fragmentTracker, "[audio-stream-controller]") || this;
            _this.videoBuffer = null;
            _this.videoTrackCC = -1;
            _this.waitingVideoCC = -1;
            _this.audioSwitch = false;
            _this.trackId = -1;
            _this.waitingData = null;
            _this.mainDetails = null;
            _this.bufferFlushed = false;
            _this._registerListeners();
            return _this;
          }
          var _proto = AudioStreamController2.prototype;
          _proto.onHandlerDestroying = function onHandlerDestroying() {
            this._unregisterListeners();
            this.mainDetails = null;
          };
          _proto._registerListeners = function _registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, this.onError, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_RESET, this.onBufferReset, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_CREATED, this.onBufferCreated, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_FLUSHED, this.onBufferFlushed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].INIT_PTS_FOUND, this.onInitPtsFound, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_BUFFERED, this.onFragBuffered, this);
          };
          _proto._unregisterListeners = function _unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, this.onError, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_RESET, this.onBufferReset, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_CREATED, this.onBufferCreated, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_FLUSHED, this.onBufferFlushed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].INIT_PTS_FOUND, this.onInitPtsFound, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_BUFFERED, this.onFragBuffered, this);
          };
          _proto.onInitPtsFound = function onInitPtsFound(event, _ref) {
            var frag = _ref.frag, id = _ref.id, initPTS = _ref.initPTS;
            if (id === "main") {
              var cc = frag.cc;
              this.initPTS[frag.cc] = initPTS;
              this.log("InitPTS for cc: " + cc + " found from main: " + initPTS);
              this.videoTrackCC = cc;
              if (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_INIT_PTS) {
                this.tick();
              }
            }
          };
          _proto.startLoad = function startLoad(startPosition) {
            if (!this.levels) {
              this.startPosition = startPosition;
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].STOPPED;
              return;
            }
            var lastCurrentTime = this.lastCurrentTime;
            this.stopLoad();
            this.setInterval(TICK_INTERVAL);
            this.fragLoadError = 0;
            if (lastCurrentTime > 0 && startPosition === -1) {
              this.log("Override startPosition with lastCurrentTime @" + lastCurrentTime.toFixed(3));
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
            } else {
              this.loadedmetadata = false;
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_TRACK;
            }
            this.nextLoadPosition = this.startPosition = this.lastCurrentTime = startPosition;
            this.tick();
          };
          _proto.doTick = function doTick() {
            switch (this.state) {
              case _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE:
                this.doTickIdle();
                break;
              case _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_TRACK: {
                var _levels$trackId;
                var levels = this.levels, trackId = this.trackId;
                var details = levels === null || levels === void 0 ? void 0 : (_levels$trackId = levels[trackId]) === null || _levels$trackId === void 0 ? void 0 : _levels$trackId.details;
                if (details) {
                  if (this.waitForCdnTuneIn(details)) {
                    break;
                  }
                  this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_INIT_PTS;
                }
                break;
              }
              case _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].FRAG_LOADING_WAITING_RETRY: {
                var _this$media;
                var now = performance.now();
                var retryDate = this.retryDate;
                if (!retryDate || now >= retryDate || (_this$media = this.media) !== null && _this$media !== void 0 && _this$media.seeking) {
                  this.log("RetryDate reached, switch back to IDLE state");
                  this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
                }
                break;
              }
              case _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_INIT_PTS: {
                var waitingData = this.waitingData;
                if (waitingData) {
                  var frag = waitingData.frag, part = waitingData.part, cache = waitingData.cache, complete = waitingData.complete;
                  if (this.initPTS[frag.cc] !== void 0) {
                    this.waitingData = null;
                    this.waitingVideoCC = -1;
                    this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].FRAG_LOADING;
                    var payload = cache.flush();
                    var data = {
                      frag,
                      part,
                      payload,
                      networkDetails: null
                    };
                    this._handleFragmentLoadProgress(data);
                    if (complete) {
                      _BaseStreamController.prototype._handleFragmentLoadComplete.call(this, data);
                    }
                  } else if (this.videoTrackCC !== this.waitingVideoCC) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_14__["logger"].log("Waiting fragment cc (" + frag.cc + ") cancelled because video is at cc " + this.videoTrackCC);
                    this.clearWaitingFragment();
                  } else {
                    var pos = this.getLoadPosition();
                    var bufferInfo = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].bufferInfo(this.mediaBuffer, pos, this.config.maxBufferHole);
                    var waitingFragmentAtPosition = Object(_fragment_finders__WEBPACK_IMPORTED_MODULE_11__["fragmentWithinToleranceTest"])(bufferInfo.end, this.config.maxFragLookUpTolerance, frag);
                    if (waitingFragmentAtPosition < 0) {
                      _utils_logger__WEBPACK_IMPORTED_MODULE_14__["logger"].log("Waiting fragment cc (" + frag.cc + ") @ " + frag.start + " cancelled because another fragment at " + bufferInfo.end + " is needed");
                      this.clearWaitingFragment();
                    }
                  }
                } else {
                  this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
                }
              }
            }
            this.onTickEnd();
          };
          _proto.clearWaitingFragment = function clearWaitingFragment() {
            var waitingData = this.waitingData;
            if (waitingData) {
              this.fragmentTracker.removeFragment(waitingData.frag);
              this.waitingData = null;
              this.waitingVideoCC = -1;
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
            }
          };
          _proto.onTickEnd = function onTickEnd() {
            var media = this.media;
            if (!media || !media.readyState) {
              return;
            }
            var mediaBuffer = this.mediaBuffer ? this.mediaBuffer : media;
            var buffered = mediaBuffer.buffered;
            if (!this.loadedmetadata && buffered.length) {
              this.loadedmetadata = true;
            }
            this.lastCurrentTime = media.currentTime;
          };
          _proto.doTickIdle = function doTickIdle() {
            var _frag$decryptdata, _frag$decryptdata2;
            var hls2 = this.hls, levels = this.levels, media = this.media, trackId = this.trackId;
            var config = hls2.config;
            if (!levels || !levels[trackId]) {
              return;
            }
            if (!media && (this.startFragRequested || !config.startFragPrefetch)) {
              return;
            }
            var levelInfo = levels[trackId];
            var trackDetails = levelInfo.details;
            if (!trackDetails || trackDetails.live && this.levelLastLoaded !== trackId || this.waitForCdnTuneIn(trackDetails)) {
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_TRACK;
              return;
            }
            if (this.bufferFlushed) {
              this.bufferFlushed = false;
              this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, _loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].AUDIO, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].AUDIO);
            }
            var bufferInfo = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].AUDIO);
            if (bufferInfo === null) {
              return;
            }
            var bufferLen = bufferInfo.len;
            var maxBufLen = this.getMaxBufferLength();
            var audioSwitch = this.audioSwitch;
            if (bufferLen >= maxBufLen && !audioSwitch) {
              return;
            }
            if (!audioSwitch && this._streamEnded(bufferInfo, trackDetails)) {
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_EOS, {
                type: "audio"
              });
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].ENDED;
              return;
            }
            var fragments = trackDetails.fragments;
            var start = fragments[0].start;
            var targetBufferTime = bufferInfo.end;
            if (audioSwitch) {
              var pos = this.getLoadPosition();
              targetBufferTime = pos;
              if (trackDetails.PTSKnown && pos < start) {
                if (bufferInfo.end > start || bufferInfo.nextStart) {
                  this.log("Alt audio track ahead of main track, seek to start of alt audio track");
                  media.currentTime = start + 0.05;
                }
              }
            }
            var frag = this.getNextFragment(targetBufferTime, trackDetails);
            if (!frag) {
              this.bufferFlushed = true;
              return;
            }
            if (((_frag$decryptdata = frag.decryptdata) === null || _frag$decryptdata === void 0 ? void 0 : _frag$decryptdata.keyFormat) === "identity" && !((_frag$decryptdata2 = frag.decryptdata) !== null && _frag$decryptdata2 !== void 0 && _frag$decryptdata2.key)) {
              this.loadKey(frag, trackDetails);
            } else {
              this.loadFragment(frag, trackDetails, targetBufferTime);
            }
          };
          _proto.getMaxBufferLength = function getMaxBufferLength() {
            var maxConfigBuffer = _BaseStreamController.prototype.getMaxBufferLength.call(this);
            var mainBufferInfo = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN);
            if (mainBufferInfo === null) {
              return maxConfigBuffer;
            }
            return Math.max(maxConfigBuffer, mainBufferInfo.len);
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            this.videoBuffer = null;
            _BaseStreamController.prototype.onMediaDetaching.call(this);
          };
          _proto.onAudioTracksUpdated = function onAudioTracksUpdated(event, _ref2) {
            var audioTracks = _ref2.audioTracks;
            this.resetTransmuxer();
            this.levels = audioTracks.map(function(mediaPlaylist) {
              return new _types_level__WEBPACK_IMPORTED_MODULE_5__["Level"](mediaPlaylist);
            });
          };
          _proto.onAudioTrackSwitching = function onAudioTrackSwitching(event, data) {
            var altAudio = !!data.url;
            this.trackId = data.id;
            var fragCurrent = this.fragCurrent;
            if (fragCurrent !== null && fragCurrent !== void 0 && fragCurrent.loader) {
              fragCurrent.loader.abort();
            }
            this.fragCurrent = null;
            this.clearWaitingFragment();
            if (!altAudio) {
              this.resetTransmuxer();
            } else {
              this.setInterval(TICK_INTERVAL);
            }
            if (altAudio) {
              this.audioSwitch = true;
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
            } else {
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].STOPPED;
            }
            this.tick();
          };
          _proto.onManifestLoading = function onManifestLoading() {
            this.mainDetails = null;
            this.fragmentTracker.removeAllFragments();
            this.startPosition = this.lastCurrentTime = 0;
            this.bufferFlushed = false;
          };
          _proto.onLevelLoaded = function onLevelLoaded(event, data) {
            this.mainDetails = data.details;
          };
          _proto.onAudioTrackLoaded = function onAudioTrackLoaded(event, data) {
            var _track$details;
            var levels = this.levels;
            var newDetails = data.details, trackId = data.id;
            if (!levels) {
              this.warn("Audio tracks were reset while loading level " + trackId);
              return;
            }
            this.log("Track " + trackId + " loaded [" + newDetails.startSN + "," + newDetails.endSN + "],duration:" + newDetails.totalduration);
            var track = levels[trackId];
            var sliding = 0;
            if (newDetails.live || (_track$details = track.details) !== null && _track$details !== void 0 && _track$details.live) {
              var mainDetails = this.mainDetails;
              if (!newDetails.fragments[0]) {
                newDetails.deltaUpdateFailed = true;
              }
              if (newDetails.deltaUpdateFailed || !mainDetails) {
                return;
              }
              if (!track.details && newDetails.hasProgramDateTime && mainDetails.hasProgramDateTime) {
                Object(_utils_discontinuities__WEBPACK_IMPORTED_MODULE_12__["alignMediaPlaylistByPDT"])(newDetails, mainDetails);
                sliding = newDetails.fragments[0].start;
              } else {
                sliding = this.alignPlaylists(newDetails, track.details);
              }
            }
            track.details = newDetails;
            this.levelLastLoaded = trackId;
            if (!this.startFragRequested && (this.mainDetails || !newDetails.live)) {
              this.setStartPosition(track.details, sliding);
            }
            if (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_TRACK && !this.waitForCdnTuneIn(newDetails)) {
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
            }
            this.tick();
          };
          _proto._handleFragmentLoadProgress = function _handleFragmentLoadProgress(data) {
            var _frag$initSegment;
            var frag = data.frag, part = data.part, payload = data.payload;
            var config = this.config, trackId = this.trackId, levels = this.levels;
            if (!levels) {
              this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + frag.sn + " of level " + frag.level + " will not be buffered");
              return;
            }
            var track = levels[trackId];
            console.assert(track, "Audio track is defined on fragment load progress");
            var details = track.details;
            console.assert(details, "Audio track details are defined on fragment load progress");
            var audioCodec = config.defaultAudioCodec || track.audioCodec || "mp4a.40.2";
            var transmuxer = this.transmuxer;
            if (!transmuxer) {
              transmuxer = this.transmuxer = new _demux_transmuxer_interface__WEBPACK_IMPORTED_MODULE_9__["default"](this.hls, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this));
            }
            var initPTS = this.initPTS[frag.cc];
            var initSegmentData = (_frag$initSegment = frag.initSegment) === null || _frag$initSegment === void 0 ? void 0 : _frag$initSegment.data;
            if (initPTS !== void 0) {
              var accurateTimeOffset = false;
              var partIndex = part ? part.index : -1;
              var partial = partIndex !== -1;
              var chunkMeta = new _types_transmuxer__WEBPACK_IMPORTED_MODULE_10__["ChunkMetadata"](frag.level, frag.sn, frag.stats.chunkCount, payload.byteLength, partIndex, partial);
              transmuxer.push(payload, initSegmentData, audioCodec, "", frag, part, details.totalduration, accurateTimeOffset, chunkMeta, initPTS);
            } else {
              _utils_logger__WEBPACK_IMPORTED_MODULE_14__["logger"].log("Unknown video PTS for cc " + frag.cc + ", waiting for video PTS before demuxing audio frag " + frag.sn + " of [" + details.startSN + " ," + details.endSN + "],track " + trackId);
              var _this$waitingData = this.waitingData = this.waitingData || {
                frag,
                part,
                cache: new _demux_chunk_cache__WEBPACK_IMPORTED_MODULE_8__["default"](),
                complete: false
              }, cache = _this$waitingData.cache;
              cache.push(new Uint8Array(payload));
              this.waitingVideoCC = this.videoTrackCC;
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_INIT_PTS;
            }
          };
          _proto._handleFragmentLoadComplete = function _handleFragmentLoadComplete(fragLoadedData) {
            if (this.waitingData) {
              this.waitingData.complete = true;
              return;
            }
            _BaseStreamController.prototype._handleFragmentLoadComplete.call(this, fragLoadedData);
          };
          _proto.onBufferReset = function onBufferReset() {
            this.mediaBuffer = this.videoBuffer = null;
            this.loadedmetadata = false;
          };
          _proto.onBufferCreated = function onBufferCreated(event, data) {
            var audioTrack = data.tracks.audio;
            if (audioTrack) {
              this.mediaBuffer = audioTrack.buffer;
            }
            if (data.tracks.video) {
              this.videoBuffer = data.tracks.video.buffer;
            }
          };
          _proto.onFragBuffered = function onFragBuffered(event, data) {
            var frag = data.frag, part = data.part;
            if (frag.type !== _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].AUDIO) {
              return;
            }
            if (this.fragContextChanged(frag)) {
              this.warn("Fragment " + frag.sn + (part ? " p: " + part.index : "") + " of level " + frag.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch);
              return;
            }
            if (frag.sn !== "initSegment") {
              this.fragPrevious = frag;
              if (this.audioSwitch) {
                this.audioSwitch = false;
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].AUDIO_TRACK_SWITCHED, {
                  id: this.trackId
                });
              }
            }
            this.fragBufferedComplete(frag, part);
          };
          _proto.onError = function onError(event, data) {
            switch (data.details) {
              case _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"].FRAG_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"].FRAG_LOAD_TIMEOUT:
              case _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"].KEY_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"].KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(_types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].AUDIO, data);
                break;
              case _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"].AUDIO_TRACK_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"].AUDIO_TRACK_LOAD_TIMEOUT:
                if (this.state !== _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].ERROR && this.state !== _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].STOPPED) {
                  this.state = data.fatal ? _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].ERROR : _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
                  this.warn(data.details + " while loading frag, switching to " + this.state + " state");
                }
                break;
              case _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"].BUFFER_FULL_ERROR:
                if (data.parent === "audio" && (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSING || this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSED)) {
                  var flushBuffer = true;
                  var bufferedInfo = this.getFwdBufferInfo(this.mediaBuffer, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].AUDIO);
                  if (bufferedInfo && bufferedInfo.len > 0.5) {
                    flushBuffer = !this.reduceMaxBufferLength(bufferedInfo.len);
                  }
                  if (flushBuffer) {
                    this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer");
                    this.fragCurrent = null;
                    _BaseStreamController.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio");
                  }
                  this.resetLoadingState();
                }
                break;
            }
          };
          _proto.onBufferFlushed = function onBufferFlushed(event, _ref3) {
            var type = _ref3.type;
            if (type === _loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].AUDIO) {
              this.bufferFlushed = true;
            }
          };
          _proto._handleTransmuxComplete = function _handleTransmuxComplete(transmuxResult) {
            var _id3$samples;
            var id = "audio";
            var hls2 = this.hls;
            var remuxResult = transmuxResult.remuxResult, chunkMeta = transmuxResult.chunkMeta;
            var context = this.getCurrentContext(chunkMeta);
            if (!context) {
              this.warn("The loading context changed while buffering fragment " + chunkMeta.sn + " of level " + chunkMeta.level + ". This chunk will not be buffered.");
              this.resetLiveStartWhenNotLoaded(chunkMeta.level);
              return;
            }
            var frag = context.frag, part = context.part;
            var audio = remuxResult.audio, text = remuxResult.text, id3 = remuxResult.id3, initSegment = remuxResult.initSegment;
            if (this.fragContextChanged(frag)) {
              return;
            }
            this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSING;
            if (this.audioSwitch && audio) {
              this.completeAudioSwitch();
            }
            if (initSegment !== null && initSegment !== void 0 && initSegment.tracks) {
              this._bufferInitSegment(initSegment.tracks, frag, chunkMeta);
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_PARSING_INIT_SEGMENT, {
                frag,
                id,
                tracks: initSegment.tracks
              });
            }
            if (audio) {
              var startPTS = audio.startPTS, endPTS = audio.endPTS, startDTS = audio.startDTS, endDTS = audio.endDTS;
              if (part) {
                part.elementaryStreams[_loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].AUDIO] = {
                  startPTS,
                  endPTS,
                  startDTS,
                  endDTS
                };
              }
              frag.setElementaryStreamInfo(_loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].AUDIO, startPTS, endPTS, startDTS, endDTS);
              this.bufferFragmentData(audio, frag, part, chunkMeta);
            }
            if (id3 !== null && id3 !== void 0 && (_id3$samples = id3.samples) !== null && _id3$samples !== void 0 && _id3$samples.length) {
              var emittedID3 = _extends({
                frag,
                id
              }, id3);
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_PARSING_METADATA, emittedID3);
            }
            if (text) {
              var emittedText = _extends({
                frag,
                id
              }, text);
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].FRAG_PARSING_USERDATA, emittedText);
            }
          };
          _proto._bufferInitSegment = function _bufferInitSegment(tracks, frag, chunkMeta) {
            if (this.state !== _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSING) {
              return;
            }
            if (tracks.video) {
              delete tracks.video;
            }
            var track = tracks.audio;
            if (!track) {
              return;
            }
            track.levelCodec = track.codec;
            track.id = "audio";
            this.log("Init audio buffer, container:" + track.container + ", codecs[parsed]=[" + track.codec + "]");
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_CODECS, tracks);
            var initSegment = track.initSegment;
            if (initSegment !== null && initSegment !== void 0 && initSegment.byteLength) {
              var segment = {
                type: "audio",
                frag,
                part: null,
                chunkMeta,
                parent: frag.type,
                data: initSegment
              };
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].BUFFER_APPENDING, segment);
            }
            this.tick();
          };
          _proto.loadFragment = function loadFragment(frag, trackDetails, targetBufferTime) {
            var fragState = this.fragmentTracker.getState(frag);
            this.fragCurrent = frag;
            if (this.audioSwitch || fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_4__["FragmentState"].NOT_LOADED || fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_4__["FragmentState"].PARTIAL) {
              if (frag.sn === "initSegment") {
                this._loadInitSegment(frag);
              } else if (trackDetails.live && !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(this.initPTS[frag.cc])) {
                this.log("Waiting for video PTS in continuity counter " + frag.cc + " of live stream before loading audio fragment " + frag.sn + " of level " + this.trackId);
                this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_INIT_PTS;
              } else {
                this.startFragRequested = true;
                _BaseStreamController.prototype.loadFragment.call(this, frag, trackDetails, targetBufferTime);
              }
            }
          };
          _proto.completeAudioSwitch = function completeAudioSwitch() {
            var hls2 = this.hls, media = this.media, trackId = this.trackId;
            if (media) {
              this.log("Switching audio track : flushing all audio");
              _BaseStreamController.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio");
            }
            this.audioSwitch = false;
            hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].AUDIO_TRACK_SWITCHED, {
              id: trackId
            });
          };
          return AudioStreamController2;
        }(_base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["default"]);
        __webpack_exports__["default"] = AudioStreamController;
      },
      "./src/controller/audio-track-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/errors.ts");
        var _base_playlist_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/controller/base-playlist-controller.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/types/loader.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var AudioTrackController = /* @__PURE__ */ function(_BasePlaylistControll) {
          _inheritsLoose(AudioTrackController2, _BasePlaylistControll);
          function AudioTrackController2(hls2) {
            var _this;
            _this = _BasePlaylistControll.call(this, hls2, "[audio-track-controller]") || this;
            _this.tracks = [];
            _this.groupId = null;
            _this.tracksInGroup = [];
            _this.trackId = -1;
            _this.trackName = "";
            _this.selectDefaultTrack = true;
            _this.registerListeners();
            return _this;
          }
          var _proto = AudioTrackController2.prototype;
          _proto.registerListeners = function registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_LOADING, this.onLevelLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_SWITCHING, this.onLevelSwitching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, this.onError, this);
          };
          _proto.unregisterListeners = function unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_LOADING, this.onLevelLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_SWITCHING, this.onLevelSwitching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, this.onError, this);
          };
          _proto.destroy = function destroy() {
            this.unregisterListeners();
            this.tracks.length = 0;
            this.tracksInGroup.length = 0;
            _BasePlaylistControll.prototype.destroy.call(this);
          };
          _proto.onManifestLoading = function onManifestLoading() {
            this.tracks = [];
            this.groupId = null;
            this.tracksInGroup = [];
            this.trackId = -1;
            this.trackName = "";
            this.selectDefaultTrack = true;
          };
          _proto.onManifestParsed = function onManifestParsed(event, data) {
            this.tracks = data.audioTracks || [];
          };
          _proto.onAudioTrackLoaded = function onAudioTrackLoaded(event, data) {
            var id = data.id, details = data.details;
            var currentTrack = this.tracksInGroup[id];
            if (!currentTrack) {
              this.warn("Invalid audio track id " + id);
              return;
            }
            var curDetails = currentTrack.details;
            currentTrack.details = data.details;
            this.log("audioTrack " + id + " loaded [" + details.startSN + "-" + details.endSN + "]");
            if (id === this.trackId) {
              this.retryCount = 0;
              this.playlistLoaded(id, data, curDetails);
            }
          };
          _proto.onLevelLoading = function onLevelLoading(event, data) {
            this.switchLevel(data.level);
          };
          _proto.onLevelSwitching = function onLevelSwitching(event, data) {
            this.switchLevel(data.level);
          };
          _proto.switchLevel = function switchLevel(levelIndex) {
            var levelInfo = this.hls.levels[levelIndex];
            if (!(levelInfo !== null && levelInfo !== void 0 && levelInfo.audioGroupIds)) {
              return;
            }
            var audioGroupId = levelInfo.audioGroupIds[levelInfo.urlId];
            if (this.groupId !== audioGroupId) {
              this.groupId = audioGroupId;
              var audioTracks = this.tracks.filter(function(track) {
                return !audioGroupId || track.groupId === audioGroupId;
              });
              if (this.selectDefaultTrack && !audioTracks.some(function(track) {
                return track.default;
              })) {
                this.selectDefaultTrack = false;
              }
              this.tracksInGroup = audioTracks;
              var audioTracksUpdated = {
                audioTracks
              };
              this.log("Updating audio tracks, " + audioTracks.length + ' track(s) found in "' + audioGroupId + '" group-id');
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].AUDIO_TRACKS_UPDATED, audioTracksUpdated);
              this.selectInitialTrack();
            }
          };
          _proto.onError = function onError(event, data) {
            _BasePlaylistControll.prototype.onError.call(this, event, data);
            if (data.fatal || !data.context) {
              return;
            }
            if (data.context.type === _types_loader__WEBPACK_IMPORTED_MODULE_3__["PlaylistContextType"].AUDIO_TRACK && data.context.id === this.trackId && data.context.groupId === this.groupId) {
              this.retryLoadingOrFail(data);
            }
          };
          _proto.setAudioTrack = function setAudioTrack(newId) {
            var tracks = this.tracksInGroup;
            if (newId < 0 || newId >= tracks.length) {
              this.warn("Invalid id passed to audio-track controller");
              return;
            }
            this.clearTimer();
            var lastTrack = tracks[this.trackId];
            this.log("Now switching to audio-track index " + newId);
            var track = tracks[newId];
            var id = track.id, _track$groupId = track.groupId, groupId = _track$groupId === void 0 ? "" : _track$groupId, name = track.name, type = track.type, url = track.url;
            this.trackId = newId;
            this.trackName = name;
            this.selectDefaultTrack = false;
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].AUDIO_TRACK_SWITCHING, {
              id,
              groupId,
              name,
              type,
              url
            });
            if (track.details && !track.details.live) {
              return;
            }
            var hlsUrlParameters = this.switchParams(track.url, lastTrack === null || lastTrack === void 0 ? void 0 : lastTrack.details);
            this.loadPlaylist(hlsUrlParameters);
          };
          _proto.selectInitialTrack = function selectInitialTrack() {
            var audioTracks = this.tracksInGroup;
            console.assert(audioTracks.length, "Initial audio track should be selected when tracks are known");
            var currentAudioTrackName = this.trackName;
            var trackId = this.findTrackId(currentAudioTrackName) || this.findTrackId();
            if (trackId !== -1) {
              this.setAudioTrack(trackId);
            } else {
              this.warn("No track found for running audio group-ID: " + this.groupId);
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].MEDIA_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].AUDIO_TRACK_LOAD_ERROR,
                fatal: true
              });
            }
          };
          _proto.findTrackId = function findTrackId(name) {
            var audioTracks = this.tracksInGroup;
            for (var i = 0; i < audioTracks.length; i++) {
              var track = audioTracks[i];
              if (!this.selectDefaultTrack || track.default) {
                if (!name || name === track.name) {
                  return track.id;
                }
              }
            }
            return -1;
          };
          _proto.loadPlaylist = function loadPlaylist(hlsUrlParameters) {
            var audioTrack = this.tracksInGroup[this.trackId];
            if (this.shouldLoadTrack(audioTrack)) {
              var id = audioTrack.id;
              var groupId = audioTrack.groupId;
              var url = audioTrack.url;
              if (hlsUrlParameters) {
                try {
                  url = hlsUrlParameters.addDirectives(url);
                } catch (error) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + error);
                }
              }
              this.log("loading audio-track playlist for id: " + id);
              this.clearTimer();
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].AUDIO_TRACK_LOADING, {
                url,
                id,
                groupId,
                deliveryDirectives: hlsUrlParameters || null
              });
            }
          };
          _createClass(AudioTrackController2, [{
            key: "audioTracks",
            get: function get() {
              return this.tracksInGroup;
            }
          }, {
            key: "audioTrack",
            get: function get() {
              return this.trackId;
            },
            set: function set(newId) {
              this.selectDefaultTrack = false;
              this.setAudioTrack(newId);
            }
          }]);
          return AudioTrackController2;
        }(_base_playlist_controller__WEBPACK_IMPORTED_MODULE_2__["default"]);
        __webpack_exports__["default"] = AudioTrackController;
      },
      "./src/controller/base-playlist-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return BasePlaylistController;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _types_level__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/types/level.ts");
        var _level_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/controller/level-helper.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/logger.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/errors.ts");
        var BasePlaylistController = /* @__PURE__ */ function() {
          function BasePlaylistController2(hls2, logPrefix) {
            this.hls = void 0;
            this.timer = -1;
            this.canLoad = false;
            this.retryCount = 0;
            this.log = void 0;
            this.warn = void 0;
            this.log = _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].log.bind(_utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"], logPrefix + ":");
            this.warn = _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn.bind(_utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"], logPrefix + ":");
            this.hls = hls2;
          }
          var _proto = BasePlaylistController2.prototype;
          _proto.destroy = function destroy() {
            this.clearTimer();
            this.hls = this.log = this.warn = null;
          };
          _proto.onError = function onError(event, data) {
            if (data.fatal && data.type === _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"].NETWORK_ERROR) {
              this.clearTimer();
            }
          };
          _proto.clearTimer = function clearTimer() {
            clearTimeout(this.timer);
            this.timer = -1;
          };
          _proto.startLoad = function startLoad() {
            this.canLoad = true;
            this.retryCount = 0;
            this.loadPlaylist();
          };
          _proto.stopLoad = function stopLoad() {
            this.canLoad = false;
            this.clearTimer();
          };
          _proto.switchParams = function switchParams(playlistUri, previous) {
            var renditionReports = previous === null || previous === void 0 ? void 0 : previous.renditionReports;
            if (renditionReports) {
              for (var i = 0; i < renditionReports.length; i++) {
                var attr = renditionReports[i];
                var uri = "" + attr.URI;
                if (uri === playlistUri.substr(-uri.length)) {
                  var msn = parseInt(attr["LAST-MSN"]);
                  var part = parseInt(attr["LAST-PART"]);
                  if (previous && this.hls.config.lowLatencyMode) {
                    var currentGoal = Math.min(previous.age - previous.partTarget, previous.targetduration);
                    if (part !== void 0 && currentGoal > previous.partTarget) {
                      part += 1;
                    }
                  }
                  if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(msn)) {
                    return new _types_level__WEBPACK_IMPORTED_MODULE_1__["HlsUrlParameters"](msn, Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(part) ? part : void 0, _types_level__WEBPACK_IMPORTED_MODULE_1__["HlsSkip"].No);
                  }
                }
              }
            }
          };
          _proto.loadPlaylist = function loadPlaylist(hlsUrlParameters) {
          };
          _proto.shouldLoadTrack = function shouldLoadTrack(track) {
            return this.canLoad && track && !!track.url && (!track.details || track.details.live);
          };
          _proto.playlistLoaded = function playlistLoaded(index, data, previousDetails) {
            var _this = this;
            var details = data.details, stats = data.stats;
            var elapsed = stats.loading.end ? Math.max(0, self.performance.now() - stats.loading.end) : 0;
            details.advancedDateTime = Date.now() - elapsed;
            if (details.live || previousDetails !== null && previousDetails !== void 0 && previousDetails.live) {
              details.reloaded(previousDetails);
              if (previousDetails) {
                this.log("live playlist " + index + " " + (details.advanced ? "REFRESHED " + details.lastPartSn + "-" + details.lastPartIndex : "MISSED"));
              }
              if (previousDetails && details.fragments.length > 0) {
                Object(_level_helper__WEBPACK_IMPORTED_MODULE_2__["mergeDetails"])(previousDetails, details);
              }
              if (!this.canLoad || !details.live) {
                return;
              }
              var deliveryDirectives;
              var msn = void 0;
              var part = void 0;
              if (details.canBlockReload && details.endSN && details.advanced) {
                var lowLatencyMode = this.hls.config.lowLatencyMode;
                var lastPartSn = details.lastPartSn;
                var endSn = details.endSN;
                var lastPartIndex = details.lastPartIndex;
                var hasParts = lastPartIndex !== -1;
                var lastPart = lastPartSn === endSn;
                var nextSnStartIndex = lowLatencyMode ? 0 : lastPartIndex;
                if (hasParts) {
                  msn = lastPart ? endSn + 1 : lastPartSn;
                  part = lastPart ? nextSnStartIndex : lastPartIndex + 1;
                } else {
                  msn = endSn + 1;
                }
                var lastAdvanced = details.age;
                var cdnAge = lastAdvanced + details.ageHeader;
                var currentGoal = Math.min(cdnAge - details.partTarget, details.targetduration * 1.5);
                if (currentGoal > 0) {
                  if (previousDetails && currentGoal > previousDetails.tuneInGoal) {
                    this.warn("CDN Tune-in goal increased from: " + previousDetails.tuneInGoal + " to: " + currentGoal + " with playlist age: " + details.age);
                    currentGoal = 0;
                  } else {
                    var segments = Math.floor(currentGoal / details.targetduration);
                    msn += segments;
                    if (part !== void 0) {
                      var parts = Math.round(currentGoal % details.targetduration / details.partTarget);
                      part += parts;
                    }
                    this.log("CDN Tune-in age: " + details.ageHeader + "s last advanced " + lastAdvanced.toFixed(2) + "s goal: " + currentGoal + " skip sn " + segments + " to part " + part);
                  }
                  details.tuneInGoal = currentGoal;
                }
                deliveryDirectives = this.getDeliveryDirectives(details, data.deliveryDirectives, msn, part);
                if (lowLatencyMode || !lastPart) {
                  this.loadPlaylist(deliveryDirectives);
                  return;
                }
              } else {
                deliveryDirectives = this.getDeliveryDirectives(details, data.deliveryDirectives, msn, part);
              }
              var reloadInterval = Object(_level_helper__WEBPACK_IMPORTED_MODULE_2__["computeReloadInterval"])(details, stats);
              if (msn !== void 0 && details.canBlockReload) {
                reloadInterval -= details.partTarget || 1;
              }
              this.log("reload live playlist " + index + " in " + Math.round(reloadInterval) + " ms");
              this.timer = self.setTimeout(function() {
                return _this.loadPlaylist(deliveryDirectives);
              }, reloadInterval);
            } else {
              this.clearTimer();
            }
          };
          _proto.getDeliveryDirectives = function getDeliveryDirectives(details, previousDeliveryDirectives, msn, part) {
            var skip = Object(_types_level__WEBPACK_IMPORTED_MODULE_1__["getSkipValue"])(details, msn);
            if (previousDeliveryDirectives !== null && previousDeliveryDirectives !== void 0 && previousDeliveryDirectives.skip && details.deltaUpdateFailed) {
              msn = previousDeliveryDirectives.msn;
              part = previousDeliveryDirectives.part;
              skip = _types_level__WEBPACK_IMPORTED_MODULE_1__["HlsSkip"].No;
            }
            return new _types_level__WEBPACK_IMPORTED_MODULE_1__["HlsUrlParameters"](msn, part, skip);
          };
          _proto.retryLoadingOrFail = function retryLoadingOrFail(errorEvent) {
            var _this2 = this;
            var config = this.hls.config;
            var retry = this.retryCount < config.levelLoadingMaxRetry;
            if (retry) {
              var _errorEvent$context;
              this.retryCount++;
              if (errorEvent.details.indexOf("LoadTimeOut") > -1 && (_errorEvent$context = errorEvent.context) !== null && _errorEvent$context !== void 0 && _errorEvent$context.deliveryDirectives) {
                this.warn("retry playlist loading #" + this.retryCount + ' after "' + errorEvent.details + '"');
                this.loadPlaylist();
              } else {
                var delay = Math.min(Math.pow(2, this.retryCount) * config.levelLoadingRetryDelay, config.levelLoadingMaxRetryTimeout);
                this.timer = self.setTimeout(function() {
                  return _this2.loadPlaylist();
                }, delay);
                this.warn("retry playlist loading #" + this.retryCount + " in " + delay + ' ms after "' + errorEvent.details + '"');
              }
            } else {
              this.warn('cannot recover from error "' + errorEvent.details + '"');
              this.clearTimer();
              errorEvent.fatal = true;
            }
            return retry;
          };
          return BasePlaylistController2;
        }();
      },
      "./src/controller/base-stream-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "State", function() {
          return State;
        });
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return BaseStreamController;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _task_loop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/task-loop.ts");
        var _fragment_tracker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/controller/fragment-tracker.ts");
        var _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/buffer-helper.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/logger.ts");
        var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/errors.ts");
        var _types_transmuxer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/types/transmuxer.ts");
        var _utils_mp4_tools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _utils_discontinuities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/utils/discontinuities.ts");
        var _fragment_finders__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/controller/fragment-finders.ts");
        var _level_helper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/controller/level-helper.ts");
        var _loader_fragment_loader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/loader/fragment-loader.ts");
        var _crypt_decrypter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/crypt/decrypter.ts");
        var _utils_time_ranges__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./src/utils/time-ranges.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./src/types/loader.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _assertThisInitialized(self2) {
          if (self2 === void 0) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          }
          return self2;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var State = {
          STOPPED: "STOPPED",
          IDLE: "IDLE",
          KEY_LOADING: "KEY_LOADING",
          FRAG_LOADING: "FRAG_LOADING",
          FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
          WAITING_TRACK: "WAITING_TRACK",
          PARSING: "PARSING",
          PARSED: "PARSED",
          BACKTRACKING: "BACKTRACKING",
          ENDED: "ENDED",
          ERROR: "ERROR",
          WAITING_INIT_PTS: "WAITING_INIT_PTS",
          WAITING_LEVEL: "WAITING_LEVEL"
        };
        var BaseStreamController = /* @__PURE__ */ function(_TaskLoop) {
          _inheritsLoose(BaseStreamController2, _TaskLoop);
          function BaseStreamController2(hls2, fragmentTracker, logPrefix) {
            var _this;
            _this = _TaskLoop.call(this) || this;
            _this.hls = void 0;
            _this.fragPrevious = null;
            _this.fragCurrent = null;
            _this.fragmentTracker = void 0;
            _this.transmuxer = null;
            _this._state = State.STOPPED;
            _this.media = void 0;
            _this.mediaBuffer = void 0;
            _this.config = void 0;
            _this.bitrateTest = false;
            _this.lastCurrentTime = 0;
            _this.nextLoadPosition = 0;
            _this.startPosition = 0;
            _this.loadedmetadata = false;
            _this.fragLoadError = 0;
            _this.retryDate = 0;
            _this.levels = null;
            _this.fragmentLoader = void 0;
            _this.levelLastLoaded = null;
            _this.startFragRequested = false;
            _this.decrypter = void 0;
            _this.initPTS = [];
            _this.onvseeking = null;
            _this.onvended = null;
            _this.logPrefix = "";
            _this.log = void 0;
            _this.warn = void 0;
            _this.logPrefix = logPrefix;
            _this.log = _utils_logger__WEBPACK_IMPORTED_MODULE_4__["logger"].log.bind(_utils_logger__WEBPACK_IMPORTED_MODULE_4__["logger"], logPrefix + ":");
            _this.warn = _utils_logger__WEBPACK_IMPORTED_MODULE_4__["logger"].warn.bind(_utils_logger__WEBPACK_IMPORTED_MODULE_4__["logger"], logPrefix + ":");
            _this.hls = hls2;
            _this.fragmentLoader = new _loader_fragment_loader__WEBPACK_IMPORTED_MODULE_12__["default"](hls2.config);
            _this.fragmentTracker = fragmentTracker;
            _this.config = hls2.config;
            _this.decrypter = new _crypt_decrypter__WEBPACK_IMPORTED_MODULE_13__["default"](hls2, hls2.config);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].KEY_LOADED, _this.onKeyLoaded, _assertThisInitialized(_this));
            return _this;
          }
          var _proto = BaseStreamController2.prototype;
          _proto.doTick = function doTick() {
            this.onTickEnd();
          };
          _proto.onTickEnd = function onTickEnd() {
          };
          _proto.startLoad = function startLoad(startPosition) {
          };
          _proto.stopLoad = function stopLoad() {
            this.fragmentLoader.abort();
            var frag = this.fragCurrent;
            if (frag) {
              this.fragmentTracker.removeFragment(frag);
            }
            this.resetTransmuxer();
            this.fragCurrent = null;
            this.fragPrevious = null;
            this.clearInterval();
            this.clearNextTick();
            this.state = State.STOPPED;
          };
          _proto._streamEnded = function _streamEnded(bufferInfo, levelDetails) {
            var fragCurrent = this.fragCurrent, fragmentTracker = this.fragmentTracker;
            if (!levelDetails.live && fragCurrent && fragCurrent.sn === levelDetails.endSN && !bufferInfo.nextStart) {
              var fragState = fragmentTracker.getState(fragCurrent);
              return fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_2__["FragmentState"].PARTIAL || fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_2__["FragmentState"].OK;
            }
            return false;
          };
          _proto.onMediaAttached = function onMediaAttached(event, data) {
            var media = this.media = this.mediaBuffer = data.media;
            this.onvseeking = this.onMediaSeeking.bind(this);
            this.onvended = this.onMediaEnded.bind(this);
            media.addEventListener("seeking", this.onvseeking);
            media.addEventListener("ended", this.onvended);
            var config = this.config;
            if (this.levels && config.autoStartLoad && this.state === State.STOPPED) {
              this.startLoad(config.startPosition);
            }
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            var media = this.media;
            if (media !== null && media !== void 0 && media.ended) {
              this.log("MSE detaching and video ended, reset startPosition");
              this.startPosition = this.lastCurrentTime = 0;
            }
            if (media) {
              media.removeEventListener("seeking", this.onvseeking);
              media.removeEventListener("ended", this.onvended);
              this.onvseeking = this.onvended = null;
            }
            this.media = this.mediaBuffer = null;
            this.loadedmetadata = false;
            this.fragmentTracker.removeAllFragments();
            this.stopLoad();
          };
          _proto.onMediaSeeking = function onMediaSeeking() {
            var config = this.config, fragCurrent = this.fragCurrent, media = this.media, mediaBuffer = this.mediaBuffer, state = this.state;
            var currentTime = media ? media.currentTime : 0;
            var bufferInfo = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].bufferInfo(mediaBuffer || media, currentTime, config.maxBufferHole);
            this.log("media seeking to " + (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(currentTime) ? currentTime.toFixed(3) : currentTime) + ", state: " + state);
            if (state === State.ENDED) {
              this.resetLoadingState();
            } else if (fragCurrent && !bufferInfo.len) {
              var tolerance = config.maxFragLookUpTolerance;
              var fragStartOffset = fragCurrent.start - tolerance;
              var fragEndOffset = fragCurrent.start + fragCurrent.duration + tolerance;
              var pastFragment = currentTime > fragEndOffset;
              if (currentTime < fragStartOffset || pastFragment) {
                if (pastFragment && fragCurrent.loader) {
                  this.log("seeking outside of buffer while fragment load in progress, cancel fragment load");
                  fragCurrent.loader.abort();
                }
                this.resetLoadingState();
              }
            }
            if (media) {
              this.lastCurrentTime = currentTime;
            }
            if (!this.loadedmetadata && !bufferInfo.len) {
              this.nextLoadPosition = this.startPosition = currentTime;
            }
            this.tickImmediate();
          };
          _proto.onMediaEnded = function onMediaEnded() {
            this.startPosition = this.lastCurrentTime = 0;
          };
          _proto.onKeyLoaded = function onKeyLoaded(event, data) {
            if (this.state !== State.KEY_LOADING || data.frag !== this.fragCurrent || !this.levels) {
              return;
            }
            this.state = State.IDLE;
            var levelDetails = this.levels[data.frag.level].details;
            if (levelDetails) {
              this.loadFragment(data.frag, levelDetails, data.frag.start);
            }
          };
          _proto.onHandlerDestroying = function onHandlerDestroying() {
            this.stopLoad();
            _TaskLoop.prototype.onHandlerDestroying.call(this);
          };
          _proto.onHandlerDestroyed = function onHandlerDestroyed() {
            this.state = State.STOPPED;
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].KEY_LOADED, this.onKeyLoaded, this);
            if (this.fragmentLoader) {
              this.fragmentLoader.destroy();
            }
            if (this.decrypter) {
              this.decrypter.destroy();
            }
            this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null;
            _TaskLoop.prototype.onHandlerDestroyed.call(this);
          };
          _proto.loadKey = function loadKey(frag, details) {
            this.log("Loading key for " + frag.sn + " of [" + details.startSN + "-" + details.endSN + "], " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + frag.level);
            this.state = State.KEY_LOADING;
            this.fragCurrent = frag;
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].KEY_LOADING, {
              frag
            });
          };
          _proto.loadFragment = function loadFragment(frag, levelDetails, targetBufferTime) {
            this._loadFragForPlayback(frag, levelDetails, targetBufferTime);
          };
          _proto._loadFragForPlayback = function _loadFragForPlayback(frag, levelDetails, targetBufferTime) {
            var _this2 = this;
            var progressCallback = function progressCallback2(data) {
              if (_this2.fragContextChanged(frag)) {
                _this2.warn("Fragment " + frag.sn + (data.part ? " p: " + data.part.index : "") + " of level " + frag.level + " was dropped during download.");
                _this2.fragmentTracker.removeFragment(frag);
                return;
              }
              frag.stats.chunkCount++;
              _this2._handleFragmentLoadProgress(data);
            };
            this._doFragLoad(frag, levelDetails, targetBufferTime, progressCallback).then(function(data) {
              if (!data) {
                return;
              }
              _this2.fragLoadError = 0;
              var state = _this2.state;
              if (_this2.fragContextChanged(frag)) {
                if (state === State.FRAG_LOADING || state === State.BACKTRACKING || !_this2.fragCurrent && state === State.PARSING) {
                  _this2.fragmentTracker.removeFragment(frag);
                  _this2.state = State.IDLE;
                }
                return;
              }
              if ("payload" in data) {
                _this2.log("Loaded fragment " + frag.sn + " of level " + frag.level);
                _this2.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].FRAG_LOADED, data);
                if (_this2.state === State.BACKTRACKING) {
                  _this2.fragmentTracker.backtrack(frag, data);
                  _this2.resetFragmentLoading(frag);
                  return;
                }
              }
              _this2._handleFragmentLoadComplete(data);
            }).catch(function(reason) {
              _this2.warn(reason);
              _this2.resetFragmentLoading(frag);
            });
          };
          _proto.flushMainBuffer = function flushMainBuffer(startOffset, endOffset, type) {
            if (type === void 0) {
              type = null;
            }
            if (!(startOffset - endOffset)) {
              return;
            }
            var flushScope = {
              startOffset,
              endOffset,
              type
            };
            this.fragLoadError = 0;
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].BUFFER_FLUSHING, flushScope);
          };
          _proto._loadInitSegment = function _loadInitSegment(frag) {
            var _this3 = this;
            this._doFragLoad(frag).then(function(data) {
              if (!data || _this3.fragContextChanged(frag) || !_this3.levels) {
                throw new Error("init load aborted");
              }
              return data;
            }).then(function(data) {
              var hls2 = _this3.hls;
              var payload = data.payload;
              var decryptData = frag.decryptdata;
              if (payload && payload.byteLength > 0 && decryptData && decryptData.key && decryptData.iv && decryptData.method === "AES-128") {
                var startTime = self.performance.now();
                return _this3.decrypter.webCryptoDecrypt(new Uint8Array(payload), decryptData.key.buffer, decryptData.iv.buffer).then(function(decryptedData) {
                  var endTime = self.performance.now();
                  hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].FRAG_DECRYPTED, {
                    frag,
                    payload: decryptedData,
                    stats: {
                      tstart: startTime,
                      tdecrypt: endTime
                    }
                  });
                  data.payload = decryptedData;
                  return data;
                });
              }
              return data;
            }).then(function(data) {
              var fragCurrent = _this3.fragCurrent, hls2 = _this3.hls, levels = _this3.levels;
              if (!levels) {
                throw new Error("init load aborted, missing levels");
              }
              var details = levels[frag.level].details;
              console.assert(details, "Level details are defined when init segment is loaded");
              var stats = frag.stats;
              _this3.state = State.IDLE;
              _this3.fragLoadError = 0;
              frag.data = new Uint8Array(data.payload);
              stats.parsing.start = stats.buffering.start = self.performance.now();
              stats.parsing.end = stats.buffering.end = self.performance.now();
              if (data.frag === fragCurrent) {
                hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].FRAG_BUFFERED, {
                  stats,
                  frag: fragCurrent,
                  part: null,
                  id: frag.type
                });
              }
              _this3.tick();
            }).catch(function(reason) {
              _this3.warn(reason);
              _this3.resetFragmentLoading(frag);
            });
          };
          _proto.fragContextChanged = function fragContextChanged(frag) {
            var fragCurrent = this.fragCurrent;
            return !frag || !fragCurrent || frag.level !== fragCurrent.level || frag.sn !== fragCurrent.sn || frag.urlId !== fragCurrent.urlId;
          };
          _proto.fragBufferedComplete = function fragBufferedComplete(frag, part) {
            var media = this.mediaBuffer ? this.mediaBuffer : this.media;
            this.log("Buffered " + frag.type + " sn: " + frag.sn + (part ? " part: " + part.index : "") + " of " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + " " + frag.level + " " + _utils_time_ranges__WEBPACK_IMPORTED_MODULE_14__["default"].toString(_utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].getBuffered(media)));
            this.state = State.IDLE;
            this.tick();
          };
          _proto._handleFragmentLoadComplete = function _handleFragmentLoadComplete(fragLoadedEndData) {
            var transmuxer = this.transmuxer;
            if (!transmuxer) {
              return;
            }
            var frag = fragLoadedEndData.frag, part = fragLoadedEndData.part, partsLoaded = fragLoadedEndData.partsLoaded;
            var complete = !partsLoaded || partsLoaded.length === 0 || partsLoaded.some(function(fragLoaded) {
              return !fragLoaded;
            });
            var chunkMeta = new _types_transmuxer__WEBPACK_IMPORTED_MODULE_7__["ChunkMetadata"](frag.level, frag.sn, frag.stats.chunkCount + 1, 0, part ? part.index : -1, !complete);
            transmuxer.flush(chunkMeta);
          };
          _proto._handleFragmentLoadProgress = function _handleFragmentLoadProgress(frag) {
          };
          _proto._doFragLoad = function _doFragLoad(frag, details, targetBufferTime, progressCallback) {
            var _this4 = this;
            if (targetBufferTime === void 0) {
              targetBufferTime = null;
            }
            if (!this.levels) {
              throw new Error("frag load aborted, missing levels");
            }
            targetBufferTime = Math.max(frag.start, targetBufferTime || 0);
            if (this.config.lowLatencyMode && details) {
              var partList = details.partList;
              if (partList && progressCallback) {
                if (targetBufferTime > frag.end && details.fragmentHint) {
                  frag = details.fragmentHint;
                }
                var partIndex = this.getNextPart(partList, frag, targetBufferTime);
                if (partIndex > -1) {
                  var part = partList[partIndex];
                  this.log("Loading part sn: " + frag.sn + " p: " + part.index + " cc: " + frag.cc + " of playlist [" + details.startSN + "-" + details.endSN + "] parts [0-" + partIndex + "-" + (partList.length - 1) + "] " + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + frag.level + ", target: " + parseFloat(targetBufferTime.toFixed(3)));
                  this.nextLoadPosition = part.start + part.duration;
                  this.state = State.FRAG_LOADING;
                  this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].FRAG_LOADING, {
                    frag,
                    part: partList[partIndex],
                    targetBufferTime
                  });
                  return this.doFragPartsLoad(frag, partList, partIndex, progressCallback).catch(function(error) {
                    return _this4.handleFragLoadError(error);
                  });
                } else if (!frag.url || this.loadedEndOfParts(partList, targetBufferTime)) {
                  return Promise.resolve(null);
                }
              }
            }
            this.log("Loading fragment " + frag.sn + " cc: " + frag.cc + " " + (details ? "of [" + details.startSN + "-" + details.endSN + "] " : "") + (this.logPrefix === "[stream-controller]" ? "level" : "track") + ": " + frag.level + ", target: " + parseFloat(targetBufferTime.toFixed(3)));
            if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(frag.sn) && !this.bitrateTest) {
              this.nextLoadPosition = frag.start + frag.duration;
            }
            this.state = State.FRAG_LOADING;
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].FRAG_LOADING, {
              frag,
              targetBufferTime
            });
            return this.fragmentLoader.load(frag, progressCallback).catch(function(error) {
              return _this4.handleFragLoadError(error);
            });
          };
          _proto.doFragPartsLoad = function doFragPartsLoad(frag, partList, partIndex, progressCallback) {
            var _this5 = this;
            return new Promise(function(resolve, reject) {
              var partsLoaded = [];
              var loadPartIndex = function loadPartIndex2(index) {
                var part = partList[index];
                _this5.fragmentLoader.loadPart(frag, part, progressCallback).then(function(partLoadedData) {
                  partsLoaded[part.index] = partLoadedData;
                  var loadedPart = partLoadedData.part;
                  _this5.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].FRAG_LOADED, partLoadedData);
                  var nextPart = partList[index + 1];
                  if (nextPart && nextPart.fragment === frag) {
                    loadPartIndex2(index + 1);
                  } else {
                    return resolve({
                      frag,
                      part: loadedPart,
                      partsLoaded
                    });
                  }
                }).catch(reject);
              };
              loadPartIndex(partIndex);
            });
          };
          _proto.handleFragLoadError = function handleFragLoadError(_ref) {
            var data = _ref.data;
            if (data && data.details === _errors__WEBPACK_IMPORTED_MODULE_6__["ErrorDetails"].INTERNAL_ABORTED) {
              this.handleFragLoadAborted(data.frag, data.part);
            } else {
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].ERROR, data);
            }
            return null;
          };
          _proto._handleTransmuxerFlush = function _handleTransmuxerFlush(chunkMeta) {
            var context = this.getCurrentContext(chunkMeta);
            if (!context || this.state !== State.PARSING) {
              if (!this.fragCurrent) {
                this.state = State.IDLE;
              }
              return;
            }
            var frag = context.frag, part = context.part, level = context.level;
            var now = self.performance.now();
            frag.stats.parsing.end = now;
            if (part) {
              part.stats.parsing.end = now;
            }
            this.updateLevelTiming(frag, part, level, chunkMeta.partial);
          };
          _proto.getCurrentContext = function getCurrentContext(chunkMeta) {
            var levels = this.levels;
            var levelIndex = chunkMeta.level, sn = chunkMeta.sn, partIndex = chunkMeta.part;
            if (!levels || !levels[levelIndex]) {
              this.warn("Levels object was unset while buffering fragment " + sn + " of level " + levelIndex + ". The current chunk will not be buffered.");
              return null;
            }
            var level = levels[levelIndex];
            var part = partIndex > -1 ? Object(_level_helper__WEBPACK_IMPORTED_MODULE_11__["getPartWith"])(level, sn, partIndex) : null;
            var frag = part ? part.fragment : Object(_level_helper__WEBPACK_IMPORTED_MODULE_11__["getFragmentWithSN"])(level, sn, this.fragCurrent);
            if (!frag) {
              return null;
            }
            return {
              frag,
              part,
              level
            };
          };
          _proto.bufferFragmentData = function bufferFragmentData(data, frag, part, chunkMeta) {
            if (!data || this.state !== State.PARSING) {
              return;
            }
            var data1 = data.data1, data2 = data.data2;
            var buffer = data1;
            if (data1 && data2) {
              buffer = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_8__["appendUint8Array"])(data1, data2);
            }
            if (!buffer || !buffer.length) {
              return;
            }
            var segment = {
              type: data.type,
              frag,
              part,
              chunkMeta,
              parent: frag.type,
              data: buffer
            };
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].BUFFER_APPENDING, segment);
            if (data.dropped && data.independent && !part) {
              this.flushBufferGap(frag);
            }
          };
          _proto.flushBufferGap = function flushBufferGap(frag) {
            var media = this.media;
            if (!media) {
              return;
            }
            if (!_utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].isBuffered(media, media.currentTime)) {
              this.flushMainBuffer(0, frag.start);
              return;
            }
            var currentTime = media.currentTime;
            var bufferInfo = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].bufferInfo(media, currentTime, 0);
            var fragDuration = frag.duration;
            var segmentFraction = Math.min(this.config.maxFragLookUpTolerance * 2, fragDuration * 0.25);
            var start = Math.max(Math.min(frag.start - segmentFraction, bufferInfo.end - segmentFraction), currentTime + segmentFraction);
            if (frag.start - start > segmentFraction) {
              this.flushMainBuffer(start, frag.start);
            }
          };
          _proto.getFwdBufferInfo = function getFwdBufferInfo(bufferable, type) {
            var config = this.config;
            var pos = this.getLoadPosition();
            if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(pos)) {
              return null;
            }
            var bufferInfo = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].bufferInfo(bufferable, pos, config.maxBufferHole);
            if (bufferInfo.len === 0 && bufferInfo.nextStart !== void 0) {
              var bufferedFragAtPos = this.fragmentTracker.getBufferedFrag(pos, type);
              if (bufferedFragAtPos && bufferInfo.nextStart < bufferedFragAtPos.end) {
                return _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].bufferInfo(bufferable, pos, Math.max(bufferInfo.nextStart, config.maxBufferHole));
              }
            }
            return bufferInfo;
          };
          _proto.getMaxBufferLength = function getMaxBufferLength(levelBitrate) {
            var config = this.config;
            var maxBufLen;
            if (levelBitrate) {
              maxBufLen = Math.max(8 * config.maxBufferSize / levelBitrate, config.maxBufferLength);
            } else {
              maxBufLen = config.maxBufferLength;
            }
            return Math.min(maxBufLen, config.maxMaxBufferLength);
          };
          _proto.reduceMaxBufferLength = function reduceMaxBufferLength(threshold) {
            var config = this.config;
            var minLength = threshold || config.maxBufferLength;
            if (config.maxMaxBufferLength >= minLength) {
              config.maxMaxBufferLength /= 2;
              this.warn("Reduce max buffer length to " + config.maxMaxBufferLength + "s");
              return true;
            }
            return false;
          };
          _proto.getNextFragment = function getNextFragment(pos, levelDetails) {
            var _frag, _frag2;
            var fragments = levelDetails.fragments;
            var fragLen = fragments.length;
            if (!fragLen) {
              return null;
            }
            var config = this.config;
            var start = fragments[0].start;
            var frag;
            if (levelDetails.live) {
              var initialLiveManifestSize = config.initialLiveManifestSize;
              if (fragLen < initialLiveManifestSize) {
                this.warn("Not enough fragments to start playback (have: " + fragLen + ", need: " + initialLiveManifestSize + ")");
                return null;
              }
              if (!levelDetails.PTSKnown && !this.startFragRequested && this.startPosition === -1) {
                frag = this.getInitialLiveFragment(levelDetails, fragments);
                this.startPosition = frag ? this.hls.liveSyncPosition || frag.start : pos;
              }
            } else if (pos <= start) {
              frag = fragments[0];
            }
            if (!frag) {
              var end = config.lowLatencyMode ? levelDetails.partEnd : levelDetails.fragmentEnd;
              frag = this.getFragmentAtPosition(pos, end, levelDetails);
            }
            if ((_frag = frag) !== null && _frag !== void 0 && _frag.initSegment && !((_frag2 = frag) !== null && _frag2 !== void 0 && _frag2.initSegment.data) && !this.bitrateTest) {
              frag = frag.initSegment;
            }
            return frag;
          };
          _proto.getNextPart = function getNextPart(partList, frag, targetBufferTime) {
            var nextPart = -1;
            var contiguous = false;
            var independentAttrOmitted = true;
            for (var i = 0, len = partList.length; i < len; i++) {
              var part = partList[i];
              independentAttrOmitted = independentAttrOmitted && !part.independent;
              if (nextPart > -1 && targetBufferTime < part.start) {
                break;
              }
              var loaded = part.loaded;
              if (!loaded && (contiguous || part.independent || independentAttrOmitted) && part.fragment === frag) {
                nextPart = i;
              }
              contiguous = loaded;
            }
            return nextPart;
          };
          _proto.loadedEndOfParts = function loadedEndOfParts(partList, targetBufferTime) {
            var lastPart = partList[partList.length - 1];
            return lastPart && targetBufferTime > lastPart.start && lastPart.loaded;
          };
          _proto.getInitialLiveFragment = function getInitialLiveFragment(levelDetails, fragments) {
            var fragPrevious = this.fragPrevious;
            var frag = null;
            if (fragPrevious) {
              if (levelDetails.hasProgramDateTime) {
                this.log("Live playlist, switching playlist, load frag with same PDT: " + fragPrevious.programDateTime);
                frag = Object(_fragment_finders__WEBPACK_IMPORTED_MODULE_10__["findFragmentByPDT"])(fragments, fragPrevious.endProgramDateTime, this.config.maxFragLookUpTolerance);
              }
              if (!frag) {
                var targetSN = fragPrevious.sn + 1;
                if (targetSN >= levelDetails.startSN && targetSN <= levelDetails.endSN) {
                  var fragNext = fragments[targetSN - levelDetails.startSN];
                  if (fragPrevious.cc === fragNext.cc) {
                    frag = fragNext;
                    this.log("Live playlist, switching playlist, load frag with next SN: " + frag.sn);
                  }
                }
                if (!frag) {
                  frag = Object(_fragment_finders__WEBPACK_IMPORTED_MODULE_10__["findFragWithCC"])(fragments, fragPrevious.cc);
                  if (frag) {
                    this.log("Live playlist, switching playlist, load frag with same CC: " + frag.sn);
                  }
                }
              }
            } else {
              var liveStart = this.hls.liveSyncPosition;
              if (liveStart !== null) {
                frag = this.getFragmentAtPosition(liveStart, this.bitrateTest ? levelDetails.fragmentEnd : levelDetails.edge, levelDetails);
              }
            }
            return frag;
          };
          _proto.getFragmentAtPosition = function getFragmentAtPosition(bufferEnd, end, levelDetails) {
            var config = this.config, fragPrevious = this.fragPrevious;
            var fragments = levelDetails.fragments, endSN = levelDetails.endSN;
            var fragmentHint = levelDetails.fragmentHint;
            var tolerance = config.maxFragLookUpTolerance;
            var loadingParts = !!(config.lowLatencyMode && levelDetails.partList && fragmentHint);
            if (loadingParts && fragmentHint && !this.bitrateTest) {
              fragments = fragments.concat(fragmentHint);
              endSN = fragmentHint.sn;
            }
            var frag;
            if (bufferEnd < end) {
              var lookupTolerance = bufferEnd > end - tolerance ? 0 : tolerance;
              frag = Object(_fragment_finders__WEBPACK_IMPORTED_MODULE_10__["findFragmentByPTS"])(fragPrevious, fragments, bufferEnd, lookupTolerance);
            } else {
              frag = fragments[fragments.length - 1];
            }
            if (frag) {
              var curSNIdx = frag.sn - levelDetails.startSN;
              var sameLevel = fragPrevious && frag.level === fragPrevious.level;
              var nextFrag = fragments[curSNIdx + 1];
              var fragState = this.fragmentTracker.getState(frag);
              if (fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_2__["FragmentState"].BACKTRACKED) {
                frag = null;
                var i = curSNIdx;
                while (fragments[i] && this.fragmentTracker.getState(fragments[i]) === _fragment_tracker__WEBPACK_IMPORTED_MODULE_2__["FragmentState"].BACKTRACKED) {
                  if (!fragPrevious) {
                    frag = fragments[--i];
                  } else {
                    frag = fragments[i--];
                  }
                }
                if (!frag) {
                  frag = nextFrag;
                }
              } else if (fragPrevious && frag.sn === fragPrevious.sn && !loadingParts) {
                if (sameLevel) {
                  if (frag.sn < endSN && this.fragmentTracker.getState(nextFrag) !== _fragment_tracker__WEBPACK_IMPORTED_MODULE_2__["FragmentState"].OK) {
                    this.log("SN " + frag.sn + " just loaded, load next one: " + nextFrag.sn);
                    frag = nextFrag;
                  } else {
                    frag = null;
                  }
                }
              }
            }
            return frag;
          };
          _proto.synchronizeToLiveEdge = function synchronizeToLiveEdge(levelDetails) {
            var config = this.config, media = this.media;
            if (!media) {
              return;
            }
            var liveSyncPosition = this.hls.liveSyncPosition;
            var currentTime = media.currentTime;
            var start = levelDetails.fragments[0].start;
            var end = levelDetails.edge;
            var withinSlidingWindow = currentTime >= start - config.maxFragLookUpTolerance && currentTime <= end;
            if (liveSyncPosition !== null && media.duration > liveSyncPosition && (currentTime < liveSyncPosition || !withinSlidingWindow)) {
              var maxLatency = config.liveMaxLatencyDuration !== void 0 ? config.liveMaxLatencyDuration : config.liveMaxLatencyDurationCount * levelDetails.targetduration;
              if (!withinSlidingWindow && media.readyState < 4 || currentTime < end - maxLatency) {
                if (!this.loadedmetadata) {
                  this.nextLoadPosition = liveSyncPosition;
                }
                if (media.readyState) {
                  this.warn("Playback: " + currentTime.toFixed(3) + " is located too far from the end of live sliding playlist: " + end + ", reset currentTime to : " + liveSyncPosition.toFixed(3));
                  media.currentTime = liveSyncPosition;
                }
              }
            }
          };
          _proto.alignPlaylists = function alignPlaylists(details, previousDetails) {
            var levels = this.levels, levelLastLoaded = this.levelLastLoaded, fragPrevious = this.fragPrevious;
            var lastLevel = levelLastLoaded !== null ? levels[levelLastLoaded] : null;
            var length = details.fragments.length;
            if (!length) {
              this.warn("No fragments in live playlist");
              return 0;
            }
            var slidingStart = details.fragments[0].start;
            var firstLevelLoad = !previousDetails;
            var aligned = details.alignedSliding && Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(slidingStart);
            if (firstLevelLoad || !aligned && !slidingStart) {
              Object(_utils_discontinuities__WEBPACK_IMPORTED_MODULE_9__["alignStream"])(fragPrevious, lastLevel, details);
              var alignedSlidingStart = details.fragments[0].start;
              this.log("Live playlist sliding: " + alignedSlidingStart.toFixed(2) + " start-sn: " + (previousDetails ? previousDetails.startSN : "na") + "->" + details.startSN + " prev-sn: " + (fragPrevious ? fragPrevious.sn : "na") + " fragments: " + length);
              return alignedSlidingStart;
            }
            return slidingStart;
          };
          _proto.waitForCdnTuneIn = function waitForCdnTuneIn(details) {
            var advancePartLimit = 3;
            return details.live && details.canBlockReload && details.tuneInGoal > Math.max(details.partHoldBack, details.partTarget * advancePartLimit);
          };
          _proto.setStartPosition = function setStartPosition(details, sliding) {
            var startPosition = this.startPosition;
            if (startPosition < sliding) {
              startPosition = -1;
            }
            if (startPosition === -1 || this.lastCurrentTime === -1) {
              var startTimeOffset = details.startTimeOffset;
              if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(startTimeOffset)) {
                startPosition = sliding + startTimeOffset;
                if (startTimeOffset < 0) {
                  startPosition += details.totalduration;
                }
                startPosition = Math.min(Math.max(sliding, startPosition), sliding + details.totalduration);
                this.log("Start time offset " + startTimeOffset + " found in playlist, adjust startPosition to " + startPosition);
                this.startPosition = startPosition;
              } else if (details.live) {
                startPosition = this.hls.liveSyncPosition || sliding;
              } else {
                this.startPosition = startPosition = 0;
              }
              this.lastCurrentTime = startPosition;
            }
            this.nextLoadPosition = startPosition;
          };
          _proto.getLoadPosition = function getLoadPosition() {
            var media = this.media;
            var pos = 0;
            if (this.loadedmetadata && media) {
              pos = media.currentTime;
            } else if (this.nextLoadPosition) {
              pos = this.nextLoadPosition;
            }
            return pos;
          };
          _proto.handleFragLoadAborted = function handleFragLoadAborted(frag, part) {
            if (this.transmuxer && frag.sn !== "initSegment" && frag.stats.aborted) {
              this.warn("Fragment " + frag.sn + (part ? " part" + part.index : "") + " of level " + frag.level + " was aborted");
              this.resetFragmentLoading(frag);
            }
          };
          _proto.resetFragmentLoading = function resetFragmentLoading(frag) {
            if (!this.fragCurrent || !this.fragContextChanged(frag)) {
              this.state = State.IDLE;
            }
          };
          _proto.onFragmentOrKeyLoadError = function onFragmentOrKeyLoadError(filterType, data) {
            if (data.fatal) {
              return;
            }
            var frag = data.frag;
            if (!frag || frag.type !== filterType) {
              return;
            }
            var fragCurrent = this.fragCurrent;
            console.assert(fragCurrent && frag.sn === fragCurrent.sn && frag.level === fragCurrent.level && frag.urlId === fragCurrent.urlId, "Frag load error must match current frag to retry");
            var config = this.config;
            if (this.fragLoadError + 1 <= config.fragLoadingMaxRetry) {
              if (this.resetLiveStartWhenNotLoaded(frag.level)) {
                return;
              }
              var delay = Math.min(Math.pow(2, this.fragLoadError) * config.fragLoadingRetryDelay, config.fragLoadingMaxRetryTimeout);
              this.warn("Fragment " + frag.sn + " of " + filterType + " " + frag.level + " failed to load, retrying in " + delay + "ms");
              this.retryDate = self.performance.now() + delay;
              this.fragLoadError++;
              this.state = State.FRAG_LOADING_WAITING_RETRY;
            } else if (data.levelRetry) {
              if (filterType === _types_loader__WEBPACK_IMPORTED_MODULE_15__["PlaylistLevelType"].AUDIO) {
                this.fragCurrent = null;
              }
              this.fragLoadError = 0;
              this.state = State.IDLE;
            } else {
              _utils_logger__WEBPACK_IMPORTED_MODULE_4__["logger"].error(data.details + " reaches max retry, redispatch as fatal ...");
              data.fatal = true;
              this.hls.stopLoad();
              this.state = State.ERROR;
            }
          };
          _proto.afterBufferFlushed = function afterBufferFlushed(media, bufferType, playlistType) {
            if (!media) {
              return;
            }
            var bufferedTimeRanges = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_3__["BufferHelper"].getBuffered(media);
            this.fragmentTracker.detectEvictedFragments(bufferType, bufferedTimeRanges, playlistType);
            if (this.state === State.ENDED) {
              this.resetLoadingState();
            }
          };
          _proto.resetLoadingState = function resetLoadingState() {
            this.fragCurrent = null;
            this.fragPrevious = null;
            this.state = State.IDLE;
          };
          _proto.resetLiveStartWhenNotLoaded = function resetLiveStartWhenNotLoaded(level) {
            if (!this.loadedmetadata) {
              this.startFragRequested = false;
              var details = this.levels ? this.levels[level].details : null;
              if (details !== null && details !== void 0 && details.live) {
                this.startPosition = -1;
                this.setStartPosition(details, 0);
                this.resetLoadingState();
                return true;
              }
              this.nextLoadPosition = this.startPosition;
            }
            return false;
          };
          _proto.updateLevelTiming = function updateLevelTiming(frag, part, level, partial) {
            var _this6 = this;
            var details = level.details;
            console.assert(!!details, "level.details must be defined");
            var parsed = Object.keys(frag.elementaryStreams).reduce(function(result, type) {
              var info = frag.elementaryStreams[type];
              if (info) {
                var parsedDuration = info.endPTS - info.startPTS;
                if (parsedDuration <= 0) {
                  _this6.warn("Could not parse fragment " + frag.sn + " " + type + " duration reliably (" + parsedDuration + ") resetting transmuxer to fallback to playlist timing");
                  _this6.resetTransmuxer();
                  return result || false;
                }
                var drift = partial ? 0 : Object(_level_helper__WEBPACK_IMPORTED_MODULE_11__["updateFragPTSDTS"])(details, frag, info.startPTS, info.endPTS, info.startDTS, info.endDTS);
                _this6.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].LEVEL_PTS_UPDATED, {
                  details,
                  level,
                  drift,
                  type,
                  frag,
                  start: info.startPTS,
                  end: info.endPTS
                });
                return true;
              }
              return result;
            }, false);
            if (parsed) {
              this.state = State.PARSED;
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].FRAG_PARSED, {
                frag,
                part
              });
            } else {
              this.resetLoadingState();
            }
          };
          _proto.resetTransmuxer = function resetTransmuxer() {
            if (this.transmuxer) {
              this.transmuxer.destroy();
              this.transmuxer = null;
            }
          };
          _createClass(BaseStreamController2, [{
            key: "state",
            get: function get() {
              return this._state;
            },
            set: function set(nextState) {
              var previousState = this._state;
              if (previousState !== nextState) {
                this._state = nextState;
                this.log(previousState + "->" + nextState);
              }
            }
          }]);
          return BaseStreamController2;
        }(_task_loop__WEBPACK_IMPORTED_MODULE_1__["default"]);
      },
      "./src/controller/buffer-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return BufferController;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/events.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/logger.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/errors.ts");
        var _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/buffer-helper.ts");
        var _utils_mediasource_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utils/mediasource-helper.ts");
        var _loader_fragment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/loader/fragment.ts");
        var _buffer_operation_queue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/controller/buffer-operation-queue.ts");
        var MediaSource2 = Object(_utils_mediasource_helper__WEBPACK_IMPORTED_MODULE_5__["getMediaSource"])();
        var VIDEO_CODEC_PROFILE_REPACE = /([ha]vc.)(?:\.[^.,]+)+/;
        var BufferController = /* @__PURE__ */ function() {
          function BufferController2(_hls) {
            var _this = this;
            this.details = null;
            this._objectUrl = null;
            this.operationQueue = void 0;
            this.listeners = void 0;
            this.hls = void 0;
            this.bufferCodecEventsExpected = 0;
            this._bufferCodecEventsTotal = 0;
            this.media = null;
            this.mediaSource = null;
            this.appendError = 0;
            this.tracks = {};
            this.pendingTracks = {};
            this.sourceBuffer = void 0;
            this._onMediaSourceOpen = function() {
              var hls2 = _this.hls, media = _this.media, mediaSource = _this.mediaSource;
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: Media source opened");
              if (media) {
                _this.updateMediaElementDuration();
                hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_ATTACHED, {
                  media
                });
              }
              if (mediaSource) {
                mediaSource.removeEventListener("sourceopen", _this._onMediaSourceOpen);
              }
              _this.checkPendingTracks();
            };
            this._onMediaSourceClose = function() {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: Media source closed");
            };
            this._onMediaSourceEnded = function() {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: Media source ended");
            };
            this.hls = _hls;
            this._initSourceBuffer();
            this.registerListeners();
          }
          var _proto = BufferController2.prototype;
          _proto.hasSourceTypes = function hasSourceTypes() {
            return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0;
          };
          _proto.destroy = function destroy() {
            this.unregisterListeners();
            this.details = null;
          };
          _proto.registerListeners = function registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_ATTACHING, this.onMediaAttaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_RESET, this.onBufferReset, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_APPENDING, this.onBufferAppending, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_CODECS, this.onBufferCodecs, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_EOS, this.onBufferEos, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_FLUSHING, this.onBufferFlushing, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_UPDATED, this.onLevelUpdated, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_PARSED, this.onFragParsed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_CHANGED, this.onFragChanged, this);
          };
          _proto.unregisterListeners = function unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_ATTACHING, this.onMediaAttaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_RESET, this.onBufferReset, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_APPENDING, this.onBufferAppending, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_CODECS, this.onBufferCodecs, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_EOS, this.onBufferEos, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_FLUSHING, this.onBufferFlushing, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_UPDATED, this.onLevelUpdated, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_PARSED, this.onFragParsed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_CHANGED, this.onFragChanged, this);
          };
          _proto._initSourceBuffer = function _initSourceBuffer() {
            this.sourceBuffer = {};
            this.operationQueue = new _buffer_operation_queue__WEBPACK_IMPORTED_MODULE_7__["default"](this.sourceBuffer);
            this.listeners = {
              audio: [],
              video: [],
              audiovideo: []
            };
          };
          _proto.onManifestParsed = function onManifestParsed(event, data) {
            var codecEvents = 2;
            if (data.audio && !data.video || !data.altAudio) {
              codecEvents = 1;
            }
            this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = codecEvents;
            this.details = null;
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected");
          };
          _proto.onMediaAttaching = function onMediaAttaching(event, data) {
            var media = this.media = data.media;
            if (media && MediaSource2) {
              var ms = this.mediaSource = new MediaSource2();
              ms.addEventListener("sourceopen", this._onMediaSourceOpen);
              ms.addEventListener("sourceended", this._onMediaSourceEnded);
              ms.addEventListener("sourceclose", this._onMediaSourceClose);
              media.src = self.URL.createObjectURL(ms);
              this._objectUrl = media.src;
            }
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            var media = this.media, mediaSource = this.mediaSource, _objectUrl = this._objectUrl;
            if (mediaSource) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: media source detaching");
              if (mediaSource.readyState === "open") {
                try {
                  mediaSource.endOfStream();
                } catch (err) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("[buffer-controller]: onMediaDetaching: " + err.message + " while calling endOfStream");
                }
              }
              this.onBufferReset();
              mediaSource.removeEventListener("sourceopen", this._onMediaSourceOpen);
              mediaSource.removeEventListener("sourceended", this._onMediaSourceEnded);
              mediaSource.removeEventListener("sourceclose", this._onMediaSourceClose);
              if (media) {
                if (_objectUrl) {
                  self.URL.revokeObjectURL(_objectUrl);
                }
                if (media.src === _objectUrl) {
                  media.removeAttribute("src");
                  media.load();
                } else {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("[buffer-controller]: media.src was changed by a third party - skip cleanup");
                }
              }
              this.mediaSource = null;
              this.media = null;
              this._objectUrl = null;
              this.bufferCodecEventsExpected = this._bufferCodecEventsTotal;
              this.pendingTracks = {};
              this.tracks = {};
            }
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_DETACHED, void 0);
          };
          _proto.onBufferReset = function onBufferReset() {
            var _this2 = this;
            this.getSourceBufferTypes().forEach(function(type) {
              var sb = _this2.sourceBuffer[type];
              try {
                if (sb) {
                  _this2.removeBufferListeners(type);
                  if (_this2.mediaSource) {
                    _this2.mediaSource.removeSourceBuffer(sb);
                  }
                  _this2.sourceBuffer[type] = void 0;
                }
              } catch (err) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("[buffer-controller]: Failed to reset the " + type + " buffer", err);
              }
            });
            this._initSourceBuffer();
          };
          _proto.onBufferCodecs = function onBufferCodecs(event, data) {
            var _this3 = this;
            var sourceBufferCount = this.getSourceBufferTypes().length;
            Object.keys(data).forEach(function(trackName) {
              if (sourceBufferCount) {
                var track = _this3.tracks[trackName];
                if (track && typeof track.buffer.changeType === "function") {
                  var _data$trackName = data[trackName], codec = _data$trackName.codec, levelCodec = _data$trackName.levelCodec, container = _data$trackName.container;
                  var currentCodec = (track.levelCodec || track.codec).replace(VIDEO_CODEC_PROFILE_REPACE, "$1");
                  var nextCodec = (levelCodec || codec).replace(VIDEO_CODEC_PROFILE_REPACE, "$1");
                  if (currentCodec !== nextCodec) {
                    var mimeType = container + ";codecs=" + (levelCodec || codec);
                    _this3.appendChangeType(trackName, mimeType);
                  }
                }
              } else {
                _this3.pendingTracks[trackName] = data[trackName];
              }
            });
            if (sourceBufferCount) {
              return;
            }
            this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0);
            if (this.mediaSource && this.mediaSource.readyState === "open") {
              this.checkPendingTracks();
            }
          };
          _proto.appendChangeType = function appendChangeType(type, mimeType) {
            var _this4 = this;
            var operationQueue = this.operationQueue;
            var operation = {
              execute: function execute() {
                var sb = _this4.sourceBuffer[type];
                if (sb) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: changing " + type + " sourceBuffer type to " + mimeType);
                  sb.changeType(mimeType);
                }
                operationQueue.shiftAndExecuteNext(type);
              },
              onStart: function onStart() {
              },
              onComplete: function onComplete() {
              },
              onError: function onError(e) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("[buffer-controller]: Failed to change " + type + " SourceBuffer type", e);
              }
            };
            operationQueue.append(operation, type);
          };
          _proto.onBufferAppending = function onBufferAppending(event, eventData) {
            var _this5 = this;
            var hls2 = this.hls, operationQueue = this.operationQueue, tracks = this.tracks;
            var data = eventData.data, type = eventData.type, frag = eventData.frag, part = eventData.part, chunkMeta = eventData.chunkMeta;
            var chunkStats = chunkMeta.buffering[type];
            var bufferAppendingStart = self.performance.now();
            chunkStats.start = bufferAppendingStart;
            var fragBuffering = frag.stats.buffering;
            var partBuffering = part ? part.stats.buffering : null;
            if (fragBuffering.start === 0) {
              fragBuffering.start = bufferAppendingStart;
            }
            if (partBuffering && partBuffering.start === 0) {
              partBuffering.start = bufferAppendingStart;
            }
            var audioTrack = tracks.audio;
            var checkTimestampOffset = type === "audio" && chunkMeta.id === 1 && (audioTrack === null || audioTrack === void 0 ? void 0 : audioTrack.container) === "audio/mpeg";
            var operation = {
              execute: function execute() {
                chunkStats.executeStart = self.performance.now();
                if (checkTimestampOffset) {
                  var sb = _this5.sourceBuffer[type];
                  if (sb) {
                    var delta = frag.start - sb.timestampOffset;
                    if (Math.abs(delta) >= 0.1) {
                      _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + frag.start + " (delta: " + delta + ") sn: " + frag.sn + ")");
                      sb.timestampOffset = frag.start;
                    }
                  }
                }
                _this5.appendExecutor(data, type);
              },
              onStart: function onStart() {
              },
              onComplete: function onComplete() {
                var end = self.performance.now();
                chunkStats.executeEnd = chunkStats.end = end;
                if (fragBuffering.first === 0) {
                  fragBuffering.first = end;
                }
                if (partBuffering && partBuffering.first === 0) {
                  partBuffering.first = end;
                }
                var sourceBuffer = _this5.sourceBuffer;
                var timeRanges = {};
                for (var _type in sourceBuffer) {
                  timeRanges[_type] = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_4__["BufferHelper"].getBuffered(sourceBuffer[_type]);
                }
                _this5.appendError = 0;
                _this5.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_APPENDED, {
                  type,
                  frag,
                  part,
                  chunkMeta,
                  parent: frag.type,
                  timeRanges
                });
              },
              onError: function onError(err) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("[buffer-controller]: Error encountered while trying to append to the " + type + " SourceBuffer", err);
                var event2 = {
                  type: _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].MEDIA_ERROR,
                  parent: frag.type,
                  details: _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorDetails"].BUFFER_APPEND_ERROR,
                  err,
                  fatal: false
                };
                if (err.code === DOMException.QUOTA_EXCEEDED_ERR) {
                  event2.details = _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorDetails"].BUFFER_FULL_ERROR;
                } else {
                  _this5.appendError++;
                  event2.details = _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorDetails"].BUFFER_APPEND_ERROR;
                  if (_this5.appendError > hls2.config.appendErrorMaxRetry) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("[buffer-controller]: Failed " + hls2.config.appendErrorMaxRetry + " times to append segment in sourceBuffer");
                    event2.fatal = true;
                  }
                }
                hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, event2);
              }
            };
            operationQueue.append(operation, type);
          };
          _proto.onBufferFlushing = function onBufferFlushing(event, data) {
            var _this6 = this;
            var operationQueue = this.operationQueue;
            var flushOperation = function flushOperation2(type) {
              return {
                execute: _this6.removeExecutor.bind(_this6, type, data.startOffset, data.endOffset),
                onStart: function onStart() {
                },
                onComplete: function onComplete() {
                  _this6.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_FLUSHED, {
                    type
                  });
                },
                onError: function onError(e) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("[buffer-controller]: Failed to remove from " + type + " SourceBuffer", e);
                }
              };
            };
            if (data.type) {
              operationQueue.append(flushOperation(data.type), data.type);
            } else {
              this.getSourceBufferTypes().forEach(function(type) {
                operationQueue.append(flushOperation(type), type);
              });
            }
          };
          _proto.onFragParsed = function onFragParsed(event, data) {
            var _this7 = this;
            var frag = data.frag, part = data.part;
            var buffersAppendedTo = [];
            var elementaryStreams = part ? part.elementaryStreams : frag.elementaryStreams;
            if (elementaryStreams[_loader_fragment__WEBPACK_IMPORTED_MODULE_6__["ElementaryStreamTypes"].AUDIOVIDEO]) {
              buffersAppendedTo.push("audiovideo");
            } else {
              if (elementaryStreams[_loader_fragment__WEBPACK_IMPORTED_MODULE_6__["ElementaryStreamTypes"].AUDIO]) {
                buffersAppendedTo.push("audio");
              }
              if (elementaryStreams[_loader_fragment__WEBPACK_IMPORTED_MODULE_6__["ElementaryStreamTypes"].VIDEO]) {
                buffersAppendedTo.push("video");
              }
            }
            var onUnblocked = function onUnblocked2() {
              var now = self.performance.now();
              frag.stats.buffering.end = now;
              if (part) {
                part.stats.buffering.end = now;
              }
              var stats = part ? part.stats : frag.stats;
              _this7.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_BUFFERED, {
                frag,
                part,
                stats,
                id: frag.type
              });
            };
            if (buffersAppendedTo.length === 0) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Fragments must have at least one ElementaryStreamType set. type: " + frag.type + " level: " + frag.level + " sn: " + frag.sn);
            }
            this.blockBuffers(onUnblocked, buffersAppendedTo);
          };
          _proto.onFragChanged = function onFragChanged(event, data) {
            this.flushBackBuffer();
          };
          _proto.onBufferEos = function onBufferEos(event, data) {
            var _this8 = this;
            var ended = this.getSourceBufferTypes().reduce(function(acc, type) {
              var sb = _this8.sourceBuffer[type];
              if (!data.type || data.type === type) {
                if (sb && !sb.ended) {
                  sb.ended = true;
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: " + type + " sourceBuffer now EOS");
                }
              }
              return acc && !!(!sb || sb.ended);
            }, true);
            if (ended) {
              this.blockBuffers(function() {
                var mediaSource = _this8.mediaSource;
                if (!mediaSource || mediaSource.readyState !== "open") {
                  return;
                }
                mediaSource.endOfStream();
              });
            }
          };
          _proto.onLevelUpdated = function onLevelUpdated(event, _ref) {
            var details = _ref.details;
            if (!details.fragments.length) {
              return;
            }
            this.details = details;
            if (this.getSourceBufferTypes().length) {
              this.blockBuffers(this.updateMediaElementDuration.bind(this));
            } else {
              this.updateMediaElementDuration();
            }
          };
          _proto.flushBackBuffer = function flushBackBuffer() {
            var hls2 = this.hls, details = this.details, media = this.media, sourceBuffer = this.sourceBuffer;
            if (!media || details === null) {
              return;
            }
            var sourceBufferTypes = this.getSourceBufferTypes();
            if (!sourceBufferTypes.length) {
              return;
            }
            var backBufferLength = details.live && hls2.config.liveBackBufferLength !== null ? hls2.config.liveBackBufferLength : hls2.config.backBufferLength;
            if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(backBufferLength) || backBufferLength < 0) {
              return;
            }
            var currentTime = media.currentTime;
            var targetDuration = details.levelTargetDuration;
            var maxBackBufferLength = Math.max(backBufferLength, targetDuration);
            var targetBackBufferPosition = Math.floor(currentTime / targetDuration) * targetDuration - maxBackBufferLength;
            sourceBufferTypes.forEach(function(type) {
              var sb = sourceBuffer[type];
              if (sb) {
                var buffered = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_4__["BufferHelper"].getBuffered(sb);
                if (buffered.length > 0 && targetBackBufferPosition > buffered.start(0)) {
                  hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BACK_BUFFER_REACHED, {
                    bufferEnd: targetBackBufferPosition
                  });
                  if (details.live) {
                    hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LIVE_BACK_BUFFER_REACHED, {
                      bufferEnd: targetBackBufferPosition
                    });
                  }
                  hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_FLUSHING, {
                    startOffset: 0,
                    endOffset: targetBackBufferPosition,
                    type
                  });
                }
              }
            });
          };
          _proto.updateMediaElementDuration = function updateMediaElementDuration() {
            if (!this.details || !this.media || !this.mediaSource || this.mediaSource.readyState !== "open") {
              return;
            }
            var details = this.details, hls2 = this.hls, media = this.media, mediaSource = this.mediaSource;
            var levelDuration = details.fragments[0].start + details.totalduration;
            var mediaDuration = media.duration;
            var msDuration = Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(mediaSource.duration) ? mediaSource.duration : 0;
            if (details.live && hls2.config.liveDurationInfinity) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: Media Source duration is set to Infinity");
              mediaSource.duration = Infinity;
              this.updateSeekableRange(details);
            } else if (levelDuration > msDuration && levelDuration > mediaDuration || !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(mediaDuration)) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: Updating Media Source duration to " + levelDuration.toFixed(3));
              mediaSource.duration = levelDuration;
            }
          };
          _proto.updateSeekableRange = function updateSeekableRange(levelDetails) {
            var mediaSource = this.mediaSource;
            var fragments = levelDetails.fragments;
            var len = fragments.length;
            if (len && levelDetails.live && mediaSource !== null && mediaSource !== void 0 && mediaSource.setLiveSeekableRange) {
              var start = Math.max(0, fragments[0].start);
              var end = Math.max(start, start + levelDetails.totalduration);
              mediaSource.setLiveSeekableRange(start, end);
            }
          };
          _proto.checkPendingTracks = function checkPendingTracks() {
            var bufferCodecEventsExpected = this.bufferCodecEventsExpected, operationQueue = this.operationQueue, pendingTracks = this.pendingTracks;
            var pendingTracksCount = Object.keys(pendingTracks).length;
            if (pendingTracksCount && !bufferCodecEventsExpected || pendingTracksCount === 2) {
              this.createSourceBuffers(pendingTracks);
              this.pendingTracks = {};
              var buffers = this.getSourceBufferTypes();
              if (buffers.length === 0) {
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, {
                  type: _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].MEDIA_ERROR,
                  details: _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorDetails"].BUFFER_INCOMPATIBLE_CODECS_ERROR,
                  fatal: true,
                  reason: "could not create source buffer for media codec(s)"
                });
                return;
              }
              buffers.forEach(function(type) {
                operationQueue.executeNext(type);
              });
            }
          };
          _proto.createSourceBuffers = function createSourceBuffers(tracks) {
            var sourceBuffer = this.sourceBuffer, mediaSource = this.mediaSource;
            if (!mediaSource) {
              throw Error("createSourceBuffers called when mediaSource was null");
            }
            var tracksCreated = 0;
            for (var trackName in tracks) {
              if (!sourceBuffer[trackName]) {
                var track = tracks[trackName];
                if (!track) {
                  throw Error("source buffer exists for track " + trackName + ", however track does not");
                }
                var codec = track.levelCodec || track.codec;
                var mimeType = track.container + ";codecs=" + codec;
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: creating sourceBuffer(" + mimeType + ")");
                try {
                  var sb = sourceBuffer[trackName] = mediaSource.addSourceBuffer(mimeType);
                  var sbName = trackName;
                  this.addBufferListener(sbName, "updatestart", this._onSBUpdateStart);
                  this.addBufferListener(sbName, "updateend", this._onSBUpdateEnd);
                  this.addBufferListener(sbName, "error", this._onSBUpdateError);
                  this.tracks[trackName] = {
                    buffer: sb,
                    codec,
                    container: track.container,
                    levelCodec: track.levelCodec,
                    id: track.id
                  };
                  tracksCreated++;
                } catch (err) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("[buffer-controller]: error while trying to add sourceBuffer: " + err.message);
                  this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, {
                    type: _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].MEDIA_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorDetails"].BUFFER_ADD_CODEC_ERROR,
                    fatal: false,
                    error: err,
                    mimeType
                  });
                }
              }
            }
            if (tracksCreated) {
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_CREATED, {
                tracks: this.tracks
              });
            }
          };
          _proto._onSBUpdateStart = function _onSBUpdateStart(type) {
            var operationQueue = this.operationQueue;
            var operation = operationQueue.current(type);
            operation.onStart();
          };
          _proto._onSBUpdateEnd = function _onSBUpdateEnd(type) {
            var operationQueue = this.operationQueue;
            var operation = operationQueue.current(type);
            operation.onComplete();
            operationQueue.shiftAndExecuteNext(type);
          };
          _proto._onSBUpdateError = function _onSBUpdateError(type, event) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("[buffer-controller]: " + type + " SourceBuffer error", event);
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, {
              type: _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorTypes"].MEDIA_ERROR,
              details: _errors__WEBPACK_IMPORTED_MODULE_3__["ErrorDetails"].BUFFER_APPENDING_ERROR,
              fatal: false
            });
            var operation = this.operationQueue.current(type);
            if (operation) {
              operation.onError(event);
            }
          };
          _proto.removeExecutor = function removeExecutor(type, startOffset, endOffset) {
            var media = this.media, mediaSource = this.mediaSource, operationQueue = this.operationQueue, sourceBuffer = this.sourceBuffer;
            var sb = sourceBuffer[type];
            if (!media || !mediaSource || !sb) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("[buffer-controller]: Attempting to remove from the " + type + " SourceBuffer, but it does not exist");
              operationQueue.shiftAndExecuteNext(type);
              return;
            }
            var mediaDuration = Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(media.duration) ? media.duration : Infinity;
            var msDuration = Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(mediaSource.duration) ? mediaSource.duration : Infinity;
            var removeStart = Math.max(0, startOffset);
            var removeEnd = Math.min(endOffset, mediaDuration, msDuration);
            if (removeEnd > removeStart) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: Removing [" + removeStart + "," + removeEnd + "] from the " + type + " SourceBuffer");
              console.assert(!sb.updating, type + " sourceBuffer must not be updating");
              sb.remove(removeStart, removeEnd);
            } else {
              operationQueue.shiftAndExecuteNext(type);
            }
          };
          _proto.appendExecutor = function appendExecutor(data, type) {
            var operationQueue = this.operationQueue, sourceBuffer = this.sourceBuffer;
            var sb = sourceBuffer[type];
            if (!sb) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("[buffer-controller]: Attempting to append to the " + type + " SourceBuffer, but it does not exist");
              operationQueue.shiftAndExecuteNext(type);
              return;
            }
            sb.ended = false;
            console.assert(!sb.updating, type + " sourceBuffer must not be updating");
            sb.appendBuffer(data);
          };
          _proto.blockBuffers = function blockBuffers(onUnblocked, buffers) {
            var _this9 = this;
            if (buffers === void 0) {
              buffers = this.getSourceBufferTypes();
            }
            if (!buffers.length) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist");
              Promise.resolve(onUnblocked);
              return;
            }
            var operationQueue = this.operationQueue;
            var blockingOperations = buffers.map(function(type) {
              return operationQueue.appendBlocker(type);
            });
            Promise.all(blockingOperations).then(function() {
              onUnblocked();
              buffers.forEach(function(type) {
                var sb = _this9.sourceBuffer[type];
                if (!sb || !sb.updating) {
                  operationQueue.shiftAndExecuteNext(type);
                }
              });
            });
          };
          _proto.getSourceBufferTypes = function getSourceBufferTypes() {
            return Object.keys(this.sourceBuffer);
          };
          _proto.addBufferListener = function addBufferListener(type, event, fn) {
            var buffer = this.sourceBuffer[type];
            if (!buffer) {
              return;
            }
            var listener = fn.bind(this, type);
            this.listeners[type].push({
              event,
              listener
            });
            buffer.addEventListener(event, listener);
          };
          _proto.removeBufferListeners = function removeBufferListeners(type) {
            var buffer = this.sourceBuffer[type];
            if (!buffer) {
              return;
            }
            this.listeners[type].forEach(function(l) {
              buffer.removeEventListener(l.event, l.listener);
            });
          };
          return BufferController2;
        }();
      },
      "./src/controller/buffer-operation-queue.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return BufferOperationQueue;
        });
        var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.ts");
        var BufferOperationQueue = /* @__PURE__ */ function() {
          function BufferOperationQueue2(sourceBufferReference) {
            this.buffers = void 0;
            this.queues = {
              video: [],
              audio: [],
              audiovideo: []
            };
            this.buffers = sourceBufferReference;
          }
          var _proto = BufferOperationQueue2.prototype;
          _proto.append = function append(operation, type) {
            var queue = this.queues[type];
            queue.push(operation);
            if (queue.length === 1 && this.buffers[type]) {
              this.executeNext(type);
            }
          };
          _proto.insertAbort = function insertAbort(operation, type) {
            var queue = this.queues[type];
            queue.unshift(operation);
            this.executeNext(type);
          };
          _proto.appendBlocker = function appendBlocker(type) {
            var execute;
            var promise = new Promise(function(resolve) {
              execute = resolve;
            });
            var operation = {
              execute,
              onStart: function onStart() {
              },
              onComplete: function onComplete() {
              },
              onError: function onError() {
              }
            };
            this.append(operation, type);
            return promise;
          };
          _proto.executeNext = function executeNext(type) {
            var buffers = this.buffers, queues = this.queues;
            var sb = buffers[type];
            var queue = queues[type];
            if (queue.length) {
              var operation = queue[0];
              try {
                operation.execute();
              } catch (e) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn("[buffer-operation-queue]: Unhandled exception executing the current operation");
                operation.onError(e);
                if (!sb || !sb.updating) {
                  queue.shift();
                  this.executeNext(type);
                }
              }
            }
          };
          _proto.shiftAndExecuteNext = function shiftAndExecuteNext(type) {
            this.queues[type].shift();
            this.executeNext(type);
          };
          _proto.current = function current(type) {
            return this.queues[type][0];
          };
          return BufferOperationQueue2;
        }();
      },
      "./src/controller/cap-level-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var CapLevelController = /* @__PURE__ */ function() {
          function CapLevelController2(hls2) {
            this.autoLevelCapping = void 0;
            this.firstLevel = void 0;
            this.media = void 0;
            this.restrictedLevels = void 0;
            this.timer = void 0;
            this.hls = void 0;
            this.streamController = void 0;
            this.clientRect = void 0;
            this.hls = hls2;
            this.autoLevelCapping = Number.POSITIVE_INFINITY;
            this.firstLevel = -1;
            this.media = null;
            this.restrictedLevels = [];
            this.timer = void 0;
            this.clientRect = null;
            this.registerListeners();
          }
          var _proto = CapLevelController2.prototype;
          _proto.setStreamController = function setStreamController(streamController) {
            this.streamController = streamController;
          };
          _proto.destroy = function destroy() {
            this.unregisterListener();
            if (this.hls.config.capLevelToPlayerSize) {
              this.stopCapping();
            }
            this.media = null;
            this.clientRect = null;
            this.hls = this.streamController = null;
          };
          _proto.registerListeners = function registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHING, this.onMediaAttaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_CODECS, this.onBufferCodecs, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
          };
          _proto.unregisterListener = function unregisterListener() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHING, this.onMediaAttaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_CODECS, this.onBufferCodecs, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
          };
          _proto.onFpsDropLevelCapping = function onFpsDropLevelCapping(event, data) {
            if (CapLevelController2.isLevelAllowed(data.droppedLevel, this.restrictedLevels)) {
              this.restrictedLevels.push(data.droppedLevel);
            }
          };
          _proto.onMediaAttaching = function onMediaAttaching(event, data) {
            this.media = data.media instanceof HTMLVideoElement ? data.media : null;
          };
          _proto.onManifestParsed = function onManifestParsed(event, data) {
            var hls2 = this.hls;
            this.restrictedLevels = [];
            this.firstLevel = data.firstLevel;
            if (hls2.config.capLevelToPlayerSize && data.video) {
              this.startCapping();
            }
          };
          _proto.onBufferCodecs = function onBufferCodecs(event, data) {
            var hls2 = this.hls;
            if (hls2.config.capLevelToPlayerSize && data.video) {
              this.startCapping();
            }
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            this.stopCapping();
          };
          _proto.detectPlayerSize = function detectPlayerSize() {
            if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
              var levels = this.hls.levels;
              if (levels.length) {
                var hls2 = this.hls;
                hls2.autoLevelCapping = this.getMaxLevel(levels.length - 1);
                if (hls2.autoLevelCapping > this.autoLevelCapping && this.streamController) {
                  this.streamController.nextLevelSwitch();
                }
                this.autoLevelCapping = hls2.autoLevelCapping;
              }
            }
          };
          _proto.getMaxLevel = function getMaxLevel(capLevelIndex) {
            var _this = this;
            var levels = this.hls.levels;
            if (!levels.length) {
              return -1;
            }
            var validLevels = levels.filter(function(level, index) {
              return CapLevelController2.isLevelAllowed(index, _this.restrictedLevels) && index <= capLevelIndex;
            });
            this.clientRect = null;
            return CapLevelController2.getMaxLevelByMediaSize(validLevels, this.mediaWidth, this.mediaHeight);
          };
          _proto.startCapping = function startCapping() {
            if (this.timer) {
              return;
            }
            this.autoLevelCapping = Number.POSITIVE_INFINITY;
            this.hls.firstLevel = this.getMaxLevel(this.firstLevel);
            self.clearInterval(this.timer);
            this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3);
            this.detectPlayerSize();
          };
          _proto.stopCapping = function stopCapping() {
            this.restrictedLevels = [];
            this.firstLevel = -1;
            this.autoLevelCapping = Number.POSITIVE_INFINITY;
            if (this.timer) {
              self.clearInterval(this.timer);
              this.timer = void 0;
            }
          };
          _proto.getDimensions = function getDimensions() {
            if (this.clientRect) {
              return this.clientRect;
            }
            var media = this.media;
            var boundsRect = {
              width: 0,
              height: 0
            };
            if (media) {
              var clientRect = media.getBoundingClientRect();
              boundsRect.width = clientRect.width;
              boundsRect.height = clientRect.height;
              if (!boundsRect.width && !boundsRect.height) {
                boundsRect.width = clientRect.right - clientRect.left || media.width || 0;
                boundsRect.height = clientRect.bottom - clientRect.top || media.height || 0;
              }
            }
            this.clientRect = boundsRect;
            return boundsRect;
          };
          CapLevelController2.isLevelAllowed = function isLevelAllowed(level, restrictedLevels) {
            if (restrictedLevels === void 0) {
              restrictedLevels = [];
            }
            return restrictedLevels.indexOf(level) === -1;
          };
          CapLevelController2.getMaxLevelByMediaSize = function getMaxLevelByMediaSize(levels, width, height) {
            if (!levels || !levels.length) {
              return -1;
            }
            var atGreatestBandiwdth = function atGreatestBandiwdth2(curLevel, nextLevel) {
              if (!nextLevel) {
                return true;
              }
              return curLevel.width !== nextLevel.width || curLevel.height !== nextLevel.height;
            };
            var maxLevelIndex = levels.length - 1;
            for (var i = 0; i < levels.length; i += 1) {
              var level = levels[i];
              if ((level.width >= width || level.height >= height) && atGreatestBandiwdth(level, levels[i + 1])) {
                maxLevelIndex = i;
                break;
              }
            }
            return maxLevelIndex;
          };
          _createClass(CapLevelController2, [{
            key: "mediaWidth",
            get: function get() {
              return this.getDimensions().width * CapLevelController2.contentScaleFactor;
            }
          }, {
            key: "mediaHeight",
            get: function get() {
              return this.getDimensions().height * CapLevelController2.contentScaleFactor;
            }
          }], [{
            key: "contentScaleFactor",
            get: function get() {
              var pixelRatio = 1;
              try {
                pixelRatio = self.devicePixelRatio;
              } catch (e) {
              }
              return pixelRatio;
            }
          }]);
          return CapLevelController2;
        }();
        __webpack_exports__["default"] = CapLevelController;
      },
      "./src/controller/cmcd-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return CMCDController;
        });
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _types_cmcd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/types/cmcd.ts");
        var _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/buffer-helper.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/logger.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _createForOfIteratorHelperLoose(o, allowArrayLike) {
          var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
          if (it)
            return (it = it.call(o)).next.bind(it);
          if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it)
              o = it;
            var i = 0;
            return function() {
              if (i >= o.length)
                return { done: true };
              return { done: false, value: o[i++] };
            };
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
          }
          return arr2;
        }
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        var CMCDController = /* @__PURE__ */ function() {
          function CMCDController2(hls2) {
            var _this = this;
            this.hls = void 0;
            this.config = void 0;
            this.media = void 0;
            this.sid = void 0;
            this.cid = void 0;
            this.useHeaders = false;
            this.initialized = false;
            this.starved = false;
            this.buffering = true;
            this.audioBuffer = void 0;
            this.videoBuffer = void 0;
            this.onWaiting = function() {
              if (_this.initialized) {
                _this.starved = true;
              }
              _this.buffering = true;
            };
            this.onPlaying = function() {
              if (!_this.initialized) {
                _this.initialized = true;
              }
              _this.buffering = false;
            };
            this.applyPlaylistData = function(context) {
              try {
                _this.apply(context, {
                  ot: _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].MANIFEST,
                  su: !_this.initialized
                });
              } catch (error) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Could not generate manifest CMCD data.", error);
              }
            };
            this.applyFragmentData = function(context) {
              try {
                var fragment = context.frag;
                var level = _this.hls.levels[fragment.level];
                var ot = _this.getObjectType(fragment);
                var data = {
                  d: fragment.duration * 1e3,
                  ot
                };
                if (ot === _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].VIDEO || ot === _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].AUDIO || ot == _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].MUXED) {
                  data.br = level.bitrate / 1e3;
                  data.tb = _this.getTopBandwidth(ot);
                  data.bl = _this.getBufferLength(ot);
                }
                _this.apply(context, data);
              } catch (error) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Could not generate segment CMCD data.", error);
              }
            };
            this.hls = hls2;
            var config = this.config = hls2.config;
            var cmcd = config.cmcd;
            if (cmcd != null) {
              config.pLoader = this.createPlaylistLoader();
              config.fLoader = this.createFragmentLoader();
              this.sid = cmcd.sessionId || CMCDController2.uuid();
              this.cid = cmcd.contentId;
              this.useHeaders = cmcd.useHeaders === true;
              this.registerListeners();
            }
          }
          var _proto = CMCDController2.prototype;
          _proto.registerListeners = function registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHED, this.onMediaDetached, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_CREATED, this.onBufferCreated, this);
          };
          _proto.unregisterListeners = function unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHED, this.onMediaDetached, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_CREATED, this.onBufferCreated, this);
            this.onMediaDetached();
          };
          _proto.destroy = function destroy() {
            this.unregisterListeners();
            this.hls = this.config = this.audioBuffer = this.videoBuffer = null;
          };
          _proto.onMediaAttached = function onMediaAttached(event, data) {
            this.media = data.media;
            this.media.addEventListener("waiting", this.onWaiting);
            this.media.addEventListener("playing", this.onPlaying);
          };
          _proto.onMediaDetached = function onMediaDetached() {
            if (!this.media) {
              return;
            }
            this.media.removeEventListener("waiting", this.onWaiting);
            this.media.removeEventListener("playing", this.onPlaying);
            this.media = null;
          };
          _proto.onBufferCreated = function onBufferCreated(event, data) {
            var _data$tracks$audio, _data$tracks$video;
            this.audioBuffer = (_data$tracks$audio = data.tracks.audio) === null || _data$tracks$audio === void 0 ? void 0 : _data$tracks$audio.buffer;
            this.videoBuffer = (_data$tracks$video = data.tracks.video) === null || _data$tracks$video === void 0 ? void 0 : _data$tracks$video.buffer;
          };
          _proto.createData = function createData() {
            var _this$media;
            return {
              v: _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDVersion"],
              sf: _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDStreamingFormat"].HLS,
              sid: this.sid,
              cid: this.cid,
              pr: (_this$media = this.media) === null || _this$media === void 0 ? void 0 : _this$media.playbackRate,
              mtp: this.hls.bandwidthEstimate / 1e3
            };
          };
          _proto.apply = function apply(context, data) {
            if (data === void 0) {
              data = {};
            }
            _extends(data, this.createData());
            var isVideo = data.ot === _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].INIT || data.ot === _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].VIDEO || data.ot === _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].MUXED;
            if (this.starved && isVideo) {
              data.bs = true;
              data.su = true;
              this.starved = false;
            }
            if (data.su == null) {
              data.su = this.buffering;
            }
            if (this.useHeaders) {
              var headers = CMCDController2.toHeaders(data);
              if (!Object.keys(headers).length) {
                return;
              }
              if (!context.headers) {
                context.headers = {};
              }
              _extends(context.headers, headers);
            } else {
              var query = CMCDController2.toQuery(data);
              if (!query) {
                return;
              }
              context.url = CMCDController2.appendQueryToUri(context.url, query);
            }
          };
          _proto.getObjectType = function getObjectType(fragment) {
            var type = fragment.type;
            if (type === "subtitle") {
              return _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].TIMED_TEXT;
            }
            if (fragment.sn === "initSegment") {
              return _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].INIT;
            }
            if (type === "audio") {
              return _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].AUDIO;
            }
            if (type === "main") {
              if (!this.hls.audioTracks.length) {
                return _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].MUXED;
              }
              return _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].VIDEO;
            }
            return void 0;
          };
          _proto.getTopBandwidth = function getTopBandwidth(type) {
            var bitrate = 0;
            var levels = type === _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].AUDIO ? this.hls.audioTracks : this.hls.levels;
            for (var _iterator = _createForOfIteratorHelperLoose(levels), _step; !(_step = _iterator()).done; ) {
              var level = _step.value;
              if (level.bitrate > bitrate) {
                bitrate = level.bitrate;
              }
            }
            return bitrate > 0 ? bitrate : NaN;
          };
          _proto.getBufferLength = function getBufferLength(type) {
            var media = this.hls.media;
            var buffer = type === _types_cmcd__WEBPACK_IMPORTED_MODULE_1__["CMCDObjectType"].AUDIO ? this.audioBuffer : this.videoBuffer;
            if (!buffer || !media) {
              return NaN;
            }
            var info = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_2__["BufferHelper"].bufferInfo(buffer, media.currentTime, this.config.maxBufferHole);
            return info.len * 1e3;
          };
          _proto.createPlaylistLoader = function createPlaylistLoader() {
            var pLoader = this.config.pLoader;
            var apply = this.applyPlaylistData;
            var Ctor = pLoader || this.config.loader;
            return /* @__PURE__ */ function() {
              function CmcdPlaylistLoader(config) {
                this.loader = void 0;
                this.loader = new Ctor(config);
              }
              var _proto2 = CmcdPlaylistLoader.prototype;
              _proto2.destroy = function destroy() {
                this.loader.destroy();
              };
              _proto2.abort = function abort() {
                this.loader.abort();
              };
              _proto2.load = function load(context, config, callbacks) {
                apply(context);
                this.loader.load(context, config, callbacks);
              };
              _createClass(CmcdPlaylistLoader, [{
                key: "stats",
                get: function get() {
                  return this.loader.stats;
                }
              }, {
                key: "context",
                get: function get() {
                  return this.loader.context;
                }
              }]);
              return CmcdPlaylistLoader;
            }();
          };
          _proto.createFragmentLoader = function createFragmentLoader() {
            var fLoader = this.config.fLoader;
            var apply = this.applyFragmentData;
            var Ctor = fLoader || this.config.loader;
            return /* @__PURE__ */ function() {
              function CmcdFragmentLoader(config) {
                this.loader = void 0;
                this.loader = new Ctor(config);
              }
              var _proto3 = CmcdFragmentLoader.prototype;
              _proto3.destroy = function destroy() {
                this.loader.destroy();
              };
              _proto3.abort = function abort() {
                this.loader.abort();
              };
              _proto3.load = function load(context, config, callbacks) {
                apply(context);
                this.loader.load(context, config, callbacks);
              };
              _createClass(CmcdFragmentLoader, [{
                key: "stats",
                get: function get() {
                  return this.loader.stats;
                }
              }, {
                key: "context",
                get: function get() {
                  return this.loader.context;
                }
              }]);
              return CmcdFragmentLoader;
            }();
          };
          CMCDController2.uuid = function uuid() {
            var url = URL.createObjectURL(new Blob());
            var uuid2 = url.toString();
            URL.revokeObjectURL(url);
            return uuid2.substr(uuid2.lastIndexOf("/") + 1);
          };
          CMCDController2.serialize = function serialize(data) {
            var results = [];
            var isValid = function isValid2(value2) {
              return !Number.isNaN(value2) && value2 != null && value2 !== "" && value2 !== false;
            };
            var toRounded = function toRounded2(value2) {
              return Math.round(value2);
            };
            var toHundred = function toHundred2(value2) {
              return toRounded(value2 / 100) * 100;
            };
            var toUrlSafe = function toUrlSafe2(value2) {
              return encodeURIComponent(value2);
            };
            var formatters = {
              br: toRounded,
              d: toRounded,
              bl: toHundred,
              dl: toHundred,
              mtp: toHundred,
              nor: toUrlSafe,
              rtp: toHundred,
              tb: toRounded
            };
            var keys = Object.keys(data || {}).sort();
            for (var _iterator2 = _createForOfIteratorHelperLoose(keys), _step2; !(_step2 = _iterator2()).done; ) {
              var key = _step2.value;
              var value = data[key];
              if (!isValid(value)) {
                continue;
              }
              if (key === "v" && value === 1) {
                continue;
              }
              if (key == "pr" && value === 1) {
                continue;
              }
              var formatter = formatters[key];
              if (formatter) {
                value = formatter(value);
              }
              var type = typeof value;
              var result = void 0;
              if (key === "ot" || key === "sf" || key === "st") {
                result = key + "=" + value;
              } else if (type === "boolean") {
                result = key;
              } else if (type === "number") {
                result = key + "=" + value;
              } else {
                result = key + "=" + JSON.stringify(value);
              }
              results.push(result);
            }
            return results.join(",");
          };
          CMCDController2.toHeaders = function toHeaders(data) {
            var keys = Object.keys(data);
            var headers = {};
            var headerNames = ["Object", "Request", "Session", "Status"];
            var headerGroups = [{}, {}, {}, {}];
            var headerMap = {
              br: 0,
              d: 0,
              ot: 0,
              tb: 0,
              bl: 1,
              dl: 1,
              mtp: 1,
              nor: 1,
              nrr: 1,
              su: 1,
              cid: 2,
              pr: 2,
              sf: 2,
              sid: 2,
              st: 2,
              v: 2,
              bs: 3,
              rtp: 3
            };
            for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
              var key = _keys[_i];
              var index = headerMap[key] != null ? headerMap[key] : 1;
              headerGroups[index][key] = data[key];
            }
            for (var i = 0; i < headerGroups.length; i++) {
              var value = CMCDController2.serialize(headerGroups[i]);
              if (value) {
                headers["CMCD-" + headerNames[i]] = value;
              }
            }
            return headers;
          };
          CMCDController2.toQuery = function toQuery(data) {
            return "CMCD=" + encodeURIComponent(CMCDController2.serialize(data));
          };
          CMCDController2.appendQueryToUri = function appendQueryToUri(uri, query) {
            if (!query) {
              return uri;
            }
            var separator = uri.includes("?") ? "&" : "?";
            return "" + uri + separator + query;
          };
          return CMCDController2;
        }();
      },
      "./src/controller/eme-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/errors.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/logger.ts");
        var _utils_mediakeys_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/mediakeys-helper.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var MAX_LICENSE_REQUEST_FAILURES = 3;
        var createWidevineMediaKeySystemConfigurations = function createWidevineMediaKeySystemConfigurations2(audioCodecs, videoCodecs, drmSystemOptions) {
          var baseConfig = {
            audioCapabilities: [],
            videoCapabilities: []
          };
          audioCodecs.forEach(function(codec) {
            baseConfig.audioCapabilities.push({
              contentType: 'audio/mp4; codecs="' + codec + '"',
              robustness: drmSystemOptions.audioRobustness || ""
            });
          });
          videoCodecs.forEach(function(codec) {
            baseConfig.videoCapabilities.push({
              contentType: 'video/mp4; codecs="' + codec + '"',
              robustness: drmSystemOptions.videoRobustness || ""
            });
          });
          return [baseConfig];
        };
        var getSupportedMediaKeySystemConfigurations = function getSupportedMediaKeySystemConfigurations2(keySystem, audioCodecs, videoCodecs, drmSystemOptions) {
          switch (keySystem) {
            case _utils_mediakeys_helper__WEBPACK_IMPORTED_MODULE_3__["KeySystems"].WIDEVINE:
              return createWidevineMediaKeySystemConfigurations(audioCodecs, videoCodecs, drmSystemOptions);
            default:
              throw new Error("Unknown key-system: " + keySystem);
          }
        };
        var EMEController = /* @__PURE__ */ function() {
          function EMEController2(hls2) {
            this.hls = void 0;
            this._widevineLicenseUrl = void 0;
            this._licenseXhrSetup = void 0;
            this._licenseResponseCallback = void 0;
            this._emeEnabled = void 0;
            this._requestMediaKeySystemAccess = void 0;
            this._drmSystemOptions = void 0;
            this._config = void 0;
            this._mediaKeysList = [];
            this._media = null;
            this._hasSetMediaKeys = false;
            this._requestLicenseFailureCount = 0;
            this.mediaKeysPromise = null;
            this._onMediaEncrypted = this.onMediaEncrypted.bind(this);
            this.hls = hls2;
            this._config = hls2.config;
            this._widevineLicenseUrl = this._config.widevineLicenseUrl;
            this._licenseXhrSetup = this._config.licenseXhrSetup;
            this._licenseResponseCallback = this._config.licenseResponseCallback;
            this._emeEnabled = this._config.emeEnabled;
            this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc;
            this._drmSystemOptions = this._config.drmSystemOptions;
            this._registerListeners();
          }
          var _proto = EMEController2.prototype;
          _proto.destroy = function destroy() {
            this._unregisterListeners();
            this.hls = this._onMediaEncrypted = null;
            this._requestMediaKeySystemAccess = null;
          };
          _proto._registerListeners = function _registerListeners() {
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHED, this.onMediaDetached, this);
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
          };
          _proto._unregisterListeners = function _unregisterListeners() {
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHED, this.onMediaDetached, this);
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
          };
          _proto.getLicenseServerUrl = function getLicenseServerUrl(keySystem) {
            switch (keySystem) {
              case _utils_mediakeys_helper__WEBPACK_IMPORTED_MODULE_3__["KeySystems"].WIDEVINE:
                if (!this._widevineLicenseUrl) {
                  break;
                }
                return this._widevineLicenseUrl;
            }
            throw new Error('no license server URL configured for key-system "' + keySystem + '"');
          };
          _proto._attemptKeySystemAccess = function _attemptKeySystemAccess(keySystem, audioCodecs, videoCodecs) {
            var _this = this;
            var mediaKeySystemConfigs = getSupportedMediaKeySystemConfigurations(keySystem, audioCodecs, videoCodecs, this._drmSystemOptions);
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Requesting encrypted media key-system access");
            var keySystemAccessPromise = this.requestMediaKeySystemAccess(keySystem, mediaKeySystemConfigs);
            this.mediaKeysPromise = keySystemAccessPromise.then(function(mediaKeySystemAccess) {
              return _this._onMediaKeySystemAccessObtained(keySystem, mediaKeySystemAccess);
            });
            keySystemAccessPromise.catch(function(err) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error('Failed to obtain key-system "' + keySystem + '" access:', err);
            });
          };
          _proto._onMediaKeySystemAccessObtained = function _onMediaKeySystemAccessObtained(keySystem, mediaKeySystemAccess) {
            var _this2 = this;
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log('Access for key-system "' + keySystem + '" obtained');
            var mediaKeysListItem = {
              mediaKeysSessionInitialized: false,
              mediaKeySystemAccess,
              mediaKeySystemDomain: keySystem
            };
            this._mediaKeysList.push(mediaKeysListItem);
            var mediaKeysPromise = Promise.resolve().then(function() {
              return mediaKeySystemAccess.createMediaKeys();
            }).then(function(mediaKeys) {
              mediaKeysListItem.mediaKeys = mediaKeys;
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log('Media-keys created for key-system "' + keySystem + '"');
              _this2._onMediaKeysCreated();
              return mediaKeys;
            });
            mediaKeysPromise.catch(function(err) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Failed to create media-keys:", err);
            });
            return mediaKeysPromise;
          };
          _proto._onMediaKeysCreated = function _onMediaKeysCreated() {
            var _this3 = this;
            this._mediaKeysList.forEach(function(mediaKeysListItem) {
              if (!mediaKeysListItem.mediaKeysSession) {
                mediaKeysListItem.mediaKeysSession = mediaKeysListItem.mediaKeys.createSession();
                _this3._onNewMediaKeySession(mediaKeysListItem.mediaKeysSession);
              }
            });
          };
          _proto._onNewMediaKeySession = function _onNewMediaKeySession(keySession) {
            var _this4 = this;
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("New key-system session " + keySession.sessionId);
            keySession.addEventListener("message", function(event) {
              _this4._onKeySessionMessage(keySession, event.message);
            }, false);
          };
          _proto._onKeySessionMessage = function _onKeySessionMessage(keySession, message) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Got EME message event, creating license request");
            this._requestLicense(message, function(data) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Received license data (length: " + (data ? data.byteLength : data) + "), updating key-session");
              keySession.update(data);
            });
          };
          _proto.onMediaEncrypted = function onMediaEncrypted(e) {
            var _this5 = this;
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log('Media is encrypted using "' + e.initDataType + '" init data type');
            if (!this.mediaKeysPromise) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Fatal: Media is encrypted but no CDM access or no keys have been requested");
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_NO_KEYS,
                fatal: true
              });
              return;
            }
            var finallySetKeyAndStartSession = function finallySetKeyAndStartSession2(mediaKeys) {
              if (!_this5._media) {
                return;
              }
              _this5._attemptSetMediaKeys(mediaKeys);
              _this5._generateRequestWithPreferredKeySession(e.initDataType, e.initData);
            };
            this.mediaKeysPromise.then(finallySetKeyAndStartSession).catch(finallySetKeyAndStartSession);
          };
          _proto._attemptSetMediaKeys = function _attemptSetMediaKeys(mediaKeys) {
            if (!this._media) {
              throw new Error("Attempted to set mediaKeys without first attaching a media element");
            }
            if (!this._hasSetMediaKeys) {
              var keysListItem = this._mediaKeysList[0];
              if (!keysListItem || !keysListItem.mediaKeys) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet");
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                  type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                  details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_NO_KEYS,
                  fatal: true
                });
                return;
              }
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Setting keys for encrypted media");
              this._media.setMediaKeys(keysListItem.mediaKeys);
              this._hasSetMediaKeys = true;
            }
          };
          _proto._generateRequestWithPreferredKeySession = function _generateRequestWithPreferredKeySession(initDataType, initData) {
            var _this6 = this;
            var keysListItem = this._mediaKeysList[0];
            if (!keysListItem) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Fatal: Media is encrypted but not any key-system access has been obtained yet");
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_NO_ACCESS,
                fatal: true
              });
              return;
            }
            if (keysListItem.mediaKeysSessionInitialized) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Key-Session already initialized but requested again");
              return;
            }
            var keySession = keysListItem.mediaKeysSession;
            if (!keySession) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Fatal: Media is encrypted but no key-session existing");
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_NO_SESSION,
                fatal: true
              });
              return;
            }
            if (!initData) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Fatal: initData required for generating a key session is null");
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_NO_INIT_DATA,
                fatal: true
              });
              return;
            }
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log('Generating key-session request for "' + initDataType + '" init data type');
            keysListItem.mediaKeysSessionInitialized = true;
            keySession.generateRequest(initDataType, initData).then(function() {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].debug("Key-session generation succeeded");
            }).catch(function(err) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Error generating key-session request:", err);
              _this6.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_NO_SESSION,
                fatal: false
              });
            });
          };
          _proto._createLicenseXhr = function _createLicenseXhr(url, keyMessage, callback) {
            var xhr = new XMLHttpRequest();
            xhr.responseType = "arraybuffer";
            xhr.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, xhr, url, keyMessage, callback);
            var licenseXhrSetup = this._licenseXhrSetup;
            if (licenseXhrSetup) {
              try {
                licenseXhrSetup.call(this.hls, xhr, url);
                licenseXhrSetup = void 0;
              } catch (e) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error(e);
              }
            }
            try {
              if (!xhr.readyState) {
                xhr.open("POST", url, true);
              }
              if (licenseXhrSetup) {
                licenseXhrSetup.call(this.hls, xhr, url);
              }
            } catch (e) {
              throw new Error("issue setting up KeySystem license XHR " + e);
            }
            return xhr;
          };
          _proto._onLicenseRequestReadyStageChange = function _onLicenseRequestReadyStageChange(xhr, url, keyMessage, callback) {
            switch (xhr.readyState) {
              case 4:
                if (xhr.status === 200) {
                  this._requestLicenseFailureCount = 0;
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("License request succeeded");
                  var _data = xhr.response;
                  var licenseResponseCallback = this._licenseResponseCallback;
                  if (licenseResponseCallback) {
                    try {
                      _data = licenseResponseCallback.call(this.hls, xhr, url);
                    } catch (e) {
                      _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error(e);
                    }
                  }
                  callback(_data);
                } else {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("License Request XHR failed (" + url + "). Status: " + xhr.status + " (" + xhr.statusText + ")");
                  this._requestLicenseFailureCount++;
                  if (this._requestLicenseFailureCount > MAX_LICENSE_REQUEST_FAILURES) {
                    this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                      type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                      details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                      fatal: true
                    });
                    return;
                  }
                  var attemptsLeft = MAX_LICENSE_REQUEST_FAILURES - this._requestLicenseFailureCount + 1;
                  _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Retrying license request, " + attemptsLeft + " attempts left");
                  this._requestLicense(keyMessage, callback);
                }
                break;
            }
          };
          _proto._generateLicenseRequestChallenge = function _generateLicenseRequestChallenge(keysListItem, keyMessage) {
            switch (keysListItem.mediaKeySystemDomain) {
              case _utils_mediakeys_helper__WEBPACK_IMPORTED_MODULE_3__["KeySystems"].WIDEVINE:
                return keyMessage;
            }
            throw new Error("unsupported key-system: " + keysListItem.mediaKeySystemDomain);
          };
          _proto._requestLicense = function _requestLicense(keyMessage, callback) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Requesting content license for key-system");
            var keysListItem = this._mediaKeysList[0];
            if (!keysListItem) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Fatal error: Media is encrypted but no key-system access has been obtained yet");
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_NO_ACCESS,
                fatal: true
              });
              return;
            }
            try {
              var _url = this.getLicenseServerUrl(keysListItem.mediaKeySystemDomain);
              var _xhr = this._createLicenseXhr(_url, keyMessage, callback);
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("Sending license request to URL: " + _url);
              var challenge = this._generateLicenseRequestChallenge(keysListItem, keyMessage);
              _xhr.send(challenge);
            } catch (e) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("Failure requesting DRM license: " + e);
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].KEY_SYSTEM_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                fatal: true
              });
            }
          };
          _proto.onMediaAttached = function onMediaAttached(event, data) {
            if (!this._emeEnabled) {
              return;
            }
            var media = data.media;
            this._media = media;
            media.addEventListener("encrypted", this._onMediaEncrypted);
          };
          _proto.onMediaDetached = function onMediaDetached() {
            var media = this._media;
            var mediaKeysList = this._mediaKeysList;
            if (!media) {
              return;
            }
            media.removeEventListener("encrypted", this._onMediaEncrypted);
            this._media = null;
            this._mediaKeysList = [];
            Promise.all(mediaKeysList.map(function(mediaKeysListItem) {
              if (mediaKeysListItem.mediaKeysSession) {
                return mediaKeysListItem.mediaKeysSession.close().catch(function() {
                });
              }
            })).then(function() {
              return media.setMediaKeys(null);
            }).catch(function() {
            });
          };
          _proto.onManifestParsed = function onManifestParsed(event, data) {
            if (!this._emeEnabled) {
              return;
            }
            var audioCodecs = data.levels.map(function(level) {
              return level.audioCodec;
            }).filter(function(audioCodec) {
              return !!audioCodec;
            });
            var videoCodecs = data.levels.map(function(level) {
              return level.videoCodec;
            }).filter(function(videoCodec) {
              return !!videoCodec;
            });
            this._attemptKeySystemAccess(_utils_mediakeys_helper__WEBPACK_IMPORTED_MODULE_3__["KeySystems"].WIDEVINE, audioCodecs, videoCodecs);
          };
          _createClass(EMEController2, [{
            key: "requestMediaKeySystemAccess",
            get: function get() {
              if (!this._requestMediaKeySystemAccess) {
                throw new Error("No requestMediaKeySystemAccess function configured");
              }
              return this._requestMediaKeySystemAccess;
            }
          }]);
          return EMEController2;
        }();
        __webpack_exports__["default"] = EMEController;
      },
      "./src/controller/fps-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/logger.ts");
        var FPSController = /* @__PURE__ */ function() {
          function FPSController2(hls2) {
            this.hls = void 0;
            this.isVideoPlaybackQualityAvailable = false;
            this.timer = void 0;
            this.media = null;
            this.lastTime = void 0;
            this.lastDroppedFrames = 0;
            this.lastDecodedFrames = 0;
            this.streamController = void 0;
            this.hls = hls2;
            this.registerListeners();
          }
          var _proto = FPSController2.prototype;
          _proto.setStreamController = function setStreamController(streamController) {
            this.streamController = streamController;
          };
          _proto.registerListeners = function registerListeners() {
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHING, this.onMediaAttaching, this);
          };
          _proto.unregisterListeners = function unregisterListeners() {
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHING, this.onMediaAttaching);
          };
          _proto.destroy = function destroy() {
            if (this.timer) {
              clearInterval(this.timer);
            }
            this.unregisterListeners();
            this.isVideoPlaybackQualityAvailable = false;
            this.media = null;
          };
          _proto.onMediaAttaching = function onMediaAttaching(event, data) {
            var config = this.hls.config;
            if (config.capLevelOnFPSDrop) {
              var media = data.media instanceof self.HTMLVideoElement ? data.media : null;
              this.media = media;
              if (media && typeof media.getVideoPlaybackQuality === "function") {
                this.isVideoPlaybackQualityAvailable = true;
              }
              self.clearInterval(this.timer);
              this.timer = self.setInterval(this.checkFPSInterval.bind(this), config.fpsDroppedMonitoringPeriod);
            }
          };
          _proto.checkFPS = function checkFPS(video, decodedFrames, droppedFrames) {
            var currentTime = performance.now();
            if (decodedFrames) {
              if (this.lastTime) {
                var currentPeriod = currentTime - this.lastTime;
                var currentDropped = droppedFrames - this.lastDroppedFrames;
                var currentDecoded = decodedFrames - this.lastDecodedFrames;
                var droppedFPS = 1e3 * currentDropped / currentPeriod;
                var hls2 = this.hls;
                hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FPS_DROP, {
                  currentDropped,
                  currentDecoded,
                  totalDroppedFrames: droppedFrames
                });
                if (droppedFPS > 0) {
                  if (currentDropped > hls2.config.fpsDroppedMonitoringThreshold * currentDecoded) {
                    var currentLevel = hls2.currentLevel;
                    _utils_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("drop FPS ratio greater than max allowed value for currentLevel: " + currentLevel);
                    if (currentLevel > 0 && (hls2.autoLevelCapping === -1 || hls2.autoLevelCapping >= currentLevel)) {
                      currentLevel = currentLevel - 1;
                      hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FPS_DROP_LEVEL_CAPPING, {
                        level: currentLevel,
                        droppedLevel: hls2.currentLevel
                      });
                      hls2.autoLevelCapping = currentLevel;
                      this.streamController.nextLevelSwitch();
                    }
                  }
                }
              }
              this.lastTime = currentTime;
              this.lastDroppedFrames = droppedFrames;
              this.lastDecodedFrames = decodedFrames;
            }
          };
          _proto.checkFPSInterval = function checkFPSInterval() {
            var video = this.media;
            if (video) {
              if (this.isVideoPlaybackQualityAvailable) {
                var videoPlaybackQuality = video.getVideoPlaybackQuality();
                this.checkFPS(video, videoPlaybackQuality.totalVideoFrames, videoPlaybackQuality.droppedVideoFrames);
              } else {
                this.checkFPS(video, video.webkitDecodedFrameCount, video.webkitDroppedFrameCount);
              }
            }
          };
          return FPSController2;
        }();
        __webpack_exports__["default"] = FPSController;
      },
      "./src/controller/fragment-finders.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "findFragmentByPDT", function() {
          return findFragmentByPDT;
        });
        __webpack_require__.d(__webpack_exports__, "findFragmentByPTS", function() {
          return findFragmentByPTS;
        });
        __webpack_require__.d(__webpack_exports__, "fragmentWithinToleranceTest", function() {
          return fragmentWithinToleranceTest;
        });
        __webpack_require__.d(__webpack_exports__, "pdtWithinToleranceTest", function() {
          return pdtWithinToleranceTest;
        });
        __webpack_require__.d(__webpack_exports__, "findFragWithCC", function() {
          return findFragWithCC;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _utils_binary_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/binary-search.ts");
        function findFragmentByPDT(fragments, PDTValue, maxFragLookUpTolerance) {
          if (PDTValue === null || !Array.isArray(fragments) || !fragments.length || !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(PDTValue)) {
            return null;
          }
          var startPDT = fragments[0].programDateTime;
          if (PDTValue < (startPDT || 0)) {
            return null;
          }
          var endPDT = fragments[fragments.length - 1].endProgramDateTime;
          if (PDTValue >= (endPDT || 0)) {
            return null;
          }
          maxFragLookUpTolerance = maxFragLookUpTolerance || 0;
          for (var seg = 0; seg < fragments.length; ++seg) {
            var frag = fragments[seg];
            if (pdtWithinToleranceTest(PDTValue, maxFragLookUpTolerance, frag)) {
              return frag;
            }
          }
          return null;
        }
        function findFragmentByPTS(fragPrevious, fragments, bufferEnd, maxFragLookUpTolerance) {
          if (bufferEnd === void 0) {
            bufferEnd = 0;
          }
          if (maxFragLookUpTolerance === void 0) {
            maxFragLookUpTolerance = 0;
          }
          var fragNext = null;
          if (fragPrevious) {
            fragNext = fragments[fragPrevious.sn - fragments[0].sn + 1] || null;
          } else if (bufferEnd === 0 && fragments[0].start === 0) {
            fragNext = fragments[0];
          }
          if (fragNext && fragmentWithinToleranceTest(bufferEnd, maxFragLookUpTolerance, fragNext) === 0) {
            return fragNext;
          }
          var foundFragment = _utils_binary_search__WEBPACK_IMPORTED_MODULE_1__["default"].search(fragments, fragmentWithinToleranceTest.bind(null, bufferEnd, maxFragLookUpTolerance));
          if (foundFragment) {
            return foundFragment;
          }
          return fragNext;
        }
        function fragmentWithinToleranceTest(bufferEnd, maxFragLookUpTolerance, candidate) {
          if (bufferEnd === void 0) {
            bufferEnd = 0;
          }
          if (maxFragLookUpTolerance === void 0) {
            maxFragLookUpTolerance = 0;
          }
          var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration + (candidate.deltaPTS ? candidate.deltaPTS : 0));
          if (candidate.start + candidate.duration - candidateLookupTolerance <= bufferEnd) {
            return 1;
          } else if (candidate.start - candidateLookupTolerance > bufferEnd && candidate.start) {
            return -1;
          }
          return 0;
        }
        function pdtWithinToleranceTest(pdtBufferEnd, maxFragLookUpTolerance, candidate) {
          var candidateLookupTolerance = Math.min(maxFragLookUpTolerance, candidate.duration + (candidate.deltaPTS ? candidate.deltaPTS : 0)) * 1e3;
          var endProgramDateTime = candidate.endProgramDateTime || 0;
          return endProgramDateTime - candidateLookupTolerance > pdtBufferEnd;
        }
        function findFragWithCC(fragments, cc) {
          return _utils_binary_search__WEBPACK_IMPORTED_MODULE_1__["default"].search(fragments, function(candidate) {
            if (candidate.cc < cc) {
              return 1;
            } else if (candidate.cc > cc) {
              return -1;
            } else {
              return 0;
            }
          });
        }
      },
      "./src/controller/fragment-tracker.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "FragmentState", function() {
          return FragmentState;
        });
        __webpack_require__.d(__webpack_exports__, "FragmentTracker", function() {
          return FragmentTracker;
        });
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/types/loader.ts");
        var FragmentState;
        (function(FragmentState2) {
          FragmentState2["NOT_LOADED"] = "NOT_LOADED";
          FragmentState2["BACKTRACKED"] = "BACKTRACKED";
          FragmentState2["APPENDING"] = "APPENDING";
          FragmentState2["PARTIAL"] = "PARTIAL";
          FragmentState2["OK"] = "OK";
        })(FragmentState || (FragmentState = {}));
        var FragmentTracker = /* @__PURE__ */ function() {
          function FragmentTracker2(hls2) {
            this.activeFragment = null;
            this.activeParts = null;
            this.fragments = Object.create(null);
            this.timeRanges = Object.create(null);
            this.bufferPadding = 0.2;
            this.hls = void 0;
            this.hls = hls2;
            this._registerListeners();
          }
          var _proto = FragmentTracker2.prototype;
          _proto._registerListeners = function _registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_APPENDED, this.onBufferAppended, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FRAG_BUFFERED, this.onFragBuffered, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FRAG_LOADED, this.onFragLoaded, this);
          };
          _proto._unregisterListeners = function _unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_APPENDED, this.onBufferAppended, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FRAG_BUFFERED, this.onFragBuffered, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FRAG_LOADED, this.onFragLoaded, this);
          };
          _proto.destroy = function destroy() {
            this._unregisterListeners();
            this.fragments = this.timeRanges = null;
          };
          _proto.getAppendedFrag = function getAppendedFrag(position, levelType) {
            if (levelType === _types_loader__WEBPACK_IMPORTED_MODULE_1__["PlaylistLevelType"].MAIN) {
              var activeFragment = this.activeFragment, activeParts = this.activeParts;
              if (!activeFragment) {
                return null;
              }
              if (activeParts) {
                for (var i = activeParts.length; i--; ) {
                  var activePart = activeParts[i];
                  var appendedPTS = activePart ? activePart.end : activeFragment.appendedPTS;
                  if (activePart.start <= position && appendedPTS !== void 0 && position <= appendedPTS) {
                    if (i > 9) {
                      this.activeParts = activeParts.slice(i - 9);
                    }
                    return activePart;
                  }
                }
              } else if (activeFragment.start <= position && activeFragment.appendedPTS !== void 0 && position <= activeFragment.appendedPTS) {
                return activeFragment;
              }
            }
            return this.getBufferedFrag(position, levelType);
          };
          _proto.getBufferedFrag = function getBufferedFrag(position, levelType) {
            var fragments = this.fragments;
            var keys = Object.keys(fragments);
            for (var i = keys.length; i--; ) {
              var fragmentEntity = fragments[keys[i]];
              if ((fragmentEntity === null || fragmentEntity === void 0 ? void 0 : fragmentEntity.body.type) === levelType && fragmentEntity.buffered) {
                var frag = fragmentEntity.body;
                if (frag.start <= position && position <= frag.end) {
                  return frag;
                }
              }
            }
            return null;
          };
          _proto.detectEvictedFragments = function detectEvictedFragments(elementaryStream, timeRange, playlistType) {
            var _this = this;
            Object.keys(this.fragments).forEach(function(key) {
              var fragmentEntity = _this.fragments[key];
              if (!fragmentEntity) {
                return;
              }
              if (!fragmentEntity.buffered) {
                if (fragmentEntity.body.type === playlistType) {
                  _this.removeFragment(fragmentEntity.body);
                }
                return;
              }
              var esData = fragmentEntity.range[elementaryStream];
              if (!esData) {
                return;
              }
              esData.time.some(function(time) {
                var isNotBuffered = !_this.isTimeBuffered(time.startPTS, time.endPTS, timeRange);
                if (isNotBuffered) {
                  _this.removeFragment(fragmentEntity.body);
                }
                return isNotBuffered;
              });
            });
          };
          _proto.detectPartialFragments = function detectPartialFragments(data) {
            var _this2 = this;
            var timeRanges = this.timeRanges;
            var frag = data.frag, part = data.part;
            if (!timeRanges || frag.sn === "initSegment") {
              return;
            }
            var fragKey = getFragmentKey(frag);
            var fragmentEntity = this.fragments[fragKey];
            if (!fragmentEntity) {
              return;
            }
            Object.keys(timeRanges).forEach(function(elementaryStream) {
              var streamInfo = frag.elementaryStreams[elementaryStream];
              if (!streamInfo) {
                return;
              }
              var timeRange = timeRanges[elementaryStream];
              var partial = part !== null || streamInfo.partial === true;
              fragmentEntity.range[elementaryStream] = _this2.getBufferedTimes(frag, part, partial, timeRange);
            });
            fragmentEntity.backtrack = fragmentEntity.loaded = null;
            if (Object.keys(fragmentEntity.range).length) {
              fragmentEntity.buffered = true;
            } else {
              this.removeFragment(fragmentEntity.body);
            }
          };
          _proto.fragBuffered = function fragBuffered(frag) {
            var fragKey = getFragmentKey(frag);
            var fragmentEntity = this.fragments[fragKey];
            if (fragmentEntity) {
              fragmentEntity.backtrack = fragmentEntity.loaded = null;
              fragmentEntity.buffered = true;
            }
          };
          _proto.getBufferedTimes = function getBufferedTimes(fragment, part, partial, timeRange) {
            var buffered = {
              time: [],
              partial
            };
            var startPTS = part ? part.start : fragment.start;
            var endPTS = part ? part.end : fragment.end;
            var minEndPTS = fragment.minEndPTS || endPTS;
            var maxStartPTS = fragment.maxStartPTS || startPTS;
            for (var i = 0; i < timeRange.length; i++) {
              var startTime = timeRange.start(i) - this.bufferPadding;
              var endTime = timeRange.end(i) + this.bufferPadding;
              if (maxStartPTS >= startTime && minEndPTS <= endTime) {
                buffered.time.push({
                  startPTS: Math.max(startPTS, timeRange.start(i)),
                  endPTS: Math.min(endPTS, timeRange.end(i))
                });
                break;
              } else if (startPTS < endTime && endPTS > startTime) {
                buffered.partial = true;
                buffered.time.push({
                  startPTS: Math.max(startPTS, timeRange.start(i)),
                  endPTS: Math.min(endPTS, timeRange.end(i))
                });
              } else if (endPTS <= startTime) {
                break;
              }
            }
            return buffered;
          };
          _proto.getPartialFragment = function getPartialFragment(time) {
            var bestFragment = null;
            var timePadding;
            var startTime;
            var endTime;
            var bestOverlap = 0;
            var bufferPadding = this.bufferPadding, fragments = this.fragments;
            Object.keys(fragments).forEach(function(key) {
              var fragmentEntity = fragments[key];
              if (!fragmentEntity) {
                return;
              }
              if (isPartial(fragmentEntity)) {
                startTime = fragmentEntity.body.start - bufferPadding;
                endTime = fragmentEntity.body.end + bufferPadding;
                if (time >= startTime && time <= endTime) {
                  timePadding = Math.min(time - startTime, endTime - time);
                  if (bestOverlap <= timePadding) {
                    bestFragment = fragmentEntity.body;
                    bestOverlap = timePadding;
                  }
                }
              }
            });
            return bestFragment;
          };
          _proto.getState = function getState(fragment) {
            var fragKey = getFragmentKey(fragment);
            var fragmentEntity = this.fragments[fragKey];
            if (fragmentEntity) {
              if (!fragmentEntity.buffered) {
                if (fragmentEntity.backtrack) {
                  return FragmentState.BACKTRACKED;
                }
                return FragmentState.APPENDING;
              } else if (isPartial(fragmentEntity)) {
                return FragmentState.PARTIAL;
              } else {
                return FragmentState.OK;
              }
            }
            return FragmentState.NOT_LOADED;
          };
          _proto.backtrack = function backtrack(frag, data) {
            var fragKey = getFragmentKey(frag);
            var fragmentEntity = this.fragments[fragKey];
            if (!fragmentEntity || fragmentEntity.backtrack) {
              return null;
            }
            var backtrack2 = fragmentEntity.backtrack = data ? data : fragmentEntity.loaded;
            fragmentEntity.loaded = null;
            return backtrack2;
          };
          _proto.getBacktrackData = function getBacktrackData(fragment) {
            var fragKey = getFragmentKey(fragment);
            var fragmentEntity = this.fragments[fragKey];
            if (fragmentEntity) {
              var _backtrack$payload;
              var backtrack = fragmentEntity.backtrack;
              if (backtrack !== null && backtrack !== void 0 && (_backtrack$payload = backtrack.payload) !== null && _backtrack$payload !== void 0 && _backtrack$payload.byteLength) {
                return backtrack;
              } else {
                this.removeFragment(fragment);
              }
            }
            return null;
          };
          _proto.isTimeBuffered = function isTimeBuffered(startPTS, endPTS, timeRange) {
            var startTime;
            var endTime;
            for (var i = 0; i < timeRange.length; i++) {
              startTime = timeRange.start(i) - this.bufferPadding;
              endTime = timeRange.end(i) + this.bufferPadding;
              if (startPTS >= startTime && endPTS <= endTime) {
                return true;
              }
              if (endPTS <= startTime) {
                return false;
              }
            }
            return false;
          };
          _proto.onFragLoaded = function onFragLoaded(event, data) {
            var frag = data.frag, part = data.part;
            if (frag.sn === "initSegment" || frag.bitrateTest || part) {
              return;
            }
            var fragKey = getFragmentKey(frag);
            this.fragments[fragKey] = {
              body: frag,
              loaded: data,
              backtrack: null,
              buffered: false,
              range: Object.create(null)
            };
          };
          _proto.onBufferAppended = function onBufferAppended(event, data) {
            var _this3 = this;
            var frag = data.frag, part = data.part, timeRanges = data.timeRanges;
            if (frag.type === _types_loader__WEBPACK_IMPORTED_MODULE_1__["PlaylistLevelType"].MAIN) {
              this.activeFragment = frag;
              if (part) {
                var activeParts = this.activeParts;
                if (!activeParts) {
                  this.activeParts = activeParts = [];
                }
                activeParts.push(part);
              } else {
                this.activeParts = null;
              }
            }
            this.timeRanges = timeRanges;
            Object.keys(timeRanges).forEach(function(elementaryStream) {
              var timeRange = timeRanges[elementaryStream];
              _this3.detectEvictedFragments(elementaryStream, timeRange);
              if (!part) {
                for (var i = 0; i < timeRange.length; i++) {
                  frag.appendedPTS = Math.max(timeRange.end(i), frag.appendedPTS || 0);
                }
              }
            });
          };
          _proto.onFragBuffered = function onFragBuffered(event, data) {
            this.detectPartialFragments(data);
          };
          _proto.hasFragment = function hasFragment(fragment) {
            var fragKey = getFragmentKey(fragment);
            return !!this.fragments[fragKey];
          };
          _proto.removeFragmentsInRange = function removeFragmentsInRange(start, end, playlistType) {
            var _this4 = this;
            Object.keys(this.fragments).forEach(function(key) {
              var fragmentEntity = _this4.fragments[key];
              if (!fragmentEntity) {
                return;
              }
              if (fragmentEntity.buffered) {
                var frag = fragmentEntity.body;
                if (frag.type === playlistType && frag.start < end && frag.end > start) {
                  _this4.removeFragment(frag);
                }
              }
            });
          };
          _proto.removeFragment = function removeFragment(fragment) {
            var fragKey = getFragmentKey(fragment);
            fragment.stats.loaded = 0;
            fragment.clearElementaryStreamInfo();
            delete this.fragments[fragKey];
          };
          _proto.removeAllFragments = function removeAllFragments() {
            this.fragments = Object.create(null);
            this.activeFragment = null;
            this.activeParts = null;
          };
          return FragmentTracker2;
        }();
        function isPartial(fragmentEntity) {
          var _fragmentEntity$range, _fragmentEntity$range2;
          return fragmentEntity.buffered && (((_fragmentEntity$range = fragmentEntity.range.video) === null || _fragmentEntity$range === void 0 ? void 0 : _fragmentEntity$range.partial) || ((_fragmentEntity$range2 = fragmentEntity.range.audio) === null || _fragmentEntity$range2 === void 0 ? void 0 : _fragmentEntity$range2.partial));
        }
        function getFragmentKey(fragment) {
          return fragment.type + "_" + fragment.level + "_" + fragment.urlId + "_" + fragment.sn;
        }
      },
      "./src/controller/gap-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "STALL_MINIMUM_DURATION_MS", function() {
          return STALL_MINIMUM_DURATION_MS;
        });
        __webpack_require__.d(__webpack_exports__, "MAX_START_GAP_JUMP", function() {
          return MAX_START_GAP_JUMP;
        });
        __webpack_require__.d(__webpack_exports__, "SKIP_BUFFER_HOLE_STEP_SECONDS", function() {
          return SKIP_BUFFER_HOLE_STEP_SECONDS;
        });
        __webpack_require__.d(__webpack_exports__, "SKIP_BUFFER_RANGE_START", function() {
          return SKIP_BUFFER_RANGE_START;
        });
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return GapController;
        });
        var _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/buffer-helper.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/errors.ts");
        var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/events.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/logger.ts");
        var STALL_MINIMUM_DURATION_MS = 250;
        var MAX_START_GAP_JUMP = 2;
        var SKIP_BUFFER_HOLE_STEP_SECONDS = 0.1;
        var SKIP_BUFFER_RANGE_START = 0.05;
        var GapController = /* @__PURE__ */ function() {
          function GapController2(config, media, fragmentTracker, hls2) {
            this.config = void 0;
            this.media = void 0;
            this.fragmentTracker = void 0;
            this.hls = void 0;
            this.nudgeRetry = 0;
            this.stallReported = false;
            this.stalled = null;
            this.moved = false;
            this.seeking = false;
            this.config = config;
            this.media = media;
            this.fragmentTracker = fragmentTracker;
            this.hls = hls2;
          }
          var _proto = GapController2.prototype;
          _proto.destroy = function destroy() {
            this.hls = this.fragmentTracker = this.media = null;
          };
          _proto.poll = function poll(lastCurrentTime) {
            var config = this.config, media = this.media, stalled = this.stalled;
            var currentTime = media.currentTime, seeking = media.seeking;
            var seeked = this.seeking && !seeking;
            var beginSeek = !this.seeking && seeking;
            this.seeking = seeking;
            if (currentTime !== lastCurrentTime) {
              this.moved = true;
              if (stalled !== null) {
                if (this.stallReported) {
                  var _stalledDuration = self.performance.now() - stalled;
                  _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("playback not stuck anymore @" + currentTime + ", after " + Math.round(_stalledDuration) + "ms");
                  this.stallReported = false;
                }
                this.stalled = null;
                this.nudgeRetry = 0;
              }
              return;
            }
            if (beginSeek || seeked) {
              this.stalled = null;
            }
            if (media.paused || media.ended || media.playbackRate === 0 || !_utils_buffer_helper__WEBPACK_IMPORTED_MODULE_0__["BufferHelper"].getBuffered(media).length) {
              return;
            }
            var bufferInfo = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_0__["BufferHelper"].bufferInfo(media, currentTime, 0);
            var isBuffered = bufferInfo.len > 0;
            var nextStart = bufferInfo.nextStart || 0;
            if (!isBuffered && !nextStart) {
              return;
            }
            if (seeking) {
              var hasEnoughBuffer = bufferInfo.len > MAX_START_GAP_JUMP;
              var noBufferGap = !nextStart || nextStart - currentTime > MAX_START_GAP_JUMP && !this.fragmentTracker.getPartialFragment(currentTime);
              if (hasEnoughBuffer || noBufferGap) {
                return;
              }
              this.moved = false;
            }
            if (!this.moved && this.stalled !== null) {
              var _level$details;
              var startJump = Math.max(nextStart, bufferInfo.start || 0) - currentTime;
              var level = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null;
              var isLive = level === null || level === void 0 ? void 0 : (_level$details = level.details) === null || _level$details === void 0 ? void 0 : _level$details.live;
              var maxStartGapJump = isLive ? level.details.targetduration * 2 : MAX_START_GAP_JUMP;
              if (startJump > 0 && startJump <= maxStartGapJump) {
                this._trySkipBufferHole(null);
                return;
              }
            }
            var tnow = self.performance.now();
            if (stalled === null) {
              this.stalled = tnow;
              return;
            }
            var stalledDuration = tnow - stalled;
            if (!seeking && stalledDuration >= STALL_MINIMUM_DURATION_MS) {
              this._reportStall(bufferInfo.len);
            }
            var bufferedWithHoles = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_0__["BufferHelper"].bufferInfo(media, currentTime, config.maxBufferHole);
            this._tryFixBufferStall(bufferedWithHoles, stalledDuration);
          };
          _proto._tryFixBufferStall = function _tryFixBufferStall(bufferInfo, stalledDurationMs) {
            var config = this.config, fragmentTracker = this.fragmentTracker, media = this.media;
            var currentTime = media.currentTime;
            var partial = fragmentTracker.getPartialFragment(currentTime);
            if (partial) {
              var targetTime = this._trySkipBufferHole(partial);
              if (targetTime) {
                return;
              }
            }
            if (bufferInfo.len > config.maxBufferHole && stalledDurationMs > config.highBufferWatchdogPeriod * 1e3) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Trying to nudge playhead over buffer-hole");
              this.stalled = null;
              this._tryNudgeBuffer();
            }
          };
          _proto._reportStall = function _reportStall(bufferLen) {
            var hls2 = this.hls, media = this.media, stallReported = this.stallReported;
            if (!stallReported) {
              this.stallReported = true;
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Playback stalling at @" + media.currentTime + " due to low buffer (buffer=" + bufferLen + ")");
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].MEDIA_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].BUFFER_STALLED_ERROR,
                fatal: false,
                buffer: bufferLen
              });
            }
          };
          _proto._trySkipBufferHole = function _trySkipBufferHole(partial) {
            var config = this.config, hls2 = this.hls, media = this.media;
            var currentTime = media.currentTime;
            var lastEndTime = 0;
            var buffered = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_0__["BufferHelper"].getBuffered(media);
            for (var i = 0; i < buffered.length; i++) {
              var startTime = buffered.start(i);
              if (currentTime + config.maxBufferHole >= lastEndTime && currentTime < startTime) {
                var targetTime = Math.max(startTime + SKIP_BUFFER_RANGE_START, media.currentTime + SKIP_BUFFER_HOLE_STEP_SECONDS);
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("skipping hole, adjusting currentTime from " + currentTime + " to " + targetTime);
                this.moved = true;
                this.stalled = null;
                media.currentTime = targetTime;
                if (partial) {
                  hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, {
                    type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].MEDIA_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].BUFFER_SEEK_OVER_HOLE,
                    fatal: false,
                    reason: "fragment loaded with buffer holes, seeking from " + currentTime + " to " + targetTime,
                    frag: partial
                  });
                }
                return targetTime;
              }
              lastEndTime = buffered.end(i);
            }
            return 0;
          };
          _proto._tryNudgeBuffer = function _tryNudgeBuffer() {
            var config = this.config, hls2 = this.hls, media = this.media;
            var currentTime = media.currentTime;
            var nudgeRetry = (this.nudgeRetry || 0) + 1;
            this.nudgeRetry = nudgeRetry;
            if (nudgeRetry < config.nudgeMaxRetry) {
              var targetTime = currentTime + nudgeRetry * config.nudgeOffset;
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Nudging 'currentTime' from " + currentTime + " to " + targetTime);
              media.currentTime = targetTime;
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].MEDIA_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].BUFFER_NUDGE_ON_STALL,
                fatal: false
              });
            } else {
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].error("Playhead still not moving while enough data buffered @" + currentTime + " after " + config.nudgeMaxRetry + " nudges");
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].MEDIA_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].BUFFER_STALLED_ERROR,
                fatal: true
              });
            }
          };
          return GapController2;
        }();
      },
      "./src/controller/id3-track-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/texttrack-utils.ts");
        var _demux_id3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/demux/id3.ts");
        var MIN_CUE_DURATION = 0.25;
        var ID3TrackController = /* @__PURE__ */ function() {
          function ID3TrackController2(hls2) {
            this.hls = void 0;
            this.id3Track = null;
            this.media = null;
            this.hls = hls2;
            this._registerListeners();
          }
          var _proto = ID3TrackController2.prototype;
          _proto.destroy = function destroy() {
            this._unregisterListeners();
          };
          _proto._registerListeners = function _registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FRAG_PARSING_METADATA, this.onFragParsingMetadata, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_FLUSHING, this.onBufferFlushing, this);
          };
          _proto._unregisterListeners = function _unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FRAG_PARSING_METADATA, this.onFragParsingMetadata, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_FLUSHING, this.onBufferFlushing, this);
          };
          _proto.onMediaAttached = function onMediaAttached(event, data) {
            this.media = data.media;
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            if (!this.id3Track) {
              return;
            }
            Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_1__["clearCurrentCues"])(this.id3Track);
            this.id3Track = null;
            this.media = null;
          };
          _proto.getID3Track = function getID3Track(textTracks) {
            if (!this.media) {
              return;
            }
            for (var i = 0; i < textTracks.length; i++) {
              var textTrack = textTracks[i];
              if (textTrack.kind === "metadata" && textTrack.label === "id3") {
                Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_1__["sendAddTrackEvent"])(textTrack, this.media);
                return textTrack;
              }
            }
            return this.media.addTextTrack("metadata", "id3");
          };
          _proto.onFragParsingMetadata = function onFragParsingMetadata(event, data) {
            if (!this.media) {
              return;
            }
            var fragment = data.frag;
            var samples = data.samples;
            if (!this.id3Track) {
              this.id3Track = this.getID3Track(this.media.textTracks);
              this.id3Track.mode = "hidden";
            }
            var Cue = self.WebKitDataCue || self.VTTCue || self.TextTrackCue;
            for (var i = 0; i < samples.length; i++) {
              var frames = _demux_id3__WEBPACK_IMPORTED_MODULE_2__["getID3Frames"](samples[i].data);
              if (frames) {
                var startTime = samples[i].pts;
                var endTime = i < samples.length - 1 ? samples[i + 1].pts : fragment.end;
                var timeDiff = endTime - startTime;
                if (timeDiff <= 0) {
                  endTime = startTime + MIN_CUE_DURATION;
                }
                for (var j = 0; j < frames.length; j++) {
                  var frame = frames[j];
                  if (!_demux_id3__WEBPACK_IMPORTED_MODULE_2__["isTimeStampFrame"](frame)) {
                    var cue = new Cue(startTime, endTime, "");
                    cue.value = frame;
                    this.id3Track.addCue(cue);
                  }
                }
              }
            }
          };
          _proto.onBufferFlushing = function onBufferFlushing(event, _ref) {
            var startOffset = _ref.startOffset, endOffset = _ref.endOffset, type = _ref.type;
            if (!type || type === "audio") {
              var id3Track = this.id3Track;
              if (id3Track) {
                Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_1__["removeCuesInRange"])(id3Track, startOffset, endOffset);
              }
            }
          };
          return ID3TrackController2;
        }();
        __webpack_exports__["default"] = ID3TrackController;
      },
      "./src/controller/latency-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return LatencyController;
        });
        var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/errors.ts");
        var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/events.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/logger.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var LatencyController = /* @__PURE__ */ function() {
          function LatencyController2(hls2) {
            var _this = this;
            this.hls = void 0;
            this.config = void 0;
            this.media = null;
            this.levelDetails = null;
            this.currentTime = 0;
            this.stallCount = 0;
            this._latency = null;
            this.timeupdateHandler = function() {
              return _this.timeupdate();
            };
            this.hls = hls2;
            this.config = hls2.config;
            this.registerListeners();
          }
          var _proto = LatencyController2.prototype;
          _proto.destroy = function destroy() {
            this.unregisterListeners();
            this.onMediaDetaching();
            this.levelDetails = null;
            this.hls = this.timeupdateHandler = null;
          };
          _proto.registerListeners = function registerListeners() {
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_UPDATED, this.onLevelUpdated, this);
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, this.onError, this);
          };
          _proto.unregisterListeners = function unregisterListeners() {
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_ATTACHED, this.onMediaAttached);
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_DETACHING, this.onMediaDetaching);
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADING, this.onManifestLoading);
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_UPDATED, this.onLevelUpdated);
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, this.onError);
          };
          _proto.onMediaAttached = function onMediaAttached(event, data) {
            this.media = data.media;
            this.media.addEventListener("timeupdate", this.timeupdateHandler);
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            if (this.media) {
              this.media.removeEventListener("timeupdate", this.timeupdateHandler);
              this.media = null;
            }
          };
          _proto.onManifestLoading = function onManifestLoading() {
            this.levelDetails = null;
            this._latency = null;
            this.stallCount = 0;
          };
          _proto.onLevelUpdated = function onLevelUpdated(event, _ref) {
            var details = _ref.details;
            this.levelDetails = details;
            if (details.advanced) {
              this.timeupdate();
            }
            if (!details.live && this.media) {
              this.media.removeEventListener("timeupdate", this.timeupdateHandler);
            }
          };
          _proto.onError = function onError(event, data) {
            if (data.details !== _errors__WEBPACK_IMPORTED_MODULE_0__["ErrorDetails"].BUFFER_STALLED_ERROR) {
              return;
            }
            this.stallCount++;
            _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("[playback-rate-controller]: Stall detected, adjusting target latency");
          };
          _proto.timeupdate = function timeupdate() {
            var media = this.media, levelDetails = this.levelDetails;
            if (!media || !levelDetails) {
              return;
            }
            this.currentTime = media.currentTime;
            var latency = this.computeLatency();
            if (latency === null) {
              return;
            }
            this._latency = latency;
            var _this$config = this.config, lowLatencyMode = _this$config.lowLatencyMode, maxLiveSyncPlaybackRate = _this$config.maxLiveSyncPlaybackRate;
            if (!lowLatencyMode || maxLiveSyncPlaybackRate === 1) {
              return;
            }
            var targetLatency = this.targetLatency;
            if (targetLatency === null) {
              return;
            }
            var distanceFromTarget = latency - targetLatency;
            var liveMinLatencyDuration = Math.min(this.maxLatency, targetLatency + levelDetails.targetduration);
            var inLiveRange = distanceFromTarget < liveMinLatencyDuration;
            if (levelDetails.live && inLiveRange && distanceFromTarget > 0.05 && this.forwardBufferLength > 1) {
              var max = Math.min(2, Math.max(1, maxLiveSyncPlaybackRate));
              var rate = Math.round(2 / (1 + Math.exp(-0.75 * distanceFromTarget - this.edgeStalled)) * 20) / 20;
              media.playbackRate = Math.min(max, Math.max(1, rate));
            } else if (media.playbackRate !== 1 && media.playbackRate !== 0) {
              media.playbackRate = 1;
            }
          };
          _proto.estimateLiveEdge = function estimateLiveEdge() {
            var levelDetails = this.levelDetails;
            if (levelDetails === null) {
              return null;
            }
            return levelDetails.edge + levelDetails.age;
          };
          _proto.computeLatency = function computeLatency() {
            var liveEdge = this.estimateLiveEdge();
            if (liveEdge === null) {
              return null;
            }
            return liveEdge - this.currentTime;
          };
          _createClass(LatencyController2, [{
            key: "latency",
            get: function get() {
              return this._latency || 0;
            }
          }, {
            key: "maxLatency",
            get: function get() {
              var config = this.config, levelDetails = this.levelDetails;
              if (config.liveMaxLatencyDuration !== void 0) {
                return config.liveMaxLatencyDuration;
              }
              return levelDetails ? config.liveMaxLatencyDurationCount * levelDetails.targetduration : 0;
            }
          }, {
            key: "targetLatency",
            get: function get() {
              var levelDetails = this.levelDetails;
              if (levelDetails === null) {
                return null;
              }
              var holdBack = levelDetails.holdBack, partHoldBack = levelDetails.partHoldBack, targetduration = levelDetails.targetduration;
              var _this$config2 = this.config, liveSyncDuration = _this$config2.liveSyncDuration, liveSyncDurationCount = _this$config2.liveSyncDurationCount, lowLatencyMode = _this$config2.lowLatencyMode;
              var userConfig = this.hls.userConfig;
              var targetLatency = lowLatencyMode ? partHoldBack || holdBack : holdBack;
              if (userConfig.liveSyncDuration || userConfig.liveSyncDurationCount || targetLatency === 0) {
                targetLatency = liveSyncDuration !== void 0 ? liveSyncDuration : liveSyncDurationCount * targetduration;
              }
              var maxLiveSyncOnStallIncrease = targetduration;
              var liveSyncOnStallIncrease = 1;
              return targetLatency + Math.min(this.stallCount * liveSyncOnStallIncrease, maxLiveSyncOnStallIncrease);
            }
          }, {
            key: "liveSyncPosition",
            get: function get() {
              var liveEdge = this.estimateLiveEdge();
              var targetLatency = this.targetLatency;
              var levelDetails = this.levelDetails;
              if (liveEdge === null || targetLatency === null || levelDetails === null) {
                return null;
              }
              var edge = levelDetails.edge;
              var syncPosition = liveEdge - targetLatency - this.edgeStalled;
              var min = edge - levelDetails.totalduration;
              var max = edge - (this.config.lowLatencyMode && levelDetails.partTarget || levelDetails.targetduration);
              return Math.min(Math.max(min, syncPosition), max);
            }
          }, {
            key: "drift",
            get: function get() {
              var levelDetails = this.levelDetails;
              if (levelDetails === null) {
                return 1;
              }
              return levelDetails.drift;
            }
          }, {
            key: "edgeStalled",
            get: function get() {
              var levelDetails = this.levelDetails;
              if (levelDetails === null) {
                return 0;
              }
              var maxLevelUpdateAge = (this.config.lowLatencyMode && levelDetails.partTarget || levelDetails.targetduration) * 3;
              return Math.max(levelDetails.age - maxLevelUpdateAge, 0);
            }
          }, {
            key: "forwardBufferLength",
            get: function get() {
              var media = this.media, levelDetails = this.levelDetails;
              if (!media || !levelDetails) {
                return 0;
              }
              var bufferedRanges = media.buffered.length;
              return bufferedRanges ? media.buffered.end(bufferedRanges - 1) : levelDetails.edge - this.currentTime;
            }
          }]);
          return LatencyController2;
        }();
      },
      "./src/controller/level-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return LevelController;
        });
        var _types_level__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/types/level.ts");
        var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/errors.ts");
        var _utils_codecs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/codecs.ts");
        var _level_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/controller/level-helper.ts");
        var _base_playlist_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/controller/base-playlist-controller.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/types/loader.ts");
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var chromeOrFirefox = /chrome|firefox/.test(navigator.userAgent.toLowerCase());
        var LevelController = /* @__PURE__ */ function(_BasePlaylistControll) {
          _inheritsLoose(LevelController2, _BasePlaylistControll);
          function LevelController2(hls2) {
            var _this;
            _this = _BasePlaylistControll.call(this, hls2, "[level-controller]") || this;
            _this._levels = [];
            _this._firstLevel = -1;
            _this._startLevel = void 0;
            _this.currentLevelIndex = -1;
            _this.manualLevelIndex = -1;
            _this.onParsedComplete = void 0;
            _this._registerListeners();
            return _this;
          }
          var _proto = LevelController2.prototype;
          _proto._registerListeners = function _registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADED, this.onManifestLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_LOADED, this.onFragLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, this.onError, this);
          };
          _proto._unregisterListeners = function _unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADED, this.onManifestLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_LOADED, this.onFragLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, this.onError, this);
          };
          _proto.destroy = function destroy() {
            this._unregisterListeners();
            this.manualLevelIndex = -1;
            this._levels.length = 0;
            _BasePlaylistControll.prototype.destroy.call(this);
          };
          _proto.startLoad = function startLoad() {
            var levels = this._levels;
            levels.forEach(function(level) {
              level.loadError = 0;
            });
            _BasePlaylistControll.prototype.startLoad.call(this);
          };
          _proto.onManifestLoaded = function onManifestLoaded(event, data) {
            var levels = [];
            var audioTracks = [];
            var subtitleTracks = [];
            var bitrateStart;
            var levelSet = {};
            var levelFromSet;
            var resolutionFound = false;
            var videoCodecFound = false;
            var audioCodecFound = false;
            data.levels.forEach(function(levelParsed) {
              var attributes = levelParsed.attrs;
              resolutionFound = resolutionFound || !!(levelParsed.width && levelParsed.height);
              videoCodecFound = videoCodecFound || !!levelParsed.videoCodec;
              audioCodecFound = audioCodecFound || !!levelParsed.audioCodec;
              if (chromeOrFirefox && levelParsed.audioCodec && levelParsed.audioCodec.indexOf("mp4a.40.34") !== -1) {
                levelParsed.audioCodec = void 0;
              }
              var levelKey = levelParsed.bitrate + "-" + levelParsed.attrs.RESOLUTION + "-" + levelParsed.attrs.CODECS;
              levelFromSet = levelSet[levelKey];
              if (!levelFromSet) {
                levelFromSet = new _types_level__WEBPACK_IMPORTED_MODULE_0__["Level"](levelParsed);
                levelSet[levelKey] = levelFromSet;
                levels.push(levelFromSet);
              } else {
                levelFromSet.url.push(levelParsed.url);
              }
              if (attributes) {
                if (attributes.AUDIO) {
                  Object(_level_helper__WEBPACK_IMPORTED_MODULE_4__["addGroupId"])(levelFromSet, "audio", attributes.AUDIO);
                }
                if (attributes.SUBTITLES) {
                  Object(_level_helper__WEBPACK_IMPORTED_MODULE_4__["addGroupId"])(levelFromSet, "text", attributes.SUBTITLES);
                }
              }
            });
            if ((resolutionFound || videoCodecFound) && audioCodecFound) {
              levels = levels.filter(function(_ref) {
                var videoCodec = _ref.videoCodec, width = _ref.width, height = _ref.height;
                return !!videoCodec || !!(width && height);
              });
            }
            levels = levels.filter(function(_ref2) {
              var audioCodec = _ref2.audioCodec, videoCodec = _ref2.videoCodec;
              return (!audioCodec || Object(_utils_codecs__WEBPACK_IMPORTED_MODULE_3__["isCodecSupportedInMp4"])(audioCodec, "audio")) && (!videoCodec || Object(_utils_codecs__WEBPACK_IMPORTED_MODULE_3__["isCodecSupportedInMp4"])(videoCodec, "video"));
            });
            if (data.audioTracks) {
              audioTracks = data.audioTracks.filter(function(track) {
                return !track.audioCodec || Object(_utils_codecs__WEBPACK_IMPORTED_MODULE_3__["isCodecSupportedInMp4"])(track.audioCodec, "audio");
              });
              Object(_level_helper__WEBPACK_IMPORTED_MODULE_4__["assignTrackIdsByGroup"])(audioTracks);
            }
            if (data.subtitles) {
              subtitleTracks = data.subtitles;
              Object(_level_helper__WEBPACK_IMPORTED_MODULE_4__["assignTrackIdsByGroup"])(subtitleTracks);
            }
            if (levels.length > 0) {
              bitrateStart = levels[0].bitrate;
              levels.sort(function(a, b) {
                return a.bitrate - b.bitrate;
              });
              this._levels = levels;
              for (var i = 0; i < levels.length; i++) {
                if (levels[i].bitrate === bitrateStart) {
                  this._firstLevel = i;
                  this.log("manifest loaded, " + levels.length + " level(s) found, first bitrate: " + bitrateStart);
                  break;
                }
              }
              var audioOnly = audioCodecFound && !videoCodecFound;
              var edata = {
                levels,
                audioTracks,
                subtitleTracks,
                firstLevel: this._firstLevel,
                stats: data.stats,
                audio: audioCodecFound,
                video: videoCodecFound,
                altAudio: !audioOnly && audioTracks.some(function(t) {
                  return !!t.url;
                })
              };
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_PARSED, edata);
              if (this.hls.config.autoStartLoad || this.hls.forceStartLoad) {
                this.hls.startLoad(this.hls.config.startPosition);
              }
            } else {
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].MEDIA_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                fatal: true,
                url: data.url,
                reason: "no level with compatible codecs found in manifest"
              });
            }
          };
          _proto.onError = function onError(event, data) {
            _BasePlaylistControll.prototype.onError.call(this, event, data);
            if (data.fatal) {
              return;
            }
            var context = data.context;
            var level = this._levels[this.currentLevelIndex];
            if (context && (context.type === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].AUDIO_TRACK && level.audioGroupIds && context.groupId === level.audioGroupIds[level.urlId] || context.type === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].SUBTITLE_TRACK && level.textGroupIds && context.groupId === level.textGroupIds[level.urlId])) {
              this.redundantFailover(this.currentLevelIndex);
              return;
            }
            var levelError = false;
            var levelSwitch = true;
            var levelIndex;
            switch (data.details) {
              case _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].FRAG_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].FRAG_LOAD_TIMEOUT:
              case _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].KEY_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].KEY_LOAD_TIMEOUT:
                if (data.frag) {
                  var _level = this._levels[data.frag.level];
                  if (_level) {
                    _level.fragmentError++;
                    if (_level.fragmentError > this.hls.config.fragLoadingMaxRetry) {
                      levelIndex = data.frag.level;
                    }
                  } else {
                    levelIndex = data.frag.level;
                  }
                }
                break;
              case _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].LEVEL_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].LEVEL_LOAD_TIMEOUT:
                if (context) {
                  if (context.deliveryDirectives) {
                    levelSwitch = false;
                  }
                  levelIndex = context.level;
                }
                levelError = true;
                break;
              case _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].REMUX_ALLOC_ERROR:
                levelIndex = data.level;
                levelError = true;
                break;
            }
            if (levelIndex !== void 0) {
              this.recoverLevel(data, levelIndex, levelError, levelSwitch);
            }
          };
          _proto.recoverLevel = function recoverLevel(errorEvent, levelIndex, levelError, levelSwitch) {
            var errorDetails = errorEvent.details;
            var level = this._levels[levelIndex];
            level.loadError++;
            if (levelError) {
              var retrying = this.retryLoadingOrFail(errorEvent);
              if (retrying) {
                errorEvent.levelRetry = true;
              } else {
                this.currentLevelIndex = -1;
                return;
              }
            }
            if (levelSwitch) {
              var redundantLevels = level.url.length;
              if (redundantLevels > 1 && level.loadError < redundantLevels) {
                errorEvent.levelRetry = true;
                this.redundantFailover(levelIndex);
              } else if (this.manualLevelIndex === -1) {
                var nextLevel = levelIndex === 0 ? this._levels.length - 1 : levelIndex - 1;
                if (this.currentLevelIndex !== nextLevel && this._levels[nextLevel].loadError === 0) {
                  this.warn(errorDetails + ": switch to " + nextLevel);
                  errorEvent.levelRetry = true;
                  this.hls.nextAutoLevel = nextLevel;
                }
              }
            }
          };
          _proto.redundantFailover = function redundantFailover(levelIndex) {
            var level = this._levels[levelIndex];
            var redundantLevels = level.url.length;
            if (redundantLevels > 1) {
              var newUrlId = (level.urlId + 1) % redundantLevels;
              this.warn("Switching to redundant URL-id " + newUrlId);
              this._levels.forEach(function(level2) {
                level2.urlId = newUrlId;
              });
              this.level = levelIndex;
            }
          };
          _proto.onFragLoaded = function onFragLoaded(event, _ref3) {
            var frag = _ref3.frag;
            if (frag !== void 0 && frag.type === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN) {
              var level = this._levels[frag.level];
              if (level !== void 0) {
                level.fragmentError = 0;
                level.loadError = 0;
              }
            }
          };
          _proto.onLevelLoaded = function onLevelLoaded(event, data) {
            var _data$deliveryDirecti2;
            var level = data.level, details = data.details;
            var curLevel = this._levels[level];
            if (!curLevel) {
              var _data$deliveryDirecti;
              this.warn("Invalid level index " + level);
              if ((_data$deliveryDirecti = data.deliveryDirectives) !== null && _data$deliveryDirecti !== void 0 && _data$deliveryDirecti.skip) {
                details.deltaUpdateFailed = true;
              }
              return;
            }
            if (level === this.currentLevelIndex) {
              if (curLevel.fragmentError === 0) {
                curLevel.loadError = 0;
                this.retryCount = 0;
              }
              this.playlistLoaded(level, data, curLevel.details);
            } else if ((_data$deliveryDirecti2 = data.deliveryDirectives) !== null && _data$deliveryDirecti2 !== void 0 && _data$deliveryDirecti2.skip) {
              details.deltaUpdateFailed = true;
            }
          };
          _proto.onAudioTrackSwitched = function onAudioTrackSwitched(event, data) {
            var currentLevel = this.hls.levels[this.currentLevelIndex];
            if (!currentLevel) {
              return;
            }
            if (currentLevel.audioGroupIds) {
              var urlId = -1;
              var audioGroupId = this.hls.audioTracks[data.id].groupId;
              for (var i = 0; i < currentLevel.audioGroupIds.length; i++) {
                if (currentLevel.audioGroupIds[i] === audioGroupId) {
                  urlId = i;
                  break;
                }
              }
              if (urlId !== currentLevel.urlId) {
                currentLevel.urlId = urlId;
                this.startLoad();
              }
            }
          };
          _proto.loadPlaylist = function loadPlaylist(hlsUrlParameters) {
            var level = this.currentLevelIndex;
            var currentLevel = this._levels[level];
            if (this.canLoad && currentLevel && currentLevel.url.length > 0) {
              var id = currentLevel.urlId;
              var url = currentLevel.url[id];
              if (hlsUrlParameters) {
                try {
                  url = hlsUrlParameters.addDirectives(url);
                } catch (error) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + error);
                }
              }
              this.log("Attempt loading level index " + level + (hlsUrlParameters ? " at sn " + hlsUrlParameters.msn + " part " + hlsUrlParameters.part : "") + " with URL-id " + id + " " + url);
              this.clearTimer();
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_LOADING, {
                url,
                level,
                id,
                deliveryDirectives: hlsUrlParameters || null
              });
            }
          };
          _proto.removeLevel = function removeLevel(levelIndex, urlId) {
            var filterLevelAndGroupByIdIndex = function filterLevelAndGroupByIdIndex2(url, id) {
              return id !== urlId;
            };
            var levels = this._levels.filter(function(level, index) {
              if (index !== levelIndex) {
                return true;
              }
              if (level.url.length > 1 && urlId !== void 0) {
                level.url = level.url.filter(filterLevelAndGroupByIdIndex);
                if (level.audioGroupIds) {
                  level.audioGroupIds = level.audioGroupIds.filter(filterLevelAndGroupByIdIndex);
                }
                if (level.textGroupIds) {
                  level.textGroupIds = level.textGroupIds.filter(filterLevelAndGroupByIdIndex);
                }
                level.urlId = 0;
                return true;
              }
              return false;
            }).map(function(level, index) {
              var details = level.details;
              if (details !== null && details !== void 0 && details.fragments) {
                details.fragments.forEach(function(fragment) {
                  fragment.level = index;
                });
              }
              return level;
            });
            this._levels = levels;
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVELS_UPDATED, {
              levels
            });
          };
          _createClass(LevelController2, [{
            key: "levels",
            get: function get() {
              if (this._levels.length === 0) {
                return null;
              }
              return this._levels;
            }
          }, {
            key: "level",
            get: function get() {
              return this.currentLevelIndex;
            },
            set: function set(newLevel) {
              var _levels$newLevel;
              var levels = this._levels;
              if (levels.length === 0) {
                return;
              }
              if (this.currentLevelIndex === newLevel && (_levels$newLevel = levels[newLevel]) !== null && _levels$newLevel !== void 0 && _levels$newLevel.details) {
                return;
              }
              if (newLevel < 0 || newLevel >= levels.length) {
                var fatal = newLevel < 0;
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, {
                  type: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].OTHER_ERROR,
                  details: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].LEVEL_SWITCH_ERROR,
                  level: newLevel,
                  fatal,
                  reason: "invalid level idx"
                });
                if (fatal) {
                  return;
                }
                newLevel = Math.min(newLevel, levels.length - 1);
              }
              this.clearTimer();
              var lastLevelIndex = this.currentLevelIndex;
              var lastLevel = levels[lastLevelIndex];
              var level = levels[newLevel];
              this.log("switching to level " + newLevel + " from " + lastLevelIndex);
              this.currentLevelIndex = newLevel;
              var levelSwitchingData = _extends({}, level, {
                level: newLevel,
                maxBitrate: level.maxBitrate,
                uri: level.uri,
                urlId: level.urlId
              });
              delete levelSwitchingData._urlId;
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_SWITCHING, levelSwitchingData);
              var levelDetails = level.details;
              if (!levelDetails || levelDetails.live) {
                var hlsUrlParameters = this.switchParams(level.uri, lastLevel === null || lastLevel === void 0 ? void 0 : lastLevel.details);
                this.loadPlaylist(hlsUrlParameters);
              }
            }
          }, {
            key: "manualLevel",
            get: function get() {
              return this.manualLevelIndex;
            },
            set: function set(newLevel) {
              this.manualLevelIndex = newLevel;
              if (this._startLevel === void 0) {
                this._startLevel = newLevel;
              }
              if (newLevel !== -1) {
                this.level = newLevel;
              }
            }
          }, {
            key: "firstLevel",
            get: function get() {
              return this._firstLevel;
            },
            set: function set(newLevel) {
              this._firstLevel = newLevel;
            }
          }, {
            key: "startLevel",
            get: function get() {
              if (this._startLevel === void 0) {
                var configStartLevel = this.hls.config.startLevel;
                if (configStartLevel !== void 0) {
                  return configStartLevel;
                } else {
                  return this._firstLevel;
                }
              } else {
                return this._startLevel;
              }
            },
            set: function set(newLevel) {
              this._startLevel = newLevel;
            }
          }, {
            key: "nextLoadLevel",
            get: function get() {
              if (this.manualLevelIndex !== -1) {
                return this.manualLevelIndex;
              } else {
                return this.hls.nextAutoLevel;
              }
            },
            set: function set(nextLevel) {
              this.level = nextLevel;
              if (this.manualLevelIndex === -1) {
                this.hls.nextAutoLevel = nextLevel;
              }
            }
          }]);
          return LevelController2;
        }(_base_playlist_controller__WEBPACK_IMPORTED_MODULE_5__["default"]);
      },
      "./src/controller/level-helper.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "addGroupId", function() {
          return addGroupId;
        });
        __webpack_require__.d(__webpack_exports__, "assignTrackIdsByGroup", function() {
          return assignTrackIdsByGroup;
        });
        __webpack_require__.d(__webpack_exports__, "updatePTS", function() {
          return updatePTS;
        });
        __webpack_require__.d(__webpack_exports__, "updateFragPTSDTS", function() {
          return updateFragPTSDTS;
        });
        __webpack_require__.d(__webpack_exports__, "mergeDetails", function() {
          return mergeDetails;
        });
        __webpack_require__.d(__webpack_exports__, "mapPartIntersection", function() {
          return mapPartIntersection;
        });
        __webpack_require__.d(__webpack_exports__, "mapFragmentIntersection", function() {
          return mapFragmentIntersection;
        });
        __webpack_require__.d(__webpack_exports__, "adjustSliding", function() {
          return adjustSliding;
        });
        __webpack_require__.d(__webpack_exports__, "addSliding", function() {
          return addSliding;
        });
        __webpack_require__.d(__webpack_exports__, "computeReloadInterval", function() {
          return computeReloadInterval;
        });
        __webpack_require__.d(__webpack_exports__, "getFragmentWithSN", function() {
          return getFragmentWithSN;
        });
        __webpack_require__.d(__webpack_exports__, "getPartWith", function() {
          return getPartWith;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/logger.ts");
        function addGroupId(level, type, id) {
          switch (type) {
            case "audio":
              if (!level.audioGroupIds) {
                level.audioGroupIds = [];
              }
              level.audioGroupIds.push(id);
              break;
            case "text":
              if (!level.textGroupIds) {
                level.textGroupIds = [];
              }
              level.textGroupIds.push(id);
              break;
          }
        }
        function assignTrackIdsByGroup(tracks) {
          var groups = {};
          tracks.forEach(function(track) {
            var groupId = track.groupId || "";
            track.id = groups[groupId] = groups[groupId] || 0;
            groups[groupId]++;
          });
        }
        function updatePTS(fragments, fromIdx, toIdx) {
          var fragFrom = fragments[fromIdx];
          var fragTo = fragments[toIdx];
          updateFromToPTS(fragFrom, fragTo);
        }
        function updateFromToPTS(fragFrom, fragTo) {
          var fragToPTS = fragTo.startPTS;
          if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(fragToPTS)) {
            var duration = 0;
            var frag;
            if (fragTo.sn > fragFrom.sn) {
              duration = fragToPTS - fragFrom.start;
              frag = fragFrom;
            } else {
              duration = fragFrom.start - fragToPTS;
              frag = fragTo;
            }
            if (frag.duration !== duration) {
              frag.duration = duration;
            }
          } else if (fragTo.sn > fragFrom.sn) {
            var contiguous = fragFrom.cc === fragTo.cc;
            if (contiguous && fragFrom.minEndPTS) {
              fragTo.start = fragFrom.start + (fragFrom.minEndPTS - fragFrom.start);
            } else {
              fragTo.start = fragFrom.start + fragFrom.duration;
            }
          } else {
            fragTo.start = Math.max(fragFrom.start - fragTo.duration, 0);
          }
        }
        function updateFragPTSDTS(details, frag, startPTS, endPTS, startDTS, endDTS) {
          var parsedMediaDuration = endPTS - startPTS;
          if (parsedMediaDuration <= 0) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("Fragment should have a positive duration", frag);
            endPTS = startPTS + frag.duration;
            endDTS = startDTS + frag.duration;
          }
          var maxStartPTS = startPTS;
          var minEndPTS = endPTS;
          var fragStartPts = frag.startPTS;
          var fragEndPts = frag.endPTS;
          if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(fragStartPts)) {
            var deltaPTS = Math.abs(fragStartPts - startPTS);
            if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(frag.deltaPTS)) {
              frag.deltaPTS = deltaPTS;
            } else {
              frag.deltaPTS = Math.max(deltaPTS, frag.deltaPTS);
            }
            maxStartPTS = Math.max(startPTS, fragStartPts);
            startPTS = Math.min(startPTS, fragStartPts);
            startDTS = Math.min(startDTS, frag.startDTS);
            minEndPTS = Math.min(endPTS, fragEndPts);
            endPTS = Math.max(endPTS, fragEndPts);
            endDTS = Math.max(endDTS, frag.endDTS);
          }
          frag.duration = endPTS - startPTS;
          var drift = startPTS - frag.start;
          frag.appendedPTS = endPTS;
          frag.start = frag.startPTS = startPTS;
          frag.maxStartPTS = maxStartPTS;
          frag.startDTS = startDTS;
          frag.endPTS = endPTS;
          frag.minEndPTS = minEndPTS;
          frag.endDTS = endDTS;
          var sn = frag.sn;
          if (!details || sn < details.startSN || sn > details.endSN) {
            return 0;
          }
          var i;
          var fragIdx = sn - details.startSN;
          var fragments = details.fragments;
          fragments[fragIdx] = frag;
          for (i = fragIdx; i > 0; i--) {
            updateFromToPTS(fragments[i], fragments[i - 1]);
          }
          for (i = fragIdx; i < fragments.length - 1; i++) {
            updateFromToPTS(fragments[i], fragments[i + 1]);
          }
          if (details.fragmentHint) {
            updateFromToPTS(fragments[fragments.length - 1], details.fragmentHint);
          }
          details.PTSKnown = details.alignedSliding = true;
          return drift;
        }
        function mergeDetails(oldDetails, newDetails) {
          var currentInitSegment = null;
          var oldFragments = oldDetails.fragments;
          for (var i = oldFragments.length - 1; i >= 0; i--) {
            var oldInit = oldFragments[i].initSegment;
            if (oldInit) {
              currentInitSegment = oldInit;
              break;
            }
          }
          if (oldDetails.fragmentHint) {
            delete oldDetails.fragmentHint.endPTS;
          }
          var ccOffset = 0;
          var PTSFrag;
          mapFragmentIntersection(oldDetails, newDetails, function(oldFrag, newFrag) {
            var _currentInitSegment;
            if (oldFrag.relurl) {
              ccOffset = oldFrag.cc - newFrag.cc;
            }
            if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(oldFrag.startPTS) && Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(oldFrag.endPTS)) {
              newFrag.start = newFrag.startPTS = oldFrag.startPTS;
              newFrag.startDTS = oldFrag.startDTS;
              newFrag.appendedPTS = oldFrag.appendedPTS;
              newFrag.maxStartPTS = oldFrag.maxStartPTS;
              newFrag.endPTS = oldFrag.endPTS;
              newFrag.endDTS = oldFrag.endDTS;
              newFrag.minEndPTS = oldFrag.minEndPTS;
              newFrag.duration = oldFrag.endPTS - oldFrag.startPTS;
              if (newFrag.duration) {
                PTSFrag = newFrag;
              }
              newDetails.PTSKnown = newDetails.alignedSliding = true;
            }
            newFrag.elementaryStreams = oldFrag.elementaryStreams;
            newFrag.loader = oldFrag.loader;
            newFrag.stats = oldFrag.stats;
            newFrag.urlId = oldFrag.urlId;
            if (oldFrag.initSegment) {
              newFrag.initSegment = oldFrag.initSegment;
              currentInitSegment = oldFrag.initSegment;
            } else if (!newFrag.initSegment || newFrag.initSegment.relurl == ((_currentInitSegment = currentInitSegment) === null || _currentInitSegment === void 0 ? void 0 : _currentInitSegment.relurl)) {
              newFrag.initSegment = currentInitSegment;
            }
          });
          if (newDetails.skippedSegments) {
            newDetails.deltaUpdateFailed = newDetails.fragments.some(function(frag) {
              return !frag;
            });
            if (newDetails.deltaUpdateFailed) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
              for (var _i = newDetails.skippedSegments; _i--; ) {
                newDetails.fragments.shift();
              }
              newDetails.startSN = newDetails.fragments[0].sn;
              newDetails.startCC = newDetails.fragments[0].cc;
            }
          }
          var newFragments = newDetails.fragments;
          if (ccOffset) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].warn("discontinuity sliding from playlist, take drift into account");
            for (var _i2 = 0; _i2 < newFragments.length; _i2++) {
              newFragments[_i2].cc += ccOffset;
            }
          }
          if (newDetails.skippedSegments) {
            newDetails.startCC = newDetails.fragments[0].cc;
          }
          mapPartIntersection(oldDetails.partList, newDetails.partList, function(oldPart, newPart) {
            newPart.elementaryStreams = oldPart.elementaryStreams;
            newPart.stats = oldPart.stats;
          });
          if (PTSFrag) {
            updateFragPTSDTS(newDetails, PTSFrag, PTSFrag.startPTS, PTSFrag.endPTS, PTSFrag.startDTS, PTSFrag.endDTS);
          } else {
            adjustSliding(oldDetails, newDetails);
          }
          if (newFragments.length) {
            newDetails.totalduration = newDetails.edge - newFragments[0].start;
          }
          newDetails.driftStartTime = oldDetails.driftStartTime;
          newDetails.driftStart = oldDetails.driftStart;
          var advancedDateTime = newDetails.advancedDateTime;
          if (newDetails.advanced && advancedDateTime) {
            var edge = newDetails.edge;
            if (!newDetails.driftStart) {
              newDetails.driftStartTime = advancedDateTime;
              newDetails.driftStart = edge;
            }
            newDetails.driftEndTime = advancedDateTime;
            newDetails.driftEnd = edge;
          } else {
            newDetails.driftEndTime = oldDetails.driftEndTime;
            newDetails.driftEnd = oldDetails.driftEnd;
            newDetails.advancedDateTime = oldDetails.advancedDateTime;
          }
        }
        function mapPartIntersection(oldParts, newParts, intersectionFn) {
          if (oldParts && newParts) {
            var delta = 0;
            for (var i = 0, len = oldParts.length; i <= len; i++) {
              var _oldPart = oldParts[i];
              var _newPart = newParts[i + delta];
              if (_oldPart && _newPart && _oldPart.index === _newPart.index && _oldPart.fragment.sn === _newPart.fragment.sn) {
                intersectionFn(_oldPart, _newPart);
              } else {
                delta--;
              }
            }
          }
        }
        function mapFragmentIntersection(oldDetails, newDetails, intersectionFn) {
          var skippedSegments = newDetails.skippedSegments;
          var start = Math.max(oldDetails.startSN, newDetails.startSN) - newDetails.startSN;
          var end = (oldDetails.fragmentHint ? 1 : 0) + (skippedSegments ? newDetails.endSN : Math.min(oldDetails.endSN, newDetails.endSN)) - newDetails.startSN;
          var delta = newDetails.startSN - oldDetails.startSN;
          var newFrags = newDetails.fragmentHint ? newDetails.fragments.concat(newDetails.fragmentHint) : newDetails.fragments;
          var oldFrags = oldDetails.fragmentHint ? oldDetails.fragments.concat(oldDetails.fragmentHint) : oldDetails.fragments;
          for (var i = start; i <= end; i++) {
            var _oldFrag = oldFrags[delta + i];
            var _newFrag = newFrags[i];
            if (skippedSegments && !_newFrag && i < skippedSegments) {
              _newFrag = newDetails.fragments[i] = _oldFrag;
            }
            if (_oldFrag && _newFrag) {
              intersectionFn(_oldFrag, _newFrag);
            }
          }
        }
        function adjustSliding(oldDetails, newDetails) {
          var delta = newDetails.startSN + newDetails.skippedSegments - oldDetails.startSN;
          var oldFragments = oldDetails.fragments;
          if (delta < 0 || delta >= oldFragments.length) {
            return;
          }
          addSliding(newDetails, oldFragments[delta].start);
        }
        function addSliding(details, start) {
          if (start) {
            var fragments = details.fragments;
            for (var i = details.skippedSegments; i < fragments.length; i++) {
              fragments[i].start += start;
            }
            if (details.fragmentHint) {
              details.fragmentHint.start += start;
            }
          }
        }
        function computeReloadInterval(newDetails, stats) {
          var reloadInterval = 1e3 * newDetails.levelTargetDuration;
          var reloadIntervalAfterMiss = reloadInterval / 2;
          var timeSinceLastModified = newDetails.age;
          var useLastModified = timeSinceLastModified > 0 && timeSinceLastModified < reloadInterval * 3;
          var roundTrip = stats.loading.end - stats.loading.start;
          var estimatedTimeUntilUpdate;
          var availabilityDelay = newDetails.availabilityDelay;
          if (newDetails.updated === false) {
            if (useLastModified) {
              var minRetry = 333 * newDetails.misses;
              estimatedTimeUntilUpdate = Math.max(Math.min(reloadIntervalAfterMiss, roundTrip * 2), minRetry);
              newDetails.availabilityDelay = (newDetails.availabilityDelay || 0) + estimatedTimeUntilUpdate;
            } else {
              estimatedTimeUntilUpdate = reloadIntervalAfterMiss;
            }
          } else if (useLastModified) {
            availabilityDelay = Math.min(availabilityDelay || reloadInterval / 2, timeSinceLastModified);
            newDetails.availabilityDelay = availabilityDelay;
            estimatedTimeUntilUpdate = availabilityDelay + reloadInterval - timeSinceLastModified;
          } else {
            estimatedTimeUntilUpdate = reloadInterval - roundTrip;
          }
          return Math.round(estimatedTimeUntilUpdate);
        }
        function getFragmentWithSN(level, sn, fragCurrent) {
          if (!level || !level.details) {
            return null;
          }
          var levelDetails = level.details;
          var fragment = levelDetails.fragments[sn - levelDetails.startSN];
          if (fragment) {
            return fragment;
          }
          fragment = levelDetails.fragmentHint;
          if (fragment && fragment.sn === sn) {
            return fragment;
          }
          if (sn < levelDetails.startSN && fragCurrent && fragCurrent.sn === sn) {
            return fragCurrent;
          }
          return null;
        }
        function getPartWith(level, sn, partIndex) {
          if (!level || !level.details) {
            return null;
          }
          var partList = level.details.partList;
          if (partList) {
            for (var i = partList.length; i--; ) {
              var part = partList[i];
              if (part.index === partIndex && part.fragment.sn === sn) {
                return part;
              }
            }
          }
          return null;
        }
      },
      "./src/controller/stream-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return StreamController;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/controller/base-stream-controller.ts");
        var _is_supported__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/is-supported.ts");
        var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/events.ts");
        var _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/buffer-helper.ts");
        var _fragment_tracker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/controller/fragment-tracker.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/types/loader.ts");
        var _loader_fragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/loader/fragment.ts");
        var _demux_transmuxer_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/demux/transmuxer-interface.ts");
        var _types_transmuxer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/types/transmuxer.ts");
        var _gap_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/controller/gap-controller.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/errors.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/utils/logger.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var TICK_INTERVAL = 100;
        var StreamController = /* @__PURE__ */ function(_BaseStreamController) {
          _inheritsLoose(StreamController2, _BaseStreamController);
          function StreamController2(hls2, fragmentTracker) {
            var _this;
            _this = _BaseStreamController.call(this, hls2, fragmentTracker, "[stream-controller]") || this;
            _this.audioCodecSwap = false;
            _this.gapController = null;
            _this.level = -1;
            _this._forceStartLoad = false;
            _this.altAudio = false;
            _this.audioOnly = false;
            _this.fragPlaying = null;
            _this.onvplaying = null;
            _this.onvseeked = null;
            _this.fragLastKbps = 0;
            _this.stalled = false;
            _this.couldBacktrack = false;
            _this.audioCodecSwitch = false;
            _this.videoBuffer = null;
            _this._registerListeners();
            return _this;
          }
          var _proto = StreamController2.prototype;
          _proto._registerListeners = function _registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].LEVEL_LOADING, this.onLevelLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].ERROR, this.onError, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_CREATED, this.onBufferCreated, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_FLUSHED, this.onBufferFlushed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].LEVELS_UPDATED, this.onLevelsUpdated, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_BUFFERED, this.onFragBuffered, this);
          };
          _proto._unregisterListeners = function _unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].ERROR, this.onError, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_CREATED, this.onBufferCreated, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_FLUSHED, this.onBufferFlushed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].LEVELS_UPDATED, this.onLevelsUpdated, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_BUFFERED, this.onFragBuffered, this);
          };
          _proto.onHandlerDestroying = function onHandlerDestroying() {
            this._unregisterListeners();
            this.onMediaDetaching();
          };
          _proto.startLoad = function startLoad(startPosition) {
            if (this.levels) {
              var lastCurrentTime = this.lastCurrentTime, hls2 = this.hls;
              this.stopLoad();
              this.setInterval(TICK_INTERVAL);
              this.level = -1;
              this.fragLoadError = 0;
              if (!this.startFragRequested) {
                var startLevel = hls2.startLevel;
                if (startLevel === -1) {
                  if (hls2.config.testBandwidth) {
                    startLevel = 0;
                    this.bitrateTest = true;
                  } else {
                    startLevel = hls2.nextAutoLevel;
                  }
                }
                this.level = hls2.nextLoadLevel = startLevel;
                this.loadedmetadata = false;
              }
              if (lastCurrentTime > 0 && startPosition === -1) {
                this.log("Override startPosition with lastCurrentTime @" + lastCurrentTime.toFixed(3));
                startPosition = lastCurrentTime;
              }
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
              this.nextLoadPosition = this.startPosition = this.lastCurrentTime = startPosition;
              this.tick();
            } else {
              this._forceStartLoad = true;
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].STOPPED;
            }
          };
          _proto.stopLoad = function stopLoad() {
            this._forceStartLoad = false;
            _BaseStreamController.prototype.stopLoad.call(this);
          };
          _proto.doTick = function doTick() {
            switch (this.state) {
              case _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE:
                this.doTickIdle();
                break;
              case _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_LEVEL: {
                var _levels$level;
                var levels = this.levels, level = this.level;
                var details = levels === null || levels === void 0 ? void 0 : (_levels$level = levels[level]) === null || _levels$level === void 0 ? void 0 : _levels$level.details;
                if (details && (!details.live || this.levelLastLoaded === this.level)) {
                  if (this.waitForCdnTuneIn(details)) {
                    break;
                  }
                  this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
                  break;
                }
                break;
              }
              case _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].FRAG_LOADING_WAITING_RETRY:
                {
                  var _this$media;
                  var now = self.performance.now();
                  var retryDate = this.retryDate;
                  if (!retryDate || now >= retryDate || (_this$media = this.media) !== null && _this$media !== void 0 && _this$media.seeking) {
                    this.log("retryDate reached, switch back to IDLE state");
                    this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
                  }
                }
                break;
            }
            this.onTickEnd();
          };
          _proto.onTickEnd = function onTickEnd() {
            _BaseStreamController.prototype.onTickEnd.call(this);
            this.checkBuffer();
            this.checkFragmentChanged();
          };
          _proto.doTickIdle = function doTickIdle() {
            var _frag$decryptdata, _frag$decryptdata2;
            var hls2 = this.hls, levelLastLoaded = this.levelLastLoaded, levels = this.levels, media = this.media;
            var config = hls2.config, level = hls2.nextLoadLevel;
            if (levelLastLoaded === null || !media && (this.startFragRequested || !config.startFragPrefetch)) {
              return;
            }
            if (this.altAudio && this.audioOnly) {
              return;
            }
            if (!levels || !levels[level]) {
              return;
            }
            var levelInfo = levels[level];
            this.level = hls2.nextLoadLevel = level;
            var levelDetails = levelInfo.details;
            if (!levelDetails || this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_LEVEL || levelDetails.live && this.levelLastLoaded !== level) {
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_LEVEL;
              return;
            }
            var bufferInfo = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : media, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN);
            if (bufferInfo === null) {
              return;
            }
            var bufferLen = bufferInfo.len;
            var maxBufLen = this.getMaxBufferLength(levelInfo.maxBitrate);
            if (bufferLen >= maxBufLen) {
              return;
            }
            if (this._streamEnded(bufferInfo, levelDetails)) {
              var data = {};
              if (this.altAudio) {
                data.type = "video";
              }
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_EOS, data);
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].ENDED;
              return;
            }
            var targetBufferTime = bufferInfo.end;
            var frag = this.getNextFragment(targetBufferTime, levelDetails);
            if (this.couldBacktrack && !this.fragPrevious && frag && frag.sn !== "initSegment") {
              var fragIdx = frag.sn - levelDetails.startSN;
              if (fragIdx > 1) {
                frag = levelDetails.fragments[fragIdx - 1];
                this.fragmentTracker.removeFragment(frag);
              }
            }
            if (frag && this.fragmentTracker.getState(frag) === _fragment_tracker__WEBPACK_IMPORTED_MODULE_5__["FragmentState"].OK && this.nextLoadPosition > targetBufferTime) {
              var type = this.audioOnly && !this.altAudio ? _loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].AUDIO : _loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].VIDEO;
              this.afterBufferFlushed(media, type, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN);
              frag = this.getNextFragment(this.nextLoadPosition, levelDetails);
            }
            if (!frag) {
              return;
            }
            if (frag.initSegment && !frag.initSegment.data && !this.bitrateTest) {
              frag = frag.initSegment;
            }
            if (((_frag$decryptdata = frag.decryptdata) === null || _frag$decryptdata === void 0 ? void 0 : _frag$decryptdata.keyFormat) === "identity" && !((_frag$decryptdata2 = frag.decryptdata) !== null && _frag$decryptdata2 !== void 0 && _frag$decryptdata2.key)) {
              this.loadKey(frag, levelDetails);
            } else {
              this.loadFragment(frag, levelDetails, targetBufferTime);
            }
          };
          _proto.loadFragment = function loadFragment(frag, levelDetails, targetBufferTime) {
            var _this$media2;
            var fragState = this.fragmentTracker.getState(frag);
            this.fragCurrent = frag;
            if (fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_5__["FragmentState"].BACKTRACKED) {
              var data = this.fragmentTracker.getBacktrackData(frag);
              if (data) {
                this._handleFragmentLoadProgress(data);
                this._handleFragmentLoadComplete(data);
                return;
              } else {
                fragState = _fragment_tracker__WEBPACK_IMPORTED_MODULE_5__["FragmentState"].NOT_LOADED;
              }
            }
            if (fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_5__["FragmentState"].NOT_LOADED || fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_5__["FragmentState"].PARTIAL) {
              if (frag.sn === "initSegment") {
                this._loadInitSegment(frag);
              } else if (this.bitrateTest) {
                frag.bitrateTest = true;
                this.log("Fragment " + frag.sn + " of level " + frag.level + " is being downloaded to test bitrate and will not be buffered");
                this._loadBitrateTestFrag(frag);
              } else {
                this.startFragRequested = true;
                _BaseStreamController.prototype.loadFragment.call(this, frag, levelDetails, targetBufferTime);
              }
            } else if (fragState === _fragment_tracker__WEBPACK_IMPORTED_MODULE_5__["FragmentState"].APPENDING) {
              if (this.reduceMaxBufferLength(frag.duration)) {
                this.fragmentTracker.removeFragment(frag);
              }
            } else if (((_this$media2 = this.media) === null || _this$media2 === void 0 ? void 0 : _this$media2.buffered.length) === 0) {
              this.fragmentTracker.removeAllFragments();
            }
          };
          _proto.getAppendedFrag = function getAppendedFrag(position) {
            var fragOrPart = this.fragmentTracker.getAppendedFrag(position, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN);
            if (fragOrPart && "fragment" in fragOrPart) {
              return fragOrPart.fragment;
            }
            return fragOrPart;
          };
          _proto.getBufferedFrag = function getBufferedFrag(position) {
            return this.fragmentTracker.getBufferedFrag(position, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN);
          };
          _proto.followingBufferedFrag = function followingBufferedFrag(frag) {
            if (frag) {
              return this.getBufferedFrag(frag.end + 0.5);
            }
            return null;
          };
          _proto.immediateLevelSwitch = function immediateLevelSwitch() {
            this.abortCurrentFrag();
            this.flushMainBuffer(0, Number.POSITIVE_INFINITY);
          };
          _proto.nextLevelSwitch = function nextLevelSwitch() {
            var levels = this.levels, media = this.media;
            if (media !== null && media !== void 0 && media.readyState) {
              var fetchdelay;
              var fragPlayingCurrent = this.getAppendedFrag(media.currentTime);
              if (fragPlayingCurrent && fragPlayingCurrent.start > 1) {
                this.flushMainBuffer(0, fragPlayingCurrent.start - 1);
              }
              if (!media.paused && levels) {
                var nextLevelId = this.hls.nextLoadLevel;
                var nextLevel = levels[nextLevelId];
                var fragLastKbps = this.fragLastKbps;
                if (fragLastKbps && this.fragCurrent) {
                  fetchdelay = this.fragCurrent.duration * nextLevel.maxBitrate / (1e3 * fragLastKbps) + 1;
                } else {
                  fetchdelay = 0;
                }
              } else {
                fetchdelay = 0;
              }
              var bufferedFrag = this.getBufferedFrag(media.currentTime + fetchdelay);
              if (bufferedFrag) {
                var nextBufferedFrag = this.followingBufferedFrag(bufferedFrag);
                if (nextBufferedFrag) {
                  this.abortCurrentFrag();
                  var maxStart = nextBufferedFrag.maxStartPTS ? nextBufferedFrag.maxStartPTS : nextBufferedFrag.start;
                  var fragDuration = nextBufferedFrag.duration;
                  var startPts = Math.max(bufferedFrag.end, maxStart + Math.min(Math.max(fragDuration - this.config.maxFragLookUpTolerance, fragDuration * 0.5), fragDuration * 0.75));
                  this.flushMainBuffer(startPts, Number.POSITIVE_INFINITY);
                }
              }
            }
          };
          _proto.abortCurrentFrag = function abortCurrentFrag() {
            var fragCurrent = this.fragCurrent;
            this.fragCurrent = null;
            if (fragCurrent !== null && fragCurrent !== void 0 && fragCurrent.loader) {
              fragCurrent.loader.abort();
            }
            if (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].KEY_LOADING) {
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
            }
            this.nextLoadPosition = this.getLoadPosition();
          };
          _proto.flushMainBuffer = function flushMainBuffer(startOffset, endOffset) {
            _BaseStreamController.prototype.flushMainBuffer.call(this, startOffset, endOffset, this.altAudio ? "video" : null);
          };
          _proto.onMediaAttached = function onMediaAttached(event, data) {
            _BaseStreamController.prototype.onMediaAttached.call(this, event, data);
            var media = data.media;
            this.onvplaying = this.onMediaPlaying.bind(this);
            this.onvseeked = this.onMediaSeeked.bind(this);
            media.addEventListener("playing", this.onvplaying);
            media.addEventListener("seeked", this.onvseeked);
            this.gapController = new _gap_controller__WEBPACK_IMPORTED_MODULE_10__["default"](this.config, media, this.fragmentTracker, this.hls);
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            var media = this.media;
            if (media) {
              media.removeEventListener("playing", this.onvplaying);
              media.removeEventListener("seeked", this.onvseeked);
              this.onvplaying = this.onvseeked = null;
              this.videoBuffer = null;
            }
            this.fragPlaying = null;
            if (this.gapController) {
              this.gapController.destroy();
              this.gapController = null;
            }
            _BaseStreamController.prototype.onMediaDetaching.call(this);
          };
          _proto.onMediaPlaying = function onMediaPlaying() {
            this.tick();
          };
          _proto.onMediaSeeked = function onMediaSeeked() {
            var media = this.media;
            var currentTime = media ? media.currentTime : null;
            if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(currentTime)) {
              this.log("Media seeked to " + currentTime.toFixed(3));
            }
            this.tick();
          };
          _proto.onManifestLoading = function onManifestLoading() {
            this.log("Trigger BUFFER_RESET");
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_RESET, void 0);
            this.fragmentTracker.removeAllFragments();
            this.couldBacktrack = this.stalled = false;
            this.startPosition = this.lastCurrentTime = 0;
            this.fragPlaying = null;
          };
          _proto.onManifestParsed = function onManifestParsed(event, data) {
            var aac = false;
            var heaac = false;
            var codec;
            data.levels.forEach(function(level) {
              codec = level.audioCodec;
              if (codec) {
                if (codec.indexOf("mp4a.40.2") !== -1) {
                  aac = true;
                }
                if (codec.indexOf("mp4a.40.5") !== -1) {
                  heaac = true;
                }
              }
            });
            this.audioCodecSwitch = aac && heaac && !Object(_is_supported__WEBPACK_IMPORTED_MODULE_2__["changeTypeSupported"])();
            if (this.audioCodecSwitch) {
              this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC");
            }
            this.levels = data.levels;
            this.startFragRequested = false;
          };
          _proto.onLevelLoading = function onLevelLoading(event, data) {
            var levels = this.levels;
            if (!levels || this.state !== _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE) {
              return;
            }
            var level = levels[data.level];
            if (!level.details || level.details.live && this.levelLastLoaded !== data.level || this.waitForCdnTuneIn(level.details)) {
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_LEVEL;
            }
          };
          _proto.onLevelLoaded = function onLevelLoaded(event, data) {
            var _curLevel$details;
            var levels = this.levels;
            var newLevelId = data.level;
            var newDetails = data.details;
            var duration = newDetails.totalduration;
            if (!levels) {
              this.warn("Levels were reset while loading level " + newLevelId);
              return;
            }
            this.log("Level " + newLevelId + " loaded [" + newDetails.startSN + "," + newDetails.endSN + "], cc [" + newDetails.startCC + ", " + newDetails.endCC + "] duration:" + duration);
            var fragCurrent = this.fragCurrent;
            if (fragCurrent && (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].FRAG_LOADING || this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].FRAG_LOADING_WAITING_RETRY)) {
              if (fragCurrent.level !== data.level && fragCurrent.loader) {
                this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
                fragCurrent.loader.abort();
              }
            }
            var curLevel = levels[newLevelId];
            var sliding = 0;
            if (newDetails.live || (_curLevel$details = curLevel.details) !== null && _curLevel$details !== void 0 && _curLevel$details.live) {
              if (!newDetails.fragments[0]) {
                newDetails.deltaUpdateFailed = true;
              }
              if (newDetails.deltaUpdateFailed) {
                return;
              }
              sliding = this.alignPlaylists(newDetails, curLevel.details);
            }
            curLevel.details = newDetails;
            this.levelLastLoaded = newLevelId;
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].LEVEL_UPDATED, {
              details: newDetails,
              level: newLevelId
            });
            if (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_LEVEL) {
              if (this.waitForCdnTuneIn(newDetails)) {
                return;
              }
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
            }
            if (!this.startFragRequested) {
              this.setStartPosition(newDetails, sliding);
            } else if (newDetails.live) {
              this.synchronizeToLiveEdge(newDetails);
            }
            this.tick();
          };
          _proto._handleFragmentLoadProgress = function _handleFragmentLoadProgress(data) {
            var _frag$initSegment;
            var frag = data.frag, part = data.part, payload = data.payload;
            var levels = this.levels;
            if (!levels) {
              this.warn("Levels were reset while fragment load was in progress. Fragment " + frag.sn + " of level " + frag.level + " will not be buffered");
              return;
            }
            var currentLevel = levels[frag.level];
            var details = currentLevel.details;
            if (!details) {
              this.warn("Dropping fragment " + frag.sn + " of level " + frag.level + " after level details were reset");
              return;
            }
            var videoCodec = currentLevel.videoCodec;
            var accurateTimeOffset = details.PTSKnown || !details.live;
            var initSegmentData = (_frag$initSegment = frag.initSegment) === null || _frag$initSegment === void 0 ? void 0 : _frag$initSegment.data;
            var audioCodec = this._getAudioCodec(currentLevel);
            var transmuxer = this.transmuxer = this.transmuxer || new _demux_transmuxer_interface__WEBPACK_IMPORTED_MODULE_8__["default"](this.hls, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this));
            var partIndex = part ? part.index : -1;
            var partial = partIndex !== -1;
            var chunkMeta = new _types_transmuxer__WEBPACK_IMPORTED_MODULE_9__["ChunkMetadata"](frag.level, frag.sn, frag.stats.chunkCount, payload.byteLength, partIndex, partial);
            var initPTS = this.initPTS[frag.cc];
            transmuxer.push(payload, initSegmentData, audioCodec, videoCodec, frag, part, details.totalduration, accurateTimeOffset, chunkMeta, initPTS);
          };
          _proto.onAudioTrackSwitching = function onAudioTrackSwitching(event, data) {
            var fromAltAudio = this.altAudio;
            var altAudio = !!data.url;
            var trackId = data.id;
            if (!altAudio) {
              if (this.mediaBuffer !== this.media) {
                this.log("Switching on main audio, use media.buffered to schedule main fragment loading");
                this.mediaBuffer = this.media;
                var fragCurrent = this.fragCurrent;
                if (fragCurrent !== null && fragCurrent !== void 0 && fragCurrent.loader) {
                  this.log("Switching to main audio track, cancel main fragment load");
                  fragCurrent.loader.abort();
                }
                this.resetTransmuxer();
                this.resetLoadingState();
              } else if (this.audioOnly) {
                this.resetTransmuxer();
              }
              var hls2 = this.hls;
              if (fromAltAudio) {
                hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_FLUSHING, {
                  startOffset: 0,
                  endOffset: Number.POSITIVE_INFINITY,
                  type: "audio"
                });
              }
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].AUDIO_TRACK_SWITCHED, {
                id: trackId
              });
            }
          };
          _proto.onAudioTrackSwitched = function onAudioTrackSwitched(event, data) {
            var trackId = data.id;
            var altAudio = !!this.hls.audioTracks[trackId].url;
            if (altAudio) {
              var videoBuffer = this.videoBuffer;
              if (videoBuffer && this.mediaBuffer !== videoBuffer) {
                this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading");
                this.mediaBuffer = videoBuffer;
              }
            }
            this.altAudio = altAudio;
            this.tick();
          };
          _proto.onBufferCreated = function onBufferCreated(event, data) {
            var tracks = data.tracks;
            var mediaTrack;
            var name;
            var alternate = false;
            for (var type in tracks) {
              var track = tracks[type];
              if (track.id === "main") {
                name = type;
                mediaTrack = track;
                if (type === "video") {
                  var videoTrack = tracks[type];
                  if (videoTrack) {
                    this.videoBuffer = videoTrack.buffer;
                  }
                }
              } else {
                alternate = true;
              }
            }
            if (alternate && mediaTrack) {
              this.log("Alternate track found, use " + name + ".buffered to schedule main fragment loading");
              this.mediaBuffer = mediaTrack.buffer;
            } else {
              this.mediaBuffer = this.media;
            }
          };
          _proto.onFragBuffered = function onFragBuffered(event, data) {
            var frag = data.frag, part = data.part;
            if (frag && frag.type !== _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN) {
              return;
            }
            if (this.fragContextChanged(frag)) {
              this.warn("Fragment " + frag.sn + (part ? " p: " + part.index : "") + " of level " + frag.level + " finished buffering, but was aborted. state: " + this.state);
              if (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSED) {
                this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
              }
              return;
            }
            var stats = part ? part.stats : frag.stats;
            this.fragLastKbps = Math.round(8 * stats.total / (stats.buffering.end - stats.loading.first));
            if (frag.sn !== "initSegment") {
              this.fragPrevious = frag;
            }
            this.fragBufferedComplete(frag, part);
          };
          _proto.onError = function onError(event, data) {
            switch (data.details) {
              case _errors__WEBPACK_IMPORTED_MODULE_11__["ErrorDetails"].FRAG_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_11__["ErrorDetails"].FRAG_LOAD_TIMEOUT:
              case _errors__WEBPACK_IMPORTED_MODULE_11__["ErrorDetails"].KEY_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_11__["ErrorDetails"].KEY_LOAD_TIMEOUT:
                this.onFragmentOrKeyLoadError(_types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN, data);
                break;
              case _errors__WEBPACK_IMPORTED_MODULE_11__["ErrorDetails"].LEVEL_LOAD_ERROR:
              case _errors__WEBPACK_IMPORTED_MODULE_11__["ErrorDetails"].LEVEL_LOAD_TIMEOUT:
                if (this.state !== _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].ERROR) {
                  if (data.fatal) {
                    this.warn("" + data.details);
                    this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].ERROR;
                  } else {
                    if (!data.levelRetry && this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].WAITING_LEVEL) {
                      this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
                    }
                  }
                }
                break;
              case _errors__WEBPACK_IMPORTED_MODULE_11__["ErrorDetails"].BUFFER_FULL_ERROR:
                if (data.parent === "main" && (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSING || this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSED)) {
                  var flushBuffer = true;
                  var bufferedInfo = this.getFwdBufferInfo(this.media, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN);
                  if (bufferedInfo && bufferedInfo.len > 0.5) {
                    flushBuffer = !this.reduceMaxBufferLength(bufferedInfo.len);
                  }
                  if (flushBuffer) {
                    this.warn("buffer full error also media.currentTime is not buffered, flush main");
                    this.immediateLevelSwitch();
                  }
                  this.resetLoadingState();
                }
                break;
            }
          };
          _proto.checkBuffer = function checkBuffer() {
            var media = this.media, gapController = this.gapController;
            if (!media || !gapController || !media.readyState) {
              return;
            }
            var buffered = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_4__["BufferHelper"].getBuffered(media);
            if (!this.loadedmetadata && buffered.length) {
              this.loadedmetadata = true;
              this.seekToStartPos();
            } else {
              gapController.poll(this.lastCurrentTime);
            }
            this.lastCurrentTime = media.currentTime;
          };
          _proto.onFragLoadEmergencyAborted = function onFragLoadEmergencyAborted() {
            this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
            if (!this.loadedmetadata) {
              this.startFragRequested = false;
              this.nextLoadPosition = this.startPosition;
            }
            this.tickImmediate();
          };
          _proto.onBufferFlushed = function onBufferFlushed(event, _ref) {
            var type = _ref.type;
            if (type !== _loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].AUDIO || this.audioOnly && !this.altAudio) {
              var media = (type === _loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
              this.afterBufferFlushed(media, type, _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN);
            }
          };
          _proto.onLevelsUpdated = function onLevelsUpdated(event, data) {
            this.levels = data.levels;
          };
          _proto.swapAudioCodec = function swapAudioCodec() {
            this.audioCodecSwap = !this.audioCodecSwap;
          };
          _proto.seekToStartPos = function seekToStartPos() {
            var media = this.media;
            var currentTime = media.currentTime;
            var startPosition = this.startPosition;
            if (startPosition >= 0 && currentTime < startPosition) {
              if (media.seeking) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_12__["logger"].log("could not seek to " + startPosition + ", already seeking at " + currentTime);
                return;
              }
              var buffered = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_4__["BufferHelper"].getBuffered(media);
              var bufferStart = buffered.length ? buffered.start(0) : 0;
              var delta = bufferStart - startPosition;
              if (delta > 0 && (delta < this.config.maxBufferHole || delta < this.config.maxFragLookUpTolerance)) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_12__["logger"].log("adjusting start position by " + delta + " to match buffer start");
                startPosition += delta;
                this.startPosition = startPosition;
              }
              this.log("seek to target start position " + startPosition + " from current time " + currentTime);
              media.currentTime = startPosition;
            }
          };
          _proto._getAudioCodec = function _getAudioCodec(currentLevel) {
            var audioCodec = this.config.defaultAudioCodec || currentLevel.audioCodec;
            if (this.audioCodecSwap && audioCodec) {
              this.log("Swapping audio codec");
              if (audioCodec.indexOf("mp4a.40.5") !== -1) {
                audioCodec = "mp4a.40.2";
              } else {
                audioCodec = "mp4a.40.5";
              }
            }
            return audioCodec;
          };
          _proto._loadBitrateTestFrag = function _loadBitrateTestFrag(frag) {
            var _this2 = this;
            this._doFragLoad(frag).then(function(data) {
              var hls2 = _this2.hls;
              if (!data || hls2.nextLoadLevel || _this2.fragContextChanged(frag)) {
                return;
              }
              _this2.fragLoadError = 0;
              _this2.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].IDLE;
              _this2.startFragRequested = false;
              _this2.bitrateTest = false;
              var stats = frag.stats;
              stats.parsing.start = stats.parsing.end = stats.buffering.start = stats.buffering.end = self.performance.now();
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_LOADED, data);
            });
          };
          _proto._handleTransmuxComplete = function _handleTransmuxComplete(transmuxResult) {
            var _id3$samples;
            var id = "main";
            var hls2 = this.hls;
            var remuxResult = transmuxResult.remuxResult, chunkMeta = transmuxResult.chunkMeta;
            var context = this.getCurrentContext(chunkMeta);
            if (!context) {
              this.warn("The loading context changed while buffering fragment " + chunkMeta.sn + " of level " + chunkMeta.level + ". This chunk will not be buffered.");
              this.resetLiveStartWhenNotLoaded(chunkMeta.level);
              return;
            }
            var frag = context.frag, part = context.part, level = context.level;
            var video = remuxResult.video, text = remuxResult.text, id3 = remuxResult.id3, initSegment = remuxResult.initSegment;
            var audio = this.altAudio ? void 0 : remuxResult.audio;
            if (this.fragContextChanged(frag)) {
              return;
            }
            this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSING;
            if (initSegment) {
              if (initSegment.tracks) {
                this._bufferInitSegment(level, initSegment.tracks, frag, chunkMeta);
                hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_PARSING_INIT_SEGMENT, {
                  frag,
                  id,
                  tracks: initSegment.tracks
                });
              }
              var initPTS = initSegment.initPTS;
              var timescale = initSegment.timescale;
              if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(initPTS)) {
                this.initPTS[frag.cc] = initPTS;
                hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].INIT_PTS_FOUND, {
                  frag,
                  id,
                  initPTS,
                  timescale
                });
              }
            }
            if (video && remuxResult.independent !== false) {
              if (level.details) {
                var startPTS = video.startPTS, endPTS = video.endPTS, startDTS = video.startDTS, endDTS = video.endDTS;
                if (part) {
                  part.elementaryStreams[video.type] = {
                    startPTS,
                    endPTS,
                    startDTS,
                    endDTS
                  };
                } else {
                  if (video.firstKeyFrame && video.independent) {
                    this.couldBacktrack = true;
                  }
                  if (video.dropped && video.independent) {
                    var pos = this.getLoadPosition() + this.config.maxBufferHole;
                    if (pos < startPTS) {
                      this.backtrack(frag);
                      return;
                    }
                    frag.setElementaryStreamInfo(video.type, frag.start, endPTS, frag.start, endDTS, true);
                  }
                }
                frag.setElementaryStreamInfo(video.type, startPTS, endPTS, startDTS, endDTS);
                this.bufferFragmentData(video, frag, part, chunkMeta);
              }
            } else if (remuxResult.independent === false) {
              this.backtrack(frag);
              return;
            }
            if (audio) {
              var _startPTS = audio.startPTS, _endPTS = audio.endPTS, _startDTS = audio.startDTS, _endDTS = audio.endDTS;
              if (part) {
                part.elementaryStreams[_loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].AUDIO] = {
                  startPTS: _startPTS,
                  endPTS: _endPTS,
                  startDTS: _startDTS,
                  endDTS: _endDTS
                };
              }
              frag.setElementaryStreamInfo(_loader_fragment__WEBPACK_IMPORTED_MODULE_7__["ElementaryStreamTypes"].AUDIO, _startPTS, _endPTS, _startDTS, _endDTS);
              this.bufferFragmentData(audio, frag, part, chunkMeta);
            }
            if (id3 !== null && id3 !== void 0 && (_id3$samples = id3.samples) !== null && _id3$samples !== void 0 && _id3$samples.length) {
              var emittedID3 = {
                frag,
                id,
                samples: id3.samples
              };
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_PARSING_METADATA, emittedID3);
            }
            if (text) {
              var emittedText = {
                frag,
                id,
                samples: text.samples
              };
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_PARSING_USERDATA, emittedText);
            }
          };
          _proto._bufferInitSegment = function _bufferInitSegment(currentLevel, tracks, frag, chunkMeta) {
            var _this3 = this;
            if (this.state !== _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].PARSING) {
              return;
            }
            this.audioOnly = !!tracks.audio && !tracks.video;
            if (this.altAudio && !this.audioOnly) {
              delete tracks.audio;
            }
            var audio = tracks.audio, video = tracks.video, audiovideo = tracks.audiovideo;
            if (audio) {
              var audioCodec = currentLevel.audioCodec;
              var ua = navigator.userAgent.toLowerCase();
              if (this.audioCodecSwitch) {
                if (audioCodec) {
                  if (audioCodec.indexOf("mp4a.40.5") !== -1) {
                    audioCodec = "mp4a.40.2";
                  } else {
                    audioCodec = "mp4a.40.5";
                  }
                }
                if (audio.metadata.channelCount !== 1 && ua.indexOf("firefox") === -1) {
                  audioCodec = "mp4a.40.5";
                }
              }
              if (ua.indexOf("android") !== -1 && audio.container !== "audio/mpeg") {
                audioCodec = "mp4a.40.2";
                this.log("Android: force audio codec to " + audioCodec);
              }
              if (currentLevel.audioCodec && currentLevel.audioCodec !== audioCodec) {
                this.log('Swapping manifest audio codec "' + currentLevel.audioCodec + '" for "' + audioCodec + '"');
              }
              audio.levelCodec = audioCodec;
              audio.id = "main";
              this.log("Init audio buffer, container:" + audio.container + ", codecs[selected/level/parsed]=[" + (audioCodec || "") + "/" + (currentLevel.audioCodec || "") + "/" + audio.codec + "]");
            }
            if (video) {
              video.levelCodec = currentLevel.videoCodec;
              video.id = "main";
              this.log("Init video buffer, container:" + video.container + ", codecs[level/parsed]=[" + (currentLevel.videoCodec || "") + "/" + video.codec + "]");
            }
            if (audiovideo) {
              this.log("Init audiovideo buffer, container:" + audiovideo.container + ", codecs[level/parsed]=[" + (currentLevel.attrs.CODECS || "") + "/" + audiovideo.codec + "]");
            }
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_CODECS, tracks);
            Object.keys(tracks).forEach(function(trackName) {
              var track = tracks[trackName];
              var initSegment = track.initSegment;
              if (initSegment !== null && initSegment !== void 0 && initSegment.byteLength) {
                _this3.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].BUFFER_APPENDING, {
                  type: trackName,
                  data: initSegment,
                  frag,
                  part: null,
                  chunkMeta,
                  parent: frag.type
                });
              }
            });
            this.tick();
          };
          _proto.backtrack = function backtrack(frag) {
            this.couldBacktrack = true;
            this.resetTransmuxer();
            this.flushBufferGap(frag);
            var data = this.fragmentTracker.backtrack(frag);
            this.fragPrevious = null;
            this.nextLoadPosition = frag.start;
            if (data) {
              this.resetFragmentLoading(frag);
            } else {
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["State"].BACKTRACKING;
            }
          };
          _proto.checkFragmentChanged = function checkFragmentChanged() {
            var video = this.media;
            var fragPlayingCurrent = null;
            if (video && video.readyState > 1 && video.seeking === false) {
              var currentTime = video.currentTime;
              if (_utils_buffer_helper__WEBPACK_IMPORTED_MODULE_4__["BufferHelper"].isBuffered(video, currentTime)) {
                fragPlayingCurrent = this.getAppendedFrag(currentTime);
              } else if (_utils_buffer_helper__WEBPACK_IMPORTED_MODULE_4__["BufferHelper"].isBuffered(video, currentTime + 0.1)) {
                fragPlayingCurrent = this.getAppendedFrag(currentTime + 0.1);
              }
              if (fragPlayingCurrent) {
                var fragPlaying = this.fragPlaying;
                var fragCurrentLevel = fragPlayingCurrent.level;
                if (!fragPlaying || fragPlayingCurrent.sn !== fragPlaying.sn || fragPlaying.level !== fragCurrentLevel || fragPlayingCurrent.urlId !== fragPlaying.urlId) {
                  this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].FRAG_CHANGED, {
                    frag: fragPlayingCurrent
                  });
                  if (!fragPlaying || fragPlaying.level !== fragCurrentLevel) {
                    this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].LEVEL_SWITCHED, {
                      level: fragCurrentLevel
                    });
                  }
                  this.fragPlaying = fragPlayingCurrent;
                }
              }
            }
          };
          _createClass(StreamController2, [{
            key: "nextLevel",
            get: function get() {
              var frag = this.nextBufferedFrag;
              if (frag) {
                return frag.level;
              } else {
                return -1;
              }
            }
          }, {
            key: "currentLevel",
            get: function get() {
              var media = this.media;
              if (media) {
                var fragPlayingCurrent = this.getAppendedFrag(media.currentTime);
                if (fragPlayingCurrent) {
                  return fragPlayingCurrent.level;
                }
              }
              return -1;
            }
          }, {
            key: "nextBufferedFrag",
            get: function get() {
              var media = this.media;
              if (media) {
                var fragPlayingCurrent = this.getAppendedFrag(media.currentTime);
                return this.followingBufferedFrag(fragPlayingCurrent);
              } else {
                return null;
              }
            }
          }, {
            key: "forceStartLoad",
            get: function get() {
              return this._forceStartLoad;
            }
          }]);
          return StreamController2;
        }(_base_stream_controller__WEBPACK_IMPORTED_MODULE_1__["default"]);
      },
      "./src/controller/subtitle-stream-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "SubtitleStreamController", function() {
          return SubtitleStreamController;
        });
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/logger.ts");
        var _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/buffer-helper.ts");
        var _fragment_finders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/controller/fragment-finders.ts");
        var _utils_discontinuities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/discontinuities.ts");
        var _level_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/controller/level-helper.ts");
        var _fragment_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/controller/fragment-tracker.ts");
        var _base_stream_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/controller/base-stream-controller.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/types/loader.ts");
        var _types_level__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/types/level.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var TICK_INTERVAL = 500;
        var SubtitleStreamController = /* @__PURE__ */ function(_BaseStreamController) {
          _inheritsLoose(SubtitleStreamController2, _BaseStreamController);
          function SubtitleStreamController2(hls2, fragmentTracker) {
            var _this;
            _this = _BaseStreamController.call(this, hls2, fragmentTracker, "[subtitle-stream-controller]") || this;
            _this.levels = [];
            _this.currentTrackId = -1;
            _this.tracksBuffered = [];
            _this.mainDetails = null;
            _this._registerListeners();
            return _this;
          }
          var _proto = SubtitleStreamController2.prototype;
          _proto.onHandlerDestroying = function onHandlerDestroying() {
            this._unregisterListeners();
            this.mainDetails = null;
          };
          _proto._registerListeners = function _registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, this.onError, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_FLUSHING, this.onBufferFlushing, this);
          };
          _proto._unregisterListeners = function _unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_LOADED, this.onLevelLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, this.onError, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].BUFFER_FLUSHING, this.onBufferFlushing, this);
          };
          _proto.startLoad = function startLoad() {
            this.stopLoad();
            this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_7__["State"].IDLE;
            this.setInterval(TICK_INTERVAL);
            this.tick();
          };
          _proto.onManifestLoading = function onManifestLoading() {
            this.mainDetails = null;
            this.fragmentTracker.removeAllFragments();
          };
          _proto.onLevelLoaded = function onLevelLoaded(event, data) {
            this.mainDetails = data.details;
          };
          _proto.onSubtitleFragProcessed = function onSubtitleFragProcessed(event, data) {
            var frag = data.frag, success = data.success;
            this.fragPrevious = frag;
            this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_7__["State"].IDLE;
            if (!success) {
              return;
            }
            var buffered = this.tracksBuffered[this.currentTrackId];
            if (!buffered) {
              return;
            }
            var timeRange;
            var fragStart = frag.start;
            for (var i = 0; i < buffered.length; i++) {
              if (fragStart >= buffered[i].start && fragStart <= buffered[i].end) {
                timeRange = buffered[i];
                break;
              }
            }
            var fragEnd = frag.start + frag.duration;
            if (timeRange) {
              timeRange.end = fragEnd;
            } else {
              timeRange = {
                start: fragStart,
                end: fragEnd
              };
              buffered.push(timeRange);
            }
            this.fragmentTracker.fragBuffered(frag);
          };
          _proto.onBufferFlushing = function onBufferFlushing(event, data) {
            var startOffset = data.startOffset, endOffset = data.endOffset;
            if (startOffset === 0 && endOffset !== Number.POSITIVE_INFINITY) {
              var currentTrackId = this.currentTrackId, levels = this.levels;
              if (!levels.length || !levels[currentTrackId] || !levels[currentTrackId].details) {
                return;
              }
              var trackDetails = levels[currentTrackId].details;
              var targetDuration = trackDetails.targetduration;
              var endOffsetSubtitles = endOffset - targetDuration;
              if (endOffsetSubtitles <= 0) {
                return;
              }
              data.endOffsetSubtitles = Math.max(0, endOffsetSubtitles);
              this.tracksBuffered.forEach(function(buffered) {
                for (var i = 0; i < buffered.length; ) {
                  if (buffered[i].end <= endOffsetSubtitles) {
                    buffered.shift();
                    continue;
                  } else if (buffered[i].start < endOffsetSubtitles) {
                    buffered[i].start = endOffsetSubtitles;
                  } else {
                    break;
                  }
                  i++;
                }
              });
              this.fragmentTracker.removeFragmentsInRange(startOffset, endOffsetSubtitles, _types_loader__WEBPACK_IMPORTED_MODULE_8__["PlaylistLevelType"].SUBTITLE);
            }
          };
          _proto.onError = function onError(event, data) {
            var _this$fragCurrent;
            var frag = data.frag;
            if (!frag || frag.type !== _types_loader__WEBPACK_IMPORTED_MODULE_8__["PlaylistLevelType"].SUBTITLE) {
              return;
            }
            if ((_this$fragCurrent = this.fragCurrent) !== null && _this$fragCurrent !== void 0 && _this$fragCurrent.loader) {
              this.fragCurrent.loader.abort();
            }
            this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_7__["State"].IDLE;
          };
          _proto.onSubtitleTracksUpdated = function onSubtitleTracksUpdated(event, _ref) {
            var _this2 = this;
            var subtitleTracks = _ref.subtitleTracks;
            this.tracksBuffered = [];
            this.levels = subtitleTracks.map(function(mediaPlaylist) {
              return new _types_level__WEBPACK_IMPORTED_MODULE_9__["Level"](mediaPlaylist);
            });
            this.fragmentTracker.removeAllFragments();
            this.fragPrevious = null;
            this.levels.forEach(function(level) {
              _this2.tracksBuffered[level.id] = [];
            });
            this.mediaBuffer = null;
          };
          _proto.onSubtitleTrackSwitch = function onSubtitleTrackSwitch(event, data) {
            this.currentTrackId = data.id;
            if (!this.levels.length || this.currentTrackId === -1) {
              this.clearInterval();
              return;
            }
            var currentTrack = this.levels[this.currentTrackId];
            if (currentTrack !== null && currentTrack !== void 0 && currentTrack.details) {
              this.mediaBuffer = this.mediaBufferTimeRanges;
              this.setInterval(TICK_INTERVAL);
            } else {
              this.mediaBuffer = null;
            }
          };
          _proto.onSubtitleTrackLoaded = function onSubtitleTrackLoaded(event, data) {
            var _track$details;
            var newDetails = data.details, trackId = data.id;
            var currentTrackId = this.currentTrackId, levels = this.levels;
            if (!levels.length) {
              return;
            }
            var track = levels[currentTrackId];
            if (trackId >= levels.length || trackId !== currentTrackId || !track) {
              return;
            }
            this.mediaBuffer = this.mediaBufferTimeRanges;
            if (newDetails.live || (_track$details = track.details) !== null && _track$details !== void 0 && _track$details.live) {
              var mainDetails = this.mainDetails;
              if (newDetails.deltaUpdateFailed || !mainDetails) {
                return;
              }
              var mainSlidingStartFragment = mainDetails.fragments[0];
              if (!track.details) {
                if (newDetails.hasProgramDateTime && mainDetails.hasProgramDateTime) {
                  Object(_utils_discontinuities__WEBPACK_IMPORTED_MODULE_4__["alignMediaPlaylistByPDT"])(newDetails, mainDetails);
                } else if (mainSlidingStartFragment) {
                  Object(_level_helper__WEBPACK_IMPORTED_MODULE_5__["addSliding"])(newDetails, mainSlidingStartFragment.start);
                }
              } else {
                var sliding = this.alignPlaylists(newDetails, track.details);
                if (sliding === 0 && mainSlidingStartFragment) {
                  Object(_level_helper__WEBPACK_IMPORTED_MODULE_5__["addSliding"])(newDetails, mainSlidingStartFragment.start);
                }
              }
            }
            track.details = newDetails;
            this.levelLastLoaded = trackId;
            this.tick();
            if (newDetails.live && !this.fragCurrent && this.media && this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_7__["State"].IDLE) {
              var foundFrag = Object(_fragment_finders__WEBPACK_IMPORTED_MODULE_3__["findFragmentByPTS"])(null, newDetails.fragments, this.media.currentTime, 0);
              if (!foundFrag) {
                this.warn("Subtitle playlist not aligned with playback");
                track.details = void 0;
              }
            }
          };
          _proto._handleFragmentLoadComplete = function _handleFragmentLoadComplete(fragLoadedData) {
            var frag = fragLoadedData.frag, payload = fragLoadedData.payload;
            var decryptData = frag.decryptdata;
            var hls2 = this.hls;
            if (this.fragContextChanged(frag)) {
              return;
            }
            if (payload && payload.byteLength > 0 && decryptData && decryptData.key && decryptData.iv && decryptData.method === "AES-128") {
              var startTime = performance.now();
              this.decrypter.webCryptoDecrypt(new Uint8Array(payload), decryptData.key.buffer, decryptData.iv.buffer).then(function(decryptedData) {
                var endTime = performance.now();
                hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].FRAG_DECRYPTED, {
                  frag,
                  payload: decryptedData,
                  stats: {
                    tstart: startTime,
                    tdecrypt: endTime
                  }
                });
              });
            }
          };
          _proto.doTick = function doTick() {
            if (!this.media) {
              this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_7__["State"].IDLE;
              return;
            }
            if (this.state === _base_stream_controller__WEBPACK_IMPORTED_MODULE_7__["State"].IDLE) {
              var _foundFrag;
              var currentTrackId = this.currentTrackId, levels = this.levels;
              if (!levels.length || !levels[currentTrackId] || !levels[currentTrackId].details) {
                return;
              }
              var trackDetails = levels[currentTrackId].details;
              var targetDuration = trackDetails.targetduration;
              var config = this.config, media = this.media;
              var bufferedInfo = _utils_buffer_helper__WEBPACK_IMPORTED_MODULE_2__["BufferHelper"].bufferedInfo(this.mediaBufferTimeRanges, media.currentTime - targetDuration, config.maxBufferHole);
              var targetBufferTime = bufferedInfo.end, bufferLen = bufferedInfo.len;
              var maxBufLen = this.getMaxBufferLength() + targetDuration;
              if (bufferLen > maxBufLen) {
                return;
              }
              console.assert(trackDetails, "Subtitle track details are defined on idle subtitle stream controller tick");
              var fragments = trackDetails.fragments;
              var fragLen = fragments.length;
              var end = trackDetails.edge;
              var foundFrag;
              var fragPrevious = this.fragPrevious;
              if (targetBufferTime < end) {
                var maxFragLookUpTolerance = config.maxFragLookUpTolerance;
                if (fragPrevious && trackDetails.hasProgramDateTime) {
                  foundFrag = Object(_fragment_finders__WEBPACK_IMPORTED_MODULE_3__["findFragmentByPDT"])(fragments, fragPrevious.endProgramDateTime, maxFragLookUpTolerance);
                }
                if (!foundFrag) {
                  foundFrag = Object(_fragment_finders__WEBPACK_IMPORTED_MODULE_3__["findFragmentByPTS"])(fragPrevious, fragments, targetBufferTime, maxFragLookUpTolerance);
                  if (!foundFrag && fragPrevious && fragPrevious.start < fragments[0].start) {
                    foundFrag = fragments[0];
                  }
                }
              } else {
                foundFrag = fragments[fragLen - 1];
              }
              if ((_foundFrag = foundFrag) !== null && _foundFrag !== void 0 && _foundFrag.encrypted) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_1__["logger"].log("Loading key for " + foundFrag.sn);
                this.state = _base_stream_controller__WEBPACK_IMPORTED_MODULE_7__["State"].KEY_LOADING;
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].KEY_LOADING, {
                  frag: foundFrag
                });
              } else if (foundFrag && this.fragmentTracker.getState(foundFrag) === _fragment_tracker__WEBPACK_IMPORTED_MODULE_6__["FragmentState"].NOT_LOADED) {
                this.loadFragment(foundFrag, trackDetails, targetBufferTime);
              }
            }
          };
          _proto.loadFragment = function loadFragment(frag, levelDetails, targetBufferTime) {
            this.fragCurrent = frag;
            _BaseStreamController.prototype.loadFragment.call(this, frag, levelDetails, targetBufferTime);
          };
          _createClass(SubtitleStreamController2, [{
            key: "mediaBufferTimeRanges",
            get: function get() {
              return this.tracksBuffered[this.currentTrackId] || [];
            }
          }]);
          return SubtitleStreamController2;
        }(_base_stream_controller__WEBPACK_IMPORTED_MODULE_7__["default"]);
      },
      "./src/controller/subtitle-track-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/texttrack-utils.ts");
        var _base_playlist_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/controller/base-playlist-controller.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/types/loader.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var SubtitleTrackController = /* @__PURE__ */ function(_BasePlaylistControll) {
          _inheritsLoose(SubtitleTrackController2, _BasePlaylistControll);
          function SubtitleTrackController2(hls2) {
            var _this;
            _this = _BasePlaylistControll.call(this, hls2, "[subtitle-track-controller]") || this;
            _this.media = null;
            _this.tracks = [];
            _this.groupId = null;
            _this.tracksInGroup = [];
            _this.trackId = -1;
            _this.selectDefaultTrack = true;
            _this.queuedDefaultTrack = -1;
            _this.trackChangeListener = function() {
              return _this.onTextTracksChanged();
            };
            _this.asyncPollTrackChange = function() {
              return _this.pollTrackChange(0);
            };
            _this.useTextTrackPolling = false;
            _this.subtitlePollingInterval = -1;
            _this.subtitleDisplay = true;
            _this.registerListeners();
            return _this;
          }
          var _proto = SubtitleTrackController2.prototype;
          _proto.destroy = function destroy() {
            this.unregisterListeners();
            this.tracks.length = 0;
            this.tracksInGroup.length = 0;
            this.trackChangeListener = this.asyncPollTrackChange = null;
            _BasePlaylistControll.prototype.destroy.call(this);
          };
          _proto.registerListeners = function registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_LOADING, this.onLevelLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_SWITCHING, this.onLevelSwitching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, this.onError, this);
          };
          _proto.unregisterListeners = function unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_ATTACHED, this.onMediaAttached, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].MANIFEST_PARSED, this.onManifestParsed, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_LOADING, this.onLevelLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].LEVEL_SWITCHING, this.onLevelSwitching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, this.onError, this);
          };
          _proto.onMediaAttached = function onMediaAttached(event, data) {
            this.media = data.media;
            if (!this.media) {
              return;
            }
            if (this.queuedDefaultTrack > -1) {
              this.subtitleTrack = this.queuedDefaultTrack;
              this.queuedDefaultTrack = -1;
            }
            this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks);
            if (this.useTextTrackPolling) {
              this.pollTrackChange(500);
            } else {
              this.media.textTracks.addEventListener("change", this.asyncPollTrackChange);
            }
          };
          _proto.pollTrackChange = function pollTrackChange(timeout) {
            self.clearInterval(this.subtitlePollingInterval);
            this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, timeout);
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            if (!this.media) {
              return;
            }
            self.clearInterval(this.subtitlePollingInterval);
            if (!this.useTextTrackPolling) {
              this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange);
            }
            if (this.trackId > -1) {
              this.queuedDefaultTrack = this.trackId;
            }
            var textTracks = filterSubtitleTracks(this.media.textTracks);
            textTracks.forEach(function(track) {
              Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_1__["clearCurrentCues"])(track);
            });
            this.subtitleTrack = -1;
            this.media = null;
          };
          _proto.onManifestLoading = function onManifestLoading() {
            this.tracks = [];
            this.groupId = null;
            this.tracksInGroup = [];
            this.trackId = -1;
            this.selectDefaultTrack = true;
          };
          _proto.onManifestParsed = function onManifestParsed(event, data) {
            this.tracks = data.subtitleTracks;
          };
          _proto.onSubtitleTrackLoaded = function onSubtitleTrackLoaded(event, data) {
            var id = data.id, details = data.details;
            var trackId = this.trackId;
            var currentTrack = this.tracksInGroup[trackId];
            if (!currentTrack) {
              this.warn("Invalid subtitle track id " + id);
              return;
            }
            var curDetails = currentTrack.details;
            currentTrack.details = data.details;
            this.log("subtitle track " + id + " loaded [" + details.startSN + "-" + details.endSN + "]");
            if (id === this.trackId) {
              this.retryCount = 0;
              this.playlistLoaded(id, data, curDetails);
            }
          };
          _proto.onLevelLoading = function onLevelLoading(event, data) {
            this.switchLevel(data.level);
          };
          _proto.onLevelSwitching = function onLevelSwitching(event, data) {
            this.switchLevel(data.level);
          };
          _proto.switchLevel = function switchLevel(levelIndex) {
            var levelInfo = this.hls.levels[levelIndex];
            if (!(levelInfo !== null && levelInfo !== void 0 && levelInfo.textGroupIds)) {
              return;
            }
            var textGroupId = levelInfo.textGroupIds[levelInfo.urlId];
            if (this.groupId !== textGroupId) {
              var lastTrack = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
              var subtitleTracks = this.tracks.filter(function(track) {
                return !textGroupId || track.groupId === textGroupId;
              });
              this.tracksInGroup = subtitleTracks;
              var initialTrackId = this.findTrackId(lastTrack === null || lastTrack === void 0 ? void 0 : lastTrack.name) || this.findTrackId();
              this.groupId = textGroupId;
              var subtitleTracksUpdated = {
                subtitleTracks
              };
              this.log("Updating subtitle tracks, " + subtitleTracks.length + ' track(s) found in "' + textGroupId + '" group-id');
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACKS_UPDATED, subtitleTracksUpdated);
              if (initialTrackId !== -1) {
                this.setSubtitleTrack(initialTrackId, lastTrack);
              }
            }
          };
          _proto.findTrackId = function findTrackId(name) {
            var textTracks = this.tracksInGroup;
            for (var i = 0; i < textTracks.length; i++) {
              var track = textTracks[i];
              if (!this.selectDefaultTrack || track.default) {
                if (!name || name === track.name) {
                  return track.id;
                }
              }
            }
            return -1;
          };
          _proto.onError = function onError(event, data) {
            _BasePlaylistControll.prototype.onError.call(this, event, data);
            if (data.fatal || !data.context) {
              return;
            }
            if (data.context.type === _types_loader__WEBPACK_IMPORTED_MODULE_3__["PlaylistContextType"].SUBTITLE_TRACK && data.context.id === this.trackId && data.context.groupId === this.groupId) {
              this.retryLoadingOrFail(data);
            }
          };
          _proto.loadPlaylist = function loadPlaylist(hlsUrlParameters) {
            var currentTrack = this.tracksInGroup[this.trackId];
            if (this.shouldLoadTrack(currentTrack)) {
              var id = currentTrack.id;
              var groupId = currentTrack.groupId;
              var url = currentTrack.url;
              if (hlsUrlParameters) {
                try {
                  url = hlsUrlParameters.addDirectives(url);
                } catch (error) {
                  this.warn("Could not construct new URL with HLS Delivery Directives: " + error);
                }
              }
              this.log("Loading subtitle playlist for id " + id);
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_LOADING, {
                url,
                id,
                groupId,
                deliveryDirectives: hlsUrlParameters || null
              });
            }
          };
          _proto.toggleTrackModes = function toggleTrackModes(newId) {
            var _this2 = this;
            var media = this.media, subtitleDisplay = this.subtitleDisplay, trackId = this.trackId;
            if (!media) {
              return;
            }
            var textTracks = filterSubtitleTracks(media.textTracks);
            var groupTracks = textTracks.filter(function(track) {
              return track.groupId === _this2.groupId;
            });
            if (newId === -1) {
              [].slice.call(textTracks).forEach(function(track) {
                track.mode = "disabled";
              });
            } else {
              var oldTrack = groupTracks[trackId];
              if (oldTrack) {
                oldTrack.mode = "disabled";
              }
            }
            var nextTrack = groupTracks[newId];
            if (nextTrack) {
              nextTrack.mode = subtitleDisplay ? "showing" : "hidden";
            }
          };
          _proto.setSubtitleTrack = function setSubtitleTrack(newId, lastTrack) {
            var _tracks$newId;
            var tracks = this.tracksInGroup;
            if (!this.media) {
              this.queuedDefaultTrack = newId;
              return;
            }
            if (this.trackId !== newId) {
              this.toggleTrackModes(newId);
            }
            if (this.trackId === newId && (newId === -1 || (_tracks$newId = tracks[newId]) !== null && _tracks$newId !== void 0 && _tracks$newId.details) || newId < -1 || newId >= tracks.length) {
              return;
            }
            this.clearTimer();
            var track = tracks[newId];
            this.log("Switching to subtitle track " + newId);
            this.trackId = newId;
            if (track) {
              var id = track.id, _track$groupId = track.groupId, groupId = _track$groupId === void 0 ? "" : _track$groupId, name = track.name, type = track.type, url = track.url;
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_SWITCH, {
                id,
                groupId,
                name,
                type,
                url
              });
              var hlsUrlParameters = this.switchParams(track.url, lastTrack === null || lastTrack === void 0 ? void 0 : lastTrack.details);
              this.loadPlaylist(hlsUrlParameters);
            } else {
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].SUBTITLE_TRACK_SWITCH, {
                id: newId
              });
            }
          };
          _proto.onTextTracksChanged = function onTextTracksChanged() {
            if (!this.useTextTrackPolling) {
              self.clearInterval(this.subtitlePollingInterval);
            }
            if (!this.media || !this.hls.config.renderTextTracksNatively) {
              return;
            }
            var trackId = -1;
            var tracks = filterSubtitleTracks(this.media.textTracks);
            for (var id = 0; id < tracks.length; id++) {
              if (tracks[id].mode === "hidden") {
                trackId = id;
              } else if (tracks[id].mode === "showing") {
                trackId = id;
                break;
              }
            }
            if (this.subtitleTrack !== trackId) {
              this.subtitleTrack = trackId;
            }
          };
          _createClass(SubtitleTrackController2, [{
            key: "subtitleTracks",
            get: function get() {
              return this.tracksInGroup;
            }
          }, {
            key: "subtitleTrack",
            get: function get() {
              return this.trackId;
            },
            set: function set(newId) {
              this.selectDefaultTrack = false;
              var lastTrack = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
              this.setSubtitleTrack(newId, lastTrack);
            }
          }]);
          return SubtitleTrackController2;
        }(_base_playlist_controller__WEBPACK_IMPORTED_MODULE_2__["default"]);
        function filterSubtitleTracks(textTrackList) {
          var tracks = [];
          for (var i = 0; i < textTrackList.length; i++) {
            var track = textTrackList[i];
            if (track.kind === "subtitles" && track.label) {
              tracks.push(textTrackList[i]);
            }
          }
          return tracks;
        }
        __webpack_exports__["default"] = SubtitleTrackController;
      },
      "./src/controller/timeline-controller.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "TimelineController", function() {
          return TimelineController;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/events.ts");
        var _utils_cea_608_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/cea-608-parser.ts");
        var _utils_output_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/output-filter.ts");
        var _utils_webvtt_parser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/webvtt-parser.ts");
        var _utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utils/texttrack-utils.ts");
        var _utils_imsc1_ttml_parser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/utils/imsc1-ttml-parser.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/types/loader.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/utils/logger.ts");
        var TimelineController = /* @__PURE__ */ function() {
          function TimelineController2(hls2) {
            this.hls = void 0;
            this.media = null;
            this.config = void 0;
            this.enabled = true;
            this.Cues = void 0;
            this.textTracks = [];
            this.tracks = [];
            this.initPTS = [];
            this.timescale = [];
            this.unparsedVttFrags = [];
            this.captionsTracks = {};
            this.nonNativeCaptionsTracks = {};
            this.cea608Parser1 = void 0;
            this.cea608Parser2 = void 0;
            this.lastSn = -1;
            this.prevCC = -1;
            this.vttCCs = newVTTCCs();
            this.captionsProperties = void 0;
            this.hls = hls2;
            this.config = hls2.config;
            this.Cues = hls2.config.cueHandler;
            this.captionsProperties = {
              textTrack1: {
                label: this.config.captionsTextTrack1Label,
                languageCode: this.config.captionsTextTrack1LanguageCode
              },
              textTrack2: {
                label: this.config.captionsTextTrack2Label,
                languageCode: this.config.captionsTextTrack2LanguageCode
              },
              textTrack3: {
                label: this.config.captionsTextTrack3Label,
                languageCode: this.config.captionsTextTrack3LanguageCode
              },
              textTrack4: {
                label: this.config.captionsTextTrack4Label,
                languageCode: this.config.captionsTextTrack4LanguageCode
              }
            };
            if (this.config.enableCEA708Captions) {
              var channel1 = new _utils_output_filter__WEBPACK_IMPORTED_MODULE_3__["default"](this, "textTrack1");
              var channel2 = new _utils_output_filter__WEBPACK_IMPORTED_MODULE_3__["default"](this, "textTrack2");
              var channel3 = new _utils_output_filter__WEBPACK_IMPORTED_MODULE_3__["default"](this, "textTrack3");
              var channel4 = new _utils_output_filter__WEBPACK_IMPORTED_MODULE_3__["default"](this, "textTrack4");
              this.cea608Parser1 = new _utils_cea_608_parser__WEBPACK_IMPORTED_MODULE_2__["default"](1, channel1, channel2);
              this.cea608Parser2 = new _utils_cea_608_parser__WEBPACK_IMPORTED_MODULE_2__["default"](3, channel3, channel4);
            }
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_ATTACHING, this.onMediaAttaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADED, this.onManifestLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_LOADING, this.onFragLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_LOADED, this.onFragLoaded, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_DECRYPTED, this.onFragDecrypted, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].INIT_PTS_FOUND, this.onInitPtsFound, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_FLUSHING, this.onBufferFlushing, this);
          }
          var _proto = TimelineController2.prototype;
          _proto.destroy = function destroy() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_ATTACHING, this.onMediaAttaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MEDIA_DETACHING, this.onMediaDetaching, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADED, this.onManifestLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_LOADING, this.onFragLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_LOADED, this.onFragLoaded, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_DECRYPTED, this.onFragDecrypted, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].INIT_PTS_FOUND, this.onInitPtsFound, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].BUFFER_FLUSHING, this.onBufferFlushing, this);
            this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null;
          };
          _proto.addCues = function addCues(trackName, startTime, endTime, screen, cueRanges) {
            var merged = false;
            for (var i = cueRanges.length; i--; ) {
              var cueRange = cueRanges[i];
              var overlap = intersection(cueRange[0], cueRange[1], startTime, endTime);
              if (overlap >= 0) {
                cueRange[0] = Math.min(cueRange[0], startTime);
                cueRange[1] = Math.max(cueRange[1], endTime);
                merged = true;
                if (overlap / (endTime - startTime) > 0.5) {
                  return;
                }
              }
            }
            if (!merged) {
              cueRanges.push([startTime, endTime]);
            }
            if (this.config.renderTextTracksNatively) {
              var track = this.captionsTracks[trackName];
              this.Cues.newCue(track, startTime, endTime, screen);
            } else {
              var cues = this.Cues.newCue(null, startTime, endTime, screen);
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].CUES_PARSED, {
                type: "captions",
                cues,
                track: trackName
              });
            }
          };
          _proto.onInitPtsFound = function onInitPtsFound(event, _ref) {
            var _this = this;
            var frag = _ref.frag, id = _ref.id, initPTS = _ref.initPTS, timescale = _ref.timescale;
            var unparsedVttFrags = this.unparsedVttFrags;
            if (id === "main") {
              this.initPTS[frag.cc] = initPTS;
              this.timescale[frag.cc] = timescale;
            }
            if (unparsedVttFrags.length) {
              this.unparsedVttFrags = [];
              unparsedVttFrags.forEach(function(frag2) {
                _this.onFragLoaded(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_LOADED, frag2);
              });
            }
          };
          _proto.getExistingTrack = function getExistingTrack(trackName) {
            var media = this.media;
            if (media) {
              for (var i = 0; i < media.textTracks.length; i++) {
                var textTrack = media.textTracks[i];
                if (textTrack[trackName]) {
                  return textTrack;
                }
              }
            }
            return null;
          };
          _proto.createCaptionsTrack = function createCaptionsTrack(trackName) {
            if (this.config.renderTextTracksNatively) {
              this.createNativeTrack(trackName);
            } else {
              this.createNonNativeTrack(trackName);
            }
          };
          _proto.createNativeTrack = function createNativeTrack(trackName) {
            if (this.captionsTracks[trackName]) {
              return;
            }
            var captionsProperties = this.captionsProperties, captionsTracks = this.captionsTracks, media = this.media;
            var _captionsProperties$t = captionsProperties[trackName], label = _captionsProperties$t.label, languageCode = _captionsProperties$t.languageCode;
            var existingTrack = this.getExistingTrack(trackName);
            if (!existingTrack) {
              var textTrack = this.createTextTrack("captions", label, languageCode);
              if (textTrack) {
                textTrack[trackName] = true;
                captionsTracks[trackName] = textTrack;
              }
            } else {
              captionsTracks[trackName] = existingTrack;
              Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__["clearCurrentCues"])(captionsTracks[trackName]);
              Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__["sendAddTrackEvent"])(captionsTracks[trackName], media);
            }
          };
          _proto.createNonNativeTrack = function createNonNativeTrack(trackName) {
            if (this.nonNativeCaptionsTracks[trackName]) {
              return;
            }
            var trackProperties = this.captionsProperties[trackName];
            if (!trackProperties) {
              return;
            }
            var label = trackProperties.label;
            var track = {
              _id: trackName,
              label,
              kind: "captions",
              default: trackProperties.media ? !!trackProperties.media.default : false,
              closedCaptions: trackProperties.media
            };
            this.nonNativeCaptionsTracks[trackName] = track;
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].NON_NATIVE_TEXT_TRACKS_FOUND, {
              tracks: [track]
            });
          };
          _proto.createTextTrack = function createTextTrack(kind, label, lang) {
            var media = this.media;
            if (!media) {
              return;
            }
            return media.addTextTrack(kind, label, lang);
          };
          _proto.onMediaAttaching = function onMediaAttaching(event, data) {
            this.media = data.media;
            this._cleanTracks();
          };
          _proto.onMediaDetaching = function onMediaDetaching() {
            var captionsTracks = this.captionsTracks;
            Object.keys(captionsTracks).forEach(function(trackName) {
              Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__["clearCurrentCues"])(captionsTracks[trackName]);
              delete captionsTracks[trackName];
            });
            this.nonNativeCaptionsTracks = {};
          };
          _proto.onManifestLoading = function onManifestLoading() {
            this.lastSn = -1;
            this.prevCC = -1;
            this.vttCCs = newVTTCCs();
            this._cleanTracks();
            this.tracks = [];
            this.captionsTracks = {};
            this.nonNativeCaptionsTracks = {};
            this.textTracks = [];
            this.unparsedVttFrags = this.unparsedVttFrags || [];
            this.initPTS = [];
            this.timescale = [];
            if (this.cea608Parser1 && this.cea608Parser2) {
              this.cea608Parser1.reset();
              this.cea608Parser2.reset();
            }
          };
          _proto._cleanTracks = function _cleanTracks() {
            var media = this.media;
            if (!media) {
              return;
            }
            var textTracks = media.textTracks;
            if (textTracks) {
              for (var i = 0; i < textTracks.length; i++) {
                Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__["clearCurrentCues"])(textTracks[i]);
              }
            }
          };
          _proto.onSubtitleTracksUpdated = function onSubtitleTracksUpdated(event, data) {
            var _this2 = this;
            this.textTracks = [];
            var tracks = data.subtitleTracks || [];
            var hasIMSC1 = tracks.some(function(track) {
              return track.textCodec === _utils_imsc1_ttml_parser__WEBPACK_IMPORTED_MODULE_6__["IMSC1_CODEC"];
            });
            if (this.config.enableWebVTT || hasIMSC1 && this.config.enableIMSC1) {
              var sameTracks = this.tracks && tracks && this.tracks.length === tracks.length;
              this.tracks = tracks || [];
              if (this.config.renderTextTracksNatively) {
                var inUseTracks = this.media ? this.media.textTracks : [];
                this.tracks.forEach(function(track, index) {
                  var textTrack;
                  if (index < inUseTracks.length) {
                    var inUseTrack = null;
                    for (var i = 0; i < inUseTracks.length; i++) {
                      if (canReuseVttTextTrack(inUseTracks[i], track)) {
                        inUseTrack = inUseTracks[i];
                        break;
                      }
                    }
                    if (inUseTrack) {
                      textTrack = inUseTrack;
                    }
                  }
                  if (textTrack) {
                    Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__["clearCurrentCues"])(textTrack);
                  } else {
                    textTrack = _this2.createTextTrack("subtitles", track.name, track.lang);
                    if (textTrack) {
                      textTrack.mode = "disabled";
                    }
                  }
                  if (textTrack) {
                    textTrack.groupId = track.groupId;
                    _this2.textTracks.push(textTrack);
                  }
                });
              } else if (!sameTracks && this.tracks && this.tracks.length) {
                var tracksList = this.tracks.map(function(track) {
                  return {
                    label: track.name,
                    kind: track.type.toLowerCase(),
                    default: track.default,
                    subtitleTrack: track
                  };
                });
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].NON_NATIVE_TEXT_TRACKS_FOUND, {
                  tracks: tracksList
                });
              }
            }
          };
          _proto.onManifestLoaded = function onManifestLoaded(event, data) {
            var _this3 = this;
            if (this.config.enableCEA708Captions && data.captions) {
              data.captions.forEach(function(captionsTrack) {
                var instreamIdMatch = /(?:CC|SERVICE)([1-4])/.exec(captionsTrack.instreamId);
                if (!instreamIdMatch) {
                  return;
                }
                var trackName = "textTrack" + instreamIdMatch[1];
                var trackProperties = _this3.captionsProperties[trackName];
                if (!trackProperties) {
                  return;
                }
                trackProperties.label = captionsTrack.name;
                if (captionsTrack.lang) {
                  trackProperties.languageCode = captionsTrack.lang;
                }
                trackProperties.media = captionsTrack;
              });
            }
          };
          _proto.onFragLoading = function onFragLoading(event, data) {
            var cea608Parser1 = this.cea608Parser1, cea608Parser2 = this.cea608Parser2, lastSn = this.lastSn;
            if (!this.enabled || !(cea608Parser1 && cea608Parser2)) {
              return;
            }
            if (data.frag.type === _types_loader__WEBPACK_IMPORTED_MODULE_7__["PlaylistLevelType"].MAIN) {
              var sn = data.frag.sn;
              if (sn !== lastSn + 1) {
                cea608Parser1.reset();
                cea608Parser2.reset();
              }
              this.lastSn = sn;
            }
          };
          _proto.onFragLoaded = function onFragLoaded(event, data) {
            var frag = data.frag, payload = data.payload;
            var initPTS = this.initPTS, unparsedVttFrags = this.unparsedVttFrags;
            if (frag.type === _types_loader__WEBPACK_IMPORTED_MODULE_7__["PlaylistLevelType"].SUBTITLE) {
              if (payload.byteLength) {
                if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(initPTS[frag.cc])) {
                  unparsedVttFrags.push(data);
                  if (initPTS.length) {
                    this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_FRAG_PROCESSED, {
                      success: false,
                      frag,
                      error: new Error("Missing initial subtitle PTS")
                    });
                  }
                  return;
                }
                var decryptData = frag.decryptdata;
                if (decryptData == null || decryptData.key == null || decryptData.method !== "AES-128") {
                  var trackPlaylistMedia = this.tracks[frag.level];
                  var vttCCs = this.vttCCs;
                  if (!vttCCs[frag.cc]) {
                    vttCCs[frag.cc] = {
                      start: frag.start,
                      prevCC: this.prevCC,
                      new: true
                    };
                    this.prevCC = frag.cc;
                  }
                  if (trackPlaylistMedia && trackPlaylistMedia.textCodec === _utils_imsc1_ttml_parser__WEBPACK_IMPORTED_MODULE_6__["IMSC1_CODEC"]) {
                    this._parseIMSC1(frag, payload);
                  } else {
                    this._parseVTTs(frag, payload, vttCCs);
                  }
                }
              } else {
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_FRAG_PROCESSED, {
                  success: false,
                  frag,
                  error: new Error("Empty subtitle payload")
                });
              }
            }
          };
          _proto._parseIMSC1 = function _parseIMSC1(frag, payload) {
            var _this4 = this;
            var hls2 = this.hls;
            Object(_utils_imsc1_ttml_parser__WEBPACK_IMPORTED_MODULE_6__["parseIMSC1"])(payload, this.initPTS[frag.cc], this.timescale[frag.cc], function(cues) {
              _this4._appendCues(cues, frag.level);
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_FRAG_PROCESSED, {
                success: true,
                frag
              });
            }, function(error) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_8__["logger"].log("Failed to parse IMSC1: " + error);
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_FRAG_PROCESSED, {
                success: false,
                frag,
                error
              });
            });
          };
          _proto._parseVTTs = function _parseVTTs(frag, payload, vttCCs) {
            var _this5 = this;
            var hls2 = this.hls;
            Object(_utils_webvtt_parser__WEBPACK_IMPORTED_MODULE_4__["parseWebVTT"])(payload, this.initPTS[frag.cc], this.timescale[frag.cc], vttCCs, frag.cc, frag.start, function(cues) {
              _this5._appendCues(cues, frag.level);
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_FRAG_PROCESSED, {
                success: true,
                frag
              });
            }, function(error) {
              _this5._fallbackToIMSC1(frag, payload);
              _utils_logger__WEBPACK_IMPORTED_MODULE_8__["logger"].log("Failed to parse VTT cue: " + error);
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_FRAG_PROCESSED, {
                success: false,
                frag,
                error
              });
            });
          };
          _proto._fallbackToIMSC1 = function _fallbackToIMSC1(frag, payload) {
            var _this6 = this;
            var trackPlaylistMedia = this.tracks[frag.level];
            if (!trackPlaylistMedia.textCodec) {
              Object(_utils_imsc1_ttml_parser__WEBPACK_IMPORTED_MODULE_6__["parseIMSC1"])(payload, this.initPTS[frag.cc], this.timescale[frag.cc], function() {
                trackPlaylistMedia.textCodec = _utils_imsc1_ttml_parser__WEBPACK_IMPORTED_MODULE_6__["IMSC1_CODEC"];
                _this6._parseIMSC1(frag, payload);
              }, function() {
                trackPlaylistMedia.textCodec = "wvtt";
              });
            }
          };
          _proto._appendCues = function _appendCues(cues, fragLevel) {
            var hls2 = this.hls;
            if (this.config.renderTextTracksNatively) {
              var textTrack = this.textTracks[fragLevel];
              if (textTrack.mode === "disabled") {
                return;
              }
              cues.forEach(function(cue) {
                return Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__["addCueToTrack"])(textTrack, cue);
              });
            } else {
              var currentTrack = this.tracks[fragLevel];
              var track = currentTrack.default ? "default" : "subtitles" + fragLevel;
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].CUES_PARSED, {
                type: "subtitles",
                cues,
                track
              });
            }
          };
          _proto.onFragDecrypted = function onFragDecrypted(event, data) {
            var frag = data.frag;
            if (frag.type === _types_loader__WEBPACK_IMPORTED_MODULE_7__["PlaylistLevelType"].SUBTITLE) {
              if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(this.initPTS[frag.cc])) {
                this.unparsedVttFrags.push(data);
                return;
              }
              this.onFragLoaded(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_LOADED, data);
            }
          };
          _proto.onSubtitleTracksCleared = function onSubtitleTracksCleared() {
            this.tracks = [];
            this.captionsTracks = {};
          };
          _proto.onFragParsingUserdata = function onFragParsingUserdata(event, data) {
            var cea608Parser1 = this.cea608Parser1, cea608Parser2 = this.cea608Parser2;
            if (!this.enabled || !(cea608Parser1 && cea608Parser2)) {
              return;
            }
            for (var i = 0; i < data.samples.length; i++) {
              var ccBytes = data.samples[i].bytes;
              if (ccBytes) {
                var ccdatas = this.extractCea608Data(ccBytes);
                cea608Parser1.addData(data.samples[i].pts, ccdatas[0]);
                cea608Parser2.addData(data.samples[i].pts, ccdatas[1]);
              }
            }
          };
          _proto.onBufferFlushing = function onBufferFlushing(event, _ref2) {
            var startOffset = _ref2.startOffset, endOffset = _ref2.endOffset, endOffsetSubtitles = _ref2.endOffsetSubtitles, type = _ref2.type;
            var media = this.media;
            if (!media || media.currentTime < endOffset) {
              return;
            }
            if (!type || type === "video") {
              var captionsTracks = this.captionsTracks;
              Object.keys(captionsTracks).forEach(function(trackName) {
                return Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__["removeCuesInRange"])(captionsTracks[trackName], startOffset, endOffset);
              });
            }
            if (this.config.renderTextTracksNatively) {
              if (startOffset === 0 && endOffsetSubtitles !== void 0) {
                var textTracks = this.textTracks;
                Object.keys(textTracks).forEach(function(trackName) {
                  return Object(_utils_texttrack_utils__WEBPACK_IMPORTED_MODULE_5__["removeCuesInRange"])(textTracks[trackName], startOffset, endOffsetSubtitles);
                });
              }
            }
          };
          _proto.extractCea608Data = function extractCea608Data(byteArray) {
            var count = byteArray[0] & 31;
            var position = 2;
            var actualCCBytes = [[], []];
            for (var j = 0; j < count; j++) {
              var tmpByte = byteArray[position++];
              var ccbyte1 = 127 & byteArray[position++];
              var ccbyte2 = 127 & byteArray[position++];
              var ccValid = (4 & tmpByte) !== 0;
              var ccType = 3 & tmpByte;
              if (ccbyte1 === 0 && ccbyte2 === 0) {
                continue;
              }
              if (ccValid) {
                if (ccType === 0 || ccType === 1) {
                  actualCCBytes[ccType].push(ccbyte1);
                  actualCCBytes[ccType].push(ccbyte2);
                }
              }
            }
            return actualCCBytes;
          };
          return TimelineController2;
        }();
        function canReuseVttTextTrack(inUseTrack, manifestTrack) {
          return inUseTrack && inUseTrack.label === manifestTrack.name && !(inUseTrack.textTrack1 || inUseTrack.textTrack2);
        }
        function intersection(x1, x2, y1, y2) {
          return Math.min(x2, y2) - Math.max(x1, y1);
        }
        function newVTTCCs() {
          return {
            ccOffset: 0,
            presentationOffset: 0,
            0: {
              start: 0,
              prevCC: -1,
              new: false
            }
          };
        }
      },
      "./src/crypt/aes-crypto.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return AESCrypto;
        });
        var AESCrypto = /* @__PURE__ */ function() {
          function AESCrypto2(subtle, iv) {
            this.subtle = void 0;
            this.aesIV = void 0;
            this.subtle = subtle;
            this.aesIV = iv;
          }
          var _proto = AESCrypto2.prototype;
          _proto.decrypt = function decrypt(data, key) {
            return this.subtle.decrypt({
              name: "AES-CBC",
              iv: this.aesIV
            }, key, data);
          };
          return AESCrypto2;
        }();
      },
      "./src/crypt/aes-decryptor.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "removePadding", function() {
          return removePadding;
        });
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return AESDecryptor;
        });
        var _utils_typed_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/typed-array.ts");
        function removePadding(array) {
          var outputBytes = array.byteLength;
          var paddingBytes = outputBytes && new DataView(array.buffer).getUint8(outputBytes - 1);
          if (paddingBytes) {
            return Object(_utils_typed_array__WEBPACK_IMPORTED_MODULE_0__["sliceUint8"])(array, 0, outputBytes - paddingBytes);
          }
          return array;
        }
        var AESDecryptor = /* @__PURE__ */ function() {
          function AESDecryptor2() {
            this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
            this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
            this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)];
            this.sBox = new Uint32Array(256);
            this.invSBox = new Uint32Array(256);
            this.key = new Uint32Array(0);
            this.ksRows = 0;
            this.keySize = 0;
            this.keySchedule = void 0;
            this.invKeySchedule = void 0;
            this.initTable();
          }
          var _proto = AESDecryptor2.prototype;
          _proto.uint8ArrayToUint32Array_ = function uint8ArrayToUint32Array_(arrayBuffer) {
            var view = new DataView(arrayBuffer);
            var newArray = new Uint32Array(4);
            for (var i = 0; i < 4; i++) {
              newArray[i] = view.getUint32(i * 4);
            }
            return newArray;
          };
          _proto.initTable = function initTable() {
            var sBox = this.sBox;
            var invSBox = this.invSBox;
            var subMix = this.subMix;
            var subMix0 = subMix[0];
            var subMix1 = subMix[1];
            var subMix2 = subMix[2];
            var subMix3 = subMix[3];
            var invSubMix = this.invSubMix;
            var invSubMix0 = invSubMix[0];
            var invSubMix1 = invSubMix[1];
            var invSubMix2 = invSubMix[2];
            var invSubMix3 = invSubMix[3];
            var d = new Uint32Array(256);
            var x = 0;
            var xi = 0;
            var i = 0;
            for (i = 0; i < 256; i++) {
              if (i < 128) {
                d[i] = i << 1;
              } else {
                d[i] = i << 1 ^ 283;
              }
            }
            for (i = 0; i < 256; i++) {
              var sx = xi ^ xi << 1 ^ xi << 2 ^ xi << 3 ^ xi << 4;
              sx = sx >>> 8 ^ sx & 255 ^ 99;
              sBox[x] = sx;
              invSBox[sx] = x;
              var x2 = d[x];
              var x4 = d[x2];
              var x8 = d[x4];
              var t = d[sx] * 257 ^ sx * 16843008;
              subMix0[x] = t << 24 | t >>> 8;
              subMix1[x] = t << 16 | t >>> 16;
              subMix2[x] = t << 8 | t >>> 24;
              subMix3[x] = t;
              t = x8 * 16843009 ^ x4 * 65537 ^ x2 * 257 ^ x * 16843008;
              invSubMix0[sx] = t << 24 | t >>> 8;
              invSubMix1[sx] = t << 16 | t >>> 16;
              invSubMix2[sx] = t << 8 | t >>> 24;
              invSubMix3[sx] = t;
              if (!x) {
                x = xi = 1;
              } else {
                x = x2 ^ d[d[d[x8 ^ x2]]];
                xi ^= d[d[xi]];
              }
            }
          };
          _proto.expandKey = function expandKey(keyBuffer) {
            var key = this.uint8ArrayToUint32Array_(keyBuffer);
            var sameKey = true;
            var offset = 0;
            while (offset < key.length && sameKey) {
              sameKey = key[offset] === this.key[offset];
              offset++;
            }
            if (sameKey) {
              return;
            }
            this.key = key;
            var keySize = this.keySize = key.length;
            if (keySize !== 4 && keySize !== 6 && keySize !== 8) {
              throw new Error("Invalid aes key size=" + keySize);
            }
            var ksRows = this.ksRows = (keySize + 6 + 1) * 4;
            var ksRow;
            var invKsRow;
            var keySchedule = this.keySchedule = new Uint32Array(ksRows);
            var invKeySchedule = this.invKeySchedule = new Uint32Array(ksRows);
            var sbox = this.sBox;
            var rcon = this.rcon;
            var invSubMix = this.invSubMix;
            var invSubMix0 = invSubMix[0];
            var invSubMix1 = invSubMix[1];
            var invSubMix2 = invSubMix[2];
            var invSubMix3 = invSubMix[3];
            var prev;
            var t;
            for (ksRow = 0; ksRow < ksRows; ksRow++) {
              if (ksRow < keySize) {
                prev = keySchedule[ksRow] = key[ksRow];
                continue;
              }
              t = prev;
              if (ksRow % keySize === 0) {
                t = t << 8 | t >>> 24;
                t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 255] << 16 | sbox[t >>> 8 & 255] << 8 | sbox[t & 255];
                t ^= rcon[ksRow / keySize | 0] << 24;
              } else if (keySize > 6 && ksRow % keySize === 4) {
                t = sbox[t >>> 24] << 24 | sbox[t >>> 16 & 255] << 16 | sbox[t >>> 8 & 255] << 8 | sbox[t & 255];
              }
              keySchedule[ksRow] = prev = (keySchedule[ksRow - keySize] ^ t) >>> 0;
            }
            for (invKsRow = 0; invKsRow < ksRows; invKsRow++) {
              ksRow = ksRows - invKsRow;
              if (invKsRow & 3) {
                t = keySchedule[ksRow];
              } else {
                t = keySchedule[ksRow - 4];
              }
              if (invKsRow < 4 || ksRow <= 4) {
                invKeySchedule[invKsRow] = t;
              } else {
                invKeySchedule[invKsRow] = invSubMix0[sbox[t >>> 24]] ^ invSubMix1[sbox[t >>> 16 & 255]] ^ invSubMix2[sbox[t >>> 8 & 255]] ^ invSubMix3[sbox[t & 255]];
              }
              invKeySchedule[invKsRow] = invKeySchedule[invKsRow] >>> 0;
            }
          };
          _proto.networkToHostOrderSwap = function networkToHostOrderSwap(word) {
            return word << 24 | (word & 65280) << 8 | (word & 16711680) >> 8 | word >>> 24;
          };
          _proto.decrypt = function decrypt(inputArrayBuffer, offset, aesIV) {
            var nRounds = this.keySize + 6;
            var invKeySchedule = this.invKeySchedule;
            var invSBOX = this.invSBox;
            var invSubMix = this.invSubMix;
            var invSubMix0 = invSubMix[0];
            var invSubMix1 = invSubMix[1];
            var invSubMix2 = invSubMix[2];
            var invSubMix3 = invSubMix[3];
            var initVector = this.uint8ArrayToUint32Array_(aesIV);
            var initVector0 = initVector[0];
            var initVector1 = initVector[1];
            var initVector2 = initVector[2];
            var initVector3 = initVector[3];
            var inputInt32 = new Int32Array(inputArrayBuffer);
            var outputInt32 = new Int32Array(inputInt32.length);
            var t0, t1, t2, t3;
            var s0, s1, s2, s3;
            var inputWords0, inputWords1, inputWords2, inputWords3;
            var ksRow, i;
            var swapWord = this.networkToHostOrderSwap;
            while (offset < inputInt32.length) {
              inputWords0 = swapWord(inputInt32[offset]);
              inputWords1 = swapWord(inputInt32[offset + 1]);
              inputWords2 = swapWord(inputInt32[offset + 2]);
              inputWords3 = swapWord(inputInt32[offset + 3]);
              s0 = inputWords0 ^ invKeySchedule[0];
              s1 = inputWords3 ^ invKeySchedule[1];
              s2 = inputWords2 ^ invKeySchedule[2];
              s3 = inputWords1 ^ invKeySchedule[3];
              ksRow = 4;
              for (i = 1; i < nRounds; i++) {
                t0 = invSubMix0[s0 >>> 24] ^ invSubMix1[s1 >> 16 & 255] ^ invSubMix2[s2 >> 8 & 255] ^ invSubMix3[s3 & 255] ^ invKeySchedule[ksRow];
                t1 = invSubMix0[s1 >>> 24] ^ invSubMix1[s2 >> 16 & 255] ^ invSubMix2[s3 >> 8 & 255] ^ invSubMix3[s0 & 255] ^ invKeySchedule[ksRow + 1];
                t2 = invSubMix0[s2 >>> 24] ^ invSubMix1[s3 >> 16 & 255] ^ invSubMix2[s0 >> 8 & 255] ^ invSubMix3[s1 & 255] ^ invKeySchedule[ksRow + 2];
                t3 = invSubMix0[s3 >>> 24] ^ invSubMix1[s0 >> 16 & 255] ^ invSubMix2[s1 >> 8 & 255] ^ invSubMix3[s2 & 255] ^ invKeySchedule[ksRow + 3];
                s0 = t0;
                s1 = t1;
                s2 = t2;
                s3 = t3;
                ksRow = ksRow + 4;
              }
              t0 = invSBOX[s0 >>> 24] << 24 ^ invSBOX[s1 >> 16 & 255] << 16 ^ invSBOX[s2 >> 8 & 255] << 8 ^ invSBOX[s3 & 255] ^ invKeySchedule[ksRow];
              t1 = invSBOX[s1 >>> 24] << 24 ^ invSBOX[s2 >> 16 & 255] << 16 ^ invSBOX[s3 >> 8 & 255] << 8 ^ invSBOX[s0 & 255] ^ invKeySchedule[ksRow + 1];
              t2 = invSBOX[s2 >>> 24] << 24 ^ invSBOX[s3 >> 16 & 255] << 16 ^ invSBOX[s0 >> 8 & 255] << 8 ^ invSBOX[s1 & 255] ^ invKeySchedule[ksRow + 2];
              t3 = invSBOX[s3 >>> 24] << 24 ^ invSBOX[s0 >> 16 & 255] << 16 ^ invSBOX[s1 >> 8 & 255] << 8 ^ invSBOX[s2 & 255] ^ invKeySchedule[ksRow + 3];
              outputInt32[offset] = swapWord(t0 ^ initVector0);
              outputInt32[offset + 1] = swapWord(t3 ^ initVector1);
              outputInt32[offset + 2] = swapWord(t2 ^ initVector2);
              outputInt32[offset + 3] = swapWord(t1 ^ initVector3);
              initVector0 = inputWords0;
              initVector1 = inputWords1;
              initVector2 = inputWords2;
              initVector3 = inputWords3;
              offset = offset + 4;
            }
            return outputInt32.buffer;
          };
          return AESDecryptor2;
        }();
      },
      "./src/crypt/decrypter.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return Decrypter;
        });
        var _aes_crypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/crypt/aes-crypto.ts");
        var _fast_aes_key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/crypt/fast-aes-key.ts");
        var _aes_decryptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/crypt/aes-decryptor.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/logger.ts");
        var _utils_mp4_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _utils_typed_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utils/typed-array.ts");
        var CHUNK_SIZE = 16;
        var Decrypter = /* @__PURE__ */ function() {
          function Decrypter2(observer, config, _temp) {
            var _ref = _temp === void 0 ? {} : _temp, _ref$removePKCS7Paddi = _ref.removePKCS7Padding, removePKCS7Padding = _ref$removePKCS7Paddi === void 0 ? true : _ref$removePKCS7Paddi;
            this.logEnabled = true;
            this.observer = void 0;
            this.config = void 0;
            this.removePKCS7Padding = void 0;
            this.subtle = null;
            this.softwareDecrypter = null;
            this.key = null;
            this.fastAesKey = null;
            this.remainderData = null;
            this.currentIV = null;
            this.currentResult = null;
            this.observer = observer;
            this.config = config;
            this.removePKCS7Padding = removePKCS7Padding;
            if (removePKCS7Padding) {
              try {
                var browserCrypto = self.crypto;
                if (browserCrypto) {
                  this.subtle = browserCrypto.subtle || browserCrypto.webkitSubtle;
                }
              } catch (e) {
              }
            }
            if (this.subtle === null) {
              this.config.enableSoftwareAES = true;
            }
          }
          var _proto = Decrypter2.prototype;
          _proto.destroy = function destroy() {
            this.observer = null;
          };
          _proto.isSync = function isSync() {
            return this.config.enableSoftwareAES;
          };
          _proto.flush = function flush() {
            var currentResult = this.currentResult;
            if (!currentResult) {
              this.reset();
              return;
            }
            var data = new Uint8Array(currentResult);
            this.reset();
            if (this.removePKCS7Padding) {
              return Object(_aes_decryptor__WEBPACK_IMPORTED_MODULE_2__["removePadding"])(data);
            }
            return data;
          };
          _proto.reset = function reset() {
            this.currentResult = null;
            this.currentIV = null;
            this.remainderData = null;
            if (this.softwareDecrypter) {
              this.softwareDecrypter = null;
            }
          };
          _proto.decrypt = function decrypt(data, key, iv, callback) {
            if (this.config.enableSoftwareAES) {
              this.softwareDecrypt(new Uint8Array(data), key, iv);
              var decryptResult = this.flush();
              if (decryptResult) {
                callback(decryptResult.buffer);
              }
            } else {
              this.webCryptoDecrypt(new Uint8Array(data), key, iv).then(callback);
            }
          };
          _proto.softwareDecrypt = function softwareDecrypt(data, key, iv) {
            var currentIV = this.currentIV, currentResult = this.currentResult, remainderData = this.remainderData;
            this.logOnce("JS AES decrypt");
            if (remainderData) {
              data = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_4__["appendUint8Array"])(remainderData, data);
              this.remainderData = null;
            }
            var currentChunk = this.getValidChunk(data);
            if (!currentChunk.length) {
              return null;
            }
            if (currentIV) {
              iv = currentIV;
            }
            var softwareDecrypter = this.softwareDecrypter;
            if (!softwareDecrypter) {
              softwareDecrypter = this.softwareDecrypter = new _aes_decryptor__WEBPACK_IMPORTED_MODULE_2__["default"]();
            }
            softwareDecrypter.expandKey(key);
            var result = currentResult;
            this.currentResult = softwareDecrypter.decrypt(currentChunk.buffer, 0, iv);
            this.currentIV = Object(_utils_typed_array__WEBPACK_IMPORTED_MODULE_5__["sliceUint8"])(currentChunk, -16).buffer;
            if (!result) {
              return null;
            }
            return result;
          };
          _proto.webCryptoDecrypt = function webCryptoDecrypt(data, key, iv) {
            var _this = this;
            var subtle = this.subtle;
            if (this.key !== key || !this.fastAesKey) {
              this.key = key;
              this.fastAesKey = new _fast_aes_key__WEBPACK_IMPORTED_MODULE_1__["default"](subtle, key);
            }
            return this.fastAesKey.expandKey().then(function(aesKey) {
              if (!subtle) {
                return Promise.reject(new Error("web crypto not initialized"));
              }
              var crypto = new _aes_crypto__WEBPACK_IMPORTED_MODULE_0__["default"](subtle, iv);
              return crypto.decrypt(data.buffer, aesKey);
            }).catch(function(err) {
              return _this.onWebCryptoError(err, data, key, iv);
            });
          };
          _proto.onWebCryptoError = function onWebCryptoError(err, data, key, iv) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", err);
            this.config.enableSoftwareAES = true;
            this.logEnabled = true;
            return this.softwareDecrypt(data, key, iv);
          };
          _proto.getValidChunk = function getValidChunk(data) {
            var currentChunk = data;
            var splitPoint = data.length - data.length % CHUNK_SIZE;
            if (splitPoint !== data.length) {
              currentChunk = Object(_utils_typed_array__WEBPACK_IMPORTED_MODULE_5__["sliceUint8"])(data, 0, splitPoint);
              this.remainderData = Object(_utils_typed_array__WEBPACK_IMPORTED_MODULE_5__["sliceUint8"])(data, splitPoint);
            }
            return currentChunk;
          };
          _proto.logOnce = function logOnce(msg) {
            if (!this.logEnabled) {
              return;
            }
            _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].log("[decrypter.ts]: " + msg);
            this.logEnabled = false;
          };
          return Decrypter2;
        }();
      },
      "./src/crypt/fast-aes-key.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return FastAESKey;
        });
        var FastAESKey = /* @__PURE__ */ function() {
          function FastAESKey2(subtle, key) {
            this.subtle = void 0;
            this.key = void 0;
            this.subtle = subtle;
            this.key = key;
          }
          var _proto = FastAESKey2.prototype;
          _proto.expandKey = function expandKey() {
            return this.subtle.importKey("raw", this.key, {
              name: "AES-CBC"
            }, false, ["encrypt", "decrypt"]);
          };
          return FastAESKey2;
        }();
      },
      "./src/demux/aacdemuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _base_audio_demuxer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/demux/base-audio-demuxer.ts");
        var _adts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/demux/adts.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/logger.ts");
        var _demux_id3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/demux/id3.ts");
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var AACDemuxer = /* @__PURE__ */ function(_BaseAudioDemuxer) {
          _inheritsLoose(AACDemuxer2, _BaseAudioDemuxer);
          function AACDemuxer2(observer, config) {
            var _this;
            _this = _BaseAudioDemuxer.call(this) || this;
            _this.observer = void 0;
            _this.config = void 0;
            _this.observer = observer;
            _this.config = config;
            return _this;
          }
          var _proto = AACDemuxer2.prototype;
          _proto.resetInitSegment = function resetInitSegment(audioCodec, videoCodec, duration) {
            _BaseAudioDemuxer.prototype.resetInitSegment.call(this, audioCodec, videoCodec, duration);
            this._audioTrack = {
              container: "audio/adts",
              type: "audio",
              id: 0,
              pid: -1,
              sequenceNumber: 0,
              isAAC: true,
              samples: [],
              manifestCodec: audioCodec,
              duration,
              inputTimeScale: 9e4,
              dropped: 0
            };
          };
          AACDemuxer2.probe = function probe(data) {
            if (!data) {
              return false;
            }
            var id3Data = _demux_id3__WEBPACK_IMPORTED_MODULE_3__["getID3Data"](data, 0) || [];
            var offset = id3Data.length;
            for (var length = data.length; offset < length; offset++) {
              if (_adts__WEBPACK_IMPORTED_MODULE_1__["probe"](data, offset)) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("ADTS sync word found !");
                return true;
              }
            }
            return false;
          };
          _proto.canParse = function canParse(data, offset) {
            return _adts__WEBPACK_IMPORTED_MODULE_1__["canParse"](data, offset);
          };
          _proto.appendFrame = function appendFrame(track, data, offset) {
            _adts__WEBPACK_IMPORTED_MODULE_1__["initTrackConfig"](track, this.observer, data, offset, track.manifestCodec);
            var frame = _adts__WEBPACK_IMPORTED_MODULE_1__["appendFrame"](track, data, offset, this.initPTS, this.frameIndex);
            if (frame && frame.missing === 0) {
              return frame;
            }
          };
          return AACDemuxer2;
        }(_base_audio_demuxer__WEBPACK_IMPORTED_MODULE_0__["default"]);
        AACDemuxer.minProbeByteLength = 9;
        __webpack_exports__["default"] = AACDemuxer;
      },
      "./src/demux/adts.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "getAudioConfig", function() {
          return getAudioConfig;
        });
        __webpack_require__.d(__webpack_exports__, "isHeaderPattern", function() {
          return isHeaderPattern;
        });
        __webpack_require__.d(__webpack_exports__, "getHeaderLength", function() {
          return getHeaderLength;
        });
        __webpack_require__.d(__webpack_exports__, "getFullFrameLength", function() {
          return getFullFrameLength;
        });
        __webpack_require__.d(__webpack_exports__, "canGetFrameLength", function() {
          return canGetFrameLength;
        });
        __webpack_require__.d(__webpack_exports__, "isHeader", function() {
          return isHeader;
        });
        __webpack_require__.d(__webpack_exports__, "canParse", function() {
          return canParse;
        });
        __webpack_require__.d(__webpack_exports__, "probe", function() {
          return probe;
        });
        __webpack_require__.d(__webpack_exports__, "initTrackConfig", function() {
          return initTrackConfig;
        });
        __webpack_require__.d(__webpack_exports__, "getFrameDuration", function() {
          return getFrameDuration;
        });
        __webpack_require__.d(__webpack_exports__, "parseFrameHeader", function() {
          return parseFrameHeader;
        });
        __webpack_require__.d(__webpack_exports__, "appendFrame", function() {
          return appendFrame;
        });
        var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/errors.ts");
        var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/events.ts");
        function getAudioConfig(observer, data, offset, audioCodec) {
          var adtsObjectType;
          var adtsExtensionSamplingIndex;
          var adtsChanelConfig;
          var config;
          var userAgent = navigator.userAgent.toLowerCase();
          var manifestCodec = audioCodec;
          var adtsSampleingRates = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
          adtsObjectType = ((data[offset + 2] & 192) >>> 6) + 1;
          var adtsSamplingIndex = (data[offset + 2] & 60) >>> 2;
          if (adtsSamplingIndex > adtsSampleingRates.length - 1) {
            observer.trigger(_events__WEBPACK_IMPORTED_MODULE_2__["Events"].ERROR, {
              type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].MEDIA_ERROR,
              details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].FRAG_PARSING_ERROR,
              fatal: true,
              reason: "invalid ADTS sampling index:" + adtsSamplingIndex
            });
            return;
          }
          adtsChanelConfig = (data[offset + 2] & 1) << 2;
          adtsChanelConfig |= (data[offset + 3] & 192) >>> 6;
          _utils_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].log("manifest codec:" + audioCodec + ", ADTS type:" + adtsObjectType + ", samplingIndex:" + adtsSamplingIndex);
          if (/firefox/i.test(userAgent)) {
            if (adtsSamplingIndex >= 6) {
              adtsObjectType = 5;
              config = new Array(4);
              adtsExtensionSamplingIndex = adtsSamplingIndex - 3;
            } else {
              adtsObjectType = 2;
              config = new Array(2);
              adtsExtensionSamplingIndex = adtsSamplingIndex;
            }
          } else if (userAgent.indexOf("android") !== -1) {
            adtsObjectType = 2;
            config = new Array(2);
            adtsExtensionSamplingIndex = adtsSamplingIndex;
          } else {
            adtsObjectType = 5;
            config = new Array(4);
            if (audioCodec && (audioCodec.indexOf("mp4a.40.29") !== -1 || audioCodec.indexOf("mp4a.40.5") !== -1) || !audioCodec && adtsSamplingIndex >= 6) {
              adtsExtensionSamplingIndex = adtsSamplingIndex - 3;
            } else {
              if (audioCodec && audioCodec.indexOf("mp4a.40.2") !== -1 && (adtsSamplingIndex >= 6 && adtsChanelConfig === 1 || /vivaldi/i.test(userAgent)) || !audioCodec && adtsChanelConfig === 1) {
                adtsObjectType = 2;
                config = new Array(2);
              }
              adtsExtensionSamplingIndex = adtsSamplingIndex;
            }
          }
          config[0] = adtsObjectType << 3;
          config[0] |= (adtsSamplingIndex & 14) >> 1;
          config[1] |= (adtsSamplingIndex & 1) << 7;
          config[1] |= adtsChanelConfig << 3;
          if (adtsObjectType === 5) {
            config[1] |= (adtsExtensionSamplingIndex & 14) >> 1;
            config[2] = (adtsExtensionSamplingIndex & 1) << 7;
            config[2] |= 2 << 2;
            config[3] = 0;
          }
          return {
            config,
            samplerate: adtsSampleingRates[adtsSamplingIndex],
            channelCount: adtsChanelConfig,
            codec: "mp4a.40." + adtsObjectType,
            manifestCodec
          };
        }
        function isHeaderPattern(data, offset) {
          return data[offset] === 255 && (data[offset + 1] & 246) === 240;
        }
        function getHeaderLength(data, offset) {
          return data[offset + 1] & 1 ? 7 : 9;
        }
        function getFullFrameLength(data, offset) {
          return (data[offset + 3] & 3) << 11 | data[offset + 4] << 3 | (data[offset + 5] & 224) >>> 5;
        }
        function canGetFrameLength(data, offset) {
          return offset + 5 < data.length;
        }
        function isHeader(data, offset) {
          return offset + 1 < data.length && isHeaderPattern(data, offset);
        }
        function canParse(data, offset) {
          return canGetFrameLength(data, offset) && isHeaderPattern(data, offset) && getFullFrameLength(data, offset) <= data.length - offset;
        }
        function probe(data, offset) {
          if (isHeader(data, offset)) {
            var headerLength = getHeaderLength(data, offset);
            if (offset + headerLength >= data.length) {
              return false;
            }
            var frameLength = getFullFrameLength(data, offset);
            if (frameLength <= headerLength) {
              return false;
            }
            var newOffset = offset + frameLength;
            return newOffset === data.length || isHeader(data, newOffset);
          }
          return false;
        }
        function initTrackConfig(track, observer, data, offset, audioCodec) {
          if (!track.samplerate) {
            var config = getAudioConfig(observer, data, offset, audioCodec);
            if (!config) {
              return;
            }
            track.config = config.config;
            track.samplerate = config.samplerate;
            track.channelCount = config.channelCount;
            track.codec = config.codec;
            track.manifestCodec = config.manifestCodec;
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].log("parsed codec:" + track.codec + ", rate:" + config.samplerate + ", channels:" + config.channelCount);
          }
        }
        function getFrameDuration(samplerate) {
          return 1024 * 9e4 / samplerate;
        }
        function parseFrameHeader(data, offset, pts, frameIndex, frameDuration) {
          var headerLength = getHeaderLength(data, offset);
          var frameLength = getFullFrameLength(data, offset);
          frameLength -= headerLength;
          if (frameLength > 0) {
            var stamp = pts + frameIndex * frameDuration;
            return {
              headerLength,
              frameLength,
              stamp
            };
          }
        }
        function appendFrame(track, data, offset, pts, frameIndex) {
          var frameDuration = getFrameDuration(track.samplerate);
          var header = parseFrameHeader(data, offset, pts, frameIndex, frameDuration);
          if (header) {
            var frameLength = header.frameLength, headerLength = header.headerLength, stamp = header.stamp;
            var length = headerLength + frameLength;
            var missing = Math.max(0, offset + length - data.length);
            var unit;
            if (missing) {
              unit = new Uint8Array(length - headerLength);
              unit.set(data.subarray(offset + headerLength, data.length), 0);
            } else {
              unit = data.subarray(offset + headerLength, offset + length);
            }
            var sample = {
              unit,
              pts: stamp
            };
            if (!missing) {
              track.samples.push(sample);
            }
            return {
              sample,
              length,
              missing
            };
          }
        }
      },
      "./src/demux/base-audio-demuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "initPTSFn", function() {
          return initPTSFn;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _demux_id3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/demux/id3.ts");
        var _dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/demux/dummy-demuxed-track.ts");
        var _utils_mp4_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _utils_typed_array__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/typed-array.ts");
        var BaseAudioDemuxer = /* @__PURE__ */ function() {
          function BaseAudioDemuxer2() {
            this._audioTrack = void 0;
            this._id3Track = void 0;
            this.frameIndex = 0;
            this.cachedData = null;
            this.initPTS = null;
          }
          var _proto = BaseAudioDemuxer2.prototype;
          _proto.resetInitSegment = function resetInitSegment(audioCodec, videoCodec, duration) {
            this._id3Track = {
              type: "id3",
              id: 0,
              pid: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              dropped: 0
            };
          };
          _proto.resetTimeStamp = function resetTimeStamp() {
          };
          _proto.resetContiguity = function resetContiguity() {
          };
          _proto.canParse = function canParse(data, offset) {
            return false;
          };
          _proto.appendFrame = function appendFrame(track, data, offset) {
          };
          _proto.demux = function demux(data, timeOffset) {
            if (this.cachedData) {
              data = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_3__["appendUint8Array"])(this.cachedData, data);
              this.cachedData = null;
            }
            var id3Data = _demux_id3__WEBPACK_IMPORTED_MODULE_1__["getID3Data"](data, 0);
            var offset = id3Data ? id3Data.length : 0;
            var lastDataIndex;
            var pts;
            var track = this._audioTrack;
            var id3Track = this._id3Track;
            var timestamp = id3Data ? _demux_id3__WEBPACK_IMPORTED_MODULE_1__["getTimeStamp"](id3Data) : void 0;
            var length = data.length;
            if (this.frameIndex === 0 || this.initPTS === null) {
              this.initPTS = initPTSFn(timestamp, timeOffset);
            }
            if (id3Data && id3Data.length > 0) {
              id3Track.samples.push({
                pts: this.initPTS,
                dts: this.initPTS,
                data: id3Data
              });
            }
            pts = this.initPTS;
            while (offset < length) {
              if (this.canParse(data, offset)) {
                var frame = this.appendFrame(track, data, offset);
                if (frame) {
                  this.frameIndex++;
                  pts = frame.sample.pts;
                  offset += frame.length;
                  lastDataIndex = offset;
                } else {
                  offset = length;
                }
              } else if (_demux_id3__WEBPACK_IMPORTED_MODULE_1__["canParse"](data, offset)) {
                id3Data = _demux_id3__WEBPACK_IMPORTED_MODULE_1__["getID3Data"](data, offset);
                id3Track.samples.push({
                  pts,
                  dts: pts,
                  data: id3Data
                });
                offset += id3Data.length;
                lastDataIndex = offset;
              } else {
                offset++;
              }
              if (offset === length && lastDataIndex !== length) {
                var partialData = Object(_utils_typed_array__WEBPACK_IMPORTED_MODULE_4__["sliceUint8"])(data, lastDataIndex);
                if (this.cachedData) {
                  this.cachedData = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_3__["appendUint8Array"])(this.cachedData, partialData);
                } else {
                  this.cachedData = partialData;
                }
              }
            }
            return {
              audioTrack: track,
              avcTrack: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_2__["dummyTrack"])(),
              id3Track,
              textTrack: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_2__["dummyTrack"])()
            };
          };
          _proto.demuxSampleAes = function demuxSampleAes(data, keyData, timeOffset) {
            return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"));
          };
          _proto.flush = function flush(timeOffset) {
            var cachedData = this.cachedData;
            if (cachedData) {
              this.cachedData = null;
              this.demux(cachedData, 0);
            }
            this.frameIndex = 0;
            return {
              audioTrack: this._audioTrack,
              avcTrack: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_2__["dummyTrack"])(),
              id3Track: this._id3Track,
              textTrack: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_2__["dummyTrack"])()
            };
          };
          _proto.destroy = function destroy() {
          };
          return BaseAudioDemuxer2;
        }();
        var initPTSFn = function initPTSFn2(timestamp, timeOffset) {
          return Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(timestamp) ? timestamp * 90 : timeOffset * 9e4;
        };
        __webpack_exports__["default"] = BaseAudioDemuxer;
      },
      "./src/demux/chunk-cache.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return ChunkCache;
        });
        var ChunkCache = /* @__PURE__ */ function() {
          function ChunkCache2() {
            this.chunks = [];
            this.dataLength = 0;
          }
          var _proto = ChunkCache2.prototype;
          _proto.push = function push(chunk) {
            this.chunks.push(chunk);
            this.dataLength += chunk.length;
          };
          _proto.flush = function flush() {
            var chunks = this.chunks, dataLength = this.dataLength;
            var result;
            if (!chunks.length) {
              return new Uint8Array(0);
            } else if (chunks.length === 1) {
              result = chunks[0];
            } else {
              result = concatUint8Arrays(chunks, dataLength);
            }
            this.reset();
            return result;
          };
          _proto.reset = function reset() {
            this.chunks.length = 0;
            this.dataLength = 0;
          };
          return ChunkCache2;
        }();
        function concatUint8Arrays(chunks, dataLength) {
          var result = new Uint8Array(dataLength);
          var offset = 0;
          for (var i = 0; i < chunks.length; i++) {
            var chunk = chunks[i];
            result.set(chunk, offset);
            offset += chunk.length;
          }
          return result;
        }
      },
      "./src/demux/dummy-demuxed-track.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "dummyTrack", function() {
          return dummyTrack;
        });
        function dummyTrack() {
          return {
            type: "",
            id: -1,
            pid: -1,
            inputTimeScale: 9e4,
            sequenceNumber: -1,
            samples: [],
            dropped: 0
          };
        }
      },
      "./src/demux/exp-golomb.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.ts");
        var ExpGolomb = /* @__PURE__ */ function() {
          function ExpGolomb2(data) {
            this.data = void 0;
            this.bytesAvailable = void 0;
            this.word = void 0;
            this.bitsAvailable = void 0;
            this.data = data;
            this.bytesAvailable = data.byteLength;
            this.word = 0;
            this.bitsAvailable = 0;
          }
          var _proto = ExpGolomb2.prototype;
          _proto.loadWord = function loadWord() {
            var data = this.data;
            var bytesAvailable = this.bytesAvailable;
            var position = data.byteLength - bytesAvailable;
            var workingBytes = new Uint8Array(4);
            var availableBytes = Math.min(4, bytesAvailable);
            if (availableBytes === 0) {
              throw new Error("no bytes available");
            }
            workingBytes.set(data.subarray(position, position + availableBytes));
            this.word = new DataView(workingBytes.buffer).getUint32(0);
            this.bitsAvailable = availableBytes * 8;
            this.bytesAvailable -= availableBytes;
          };
          _proto.skipBits = function skipBits(count) {
            var skipBytes;
            if (this.bitsAvailable > count) {
              this.word <<= count;
              this.bitsAvailable -= count;
            } else {
              count -= this.bitsAvailable;
              skipBytes = count >> 3;
              count -= skipBytes >> 3;
              this.bytesAvailable -= skipBytes;
              this.loadWord();
              this.word <<= count;
              this.bitsAvailable -= count;
            }
          };
          _proto.readBits = function readBits(size) {
            var bits = Math.min(this.bitsAvailable, size);
            var valu = this.word >>> 32 - bits;
            if (size > 32) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].error("Cannot read more than 32 bits at a time");
            }
            this.bitsAvailable -= bits;
            if (this.bitsAvailable > 0) {
              this.word <<= bits;
            } else if (this.bytesAvailable > 0) {
              this.loadWord();
            }
            bits = size - bits;
            if (bits > 0 && this.bitsAvailable) {
              return valu << bits | this.readBits(bits);
            } else {
              return valu;
            }
          };
          _proto.skipLZ = function skipLZ() {
            var leadingZeroCount;
            for (leadingZeroCount = 0; leadingZeroCount < this.bitsAvailable; ++leadingZeroCount) {
              if ((this.word & 2147483648 >>> leadingZeroCount) !== 0) {
                this.word <<= leadingZeroCount;
                this.bitsAvailable -= leadingZeroCount;
                return leadingZeroCount;
              }
            }
            this.loadWord();
            return leadingZeroCount + this.skipLZ();
          };
          _proto.skipUEG = function skipUEG() {
            this.skipBits(1 + this.skipLZ());
          };
          _proto.skipEG = function skipEG() {
            this.skipBits(1 + this.skipLZ());
          };
          _proto.readUEG = function readUEG() {
            var clz = this.skipLZ();
            return this.readBits(clz + 1) - 1;
          };
          _proto.readEG = function readEG() {
            var valu = this.readUEG();
            if (1 & valu) {
              return 1 + valu >>> 1;
            } else {
              return -1 * (valu >>> 1);
            }
          };
          _proto.readBoolean = function readBoolean() {
            return this.readBits(1) === 1;
          };
          _proto.readUByte = function readUByte() {
            return this.readBits(8);
          };
          _proto.readUShort = function readUShort() {
            return this.readBits(16);
          };
          _proto.readUInt = function readUInt() {
            return this.readBits(32);
          };
          _proto.skipScalingList = function skipScalingList(count) {
            var lastScale = 8;
            var nextScale = 8;
            var deltaScale;
            for (var j = 0; j < count; j++) {
              if (nextScale !== 0) {
                deltaScale = this.readEG();
                nextScale = (lastScale + deltaScale + 256) % 256;
              }
              lastScale = nextScale === 0 ? lastScale : nextScale;
            }
          };
          _proto.readSPS = function readSPS() {
            var frameCropLeftOffset = 0;
            var frameCropRightOffset = 0;
            var frameCropTopOffset = 0;
            var frameCropBottomOffset = 0;
            var numRefFramesInPicOrderCntCycle;
            var scalingListCount;
            var i;
            var readUByte = this.readUByte.bind(this);
            var readBits = this.readBits.bind(this);
            var readUEG = this.readUEG.bind(this);
            var readBoolean = this.readBoolean.bind(this);
            var skipBits = this.skipBits.bind(this);
            var skipEG = this.skipEG.bind(this);
            var skipUEG = this.skipUEG.bind(this);
            var skipScalingList = this.skipScalingList.bind(this);
            readUByte();
            var profileIdc = readUByte();
            readBits(5);
            skipBits(3);
            readUByte();
            skipUEG();
            if (profileIdc === 100 || profileIdc === 110 || profileIdc === 122 || profileIdc === 244 || profileIdc === 44 || profileIdc === 83 || profileIdc === 86 || profileIdc === 118 || profileIdc === 128) {
              var chromaFormatIdc = readUEG();
              if (chromaFormatIdc === 3) {
                skipBits(1);
              }
              skipUEG();
              skipUEG();
              skipBits(1);
              if (readBoolean()) {
                scalingListCount = chromaFormatIdc !== 3 ? 8 : 12;
                for (i = 0; i < scalingListCount; i++) {
                  if (readBoolean()) {
                    if (i < 6) {
                      skipScalingList(16);
                    } else {
                      skipScalingList(64);
                    }
                  }
                }
              }
            }
            skipUEG();
            var picOrderCntType = readUEG();
            if (picOrderCntType === 0) {
              readUEG();
            } else if (picOrderCntType === 1) {
              skipBits(1);
              skipEG();
              skipEG();
              numRefFramesInPicOrderCntCycle = readUEG();
              for (i = 0; i < numRefFramesInPicOrderCntCycle; i++) {
                skipEG();
              }
            }
            skipUEG();
            skipBits(1);
            var picWidthInMbsMinus1 = readUEG();
            var picHeightInMapUnitsMinus1 = readUEG();
            var frameMbsOnlyFlag = readBits(1);
            if (frameMbsOnlyFlag === 0) {
              skipBits(1);
            }
            skipBits(1);
            if (readBoolean()) {
              frameCropLeftOffset = readUEG();
              frameCropRightOffset = readUEG();
              frameCropTopOffset = readUEG();
              frameCropBottomOffset = readUEG();
            }
            var pixelRatio = [1, 1];
            if (readBoolean()) {
              if (readBoolean()) {
                var aspectRatioIdc = readUByte();
                switch (aspectRatioIdc) {
                  case 1:
                    pixelRatio = [1, 1];
                    break;
                  case 2:
                    pixelRatio = [12, 11];
                    break;
                  case 3:
                    pixelRatio = [10, 11];
                    break;
                  case 4:
                    pixelRatio = [16, 11];
                    break;
                  case 5:
                    pixelRatio = [40, 33];
                    break;
                  case 6:
                    pixelRatio = [24, 11];
                    break;
                  case 7:
                    pixelRatio = [20, 11];
                    break;
                  case 8:
                    pixelRatio = [32, 11];
                    break;
                  case 9:
                    pixelRatio = [80, 33];
                    break;
                  case 10:
                    pixelRatio = [18, 11];
                    break;
                  case 11:
                    pixelRatio = [15, 11];
                    break;
                  case 12:
                    pixelRatio = [64, 33];
                    break;
                  case 13:
                    pixelRatio = [160, 99];
                    break;
                  case 14:
                    pixelRatio = [4, 3];
                    break;
                  case 15:
                    pixelRatio = [3, 2];
                    break;
                  case 16:
                    pixelRatio = [2, 1];
                    break;
                  case 255: {
                    pixelRatio = [readUByte() << 8 | readUByte(), readUByte() << 8 | readUByte()];
                    break;
                  }
                }
              }
            }
            return {
              width: Math.ceil((picWidthInMbsMinus1 + 1) * 16 - frameCropLeftOffset * 2 - frameCropRightOffset * 2),
              height: (2 - frameMbsOnlyFlag) * (picHeightInMapUnitsMinus1 + 1) * 16 - (frameMbsOnlyFlag ? 2 : 4) * (frameCropTopOffset + frameCropBottomOffset),
              pixelRatio
            };
          };
          _proto.readSliceType = function readSliceType() {
            this.readUByte();
            this.readUEG();
            return this.readUEG();
          };
          return ExpGolomb2;
        }();
        __webpack_exports__["default"] = ExpGolomb;
      },
      "./src/demux/id3.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "isHeader", function() {
          return isHeader;
        });
        __webpack_require__.d(__webpack_exports__, "isFooter", function() {
          return isFooter;
        });
        __webpack_require__.d(__webpack_exports__, "getID3Data", function() {
          return getID3Data;
        });
        __webpack_require__.d(__webpack_exports__, "canParse", function() {
          return canParse;
        });
        __webpack_require__.d(__webpack_exports__, "getTimeStamp", function() {
          return getTimeStamp;
        });
        __webpack_require__.d(__webpack_exports__, "isTimeStampFrame", function() {
          return isTimeStampFrame;
        });
        __webpack_require__.d(__webpack_exports__, "getID3Frames", function() {
          return getID3Frames;
        });
        __webpack_require__.d(__webpack_exports__, "decodeFrame", function() {
          return decodeFrame;
        });
        __webpack_require__.d(__webpack_exports__, "utf8ArrayToStr", function() {
          return utf8ArrayToStr;
        });
        __webpack_require__.d(__webpack_exports__, "testables", function() {
          return testables;
        });
        var isHeader = function isHeader2(data, offset) {
          if (offset + 10 <= data.length) {
            if (data[offset] === 73 && data[offset + 1] === 68 && data[offset + 2] === 51) {
              if (data[offset + 3] < 255 && data[offset + 4] < 255) {
                if (data[offset + 6] < 128 && data[offset + 7] < 128 && data[offset + 8] < 128 && data[offset + 9] < 128) {
                  return true;
                }
              }
            }
          }
          return false;
        };
        var isFooter = function isFooter2(data, offset) {
          if (offset + 10 <= data.length) {
            if (data[offset] === 51 && data[offset + 1] === 68 && data[offset + 2] === 73) {
              if (data[offset + 3] < 255 && data[offset + 4] < 255) {
                if (data[offset + 6] < 128 && data[offset + 7] < 128 && data[offset + 8] < 128 && data[offset + 9] < 128) {
                  return true;
                }
              }
            }
          }
          return false;
        };
        var getID3Data = function getID3Data2(data, offset) {
          var front = offset;
          var length = 0;
          while (isHeader(data, offset)) {
            length += 10;
            var size = readSize(data, offset + 6);
            length += size;
            if (isFooter(data, offset + 10)) {
              length += 10;
            }
            offset += length;
          }
          if (length > 0) {
            return data.subarray(front, front + length);
          }
          return void 0;
        };
        var readSize = function readSize2(data, offset) {
          var size = 0;
          size = (data[offset] & 127) << 21;
          size |= (data[offset + 1] & 127) << 14;
          size |= (data[offset + 2] & 127) << 7;
          size |= data[offset + 3] & 127;
          return size;
        };
        var canParse = function canParse2(data, offset) {
          return isHeader(data, offset) && readSize(data, offset + 6) + 10 <= data.length - offset;
        };
        var getTimeStamp = function getTimeStamp2(data) {
          var frames = getID3Frames(data);
          for (var i = 0; i < frames.length; i++) {
            var frame = frames[i];
            if (isTimeStampFrame(frame)) {
              return readTimeStamp(frame);
            }
          }
          return void 0;
        };
        var isTimeStampFrame = function isTimeStampFrame2(frame) {
          return frame && frame.key === "PRIV" && frame.info === "com.apple.streaming.transportStreamTimestamp";
        };
        var getFrameData = function getFrameData2(data) {
          var type = String.fromCharCode(data[0], data[1], data[2], data[3]);
          var size = readSize(data, 4);
          var offset = 10;
          return {
            type,
            size,
            data: data.subarray(offset, offset + size)
          };
        };
        var getID3Frames = function getID3Frames2(id3Data) {
          var offset = 0;
          var frames = [];
          while (isHeader(id3Data, offset)) {
            var size = readSize(id3Data, offset + 6);
            offset += 10;
            var end = offset + size;
            while (offset + 8 < end) {
              var frameData = getFrameData(id3Data.subarray(offset));
              var frame = decodeFrame(frameData);
              if (frame) {
                frames.push(frame);
              }
              offset += frameData.size + 10;
            }
            if (isFooter(id3Data, offset)) {
              offset += 10;
            }
          }
          return frames;
        };
        var decodeFrame = function decodeFrame2(frame) {
          if (frame.type === "PRIV") {
            return decodePrivFrame(frame);
          } else if (frame.type[0] === "W") {
            return decodeURLFrame(frame);
          }
          return decodeTextFrame(frame);
        };
        var decodePrivFrame = function decodePrivFrame2(frame) {
          if (frame.size < 2) {
            return void 0;
          }
          var owner = utf8ArrayToStr(frame.data, true);
          var privateData = new Uint8Array(frame.data.subarray(owner.length + 1));
          return {
            key: frame.type,
            info: owner,
            data: privateData.buffer
          };
        };
        var decodeTextFrame = function decodeTextFrame2(frame) {
          if (frame.size < 2) {
            return void 0;
          }
          if (frame.type === "TXXX") {
            var index = 1;
            var description = utf8ArrayToStr(frame.data.subarray(index), true);
            index += description.length + 1;
            var value = utf8ArrayToStr(frame.data.subarray(index));
            return {
              key: frame.type,
              info: description,
              data: value
            };
          }
          var text = utf8ArrayToStr(frame.data.subarray(1));
          return {
            key: frame.type,
            data: text
          };
        };
        var decodeURLFrame = function decodeURLFrame2(frame) {
          if (frame.type === "WXXX") {
            if (frame.size < 2) {
              return void 0;
            }
            var index = 1;
            var description = utf8ArrayToStr(frame.data.subarray(index), true);
            index += description.length + 1;
            var value = utf8ArrayToStr(frame.data.subarray(index));
            return {
              key: frame.type,
              info: description,
              data: value
            };
          }
          var url = utf8ArrayToStr(frame.data);
          return {
            key: frame.type,
            data: url
          };
        };
        var readTimeStamp = function readTimeStamp2(timeStampFrame) {
          if (timeStampFrame.data.byteLength === 8) {
            var data = new Uint8Array(timeStampFrame.data);
            var pts33Bit = data[3] & 1;
            var timestamp = (data[4] << 23) + (data[5] << 15) + (data[6] << 7) + data[7];
            timestamp /= 45;
            if (pts33Bit) {
              timestamp += 4772185884e-2;
            }
            return Math.round(timestamp);
          }
          return void 0;
        };
        var utf8ArrayToStr = function utf8ArrayToStr2(array, exitOnNull) {
          if (exitOnNull === void 0) {
            exitOnNull = false;
          }
          var decoder2 = getTextDecoder();
          if (decoder2) {
            var decoded = decoder2.decode(array);
            if (exitOnNull) {
              var idx = decoded.indexOf("\0");
              return idx !== -1 ? decoded.substring(0, idx) : decoded;
            }
            return decoded.replace(/\0/g, "");
          }
          var len = array.length;
          var c;
          var char2;
          var char3;
          var out = "";
          var i = 0;
          while (i < len) {
            c = array[i++];
            if (c === 0 && exitOnNull) {
              return out;
            } else if (c === 0 || c === 3) {
              continue;
            }
            switch (c >> 4) {
              case 0:
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
                out += String.fromCharCode(c);
                break;
              case 12:
              case 13:
                char2 = array[i++];
                out += String.fromCharCode((c & 31) << 6 | char2 & 63);
                break;
              case 14:
                char2 = array[i++];
                char3 = array[i++];
                out += String.fromCharCode((c & 15) << 12 | (char2 & 63) << 6 | (char3 & 63) << 0);
                break;
            }
          }
          return out;
        };
        var testables = {
          decodeTextFrame
        };
        var decoder;
        function getTextDecoder() {
          if (!decoder && typeof self.TextDecoder !== "undefined") {
            decoder = new self.TextDecoder("utf-8");
          }
          return decoder;
        }
      },
      "./src/demux/mp3demuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _base_audio_demuxer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/demux/base-audio-demuxer.ts");
        var _demux_id3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/demux/id3.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/logger.ts");
        var _mpegaudio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/demux/mpegaudio.ts");
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        var MP3Demuxer = /* @__PURE__ */ function(_BaseAudioDemuxer) {
          _inheritsLoose(MP3Demuxer2, _BaseAudioDemuxer);
          function MP3Demuxer2() {
            return _BaseAudioDemuxer.apply(this, arguments) || this;
          }
          var _proto = MP3Demuxer2.prototype;
          _proto.resetInitSegment = function resetInitSegment(audioCodec, videoCodec, duration) {
            _BaseAudioDemuxer.prototype.resetInitSegment.call(this, audioCodec, videoCodec, duration);
            this._audioTrack = {
              container: "audio/mpeg",
              type: "audio",
              id: 0,
              pid: -1,
              sequenceNumber: 0,
              isAAC: false,
              samples: [],
              manifestCodec: audioCodec,
              duration,
              inputTimeScale: 9e4,
              dropped: 0
            };
          };
          MP3Demuxer2.probe = function probe(data) {
            if (!data) {
              return false;
            }
            var id3Data = _demux_id3__WEBPACK_IMPORTED_MODULE_1__["getID3Data"](data, 0) || [];
            var offset = id3Data.length;
            for (var length = data.length; offset < length; offset++) {
              if (_mpegaudio__WEBPACK_IMPORTED_MODULE_3__["probe"](data, offset)) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].log("MPEG Audio sync word found !");
                return true;
              }
            }
            return false;
          };
          _proto.canParse = function canParse(data, offset) {
            return _mpegaudio__WEBPACK_IMPORTED_MODULE_3__["canParse"](data, offset);
          };
          _proto.appendFrame = function appendFrame(track, data, offset) {
            if (this.initPTS === null) {
              return;
            }
            return _mpegaudio__WEBPACK_IMPORTED_MODULE_3__["appendFrame"](track, data, offset, this.initPTS, this.frameIndex);
          };
          return MP3Demuxer2;
        }(_base_audio_demuxer__WEBPACK_IMPORTED_MODULE_0__["default"]);
        MP3Demuxer.minProbeByteLength = 4;
        __webpack_exports__["default"] = MP3Demuxer;
      },
      "./src/demux/mp4demuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_mp4_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/demux/dummy-demuxed-track.ts");
        var MP4Demuxer = /* @__PURE__ */ function() {
          function MP4Demuxer2(observer, config) {
            this.remainderData = null;
            this.config = void 0;
            this.config = config;
          }
          var _proto = MP4Demuxer2.prototype;
          _proto.resetTimeStamp = function resetTimeStamp() {
          };
          _proto.resetInitSegment = function resetInitSegment() {
          };
          _proto.resetContiguity = function resetContiguity() {
          };
          MP4Demuxer2.probe = function probe(data) {
            return Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_0__["findBox"])({
              data,
              start: 0,
              end: Math.min(data.length, 16384)
            }, ["moof"]).length > 0;
          };
          _proto.demux = function demux(data) {
            var avcSamples = data;
            var avcTrack = Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__["dummyTrack"])();
            if (this.config.progressive) {
              if (this.remainderData) {
                avcSamples = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_0__["appendUint8Array"])(this.remainderData, data);
              }
              var segmentedData = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_0__["segmentValidRange"])(avcSamples);
              this.remainderData = segmentedData.remainder;
              avcTrack.samples = segmentedData.valid || new Uint8Array();
            } else {
              avcTrack.samples = avcSamples;
            }
            return {
              audioTrack: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__["dummyTrack"])(),
              avcTrack,
              id3Track: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__["dummyTrack"])(),
              textTrack: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__["dummyTrack"])()
            };
          };
          _proto.flush = function flush() {
            var avcTrack = Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__["dummyTrack"])();
            avcTrack.samples = this.remainderData || new Uint8Array();
            this.remainderData = null;
            return {
              audioTrack: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__["dummyTrack"])(),
              avcTrack,
              id3Track: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__["dummyTrack"])(),
              textTrack: Object(_dummy_demuxed_track__WEBPACK_IMPORTED_MODULE_1__["dummyTrack"])()
            };
          };
          _proto.demuxSampleAes = function demuxSampleAes(data, keyData, timeOffset) {
            return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"));
          };
          _proto.destroy = function destroy() {
          };
          return MP4Demuxer2;
        }();
        MP4Demuxer.minProbeByteLength = 1024;
        __webpack_exports__["default"] = MP4Demuxer;
      },
      "./src/demux/mpegaudio.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "appendFrame", function() {
          return appendFrame;
        });
        __webpack_require__.d(__webpack_exports__, "parseHeader", function() {
          return parseHeader;
        });
        __webpack_require__.d(__webpack_exports__, "isHeaderPattern", function() {
          return isHeaderPattern;
        });
        __webpack_require__.d(__webpack_exports__, "isHeader", function() {
          return isHeader;
        });
        __webpack_require__.d(__webpack_exports__, "canParse", function() {
          return canParse;
        });
        __webpack_require__.d(__webpack_exports__, "probe", function() {
          return probe;
        });
        var chromeVersion = null;
        var BitratesMap = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160];
        var SamplingRateMap = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3];
        var SamplesCoefficients = [
          [
            0,
            72,
            144,
            12
          ],
          [
            0,
            0,
            0,
            0
          ],
          [
            0,
            72,
            144,
            12
          ],
          [
            0,
            144,
            144,
            12
          ]
        ];
        var BytesInSlot = [
          0,
          1,
          1,
          4
        ];
        function appendFrame(track, data, offset, pts, frameIndex) {
          if (offset + 24 > data.length) {
            return;
          }
          var header = parseHeader(data, offset);
          if (header && offset + header.frameLength <= data.length) {
            var frameDuration = header.samplesPerFrame * 9e4 / header.sampleRate;
            var stamp = pts + frameIndex * frameDuration;
            var sample = {
              unit: data.subarray(offset, offset + header.frameLength),
              pts: stamp,
              dts: stamp
            };
            track.config = [];
            track.channelCount = header.channelCount;
            track.samplerate = header.sampleRate;
            track.samples.push(sample);
            return {
              sample,
              length: header.frameLength,
              missing: 0
            };
          }
        }
        function parseHeader(data, offset) {
          var mpegVersion = data[offset + 1] >> 3 & 3;
          var mpegLayer = data[offset + 1] >> 1 & 3;
          var bitRateIndex = data[offset + 2] >> 4 & 15;
          var sampleRateIndex = data[offset + 2] >> 2 & 3;
          if (mpegVersion !== 1 && bitRateIndex !== 0 && bitRateIndex !== 15 && sampleRateIndex !== 3) {
            var paddingBit = data[offset + 2] >> 1 & 1;
            var channelMode = data[offset + 3] >> 6;
            var columnInBitrates = mpegVersion === 3 ? 3 - mpegLayer : mpegLayer === 3 ? 3 : 4;
            var bitRate = BitratesMap[columnInBitrates * 14 + bitRateIndex - 1] * 1e3;
            var columnInSampleRates = mpegVersion === 3 ? 0 : mpegVersion === 2 ? 1 : 2;
            var sampleRate = SamplingRateMap[columnInSampleRates * 3 + sampleRateIndex];
            var channelCount = channelMode === 3 ? 1 : 2;
            var sampleCoefficient = SamplesCoefficients[mpegVersion][mpegLayer];
            var bytesInSlot = BytesInSlot[mpegLayer];
            var samplesPerFrame = sampleCoefficient * 8 * bytesInSlot;
            var frameLength = Math.floor(sampleCoefficient * bitRate / sampleRate + paddingBit) * bytesInSlot;
            if (chromeVersion === null) {
              var userAgent = navigator.userAgent || "";
              var result = userAgent.match(/Chrome\/(\d+)/i);
              chromeVersion = result ? parseInt(result[1]) : 0;
            }
            var needChromeFix = !!chromeVersion && chromeVersion <= 87;
            if (needChromeFix && mpegLayer === 2 && bitRate >= 224e3 && channelMode === 0) {
              data[offset + 3] = data[offset + 3] | 128;
            }
            return {
              sampleRate,
              channelCount,
              frameLength,
              samplesPerFrame
            };
          }
        }
        function isHeaderPattern(data, offset) {
          return data[offset] === 255 && (data[offset + 1] & 224) === 224 && (data[offset + 1] & 6) !== 0;
        }
        function isHeader(data, offset) {
          return offset + 1 < data.length && isHeaderPattern(data, offset);
        }
        function canParse(data, offset) {
          var headerSize = 4;
          return isHeaderPattern(data, offset) && headerSize <= data.length - offset;
        }
        function probe(data, offset) {
          if (offset + 1 < data.length && isHeaderPattern(data, offset)) {
            var headerLength = 4;
            var header = parseHeader(data, offset);
            var frameLength = headerLength;
            if (header !== null && header !== void 0 && header.frameLength) {
              frameLength = header.frameLength;
            }
            var newOffset = offset + frameLength;
            return newOffset === data.length || isHeader(data, newOffset);
          }
          return false;
        }
      },
      "./src/demux/sample-aes.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _crypt_decrypter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/crypt/decrypter.ts");
        var _tsdemuxer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/demux/tsdemuxer.ts");
        var SampleAesDecrypter = /* @__PURE__ */ function() {
          function SampleAesDecrypter2(observer, config, keyData) {
            this.keyData = void 0;
            this.decrypter = void 0;
            this.keyData = keyData;
            this.decrypter = new _crypt_decrypter__WEBPACK_IMPORTED_MODULE_0__["default"](observer, config, {
              removePKCS7Padding: false
            });
          }
          var _proto = SampleAesDecrypter2.prototype;
          _proto.decryptBuffer = function decryptBuffer(encryptedData, callback) {
            this.decrypter.decrypt(encryptedData, this.keyData.key.buffer, this.keyData.iv.buffer, callback);
          };
          _proto.decryptAacSample = function decryptAacSample(samples, sampleIndex, callback, sync) {
            var curUnit = samples[sampleIndex].unit;
            var encryptedData = curUnit.subarray(16, curUnit.length - curUnit.length % 16);
            var encryptedBuffer = encryptedData.buffer.slice(encryptedData.byteOffset, encryptedData.byteOffset + encryptedData.length);
            var localthis = this;
            this.decryptBuffer(encryptedBuffer, function(decryptedBuffer) {
              var decryptedData = new Uint8Array(decryptedBuffer);
              curUnit.set(decryptedData, 16);
              if (!sync) {
                localthis.decryptAacSamples(samples, sampleIndex + 1, callback);
              }
            });
          };
          _proto.decryptAacSamples = function decryptAacSamples(samples, sampleIndex, callback) {
            for (; ; sampleIndex++) {
              if (sampleIndex >= samples.length) {
                callback();
                return;
              }
              if (samples[sampleIndex].unit.length < 32) {
                continue;
              }
              var sync = this.decrypter.isSync();
              this.decryptAacSample(samples, sampleIndex, callback, sync);
              if (!sync) {
                return;
              }
            }
          };
          _proto.getAvcEncryptedData = function getAvcEncryptedData(decodedData) {
            var encryptedDataLen = Math.floor((decodedData.length - 48) / 160) * 16 + 16;
            var encryptedData = new Int8Array(encryptedDataLen);
            var outputPos = 0;
            for (var inputPos = 32; inputPos <= decodedData.length - 16; inputPos += 160, outputPos += 16) {
              encryptedData.set(decodedData.subarray(inputPos, inputPos + 16), outputPos);
            }
            return encryptedData;
          };
          _proto.getAvcDecryptedUnit = function getAvcDecryptedUnit(decodedData, decryptedData) {
            var uint8DecryptedData = new Uint8Array(decryptedData);
            var inputPos = 0;
            for (var outputPos = 32; outputPos <= decodedData.length - 16; outputPos += 160, inputPos += 16) {
              decodedData.set(uint8DecryptedData.subarray(inputPos, inputPos + 16), outputPos);
            }
            return decodedData;
          };
          _proto.decryptAvcSample = function decryptAvcSample(samples, sampleIndex, unitIndex, callback, curUnit, sync) {
            var decodedData = Object(_tsdemuxer__WEBPACK_IMPORTED_MODULE_1__["discardEPB"])(curUnit.data);
            var encryptedData = this.getAvcEncryptedData(decodedData);
            var localthis = this;
            this.decryptBuffer(encryptedData.buffer, function(decryptedBuffer) {
              curUnit.data = localthis.getAvcDecryptedUnit(decodedData, decryptedBuffer);
              if (!sync) {
                localthis.decryptAvcSamples(samples, sampleIndex, unitIndex + 1, callback);
              }
            });
          };
          _proto.decryptAvcSamples = function decryptAvcSamples(samples, sampleIndex, unitIndex, callback) {
            if (samples instanceof Uint8Array) {
              throw new Error("Cannot decrypt samples of type Uint8Array");
            }
            for (; ; sampleIndex++, unitIndex = 0) {
              if (sampleIndex >= samples.length) {
                callback();
                return;
              }
              var curUnits = samples[sampleIndex].units;
              for (; ; unitIndex++) {
                if (unitIndex >= curUnits.length) {
                  break;
                }
                var curUnit = curUnits[unitIndex];
                if (curUnit.data.length <= 48 || curUnit.type !== 1 && curUnit.type !== 5) {
                  continue;
                }
                var sync = this.decrypter.isSync();
                this.decryptAvcSample(samples, sampleIndex, unitIndex, callback, curUnit, sync);
                if (!sync) {
                  return;
                }
              }
            }
          };
          return SampleAesDecrypter2;
        }();
        __webpack_exports__["default"] = SampleAesDecrypter;
      },
      "./src/demux/transmuxer-interface.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return TransmuxerInterface;
        });
        var webworkify_webpack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/webworkify-webpack/index.js");
        var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/events.ts");
        var _demux_transmuxer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/demux/transmuxer.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/logger.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/errors.ts");
        var _utils_mediasource_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utils/mediasource-helper.ts");
        var eventemitter3__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./node_modules/eventemitter3/index.js");
        var MediaSource2 = Object(_utils_mediasource_helper__WEBPACK_IMPORTED_MODULE_5__["getMediaSource"])() || {
          isTypeSupported: function isTypeSupported() {
            return false;
          }
        };
        var TransmuxerInterface = /* @__PURE__ */ function() {
          function TransmuxerInterface2(hls2, id, onTransmuxComplete, onFlush) {
            var _this = this;
            this.hls = void 0;
            this.id = void 0;
            this.observer = void 0;
            this.frag = null;
            this.part = null;
            this.worker = void 0;
            this.onwmsg = void 0;
            this.transmuxer = null;
            this.onTransmuxComplete = void 0;
            this.onFlush = void 0;
            this.hls = hls2;
            this.id = id;
            this.onTransmuxComplete = onTransmuxComplete;
            this.onFlush = onFlush;
            var config = hls2.config;
            var forwardMessage = function forwardMessage2(ev, data) {
              data = data || {};
              data.frag = _this.frag;
              data.id = _this.id;
              hls2.trigger(ev, data);
            };
            this.observer = new eventemitter3__WEBPACK_IMPORTED_MODULE_6__["EventEmitter"]();
            this.observer.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_DECRYPTED, forwardMessage);
            this.observer.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, forwardMessage);
            var typeSupported = {
              mp4: MediaSource2.isTypeSupported("video/mp4"),
              mpeg: MediaSource2.isTypeSupported("audio/mpeg"),
              mp3: MediaSource2.isTypeSupported('audio/mp4; codecs="mp3"')
            };
            var vendor = navigator.vendor;
            if (config.enableWorker && typeof Worker !== "undefined") {
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].log("demuxing in webworker");
              var worker;
              try {
                worker = this.worker = webworkify_webpack__WEBPACK_IMPORTED_MODULE_0__("./src/demux/transmuxer-worker.ts");
                this.onwmsg = this.onWorkerMessage.bind(this);
                worker.addEventListener("message", this.onwmsg);
                worker.onerror = function(event) {
                  hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, {
                    type: _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"].OTHER_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorDetails"].INTERNAL_EXCEPTION,
                    fatal: true,
                    event: "demuxerWorker",
                    error: new Error(event.message + "  (" + event.filename + ":" + event.lineno + ")")
                  });
                };
                worker.postMessage({
                  cmd: "init",
                  typeSupported,
                  vendor,
                  id,
                  config: JSON.stringify(config)
                });
              } catch (err) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Error in worker:", err);
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].error("Error while initializing DemuxerWorker, fallback to inline");
                if (worker) {
                  self.URL.revokeObjectURL(worker.objectURL);
                }
                this.transmuxer = new _demux_transmuxer__WEBPACK_IMPORTED_MODULE_2__["default"](this.observer, typeSupported, config, vendor, id);
                this.worker = null;
              }
            } else {
              this.transmuxer = new _demux_transmuxer__WEBPACK_IMPORTED_MODULE_2__["default"](this.observer, typeSupported, config, vendor, id);
            }
          }
          var _proto = TransmuxerInterface2.prototype;
          _proto.destroy = function destroy() {
            var w = this.worker;
            if (w) {
              w.removeEventListener("message", this.onwmsg);
              w.terminate();
              this.worker = null;
            } else {
              var transmuxer = this.transmuxer;
              if (transmuxer) {
                transmuxer.destroy();
                this.transmuxer = null;
              }
            }
            var observer = this.observer;
            if (observer) {
              observer.removeAllListeners();
            }
            this.observer = null;
          };
          _proto.push = function push(data, initSegmentData, audioCodec, videoCodec, frag, part, duration, accurateTimeOffset, chunkMeta, defaultInitPTS) {
            var _this2 = this;
            chunkMeta.transmuxing.start = self.performance.now();
            var transmuxer = this.transmuxer, worker = this.worker;
            var timeOffset = part ? part.start : frag.start;
            var decryptdata = frag.decryptdata;
            var lastFrag = this.frag;
            var discontinuity = !(lastFrag && frag.cc === lastFrag.cc);
            var trackSwitch = !(lastFrag && chunkMeta.level === lastFrag.level);
            var snDiff = lastFrag ? chunkMeta.sn - lastFrag.sn : -1;
            var partDiff = this.part ? chunkMeta.part - this.part.index : 1;
            var contiguous = !trackSwitch && (snDiff === 1 || snDiff === 0 && partDiff === 1);
            var now = self.performance.now();
            if (trackSwitch || snDiff || frag.stats.parsing.start === 0) {
              frag.stats.parsing.start = now;
            }
            if (part && (partDiff || !contiguous)) {
              part.stats.parsing.start = now;
            }
            var state = new _demux_transmuxer__WEBPACK_IMPORTED_MODULE_2__["TransmuxState"](discontinuity, contiguous, accurateTimeOffset, trackSwitch, timeOffset);
            if (!contiguous || discontinuity) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].log("[transmuxer-interface, " + frag.type + "]: Starting new transmux session for sn: " + chunkMeta.sn + " p: " + chunkMeta.part + " level: " + chunkMeta.level + " id: " + chunkMeta.id + "\n        discontinuity: " + discontinuity + "\n        trackSwitch: " + trackSwitch + "\n        contiguous: " + contiguous + "\n        accurateTimeOffset: " + accurateTimeOffset + "\n        timeOffset: " + timeOffset);
              var config = new _demux_transmuxer__WEBPACK_IMPORTED_MODULE_2__["TransmuxConfig"](audioCodec, videoCodec, initSegmentData, duration, defaultInitPTS);
              this.configureTransmuxer(config);
            }
            this.frag = frag;
            this.part = part;
            if (worker) {
              worker.postMessage({
                cmd: "demux",
                data,
                decryptdata,
                chunkMeta,
                state
              }, data instanceof ArrayBuffer ? [data] : []);
            } else if (transmuxer) {
              var _transmuxResult = transmuxer.push(data, decryptdata, chunkMeta, state);
              if (Object(_demux_transmuxer__WEBPACK_IMPORTED_MODULE_2__["isPromise"])(_transmuxResult)) {
                _transmuxResult.then(function(data2) {
                  _this2.handleTransmuxComplete(data2);
                });
              } else {
                this.handleTransmuxComplete(_transmuxResult);
              }
            }
          };
          _proto.flush = function flush(chunkMeta) {
            var _this3 = this;
            chunkMeta.transmuxing.start = self.performance.now();
            var transmuxer = this.transmuxer, worker = this.worker;
            if (worker) {
              worker.postMessage({
                cmd: "flush",
                chunkMeta
              });
            } else if (transmuxer) {
              var _transmuxResult2 = transmuxer.flush(chunkMeta);
              if (Object(_demux_transmuxer__WEBPACK_IMPORTED_MODULE_2__["isPromise"])(_transmuxResult2)) {
                _transmuxResult2.then(function(data) {
                  _this3.handleFlushResult(data, chunkMeta);
                });
              } else {
                this.handleFlushResult(_transmuxResult2, chunkMeta);
              }
            }
          };
          _proto.handleFlushResult = function handleFlushResult(results, chunkMeta) {
            var _this4 = this;
            results.forEach(function(result) {
              _this4.handleTransmuxComplete(result);
            });
            this.onFlush(chunkMeta);
          };
          _proto.onWorkerMessage = function onWorkerMessage(ev) {
            var data = ev.data;
            var hls2 = this.hls;
            switch (data.event) {
              case "init": {
                self.URL.revokeObjectURL(this.worker.objectURL);
                break;
              }
              case "transmuxComplete": {
                this.handleTransmuxComplete(data.data);
                break;
              }
              case "flush": {
                this.onFlush(data.data);
                break;
              }
              default: {
                data.data = data.data || {};
                data.data.frag = this.frag;
                data.data.id = this.id;
                hls2.trigger(data.event, data.data);
                break;
              }
            }
          };
          _proto.configureTransmuxer = function configureTransmuxer(config) {
            var worker = this.worker, transmuxer = this.transmuxer;
            if (worker) {
              worker.postMessage({
                cmd: "configure",
                config
              });
            } else if (transmuxer) {
              transmuxer.configure(config);
            }
          };
          _proto.handleTransmuxComplete = function handleTransmuxComplete(result) {
            result.chunkMeta.transmuxing.end = self.performance.now();
            this.onTransmuxComplete(result);
          };
          return TransmuxerInterface2;
        }();
      },
      "./src/demux/transmuxer-worker.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return TransmuxerWorker;
        });
        var _demux_transmuxer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/demux/transmuxer.ts");
        var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/events.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/logger.ts");
        var eventemitter3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./node_modules/eventemitter3/index.js");
        function TransmuxerWorker(self2) {
          var observer = new eventemitter3__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          var forwardMessage = function forwardMessage2(ev, data) {
            self2.postMessage({
              event: ev,
              data
            });
          };
          observer.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].FRAG_DECRYPTED, forwardMessage);
          observer.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, forwardMessage);
          self2.addEventListener("message", function(ev) {
            var data = ev.data;
            switch (data.cmd) {
              case "init": {
                var config = JSON.parse(data.config);
                self2.transmuxer = new _demux_transmuxer__WEBPACK_IMPORTED_MODULE_0__["default"](observer, data.typeSupported, config, data.vendor, data.id);
                Object(_utils_logger__WEBPACK_IMPORTED_MODULE_2__["enableLogs"])(config.debug);
                forwardMessage("init", null);
                break;
              }
              case "configure": {
                self2.transmuxer.configure(data.config);
                break;
              }
              case "demux": {
                var transmuxResult = self2.transmuxer.push(data.data, data.decryptdata, data.chunkMeta, data.state);
                if (Object(_demux_transmuxer__WEBPACK_IMPORTED_MODULE_0__["isPromise"])(transmuxResult)) {
                  transmuxResult.then(function(data2) {
                    emitTransmuxComplete(self2, data2);
                  });
                } else {
                  emitTransmuxComplete(self2, transmuxResult);
                }
                break;
              }
              case "flush": {
                var id = data.chunkMeta;
                var _transmuxResult = self2.transmuxer.flush(id);
                if (Object(_demux_transmuxer__WEBPACK_IMPORTED_MODULE_0__["isPromise"])(_transmuxResult)) {
                  _transmuxResult.then(function(results) {
                    handleFlushResult(self2, results, id);
                  });
                } else {
                  handleFlushResult(self2, _transmuxResult, id);
                }
                break;
              }
            }
          });
        }
        function emitTransmuxComplete(self2, transmuxResult) {
          if (isEmptyResult(transmuxResult.remuxResult)) {
            return;
          }
          var transferable = [];
          var _transmuxResult$remux = transmuxResult.remuxResult, audio = _transmuxResult$remux.audio, video = _transmuxResult$remux.video;
          if (audio) {
            addToTransferable(transferable, audio);
          }
          if (video) {
            addToTransferable(transferable, video);
          }
          self2.postMessage({
            event: "transmuxComplete",
            data: transmuxResult
          }, transferable);
        }
        function addToTransferable(transferable, track) {
          if (track.data1) {
            transferable.push(track.data1.buffer);
          }
          if (track.data2) {
            transferable.push(track.data2.buffer);
          }
        }
        function handleFlushResult(self2, results, chunkMeta) {
          results.forEach(function(result) {
            emitTransmuxComplete(self2, result);
          });
          self2.postMessage({
            event: "flush",
            data: chunkMeta
          });
        }
        function isEmptyResult(remuxResult) {
          return !remuxResult.audio && !remuxResult.video && !remuxResult.text && !remuxResult.id3 && !remuxResult.initSegment;
        }
      },
      "./src/demux/transmuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return Transmuxer;
        });
        __webpack_require__.d(__webpack_exports__, "isPromise", function() {
          return isPromise;
        });
        __webpack_require__.d(__webpack_exports__, "TransmuxConfig", function() {
          return TransmuxConfig;
        });
        __webpack_require__.d(__webpack_exports__, "TransmuxState", function() {
          return TransmuxState;
        });
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/errors.ts");
        var _crypt_decrypter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/crypt/decrypter.ts");
        var _demux_aacdemuxer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/demux/aacdemuxer.ts");
        var _demux_mp4demuxer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/demux/mp4demuxer.ts");
        var _demux_tsdemuxer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/demux/tsdemuxer.ts");
        var _demux_mp3demuxer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/demux/mp3demuxer.ts");
        var _remux_mp4_remuxer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/remux/mp4-remuxer.ts");
        var _remux_passthrough_remuxer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/remux/passthrough-remuxer.ts");
        var _chunk_cache__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/demux/chunk-cache.ts");
        var _utils_mp4_tools__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./src/utils/logger.ts");
        var now;
        try {
          now = self.performance.now.bind(self.performance);
        } catch (err) {
          _utils_logger__WEBPACK_IMPORTED_MODULE_11__["logger"].debug("Unable to use Performance API on this environment");
          now = self.Date.now;
        }
        var muxConfig = [{
          demux: _demux_tsdemuxer__WEBPACK_IMPORTED_MODULE_5__["default"],
          remux: _remux_mp4_remuxer__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, {
          demux: _demux_mp4demuxer__WEBPACK_IMPORTED_MODULE_4__["default"],
          remux: _remux_passthrough_remuxer__WEBPACK_IMPORTED_MODULE_8__["default"]
        }, {
          demux: _demux_aacdemuxer__WEBPACK_IMPORTED_MODULE_3__["default"],
          remux: _remux_mp4_remuxer__WEBPACK_IMPORTED_MODULE_7__["default"]
        }, {
          demux: _demux_mp3demuxer__WEBPACK_IMPORTED_MODULE_6__["default"],
          remux: _remux_mp4_remuxer__WEBPACK_IMPORTED_MODULE_7__["default"]
        }];
        var minProbeByteLength = 1024;
        muxConfig.forEach(function(_ref) {
          var demux = _ref.demux;
          minProbeByteLength = Math.max(minProbeByteLength, demux.minProbeByteLength);
        });
        var Transmuxer = /* @__PURE__ */ function() {
          function Transmuxer2(observer, typeSupported, config, vendor, id) {
            this.observer = void 0;
            this.typeSupported = void 0;
            this.config = void 0;
            this.vendor = void 0;
            this.id = void 0;
            this.demuxer = void 0;
            this.remuxer = void 0;
            this.decrypter = void 0;
            this.probe = void 0;
            this.decryptionPromise = null;
            this.transmuxConfig = void 0;
            this.currentTransmuxState = void 0;
            this.cache = new _chunk_cache__WEBPACK_IMPORTED_MODULE_9__["default"]();
            this.observer = observer;
            this.typeSupported = typeSupported;
            this.config = config;
            this.vendor = vendor;
            this.id = id;
          }
          var _proto = Transmuxer2.prototype;
          _proto.configure = function configure(transmuxConfig) {
            this.transmuxConfig = transmuxConfig;
            if (this.decrypter) {
              this.decrypter.reset();
            }
          };
          _proto.push = function push(data, decryptdata, chunkMeta, state) {
            var _this = this;
            var stats = chunkMeta.transmuxing;
            stats.executeStart = now();
            var uintData = new Uint8Array(data);
            var cache = this.cache, config = this.config, currentTransmuxState = this.currentTransmuxState, transmuxConfig = this.transmuxConfig;
            if (state) {
              this.currentTransmuxState = state;
            }
            var keyData = getEncryptionType(uintData, decryptdata);
            if (keyData && keyData.method === "AES-128") {
              var decrypter = this.getDecrypter();
              if (config.enableSoftwareAES) {
                var decryptedData = decrypter.softwareDecrypt(uintData, keyData.key.buffer, keyData.iv.buffer);
                if (!decryptedData) {
                  stats.executeEnd = now();
                  return emptyResult(chunkMeta);
                }
                uintData = new Uint8Array(decryptedData);
              } else {
                this.decryptionPromise = decrypter.webCryptoDecrypt(uintData, keyData.key.buffer, keyData.iv.buffer).then(function(decryptedData2) {
                  var result2 = _this.push(decryptedData2, null, chunkMeta);
                  _this.decryptionPromise = null;
                  return result2;
                });
                return this.decryptionPromise;
              }
            }
            var _ref2 = state || currentTransmuxState, contiguous = _ref2.contiguous, discontinuity = _ref2.discontinuity, trackSwitch = _ref2.trackSwitch, accurateTimeOffset = _ref2.accurateTimeOffset, timeOffset = _ref2.timeOffset;
            var audioCodec = transmuxConfig.audioCodec, videoCodec = transmuxConfig.videoCodec, defaultInitPts = transmuxConfig.defaultInitPts, duration = transmuxConfig.duration, initSegmentData = transmuxConfig.initSegmentData;
            if (discontinuity || trackSwitch) {
              this.resetInitSegment(initSegmentData, audioCodec, videoCodec, duration);
            }
            if (discontinuity) {
              this.resetInitialTimestamp(defaultInitPts);
            }
            if (!contiguous) {
              this.resetContiguity();
            }
            if (this.needsProbing(uintData, discontinuity, trackSwitch)) {
              if (cache.dataLength) {
                var cachedData = cache.flush();
                uintData = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_10__["appendUint8Array"])(cachedData, uintData);
              }
              this.configureTransmuxer(uintData, transmuxConfig);
            }
            var result = this.transmux(uintData, keyData, timeOffset, accurateTimeOffset, chunkMeta);
            var currentState = this.currentTransmuxState;
            currentState.contiguous = true;
            currentState.discontinuity = false;
            currentState.trackSwitch = false;
            stats.executeEnd = now();
            return result;
          };
          _proto.flush = function flush(chunkMeta) {
            var _this2 = this;
            var stats = chunkMeta.transmuxing;
            stats.executeStart = now();
            var decrypter = this.decrypter, cache = this.cache, currentTransmuxState = this.currentTransmuxState, decryptionPromise = this.decryptionPromise;
            if (decryptionPromise) {
              return decryptionPromise.then(function() {
                return _this2.flush(chunkMeta);
              });
            }
            var transmuxResults = [];
            var timeOffset = currentTransmuxState.timeOffset;
            if (decrypter) {
              var decryptedData = decrypter.flush();
              if (decryptedData) {
                transmuxResults.push(this.push(decryptedData, null, chunkMeta));
              }
            }
            var bytesSeen = cache.dataLength;
            cache.reset();
            var demuxer = this.demuxer, remuxer = this.remuxer;
            if (!demuxer || !remuxer) {
              if (bytesSeen >= minProbeByteLength) {
                this.observer.emit(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, _events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
                  type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].MEDIA_ERROR,
                  details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].FRAG_PARSING_ERROR,
                  fatal: true,
                  reason: "no demux matching with content found"
                });
              }
              stats.executeEnd = now();
              return [emptyResult(chunkMeta)];
            }
            var demuxResultOrPromise = demuxer.flush(timeOffset);
            if (isPromise(demuxResultOrPromise)) {
              return demuxResultOrPromise.then(function(demuxResult) {
                _this2.flushRemux(transmuxResults, demuxResult, chunkMeta);
                return transmuxResults;
              });
            }
            this.flushRemux(transmuxResults, demuxResultOrPromise, chunkMeta);
            return transmuxResults;
          };
          _proto.flushRemux = function flushRemux(transmuxResults, demuxResult, chunkMeta) {
            var audioTrack = demuxResult.audioTrack, avcTrack = demuxResult.avcTrack, id3Track = demuxResult.id3Track, textTrack = demuxResult.textTrack;
            var _this$currentTransmux = this.currentTransmuxState, accurateTimeOffset = _this$currentTransmux.accurateTimeOffset, timeOffset = _this$currentTransmux.timeOffset;
            _utils_logger__WEBPACK_IMPORTED_MODULE_11__["logger"].log("[transmuxer.ts]: Flushed fragment " + chunkMeta.sn + (chunkMeta.part > -1 ? " p: " + chunkMeta.part : "") + " of level " + chunkMeta.level);
            var remuxResult = this.remuxer.remux(audioTrack, avcTrack, id3Track, textTrack, timeOffset, accurateTimeOffset, true, this.id);
            transmuxResults.push({
              remuxResult,
              chunkMeta
            });
            chunkMeta.transmuxing.executeEnd = now();
          };
          _proto.resetInitialTimestamp = function resetInitialTimestamp(defaultInitPts) {
            var demuxer = this.demuxer, remuxer = this.remuxer;
            if (!demuxer || !remuxer) {
              return;
            }
            demuxer.resetTimeStamp(defaultInitPts);
            remuxer.resetTimeStamp(defaultInitPts);
          };
          _proto.resetContiguity = function resetContiguity() {
            var demuxer = this.demuxer, remuxer = this.remuxer;
            if (!demuxer || !remuxer) {
              return;
            }
            demuxer.resetContiguity();
            remuxer.resetNextTimestamp();
          };
          _proto.resetInitSegment = function resetInitSegment(initSegmentData, audioCodec, videoCodec, duration) {
            var demuxer = this.demuxer, remuxer = this.remuxer;
            if (!demuxer || !remuxer) {
              return;
            }
            demuxer.resetInitSegment(audioCodec, videoCodec, duration);
            remuxer.resetInitSegment(initSegmentData, audioCodec, videoCodec);
          };
          _proto.destroy = function destroy() {
            if (this.demuxer) {
              this.demuxer.destroy();
              this.demuxer = void 0;
            }
            if (this.remuxer) {
              this.remuxer.destroy();
              this.remuxer = void 0;
            }
          };
          _proto.transmux = function transmux(data, keyData, timeOffset, accurateTimeOffset, chunkMeta) {
            var result;
            if (keyData && keyData.method === "SAMPLE-AES") {
              result = this.transmuxSampleAes(data, keyData, timeOffset, accurateTimeOffset, chunkMeta);
            } else {
              result = this.transmuxUnencrypted(data, timeOffset, accurateTimeOffset, chunkMeta);
            }
            return result;
          };
          _proto.transmuxUnencrypted = function transmuxUnencrypted(data, timeOffset, accurateTimeOffset, chunkMeta) {
            var _demux = this.demuxer.demux(data, timeOffset, false, !this.config.progressive), audioTrack = _demux.audioTrack, avcTrack = _demux.avcTrack, id3Track = _demux.id3Track, textTrack = _demux.textTrack;
            var remuxResult = this.remuxer.remux(audioTrack, avcTrack, id3Track, textTrack, timeOffset, accurateTimeOffset, false, this.id);
            return {
              remuxResult,
              chunkMeta
            };
          };
          _proto.transmuxSampleAes = function transmuxSampleAes(data, decryptData, timeOffset, accurateTimeOffset, chunkMeta) {
            var _this3 = this;
            return this.demuxer.demuxSampleAes(data, decryptData, timeOffset).then(function(demuxResult) {
              var remuxResult = _this3.remuxer.remux(demuxResult.audioTrack, demuxResult.avcTrack, demuxResult.id3Track, demuxResult.textTrack, timeOffset, accurateTimeOffset, false, _this3.id);
              return {
                remuxResult,
                chunkMeta
              };
            });
          };
          _proto.configureTransmuxer = function configureTransmuxer(data, transmuxConfig) {
            var config = this.config, observer = this.observer, typeSupported = this.typeSupported, vendor = this.vendor;
            var audioCodec = transmuxConfig.audioCodec, defaultInitPts = transmuxConfig.defaultInitPts, duration = transmuxConfig.duration, initSegmentData = transmuxConfig.initSegmentData, videoCodec = transmuxConfig.videoCodec;
            var mux;
            for (var i = 0, len = muxConfig.length; i < len; i++) {
              if (muxConfig[i].demux.probe(data)) {
                mux = muxConfig[i];
                break;
              }
            }
            if (!mux) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_11__["logger"].warn("Failed to find demuxer by probing frag, treating as mp4 passthrough");
              mux = {
                demux: _demux_mp4demuxer__WEBPACK_IMPORTED_MODULE_4__["default"],
                remux: _remux_passthrough_remuxer__WEBPACK_IMPORTED_MODULE_8__["default"]
              };
            }
            var demuxer = this.demuxer;
            var remuxer = this.remuxer;
            var Remuxer = mux.remux;
            var Demuxer = mux.demux;
            if (!remuxer || !(remuxer instanceof Remuxer)) {
              this.remuxer = new Remuxer(observer, config, typeSupported, vendor);
            }
            if (!demuxer || !(demuxer instanceof Demuxer)) {
              this.demuxer = new Demuxer(observer, config, typeSupported);
              this.probe = Demuxer.probe;
            }
            this.resetInitSegment(initSegmentData, audioCodec, videoCodec, duration);
            this.resetInitialTimestamp(defaultInitPts);
          };
          _proto.needsProbing = function needsProbing(data, discontinuity, trackSwitch) {
            return !this.demuxer || !this.remuxer || discontinuity || trackSwitch;
          };
          _proto.getDecrypter = function getDecrypter() {
            var decrypter = this.decrypter;
            if (!decrypter) {
              decrypter = this.decrypter = new _crypt_decrypter__WEBPACK_IMPORTED_MODULE_2__["default"](this.observer, this.config);
            }
            return decrypter;
          };
          return Transmuxer2;
        }();
        function getEncryptionType(data, decryptData) {
          var encryptionType = null;
          if (data.byteLength > 0 && decryptData != null && decryptData.key != null && decryptData.iv !== null && decryptData.method != null) {
            encryptionType = decryptData;
          }
          return encryptionType;
        }
        var emptyResult = function emptyResult2(chunkMeta) {
          return {
            remuxResult: {},
            chunkMeta
          };
        };
        function isPromise(p) {
          return "then" in p && p.then instanceof Function;
        }
        var TransmuxConfig = function TransmuxConfig2(audioCodec, videoCodec, initSegmentData, duration, defaultInitPts) {
          this.audioCodec = void 0;
          this.videoCodec = void 0;
          this.initSegmentData = void 0;
          this.duration = void 0;
          this.defaultInitPts = void 0;
          this.audioCodec = audioCodec;
          this.videoCodec = videoCodec;
          this.initSegmentData = initSegmentData;
          this.duration = duration;
          this.defaultInitPts = defaultInitPts;
        };
        var TransmuxState = function TransmuxState2(discontinuity, contiguous, accurateTimeOffset, trackSwitch, timeOffset) {
          this.discontinuity = void 0;
          this.contiguous = void 0;
          this.accurateTimeOffset = void 0;
          this.trackSwitch = void 0;
          this.timeOffset = void 0;
          this.discontinuity = discontinuity;
          this.contiguous = contiguous;
          this.accurateTimeOffset = accurateTimeOffset;
          this.trackSwitch = trackSwitch;
          this.timeOffset = timeOffset;
        };
      },
      "./src/demux/tsdemuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "discardEPB", function() {
          return discardEPB;
        });
        var _adts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/demux/adts.ts");
        var _mpegaudio__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/demux/mpegaudio.ts");
        var _exp_golomb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/demux/exp-golomb.ts");
        var _id3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/demux/id3.ts");
        var _sample_aes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/demux/sample-aes.ts");
        var _events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/events.ts");
        var _utils_mp4_tools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/utils/logger.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/errors.ts");
        var RemuxerTrackIdConfig = {
          video: 1,
          audio: 2,
          id3: 3,
          text: 4
        };
        var TSDemuxer = /* @__PURE__ */ function() {
          function TSDemuxer2(observer, config, typeSupported) {
            this.observer = void 0;
            this.config = void 0;
            this.typeSupported = void 0;
            this.sampleAes = null;
            this.pmtParsed = false;
            this.audioCodec = void 0;
            this.videoCodec = void 0;
            this._duration = 0;
            this.aacLastPTS = null;
            this._initPTS = null;
            this._initDTS = null;
            this._pmtId = -1;
            this._avcTrack = void 0;
            this._audioTrack = void 0;
            this._id3Track = void 0;
            this._txtTrack = void 0;
            this.aacOverFlow = null;
            this.avcSample = null;
            this.remainderData = null;
            this.observer = observer;
            this.config = config;
            this.typeSupported = typeSupported;
          }
          TSDemuxer2.probe = function probe(data) {
            var syncOffset = TSDemuxer2.syncOffset(data);
            if (syncOffset < 0) {
              return false;
            } else {
              if (syncOffset) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].warn("MPEG2-TS detected but first sync word found @ offset " + syncOffset + ", junk ahead ?");
              }
              return true;
            }
          };
          TSDemuxer2.syncOffset = function syncOffset(data) {
            var scanwindow = Math.min(1e3, data.length - 3 * 188);
            var i = 0;
            while (i < scanwindow) {
              if (data[i] === 71 && data[i + 188] === 71 && data[i + 2 * 188] === 71) {
                return i;
              } else {
                i++;
              }
            }
            return -1;
          };
          TSDemuxer2.createTrack = function createTrack(type, duration) {
            return {
              container: type === "video" || type === "audio" ? "video/mp2t" : void 0,
              type,
              id: RemuxerTrackIdConfig[type],
              pid: -1,
              inputTimeScale: 9e4,
              sequenceNumber: 0,
              samples: [],
              dropped: 0,
              duration: type === "audio" ? duration : void 0
            };
          };
          var _proto = TSDemuxer2.prototype;
          _proto.resetInitSegment = function resetInitSegment(audioCodec, videoCodec, duration) {
            this.pmtParsed = false;
            this._pmtId = -1;
            this._avcTrack = TSDemuxer2.createTrack("video", duration);
            this._audioTrack = TSDemuxer2.createTrack("audio", duration);
            this._id3Track = TSDemuxer2.createTrack("id3", duration);
            this._txtTrack = TSDemuxer2.createTrack("text", duration);
            this._audioTrack.isAAC = true;
            this.aacOverFlow = null;
            this.aacLastPTS = null;
            this.avcSample = null;
            this.audioCodec = audioCodec;
            this.videoCodec = videoCodec;
            this._duration = duration;
          };
          _proto.resetTimeStamp = function resetTimeStamp() {
          };
          _proto.resetContiguity = function resetContiguity() {
            var _audioTrack = this._audioTrack, _avcTrack = this._avcTrack, _id3Track = this._id3Track;
            if (_audioTrack) {
              _audioTrack.pesData = null;
            }
            if (_avcTrack) {
              _avcTrack.pesData = null;
            }
            if (_id3Track) {
              _id3Track.pesData = null;
            }
            this.aacOverFlow = null;
            this.aacLastPTS = null;
          };
          _proto.demux = function demux(data, timeOffset, isSampleAes, flush) {
            if (isSampleAes === void 0) {
              isSampleAes = false;
            }
            if (flush === void 0) {
              flush = false;
            }
            if (!isSampleAes) {
              this.sampleAes = null;
            }
            var pes;
            var avcTrack = this._avcTrack;
            var audioTrack = this._audioTrack;
            var id3Track = this._id3Track;
            var avcId = avcTrack.pid;
            var avcData = avcTrack.pesData;
            var audioId = audioTrack.pid;
            var id3Id = id3Track.pid;
            var audioData = audioTrack.pesData;
            var id3Data = id3Track.pesData;
            var unknownPIDs = false;
            var pmtParsed = this.pmtParsed;
            var pmtId = this._pmtId;
            var len = data.length;
            if (this.remainderData) {
              data = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_6__["appendUint8Array"])(this.remainderData, data);
              len = data.length;
              this.remainderData = null;
            }
            if (len < 188 && !flush) {
              this.remainderData = data;
              return {
                audioTrack,
                avcTrack,
                id3Track,
                textTrack: this._txtTrack
              };
            }
            var syncOffset = Math.max(0, TSDemuxer2.syncOffset(data));
            len -= (len + syncOffset) % 188;
            if (len < data.byteLength && !flush) {
              this.remainderData = new Uint8Array(data.buffer, len, data.buffer.byteLength - len);
            }
            for (var start = syncOffset; start < len; start += 188) {
              if (data[start] === 71) {
                var stt = !!(data[start + 1] & 64);
                var pid = ((data[start + 1] & 31) << 8) + data[start + 2];
                var atf = (data[start + 3] & 48) >> 4;
                var offset = void 0;
                if (atf > 1) {
                  offset = start + 5 + data[start + 4];
                  if (offset === start + 188) {
                    continue;
                  }
                } else {
                  offset = start + 4;
                }
                switch (pid) {
                  case avcId:
                    if (stt) {
                      if (avcData && (pes = parsePES(avcData))) {
                        this.parseAVCPES(pes, false);
                      }
                      avcData = {
                        data: [],
                        size: 0
                      };
                    }
                    if (avcData) {
                      avcData.data.push(data.subarray(offset, start + 188));
                      avcData.size += start + 188 - offset;
                    }
                    break;
                  case audioId:
                    if (stt) {
                      if (audioData && (pes = parsePES(audioData))) {
                        if (audioTrack.isAAC) {
                          this.parseAACPES(pes);
                        } else {
                          this.parseMPEGPES(pes);
                        }
                      }
                      audioData = {
                        data: [],
                        size: 0
                      };
                    }
                    if (audioData) {
                      audioData.data.push(data.subarray(offset, start + 188));
                      audioData.size += start + 188 - offset;
                    }
                    break;
                  case id3Id:
                    if (stt) {
                      if (id3Data && (pes = parsePES(id3Data))) {
                        this.parseID3PES(pes);
                      }
                      id3Data = {
                        data: [],
                        size: 0
                      };
                    }
                    if (id3Data) {
                      id3Data.data.push(data.subarray(offset, start + 188));
                      id3Data.size += start + 188 - offset;
                    }
                    break;
                  case 0:
                    if (stt) {
                      offset += data[offset] + 1;
                    }
                    pmtId = this._pmtId = parsePAT(data, offset);
                    break;
                  case pmtId: {
                    if (stt) {
                      offset += data[offset] + 1;
                    }
                    var parsedPIDs = parsePMT(data, offset, this.typeSupported.mpeg === true || this.typeSupported.mp3 === true, isSampleAes);
                    avcId = parsedPIDs.avc;
                    if (avcId > 0) {
                      avcTrack.pid = avcId;
                    }
                    audioId = parsedPIDs.audio;
                    if (audioId > 0) {
                      audioTrack.pid = audioId;
                      audioTrack.isAAC = parsedPIDs.isAAC;
                    }
                    id3Id = parsedPIDs.id3;
                    if (id3Id > 0) {
                      id3Track.pid = id3Id;
                    }
                    if (unknownPIDs && !pmtParsed) {
                      _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].log("reparse from beginning");
                      unknownPIDs = false;
                      start = syncOffset - 188;
                    }
                    pmtParsed = this.pmtParsed = true;
                    break;
                  }
                  case 17:
                  case 8191:
                    break;
                  default:
                    unknownPIDs = true;
                    break;
                }
              } else {
                this.observer.emit(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].ERROR, _events__WEBPACK_IMPORTED_MODULE_5__["Events"].ERROR, {
                  type: _errors__WEBPACK_IMPORTED_MODULE_8__["ErrorTypes"].MEDIA_ERROR,
                  details: _errors__WEBPACK_IMPORTED_MODULE_8__["ErrorDetails"].FRAG_PARSING_ERROR,
                  fatal: false,
                  reason: "TS packet did not start with 0x47"
                });
              }
            }
            avcTrack.pesData = avcData;
            audioTrack.pesData = audioData;
            id3Track.pesData = id3Data;
            var demuxResult = {
              audioTrack,
              avcTrack,
              id3Track,
              textTrack: this._txtTrack
            };
            if (flush) {
              this.extractRemainingSamples(demuxResult);
            }
            return demuxResult;
          };
          _proto.flush = function flush() {
            var remainderData = this.remainderData;
            this.remainderData = null;
            var result;
            if (remainderData) {
              result = this.demux(remainderData, -1, false, true);
            } else {
              result = {
                audioTrack: this._audioTrack,
                avcTrack: this._avcTrack,
                textTrack: this._txtTrack,
                id3Track: this._id3Track
              };
            }
            this.extractRemainingSamples(result);
            if (this.sampleAes) {
              return this.decrypt(result, this.sampleAes);
            }
            return result;
          };
          _proto.extractRemainingSamples = function extractRemainingSamples(demuxResult) {
            var audioTrack = demuxResult.audioTrack, avcTrack = demuxResult.avcTrack, id3Track = demuxResult.id3Track;
            var avcData = avcTrack.pesData;
            var audioData = audioTrack.pesData;
            var id3Data = id3Track.pesData;
            var pes;
            if (avcData && (pes = parsePES(avcData))) {
              this.parseAVCPES(pes, true);
              avcTrack.pesData = null;
            } else {
              avcTrack.pesData = avcData;
            }
            if (audioData && (pes = parsePES(audioData))) {
              if (audioTrack.isAAC) {
                this.parseAACPES(pes);
              } else {
                this.parseMPEGPES(pes);
              }
              audioTrack.pesData = null;
            } else {
              if (audioData !== null && audioData !== void 0 && audioData.size) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].log("last AAC PES packet truncated,might overlap between fragments");
              }
              audioTrack.pesData = audioData;
            }
            if (id3Data && (pes = parsePES(id3Data))) {
              this.parseID3PES(pes);
              id3Track.pesData = null;
            } else {
              id3Track.pesData = id3Data;
            }
          };
          _proto.demuxSampleAes = function demuxSampleAes(data, keyData, timeOffset) {
            var demuxResult = this.demux(data, timeOffset, true, !this.config.progressive);
            var sampleAes = this.sampleAes = new _sample_aes__WEBPACK_IMPORTED_MODULE_4__["default"](this.observer, this.config, keyData);
            return this.decrypt(demuxResult, sampleAes);
          };
          _proto.decrypt = function decrypt(demuxResult, sampleAes) {
            return new Promise(function(resolve) {
              var audioTrack = demuxResult.audioTrack, avcTrack = demuxResult.avcTrack;
              if (audioTrack.samples && audioTrack.isAAC) {
                sampleAes.decryptAacSamples(audioTrack.samples, 0, function() {
                  if (avcTrack.samples) {
                    sampleAes.decryptAvcSamples(avcTrack.samples, 0, 0, function() {
                      resolve(demuxResult);
                    });
                  } else {
                    resolve(demuxResult);
                  }
                });
              } else if (avcTrack.samples) {
                sampleAes.decryptAvcSamples(avcTrack.samples, 0, 0, function() {
                  resolve(demuxResult);
                });
              }
            });
          };
          _proto.destroy = function destroy() {
            this._initPTS = this._initDTS = null;
            this._duration = 0;
          };
          _proto.parseAVCPES = function parseAVCPES(pes, last) {
            var _this = this;
            var track = this._avcTrack;
            var units = this.parseAVCNALu(pes.data);
            var avcSample = this.avcSample;
            var push;
            var spsfound = false;
            pes.data = null;
            if (avcSample && units.length && !track.audFound) {
              pushAccessUnit(avcSample, track);
              avcSample = this.avcSample = createAVCSample(false, pes.pts, pes.dts, "");
            }
            units.forEach(function(unit) {
              switch (unit.type) {
                case 1: {
                  push = true;
                  if (!avcSample) {
                    avcSample = _this.avcSample = createAVCSample(true, pes.pts, pes.dts, "");
                  }
                  avcSample.frame = true;
                  var data = unit.data;
                  if (spsfound && data.length > 4) {
                    var sliceType = new _exp_golomb__WEBPACK_IMPORTED_MODULE_2__["default"](data).readSliceType();
                    if (sliceType === 2 || sliceType === 4 || sliceType === 7 || sliceType === 9) {
                      avcSample.key = true;
                    }
                  }
                  break;
                }
                case 5:
                  push = true;
                  if (!avcSample) {
                    avcSample = _this.avcSample = createAVCSample(true, pes.pts, pes.dts, "");
                  }
                  avcSample.key = true;
                  avcSample.frame = true;
                  break;
                case 6: {
                  push = true;
                  var expGolombDecoder = new _exp_golomb__WEBPACK_IMPORTED_MODULE_2__["default"](discardEPB(unit.data));
                  expGolombDecoder.readUByte();
                  var payloadType = 0;
                  var payloadSize = 0;
                  var endOfCaptions = false;
                  var b = 0;
                  while (!endOfCaptions && expGolombDecoder.bytesAvailable > 1) {
                    payloadType = 0;
                    do {
                      b = expGolombDecoder.readUByte();
                      payloadType += b;
                    } while (b === 255);
                    payloadSize = 0;
                    do {
                      b = expGolombDecoder.readUByte();
                      payloadSize += b;
                    } while (b === 255);
                    if (payloadType === 4 && expGolombDecoder.bytesAvailable !== 0) {
                      endOfCaptions = true;
                      var countryCode = expGolombDecoder.readUByte();
                      if (countryCode === 181) {
                        var providerCode = expGolombDecoder.readUShort();
                        if (providerCode === 49) {
                          var userStructure = expGolombDecoder.readUInt();
                          if (userStructure === 1195456820) {
                            var userDataType = expGolombDecoder.readUByte();
                            if (userDataType === 3) {
                              var firstByte = expGolombDecoder.readUByte();
                              var secondByte = expGolombDecoder.readUByte();
                              var totalCCs = 31 & firstByte;
                              var byteArray = [firstByte, secondByte];
                              for (var i = 0; i < totalCCs; i++) {
                                byteArray.push(expGolombDecoder.readUByte());
                                byteArray.push(expGolombDecoder.readUByte());
                                byteArray.push(expGolombDecoder.readUByte());
                              }
                              insertSampleInOrder(_this._txtTrack.samples, {
                                type: 3,
                                pts: pes.pts,
                                bytes: byteArray
                              });
                            }
                          }
                        }
                      }
                    } else if (payloadType === 5 && expGolombDecoder.bytesAvailable !== 0) {
                      endOfCaptions = true;
                      if (payloadSize > 16) {
                        var uuidStrArray = [];
                        for (var _i = 0; _i < 16; _i++) {
                          uuidStrArray.push(expGolombDecoder.readUByte().toString(16));
                          if (_i === 3 || _i === 5 || _i === 7 || _i === 9) {
                            uuidStrArray.push("-");
                          }
                        }
                        var length = payloadSize - 16;
                        var userDataPayloadBytes = new Uint8Array(length);
                        for (var _i2 = 0; _i2 < length; _i2++) {
                          userDataPayloadBytes[_i2] = expGolombDecoder.readUByte();
                        }
                        insertSampleInOrder(_this._txtTrack.samples, {
                          pts: pes.pts,
                          payloadType,
                          uuid: uuidStrArray.join(""),
                          userData: Object(_id3__WEBPACK_IMPORTED_MODULE_3__["utf8ArrayToStr"])(userDataPayloadBytes),
                          userDataBytes: userDataPayloadBytes
                        });
                      }
                    } else if (payloadSize < expGolombDecoder.bytesAvailable) {
                      for (var _i3 = 0; _i3 < payloadSize; _i3++) {
                        expGolombDecoder.readUByte();
                      }
                    }
                  }
                  break;
                }
                case 7:
                  push = true;
                  spsfound = true;
                  if (!track.sps) {
                    var _expGolombDecoder = new _exp_golomb__WEBPACK_IMPORTED_MODULE_2__["default"](unit.data);
                    var config = _expGolombDecoder.readSPS();
                    track.width = config.width;
                    track.height = config.height;
                    track.pixelRatio = config.pixelRatio;
                    track.sps = [unit.data];
                    track.duration = _this._duration;
                    var codecarray = unit.data.subarray(1, 4);
                    var codecstring = "avc1.";
                    for (var _i4 = 0; _i4 < 3; _i4++) {
                      var h = codecarray[_i4].toString(16);
                      if (h.length < 2) {
                        h = "0" + h;
                      }
                      codecstring += h;
                    }
                    track.codec = codecstring;
                  }
                  break;
                case 8:
                  push = true;
                  if (!track.pps) {
                    track.pps = [unit.data];
                  }
                  break;
                case 9:
                  push = false;
                  track.audFound = true;
                  if (avcSample) {
                    pushAccessUnit(avcSample, track);
                  }
                  avcSample = _this.avcSample = createAVCSample(false, pes.pts, pes.dts, "");
                  break;
                case 12:
                  push = false;
                  break;
                default:
                  push = false;
                  if (avcSample) {
                    avcSample.debug += "unknown NAL " + unit.type + " ";
                  }
                  break;
              }
              if (avcSample && push) {
                var _units = avcSample.units;
                _units.push(unit);
              }
            });
            if (last && avcSample) {
              pushAccessUnit(avcSample, track);
              this.avcSample = null;
            }
          };
          _proto.getLastNalUnit = function getLastNalUnit() {
            var _avcSample;
            var avcSample = this.avcSample;
            var lastUnit;
            if (!avcSample || avcSample.units.length === 0) {
              var samples = this._avcTrack.samples;
              avcSample = samples[samples.length - 1];
            }
            if ((_avcSample = avcSample) !== null && _avcSample !== void 0 && _avcSample.units) {
              var units = avcSample.units;
              lastUnit = units[units.length - 1];
            }
            return lastUnit;
          };
          _proto.parseAVCNALu = function parseAVCNALu(array) {
            var len = array.byteLength;
            var track = this._avcTrack;
            var state = track.naluState || 0;
            var lastState = state;
            var units = [];
            var i = 0;
            var value;
            var overflow;
            var unitType;
            var lastUnitStart = -1;
            var lastUnitType = 0;
            if (state === -1) {
              lastUnitStart = 0;
              lastUnitType = array[0] & 31;
              state = 0;
              i = 1;
            }
            while (i < len) {
              value = array[i++];
              if (!state) {
                state = value ? 0 : 1;
                continue;
              }
              if (state === 1) {
                state = value ? 0 : 2;
                continue;
              }
              if (!value) {
                state = 3;
              } else if (value === 1) {
                if (lastUnitStart >= 0) {
                  var unit = {
                    data: array.subarray(lastUnitStart, i - state - 1),
                    type: lastUnitType
                  };
                  units.push(unit);
                } else {
                  var lastUnit = this.getLastNalUnit();
                  if (lastUnit) {
                    if (lastState && i <= 4 - lastState) {
                      if (lastUnit.state) {
                        lastUnit.data = lastUnit.data.subarray(0, lastUnit.data.byteLength - lastState);
                      }
                    }
                    overflow = i - state - 1;
                    if (overflow > 0) {
                      var tmp = new Uint8Array(lastUnit.data.byteLength + overflow);
                      tmp.set(lastUnit.data, 0);
                      tmp.set(array.subarray(0, overflow), lastUnit.data.byteLength);
                      lastUnit.data = tmp;
                    }
                  }
                }
                if (i < len) {
                  unitType = array[i] & 31;
                  lastUnitStart = i;
                  lastUnitType = unitType;
                  state = 0;
                } else {
                  state = -1;
                }
              } else {
                state = 0;
              }
            }
            if (lastUnitStart >= 0 && state >= 0) {
              var _unit = {
                data: array.subarray(lastUnitStart, len),
                type: lastUnitType,
                state
              };
              units.push(_unit);
            }
            if (units.length === 0) {
              var _lastUnit = this.getLastNalUnit();
              if (_lastUnit) {
                var _tmp = new Uint8Array(_lastUnit.data.byteLength + array.byteLength);
                _tmp.set(_lastUnit.data, 0);
                _tmp.set(array, _lastUnit.data.byteLength);
                _lastUnit.data = _tmp;
              }
            }
            track.naluState = state;
            return units;
          };
          _proto.parseAACPES = function parseAACPES(pes) {
            var startOffset = 0;
            var track = this._audioTrack;
            var aacOverFlow = this.aacOverFlow;
            var data = pes.data;
            if (aacOverFlow) {
              this.aacOverFlow = null;
              var sampleLength = aacOverFlow.sample.unit.byteLength;
              var frameMissingBytes = Math.min(aacOverFlow.missing, sampleLength);
              var frameOverflowBytes = sampleLength - frameMissingBytes;
              aacOverFlow.sample.unit.set(data.subarray(0, frameMissingBytes), frameOverflowBytes);
              track.samples.push(aacOverFlow.sample);
              startOffset = aacOverFlow.missing;
            }
            var offset;
            var len;
            for (offset = startOffset, len = data.length; offset < len - 1; offset++) {
              if (_adts__WEBPACK_IMPORTED_MODULE_0__["isHeader"](data, offset)) {
                break;
              }
            }
            if (offset !== startOffset) {
              var reason;
              var fatal;
              if (offset < len - 1) {
                reason = "AAC PES did not start with ADTS header,offset:" + offset;
                fatal = false;
              } else {
                reason = "no ADTS header found in AAC PES";
                fatal = true;
              }
              _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].warn("parsing error:" + reason);
              this.observer.emit(_events__WEBPACK_IMPORTED_MODULE_5__["Events"].ERROR, _events__WEBPACK_IMPORTED_MODULE_5__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_8__["ErrorTypes"].MEDIA_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_8__["ErrorDetails"].FRAG_PARSING_ERROR,
                fatal,
                reason
              });
              if (fatal) {
                return;
              }
            }
            _adts__WEBPACK_IMPORTED_MODULE_0__["initTrackConfig"](track, this.observer, data, offset, this.audioCodec);
            var pts;
            if (pes.pts !== void 0) {
              pts = pes.pts;
            } else if (aacOverFlow) {
              var frameDuration = _adts__WEBPACK_IMPORTED_MODULE_0__["getFrameDuration"](track.samplerate);
              pts = aacOverFlow.sample.pts + frameDuration;
            } else {
              _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].warn("[tsdemuxer]: AAC PES unknown PTS");
              return;
            }
            var frameIndex = 0;
            while (offset < len) {
              if (_adts__WEBPACK_IMPORTED_MODULE_0__["isHeader"](data, offset)) {
                if (offset + 5 < len) {
                  var frame = _adts__WEBPACK_IMPORTED_MODULE_0__["appendFrame"](track, data, offset, pts, frameIndex);
                  if (frame) {
                    if (frame.missing) {
                      this.aacOverFlow = frame;
                    } else {
                      offset += frame.length;
                      frameIndex++;
                      continue;
                    }
                  }
                }
                break;
              } else {
                offset++;
              }
            }
          };
          _proto.parseMPEGPES = function parseMPEGPES(pes) {
            var data = pes.data;
            var length = data.length;
            var frameIndex = 0;
            var offset = 0;
            var pts = pes.pts;
            if (pts === void 0) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].warn("[tsdemuxer]: MPEG PES unknown PTS");
              return;
            }
            while (offset < length) {
              if (_mpegaudio__WEBPACK_IMPORTED_MODULE_1__["isHeader"](data, offset)) {
                var frame = _mpegaudio__WEBPACK_IMPORTED_MODULE_1__["appendFrame"](this._audioTrack, data, offset, pts, frameIndex);
                if (frame) {
                  offset += frame.length;
                  frameIndex++;
                } else {
                  break;
                }
              } else {
                offset++;
              }
            }
          };
          _proto.parseID3PES = function parseID3PES(pes) {
            if (pes.pts === void 0) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].warn("[tsdemuxer]: ID3 PES unknown PTS");
              return;
            }
            this._id3Track.samples.push(pes);
          };
          return TSDemuxer2;
        }();
        TSDemuxer.minProbeByteLength = 188;
        function createAVCSample(key, pts, dts, debug) {
          return {
            key,
            frame: false,
            pts,
            dts,
            units: [],
            debug,
            length: 0
          };
        }
        function parsePAT(data, offset) {
          return (data[offset + 10] & 31) << 8 | data[offset + 11];
        }
        function parsePMT(data, offset, mpegSupported, isSampleAes) {
          var result = {
            audio: -1,
            avc: -1,
            id3: -1,
            isAAC: true
          };
          var sectionLength = (data[offset + 1] & 15) << 8 | data[offset + 2];
          var tableEnd = offset + 3 + sectionLength - 4;
          var programInfoLength = (data[offset + 10] & 15) << 8 | data[offset + 11];
          offset += 12 + programInfoLength;
          while (offset < tableEnd) {
            var pid = (data[offset + 1] & 31) << 8 | data[offset + 2];
            switch (data[offset]) {
              case 207:
                if (!isSampleAes) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                  break;
                }
              case 15:
                if (result.audio === -1) {
                  result.audio = pid;
                }
                break;
              case 21:
                if (result.id3 === -1) {
                  result.id3 = pid;
                }
                break;
              case 219:
                if (!isSampleAes) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                  break;
                }
              case 27:
                if (result.avc === -1) {
                  result.avc = pid;
                }
                break;
              case 3:
              case 4:
                if (!mpegSupported) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].log("MPEG audio found, not supported in this browser");
                } else if (result.audio === -1) {
                  result.audio = pid;
                  result.isAAC = false;
                }
                break;
              case 36:
                _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].warn("Unsupported HEVC stream type found");
                break;
            }
            offset += ((data[offset + 3] & 15) << 8 | data[offset + 4]) + 5;
          }
          return result;
        }
        function parsePES(stream) {
          var i = 0;
          var frag;
          var pesLen;
          var pesHdrLen;
          var pesPts;
          var pesDts;
          var data = stream.data;
          if (!stream || stream.size === 0) {
            return null;
          }
          while (data[0].length < 19 && data.length > 1) {
            var newData = new Uint8Array(data[0].length + data[1].length);
            newData.set(data[0]);
            newData.set(data[1], data[0].length);
            data[0] = newData;
            data.splice(1, 1);
          }
          frag = data[0];
          var pesPrefix = (frag[0] << 16) + (frag[1] << 8) + frag[2];
          if (pesPrefix === 1) {
            pesLen = (frag[4] << 8) + frag[5];
            if (pesLen && pesLen > stream.size - 6) {
              return null;
            }
            var pesFlags = frag[7];
            if (pesFlags & 192) {
              pesPts = (frag[9] & 14) * 536870912 + (frag[10] & 255) * 4194304 + (frag[11] & 254) * 16384 + (frag[12] & 255) * 128 + (frag[13] & 254) / 2;
              if (pesFlags & 64) {
                pesDts = (frag[14] & 14) * 536870912 + (frag[15] & 255) * 4194304 + (frag[16] & 254) * 16384 + (frag[17] & 255) * 128 + (frag[18] & 254) / 2;
                if (pesPts - pesDts > 60 * 9e4) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].warn(Math.round((pesPts - pesDts) / 9e4) + "s delta between PTS and DTS, align them");
                  pesPts = pesDts;
                }
              } else {
                pesDts = pesPts;
              }
            }
            pesHdrLen = frag[8];
            var payloadStartOffset = pesHdrLen + 9;
            if (stream.size <= payloadStartOffset) {
              return null;
            }
            stream.size -= payloadStartOffset;
            var pesData = new Uint8Array(stream.size);
            for (var j = 0, dataLen = data.length; j < dataLen; j++) {
              frag = data[j];
              var len = frag.byteLength;
              if (payloadStartOffset) {
                if (payloadStartOffset > len) {
                  payloadStartOffset -= len;
                  continue;
                } else {
                  frag = frag.subarray(payloadStartOffset);
                  len -= payloadStartOffset;
                  payloadStartOffset = 0;
                }
              }
              pesData.set(frag, i);
              i += len;
            }
            if (pesLen) {
              pesLen -= pesHdrLen + 3;
            }
            return {
              data: pesData,
              pts: pesPts,
              dts: pesDts,
              len: pesLen
            };
          }
          return null;
        }
        function pushAccessUnit(avcSample, avcTrack) {
          if (avcSample.units.length && avcSample.frame) {
            if (avcSample.pts === void 0) {
              var samples = avcTrack.samples;
              var nbSamples = samples.length;
              if (nbSamples) {
                var lastSample = samples[nbSamples - 1];
                avcSample.pts = lastSample.pts;
                avcSample.dts = lastSample.dts;
              } else {
                avcTrack.dropped++;
                return;
              }
            }
            avcTrack.samples.push(avcSample);
          }
          if (avcSample.debug.length) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_7__["logger"].log(avcSample.pts + "/" + avcSample.dts + ":" + avcSample.debug);
          }
        }
        function insertSampleInOrder(arr, data) {
          var len = arr.length;
          if (len > 0) {
            if (data.pts >= arr[len - 1].pts) {
              arr.push(data);
            } else {
              for (var pos = len - 1; pos >= 0; pos--) {
                if (data.pts < arr[pos].pts) {
                  arr.splice(pos, 0, data);
                  break;
                }
              }
            }
          } else {
            arr.push(data);
          }
        }
        function discardEPB(data) {
          var length = data.byteLength;
          var EPBPositions = [];
          var i = 1;
          while (i < length - 2) {
            if (data[i] === 0 && data[i + 1] === 0 && data[i + 2] === 3) {
              EPBPositions.push(i + 2);
              i += 2;
            } else {
              i++;
            }
          }
          if (EPBPositions.length === 0) {
            return data;
          }
          var newLength = length - EPBPositions.length;
          var newData = new Uint8Array(newLength);
          var sourceIndex = 0;
          for (i = 0; i < newLength; sourceIndex++, i++) {
            if (sourceIndex === EPBPositions[0]) {
              sourceIndex++;
              EPBPositions.shift();
            }
            newData[i] = data[sourceIndex];
          }
          return newData;
        }
        __webpack_exports__["default"] = TSDemuxer;
      },
      "./src/errors.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ErrorTypes", function() {
          return ErrorTypes;
        });
        __webpack_require__.d(__webpack_exports__, "ErrorDetails", function() {
          return ErrorDetails;
        });
        var ErrorTypes;
        (function(ErrorTypes2) {
          ErrorTypes2["NETWORK_ERROR"] = "networkError";
          ErrorTypes2["MEDIA_ERROR"] = "mediaError";
          ErrorTypes2["KEY_SYSTEM_ERROR"] = "keySystemError";
          ErrorTypes2["MUX_ERROR"] = "muxError";
          ErrorTypes2["OTHER_ERROR"] = "otherError";
        })(ErrorTypes || (ErrorTypes = {}));
        var ErrorDetails;
        (function(ErrorDetails2) {
          ErrorDetails2["KEY_SYSTEM_NO_KEYS"] = "keySystemNoKeys";
          ErrorDetails2["KEY_SYSTEM_NO_ACCESS"] = "keySystemNoAccess";
          ErrorDetails2["KEY_SYSTEM_NO_SESSION"] = "keySystemNoSession";
          ErrorDetails2["KEY_SYSTEM_LICENSE_REQUEST_FAILED"] = "keySystemLicenseRequestFailed";
          ErrorDetails2["KEY_SYSTEM_NO_INIT_DATA"] = "keySystemNoInitData";
          ErrorDetails2["MANIFEST_LOAD_ERROR"] = "manifestLoadError";
          ErrorDetails2["MANIFEST_LOAD_TIMEOUT"] = "manifestLoadTimeOut";
          ErrorDetails2["MANIFEST_PARSING_ERROR"] = "manifestParsingError";
          ErrorDetails2["MANIFEST_INCOMPATIBLE_CODECS_ERROR"] = "manifestIncompatibleCodecsError";
          ErrorDetails2["LEVEL_EMPTY_ERROR"] = "levelEmptyError";
          ErrorDetails2["LEVEL_LOAD_ERROR"] = "levelLoadError";
          ErrorDetails2["LEVEL_LOAD_TIMEOUT"] = "levelLoadTimeOut";
          ErrorDetails2["LEVEL_SWITCH_ERROR"] = "levelSwitchError";
          ErrorDetails2["AUDIO_TRACK_LOAD_ERROR"] = "audioTrackLoadError";
          ErrorDetails2["AUDIO_TRACK_LOAD_TIMEOUT"] = "audioTrackLoadTimeOut";
          ErrorDetails2["SUBTITLE_LOAD_ERROR"] = "subtitleTrackLoadError";
          ErrorDetails2["SUBTITLE_TRACK_LOAD_TIMEOUT"] = "subtitleTrackLoadTimeOut";
          ErrorDetails2["FRAG_LOAD_ERROR"] = "fragLoadError";
          ErrorDetails2["FRAG_LOAD_TIMEOUT"] = "fragLoadTimeOut";
          ErrorDetails2["FRAG_DECRYPT_ERROR"] = "fragDecryptError";
          ErrorDetails2["FRAG_PARSING_ERROR"] = "fragParsingError";
          ErrorDetails2["REMUX_ALLOC_ERROR"] = "remuxAllocError";
          ErrorDetails2["KEY_LOAD_ERROR"] = "keyLoadError";
          ErrorDetails2["KEY_LOAD_TIMEOUT"] = "keyLoadTimeOut";
          ErrorDetails2["BUFFER_ADD_CODEC_ERROR"] = "bufferAddCodecError";
          ErrorDetails2["BUFFER_INCOMPATIBLE_CODECS_ERROR"] = "bufferIncompatibleCodecsError";
          ErrorDetails2["BUFFER_APPEND_ERROR"] = "bufferAppendError";
          ErrorDetails2["BUFFER_APPENDING_ERROR"] = "bufferAppendingError";
          ErrorDetails2["BUFFER_STALLED_ERROR"] = "bufferStalledError";
          ErrorDetails2["BUFFER_FULL_ERROR"] = "bufferFullError";
          ErrorDetails2["BUFFER_SEEK_OVER_HOLE"] = "bufferSeekOverHole";
          ErrorDetails2["BUFFER_NUDGE_ON_STALL"] = "bufferNudgeOnStall";
          ErrorDetails2["INTERNAL_EXCEPTION"] = "internalException";
          ErrorDetails2["INTERNAL_ABORTED"] = "aborted";
          ErrorDetails2["UNKNOWN"] = "unknown";
        })(ErrorDetails || (ErrorDetails = {}));
      },
      "./src/events.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "Events", function() {
          return Events;
        });
        var Events;
        (function(Events2) {
          Events2["MEDIA_ATTACHING"] = "hlsMediaAttaching";
          Events2["MEDIA_ATTACHED"] = "hlsMediaAttached";
          Events2["MEDIA_DETACHING"] = "hlsMediaDetaching";
          Events2["MEDIA_DETACHED"] = "hlsMediaDetached";
          Events2["BUFFER_RESET"] = "hlsBufferReset";
          Events2["BUFFER_CODECS"] = "hlsBufferCodecs";
          Events2["BUFFER_CREATED"] = "hlsBufferCreated";
          Events2["BUFFER_APPENDING"] = "hlsBufferAppending";
          Events2["BUFFER_APPENDED"] = "hlsBufferAppended";
          Events2["BUFFER_EOS"] = "hlsBufferEos";
          Events2["BUFFER_FLUSHING"] = "hlsBufferFlushing";
          Events2["BUFFER_FLUSHED"] = "hlsBufferFlushed";
          Events2["MANIFEST_LOADING"] = "hlsManifestLoading";
          Events2["MANIFEST_LOADED"] = "hlsManifestLoaded";
          Events2["MANIFEST_PARSED"] = "hlsManifestParsed";
          Events2["LEVEL_SWITCHING"] = "hlsLevelSwitching";
          Events2["LEVEL_SWITCHED"] = "hlsLevelSwitched";
          Events2["LEVEL_LOADING"] = "hlsLevelLoading";
          Events2["LEVEL_LOADED"] = "hlsLevelLoaded";
          Events2["LEVEL_UPDATED"] = "hlsLevelUpdated";
          Events2["LEVEL_PTS_UPDATED"] = "hlsLevelPtsUpdated";
          Events2["LEVELS_UPDATED"] = "hlsLevelsUpdated";
          Events2["AUDIO_TRACKS_UPDATED"] = "hlsAudioTracksUpdated";
          Events2["AUDIO_TRACK_SWITCHING"] = "hlsAudioTrackSwitching";
          Events2["AUDIO_TRACK_SWITCHED"] = "hlsAudioTrackSwitched";
          Events2["AUDIO_TRACK_LOADING"] = "hlsAudioTrackLoading";
          Events2["AUDIO_TRACK_LOADED"] = "hlsAudioTrackLoaded";
          Events2["SUBTITLE_TRACKS_UPDATED"] = "hlsSubtitleTracksUpdated";
          Events2["SUBTITLE_TRACKS_CLEARED"] = "hlsSubtitleTracksCleared";
          Events2["SUBTITLE_TRACK_SWITCH"] = "hlsSubtitleTrackSwitch";
          Events2["SUBTITLE_TRACK_LOADING"] = "hlsSubtitleTrackLoading";
          Events2["SUBTITLE_TRACK_LOADED"] = "hlsSubtitleTrackLoaded";
          Events2["SUBTITLE_FRAG_PROCESSED"] = "hlsSubtitleFragProcessed";
          Events2["CUES_PARSED"] = "hlsCuesParsed";
          Events2["NON_NATIVE_TEXT_TRACKS_FOUND"] = "hlsNonNativeTextTracksFound";
          Events2["INIT_PTS_FOUND"] = "hlsInitPtsFound";
          Events2["FRAG_LOADING"] = "hlsFragLoading";
          Events2["FRAG_LOAD_EMERGENCY_ABORTED"] = "hlsFragLoadEmergencyAborted";
          Events2["FRAG_LOADED"] = "hlsFragLoaded";
          Events2["FRAG_DECRYPTED"] = "hlsFragDecrypted";
          Events2["FRAG_PARSING_INIT_SEGMENT"] = "hlsFragParsingInitSegment";
          Events2["FRAG_PARSING_USERDATA"] = "hlsFragParsingUserdata";
          Events2["FRAG_PARSING_METADATA"] = "hlsFragParsingMetadata";
          Events2["FRAG_PARSED"] = "hlsFragParsed";
          Events2["FRAG_BUFFERED"] = "hlsFragBuffered";
          Events2["FRAG_CHANGED"] = "hlsFragChanged";
          Events2["FPS_DROP"] = "hlsFpsDrop";
          Events2["FPS_DROP_LEVEL_CAPPING"] = "hlsFpsDropLevelCapping";
          Events2["ERROR"] = "hlsError";
          Events2["DESTROYING"] = "hlsDestroying";
          Events2["KEY_LOADING"] = "hlsKeyLoading";
          Events2["KEY_LOADED"] = "hlsKeyLoaded";
          Events2["LIVE_BACK_BUFFER_REACHED"] = "hlsLiveBackBufferReached";
          Events2["BACK_BUFFER_REACHED"] = "hlsBackBufferReached";
        })(Events || (Events = {}));
      },
      "./src/hls.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return Hls;
        });
        var url_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/url-toolkit/src/url-toolkit.js");
        var _loader_playlist_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/loader/playlist-loader.ts");
        var _loader_key_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/loader/key-loader.ts");
        var _controller_id3_track_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/controller/id3-track-controller.ts");
        var _controller_latency_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/controller/latency-controller.ts");
        var _controller_level_controller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/controller/level-controller.ts");
        var _controller_fragment_tracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/controller/fragment-tracker.ts");
        var _controller_stream_controller__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/controller/stream-controller.ts");
        var _is_supported__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./src/is-supported.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./src/utils/logger.ts");
        var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./src/config.ts");
        var eventemitter3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./node_modules/eventemitter3/index.js");
        var _events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./src/errors.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var Hls = /* @__PURE__ */ function() {
          Hls3.isSupported = function isSupported() {
            return Object(_is_supported__WEBPACK_IMPORTED_MODULE_8__["isSupported"])();
          };
          function Hls3(userConfig) {
            if (userConfig === void 0) {
              userConfig = {};
            }
            this.config = void 0;
            this.userConfig = void 0;
            this.coreComponents = void 0;
            this.networkControllers = void 0;
            this._emitter = new eventemitter3__WEBPACK_IMPORTED_MODULE_11__["EventEmitter"]();
            this._autoLevelCapping = void 0;
            this.abrController = void 0;
            this.bufferController = void 0;
            this.capLevelController = void 0;
            this.latencyController = void 0;
            this.levelController = void 0;
            this.streamController = void 0;
            this.audioTrackController = void 0;
            this.subtitleTrackController = void 0;
            this.emeController = void 0;
            this.cmcdController = void 0;
            this._media = null;
            this.url = null;
            var config = this.config = Object(_config__WEBPACK_IMPORTED_MODULE_10__["mergeConfig"])(Hls3.DefaultConfig, userConfig);
            this.userConfig = userConfig;
            Object(_utils_logger__WEBPACK_IMPORTED_MODULE_9__["enableLogs"])(config.debug);
            this._autoLevelCapping = -1;
            if (config.progressive) {
              Object(_config__WEBPACK_IMPORTED_MODULE_10__["enableStreamingMode"])(config);
            }
            var ConfigAbrController = config.abrController, ConfigBufferController = config.bufferController, ConfigCapLevelController = config.capLevelController, ConfigFpsController = config.fpsController;
            var abrController = this.abrController = new ConfigAbrController(this);
            var bufferController = this.bufferController = new ConfigBufferController(this);
            var capLevelController = this.capLevelController = new ConfigCapLevelController(this);
            var fpsController = new ConfigFpsController(this);
            var playListLoader = new _loader_playlist_loader__WEBPACK_IMPORTED_MODULE_1__["default"](this);
            var keyLoader = new _loader_key_loader__WEBPACK_IMPORTED_MODULE_2__["default"](this);
            var id3TrackController = new _controller_id3_track_controller__WEBPACK_IMPORTED_MODULE_3__["default"](this);
            var levelController = this.levelController = new _controller_level_controller__WEBPACK_IMPORTED_MODULE_5__["default"](this);
            var fragmentTracker = new _controller_fragment_tracker__WEBPACK_IMPORTED_MODULE_6__["FragmentTracker"](this);
            var streamController = this.streamController = new _controller_stream_controller__WEBPACK_IMPORTED_MODULE_7__["default"](this, fragmentTracker);
            capLevelController.setStreamController(streamController);
            fpsController.setStreamController(streamController);
            var networkControllers = [levelController, streamController];
            this.networkControllers = networkControllers;
            var coreComponents = [playListLoader, keyLoader, abrController, bufferController, capLevelController, fpsController, id3TrackController, fragmentTracker];
            this.audioTrackController = this.createController(config.audioTrackController, null, networkControllers);
            this.createController(config.audioStreamController, fragmentTracker, networkControllers);
            this.subtitleTrackController = this.createController(config.subtitleTrackController, null, networkControllers);
            this.createController(config.subtitleStreamController, fragmentTracker, networkControllers);
            this.createController(config.timelineController, null, coreComponents);
            this.emeController = this.createController(config.emeController, null, coreComponents);
            this.cmcdController = this.createController(config.cmcdController, null, coreComponents);
            this.latencyController = this.createController(_controller_latency_controller__WEBPACK_IMPORTED_MODULE_4__["default"], null, coreComponents);
            this.coreComponents = coreComponents;
          }
          var _proto = Hls3.prototype;
          _proto.createController = function createController(ControllerClass, fragmentTracker, components) {
            if (ControllerClass) {
              var controllerInstance = fragmentTracker ? new ControllerClass(this, fragmentTracker) : new ControllerClass(this);
              if (components) {
                components.push(controllerInstance);
              }
              return controllerInstance;
            }
            return null;
          };
          _proto.on = function on2(event, listener, context) {
            if (context === void 0) {
              context = this;
            }
            this._emitter.on(event, listener, context);
          };
          _proto.once = function once(event, listener, context) {
            if (context === void 0) {
              context = this;
            }
            this._emitter.once(event, listener, context);
          };
          _proto.removeAllListeners = function removeAllListeners(event) {
            this._emitter.removeAllListeners(event);
          };
          _proto.off = function off2(event, listener, context, once) {
            if (context === void 0) {
              context = this;
            }
            this._emitter.off(event, listener, context, once);
          };
          _proto.listeners = function listeners(event) {
            return this._emitter.listeners(event);
          };
          _proto.emit = function emit(event, name, eventObject) {
            return this._emitter.emit(event, name, eventObject);
          };
          _proto.trigger = function trigger(event, eventObject) {
            if (this.config.debug) {
              return this.emit(event, event, eventObject);
            } else {
              try {
                return this.emit(event, event, eventObject);
              } catch (e) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].error("An internal error happened while handling event " + event + '. Error message: "' + e.message + '". Here is a stacktrace:', e);
                this.trigger(_events__WEBPACK_IMPORTED_MODULE_12__["Events"].ERROR, {
                  type: _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorTypes"].OTHER_ERROR,
                  details: _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"].INTERNAL_EXCEPTION,
                  fatal: false,
                  event,
                  error: e
                });
              }
            }
            return false;
          };
          _proto.listenerCount = function listenerCount(event) {
            return this._emitter.listenerCount(event);
          };
          _proto.destroy = function destroy() {
            _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("destroy");
            this.trigger(_events__WEBPACK_IMPORTED_MODULE_12__["Events"].DESTROYING, void 0);
            this.detachMedia();
            this.removeAllListeners();
            this._autoLevelCapping = -1;
            this.url = null;
            this.networkControllers.forEach(function(component) {
              return component.destroy();
            });
            this.networkControllers.length = 0;
            this.coreComponents.forEach(function(component) {
              return component.destroy();
            });
            this.coreComponents.length = 0;
          };
          _proto.attachMedia = function attachMedia(media) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("attachMedia");
            this._media = media;
            this.trigger(_events__WEBPACK_IMPORTED_MODULE_12__["Events"].MEDIA_ATTACHING, {
              media
            });
          };
          _proto.detachMedia = function detachMedia() {
            _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("detachMedia");
            this.trigger(_events__WEBPACK_IMPORTED_MODULE_12__["Events"].MEDIA_DETACHING, void 0);
            this._media = null;
          };
          _proto.loadSource = function loadSource(url) {
            this.stopLoad();
            var media = this.media;
            var loadedSource = this.url;
            var loadingSource = this.url = url_toolkit__WEBPACK_IMPORTED_MODULE_0__["buildAbsoluteURL"](self.location.href, url, {
              alwaysNormalize: true
            });
            _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("loadSource:" + loadingSource);
            if (media && loadedSource && loadedSource !== loadingSource && this.bufferController.hasSourceTypes()) {
              this.detachMedia();
              this.attachMedia(media);
            }
            this.trigger(_events__WEBPACK_IMPORTED_MODULE_12__["Events"].MANIFEST_LOADING, {
              url
            });
          };
          _proto.startLoad = function startLoad(startPosition) {
            if (startPosition === void 0) {
              startPosition = -1;
            }
            _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("startLoad(" + startPosition + ")");
            this.networkControllers.forEach(function(controller) {
              controller.startLoad(startPosition);
            });
          };
          _proto.stopLoad = function stopLoad() {
            _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("stopLoad");
            this.networkControllers.forEach(function(controller) {
              controller.stopLoad();
            });
          };
          _proto.swapAudioCodec = function swapAudioCodec() {
            _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("swapAudioCodec");
            this.streamController.swapAudioCodec();
          };
          _proto.recoverMediaError = function recoverMediaError() {
            _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("recoverMediaError");
            var media = this._media;
            this.detachMedia();
            if (media) {
              this.attachMedia(media);
            }
          };
          _proto.removeLevel = function removeLevel(levelIndex, urlId) {
            if (urlId === void 0) {
              urlId = 0;
            }
            this.levelController.removeLevel(levelIndex, urlId);
          };
          _createClass(Hls3, [{
            key: "levels",
            get: function get() {
              var levels = this.levelController.levels;
              return levels ? levels : [];
            }
          }, {
            key: "currentLevel",
            get: function get() {
              return this.streamController.currentLevel;
            },
            set: function set(newLevel) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("set currentLevel:" + newLevel);
              this.loadLevel = newLevel;
              this.abrController.clearTimer();
              this.streamController.immediateLevelSwitch();
            }
          }, {
            key: "nextLevel",
            get: function get() {
              return this.streamController.nextLevel;
            },
            set: function set(newLevel) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("set nextLevel:" + newLevel);
              this.levelController.manualLevel = newLevel;
              this.streamController.nextLevelSwitch();
            }
          }, {
            key: "loadLevel",
            get: function get() {
              return this.levelController.level;
            },
            set: function set(newLevel) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("set loadLevel:" + newLevel);
              this.levelController.manualLevel = newLevel;
            }
          }, {
            key: "nextLoadLevel",
            get: function get() {
              return this.levelController.nextLoadLevel;
            },
            set: function set(level) {
              this.levelController.nextLoadLevel = level;
            }
          }, {
            key: "firstLevel",
            get: function get() {
              return Math.max(this.levelController.firstLevel, this.minAutoLevel);
            },
            set: function set(newLevel) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("set firstLevel:" + newLevel);
              this.levelController.firstLevel = newLevel;
            }
          }, {
            key: "startLevel",
            get: function get() {
              return this.levelController.startLevel;
            },
            set: function set(newLevel) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("set startLevel:" + newLevel);
              if (newLevel !== -1) {
                newLevel = Math.max(newLevel, this.minAutoLevel);
              }
              this.levelController.startLevel = newLevel;
            }
          }, {
            key: "capLevelToPlayerSize",
            get: function get() {
              return this.config.capLevelToPlayerSize;
            },
            set: function set(shouldStartCapping) {
              var newCapLevelToPlayerSize = !!shouldStartCapping;
              if (newCapLevelToPlayerSize !== this.config.capLevelToPlayerSize) {
                if (newCapLevelToPlayerSize) {
                  this.capLevelController.startCapping();
                } else {
                  this.capLevelController.stopCapping();
                  this.autoLevelCapping = -1;
                  this.streamController.nextLevelSwitch();
                }
                this.config.capLevelToPlayerSize = newCapLevelToPlayerSize;
              }
            }
          }, {
            key: "autoLevelCapping",
            get: function get() {
              return this._autoLevelCapping;
            },
            set: function set(newLevel) {
              if (this._autoLevelCapping !== newLevel) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_9__["logger"].log("set autoLevelCapping:" + newLevel);
                this._autoLevelCapping = newLevel;
              }
            }
          }, {
            key: "bandwidthEstimate",
            get: function get() {
              var bwEstimator = this.abrController.bwEstimator;
              if (!bwEstimator) {
                return NaN;
              }
              return bwEstimator.getEstimate();
            }
          }, {
            key: "autoLevelEnabled",
            get: function get() {
              return this.levelController.manualLevel === -1;
            }
          }, {
            key: "manualLevel",
            get: function get() {
              return this.levelController.manualLevel;
            }
          }, {
            key: "minAutoLevel",
            get: function get() {
              var levels = this.levels, minAutoBitrate = this.config.minAutoBitrate;
              if (!levels)
                return 0;
              var len = levels.length;
              for (var i = 0; i < len; i++) {
                if (levels[i].maxBitrate > minAutoBitrate) {
                  return i;
                }
              }
              return 0;
            }
          }, {
            key: "maxAutoLevel",
            get: function get() {
              var levels = this.levels, autoLevelCapping = this.autoLevelCapping;
              var maxAutoLevel;
              if (autoLevelCapping === -1 && levels && levels.length) {
                maxAutoLevel = levels.length - 1;
              } else {
                maxAutoLevel = autoLevelCapping;
              }
              return maxAutoLevel;
            }
          }, {
            key: "nextAutoLevel",
            get: function get() {
              return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel);
            },
            set: function set(nextLevel) {
              this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, nextLevel);
            }
          }, {
            key: "audioTracks",
            get: function get() {
              var audioTrackController = this.audioTrackController;
              return audioTrackController ? audioTrackController.audioTracks : [];
            }
          }, {
            key: "audioTrack",
            get: function get() {
              var audioTrackController = this.audioTrackController;
              return audioTrackController ? audioTrackController.audioTrack : -1;
            },
            set: function set(audioTrackId) {
              var audioTrackController = this.audioTrackController;
              if (audioTrackController) {
                audioTrackController.audioTrack = audioTrackId;
              }
            }
          }, {
            key: "subtitleTracks",
            get: function get() {
              var subtitleTrackController = this.subtitleTrackController;
              return subtitleTrackController ? subtitleTrackController.subtitleTracks : [];
            }
          }, {
            key: "subtitleTrack",
            get: function get() {
              var subtitleTrackController = this.subtitleTrackController;
              return subtitleTrackController ? subtitleTrackController.subtitleTrack : -1;
            },
            set: function set(subtitleTrackId) {
              var subtitleTrackController = this.subtitleTrackController;
              if (subtitleTrackController) {
                subtitleTrackController.subtitleTrack = subtitleTrackId;
              }
            }
          }, {
            key: "media",
            get: function get() {
              return this._media;
            }
          }, {
            key: "subtitleDisplay",
            get: function get() {
              var subtitleTrackController = this.subtitleTrackController;
              return subtitleTrackController ? subtitleTrackController.subtitleDisplay : false;
            },
            set: function set(value) {
              var subtitleTrackController = this.subtitleTrackController;
              if (subtitleTrackController) {
                subtitleTrackController.subtitleDisplay = value;
              }
            }
          }, {
            key: "lowLatencyMode",
            get: function get() {
              return this.config.lowLatencyMode;
            },
            set: function set(mode) {
              this.config.lowLatencyMode = mode;
            }
          }, {
            key: "liveSyncPosition",
            get: function get() {
              return this.latencyController.liveSyncPosition;
            }
          }, {
            key: "latency",
            get: function get() {
              return this.latencyController.latency;
            }
          }, {
            key: "maxLatency",
            get: function get() {
              return this.latencyController.maxLatency;
            }
          }, {
            key: "targetLatency",
            get: function get() {
              return this.latencyController.targetLatency;
            }
          }, {
            key: "drift",
            get: function get() {
              return this.latencyController.drift;
            }
          }, {
            key: "forceStartLoad",
            get: function get() {
              return this.streamController.forceStartLoad;
            }
          }], [{
            key: "version",
            get: function get() {
              return "1.1.1";
            }
          }, {
            key: "Events",
            get: function get() {
              return _events__WEBPACK_IMPORTED_MODULE_12__["Events"];
            }
          }, {
            key: "ErrorTypes",
            get: function get() {
              return _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorTypes"];
            }
          }, {
            key: "ErrorDetails",
            get: function get() {
              return _errors__WEBPACK_IMPORTED_MODULE_13__["ErrorDetails"];
            }
          }, {
            key: "DefaultConfig",
            get: function get() {
              if (!Hls3.defaultConfig) {
                return _config__WEBPACK_IMPORTED_MODULE_10__["hlsDefaultConfig"];
              }
              return Hls3.defaultConfig;
            },
            set: function set(defaultConfig) {
              Hls3.defaultConfig = defaultConfig;
            }
          }]);
          return Hls3;
        }();
        Hls.defaultConfig = void 0;
      },
      "./src/is-supported.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "isSupported", function() {
          return isSupported;
        });
        __webpack_require__.d(__webpack_exports__, "changeTypeSupported", function() {
          return changeTypeSupported;
        });
        var _utils_mediasource_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/mediasource-helper.ts");
        function getSourceBuffer() {
          return self.SourceBuffer || self.WebKitSourceBuffer;
        }
        function isSupported() {
          var mediaSource = Object(_utils_mediasource_helper__WEBPACK_IMPORTED_MODULE_0__["getMediaSource"])();
          if (!mediaSource) {
            return false;
          }
          var sourceBuffer = getSourceBuffer();
          var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === "function" && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"');
          var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === "function" && typeof sourceBuffer.prototype.remove === "function";
          return !!isTypeSupported && !!sourceBufferValidAPI;
        }
        function changeTypeSupported() {
          var _sourceBuffer$prototy;
          var sourceBuffer = getSourceBuffer();
          return typeof (sourceBuffer === null || sourceBuffer === void 0 ? void 0 : (_sourceBuffer$prototy = sourceBuffer.prototype) === null || _sourceBuffer$prototy === void 0 ? void 0 : _sourceBuffer$prototy.changeType) === "function";
        }
      },
      "./src/loader/fragment-loader.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return FragmentLoader;
        });
        __webpack_require__.d(__webpack_exports__, "LoadError", function() {
          return LoadError;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/errors.ts");
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? new Map() : void 0;
          _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
            if (Class2 === null || !_isNativeFunction(Class2))
              return Class2;
            if (typeof Class2 !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class2))
                return _cache.get(Class2);
              _cache.set(Class2, Wrapper);
            }
            function Wrapper() {
              return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
            return _setPrototypeOf(Wrapper, Class2);
          };
          return _wrapNativeSuper(Class);
        }
        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
          } else {
            _construct = function _construct2(Parent2, args2, Class2) {
              var a = [null];
              a.push.apply(a, args2);
              var Constructor = Function.bind.apply(Parent2, a);
              var instance = new Constructor();
              if (Class2)
                _setPrototypeOf(instance, Class2.prototype);
              return instance;
            };
          }
          return _construct.apply(null, arguments);
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return _getPrototypeOf(o);
        }
        var MIN_CHUNK_SIZE = Math.pow(2, 17);
        var FragmentLoader = /* @__PURE__ */ function() {
          function FragmentLoader2(config) {
            this.config = void 0;
            this.loader = null;
            this.partLoadTimeout = -1;
            this.config = config;
          }
          var _proto = FragmentLoader2.prototype;
          _proto.destroy = function destroy() {
            if (this.loader) {
              this.loader.destroy();
              this.loader = null;
            }
          };
          _proto.abort = function abort() {
            if (this.loader) {
              this.loader.abort();
            }
          };
          _proto.load = function load(frag, _onProgress) {
            var _this = this;
            var url = frag.url;
            if (!url) {
              return Promise.reject(new LoadError({
                type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].FRAG_LOAD_ERROR,
                fatal: false,
                frag,
                networkDetails: null
              }, "Fragment does not have a " + (url ? "part list" : "url")));
            }
            this.abort();
            var config = this.config;
            var FragmentILoader = config.fLoader;
            var DefaultILoader = config.loader;
            return new Promise(function(resolve, reject) {
              if (_this.loader) {
                _this.loader.destroy();
              }
              var loader = _this.loader = frag.loader = FragmentILoader ? new FragmentILoader(config) : new DefaultILoader(config);
              var loaderContext = createLoaderContext(frag);
              var loaderConfig = {
                timeout: config.fragLoadingTimeOut,
                maxRetry: 0,
                retryDelay: 0,
                maxRetryDelay: config.fragLoadingMaxRetryTimeout,
                highWaterMark: MIN_CHUNK_SIZE
              };
              frag.stats = loader.stats;
              loader.load(loaderContext, loaderConfig, {
                onSuccess: function onSuccess(response, stats, context, networkDetails) {
                  _this.resetLoader(frag, loader);
                  resolve({
                    frag,
                    part: null,
                    payload: response.data,
                    networkDetails
                  });
                },
                onError: function onError(response, context, networkDetails) {
                  _this.resetLoader(frag, loader);
                  reject(new LoadError({
                    type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].FRAG_LOAD_ERROR,
                    fatal: false,
                    frag,
                    response,
                    networkDetails
                  }));
                },
                onAbort: function onAbort(stats, context, networkDetails) {
                  _this.resetLoader(frag, loader);
                  reject(new LoadError({
                    type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].INTERNAL_ABORTED,
                    fatal: false,
                    frag,
                    networkDetails
                  }));
                },
                onTimeout: function onTimeout(response, context, networkDetails) {
                  _this.resetLoader(frag, loader);
                  reject(new LoadError({
                    type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].FRAG_LOAD_TIMEOUT,
                    fatal: false,
                    frag,
                    networkDetails
                  }));
                },
                onProgress: function onProgress(stats, context, data, networkDetails) {
                  if (_onProgress) {
                    _onProgress({
                      frag,
                      part: null,
                      payload: data,
                      networkDetails
                    });
                  }
                }
              });
            });
          };
          _proto.loadPart = function loadPart(frag, part, onProgress) {
            var _this2 = this;
            this.abort();
            var config = this.config;
            var FragmentILoader = config.fLoader;
            var DefaultILoader = config.loader;
            return new Promise(function(resolve, reject) {
              if (_this2.loader) {
                _this2.loader.destroy();
              }
              var loader = _this2.loader = frag.loader = FragmentILoader ? new FragmentILoader(config) : new DefaultILoader(config);
              var loaderContext = createLoaderContext(frag, part);
              var loaderConfig = {
                timeout: config.fragLoadingTimeOut,
                maxRetry: 0,
                retryDelay: 0,
                maxRetryDelay: config.fragLoadingMaxRetryTimeout,
                highWaterMark: MIN_CHUNK_SIZE
              };
              part.stats = loader.stats;
              loader.load(loaderContext, loaderConfig, {
                onSuccess: function onSuccess(response, stats, context, networkDetails) {
                  _this2.resetLoader(frag, loader);
                  _this2.updateStatsFromPart(frag, part);
                  var partLoadedData = {
                    frag,
                    part,
                    payload: response.data,
                    networkDetails
                  };
                  onProgress(partLoadedData);
                  resolve(partLoadedData);
                },
                onError: function onError(response, context, networkDetails) {
                  _this2.resetLoader(frag, loader);
                  reject(new LoadError({
                    type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].FRAG_LOAD_ERROR,
                    fatal: false,
                    frag,
                    part,
                    response,
                    networkDetails
                  }));
                },
                onAbort: function onAbort(stats, context, networkDetails) {
                  frag.stats.aborted = part.stats.aborted;
                  _this2.resetLoader(frag, loader);
                  reject(new LoadError({
                    type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].INTERNAL_ABORTED,
                    fatal: false,
                    frag,
                    part,
                    networkDetails
                  }));
                },
                onTimeout: function onTimeout(response, context, networkDetails) {
                  _this2.resetLoader(frag, loader);
                  reject(new LoadError({
                    type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
                    details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].FRAG_LOAD_TIMEOUT,
                    fatal: false,
                    frag,
                    part,
                    networkDetails
                  }));
                }
              });
            });
          };
          _proto.updateStatsFromPart = function updateStatsFromPart(frag, part) {
            var fragStats = frag.stats;
            var partStats = part.stats;
            var partTotal = partStats.total;
            fragStats.loaded += partStats.loaded;
            if (partTotal) {
              var estTotalParts = Math.round(frag.duration / part.duration);
              var estLoadedParts = Math.min(Math.round(fragStats.loaded / partTotal), estTotalParts);
              var estRemainingParts = estTotalParts - estLoadedParts;
              var estRemainingBytes = estRemainingParts * Math.round(fragStats.loaded / estLoadedParts);
              fragStats.total = fragStats.loaded + estRemainingBytes;
            } else {
              fragStats.total = Math.max(fragStats.loaded, fragStats.total);
            }
            var fragLoading = fragStats.loading;
            var partLoading = partStats.loading;
            if (fragLoading.start) {
              fragLoading.first += partLoading.first - partLoading.start;
            } else {
              fragLoading.start = partLoading.start;
              fragLoading.first = partLoading.first;
            }
            fragLoading.end = partLoading.end;
          };
          _proto.resetLoader = function resetLoader(frag, loader) {
            frag.loader = null;
            if (this.loader === loader) {
              self.clearTimeout(this.partLoadTimeout);
              this.loader = null;
            }
            loader.destroy();
          };
          return FragmentLoader2;
        }();
        function createLoaderContext(frag, part) {
          if (part === void 0) {
            part = null;
          }
          var segment = part || frag;
          var loaderContext = {
            frag,
            part,
            responseType: "arraybuffer",
            url: segment.url,
            headers: {},
            rangeStart: 0,
            rangeEnd: 0
          };
          var start = segment.byteRangeStartOffset;
          var end = segment.byteRangeEndOffset;
          if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(start) && Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(end)) {
            loaderContext.rangeStart = start;
            loaderContext.rangeEnd = end;
          }
          return loaderContext;
        }
        var LoadError = /* @__PURE__ */ function(_Error) {
          _inheritsLoose(LoadError2, _Error);
          function LoadError2(data) {
            var _this3;
            for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              params[_key - 1] = arguments[_key];
            }
            _this3 = _Error.call.apply(_Error, [this].concat(params)) || this;
            _this3.data = void 0;
            _this3.data = data;
            return _this3;
          }
          return LoadError2;
        }(/* @__PURE__ */ _wrapNativeSuper(Error));
      },
      "./src/loader/fragment.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ElementaryStreamTypes", function() {
          return ElementaryStreamTypes;
        });
        __webpack_require__.d(__webpack_exports__, "BaseSegment", function() {
          return BaseSegment;
        });
        __webpack_require__.d(__webpack_exports__, "Fragment", function() {
          return Fragment2;
        });
        __webpack_require__.d(__webpack_exports__, "Part", function() {
          return Part;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var url_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/url-toolkit/src/url-toolkit.js");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/logger.ts");
        var _level_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/loader/level-key.ts");
        var _load_stats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/loader/load-stats.ts");
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var ElementaryStreamTypes;
        (function(ElementaryStreamTypes2) {
          ElementaryStreamTypes2["AUDIO"] = "audio";
          ElementaryStreamTypes2["VIDEO"] = "video";
          ElementaryStreamTypes2["AUDIOVIDEO"] = "audiovideo";
        })(ElementaryStreamTypes || (ElementaryStreamTypes = {}));
        var BaseSegment = /* @__PURE__ */ function() {
          function BaseSegment2(baseurl) {
            var _this$elementaryStrea;
            this._byteRange = null;
            this._url = null;
            this.baseurl = void 0;
            this.relurl = void 0;
            this.elementaryStreams = (_this$elementaryStrea = {}, _this$elementaryStrea[ElementaryStreamTypes.AUDIO] = null, _this$elementaryStrea[ElementaryStreamTypes.VIDEO] = null, _this$elementaryStrea[ElementaryStreamTypes.AUDIOVIDEO] = null, _this$elementaryStrea);
            this.baseurl = baseurl;
          }
          var _proto = BaseSegment2.prototype;
          _proto.setByteRange = function setByteRange(value, previous) {
            var params = value.split("@", 2);
            var byteRange = [];
            if (params.length === 1) {
              byteRange[0] = previous ? previous.byteRangeEndOffset : 0;
            } else {
              byteRange[0] = parseInt(params[1]);
            }
            byteRange[1] = parseInt(params[0]) + byteRange[0];
            this._byteRange = byteRange;
          };
          _createClass(BaseSegment2, [{
            key: "byteRange",
            get: function get() {
              if (!this._byteRange) {
                return [];
              }
              return this._byteRange;
            }
          }, {
            key: "byteRangeStartOffset",
            get: function get() {
              return this.byteRange[0];
            }
          }, {
            key: "byteRangeEndOffset",
            get: function get() {
              return this.byteRange[1];
            }
          }, {
            key: "url",
            get: function get() {
              if (!this._url && this.baseurl && this.relurl) {
                this._url = Object(url_toolkit__WEBPACK_IMPORTED_MODULE_1__["buildAbsoluteURL"])(this.baseurl, this.relurl, {
                  alwaysNormalize: true
                });
              }
              return this._url || "";
            },
            set: function set(value) {
              this._url = value;
            }
          }]);
          return BaseSegment2;
        }();
        var Fragment2 = /* @__PURE__ */ function(_BaseSegment) {
          _inheritsLoose(Fragment3, _BaseSegment);
          function Fragment3(type, baseurl) {
            var _this;
            _this = _BaseSegment.call(this, baseurl) || this;
            _this._decryptdata = null;
            _this.rawProgramDateTime = null;
            _this.programDateTime = null;
            _this.tagList = [];
            _this.duration = 0;
            _this.sn = 0;
            _this.levelkey = void 0;
            _this.type = void 0;
            _this.loader = null;
            _this.level = -1;
            _this.cc = 0;
            _this.startPTS = void 0;
            _this.endPTS = void 0;
            _this.appendedPTS = void 0;
            _this.startDTS = void 0;
            _this.endDTS = void 0;
            _this.start = 0;
            _this.deltaPTS = void 0;
            _this.maxStartPTS = void 0;
            _this.minEndPTS = void 0;
            _this.stats = new _load_stats__WEBPACK_IMPORTED_MODULE_4__["LoadStats"]();
            _this.urlId = 0;
            _this.data = void 0;
            _this.bitrateTest = false;
            _this.title = null;
            _this.initSegment = null;
            _this.type = type;
            return _this;
          }
          var _proto2 = Fragment3.prototype;
          _proto2.createInitializationVector = function createInitializationVector(segmentNumber) {
            var uint8View = new Uint8Array(16);
            for (var i = 12; i < 16; i++) {
              uint8View[i] = segmentNumber >> 8 * (15 - i) & 255;
            }
            return uint8View;
          };
          _proto2.setDecryptDataFromLevelKey = function setDecryptDataFromLevelKey(levelkey, segmentNumber) {
            var decryptdata = levelkey;
            if ((levelkey === null || levelkey === void 0 ? void 0 : levelkey.method) === "AES-128" && levelkey.uri && !levelkey.iv) {
              decryptdata = _level_key__WEBPACK_IMPORTED_MODULE_3__["LevelKey"].fromURI(levelkey.uri);
              decryptdata.method = levelkey.method;
              decryptdata.iv = this.createInitializationVector(segmentNumber);
              decryptdata.keyFormat = "identity";
            }
            return decryptdata;
          };
          _proto2.setElementaryStreamInfo = function setElementaryStreamInfo(type, startPTS, endPTS, startDTS, endDTS, partial) {
            if (partial === void 0) {
              partial = false;
            }
            var elementaryStreams = this.elementaryStreams;
            var info = elementaryStreams[type];
            if (!info) {
              elementaryStreams[type] = {
                startPTS,
                endPTS,
                startDTS,
                endDTS,
                partial
              };
              return;
            }
            info.startPTS = Math.min(info.startPTS, startPTS);
            info.endPTS = Math.max(info.endPTS, endPTS);
            info.startDTS = Math.min(info.startDTS, startDTS);
            info.endDTS = Math.max(info.endDTS, endDTS);
          };
          _proto2.clearElementaryStreamInfo = function clearElementaryStreamInfo() {
            var elementaryStreams = this.elementaryStreams;
            elementaryStreams[ElementaryStreamTypes.AUDIO] = null;
            elementaryStreams[ElementaryStreamTypes.VIDEO] = null;
            elementaryStreams[ElementaryStreamTypes.AUDIOVIDEO] = null;
          };
          _createClass(Fragment3, [{
            key: "decryptdata",
            get: function get() {
              if (!this.levelkey && !this._decryptdata) {
                return null;
              }
              if (!this._decryptdata && this.levelkey) {
                var sn = this.sn;
                if (typeof sn !== "number") {
                  if (this.levelkey && this.levelkey.method === "AES-128" && !this.levelkey.iv) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue');
                  }
                  sn = 0;
                }
                this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, sn);
              }
              return this._decryptdata;
            }
          }, {
            key: "end",
            get: function get() {
              return this.start + this.duration;
            }
          }, {
            key: "endProgramDateTime",
            get: function get() {
              if (this.programDateTime === null) {
                return null;
              }
              if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(this.programDateTime)) {
                return null;
              }
              var duration = !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(this.duration) ? 0 : this.duration;
              return this.programDateTime + duration * 1e3;
            }
          }, {
            key: "encrypted",
            get: function get() {
              var _this$decryptdata;
              if ((_this$decryptdata = this.decryptdata) !== null && _this$decryptdata !== void 0 && _this$decryptdata.keyFormat && this.decryptdata.uri) {
                return true;
              }
              return false;
            }
          }]);
          return Fragment3;
        }(BaseSegment);
        var Part = /* @__PURE__ */ function(_BaseSegment2) {
          _inheritsLoose(Part2, _BaseSegment2);
          function Part2(partAttrs, frag, baseurl, index, previous) {
            var _this2;
            _this2 = _BaseSegment2.call(this, baseurl) || this;
            _this2.fragOffset = 0;
            _this2.duration = 0;
            _this2.gap = false;
            _this2.independent = false;
            _this2.relurl = void 0;
            _this2.fragment = void 0;
            _this2.index = void 0;
            _this2.stats = new _load_stats__WEBPACK_IMPORTED_MODULE_4__["LoadStats"]();
            _this2.duration = partAttrs.decimalFloatingPoint("DURATION");
            _this2.gap = partAttrs.bool("GAP");
            _this2.independent = partAttrs.bool("INDEPENDENT");
            _this2.relurl = partAttrs.enumeratedString("URI");
            _this2.fragment = frag;
            _this2.index = index;
            var byteRange = partAttrs.enumeratedString("BYTERANGE");
            if (byteRange) {
              _this2.setByteRange(byteRange, previous);
            }
            if (previous) {
              _this2.fragOffset = previous.fragOffset + previous.duration;
            }
            return _this2;
          }
          _createClass(Part2, [{
            key: "start",
            get: function get() {
              return this.fragment.start + this.fragOffset;
            }
          }, {
            key: "end",
            get: function get() {
              return this.start + this.duration;
            }
          }, {
            key: "loaded",
            get: function get() {
              var elementaryStreams = this.elementaryStreams;
              return !!(elementaryStreams.audio || elementaryStreams.video || elementaryStreams.audiovideo);
            }
          }]);
          return Part2;
        }(BaseSegment);
      },
      "./src/loader/key-loader.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return KeyLoader;
        });
        var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/errors.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/logger.ts");
        var KeyLoader = /* @__PURE__ */ function() {
          function KeyLoader2(hls2) {
            this.hls = void 0;
            this.loaders = {};
            this.decryptkey = null;
            this.decrypturl = null;
            this.hls = hls2;
            this._registerListeners();
          }
          var _proto = KeyLoader2.prototype;
          _proto._registerListeners = function _registerListeners() {
            this.hls.on(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].KEY_LOADING, this.onKeyLoading, this);
          };
          _proto._unregisterListeners = function _unregisterListeners() {
            this.hls.off(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].KEY_LOADING, this.onKeyLoading);
          };
          _proto.destroy = function destroy() {
            this._unregisterListeners();
            for (var loaderName in this.loaders) {
              var loader = this.loaders[loaderName];
              if (loader) {
                loader.destroy();
              }
            }
            this.loaders = {};
          };
          _proto.onKeyLoading = function onKeyLoading(event, data) {
            var frag = data.frag;
            var type = frag.type;
            var loader = this.loaders[type];
            if (!frag.decryptdata) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("Missing decryption data on fragment in onKeyLoading");
              return;
            }
            var uri = frag.decryptdata.uri;
            if (uri !== this.decrypturl || this.decryptkey === null) {
              var config = this.hls.config;
              if (loader) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("abort previous key loader for type:" + type);
                loader.abort();
              }
              if (!uri) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].warn("key uri is falsy");
                return;
              }
              var Loader = config.loader;
              var fragLoader = frag.loader = this.loaders[type] = new Loader(config);
              this.decrypturl = uri;
              this.decryptkey = null;
              var loaderContext = {
                url: uri,
                frag,
                responseType: "arraybuffer"
              };
              var loaderConfig = {
                timeout: config.fragLoadingTimeOut,
                maxRetry: 0,
                retryDelay: config.fragLoadingRetryDelay,
                maxRetryDelay: config.fragLoadingMaxRetryTimeout,
                highWaterMark: 0
              };
              var loaderCallbacks = {
                onSuccess: this.loadsuccess.bind(this),
                onError: this.loaderror.bind(this),
                onTimeout: this.loadtimeout.bind(this)
              };
              fragLoader.load(loaderContext, loaderConfig, loaderCallbacks);
            } else if (this.decryptkey) {
              frag.decryptdata.key = this.decryptkey;
              this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].KEY_LOADED, {
                frag
              });
            }
          };
          _proto.loadsuccess = function loadsuccess(response, stats, context) {
            var frag = context.frag;
            if (!frag.decryptdata) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_2__["logger"].error("after key load, decryptdata unset");
              return;
            }
            this.decryptkey = frag.decryptdata.key = new Uint8Array(response.data);
            frag.loader = null;
            delete this.loaders[frag.type];
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].KEY_LOADED, {
              frag
            });
          };
          _proto.loaderror = function loaderror(response, context) {
            var frag = context.frag;
            var loader = frag.loader;
            if (loader) {
              loader.abort();
            }
            delete this.loaders[frag.type];
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
              type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
              details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_LOAD_ERROR,
              fatal: false,
              frag,
              response
            });
          };
          _proto.loadtimeout = function loadtimeout(stats, context) {
            var frag = context.frag;
            var loader = frag.loader;
            if (loader) {
              loader.abort();
            }
            delete this.loaders[frag.type];
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_0__["Events"].ERROR, {
              type: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorTypes"].NETWORK_ERROR,
              details: _errors__WEBPACK_IMPORTED_MODULE_1__["ErrorDetails"].KEY_LOAD_TIMEOUT,
              fatal: false,
              frag
            });
          };
          return KeyLoader2;
        }();
      },
      "./src/loader/level-details.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "LevelDetails", function() {
          return LevelDetails;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var DEFAULT_TARGET_DURATION = 10;
        var LevelDetails = /* @__PURE__ */ function() {
          function LevelDetails2(baseUrl) {
            this.PTSKnown = false;
            this.alignedSliding = false;
            this.averagetargetduration = void 0;
            this.endCC = 0;
            this.endSN = 0;
            this.fragments = void 0;
            this.fragmentHint = void 0;
            this.partList = null;
            this.live = true;
            this.ageHeader = 0;
            this.advancedDateTime = void 0;
            this.updated = true;
            this.advanced = true;
            this.availabilityDelay = void 0;
            this.misses = 0;
            this.needSidxRanges = false;
            this.startCC = 0;
            this.startSN = 0;
            this.startTimeOffset = null;
            this.targetduration = 0;
            this.totalduration = 0;
            this.type = null;
            this.url = void 0;
            this.m3u8 = "";
            this.version = null;
            this.canBlockReload = false;
            this.canSkipUntil = 0;
            this.canSkipDateRanges = false;
            this.skippedSegments = 0;
            this.recentlyRemovedDateranges = void 0;
            this.partHoldBack = 0;
            this.holdBack = 0;
            this.partTarget = 0;
            this.preloadHint = void 0;
            this.renditionReports = void 0;
            this.tuneInGoal = 0;
            this.deltaUpdateFailed = void 0;
            this.driftStartTime = 0;
            this.driftEndTime = 0;
            this.driftStart = 0;
            this.driftEnd = 0;
            this.fragments = [];
            this.url = baseUrl;
          }
          var _proto = LevelDetails2.prototype;
          _proto.reloaded = function reloaded(previous) {
            if (!previous) {
              this.advanced = true;
              this.updated = true;
              return;
            }
            var partSnDiff = this.lastPartSn - previous.lastPartSn;
            var partIndexDiff = this.lastPartIndex - previous.lastPartIndex;
            this.updated = this.endSN !== previous.endSN || !!partIndexDiff || !!partSnDiff;
            this.advanced = this.endSN > previous.endSN || partSnDiff > 0 || partSnDiff === 0 && partIndexDiff > 0;
            if (this.updated || this.advanced) {
              this.misses = Math.floor(previous.misses * 0.6);
            } else {
              this.misses = previous.misses + 1;
            }
            this.availabilityDelay = previous.availabilityDelay;
          };
          _createClass(LevelDetails2, [{
            key: "hasProgramDateTime",
            get: function get() {
              if (this.fragments.length) {
                return Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(this.fragments[this.fragments.length - 1].programDateTime);
              }
              return false;
            }
          }, {
            key: "levelTargetDuration",
            get: function get() {
              return this.averagetargetduration || this.targetduration || DEFAULT_TARGET_DURATION;
            }
          }, {
            key: "drift",
            get: function get() {
              var runTime = this.driftEndTime - this.driftStartTime;
              if (runTime > 0) {
                var runDuration = this.driftEnd - this.driftStart;
                return runDuration * 1e3 / runTime;
              }
              return 1;
            }
          }, {
            key: "edge",
            get: function get() {
              return this.partEnd || this.fragmentEnd;
            }
          }, {
            key: "partEnd",
            get: function get() {
              var _this$partList;
              if ((_this$partList = this.partList) !== null && _this$partList !== void 0 && _this$partList.length) {
                return this.partList[this.partList.length - 1].end;
              }
              return this.fragmentEnd;
            }
          }, {
            key: "fragmentEnd",
            get: function get() {
              var _this$fragments;
              if ((_this$fragments = this.fragments) !== null && _this$fragments !== void 0 && _this$fragments.length) {
                return this.fragments[this.fragments.length - 1].end;
              }
              return 0;
            }
          }, {
            key: "age",
            get: function get() {
              if (this.advancedDateTime) {
                return Math.max(Date.now() - this.advancedDateTime, 0) / 1e3;
              }
              return 0;
            }
          }, {
            key: "lastPartIndex",
            get: function get() {
              var _this$partList2;
              if ((_this$partList2 = this.partList) !== null && _this$partList2 !== void 0 && _this$partList2.length) {
                return this.partList[this.partList.length - 1].index;
              }
              return -1;
            }
          }, {
            key: "lastPartSn",
            get: function get() {
              var _this$partList3;
              if ((_this$partList3 = this.partList) !== null && _this$partList3 !== void 0 && _this$partList3.length) {
                return this.partList[this.partList.length - 1].fragment.sn;
              }
              return this.endSN;
            }
          }]);
          return LevelDetails2;
        }();
      },
      "./src/loader/level-key.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "LevelKey", function() {
          return LevelKey;
        });
        var url_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/url-toolkit/src/url-toolkit.js");
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var LevelKey = /* @__PURE__ */ function() {
          LevelKey2.fromURL = function fromURL(baseUrl, relativeUrl) {
            return new LevelKey2(baseUrl, relativeUrl);
          };
          LevelKey2.fromURI = function fromURI(uri) {
            return new LevelKey2(uri);
          };
          function LevelKey2(absoluteOrBaseURI, relativeURL) {
            this._uri = null;
            this.method = null;
            this.keyFormat = null;
            this.keyFormatVersions = null;
            this.keyID = null;
            this.key = null;
            this.iv = null;
            if (relativeURL) {
              this._uri = Object(url_toolkit__WEBPACK_IMPORTED_MODULE_0__["buildAbsoluteURL"])(absoluteOrBaseURI, relativeURL, {
                alwaysNormalize: true
              });
            } else {
              this._uri = absoluteOrBaseURI;
            }
          }
          _createClass(LevelKey2, [{
            key: "uri",
            get: function get() {
              return this._uri;
            }
          }]);
          return LevelKey2;
        }();
      },
      "./src/loader/load-stats.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "LoadStats", function() {
          return LoadStats;
        });
        var LoadStats = function LoadStats2() {
          this.aborted = false;
          this.loaded = 0;
          this.retry = 0;
          this.total = 0;
          this.chunkCount = 0;
          this.bwEstimate = 0;
          this.loading = {
            start: 0,
            first: 0,
            end: 0
          };
          this.parsing = {
            start: 0,
            end: 0
          };
          this.buffering = {
            start: 0,
            first: 0,
            end: 0
          };
        };
      },
      "./src/loader/m3u8-parser.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return M3U8Parser;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var url_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/url-toolkit/src/url-toolkit.js");
        var _fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/loader/fragment.ts");
        var _level_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/loader/level-details.ts");
        var _level_key__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/loader/level-key.ts");
        var _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utils/attr-list.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/utils/logger.ts");
        var _utils_codecs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/utils/codecs.ts");
        var MASTER_PLAYLIST_REGEX = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g;
        var MASTER_PLAYLIST_MEDIA_REGEX = /#EXT-X-MEDIA:(.*)/g;
        var LEVEL_PLAYLIST_REGEX_FAST = new RegExp([
          /#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source,
          /(?!#) *(\S[\S ]*)/.source,
          /#EXT-X-BYTERANGE:*(.+)/.source,
          /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source,
          /#.*/.source
        ].join("|"), "g");
        var LEVEL_PLAYLIST_REGEX_SLOW = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|"));
        var MP4_REGEX_SUFFIX = /\.(mp4|m4s|m4v|m4a)$/i;
        function isMP4Url(url) {
          var _URLToolkit$parseURL$, _URLToolkit$parseURL;
          return MP4_REGEX_SUFFIX.test((_URLToolkit$parseURL$ = (_URLToolkit$parseURL = url_toolkit__WEBPACK_IMPORTED_MODULE_1__["parseURL"](url)) === null || _URLToolkit$parseURL === void 0 ? void 0 : _URLToolkit$parseURL.path) != null ? _URLToolkit$parseURL$ : "");
        }
        var M3U8Parser = /* @__PURE__ */ function() {
          function M3U8Parser2() {
          }
          M3U8Parser2.findGroup = function findGroup(groups, mediaGroupId) {
            for (var i = 0; i < groups.length; i++) {
              var group = groups[i];
              if (group.id === mediaGroupId) {
                return group;
              }
            }
          };
          M3U8Parser2.convertAVC1ToAVCOTI = function convertAVC1ToAVCOTI(codec) {
            var avcdata = codec.split(".");
            if (avcdata.length > 2) {
              var result = avcdata.shift() + ".";
              result += parseInt(avcdata.shift()).toString(16);
              result += ("000" + parseInt(avcdata.shift()).toString(16)).substr(-4);
              return result;
            }
            return codec;
          };
          M3U8Parser2.resolve = function resolve(url, baseUrl) {
            return url_toolkit__WEBPACK_IMPORTED_MODULE_1__["buildAbsoluteURL"](baseUrl, url, {
              alwaysNormalize: true
            });
          };
          M3U8Parser2.parseMasterPlaylist = function parseMasterPlaylist(string, baseurl) {
            var levels = [];
            var sessionData = {};
            var hasSessionData = false;
            MASTER_PLAYLIST_REGEX.lastIndex = 0;
            var result;
            while ((result = MASTER_PLAYLIST_REGEX.exec(string)) != null) {
              if (result[1]) {
                var attrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](result[1]);
                var level = {
                  attrs,
                  bitrate: attrs.decimalInteger("AVERAGE-BANDWIDTH") || attrs.decimalInteger("BANDWIDTH"),
                  name: attrs.NAME,
                  url: M3U8Parser2.resolve(result[2], baseurl)
                };
                var resolution = attrs.decimalResolution("RESOLUTION");
                if (resolution) {
                  level.width = resolution.width;
                  level.height = resolution.height;
                }
                setCodecs((attrs.CODECS || "").split(/[ ,]+/).filter(function(c) {
                  return c;
                }), level);
                if (level.videoCodec && level.videoCodec.indexOf("avc1") !== -1) {
                  level.videoCodec = M3U8Parser2.convertAVC1ToAVCOTI(level.videoCodec);
                }
                levels.push(level);
              } else if (result[3]) {
                var sessionAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](result[3]);
                if (sessionAttrs["DATA-ID"]) {
                  hasSessionData = true;
                  sessionData[sessionAttrs["DATA-ID"]] = sessionAttrs;
                }
              }
            }
            return {
              levels,
              sessionData: hasSessionData ? sessionData : null
            };
          };
          M3U8Parser2.parseMasterPlaylistMedia = function parseMasterPlaylistMedia(string, baseurl, type, groups) {
            if (groups === void 0) {
              groups = [];
            }
            var result;
            var medias = [];
            var id = 0;
            MASTER_PLAYLIST_MEDIA_REGEX.lastIndex = 0;
            while ((result = MASTER_PLAYLIST_MEDIA_REGEX.exec(string)) !== null) {
              var attrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](result[1]);
              if (attrs.TYPE === type) {
                var media = {
                  attrs,
                  bitrate: 0,
                  id: id++,
                  groupId: attrs["GROUP-ID"],
                  instreamId: attrs["INSTREAM-ID"],
                  name: attrs.NAME || attrs.LANGUAGE || "",
                  type,
                  default: attrs.bool("DEFAULT"),
                  autoselect: attrs.bool("AUTOSELECT"),
                  forced: attrs.bool("FORCED"),
                  lang: attrs.LANGUAGE,
                  url: attrs.URI ? M3U8Parser2.resolve(attrs.URI, baseurl) : ""
                };
                if (groups.length) {
                  var groupCodec = M3U8Parser2.findGroup(groups, media.groupId) || groups[0];
                  assignCodec(media, groupCodec, "audioCodec");
                  assignCodec(media, groupCodec, "textCodec");
                }
                medias.push(media);
              }
            }
            return medias;
          };
          M3U8Parser2.parseLevelPlaylist = function parseLevelPlaylist(string, baseurl, id, type, levelUrlId) {
            var level = new _level_details__WEBPACK_IMPORTED_MODULE_3__["LevelDetails"](baseurl);
            var fragments = level.fragments;
            var currentInitSegment = null;
            var currentSN = 0;
            var currentPart = 0;
            var totalduration = 0;
            var discontinuityCounter = 0;
            var prevFrag = null;
            var frag = new _fragment__WEBPACK_IMPORTED_MODULE_2__["Fragment"](type, baseurl);
            var result;
            var i;
            var levelkey;
            var firstPdtIndex = -1;
            var createNextFrag = false;
            LEVEL_PLAYLIST_REGEX_FAST.lastIndex = 0;
            level.m3u8 = string;
            while ((result = LEVEL_PLAYLIST_REGEX_FAST.exec(string)) !== null) {
              if (createNextFrag) {
                createNextFrag = false;
                frag = new _fragment__WEBPACK_IMPORTED_MODULE_2__["Fragment"](type, baseurl);
                frag.start = totalduration;
                frag.sn = currentSN;
                frag.cc = discontinuityCounter;
                frag.level = id;
                if (currentInitSegment) {
                  frag.initSegment = currentInitSegment;
                  frag.rawProgramDateTime = currentInitSegment.rawProgramDateTime;
                }
              }
              var duration = result[1];
              if (duration) {
                frag.duration = parseFloat(duration);
                var title = (" " + result[2]).slice(1);
                frag.title = title || null;
                frag.tagList.push(title ? ["INF", duration, title] : ["INF", duration]);
              } else if (result[3]) {
                if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(frag.duration)) {
                  frag.start = totalduration;
                  if (levelkey) {
                    frag.levelkey = levelkey;
                  }
                  frag.sn = currentSN;
                  frag.level = id;
                  frag.cc = discontinuityCounter;
                  frag.urlId = levelUrlId;
                  fragments.push(frag);
                  frag.relurl = (" " + result[3]).slice(1);
                  assignProgramDateTime(frag, prevFrag);
                  prevFrag = frag;
                  totalduration += frag.duration;
                  currentSN++;
                  currentPart = 0;
                  createNextFrag = true;
                }
              } else if (result[4]) {
                var data = (" " + result[4]).slice(1);
                if (prevFrag) {
                  frag.setByteRange(data, prevFrag);
                } else {
                  frag.setByteRange(data);
                }
              } else if (result[5]) {
                frag.rawProgramDateTime = (" " + result[5]).slice(1);
                frag.tagList.push(["PROGRAM-DATE-TIME", frag.rawProgramDateTime]);
                if (firstPdtIndex === -1) {
                  firstPdtIndex = fragments.length;
                }
              } else {
                result = result[0].match(LEVEL_PLAYLIST_REGEX_SLOW);
                if (!result) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].warn("No matches on slow regex match for level playlist!");
                  continue;
                }
                for (i = 1; i < result.length; i++) {
                  if (typeof result[i] !== "undefined") {
                    break;
                  }
                }
                var tag = (" " + result[i]).slice(1);
                var value1 = (" " + result[i + 1]).slice(1);
                var value2 = result[i + 2] ? (" " + result[i + 2]).slice(1) : "";
                switch (tag) {
                  case "PLAYLIST-TYPE":
                    level.type = value1.toUpperCase();
                    break;
                  case "MEDIA-SEQUENCE":
                    currentSN = level.startSN = parseInt(value1);
                    break;
                  case "SKIP": {
                    var skipAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1);
                    var skippedSegments = skipAttrs.decimalInteger("SKIPPED-SEGMENTS");
                    if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(skippedSegments)) {
                      level.skippedSegments = skippedSegments;
                      for (var _i = skippedSegments; _i--; ) {
                        fragments.unshift(null);
                      }
                      currentSN += skippedSegments;
                    }
                    var recentlyRemovedDateranges = skipAttrs.enumeratedString("RECENTLY-REMOVED-DATERANGES");
                    if (recentlyRemovedDateranges) {
                      level.recentlyRemovedDateranges = recentlyRemovedDateranges.split("	");
                    }
                    break;
                  }
                  case "TARGETDURATION":
                    level.targetduration = parseFloat(value1);
                    break;
                  case "VERSION":
                    level.version = parseInt(value1);
                    break;
                  case "EXTM3U":
                    break;
                  case "ENDLIST":
                    level.live = false;
                    break;
                  case "#":
                    if (value1 || value2) {
                      frag.tagList.push(value2 ? [value1, value2] : [value1]);
                    }
                    break;
                  case "DIS":
                    discontinuityCounter++;
                  case "GAP":
                    frag.tagList.push([tag]);
                    break;
                  case "BITRATE":
                    frag.tagList.push([tag, value1]);
                    break;
                  case "DISCONTINUITY-SEQ":
                    discontinuityCounter = parseInt(value1);
                    break;
                  case "KEY": {
                    var _keyAttrs$enumeratedS;
                    var keyAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1);
                    var decryptmethod = keyAttrs.enumeratedString("METHOD");
                    var decrypturi = keyAttrs.URI;
                    var decryptiv = keyAttrs.hexadecimalInteger("IV");
                    var decryptkeyformatversions = keyAttrs.enumeratedString("KEYFORMATVERSIONS");
                    var decryptkeyid = keyAttrs.enumeratedString("KEYID");
                    var decryptkeyformat = (_keyAttrs$enumeratedS = keyAttrs.enumeratedString("KEYFORMAT")) != null ? _keyAttrs$enumeratedS : "identity";
                    var unsupportedKnownKeyformatsInManifest = [
                      "com.apple.streamingkeydelivery",
                      "com.microsoft.playready",
                      "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
                      "com.widevine"
                    ];
                    if (unsupportedKnownKeyformatsInManifest.indexOf(decryptkeyformat) > -1) {
                      _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].warn("Keyformat " + decryptkeyformat + " is not supported from the manifest");
                      continue;
                    } else if (decryptkeyformat !== "identity") {
                      continue;
                    }
                    if (decryptmethod) {
                      levelkey = _level_key__WEBPACK_IMPORTED_MODULE_4__["LevelKey"].fromURL(baseurl, decrypturi);
                      if (decrypturi && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(decryptmethod) >= 0) {
                        levelkey.method = decryptmethod;
                        levelkey.keyFormat = decryptkeyformat;
                        if (decryptkeyid) {
                          levelkey.keyID = decryptkeyid;
                        }
                        if (decryptkeyformatversions) {
                          levelkey.keyFormatVersions = decryptkeyformatversions;
                        }
                        levelkey.iv = decryptiv;
                      }
                    }
                    break;
                  }
                  case "START": {
                    var startAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1);
                    var startTimeOffset = startAttrs.decimalFloatingPoint("TIME-OFFSET");
                    if (Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(startTimeOffset)) {
                      level.startTimeOffset = startTimeOffset;
                    }
                    break;
                  }
                  case "MAP": {
                    var mapAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1);
                    frag.relurl = mapAttrs.URI;
                    if (mapAttrs.BYTERANGE) {
                      frag.setByteRange(mapAttrs.BYTERANGE);
                    }
                    frag.level = id;
                    frag.sn = "initSegment";
                    if (levelkey) {
                      frag.levelkey = levelkey;
                    }
                    frag.initSegment = null;
                    currentInitSegment = frag;
                    createNextFrag = true;
                    break;
                  }
                  case "SERVER-CONTROL": {
                    var serverControlAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1);
                    level.canBlockReload = serverControlAttrs.bool("CAN-BLOCK-RELOAD");
                    level.canSkipUntil = serverControlAttrs.optionalFloat("CAN-SKIP-UNTIL", 0);
                    level.canSkipDateRanges = level.canSkipUntil > 0 && serverControlAttrs.bool("CAN-SKIP-DATERANGES");
                    level.partHoldBack = serverControlAttrs.optionalFloat("PART-HOLD-BACK", 0);
                    level.holdBack = serverControlAttrs.optionalFloat("HOLD-BACK", 0);
                    break;
                  }
                  case "PART-INF": {
                    var partInfAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1);
                    level.partTarget = partInfAttrs.decimalFloatingPoint("PART-TARGET");
                    break;
                  }
                  case "PART": {
                    var partList = level.partList;
                    if (!partList) {
                      partList = level.partList = [];
                    }
                    var previousFragmentPart = currentPart > 0 ? partList[partList.length - 1] : void 0;
                    var index = currentPart++;
                    var part = new _fragment__WEBPACK_IMPORTED_MODULE_2__["Part"](new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1), frag, baseurl, index, previousFragmentPart);
                    partList.push(part);
                    frag.duration += part.duration;
                    break;
                  }
                  case "PRELOAD-HINT": {
                    var preloadHintAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1);
                    level.preloadHint = preloadHintAttrs;
                    break;
                  }
                  case "RENDITION-REPORT": {
                    var renditionReportAttrs = new _utils_attr_list__WEBPACK_IMPORTED_MODULE_5__["AttrList"](value1);
                    level.renditionReports = level.renditionReports || [];
                    level.renditionReports.push(renditionReportAttrs);
                    break;
                  }
                  default:
                    _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].warn("line parsed but not handled: " + result);
                    break;
                }
              }
            }
            if (prevFrag && !prevFrag.relurl) {
              fragments.pop();
              totalduration -= prevFrag.duration;
              if (level.partList) {
                level.fragmentHint = prevFrag;
              }
            } else if (level.partList) {
              assignProgramDateTime(frag, prevFrag);
              frag.cc = discontinuityCounter;
              level.fragmentHint = frag;
            }
            var fragmentLength = fragments.length;
            var firstFragment = fragments[0];
            var lastFragment = fragments[fragmentLength - 1];
            totalduration += level.skippedSegments * level.targetduration;
            if (totalduration > 0 && fragmentLength && lastFragment) {
              level.averagetargetduration = totalduration / fragmentLength;
              var lastSn = lastFragment.sn;
              level.endSN = lastSn !== "initSegment" ? lastSn : 0;
              if (firstFragment) {
                level.startCC = firstFragment.cc;
                if (!firstFragment.initSegment) {
                  if (level.fragments.every(function(frag2) {
                    return frag2.relurl && isMP4Url(frag2.relurl);
                  })) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_6__["logger"].warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX");
                    frag = new _fragment__WEBPACK_IMPORTED_MODULE_2__["Fragment"](type, baseurl);
                    frag.relurl = lastFragment.relurl;
                    frag.level = id;
                    frag.sn = "initSegment";
                    firstFragment.initSegment = frag;
                    level.needSidxRanges = true;
                  }
                }
              }
            } else {
              level.endSN = 0;
              level.startCC = 0;
            }
            if (level.fragmentHint) {
              totalduration += level.fragmentHint.duration;
            }
            level.totalduration = totalduration;
            level.endCC = discontinuityCounter;
            if (firstPdtIndex > 0) {
              backfillProgramDateTimes(fragments, firstPdtIndex);
            }
            return level;
          };
          return M3U8Parser2;
        }();
        function setCodecs(codecs, level) {
          ["video", "audio", "text"].forEach(function(type) {
            var filtered = codecs.filter(function(codec) {
              return Object(_utils_codecs__WEBPACK_IMPORTED_MODULE_7__["isCodecType"])(codec, type);
            });
            if (filtered.length) {
              var preferred = filtered.filter(function(codec) {
                return codec.lastIndexOf("avc1", 0) === 0 || codec.lastIndexOf("mp4a", 0) === 0;
              });
              level[type + "Codec"] = preferred.length > 0 ? preferred[0] : filtered[0];
              codecs = codecs.filter(function(codec) {
                return filtered.indexOf(codec) === -1;
              });
            }
          });
          level.unknownCodecs = codecs;
        }
        function assignCodec(media, groupItem, codecProperty) {
          var codecValue = groupItem[codecProperty];
          if (codecValue) {
            media[codecProperty] = codecValue;
          }
        }
        function backfillProgramDateTimes(fragments, firstPdtIndex) {
          var fragPrev = fragments[firstPdtIndex];
          for (var i = firstPdtIndex; i--; ) {
            var frag = fragments[i];
            if (!frag) {
              return;
            }
            frag.programDateTime = fragPrev.programDateTime - frag.duration * 1e3;
            fragPrev = frag;
          }
        }
        function assignProgramDateTime(frag, prevFrag) {
          if (frag.rawProgramDateTime) {
            frag.programDateTime = Date.parse(frag.rawProgramDateTime);
          } else if (prevFrag !== null && prevFrag !== void 0 && prevFrag.programDateTime) {
            frag.programDateTime = prevFrag.endProgramDateTime;
          }
          if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(frag.programDateTime)) {
            frag.programDateTime = null;
            frag.rawProgramDateTime = null;
          }
        }
      },
      "./src/loader/playlist-loader.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/errors.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/logger.ts");
        var _utils_mp4_tools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _m3u8_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/loader/m3u8-parser.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/types/loader.ts");
        var _utils_attr_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/utils/attr-list.ts");
        function mapContextToLevelType(context) {
          var type = context.type;
          switch (type) {
            case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].AUDIO_TRACK:
              return _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].AUDIO;
            case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].SUBTITLE_TRACK:
              return _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].SUBTITLE;
            default:
              return _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].MAIN;
          }
        }
        function getResponseUrl(response, context) {
          var url = response.url;
          if (url === void 0 || url.indexOf("data:") === 0) {
            url = context.url;
          }
          return url;
        }
        var PlaylistLoader = /* @__PURE__ */ function() {
          function PlaylistLoader2(hls2) {
            this.hls = void 0;
            this.loaders = Object.create(null);
            this.hls = hls2;
            this.registerListeners();
          }
          var _proto = PlaylistLoader2.prototype;
          _proto.registerListeners = function registerListeners() {
            var hls2 = this.hls;
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_LOADING, this.onLevelLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this);
            hls2.on(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          };
          _proto.unregisterListeners = function unregisterListeners() {
            var hls2 = this.hls;
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADING, this.onManifestLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_LOADING, this.onLevelLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this);
            hls2.off(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this);
          };
          _proto.createInternalLoader = function createInternalLoader(context) {
            var config = this.hls.config;
            var PLoader = config.pLoader;
            var Loader = config.loader;
            var InternalLoader = PLoader || Loader;
            var loader = new InternalLoader(config);
            context.loader = loader;
            this.loaders[context.type] = loader;
            return loader;
          };
          _proto.getInternalLoader = function getInternalLoader(context) {
            return this.loaders[context.type];
          };
          _proto.resetInternalLoader = function resetInternalLoader(contextType) {
            if (this.loaders[contextType]) {
              delete this.loaders[contextType];
            }
          };
          _proto.destroyInternalLoaders = function destroyInternalLoaders() {
            for (var contextType in this.loaders) {
              var loader = this.loaders[contextType];
              if (loader) {
                loader.destroy();
              }
              this.resetInternalLoader(contextType);
            }
          };
          _proto.destroy = function destroy() {
            this.unregisterListeners();
            this.destroyInternalLoaders();
          };
          _proto.onManifestLoading = function onManifestLoading(event, data) {
            var url = data.url;
            this.load({
              id: null,
              groupId: null,
              level: 0,
              responseType: "text",
              type: _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].MANIFEST,
              url,
              deliveryDirectives: null
            });
          };
          _proto.onLevelLoading = function onLevelLoading(event, data) {
            var id = data.id, level = data.level, url = data.url, deliveryDirectives = data.deliveryDirectives;
            this.load({
              id,
              groupId: null,
              level,
              responseType: "text",
              type: _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].LEVEL,
              url,
              deliveryDirectives
            });
          };
          _proto.onAudioTrackLoading = function onAudioTrackLoading(event, data) {
            var id = data.id, groupId = data.groupId, url = data.url, deliveryDirectives = data.deliveryDirectives;
            this.load({
              id,
              groupId,
              level: null,
              responseType: "text",
              type: _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].AUDIO_TRACK,
              url,
              deliveryDirectives
            });
          };
          _proto.onSubtitleTrackLoading = function onSubtitleTrackLoading(event, data) {
            var id = data.id, groupId = data.groupId, url = data.url, deliveryDirectives = data.deliveryDirectives;
            this.load({
              id,
              groupId,
              level: null,
              responseType: "text",
              type: _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].SUBTITLE_TRACK,
              url,
              deliveryDirectives
            });
          };
          _proto.load = function load(context) {
            var _context$deliveryDire;
            var config = this.hls.config;
            var loader = this.getInternalLoader(context);
            if (loader) {
              var loaderContext = loader.context;
              if (loaderContext && loaderContext.url === context.url) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].trace("[playlist-loader]: playlist request ongoing");
                return;
              }
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].log("[playlist-loader]: aborting previous loader for type: " + context.type);
              loader.abort();
            }
            var maxRetry;
            var timeout;
            var retryDelay;
            var maxRetryDelay;
            switch (context.type) {
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].MANIFEST:
                maxRetry = config.manifestLoadingMaxRetry;
                timeout = config.manifestLoadingTimeOut;
                retryDelay = config.manifestLoadingRetryDelay;
                maxRetryDelay = config.manifestLoadingMaxRetryTimeout;
                break;
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].LEVEL:
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].AUDIO_TRACK:
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].SUBTITLE_TRACK:
                maxRetry = 0;
                timeout = config.levelLoadingTimeOut;
                break;
              default:
                maxRetry = config.levelLoadingMaxRetry;
                timeout = config.levelLoadingTimeOut;
                retryDelay = config.levelLoadingRetryDelay;
                maxRetryDelay = config.levelLoadingMaxRetryTimeout;
                break;
            }
            loader = this.createInternalLoader(context);
            if ((_context$deliveryDire = context.deliveryDirectives) !== null && _context$deliveryDire !== void 0 && _context$deliveryDire.part) {
              var levelDetails;
              if (context.type === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].LEVEL && context.level !== null) {
                levelDetails = this.hls.levels[context.level].details;
              } else if (context.type === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].AUDIO_TRACK && context.id !== null) {
                levelDetails = this.hls.audioTracks[context.id].details;
              } else if (context.type === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].SUBTITLE_TRACK && context.id !== null) {
                levelDetails = this.hls.subtitleTracks[context.id].details;
              }
              if (levelDetails) {
                var partTarget = levelDetails.partTarget;
                var targetDuration = levelDetails.targetduration;
                if (partTarget && targetDuration) {
                  timeout = Math.min(Math.max(partTarget * 3, targetDuration * 0.8) * 1e3, timeout);
                }
              }
            }
            var loaderConfig = {
              timeout,
              maxRetry,
              retryDelay,
              maxRetryDelay,
              highWaterMark: 0
            };
            var loaderCallbacks = {
              onSuccess: this.loadsuccess.bind(this),
              onError: this.loaderror.bind(this),
              onTimeout: this.loadtimeout.bind(this)
            };
            loader.load(context, loaderConfig, loaderCallbacks);
          };
          _proto.loadsuccess = function loadsuccess(response, stats, context, networkDetails) {
            if (networkDetails === void 0) {
              networkDetails = null;
            }
            if (context.isSidxRequest) {
              this.handleSidxRequest(response, context);
              this.handlePlaylistLoaded(response, stats, context, networkDetails);
              return;
            }
            this.resetInternalLoader(context.type);
            var string = response.data;
            if (string.indexOf("#EXTM3U") !== 0) {
              this.handleManifestParsingError(response, context, "no EXTM3U delimiter", networkDetails);
              return;
            }
            stats.parsing.start = performance.now();
            if (string.indexOf("#EXTINF:") > 0 || string.indexOf("#EXT-X-TARGETDURATION:") > 0) {
              this.handleTrackOrLevelPlaylist(response, stats, context, networkDetails);
            } else {
              this.handleMasterPlaylist(response, stats, context, networkDetails);
            }
          };
          _proto.loaderror = function loaderror(response, context, networkDetails) {
            if (networkDetails === void 0) {
              networkDetails = null;
            }
            this.handleNetworkError(context, networkDetails, false, response);
          };
          _proto.loadtimeout = function loadtimeout(stats, context, networkDetails) {
            if (networkDetails === void 0) {
              networkDetails = null;
            }
            this.handleNetworkError(context, networkDetails, true);
          };
          _proto.handleMasterPlaylist = function handleMasterPlaylist(response, stats, context, networkDetails) {
            var hls2 = this.hls;
            var string = response.data;
            var url = getResponseUrl(response, context);
            var _M3U8Parser$parseMast = _m3u8_parser__WEBPACK_IMPORTED_MODULE_5__["default"].parseMasterPlaylist(string, url), levels = _M3U8Parser$parseMast.levels, sessionData = _M3U8Parser$parseMast.sessionData;
            if (!levels.length) {
              this.handleManifestParsingError(response, context, "no level found in manifest", networkDetails);
              return;
            }
            var audioGroups = levels.map(function(level) {
              return {
                id: level.attrs.AUDIO,
                audioCodec: level.audioCodec
              };
            });
            var subtitleGroups = levels.map(function(level) {
              return {
                id: level.attrs.SUBTITLES,
                textCodec: level.textCodec
              };
            });
            var audioTracks = _m3u8_parser__WEBPACK_IMPORTED_MODULE_5__["default"].parseMasterPlaylistMedia(string, url, "AUDIO", audioGroups);
            var subtitles = _m3u8_parser__WEBPACK_IMPORTED_MODULE_5__["default"].parseMasterPlaylistMedia(string, url, "SUBTITLES", subtitleGroups);
            var captions = _m3u8_parser__WEBPACK_IMPORTED_MODULE_5__["default"].parseMasterPlaylistMedia(string, url, "CLOSED-CAPTIONS");
            if (audioTracks.length) {
              var embeddedAudioFound = audioTracks.some(function(audioTrack) {
                return !audioTrack.url;
              });
              if (!embeddedAudioFound && levels[0].audioCodec && !levels[0].attrs.AUDIO) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one");
                audioTracks.unshift({
                  type: "main",
                  name: "main",
                  default: false,
                  autoselect: false,
                  forced: false,
                  id: -1,
                  attrs: new _utils_attr_list__WEBPACK_IMPORTED_MODULE_7__["AttrList"]({}),
                  bitrate: 0,
                  url: ""
                });
              }
            }
            hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADED, {
              levels,
              audioTracks,
              subtitles,
              captions,
              url,
              stats,
              networkDetails,
              sessionData
            });
          };
          _proto.handleTrackOrLevelPlaylist = function handleTrackOrLevelPlaylist(response, stats, context, networkDetails) {
            var hls2 = this.hls;
            var id = context.id, level = context.level, type = context.type;
            var url = getResponseUrl(response, context);
            var levelUrlId = Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(id) ? id : 0;
            var levelId = Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(level) ? level : levelUrlId;
            var levelType = mapContextToLevelType(context);
            var levelDetails = _m3u8_parser__WEBPACK_IMPORTED_MODULE_5__["default"].parseLevelPlaylist(response.data, url, levelId, levelType, levelUrlId);
            if (!levelDetails.fragments.length) {
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].NETWORK_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].LEVEL_EMPTY_ERROR,
                fatal: false,
                url,
                reason: "no fragments found in level",
                level: typeof context.level === "number" ? context.level : void 0
              });
              return;
            }
            if (type === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].MANIFEST) {
              var singleLevel = {
                attrs: new _utils_attr_list__WEBPACK_IMPORTED_MODULE_7__["AttrList"]({}),
                bitrate: 0,
                details: levelDetails,
                name: "",
                url
              };
              hls2.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].MANIFEST_LOADED, {
                levels: [singleLevel],
                audioTracks: [],
                url,
                stats,
                networkDetails,
                sessionData: null
              });
            }
            stats.parsing.end = performance.now();
            if (levelDetails.needSidxRanges) {
              var _levelDetails$fragmen;
              var sidxUrl = (_levelDetails$fragmen = levelDetails.fragments[0].initSegment) === null || _levelDetails$fragmen === void 0 ? void 0 : _levelDetails$fragmen.url;
              this.load({
                url: sidxUrl,
                isSidxRequest: true,
                type,
                level,
                levelDetails,
                id,
                groupId: null,
                rangeStart: 0,
                rangeEnd: 2048,
                responseType: "arraybuffer",
                deliveryDirectives: null
              });
              return;
            }
            context.levelDetails = levelDetails;
            this.handlePlaylistLoaded(response, stats, context, networkDetails);
          };
          _proto.handleSidxRequest = function handleSidxRequest(response, context) {
            var sidxInfo = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_4__["parseSegmentIndex"])(new Uint8Array(response.data));
            if (!sidxInfo) {
              return;
            }
            var sidxReferences = sidxInfo.references;
            var levelDetails = context.levelDetails;
            sidxReferences.forEach(function(segmentRef, index) {
              var segRefInfo = segmentRef.info;
              var frag = levelDetails.fragments[index];
              if (frag.byteRange.length === 0) {
                frag.setByteRange(String(1 + segRefInfo.end - segRefInfo.start) + "@" + String(segRefInfo.start));
              }
              if (frag.initSegment) {
                frag.initSegment.setByteRange(String(sidxInfo.moovEndOffset) + "@0");
              }
            });
          };
          _proto.handleManifestParsingError = function handleManifestParsingError(response, context, reason, networkDetails) {
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, {
              type: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].NETWORK_ERROR,
              details: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].MANIFEST_PARSING_ERROR,
              fatal: context.type === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].MANIFEST,
              url: response.url,
              reason,
              response,
              context,
              networkDetails
            });
          };
          _proto.handleNetworkError = function handleNetworkError(context, networkDetails, timeout, response) {
            if (timeout === void 0) {
              timeout = false;
            }
            _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("[playlist-loader]: A network " + (timeout ? "timeout" : "error") + " occurred while loading " + context.type + " level: " + context.level + " id: " + context.id + ' group-id: "' + context.groupId + '"');
            var details = _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].UNKNOWN;
            var fatal = false;
            var loader = this.getInternalLoader(context);
            switch (context.type) {
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].MANIFEST:
                details = timeout ? _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].MANIFEST_LOAD_TIMEOUT : _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].MANIFEST_LOAD_ERROR;
                fatal = true;
                break;
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].LEVEL:
                details = timeout ? _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].LEVEL_LOAD_TIMEOUT : _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].LEVEL_LOAD_ERROR;
                fatal = false;
                break;
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].AUDIO_TRACK:
                details = timeout ? _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].AUDIO_TRACK_LOAD_TIMEOUT : _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].AUDIO_TRACK_LOAD_ERROR;
                fatal = false;
                break;
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].SUBTITLE_TRACK:
                details = timeout ? _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].SUBTITLE_TRACK_LOAD_TIMEOUT : _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorDetails"].SUBTITLE_LOAD_ERROR;
                fatal = false;
                break;
            }
            if (loader) {
              this.resetInternalLoader(context.type);
            }
            var errorData = {
              type: _errors__WEBPACK_IMPORTED_MODULE_2__["ErrorTypes"].NETWORK_ERROR,
              details,
              fatal,
              url: context.url,
              loader,
              context,
              networkDetails
            };
            if (response) {
              errorData.response = response;
            }
            this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].ERROR, errorData);
          };
          _proto.handlePlaylistLoaded = function handlePlaylistLoaded(response, stats, context, networkDetails) {
            var type = context.type, level = context.level, id = context.id, groupId = context.groupId, loader = context.loader, levelDetails = context.levelDetails, deliveryDirectives = context.deliveryDirectives;
            if (!(levelDetails !== null && levelDetails !== void 0 && levelDetails.targetduration)) {
              this.handleManifestParsingError(response, context, "invalid target duration", networkDetails);
              return;
            }
            if (!loader) {
              return;
            }
            if (levelDetails.live) {
              if (loader.getCacheAge) {
                levelDetails.ageHeader = loader.getCacheAge() || 0;
              }
              if (!loader.getCacheAge || isNaN(levelDetails.ageHeader)) {
                levelDetails.ageHeader = 0;
              }
            }
            switch (type) {
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].MANIFEST:
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].LEVEL:
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].LEVEL_LOADED, {
                  details: levelDetails,
                  level: level || 0,
                  id: id || 0,
                  stats,
                  networkDetails,
                  deliveryDirectives
                });
                break;
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].AUDIO_TRACK:
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].AUDIO_TRACK_LOADED, {
                  details: levelDetails,
                  id: id || 0,
                  groupId: groupId || "",
                  stats,
                  networkDetails,
                  deliveryDirectives
                });
                break;
              case _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistContextType"].SUBTITLE_TRACK:
                this.hls.trigger(_events__WEBPACK_IMPORTED_MODULE_1__["Events"].SUBTITLE_TRACK_LOADED, {
                  details: levelDetails,
                  id: id || 0,
                  groupId: groupId || "",
                  stats,
                  networkDetails,
                  deliveryDirectives
                });
                break;
            }
          };
          return PlaylistLoader2;
        }();
        __webpack_exports__["default"] = PlaylistLoader;
      },
      "./src/polyfills/number.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "isFiniteNumber", function() {
          return isFiniteNumber;
        });
        __webpack_require__.d(__webpack_exports__, "MAX_SAFE_INTEGER", function() {
          return MAX_SAFE_INTEGER;
        });
        var isFiniteNumber = Number.isFinite || function(value) {
          return typeof value === "number" && isFinite(value);
        };
        var MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
      },
      "./src/remux/aac-helper.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var AAC = /* @__PURE__ */ function() {
          function AAC2() {
          }
          AAC2.getSilentFrame = function getSilentFrame(codec, channelCount) {
            switch (codec) {
              case "mp4a.40.2":
                if (channelCount === 1) {
                  return new Uint8Array([0, 200, 0, 128, 35, 128]);
                } else if (channelCount === 2) {
                  return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                } else if (channelCount === 3) {
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                } else if (channelCount === 4) {
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                } else if (channelCount === 5) {
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                } else if (channelCount === 6) {
                  return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                }
                break;
              default:
                if (channelCount === 1) {
                  return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                } else if (channelCount === 2) {
                  return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                } else if (channelCount === 3) {
                  return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                }
                break;
            }
            return void 0;
          };
          return AAC2;
        }();
        __webpack_exports__["default"] = AAC;
      },
      "./src/remux/mp4-generator.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var UINT32_MAX = Math.pow(2, 32) - 1;
        var MP4 = /* @__PURE__ */ function() {
          function MP42() {
          }
          MP42.init = function init() {
            MP42.types = {
              avc1: [],
              avcC: [],
              btrt: [],
              dinf: [],
              dref: [],
              esds: [],
              ftyp: [],
              hdlr: [],
              mdat: [],
              mdhd: [],
              mdia: [],
              mfhd: [],
              minf: [],
              moof: [],
              moov: [],
              mp4a: [],
              ".mp3": [],
              mvex: [],
              mvhd: [],
              pasp: [],
              sdtp: [],
              stbl: [],
              stco: [],
              stsc: [],
              stsd: [],
              stsz: [],
              stts: [],
              tfdt: [],
              tfhd: [],
              traf: [],
              trak: [],
              trun: [],
              trex: [],
              tkhd: [],
              vmhd: [],
              smhd: []
            };
            var i;
            for (i in MP42.types) {
              if (MP42.types.hasOwnProperty(i)) {
                MP42.types[i] = [i.charCodeAt(0), i.charCodeAt(1), i.charCodeAt(2), i.charCodeAt(3)];
              }
            }
            var videoHdlr = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              118,
              105,
              100,
              101,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              86,
              105,
              100,
              101,
              111,
              72,
              97,
              110,
              100,
              108,
              101,
              114,
              0
            ]);
            var audioHdlr = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              115,
              111,
              117,
              110,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              83,
              111,
              117,
              110,
              100,
              72,
              97,
              110,
              100,
              108,
              101,
              114,
              0
            ]);
            MP42.HDLR_TYPES = {
              video: videoHdlr,
              audio: audioHdlr
            };
            var dref = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              12,
              117,
              114,
              108,
              32,
              0,
              0,
              0,
              1
            ]);
            var stco = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]);
            MP42.STTS = MP42.STSC = MP42.STCO = stco;
            MP42.STSZ = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]);
            MP42.VMHD = new Uint8Array([
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]);
            MP42.SMHD = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0
            ]);
            MP42.STSD = new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1
            ]);
            var majorBrand = new Uint8Array([105, 115, 111, 109]);
            var avc1Brand = new Uint8Array([97, 118, 99, 49]);
            var minorVersion = new Uint8Array([0, 0, 0, 1]);
            MP42.FTYP = MP42.box(MP42.types.ftyp, majorBrand, minorVersion, majorBrand, avc1Brand);
            MP42.DINF = MP42.box(MP42.types.dinf, MP42.box(MP42.types.dref, dref));
          };
          MP42.box = function box(type) {
            var size = 8;
            for (var _len = arguments.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              payload[_key - 1] = arguments[_key];
            }
            var i = payload.length;
            var len = i;
            while (i--) {
              size += payload[i].byteLength;
            }
            var result = new Uint8Array(size);
            result[0] = size >> 24 & 255;
            result[1] = size >> 16 & 255;
            result[2] = size >> 8 & 255;
            result[3] = size & 255;
            result.set(type, 4);
            for (i = 0, size = 8; i < len; i++) {
              result.set(payload[i], size);
              size += payload[i].byteLength;
            }
            return result;
          };
          MP42.hdlr = function hdlr(type) {
            return MP42.box(MP42.types.hdlr, MP42.HDLR_TYPES[type]);
          };
          MP42.mdat = function mdat(data) {
            return MP42.box(MP42.types.mdat, data);
          };
          MP42.mdhd = function mdhd(timescale, duration) {
            duration *= timescale;
            var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
            var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
            return MP42.box(MP42.types.mdhd, new Uint8Array([
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              timescale >> 24 & 255,
              timescale >> 16 & 255,
              timescale >> 8 & 255,
              timescale & 255,
              upperWordDuration >> 24,
              upperWordDuration >> 16 & 255,
              upperWordDuration >> 8 & 255,
              upperWordDuration & 255,
              lowerWordDuration >> 24,
              lowerWordDuration >> 16 & 255,
              lowerWordDuration >> 8 & 255,
              lowerWordDuration & 255,
              85,
              196,
              0,
              0
            ]));
          };
          MP42.mdia = function mdia(track) {
            return MP42.box(MP42.types.mdia, MP42.mdhd(track.timescale, track.duration), MP42.hdlr(track.type), MP42.minf(track));
          };
          MP42.mfhd = function mfhd(sequenceNumber) {
            return MP42.box(MP42.types.mfhd, new Uint8Array([
              0,
              0,
              0,
              0,
              sequenceNumber >> 24,
              sequenceNumber >> 16 & 255,
              sequenceNumber >> 8 & 255,
              sequenceNumber & 255
            ]));
          };
          MP42.minf = function minf(track) {
            if (track.type === "audio") {
              return MP42.box(MP42.types.minf, MP42.box(MP42.types.smhd, MP42.SMHD), MP42.DINF, MP42.stbl(track));
            } else {
              return MP42.box(MP42.types.minf, MP42.box(MP42.types.vmhd, MP42.VMHD), MP42.DINF, MP42.stbl(track));
            }
          };
          MP42.moof = function moof(sn, baseMediaDecodeTime, track) {
            return MP42.box(MP42.types.moof, MP42.mfhd(sn), MP42.traf(track, baseMediaDecodeTime));
          };
          MP42.moov = function moov(tracks) {
            var i = tracks.length;
            var boxes = [];
            while (i--) {
              boxes[i] = MP42.trak(tracks[i]);
            }
            return MP42.box.apply(null, [MP42.types.moov, MP42.mvhd(tracks[0].timescale, tracks[0].duration)].concat(boxes).concat(MP42.mvex(tracks)));
          };
          MP42.mvex = function mvex(tracks) {
            var i = tracks.length;
            var boxes = [];
            while (i--) {
              boxes[i] = MP42.trex(tracks[i]);
            }
            return MP42.box.apply(null, [MP42.types.mvex].concat(boxes));
          };
          MP42.mvhd = function mvhd(timescale, duration) {
            duration *= timescale;
            var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
            var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
            var bytes = new Uint8Array([
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              timescale >> 24 & 255,
              timescale >> 16 & 255,
              timescale >> 8 & 255,
              timescale & 255,
              upperWordDuration >> 24,
              upperWordDuration >> 16 & 255,
              upperWordDuration >> 8 & 255,
              upperWordDuration & 255,
              lowerWordDuration >> 24,
              lowerWordDuration >> 16 & 255,
              lowerWordDuration >> 8 & 255,
              lowerWordDuration & 255,
              0,
              1,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              255,
              255,
              255,
              255
            ]);
            return MP42.box(MP42.types.mvhd, bytes);
          };
          MP42.sdtp = function sdtp(track) {
            var samples = track.samples || [];
            var bytes = new Uint8Array(4 + samples.length);
            var i;
            var flags;
            for (i = 0; i < samples.length; i++) {
              flags = samples[i].flags;
              bytes[i + 4] = flags.dependsOn << 4 | flags.isDependedOn << 2 | flags.hasRedundancy;
            }
            return MP42.box(MP42.types.sdtp, bytes);
          };
          MP42.stbl = function stbl(track) {
            return MP42.box(MP42.types.stbl, MP42.stsd(track), MP42.box(MP42.types.stts, MP42.STTS), MP42.box(MP42.types.stsc, MP42.STSC), MP42.box(MP42.types.stsz, MP42.STSZ), MP42.box(MP42.types.stco, MP42.STCO));
          };
          MP42.avc1 = function avc1(track) {
            var sps = [];
            var pps = [];
            var i;
            var data;
            var len;
            for (i = 0; i < track.sps.length; i++) {
              data = track.sps[i];
              len = data.byteLength;
              sps.push(len >>> 8 & 255);
              sps.push(len & 255);
              sps = sps.concat(Array.prototype.slice.call(data));
            }
            for (i = 0; i < track.pps.length; i++) {
              data = track.pps[i];
              len = data.byteLength;
              pps.push(len >>> 8 & 255);
              pps.push(len & 255);
              pps = pps.concat(Array.prototype.slice.call(data));
            }
            var avcc = MP42.box(MP42.types.avcC, new Uint8Array([
              1,
              sps[3],
              sps[4],
              sps[5],
              252 | 3,
              224 | track.sps.length
            ].concat(sps).concat([
              track.pps.length
            ]).concat(pps)));
            var width = track.width;
            var height = track.height;
            var hSpacing = track.pixelRatio[0];
            var vSpacing = track.pixelRatio[1];
            return MP42.box(MP42.types.avc1, new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              width >> 8 & 255,
              width & 255,
              height >> 8 & 255,
              height & 255,
              0,
              72,
              0,
              0,
              0,
              72,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              18,
              100,
              97,
              105,
              108,
              121,
              109,
              111,
              116,
              105,
              111,
              110,
              47,
              104,
              108,
              115,
              46,
              106,
              115,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              24,
              17,
              17
            ]), avcc, MP42.box(MP42.types.btrt, new Uint8Array([
              0,
              28,
              156,
              128,
              0,
              45,
              198,
              192,
              0,
              45,
              198,
              192
            ])), MP42.box(MP42.types.pasp, new Uint8Array([
              hSpacing >> 24,
              hSpacing >> 16 & 255,
              hSpacing >> 8 & 255,
              hSpacing & 255,
              vSpacing >> 24,
              vSpacing >> 16 & 255,
              vSpacing >> 8 & 255,
              vSpacing & 255
            ])));
          };
          MP42.esds = function esds(track) {
            var configlen = track.config.length;
            return new Uint8Array([
              0,
              0,
              0,
              0,
              3,
              23 + configlen,
              0,
              1,
              0,
              4,
              15 + configlen,
              64,
              21,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              5
            ].concat([configlen]).concat(track.config).concat([6, 1, 2]));
          };
          MP42.mp4a = function mp4a(track) {
            var samplerate = track.samplerate;
            return MP42.box(MP42.types.mp4a, new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              track.channelCount,
              0,
              16,
              0,
              0,
              0,
              0,
              samplerate >> 8 & 255,
              samplerate & 255,
              0,
              0
            ]), MP42.box(MP42.types.esds, MP42.esds(track)));
          };
          MP42.mp3 = function mp3(track) {
            var samplerate = track.samplerate;
            return MP42.box(MP42.types[".mp3"], new Uint8Array([
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              track.channelCount,
              0,
              16,
              0,
              0,
              0,
              0,
              samplerate >> 8 & 255,
              samplerate & 255,
              0,
              0
            ]));
          };
          MP42.stsd = function stsd(track) {
            if (track.type === "audio") {
              if (!track.isAAC && track.codec === "mp3") {
                return MP42.box(MP42.types.stsd, MP42.STSD, MP42.mp3(track));
              }
              return MP42.box(MP42.types.stsd, MP42.STSD, MP42.mp4a(track));
            } else {
              return MP42.box(MP42.types.stsd, MP42.STSD, MP42.avc1(track));
            }
          };
          MP42.tkhd = function tkhd(track) {
            var id = track.id;
            var duration = track.duration * track.timescale;
            var width = track.width;
            var height = track.height;
            var upperWordDuration = Math.floor(duration / (UINT32_MAX + 1));
            var lowerWordDuration = Math.floor(duration % (UINT32_MAX + 1));
            return MP42.box(MP42.types.tkhd, new Uint8Array([
              1,
              0,
              0,
              7,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              2,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              3,
              id >> 24 & 255,
              id >> 16 & 255,
              id >> 8 & 255,
              id & 255,
              0,
              0,
              0,
              0,
              upperWordDuration >> 24,
              upperWordDuration >> 16 & 255,
              upperWordDuration >> 8 & 255,
              upperWordDuration & 255,
              lowerWordDuration >> 24,
              lowerWordDuration >> 16 & 255,
              lowerWordDuration >> 8 & 255,
              lowerWordDuration & 255,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              64,
              0,
              0,
              0,
              width >> 8 & 255,
              width & 255,
              0,
              0,
              height >> 8 & 255,
              height & 255,
              0,
              0
            ]));
          };
          MP42.traf = function traf(track, baseMediaDecodeTime) {
            var sampleDependencyTable = MP42.sdtp(track);
            var id = track.id;
            var upperWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1));
            var lowerWordBaseMediaDecodeTime = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
            return MP42.box(MP42.types.traf, MP42.box(MP42.types.tfhd, new Uint8Array([
              0,
              0,
              0,
              0,
              id >> 24,
              id >> 16 & 255,
              id >> 8 & 255,
              id & 255
            ])), MP42.box(MP42.types.tfdt, new Uint8Array([
              1,
              0,
              0,
              0,
              upperWordBaseMediaDecodeTime >> 24,
              upperWordBaseMediaDecodeTime >> 16 & 255,
              upperWordBaseMediaDecodeTime >> 8 & 255,
              upperWordBaseMediaDecodeTime & 255,
              lowerWordBaseMediaDecodeTime >> 24,
              lowerWordBaseMediaDecodeTime >> 16 & 255,
              lowerWordBaseMediaDecodeTime >> 8 & 255,
              lowerWordBaseMediaDecodeTime & 255
            ])), MP42.trun(track, sampleDependencyTable.length + 16 + 20 + 8 + 16 + 8 + 8), sampleDependencyTable);
          };
          MP42.trak = function trak(track) {
            track.duration = track.duration || 4294967295;
            return MP42.box(MP42.types.trak, MP42.tkhd(track), MP42.mdia(track));
          };
          MP42.trex = function trex(track) {
            var id = track.id;
            return MP42.box(MP42.types.trex, new Uint8Array([
              0,
              0,
              0,
              0,
              id >> 24,
              id >> 16 & 255,
              id >> 8 & 255,
              id & 255,
              0,
              0,
              0,
              1,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              1,
              0,
              1
            ]));
          };
          MP42.trun = function trun(track, offset) {
            var samples = track.samples || [];
            var len = samples.length;
            var arraylen = 12 + 16 * len;
            var array = new Uint8Array(arraylen);
            var i;
            var sample;
            var duration;
            var size;
            var flags;
            var cts;
            offset += 8 + arraylen;
            array.set([
              0,
              0,
              15,
              1,
              len >>> 24 & 255,
              len >>> 16 & 255,
              len >>> 8 & 255,
              len & 255,
              offset >>> 24 & 255,
              offset >>> 16 & 255,
              offset >>> 8 & 255,
              offset & 255
            ], 0);
            for (i = 0; i < len; i++) {
              sample = samples[i];
              duration = sample.duration;
              size = sample.size;
              flags = sample.flags;
              cts = sample.cts;
              array.set([
                duration >>> 24 & 255,
                duration >>> 16 & 255,
                duration >>> 8 & 255,
                duration & 255,
                size >>> 24 & 255,
                size >>> 16 & 255,
                size >>> 8 & 255,
                size & 255,
                flags.isLeading << 2 | flags.dependsOn,
                flags.isDependedOn << 6 | flags.hasRedundancy << 4 | flags.paddingValue << 1 | flags.isNonSync,
                flags.degradPrio & 240 << 8,
                flags.degradPrio & 15,
                cts >>> 24 & 255,
                cts >>> 16 & 255,
                cts >>> 8 & 255,
                cts & 255
              ], 12 + 16 * i);
            }
            return MP42.box(MP42.types.trun, array);
          };
          MP42.initSegment = function initSegment(tracks) {
            if (!MP42.types) {
              MP42.init();
            }
            var movie = MP42.moov(tracks);
            var result = new Uint8Array(MP42.FTYP.byteLength + movie.byteLength);
            result.set(MP42.FTYP);
            result.set(movie, MP42.FTYP.byteLength);
            return result;
          };
          return MP42;
        }();
        MP4.types = void 0;
        MP4.HDLR_TYPES = void 0;
        MP4.STTS = void 0;
        MP4.STSC = void 0;
        MP4.STCO = void 0;
        MP4.STSZ = void 0;
        MP4.VMHD = void 0;
        MP4.SMHD = void 0;
        MP4.STSD = void 0;
        MP4.FTYP = void 0;
        MP4.DINF = void 0;
        __webpack_exports__["default"] = MP4;
      },
      "./src/remux/mp4-remuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return MP4Remuxer;
        });
        __webpack_require__.d(__webpack_exports__, "normalizePts", function() {
          return normalizePts;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _aac_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/remux/aac-helper.ts");
        var _mp4_generator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/remux/mp4-generator.ts");
        var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/events.ts");
        var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/errors.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utils/logger.ts");
        var _types_loader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./src/types/loader.ts");
        var _utils_timescale_conversion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./src/utils/timescale-conversion.ts");
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        var MAX_SILENT_FRAME_DURATION = 10 * 1e3;
        var AAC_SAMPLES_PER_FRAME = 1024;
        var MPEG_AUDIO_SAMPLE_PER_FRAME = 1152;
        var chromeVersion = null;
        var safariWebkitVersion = null;
        var requiresPositiveDts = false;
        var MP4Remuxer = /* @__PURE__ */ function() {
          function MP4Remuxer2(observer, config, typeSupported, vendor) {
            this.observer = void 0;
            this.config = void 0;
            this.typeSupported = void 0;
            this.ISGenerated = false;
            this._initPTS = void 0;
            this._initDTS = void 0;
            this.nextAvcDts = null;
            this.nextAudioPts = null;
            this.isAudioContiguous = false;
            this.isVideoContiguous = false;
            this.observer = observer;
            this.config = config;
            this.typeSupported = typeSupported;
            this.ISGenerated = false;
            if (chromeVersion === null) {
              var userAgent = navigator.userAgent || "";
              var result = userAgent.match(/Chrome\/(\d+)/i);
              chromeVersion = result ? parseInt(result[1]) : 0;
            }
            if (safariWebkitVersion === null) {
              var _result = navigator.userAgent.match(/Safari\/(\d+)/i);
              safariWebkitVersion = _result ? parseInt(_result[1]) : 0;
            }
            requiresPositiveDts = !!chromeVersion && chromeVersion < 75 || !!safariWebkitVersion && safariWebkitVersion < 600;
          }
          var _proto = MP4Remuxer2.prototype;
          _proto.destroy = function destroy() {
          };
          _proto.resetTimeStamp = function resetTimeStamp(defaultTimeStamp) {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].log("[mp4-remuxer]: initPTS & initDTS reset");
            this._initPTS = this._initDTS = defaultTimeStamp;
          };
          _proto.resetNextTimestamp = function resetNextTimestamp() {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].log("[mp4-remuxer]: reset next timestamp");
            this.isVideoContiguous = false;
            this.isAudioContiguous = false;
          };
          _proto.resetInitSegment = function resetInitSegment() {
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].log("[mp4-remuxer]: ISGenerated flag reset");
            this.ISGenerated = false;
          };
          _proto.getVideoStartPts = function getVideoStartPts(videoSamples) {
            var rolloverDetected = false;
            var startPTS = videoSamples.reduce(function(minPTS, sample) {
              var delta = sample.pts - minPTS;
              if (delta < -4294967296) {
                rolloverDetected = true;
                return normalizePts(minPTS, sample.pts);
              } else if (delta > 0) {
                return minPTS;
              } else {
                return sample.pts;
              }
            }, videoSamples[0].pts);
            if (rolloverDetected) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].debug("PTS rollover detected");
            }
            return startPTS;
          };
          _proto.remux = function remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset, accurateTimeOffset, flush, playlistType) {
            var video;
            var audio;
            var initSegment;
            var text;
            var id3;
            var independent;
            var audioTimeOffset = timeOffset;
            var videoTimeOffset = timeOffset;
            var hasAudio = audioTrack.pid > -1;
            var hasVideo = videoTrack.pid > -1;
            var length = videoTrack.samples.length;
            var enoughAudioSamples = audioTrack.samples.length > 0;
            var enoughVideoSamples = length > 1;
            var canRemuxAvc = (!hasAudio || enoughAudioSamples) && (!hasVideo || enoughVideoSamples) || this.ISGenerated || flush;
            if (canRemuxAvc) {
              if (!this.ISGenerated) {
                initSegment = this.generateIS(audioTrack, videoTrack, timeOffset);
              }
              var isVideoContiguous = this.isVideoContiguous;
              var firstKeyFrameIndex = -1;
              if (enoughVideoSamples) {
                firstKeyFrameIndex = findKeyframeIndex(videoTrack.samples);
                if (!isVideoContiguous && this.config.forceKeyFrameOnDiscontinuity) {
                  independent = true;
                  if (firstKeyFrameIndex > 0) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("[mp4-remuxer]: Dropped " + firstKeyFrameIndex + " out of " + length + " video samples due to a missing keyframe");
                    var startPTS = this.getVideoStartPts(videoTrack.samples);
                    videoTrack.samples = videoTrack.samples.slice(firstKeyFrameIndex);
                    videoTrack.dropped += firstKeyFrameIndex;
                    videoTimeOffset += (videoTrack.samples[0].pts - startPTS) / (videoTrack.timescale || 9e4);
                  } else if (firstKeyFrameIndex === -1) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("[mp4-remuxer]: No keyframe found out of " + length + " video samples");
                    independent = false;
                  }
                }
              }
              if (this.ISGenerated) {
                if (enoughAudioSamples && enoughVideoSamples) {
                  var _startPTS = this.getVideoStartPts(videoTrack.samples);
                  var tsDelta = normalizePts(audioTrack.samples[0].pts, _startPTS) - _startPTS;
                  var audiovideoTimestampDelta = tsDelta / videoTrack.inputTimeScale;
                  audioTimeOffset += Math.max(0, audiovideoTimestampDelta);
                  videoTimeOffset += Math.max(0, -audiovideoTimestampDelta);
                }
                if (enoughAudioSamples) {
                  if (!audioTrack.samplerate) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("[mp4-remuxer]: regenerate InitSegment as audio detected");
                    initSegment = this.generateIS(audioTrack, videoTrack, timeOffset);
                  }
                  audio = this.remuxAudio(audioTrack, audioTimeOffset, this.isAudioContiguous, accurateTimeOffset, hasVideo || enoughVideoSamples || playlistType === _types_loader__WEBPACK_IMPORTED_MODULE_6__["PlaylistLevelType"].AUDIO ? videoTimeOffset : void 0);
                  if (enoughVideoSamples) {
                    var audioTrackLength = audio ? audio.endPTS - audio.startPTS : 0;
                    if (!videoTrack.inputTimeScale) {
                      _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("[mp4-remuxer]: regenerate InitSegment as video detected");
                      initSegment = this.generateIS(audioTrack, videoTrack, timeOffset);
                    }
                    video = this.remuxVideo(videoTrack, videoTimeOffset, isVideoContiguous, audioTrackLength);
                  }
                } else if (enoughVideoSamples) {
                  video = this.remuxVideo(videoTrack, videoTimeOffset, isVideoContiguous, 0);
                }
                if (video) {
                  video.firstKeyFrame = firstKeyFrameIndex;
                  video.independent = firstKeyFrameIndex !== -1;
                }
              }
            }
            if (this.ISGenerated) {
              if (id3Track.samples.length) {
                id3 = this.remuxID3(id3Track, timeOffset);
              }
              if (textTrack.samples.length) {
                text = this.remuxText(textTrack, timeOffset);
              }
            }
            return {
              audio,
              video,
              initSegment,
              independent,
              text,
              id3
            };
          };
          _proto.generateIS = function generateIS(audioTrack, videoTrack, timeOffset) {
            var audioSamples = audioTrack.samples;
            var videoSamples = videoTrack.samples;
            var typeSupported = this.typeSupported;
            var tracks = {};
            var computePTSDTS = !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(this._initPTS);
            var container = "audio/mp4";
            var initPTS;
            var initDTS;
            var timescale;
            if (computePTSDTS) {
              initPTS = initDTS = Infinity;
            }
            if (audioTrack.config && audioSamples.length) {
              audioTrack.timescale = audioTrack.samplerate;
              if (!audioTrack.isAAC) {
                if (typeSupported.mpeg) {
                  container = "audio/mpeg";
                  audioTrack.codec = "";
                } else if (typeSupported.mp3) {
                  audioTrack.codec = "mp3";
                }
              }
              tracks.audio = {
                id: "audio",
                container,
                codec: audioTrack.codec,
                initSegment: !audioTrack.isAAC && typeSupported.mpeg ? new Uint8Array(0) : _mp4_generator__WEBPACK_IMPORTED_MODULE_2__["default"].initSegment([audioTrack]),
                metadata: {
                  channelCount: audioTrack.channelCount
                }
              };
              if (computePTSDTS) {
                timescale = audioTrack.inputTimeScale;
                initPTS = initDTS = audioSamples[0].pts - Math.round(timescale * timeOffset);
              }
            }
            if (videoTrack.sps && videoTrack.pps && videoSamples.length) {
              videoTrack.timescale = videoTrack.inputTimeScale;
              tracks.video = {
                id: "main",
                container: "video/mp4",
                codec: videoTrack.codec,
                initSegment: _mp4_generator__WEBPACK_IMPORTED_MODULE_2__["default"].initSegment([videoTrack]),
                metadata: {
                  width: videoTrack.width,
                  height: videoTrack.height
                }
              };
              if (computePTSDTS) {
                timescale = videoTrack.inputTimeScale;
                var startPTS = this.getVideoStartPts(videoSamples);
                var startOffset = Math.round(timescale * timeOffset);
                initDTS = Math.min(initDTS, normalizePts(videoSamples[0].dts, startPTS) - startOffset);
                initPTS = Math.min(initPTS, startPTS - startOffset);
              }
            }
            if (Object.keys(tracks).length) {
              this.ISGenerated = true;
              if (computePTSDTS) {
                this._initPTS = initPTS;
                this._initDTS = initDTS;
              }
              return {
                tracks,
                initPTS,
                timescale
              };
            }
          };
          _proto.remuxVideo = function remuxVideo(track, timeOffset, contiguous, audioTrackLength) {
            var timeScale = track.inputTimeScale;
            var inputSamples = track.samples;
            var outputSamples = [];
            var nbSamples = inputSamples.length;
            var initPTS = this._initPTS;
            var nextAvcDts = this.nextAvcDts;
            var offset = 8;
            var mp4SampleDuration;
            var firstDTS;
            var lastDTS;
            var minPTS = Number.POSITIVE_INFINITY;
            var maxPTS = Number.NEGATIVE_INFINITY;
            var ptsDtsShift = 0;
            var sortSamples = false;
            if (!contiguous || nextAvcDts === null) {
              var pts = timeOffset * timeScale;
              var cts = inputSamples[0].pts - normalizePts(inputSamples[0].dts, inputSamples[0].pts);
              nextAvcDts = pts - cts;
            }
            for (var i = 0; i < nbSamples; i++) {
              var sample = inputSamples[i];
              sample.pts = normalizePts(sample.pts - initPTS, nextAvcDts);
              sample.dts = normalizePts(sample.dts - initPTS, nextAvcDts);
              if (sample.dts > sample.pts) {
                var PTS_DTS_SHIFT_TOLERANCE_90KHZ = 9e4 * 0.2;
                ptsDtsShift = Math.max(Math.min(ptsDtsShift, sample.pts - sample.dts), -1 * PTS_DTS_SHIFT_TOLERANCE_90KHZ);
              }
              if (sample.dts < inputSamples[i > 0 ? i - 1 : i].dts) {
                sortSamples = true;
              }
            }
            if (sortSamples) {
              inputSamples.sort(function(a, b) {
                var deltadts = a.dts - b.dts;
                var deltapts = a.pts - b.pts;
                return deltadts || deltapts;
              });
            }
            firstDTS = inputSamples[0].dts;
            lastDTS = inputSamples[inputSamples.length - 1].dts;
            var averageSampleDuration = Math.round((lastDTS - firstDTS) / (nbSamples - 1));
            if (ptsDtsShift < 0) {
              if (ptsDtsShift < averageSampleDuration * -2) {
                _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(_utils_timescale_conversion__WEBPACK_IMPORTED_MODULE_7__["toMsFromMpegTsClock"])(-averageSampleDuration, true) + " ms");
                var lastDts = ptsDtsShift;
                for (var _i = 0; _i < nbSamples; _i++) {
                  inputSamples[_i].dts = lastDts = Math.max(lastDts, inputSamples[_i].pts - averageSampleDuration);
                  inputSamples[_i].pts = Math.max(lastDts, inputSamples[_i].pts);
                }
              } else {
                _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("PTS < DTS detected in video samples, shifting DTS by " + Object(_utils_timescale_conversion__WEBPACK_IMPORTED_MODULE_7__["toMsFromMpegTsClock"])(ptsDtsShift, true) + " ms to overcome this issue");
                for (var _i2 = 0; _i2 < nbSamples; _i2++) {
                  inputSamples[_i2].dts = inputSamples[_i2].dts + ptsDtsShift;
                }
              }
              firstDTS = inputSamples[0].dts;
            }
            if (contiguous) {
              var delta = firstDTS - nextAvcDts;
              var foundHole = delta > averageSampleDuration;
              var foundOverlap = delta < -1;
              if (foundHole || foundOverlap) {
                if (foundHole) {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("AVC: " + Object(_utils_timescale_conversion__WEBPACK_IMPORTED_MODULE_7__["toMsFromMpegTsClock"])(delta, true) + " ms (" + delta + "dts) hole between fragments detected, filling it");
                } else {
                  _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("AVC: " + Object(_utils_timescale_conversion__WEBPACK_IMPORTED_MODULE_7__["toMsFromMpegTsClock"])(-delta, true) + " ms (" + delta + "dts) overlapping between fragments detected");
                }
                firstDTS = nextAvcDts;
                var firstPTS = inputSamples[0].pts - delta;
                inputSamples[0].dts = firstDTS;
                inputSamples[0].pts = firstPTS;
                _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].log("Video: First PTS/DTS adjusted: " + Object(_utils_timescale_conversion__WEBPACK_IMPORTED_MODULE_7__["toMsFromMpegTsClock"])(firstPTS, true) + "/" + Object(_utils_timescale_conversion__WEBPACK_IMPORTED_MODULE_7__["toMsFromMpegTsClock"])(firstDTS, true) + ", delta: " + Object(_utils_timescale_conversion__WEBPACK_IMPORTED_MODULE_7__["toMsFromMpegTsClock"])(delta, true) + " ms");
              }
            }
            if (requiresPositiveDts) {
              firstDTS = Math.max(0, firstDTS);
            }
            var nbNalu = 0;
            var naluLen = 0;
            for (var _i3 = 0; _i3 < nbSamples; _i3++) {
              var _sample = inputSamples[_i3];
              var units = _sample.units;
              var nbUnits = units.length;
              var sampleLen = 0;
              for (var j = 0; j < nbUnits; j++) {
                sampleLen += units[j].data.length;
              }
              naluLen += sampleLen;
              nbNalu += nbUnits;
              _sample.length = sampleLen;
              _sample.dts = Math.max(_sample.dts, firstDTS);
              _sample.pts = Math.max(_sample.pts, _sample.dts, 0);
              minPTS = Math.min(_sample.pts, minPTS);
              maxPTS = Math.max(_sample.pts, maxPTS);
            }
            lastDTS = inputSamples[nbSamples - 1].dts;
            var mdatSize = naluLen + 4 * nbNalu + 8;
            var mdat;
            try {
              mdat = new Uint8Array(mdatSize);
            } catch (err) {
              this.observer.emit(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].ERROR, _events__WEBPACK_IMPORTED_MODULE_3__["Events"].ERROR, {
                type: _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"].MUX_ERROR,
                details: _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorDetails"].REMUX_ALLOC_ERROR,
                fatal: false,
                bytes: mdatSize,
                reason: "fail allocating video mdat " + mdatSize
              });
              return;
            }
            var view = new DataView(mdat.buffer);
            view.setUint32(0, mdatSize);
            mdat.set(_mp4_generator__WEBPACK_IMPORTED_MODULE_2__["default"].types.mdat, 4);
            for (var _i4 = 0; _i4 < nbSamples; _i4++) {
              var avcSample = inputSamples[_i4];
              var avcSampleUnits = avcSample.units;
              var mp4SampleLength = 0;
              for (var _j = 0, _nbUnits = avcSampleUnits.length; _j < _nbUnits; _j++) {
                var unit = avcSampleUnits[_j];
                var unitData = unit.data;
                var unitDataLen = unit.data.byteLength;
                view.setUint32(offset, unitDataLen);
                offset += 4;
                mdat.set(unitData, offset);
                offset += unitDataLen;
                mp4SampleLength += 4 + unitDataLen;
              }
              if (_i4 < nbSamples - 1) {
                mp4SampleDuration = inputSamples[_i4 + 1].dts - avcSample.dts;
              } else {
                var config = this.config;
                var lastFrameDuration = avcSample.dts - inputSamples[_i4 > 0 ? _i4 - 1 : _i4].dts;
                if (config.stretchShortVideoTrack && this.nextAudioPts !== null) {
                  var gapTolerance = Math.floor(config.maxBufferHole * timeScale);
                  var deltaToFrameEnd = (audioTrackLength ? minPTS + audioTrackLength * timeScale : this.nextAudioPts) - avcSample.pts;
                  if (deltaToFrameEnd > gapTolerance) {
                    mp4SampleDuration = deltaToFrameEnd - lastFrameDuration;
                    if (mp4SampleDuration < 0) {
                      mp4SampleDuration = lastFrameDuration;
                    }
                    _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].log("[mp4-remuxer]: It is approximately " + deltaToFrameEnd / 90 + " ms to the next segment; using duration " + mp4SampleDuration / 90 + " ms for the last video frame.");
                  } else {
                    mp4SampleDuration = lastFrameDuration;
                  }
                } else {
                  mp4SampleDuration = lastFrameDuration;
                }
              }
              var compositionTimeOffset = Math.round(avcSample.pts - avcSample.dts);
              outputSamples.push(new Mp4Sample(avcSample.key, mp4SampleDuration, mp4SampleLength, compositionTimeOffset));
            }
            if (outputSamples.length && chromeVersion && chromeVersion < 70) {
              var flags = outputSamples[0].flags;
              flags.dependsOn = 2;
              flags.isNonSync = 0;
            }
            console.assert(mp4SampleDuration !== void 0, "mp4SampleDuration must be computed");
            this.nextAvcDts = nextAvcDts = lastDTS + mp4SampleDuration;
            this.isVideoContiguous = true;
            var moof = _mp4_generator__WEBPACK_IMPORTED_MODULE_2__["default"].moof(track.sequenceNumber++, firstDTS, _extends({}, track, {
              samples: outputSamples
            }));
            var type = "video";
            var data = {
              data1: moof,
              data2: mdat,
              startPTS: minPTS / timeScale,
              endPTS: (maxPTS + mp4SampleDuration) / timeScale,
              startDTS: firstDTS / timeScale,
              endDTS: nextAvcDts / timeScale,
              type,
              hasAudio: false,
              hasVideo: true,
              nb: outputSamples.length,
              dropped: track.dropped
            };
            track.samples = [];
            track.dropped = 0;
            console.assert(mdat.length, "MDAT length must not be zero");
            return data;
          };
          _proto.remuxAudio = function remuxAudio(track, timeOffset, contiguous, accurateTimeOffset, videoTimeOffset) {
            var inputTimeScale = track.inputTimeScale;
            var mp4timeScale = track.samplerate ? track.samplerate : inputTimeScale;
            var scaleFactor = inputTimeScale / mp4timeScale;
            var mp4SampleDuration = track.isAAC ? AAC_SAMPLES_PER_FRAME : MPEG_AUDIO_SAMPLE_PER_FRAME;
            var inputSampleDuration = mp4SampleDuration * scaleFactor;
            var initPTS = this._initPTS;
            var rawMPEG = !track.isAAC && this.typeSupported.mpeg;
            var outputSamples = [];
            var inputSamples = track.samples;
            var offset = rawMPEG ? 0 : 8;
            var nextAudioPts = this.nextAudioPts || -1;
            var timeOffsetMpegTS = timeOffset * inputTimeScale;
            this.isAudioContiguous = contiguous = contiguous || inputSamples.length && nextAudioPts > 0 && (accurateTimeOffset && Math.abs(timeOffsetMpegTS - nextAudioPts) < 9e3 || Math.abs(normalizePts(inputSamples[0].pts - initPTS, timeOffsetMpegTS) - nextAudioPts) < 20 * inputSampleDuration);
            inputSamples.forEach(function(sample2) {
              sample2.pts = normalizePts(sample2.pts - initPTS, timeOffsetMpegTS);
            });
            if (!contiguous || nextAudioPts < 0) {
              inputSamples = inputSamples.filter(function(sample2) {
                return sample2.pts >= 0;
              });
              if (!inputSamples.length) {
                return;
              }
              if (videoTimeOffset === 0) {
                nextAudioPts = 0;
              } else if (accurateTimeOffset) {
                nextAudioPts = Math.max(0, timeOffsetMpegTS);
              } else {
                nextAudioPts = inputSamples[0].pts;
              }
            }
            if (track.isAAC) {
              var alignedWithVideo = videoTimeOffset !== void 0;
              var maxAudioFramesDrift = this.config.maxAudioFramesDrift;
              for (var i = 0, nextPts = nextAudioPts; i < inputSamples.length; i++) {
                var sample = inputSamples[i];
                var pts = sample.pts;
                var delta = pts - nextPts;
                var duration = Math.abs(1e3 * delta / inputTimeScale);
                if (delta <= -maxAudioFramesDrift * inputSampleDuration && alignedWithVideo) {
                  if (i === 0) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("Audio frame @ " + (pts / inputTimeScale).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * delta / inputTimeScale) + " ms.");
                    this.nextAudioPts = nextAudioPts = nextPts = pts;
                  }
                } else if (delta >= maxAudioFramesDrift * inputSampleDuration && duration < MAX_SILENT_FRAME_DURATION && alignedWithVideo) {
                  var missing = Math.round(delta / inputSampleDuration);
                  nextPts = pts - missing * inputSampleDuration;
                  if (nextPts < 0) {
                    missing--;
                    nextPts += inputSampleDuration;
                  }
                  if (i === 0) {
                    this.nextAudioPts = nextAudioPts = nextPts;
                  }
                  _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("[mp4-remuxer]: Injecting " + missing + " audio frame @ " + (nextPts / inputTimeScale).toFixed(3) + "s due to " + Math.round(1e3 * delta / inputTimeScale) + " ms gap.");
                  for (var j = 0; j < missing; j++) {
                    var newStamp = Math.max(nextPts, 0);
                    var fillFrame = _aac_helper__WEBPACK_IMPORTED_MODULE_1__["default"].getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
                    if (!fillFrame) {
                      _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead.");
                      fillFrame = sample.unit.subarray();
                    }
                    inputSamples.splice(i, 0, {
                      unit: fillFrame,
                      pts: newStamp
                    });
                    nextPts += inputSampleDuration;
                    i++;
                  }
                }
                sample.pts = nextPts;
                nextPts += inputSampleDuration;
              }
            }
            var firstPTS = null;
            var lastPTS = null;
            var mdat;
            var mdatSize = 0;
            var sampleLength = inputSamples.length;
            while (sampleLength--) {
              mdatSize += inputSamples[sampleLength].unit.byteLength;
            }
            for (var _j2 = 0, _nbSamples = inputSamples.length; _j2 < _nbSamples; _j2++) {
              var audioSample = inputSamples[_j2];
              var unit = audioSample.unit;
              var _pts = audioSample.pts;
              if (lastPTS !== null) {
                var prevSample = outputSamples[_j2 - 1];
                prevSample.duration = Math.round((_pts - lastPTS) / scaleFactor);
              } else {
                if (contiguous && track.isAAC) {
                  _pts = nextAudioPts;
                }
                firstPTS = _pts;
                if (mdatSize > 0) {
                  mdatSize += offset;
                  try {
                    mdat = new Uint8Array(mdatSize);
                  } catch (err) {
                    this.observer.emit(_events__WEBPACK_IMPORTED_MODULE_3__["Events"].ERROR, _events__WEBPACK_IMPORTED_MODULE_3__["Events"].ERROR, {
                      type: _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorTypes"].MUX_ERROR,
                      details: _errors__WEBPACK_IMPORTED_MODULE_4__["ErrorDetails"].REMUX_ALLOC_ERROR,
                      fatal: false,
                      bytes: mdatSize,
                      reason: "fail allocating audio mdat " + mdatSize
                    });
                    return;
                  }
                  if (!rawMPEG) {
                    var view = new DataView(mdat.buffer);
                    view.setUint32(0, mdatSize);
                    mdat.set(_mp4_generator__WEBPACK_IMPORTED_MODULE_2__["default"].types.mdat, 4);
                  }
                } else {
                  return;
                }
              }
              mdat.set(unit, offset);
              var unitLen = unit.byteLength;
              offset += unitLen;
              outputSamples.push(new Mp4Sample(true, mp4SampleDuration, unitLen, 0));
              lastPTS = _pts;
            }
            var nbSamples = outputSamples.length;
            if (!nbSamples) {
              return;
            }
            var lastSample = outputSamples[outputSamples.length - 1];
            this.nextAudioPts = nextAudioPts = lastPTS + scaleFactor * lastSample.duration;
            var moof = rawMPEG ? new Uint8Array(0) : _mp4_generator__WEBPACK_IMPORTED_MODULE_2__["default"].moof(track.sequenceNumber++, firstPTS / scaleFactor, _extends({}, track, {
              samples: outputSamples
            }));
            track.samples = [];
            var start = firstPTS / inputTimeScale;
            var end = nextAudioPts / inputTimeScale;
            var type = "audio";
            var audioData = {
              data1: moof,
              data2: mdat,
              startPTS: start,
              endPTS: end,
              startDTS: start,
              endDTS: end,
              type,
              hasAudio: true,
              hasVideo: false,
              nb: nbSamples
            };
            this.isAudioContiguous = true;
            console.assert(mdat.length, "MDAT length must not be zero");
            return audioData;
          };
          _proto.remuxEmptyAudio = function remuxEmptyAudio(track, timeOffset, contiguous, videoData) {
            var inputTimeScale = track.inputTimeScale;
            var mp4timeScale = track.samplerate ? track.samplerate : inputTimeScale;
            var scaleFactor = inputTimeScale / mp4timeScale;
            var nextAudioPts = this.nextAudioPts;
            var startDTS = (nextAudioPts !== null ? nextAudioPts : videoData.startDTS * inputTimeScale) + this._initDTS;
            var endDTS = videoData.endDTS * inputTimeScale + this._initDTS;
            var frameDuration = scaleFactor * AAC_SAMPLES_PER_FRAME;
            var nbSamples = Math.ceil((endDTS - startDTS) / frameDuration);
            var silentFrame = _aac_helper__WEBPACK_IMPORTED_MODULE_1__["default"].getSilentFrame(track.manifestCodec || track.codec, track.channelCount);
            _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].warn("[mp4-remuxer]: remux empty Audio");
            if (!silentFrame) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_5__["logger"].trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec");
              return;
            }
            var samples = [];
            for (var i = 0; i < nbSamples; i++) {
              var stamp = startDTS + i * frameDuration;
              samples.push({
                unit: silentFrame,
                pts: stamp,
                dts: stamp
              });
            }
            track.samples = samples;
            return this.remuxAudio(track, timeOffset, contiguous, false);
          };
          _proto.remuxID3 = function remuxID3(track, timeOffset) {
            var length = track.samples.length;
            if (!length) {
              return;
            }
            var inputTimeScale = track.inputTimeScale;
            var initPTS = this._initPTS;
            var initDTS = this._initDTS;
            for (var index = 0; index < length; index++) {
              var sample = track.samples[index];
              sample.pts = normalizePts(sample.pts - initPTS, timeOffset * inputTimeScale) / inputTimeScale;
              sample.dts = normalizePts(sample.dts - initDTS, timeOffset * inputTimeScale) / inputTimeScale;
            }
            var samples = track.samples;
            track.samples = [];
            return {
              samples
            };
          };
          _proto.remuxText = function remuxText(track, timeOffset) {
            var length = track.samples.length;
            if (!length) {
              return;
            }
            var inputTimeScale = track.inputTimeScale;
            var initPTS = this._initPTS;
            for (var index = 0; index < length; index++) {
              var sample = track.samples[index];
              sample.pts = normalizePts(sample.pts - initPTS, timeOffset * inputTimeScale) / inputTimeScale;
            }
            track.samples.sort(function(a, b) {
              return a.pts - b.pts;
            });
            var samples = track.samples;
            track.samples = [];
            return {
              samples
            };
          };
          return MP4Remuxer2;
        }();
        function normalizePts(value, reference) {
          var offset;
          if (reference === null) {
            return value;
          }
          if (reference < value) {
            offset = -8589934592;
          } else {
            offset = 8589934592;
          }
          while (Math.abs(value - reference) > 4294967296) {
            value += offset;
          }
          return value;
        }
        function findKeyframeIndex(samples) {
          for (var i = 0; i < samples.length; i++) {
            if (samples[i].key) {
              return i;
            }
          }
          return -1;
        }
        var Mp4Sample = function Mp4Sample2(isKeyframe, duration, size, cts) {
          this.size = void 0;
          this.duration = void 0;
          this.cts = void 0;
          this.flags = void 0;
          this.duration = duration;
          this.size = size;
          this.cts = cts;
          this.flags = new Mp4SampleFlags(isKeyframe);
        };
        var Mp4SampleFlags = function Mp4SampleFlags2(isKeyframe) {
          this.isLeading = 0;
          this.isDependedOn = 0;
          this.hasRedundancy = 0;
          this.degradPrio = 0;
          this.dependsOn = 1;
          this.isNonSync = 1;
          this.dependsOn = isKeyframe ? 2 : 1;
          this.isNonSync = isKeyframe ? 0 : 1;
        };
      },
      "./src/remux/passthrough-remuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _utils_mp4_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _loader_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/loader/fragment.ts");
        var _utils_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/logger.ts");
        var PassThroughRemuxer = /* @__PURE__ */ function() {
          function PassThroughRemuxer2() {
            this.emitInitSegment = false;
            this.audioCodec = void 0;
            this.videoCodec = void 0;
            this.initData = void 0;
            this.initPTS = void 0;
            this.initTracks = void 0;
            this.lastEndDTS = null;
          }
          var _proto = PassThroughRemuxer2.prototype;
          _proto.destroy = function destroy() {
          };
          _proto.resetTimeStamp = function resetTimeStamp(defaultInitPTS) {
            this.initPTS = defaultInitPTS;
            this.lastEndDTS = null;
          };
          _proto.resetNextTimestamp = function resetNextTimestamp() {
            this.lastEndDTS = null;
          };
          _proto.resetInitSegment = function resetInitSegment(initSegment, audioCodec, videoCodec) {
            this.audioCodec = audioCodec;
            this.videoCodec = videoCodec;
            this.generateInitSegment(initSegment);
            this.emitInitSegment = true;
          };
          _proto.generateInitSegment = function generateInitSegment(initSegment) {
            var audioCodec = this.audioCodec, videoCodec = this.videoCodec;
            if (!initSegment || !initSegment.byteLength) {
              this.initTracks = void 0;
              this.initData = void 0;
              return;
            }
            var initData = this.initData = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_1__["parseInitSegment"])(initSegment);
            if (!audioCodec) {
              audioCodec = getParsedTrackCodec(initData.audio, _loader_fragment__WEBPACK_IMPORTED_MODULE_2__["ElementaryStreamTypes"].AUDIO);
            }
            if (!videoCodec) {
              videoCodec = getParsedTrackCodec(initData.video, _loader_fragment__WEBPACK_IMPORTED_MODULE_2__["ElementaryStreamTypes"].VIDEO);
            }
            var tracks = {};
            if (initData.audio && initData.video) {
              tracks.audiovideo = {
                container: "video/mp4",
                codec: audioCodec + "," + videoCodec,
                initSegment,
                id: "main"
              };
            } else if (initData.audio) {
              tracks.audio = {
                container: "audio/mp4",
                codec: audioCodec,
                initSegment,
                id: "audio"
              };
            } else if (initData.video) {
              tracks.video = {
                container: "video/mp4",
                codec: videoCodec,
                initSegment,
                id: "main"
              };
            } else {
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes.");
            }
            this.initTracks = tracks;
          };
          _proto.remux = function remux(audioTrack, videoTrack, id3Track, textTrack, timeOffset) {
            var initPTS = this.initPTS, lastEndDTS = this.lastEndDTS;
            var result = {
              audio: void 0,
              video: void 0,
              text: textTrack,
              id3: id3Track,
              initSegment: void 0
            };
            if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(lastEndDTS)) {
              lastEndDTS = this.lastEndDTS = timeOffset || 0;
            }
            var data = videoTrack.samples;
            if (!data || !data.length) {
              return result;
            }
            var initSegment = {
              initPTS: void 0,
              timescale: 1
            };
            var initData = this.initData;
            if (!initData || !initData.length) {
              this.generateInitSegment(data);
              initData = this.initData;
            }
            if (!initData || !initData.length) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("[passthrough-remuxer.ts]: Failed to generate initSegment.");
              return result;
            }
            if (this.emitInitSegment) {
              initSegment.tracks = this.initTracks;
              this.emitInitSegment = false;
            }
            if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(initPTS)) {
              this.initPTS = initSegment.initPTS = initPTS = computeInitPTS(initData, data, lastEndDTS);
            }
            var duration = Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_1__["getDuration"])(data, initData);
            var startDTS = lastEndDTS;
            var endDTS = duration + startDTS;
            Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_1__["offsetStartDTS"])(initData, data, initPTS);
            if (duration > 0) {
              this.lastEndDTS = endDTS;
            } else {
              _utils_logger__WEBPACK_IMPORTED_MODULE_3__["logger"].warn("Duration parsed from mp4 should be greater than zero");
              this.resetNextTimestamp();
            }
            var hasAudio = !!initData.audio;
            var hasVideo = !!initData.video;
            var type = "";
            if (hasAudio) {
              type += "audio";
            }
            if (hasVideo) {
              type += "video";
            }
            var track = {
              data1: data,
              startPTS: startDTS,
              startDTS,
              endPTS: endDTS,
              endDTS,
              type,
              hasAudio,
              hasVideo,
              nb: 1,
              dropped: 0
            };
            result.audio = track.type === "audio" ? track : void 0;
            result.video = track.type !== "audio" ? track : void 0;
            result.text = textTrack;
            result.id3 = id3Track;
            result.initSegment = initSegment;
            return result;
          };
          return PassThroughRemuxer2;
        }();
        var computeInitPTS = function computeInitPTS2(initData, data, timeOffset) {
          return Object(_utils_mp4_tools__WEBPACK_IMPORTED_MODULE_1__["getStartDTS"])(initData, data) - timeOffset;
        };
        function getParsedTrackCodec(track, type) {
          var parsedCodec = track === null || track === void 0 ? void 0 : track.codec;
          if (parsedCodec && parsedCodec.length > 4) {
            return parsedCodec;
          }
          if (parsedCodec === "hvc1") {
            return "hvc1.1.c.L120.90";
          }
          if (parsedCodec === "av01") {
            return "av01.0.04M.08";
          }
          if (parsedCodec === "avc1" || type === _loader_fragment__WEBPACK_IMPORTED_MODULE_2__["ElementaryStreamTypes"].VIDEO) {
            return "avc1.42e01e";
          }
          return "mp4a.40.5";
        }
        __webpack_exports__["default"] = PassThroughRemuxer;
      },
      "./src/task-loop.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return TaskLoop;
        });
        var TaskLoop = /* @__PURE__ */ function() {
          function TaskLoop2() {
            this._boundTick = void 0;
            this._tickTimer = null;
            this._tickInterval = null;
            this._tickCallCount = 0;
            this._boundTick = this.tick.bind(this);
          }
          var _proto = TaskLoop2.prototype;
          _proto.destroy = function destroy() {
            this.onHandlerDestroying();
            this.onHandlerDestroyed();
          };
          _proto.onHandlerDestroying = function onHandlerDestroying() {
            this.clearNextTick();
            this.clearInterval();
          };
          _proto.onHandlerDestroyed = function onHandlerDestroyed() {
          };
          _proto.hasInterval = function hasInterval() {
            return !!this._tickInterval;
          };
          _proto.hasNextTick = function hasNextTick() {
            return !!this._tickTimer;
          };
          _proto.setInterval = function setInterval2(millis) {
            if (!this._tickInterval) {
              this._tickInterval = self.setInterval(this._boundTick, millis);
              return true;
            }
            return false;
          };
          _proto.clearInterval = function clearInterval2() {
            if (this._tickInterval) {
              self.clearInterval(this._tickInterval);
              this._tickInterval = null;
              return true;
            }
            return false;
          };
          _proto.clearNextTick = function clearNextTick() {
            if (this._tickTimer) {
              self.clearTimeout(this._tickTimer);
              this._tickTimer = null;
              return true;
            }
            return false;
          };
          _proto.tick = function tick() {
            this._tickCallCount++;
            if (this._tickCallCount === 1) {
              this.doTick();
              if (this._tickCallCount > 1) {
                this.tickImmediate();
              }
              this._tickCallCount = 0;
            }
          };
          _proto.tickImmediate = function tickImmediate() {
            this.clearNextTick();
            this._tickTimer = self.setTimeout(this._boundTick, 0);
          };
          _proto.doTick = function doTick() {
          };
          return TaskLoop2;
        }();
      },
      "./src/types/cmcd.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "CMCDVersion", function() {
          return CMCDVersion;
        });
        __webpack_require__.d(__webpack_exports__, "CMCDObjectType", function() {
          return CMCDObjectType;
        });
        __webpack_require__.d(__webpack_exports__, "CMCDStreamingFormat", function() {
          return CMCDStreamingFormat;
        });
        __webpack_require__.d(__webpack_exports__, "CMCDStreamType", function() {
          return CMCDStreamType;
        });
        var CMCDVersion = 1;
        var CMCDObjectType;
        (function(CMCDObjectType2) {
          CMCDObjectType2["MANIFEST"] = "m";
          CMCDObjectType2["AUDIO"] = "a";
          CMCDObjectType2["VIDEO"] = "v";
          CMCDObjectType2["MUXED"] = "av";
          CMCDObjectType2["INIT"] = "i";
          CMCDObjectType2["CAPTION"] = "c";
          CMCDObjectType2["TIMED_TEXT"] = "tt";
          CMCDObjectType2["KEY"] = "k";
          CMCDObjectType2["OTHER"] = "o";
        })(CMCDObjectType || (CMCDObjectType = {}));
        var CMCDStreamingFormat;
        (function(CMCDStreamingFormat2) {
          CMCDStreamingFormat2["DASH"] = "d";
          CMCDStreamingFormat2["HLS"] = "h";
          CMCDStreamingFormat2["SMOOTH"] = "s";
          CMCDStreamingFormat2["OTHER"] = "o";
        })(CMCDStreamingFormat || (CMCDStreamingFormat = {}));
        var CMCDStreamType;
        (function(CMCDStreamType2) {
          CMCDStreamType2["VOD"] = "v";
          CMCDStreamType2["LIVE"] = "l";
        })(CMCDStreamType || (CMCDStreamType = {}));
      },
      "./src/types/level.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "HlsSkip", function() {
          return HlsSkip;
        });
        __webpack_require__.d(__webpack_exports__, "getSkipValue", function() {
          return getSkipValue;
        });
        __webpack_require__.d(__webpack_exports__, "HlsUrlParameters", function() {
          return HlsUrlParameters;
        });
        __webpack_require__.d(__webpack_exports__, "Level", function() {
          return Level;
        });
        function _defineProperties(target, props) {
          for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor)
              descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
          }
        }
        function _createClass(Constructor, protoProps, staticProps) {
          if (protoProps)
            _defineProperties(Constructor.prototype, protoProps);
          if (staticProps)
            _defineProperties(Constructor, staticProps);
          return Constructor;
        }
        var HlsSkip;
        (function(HlsSkip2) {
          HlsSkip2["No"] = "";
          HlsSkip2["Yes"] = "YES";
          HlsSkip2["v2"] = "v2";
        })(HlsSkip || (HlsSkip = {}));
        function getSkipValue(details, msn) {
          var canSkipUntil = details.canSkipUntil, canSkipDateRanges = details.canSkipDateRanges, endSN = details.endSN;
          var snChangeGoal = msn !== void 0 ? msn - endSN : 0;
          if (canSkipUntil && snChangeGoal < canSkipUntil) {
            if (canSkipDateRanges) {
              return HlsSkip.v2;
            }
            return HlsSkip.Yes;
          }
          return HlsSkip.No;
        }
        var HlsUrlParameters = /* @__PURE__ */ function() {
          function HlsUrlParameters2(msn, part, skip) {
            this.msn = void 0;
            this.part = void 0;
            this.skip = void 0;
            this.msn = msn;
            this.part = part;
            this.skip = skip;
          }
          var _proto = HlsUrlParameters2.prototype;
          _proto.addDirectives = function addDirectives(uri) {
            var url = new self.URL(uri);
            if (this.msn !== void 0) {
              url.searchParams.set("_HLS_msn", this.msn.toString());
            }
            if (this.part !== void 0) {
              url.searchParams.set("_HLS_part", this.part.toString());
            }
            if (this.skip) {
              url.searchParams.set("_HLS_skip", this.skip);
            }
            return url.toString();
          };
          return HlsUrlParameters2;
        }();
        var Level = /* @__PURE__ */ function() {
          function Level2(data) {
            this.attrs = void 0;
            this.audioCodec = void 0;
            this.bitrate = void 0;
            this.codecSet = void 0;
            this.height = void 0;
            this.id = void 0;
            this.name = void 0;
            this.videoCodec = void 0;
            this.width = void 0;
            this.unknownCodecs = void 0;
            this.audioGroupIds = void 0;
            this.details = void 0;
            this.fragmentError = 0;
            this.loadError = 0;
            this.loaded = void 0;
            this.realBitrate = 0;
            this.textGroupIds = void 0;
            this.url = void 0;
            this._urlId = 0;
            this.url = [data.url];
            this.attrs = data.attrs;
            this.bitrate = data.bitrate;
            if (data.details) {
              this.details = data.details;
            }
            this.id = data.id || 0;
            this.name = data.name;
            this.width = data.width || 0;
            this.height = data.height || 0;
            this.audioCodec = data.audioCodec;
            this.videoCodec = data.videoCodec;
            this.unknownCodecs = data.unknownCodecs;
            this.codecSet = [data.videoCodec, data.audioCodec].filter(function(c) {
              return c;
            }).join(",").replace(/\.[^.,]+/g, "");
          }
          _createClass(Level2, [{
            key: "maxBitrate",
            get: function get() {
              return Math.max(this.realBitrate, this.bitrate);
            }
          }, {
            key: "uri",
            get: function get() {
              return this.url[this._urlId] || "";
            }
          }, {
            key: "urlId",
            get: function get() {
              return this._urlId;
            },
            set: function set(value) {
              var newValue = value % this.url.length;
              if (this._urlId !== newValue) {
                this.details = void 0;
                this._urlId = newValue;
              }
            }
          }]);
          return Level2;
        }();
      },
      "./src/types/loader.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "PlaylistContextType", function() {
          return PlaylistContextType;
        });
        __webpack_require__.d(__webpack_exports__, "PlaylistLevelType", function() {
          return PlaylistLevelType;
        });
        var PlaylistContextType;
        (function(PlaylistContextType2) {
          PlaylistContextType2["MANIFEST"] = "manifest";
          PlaylistContextType2["LEVEL"] = "level";
          PlaylistContextType2["AUDIO_TRACK"] = "audioTrack";
          PlaylistContextType2["SUBTITLE_TRACK"] = "subtitleTrack";
        })(PlaylistContextType || (PlaylistContextType = {}));
        var PlaylistLevelType;
        (function(PlaylistLevelType2) {
          PlaylistLevelType2["MAIN"] = "main";
          PlaylistLevelType2["AUDIO"] = "audio";
          PlaylistLevelType2["SUBTITLE"] = "subtitle";
        })(PlaylistLevelType || (PlaylistLevelType = {}));
      },
      "./src/types/transmuxer.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ChunkMetadata", function() {
          return ChunkMetadata;
        });
        var ChunkMetadata = function ChunkMetadata2(level, sn, id, size, part, partial) {
          if (size === void 0) {
            size = 0;
          }
          if (part === void 0) {
            part = -1;
          }
          if (partial === void 0) {
            partial = false;
          }
          this.level = void 0;
          this.sn = void 0;
          this.part = void 0;
          this.id = void 0;
          this.size = void 0;
          this.partial = void 0;
          this.transmuxing = getNewPerformanceTiming();
          this.buffering = {
            audio: getNewPerformanceTiming(),
            video: getNewPerformanceTiming(),
            audiovideo: getNewPerformanceTiming()
          };
          this.level = level;
          this.sn = sn;
          this.id = id;
          this.size = size;
          this.part = part;
          this.partial = partial;
        };
        function getNewPerformanceTiming() {
          return {
            start: 0,
            executeStart: 0,
            executeEnd: 0,
            end: 0
          };
        }
      },
      "./src/utils/attr-list.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "AttrList", function() {
          return AttrList;
        });
        var DECIMAL_RESOLUTION_REGEX = /^(\d+)x(\d+)$/;
        var ATTR_LIST_REGEX = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g;
        var AttrList = /* @__PURE__ */ function() {
          function AttrList2(attrs) {
            if (typeof attrs === "string") {
              attrs = AttrList2.parseAttrList(attrs);
            }
            for (var attr in attrs) {
              if (attrs.hasOwnProperty(attr)) {
                this[attr] = attrs[attr];
              }
            }
          }
          var _proto = AttrList2.prototype;
          _proto.decimalInteger = function decimalInteger(attrName) {
            var intValue = parseInt(this[attrName], 10);
            if (intValue > Number.MAX_SAFE_INTEGER) {
              return Infinity;
            }
            return intValue;
          };
          _proto.hexadecimalInteger = function hexadecimalInteger(attrName) {
            if (this[attrName]) {
              var stringValue = (this[attrName] || "0x").slice(2);
              stringValue = (stringValue.length & 1 ? "0" : "") + stringValue;
              var value = new Uint8Array(stringValue.length / 2);
              for (var i = 0; i < stringValue.length / 2; i++) {
                value[i] = parseInt(stringValue.slice(i * 2, i * 2 + 2), 16);
              }
              return value;
            } else {
              return null;
            }
          };
          _proto.hexadecimalIntegerAsNumber = function hexadecimalIntegerAsNumber(attrName) {
            var intValue = parseInt(this[attrName], 16);
            if (intValue > Number.MAX_SAFE_INTEGER) {
              return Infinity;
            }
            return intValue;
          };
          _proto.decimalFloatingPoint = function decimalFloatingPoint(attrName) {
            return parseFloat(this[attrName]);
          };
          _proto.optionalFloat = function optionalFloat(attrName, defaultValue) {
            var value = this[attrName];
            return value ? parseFloat(value) : defaultValue;
          };
          _proto.enumeratedString = function enumeratedString(attrName) {
            return this[attrName];
          };
          _proto.bool = function bool(attrName) {
            return this[attrName] === "YES";
          };
          _proto.decimalResolution = function decimalResolution(attrName) {
            var res = DECIMAL_RESOLUTION_REGEX.exec(this[attrName]);
            if (res === null) {
              return void 0;
            }
            return {
              width: parseInt(res[1], 10),
              height: parseInt(res[2], 10)
            };
          };
          AttrList2.parseAttrList = function parseAttrList(input) {
            var match;
            var attrs = {};
            var quote = '"';
            ATTR_LIST_REGEX.lastIndex = 0;
            while ((match = ATTR_LIST_REGEX.exec(input)) !== null) {
              var value = match[2];
              if (value.indexOf(quote) === 0 && value.lastIndexOf(quote) === value.length - 1) {
                value = value.slice(1, -1);
              }
              attrs[match[1]] = value;
            }
            return attrs;
          };
          return AttrList2;
        }();
      },
      "./src/utils/binary-search.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var BinarySearch = {
          search: function search(list, comparisonFn) {
            var minIndex = 0;
            var maxIndex = list.length - 1;
            var currentIndex = null;
            var currentElement = null;
            while (minIndex <= maxIndex) {
              currentIndex = (minIndex + maxIndex) / 2 | 0;
              currentElement = list[currentIndex];
              var comparisonResult = comparisonFn(currentElement);
              if (comparisonResult > 0) {
                minIndex = currentIndex + 1;
              } else if (comparisonResult < 0) {
                maxIndex = currentIndex - 1;
              } else {
                return currentElement;
              }
            }
            return null;
          }
        };
        __webpack_exports__["default"] = BinarySearch;
      },
      "./src/utils/buffer-helper.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "BufferHelper", function() {
          return BufferHelper;
        });
        var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.ts");
        var noopBuffered = {
          length: 0,
          start: function start() {
            return 0;
          },
          end: function end() {
            return 0;
          }
        };
        var BufferHelper = /* @__PURE__ */ function() {
          function BufferHelper2() {
          }
          BufferHelper2.isBuffered = function isBuffered(media, position) {
            try {
              if (media) {
                var buffered = BufferHelper2.getBuffered(media);
                for (var i = 0; i < buffered.length; i++) {
                  if (position >= buffered.start(i) && position <= buffered.end(i)) {
                    return true;
                  }
                }
              }
            } catch (error) {
            }
            return false;
          };
          BufferHelper2.bufferInfo = function bufferInfo(media, pos, maxHoleDuration) {
            try {
              if (media) {
                var vbuffered = BufferHelper2.getBuffered(media);
                var buffered = [];
                var i;
                for (i = 0; i < vbuffered.length; i++) {
                  buffered.push({
                    start: vbuffered.start(i),
                    end: vbuffered.end(i)
                  });
                }
                return this.bufferedInfo(buffered, pos, maxHoleDuration);
              }
            } catch (error) {
            }
            return {
              len: 0,
              start: pos,
              end: pos,
              nextStart: void 0
            };
          };
          BufferHelper2.bufferedInfo = function bufferedInfo(buffered, pos, maxHoleDuration) {
            pos = Math.max(0, pos);
            buffered.sort(function(a, b) {
              var diff = a.start - b.start;
              if (diff) {
                return diff;
              } else {
                return b.end - a.end;
              }
            });
            var buffered2 = [];
            if (maxHoleDuration) {
              for (var i = 0; i < buffered.length; i++) {
                var buf2len = buffered2.length;
                if (buf2len) {
                  var buf2end = buffered2[buf2len - 1].end;
                  if (buffered[i].start - buf2end < maxHoleDuration) {
                    if (buffered[i].end > buf2end) {
                      buffered2[buf2len - 1].end = buffered[i].end;
                    }
                  } else {
                    buffered2.push(buffered[i]);
                  }
                } else {
                  buffered2.push(buffered[i]);
                }
              }
            } else {
              buffered2 = buffered;
            }
            var bufferLen = 0;
            var bufferStartNext;
            var bufferStart = pos;
            var bufferEnd = pos;
            for (var _i = 0; _i < buffered2.length; _i++) {
              var start = buffered2[_i].start;
              var end = buffered2[_i].end;
              if (pos + maxHoleDuration >= start && pos < end) {
                bufferStart = start;
                bufferEnd = end;
                bufferLen = bufferEnd - pos;
              } else if (pos + maxHoleDuration < start) {
                bufferStartNext = start;
                break;
              }
            }
            return {
              len: bufferLen,
              start: bufferStart || 0,
              end: bufferEnd || 0,
              nextStart: bufferStartNext
            };
          };
          BufferHelper2.getBuffered = function getBuffered(media) {
            try {
              return media.buffered;
            } catch (e) {
              _logger__WEBPACK_IMPORTED_MODULE_0__["logger"].log("failed to get media.buffered", e);
              return noopBuffered;
            }
          };
          return BufferHelper2;
        }();
      },
      "./src/utils/cea-608-parser.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "Row", function() {
          return Row;
        });
        __webpack_require__.d(__webpack_exports__, "CaptionScreen", function() {
          return CaptionScreen;
        });
        var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.ts");
        var specialCea608CharsCodes = {
          42: 225,
          92: 233,
          94: 237,
          95: 243,
          96: 250,
          123: 231,
          124: 247,
          125: 209,
          126: 241,
          127: 9608,
          128: 174,
          129: 176,
          130: 189,
          131: 191,
          132: 8482,
          133: 162,
          134: 163,
          135: 9834,
          136: 224,
          137: 32,
          138: 232,
          139: 226,
          140: 234,
          141: 238,
          142: 244,
          143: 251,
          144: 193,
          145: 201,
          146: 211,
          147: 218,
          148: 220,
          149: 252,
          150: 8216,
          151: 161,
          152: 42,
          153: 8217,
          154: 9473,
          155: 169,
          156: 8480,
          157: 8226,
          158: 8220,
          159: 8221,
          160: 192,
          161: 194,
          162: 199,
          163: 200,
          164: 202,
          165: 203,
          166: 235,
          167: 206,
          168: 207,
          169: 239,
          170: 212,
          171: 217,
          172: 249,
          173: 219,
          174: 171,
          175: 187,
          176: 195,
          177: 227,
          178: 205,
          179: 204,
          180: 236,
          181: 210,
          182: 242,
          183: 213,
          184: 245,
          185: 123,
          186: 125,
          187: 92,
          188: 94,
          189: 95,
          190: 124,
          191: 8764,
          192: 196,
          193: 228,
          194: 214,
          195: 246,
          196: 223,
          197: 165,
          198: 164,
          199: 9475,
          200: 197,
          201: 229,
          202: 216,
          203: 248,
          204: 9487,
          205: 9491,
          206: 9495,
          207: 9499
        };
        var getCharForByte = function getCharForByte2(_byte) {
          var charCode = _byte;
          if (specialCea608CharsCodes.hasOwnProperty(_byte)) {
            charCode = specialCea608CharsCodes[_byte];
          }
          return String.fromCharCode(charCode);
        };
        var NR_ROWS = 15;
        var NR_COLS = 100;
        var rowsLowCh1 = {
          17: 1,
          18: 3,
          21: 5,
          22: 7,
          23: 9,
          16: 11,
          19: 12,
          20: 14
        };
        var rowsHighCh1 = {
          17: 2,
          18: 4,
          21: 6,
          22: 8,
          23: 10,
          19: 13,
          20: 15
        };
        var rowsLowCh2 = {
          25: 1,
          26: 3,
          29: 5,
          30: 7,
          31: 9,
          24: 11,
          27: 12,
          28: 14
        };
        var rowsHighCh2 = {
          25: 2,
          26: 4,
          29: 6,
          30: 8,
          31: 10,
          27: 13,
          28: 15
        };
        var backgroundColors = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
        var VerboseLevel;
        (function(VerboseLevel2) {
          VerboseLevel2[VerboseLevel2["ERROR"] = 0] = "ERROR";
          VerboseLevel2[VerboseLevel2["TEXT"] = 1] = "TEXT";
          VerboseLevel2[VerboseLevel2["WARNING"] = 2] = "WARNING";
          VerboseLevel2[VerboseLevel2["INFO"] = 2] = "INFO";
          VerboseLevel2[VerboseLevel2["DEBUG"] = 3] = "DEBUG";
          VerboseLevel2[VerboseLevel2["DATA"] = 3] = "DATA";
        })(VerboseLevel || (VerboseLevel = {}));
        var CaptionsLogger = /* @__PURE__ */ function() {
          function CaptionsLogger2() {
            this.time = null;
            this.verboseLevel = VerboseLevel.ERROR;
          }
          var _proto = CaptionsLogger2.prototype;
          _proto.log = function log(severity, msg) {
            if (this.verboseLevel >= severity) {
              _utils_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].log(this.time + " [" + severity + "] " + msg);
            }
          };
          return CaptionsLogger2;
        }();
        var numArrayToHexArray = function numArrayToHexArray2(numArray) {
          var hexArray = [];
          for (var j = 0; j < numArray.length; j++) {
            hexArray.push(numArray[j].toString(16));
          }
          return hexArray;
        };
        var PenState = /* @__PURE__ */ function() {
          function PenState2(foreground, underline, italics, background, flash) {
            this.foreground = void 0;
            this.underline = void 0;
            this.italics = void 0;
            this.background = void 0;
            this.flash = void 0;
            this.foreground = foreground || "white";
            this.underline = underline || false;
            this.italics = italics || false;
            this.background = background || "black";
            this.flash = flash || false;
          }
          var _proto2 = PenState2.prototype;
          _proto2.reset = function reset() {
            this.foreground = "white";
            this.underline = false;
            this.italics = false;
            this.background = "black";
            this.flash = false;
          };
          _proto2.setStyles = function setStyles(styles) {
            var attribs = ["foreground", "underline", "italics", "background", "flash"];
            for (var i = 0; i < attribs.length; i++) {
              var style = attribs[i];
              if (styles.hasOwnProperty(style)) {
                this[style] = styles[style];
              }
            }
          };
          _proto2.isDefault = function isDefault() {
            return this.foreground === "white" && !this.underline && !this.italics && this.background === "black" && !this.flash;
          };
          _proto2.equals = function equals(other) {
            return this.foreground === other.foreground && this.underline === other.underline && this.italics === other.italics && this.background === other.background && this.flash === other.flash;
          };
          _proto2.copy = function copy(newPenState) {
            this.foreground = newPenState.foreground;
            this.underline = newPenState.underline;
            this.italics = newPenState.italics;
            this.background = newPenState.background;
            this.flash = newPenState.flash;
          };
          _proto2.toString = function toString() {
            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash;
          };
          return PenState2;
        }();
        var StyledUnicodeChar = /* @__PURE__ */ function() {
          function StyledUnicodeChar2(uchar, foreground, underline, italics, background, flash) {
            this.uchar = void 0;
            this.penState = void 0;
            this.uchar = uchar || " ";
            this.penState = new PenState(foreground, underline, italics, background, flash);
          }
          var _proto3 = StyledUnicodeChar2.prototype;
          _proto3.reset = function reset() {
            this.uchar = " ";
            this.penState.reset();
          };
          _proto3.setChar = function setChar(uchar, newPenState) {
            this.uchar = uchar;
            this.penState.copy(newPenState);
          };
          _proto3.setPenState = function setPenState(newPenState) {
            this.penState.copy(newPenState);
          };
          _proto3.equals = function equals(other) {
            return this.uchar === other.uchar && this.penState.equals(other.penState);
          };
          _proto3.copy = function copy(newChar) {
            this.uchar = newChar.uchar;
            this.penState.copy(newChar.penState);
          };
          _proto3.isEmpty = function isEmpty() {
            return this.uchar === " " && this.penState.isDefault();
          };
          return StyledUnicodeChar2;
        }();
        var Row = /* @__PURE__ */ function() {
          function Row2(logger) {
            this.chars = void 0;
            this.pos = void 0;
            this.currPenState = void 0;
            this.cueStartTime = void 0;
            this.logger = void 0;
            this.chars = [];
            for (var i = 0; i < NR_COLS; i++) {
              this.chars.push(new StyledUnicodeChar());
            }
            this.logger = logger;
            this.pos = 0;
            this.currPenState = new PenState();
          }
          var _proto4 = Row2.prototype;
          _proto4.equals = function equals(other) {
            var equal = true;
            for (var i = 0; i < NR_COLS; i++) {
              if (!this.chars[i].equals(other.chars[i])) {
                equal = false;
                break;
              }
            }
            return equal;
          };
          _proto4.copy = function copy(other) {
            for (var i = 0; i < NR_COLS; i++) {
              this.chars[i].copy(other.chars[i]);
            }
          };
          _proto4.isEmpty = function isEmpty() {
            var empty = true;
            for (var i = 0; i < NR_COLS; i++) {
              if (!this.chars[i].isEmpty()) {
                empty = false;
                break;
              }
            }
            return empty;
          };
          _proto4.setCursor = function setCursor(absPos) {
            if (this.pos !== absPos) {
              this.pos = absPos;
            }
            if (this.pos < 0) {
              this.logger.log(VerboseLevel.DEBUG, "Negative cursor position " + this.pos);
              this.pos = 0;
            } else if (this.pos > NR_COLS) {
              this.logger.log(VerboseLevel.DEBUG, "Too large cursor position " + this.pos);
              this.pos = NR_COLS;
            }
          };
          _proto4.moveCursor = function moveCursor(relPos) {
            var newPos = this.pos + relPos;
            if (relPos > 1) {
              for (var i = this.pos + 1; i < newPos + 1; i++) {
                this.chars[i].setPenState(this.currPenState);
              }
            }
            this.setCursor(newPos);
          };
          _proto4.backSpace = function backSpace() {
            this.moveCursor(-1);
            this.chars[this.pos].setChar(" ", this.currPenState);
          };
          _proto4.insertChar = function insertChar(_byte2) {
            if (_byte2 >= 144) {
              this.backSpace();
            }
            var _char = getCharForByte(_byte2);
            if (this.pos >= NR_COLS) {
              this.logger.log(VerboseLevel.ERROR, "Cannot insert " + _byte2.toString(16) + " (" + _char + ") at position " + this.pos + ". Skipping it!");
              return;
            }
            this.chars[this.pos].setChar(_char, this.currPenState);
            this.moveCursor(1);
          };
          _proto4.clearFromPos = function clearFromPos(startPos) {
            var i;
            for (i = startPos; i < NR_COLS; i++) {
              this.chars[i].reset();
            }
          };
          _proto4.clear = function clear() {
            this.clearFromPos(0);
            this.pos = 0;
            this.currPenState.reset();
          };
          _proto4.clearToEndOfRow = function clearToEndOfRow() {
            this.clearFromPos(this.pos);
          };
          _proto4.getTextString = function getTextString() {
            var chars = [];
            var empty = true;
            for (var i = 0; i < NR_COLS; i++) {
              var _char2 = this.chars[i].uchar;
              if (_char2 !== " ") {
                empty = false;
              }
              chars.push(_char2);
            }
            if (empty) {
              return "";
            } else {
              return chars.join("");
            }
          };
          _proto4.setPenStyles = function setPenStyles(styles) {
            this.currPenState.setStyles(styles);
            var currChar = this.chars[this.pos];
            currChar.setPenState(this.currPenState);
          };
          return Row2;
        }();
        var CaptionScreen = /* @__PURE__ */ function() {
          function CaptionScreen2(logger) {
            this.rows = void 0;
            this.currRow = void 0;
            this.nrRollUpRows = void 0;
            this.lastOutputScreen = void 0;
            this.logger = void 0;
            this.rows = [];
            for (var i = 0; i < NR_ROWS; i++) {
              this.rows.push(new Row(logger));
            }
            this.logger = logger;
            this.currRow = NR_ROWS - 1;
            this.nrRollUpRows = null;
            this.lastOutputScreen = null;
            this.reset();
          }
          var _proto5 = CaptionScreen2.prototype;
          _proto5.reset = function reset() {
            for (var i = 0; i < NR_ROWS; i++) {
              this.rows[i].clear();
            }
            this.currRow = NR_ROWS - 1;
          };
          _proto5.equals = function equals(other) {
            var equal = true;
            for (var i = 0; i < NR_ROWS; i++) {
              if (!this.rows[i].equals(other.rows[i])) {
                equal = false;
                break;
              }
            }
            return equal;
          };
          _proto5.copy = function copy(other) {
            for (var i = 0; i < NR_ROWS; i++) {
              this.rows[i].copy(other.rows[i]);
            }
          };
          _proto5.isEmpty = function isEmpty() {
            var empty = true;
            for (var i = 0; i < NR_ROWS; i++) {
              if (!this.rows[i].isEmpty()) {
                empty = false;
                break;
              }
            }
            return empty;
          };
          _proto5.backSpace = function backSpace() {
            var row = this.rows[this.currRow];
            row.backSpace();
          };
          _proto5.clearToEndOfRow = function clearToEndOfRow() {
            var row = this.rows[this.currRow];
            row.clearToEndOfRow();
          };
          _proto5.insertChar = function insertChar(_char3) {
            var row = this.rows[this.currRow];
            row.insertChar(_char3);
          };
          _proto5.setPen = function setPen(styles) {
            var row = this.rows[this.currRow];
            row.setPenStyles(styles);
          };
          _proto5.moveCursor = function moveCursor(relPos) {
            var row = this.rows[this.currRow];
            row.moveCursor(relPos);
          };
          _proto5.setCursor = function setCursor(absPos) {
            this.logger.log(VerboseLevel.INFO, "setCursor: " + absPos);
            var row = this.rows[this.currRow];
            row.setCursor(absPos);
          };
          _proto5.setPAC = function setPAC(pacData) {
            this.logger.log(VerboseLevel.INFO, "pacData = " + JSON.stringify(pacData));
            var newRow = pacData.row - 1;
            if (this.nrRollUpRows && newRow < this.nrRollUpRows - 1) {
              newRow = this.nrRollUpRows - 1;
            }
            if (this.nrRollUpRows && this.currRow !== newRow) {
              for (var i = 0; i < NR_ROWS; i++) {
                this.rows[i].clear();
              }
              var topRowIndex = this.currRow + 1 - this.nrRollUpRows;
              var lastOutputScreen = this.lastOutputScreen;
              if (lastOutputScreen) {
                var prevLineTime = lastOutputScreen.rows[topRowIndex].cueStartTime;
                var time = this.logger.time;
                if (prevLineTime && time !== null && prevLineTime < time) {
                  for (var _i = 0; _i < this.nrRollUpRows; _i++) {
                    this.rows[newRow - this.nrRollUpRows + _i + 1].copy(lastOutputScreen.rows[topRowIndex + _i]);
                  }
                }
              }
            }
            this.currRow = newRow;
            var row = this.rows[this.currRow];
            if (pacData.indent !== null) {
              var indent = pacData.indent;
              var prevPos = Math.max(indent - 1, 0);
              row.setCursor(pacData.indent);
              pacData.color = row.chars[prevPos].penState.foreground;
            }
            var styles = {
              foreground: pacData.color,
              underline: pacData.underline,
              italics: pacData.italics,
              background: "black",
              flash: false
            };
            this.setPen(styles);
          };
          _proto5.setBkgData = function setBkgData(bkgData) {
            this.logger.log(VerboseLevel.INFO, "bkgData = " + JSON.stringify(bkgData));
            this.backSpace();
            this.setPen(bkgData);
            this.insertChar(32);
          };
          _proto5.setRollUpRows = function setRollUpRows(nrRows) {
            this.nrRollUpRows = nrRows;
          };
          _proto5.rollUp = function rollUp() {
            if (this.nrRollUpRows === null) {
              this.logger.log(VerboseLevel.DEBUG, "roll_up but nrRollUpRows not set yet");
              return;
            }
            this.logger.log(VerboseLevel.TEXT, this.getDisplayText());
            var topRowIndex = this.currRow + 1 - this.nrRollUpRows;
            var topRow = this.rows.splice(topRowIndex, 1)[0];
            topRow.clear();
            this.rows.splice(this.currRow, 0, topRow);
            this.logger.log(VerboseLevel.INFO, "Rolling up");
          };
          _proto5.getDisplayText = function getDisplayText(asOneRow) {
            asOneRow = asOneRow || false;
            var displayText = [];
            var text = "";
            var rowNr = -1;
            for (var i = 0; i < NR_ROWS; i++) {
              var rowText = this.rows[i].getTextString();
              if (rowText) {
                rowNr = i + 1;
                if (asOneRow) {
                  displayText.push("Row " + rowNr + ": '" + rowText + "'");
                } else {
                  displayText.push(rowText.trim());
                }
              }
            }
            if (displayText.length > 0) {
              if (asOneRow) {
                text = "[" + displayText.join(" | ") + "]";
              } else {
                text = displayText.join("\n");
              }
            }
            return text;
          };
          _proto5.getTextAndFormat = function getTextAndFormat() {
            return this.rows;
          };
          return CaptionScreen2;
        }();
        var Cea608Channel = /* @__PURE__ */ function() {
          function Cea608Channel2(channelNumber, outputFilter, logger) {
            this.chNr = void 0;
            this.outputFilter = void 0;
            this.mode = void 0;
            this.verbose = void 0;
            this.displayedMemory = void 0;
            this.nonDisplayedMemory = void 0;
            this.lastOutputScreen = void 0;
            this.currRollUpRow = void 0;
            this.writeScreen = void 0;
            this.cueStartTime = void 0;
            this.logger = void 0;
            this.chNr = channelNumber;
            this.outputFilter = outputFilter;
            this.mode = null;
            this.verbose = 0;
            this.displayedMemory = new CaptionScreen(logger);
            this.nonDisplayedMemory = new CaptionScreen(logger);
            this.lastOutputScreen = new CaptionScreen(logger);
            this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1];
            this.writeScreen = this.displayedMemory;
            this.mode = null;
            this.cueStartTime = null;
            this.logger = logger;
          }
          var _proto6 = Cea608Channel2.prototype;
          _proto6.reset = function reset() {
            this.mode = null;
            this.displayedMemory.reset();
            this.nonDisplayedMemory.reset();
            this.lastOutputScreen.reset();
            this.outputFilter.reset();
            this.currRollUpRow = this.displayedMemory.rows[NR_ROWS - 1];
            this.writeScreen = this.displayedMemory;
            this.mode = null;
            this.cueStartTime = null;
          };
          _proto6.getHandler = function getHandler() {
            return this.outputFilter;
          };
          _proto6.setHandler = function setHandler(newHandler) {
            this.outputFilter = newHandler;
          };
          _proto6.setPAC = function setPAC(pacData) {
            this.writeScreen.setPAC(pacData);
          };
          _proto6.setBkgData = function setBkgData(bkgData) {
            this.writeScreen.setBkgData(bkgData);
          };
          _proto6.setMode = function setMode(newMode) {
            if (newMode === this.mode) {
              return;
            }
            this.mode = newMode;
            this.logger.log(VerboseLevel.INFO, "MODE=" + newMode);
            if (this.mode === "MODE_POP-ON") {
              this.writeScreen = this.nonDisplayedMemory;
            } else {
              this.writeScreen = this.displayedMemory;
              this.writeScreen.reset();
            }
            if (this.mode !== "MODE_ROLL-UP") {
              this.displayedMemory.nrRollUpRows = null;
              this.nonDisplayedMemory.nrRollUpRows = null;
            }
            this.mode = newMode;
          };
          _proto6.insertChars = function insertChars(chars) {
            for (var i = 0; i < chars.length; i++) {
              this.writeScreen.insertChar(chars[i]);
            }
            var screen = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
            this.logger.log(VerboseLevel.INFO, screen + ": " + this.writeScreen.getDisplayText(true));
            if (this.mode === "MODE_PAINT-ON" || this.mode === "MODE_ROLL-UP") {
              this.logger.log(VerboseLevel.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(true));
              this.outputDataUpdate();
            }
          };
          _proto6.ccRCL = function ccRCL() {
            this.logger.log(VerboseLevel.INFO, "RCL - Resume Caption Loading");
            this.setMode("MODE_POP-ON");
          };
          _proto6.ccBS = function ccBS() {
            this.logger.log(VerboseLevel.INFO, "BS - BackSpace");
            if (this.mode === "MODE_TEXT") {
              return;
            }
            this.writeScreen.backSpace();
            if (this.writeScreen === this.displayedMemory) {
              this.outputDataUpdate();
            }
          };
          _proto6.ccAOF = function ccAOF() {
          };
          _proto6.ccAON = function ccAON() {
          };
          _proto6.ccDER = function ccDER() {
            this.logger.log(VerboseLevel.INFO, "DER- Delete to End of Row");
            this.writeScreen.clearToEndOfRow();
            this.outputDataUpdate();
          };
          _proto6.ccRU = function ccRU(nrRows) {
            this.logger.log(VerboseLevel.INFO, "RU(" + nrRows + ") - Roll Up");
            this.writeScreen = this.displayedMemory;
            this.setMode("MODE_ROLL-UP");
            this.writeScreen.setRollUpRows(nrRows);
          };
          _proto6.ccFON = function ccFON() {
            this.logger.log(VerboseLevel.INFO, "FON - Flash On");
            this.writeScreen.setPen({
              flash: true
            });
          };
          _proto6.ccRDC = function ccRDC() {
            this.logger.log(VerboseLevel.INFO, "RDC - Resume Direct Captioning");
            this.setMode("MODE_PAINT-ON");
          };
          _proto6.ccTR = function ccTR() {
            this.logger.log(VerboseLevel.INFO, "TR");
            this.setMode("MODE_TEXT");
          };
          _proto6.ccRTD = function ccRTD() {
            this.logger.log(VerboseLevel.INFO, "RTD");
            this.setMode("MODE_TEXT");
          };
          _proto6.ccEDM = function ccEDM() {
            this.logger.log(VerboseLevel.INFO, "EDM - Erase Displayed Memory");
            this.displayedMemory.reset();
            this.outputDataUpdate(true);
          };
          _proto6.ccCR = function ccCR() {
            this.logger.log(VerboseLevel.INFO, "CR - Carriage Return");
            this.writeScreen.rollUp();
            this.outputDataUpdate(true);
          };
          _proto6.ccENM = function ccENM() {
            this.logger.log(VerboseLevel.INFO, "ENM - Erase Non-displayed Memory");
            this.nonDisplayedMemory.reset();
          };
          _proto6.ccEOC = function ccEOC() {
            this.logger.log(VerboseLevel.INFO, "EOC - End Of Caption");
            if (this.mode === "MODE_POP-ON") {
              var tmp = this.displayedMemory;
              this.displayedMemory = this.nonDisplayedMemory;
              this.nonDisplayedMemory = tmp;
              this.writeScreen = this.nonDisplayedMemory;
              this.logger.log(VerboseLevel.TEXT, "DISP: " + this.displayedMemory.getDisplayText());
            }
            this.outputDataUpdate(true);
          };
          _proto6.ccTO = function ccTO(nrCols) {
            this.logger.log(VerboseLevel.INFO, "TO(" + nrCols + ") - Tab Offset");
            this.writeScreen.moveCursor(nrCols);
          };
          _proto6.ccMIDROW = function ccMIDROW(secondByte) {
            var styles = {
              flash: false
            };
            styles.underline = secondByte % 2 === 1;
            styles.italics = secondByte >= 46;
            if (!styles.italics) {
              var colorIndex = Math.floor(secondByte / 2) - 16;
              var colors = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"];
              styles.foreground = colors[colorIndex];
            } else {
              styles.foreground = "white";
            }
            this.logger.log(VerboseLevel.INFO, "MIDROW: " + JSON.stringify(styles));
            this.writeScreen.setPen(styles);
          };
          _proto6.outputDataUpdate = function outputDataUpdate(dispatch) {
            if (dispatch === void 0) {
              dispatch = false;
            }
            var time = this.logger.time;
            if (time === null) {
              return;
            }
            if (this.outputFilter) {
              if (this.cueStartTime === null && !this.displayedMemory.isEmpty()) {
                this.cueStartTime = time;
              } else {
                if (!this.displayedMemory.equals(this.lastOutputScreen)) {
                  this.outputFilter.newCue(this.cueStartTime, time, this.lastOutputScreen);
                  if (dispatch && this.outputFilter.dispatchCue) {
                    this.outputFilter.dispatchCue();
                  }
                  this.cueStartTime = this.displayedMemory.isEmpty() ? null : time;
                }
              }
              this.lastOutputScreen.copy(this.displayedMemory);
            }
          };
          _proto6.cueSplitAtTime = function cueSplitAtTime(t) {
            if (this.outputFilter) {
              if (!this.displayedMemory.isEmpty()) {
                if (this.outputFilter.newCue) {
                  this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory);
                }
                this.cueStartTime = t;
              }
            }
          };
          return Cea608Channel2;
        }();
        var Cea608Parser = /* @__PURE__ */ function() {
          function Cea608Parser2(field, out1, out2) {
            this.channels = void 0;
            this.currentChannel = 0;
            this.cmdHistory = void 0;
            this.logger = void 0;
            var logger = new CaptionsLogger();
            this.channels = [null, new Cea608Channel(field, out1, logger), new Cea608Channel(field + 1, out2, logger)];
            this.cmdHistory = createCmdHistory();
            this.logger = logger;
          }
          var _proto7 = Cea608Parser2.prototype;
          _proto7.getHandler = function getHandler(channel) {
            return this.channels[channel].getHandler();
          };
          _proto7.setHandler = function setHandler(channel, newHandler) {
            this.channels[channel].setHandler(newHandler);
          };
          _proto7.addData = function addData(time, byteList) {
            var cmdFound;
            var a;
            var b;
            var charsFound = false;
            this.logger.time = time;
            for (var i = 0; i < byteList.length; i += 2) {
              a = byteList[i] & 127;
              b = byteList[i + 1] & 127;
              if (a === 0 && b === 0) {
                continue;
              } else {
                this.logger.log(VerboseLevel.DATA, "[" + numArrayToHexArray([byteList[i], byteList[i + 1]]) + "] -> (" + numArrayToHexArray([a, b]) + ")");
              }
              cmdFound = this.parseCmd(a, b);
              if (!cmdFound) {
                cmdFound = this.parseMidrow(a, b);
              }
              if (!cmdFound) {
                cmdFound = this.parsePAC(a, b);
              }
              if (!cmdFound) {
                cmdFound = this.parseBackgroundAttributes(a, b);
              }
              if (!cmdFound) {
                charsFound = this.parseChars(a, b);
                if (charsFound) {
                  var currChNr = this.currentChannel;
                  if (currChNr && currChNr > 0) {
                    var channel = this.channels[currChNr];
                    channel.insertChars(charsFound);
                  } else {
                    this.logger.log(VerboseLevel.WARNING, "No channel found yet. TEXT-MODE?");
                  }
                }
              }
              if (!cmdFound && !charsFound) {
                this.logger.log(VerboseLevel.WARNING, "Couldn't parse cleaned data " + numArrayToHexArray([a, b]) + " orig: " + numArrayToHexArray([byteList[i], byteList[i + 1]]));
              }
            }
          };
          _proto7.parseCmd = function parseCmd(a, b) {
            var cmdHistory = this.cmdHistory;
            var cond1 = (a === 20 || a === 28 || a === 21 || a === 29) && b >= 32 && b <= 47;
            var cond2 = (a === 23 || a === 31) && b >= 33 && b <= 35;
            if (!(cond1 || cond2)) {
              return false;
            }
            if (hasCmdRepeated(a, b, cmdHistory)) {
              setLastCmd(null, null, cmdHistory);
              this.logger.log(VerboseLevel.DEBUG, "Repeated command (" + numArrayToHexArray([a, b]) + ") is dropped");
              return true;
            }
            var chNr = a === 20 || a === 21 || a === 23 ? 1 : 2;
            var channel = this.channels[chNr];
            if (a === 20 || a === 21 || a === 28 || a === 29) {
              if (b === 32) {
                channel.ccRCL();
              } else if (b === 33) {
                channel.ccBS();
              } else if (b === 34) {
                channel.ccAOF();
              } else if (b === 35) {
                channel.ccAON();
              } else if (b === 36) {
                channel.ccDER();
              } else if (b === 37) {
                channel.ccRU(2);
              } else if (b === 38) {
                channel.ccRU(3);
              } else if (b === 39) {
                channel.ccRU(4);
              } else if (b === 40) {
                channel.ccFON();
              } else if (b === 41) {
                channel.ccRDC();
              } else if (b === 42) {
                channel.ccTR();
              } else if (b === 43) {
                channel.ccRTD();
              } else if (b === 44) {
                channel.ccEDM();
              } else if (b === 45) {
                channel.ccCR();
              } else if (b === 46) {
                channel.ccENM();
              } else if (b === 47) {
                channel.ccEOC();
              }
            } else {
              channel.ccTO(b - 32);
            }
            setLastCmd(a, b, cmdHistory);
            this.currentChannel = chNr;
            return true;
          };
          _proto7.parseMidrow = function parseMidrow(a, b) {
            var chNr = 0;
            if ((a === 17 || a === 25) && b >= 32 && b <= 47) {
              if (a === 17) {
                chNr = 1;
              } else {
                chNr = 2;
              }
              if (chNr !== this.currentChannel) {
                this.logger.log(VerboseLevel.ERROR, "Mismatch channel in midrow parsing");
                return false;
              }
              var channel = this.channels[chNr];
              if (!channel) {
                return false;
              }
              channel.ccMIDROW(b);
              this.logger.log(VerboseLevel.DEBUG, "MIDROW (" + numArrayToHexArray([a, b]) + ")");
              return true;
            }
            return false;
          };
          _proto7.parsePAC = function parsePAC(a, b) {
            var row;
            var cmdHistory = this.cmdHistory;
            var case1 = (a >= 17 && a <= 23 || a >= 25 && a <= 31) && b >= 64 && b <= 127;
            var case2 = (a === 16 || a === 24) && b >= 64 && b <= 95;
            if (!(case1 || case2)) {
              return false;
            }
            if (hasCmdRepeated(a, b, cmdHistory)) {
              setLastCmd(null, null, cmdHistory);
              return true;
            }
            var chNr = a <= 23 ? 1 : 2;
            if (b >= 64 && b <= 95) {
              row = chNr === 1 ? rowsLowCh1[a] : rowsLowCh2[a];
            } else {
              row = chNr === 1 ? rowsHighCh1[a] : rowsHighCh2[a];
            }
            var channel = this.channels[chNr];
            if (!channel) {
              return false;
            }
            channel.setPAC(this.interpretPAC(row, b));
            setLastCmd(a, b, cmdHistory);
            this.currentChannel = chNr;
            return true;
          };
          _proto7.interpretPAC = function interpretPAC(row, _byte3) {
            var pacIndex;
            var pacData = {
              color: null,
              italics: false,
              indent: null,
              underline: false,
              row
            };
            if (_byte3 > 95) {
              pacIndex = _byte3 - 96;
            } else {
              pacIndex = _byte3 - 64;
            }
            pacData.underline = (pacIndex & 1) === 1;
            if (pacIndex <= 13) {
              pacData.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(pacIndex / 2)];
            } else if (pacIndex <= 15) {
              pacData.italics = true;
              pacData.color = "white";
            } else {
              pacData.indent = Math.floor((pacIndex - 16) / 2) * 4;
            }
            return pacData;
          };
          _proto7.parseChars = function parseChars(a, b) {
            var channelNr;
            var charCodes = null;
            var charCode1 = null;
            if (a >= 25) {
              channelNr = 2;
              charCode1 = a - 8;
            } else {
              channelNr = 1;
              charCode1 = a;
            }
            if (charCode1 >= 17 && charCode1 <= 19) {
              var oneCode;
              if (charCode1 === 17) {
                oneCode = b + 80;
              } else if (charCode1 === 18) {
                oneCode = b + 112;
              } else {
                oneCode = b + 144;
              }
              this.logger.log(VerboseLevel.INFO, "Special char '" + getCharForByte(oneCode) + "' in channel " + channelNr);
              charCodes = [oneCode];
            } else if (a >= 32 && a <= 127) {
              charCodes = b === 0 ? [a] : [a, b];
            }
            if (charCodes) {
              var hexCodes = numArrayToHexArray(charCodes);
              this.logger.log(VerboseLevel.DEBUG, "Char codes =  " + hexCodes.join(","));
              setLastCmd(a, b, this.cmdHistory);
            }
            return charCodes;
          };
          _proto7.parseBackgroundAttributes = function parseBackgroundAttributes(a, b) {
            var case1 = (a === 16 || a === 24) && b >= 32 && b <= 47;
            var case2 = (a === 23 || a === 31) && b >= 45 && b <= 47;
            if (!(case1 || case2)) {
              return false;
            }
            var index;
            var bkgData = {};
            if (a === 16 || a === 24) {
              index = Math.floor((b - 32) / 2);
              bkgData.background = backgroundColors[index];
              if (b % 2 === 1) {
                bkgData.background = bkgData.background + "_semi";
              }
            } else if (b === 45) {
              bkgData.background = "transparent";
            } else {
              bkgData.foreground = "black";
              if (b === 47) {
                bkgData.underline = true;
              }
            }
            var chNr = a <= 23 ? 1 : 2;
            var channel = this.channels[chNr];
            channel.setBkgData(bkgData);
            setLastCmd(a, b, this.cmdHistory);
            return true;
          };
          _proto7.reset = function reset() {
            for (var i = 0; i < Object.keys(this.channels).length; i++) {
              var channel = this.channels[i];
              if (channel) {
                channel.reset();
              }
            }
            this.cmdHistory = createCmdHistory();
          };
          _proto7.cueSplitAtTime = function cueSplitAtTime(t) {
            for (var i = 0; i < this.channels.length; i++) {
              var channel = this.channels[i];
              if (channel) {
                channel.cueSplitAtTime(t);
              }
            }
          };
          return Cea608Parser2;
        }();
        function setLastCmd(a, b, cmdHistory) {
          cmdHistory.a = a;
          cmdHistory.b = b;
        }
        function hasCmdRepeated(a, b, cmdHistory) {
          return cmdHistory.a === a && cmdHistory.b === b;
        }
        function createCmdHistory() {
          return {
            a: null,
            b: null
          };
        }
        __webpack_exports__["default"] = Cea608Parser;
      },
      "./src/utils/codecs.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "isCodecType", function() {
          return isCodecType;
        });
        __webpack_require__.d(__webpack_exports__, "isCodecSupportedInMp4", function() {
          return isCodecSupportedInMp4;
        });
        var sampleEntryCodesISO = {
          audio: {
            a3ds: true,
            "ac-3": true,
            "ac-4": true,
            alac: true,
            alaw: true,
            dra1: true,
            "dts+": true,
            "dts-": true,
            dtsc: true,
            dtse: true,
            dtsh: true,
            "ec-3": true,
            enca: true,
            g719: true,
            g726: true,
            m4ae: true,
            mha1: true,
            mha2: true,
            mhm1: true,
            mhm2: true,
            mlpa: true,
            mp4a: true,
            "raw ": true,
            Opus: true,
            samr: true,
            sawb: true,
            sawp: true,
            sevc: true,
            sqcp: true,
            ssmv: true,
            twos: true,
            ulaw: true
          },
          video: {
            avc1: true,
            avc2: true,
            avc3: true,
            avc4: true,
            avcp: true,
            av01: true,
            drac: true,
            dvav: true,
            dvhe: true,
            encv: true,
            hev1: true,
            hvc1: true,
            mjp2: true,
            mp4v: true,
            mvc1: true,
            mvc2: true,
            mvc3: true,
            mvc4: true,
            resv: true,
            rv60: true,
            s263: true,
            svc1: true,
            svc2: true,
            "vc-1": true,
            vp08: true,
            vp09: true
          },
          text: {
            stpp: true,
            wvtt: true
          }
        };
        function isCodecType(codec, type) {
          var typeCodes = sampleEntryCodesISO[type];
          return !!typeCodes && typeCodes[codec.slice(0, 4)] === true;
        }
        function isCodecSupportedInMp4(codec, type) {
          return MediaSource.isTypeSupported((type || "video") + '/mp4;codecs="' + codec + '"');
        }
      },
      "./src/utils/cues.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _vttparser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/vttparser.ts");
        var _webvtt_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/webvtt-parser.ts");
        var _texttrack_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/texttrack-utils.ts");
        var WHITESPACE_CHAR = /\s/;
        var Cues = {
          newCue: function newCue(track, startTime, endTime, captionScreen) {
            var result = [];
            var row;
            var cue;
            var indenting;
            var indent;
            var text;
            var Cue = self.VTTCue || self.TextTrackCue;
            for (var r = 0; r < captionScreen.rows.length; r++) {
              row = captionScreen.rows[r];
              indenting = true;
              indent = 0;
              text = "";
              if (!row.isEmpty()) {
                for (var c = 0; c < row.chars.length; c++) {
                  if (WHITESPACE_CHAR.test(row.chars[c].uchar) && indenting) {
                    indent++;
                  } else {
                    text += row.chars[c].uchar;
                    indenting = false;
                  }
                }
                row.cueStartTime = startTime;
                if (startTime === endTime) {
                  endTime += 1e-4;
                }
                if (indent >= 16) {
                  indent--;
                } else {
                  indent++;
                }
                var cueText = Object(_vttparser__WEBPACK_IMPORTED_MODULE_0__["fixLineBreaks"])(text.trim());
                var id = Object(_webvtt_parser__WEBPACK_IMPORTED_MODULE_1__["generateCueId"])(startTime, endTime, cueText);
                if (!track || !track.cues || !track.cues.getCueById(id)) {
                  cue = new Cue(startTime, endTime, cueText);
                  cue.id = id;
                  cue.line = r + 1;
                  cue.align = "left";
                  cue.position = 10 + Math.min(80, Math.floor(indent * 8 / 32) * 10);
                  result.push(cue);
                }
              }
            }
            if (track && result.length) {
              result.sort(function(cueA, cueB) {
                if (cueA.line === "auto" || cueB.line === "auto") {
                  return 0;
                }
                if (cueA.line > 8 && cueB.line > 8) {
                  return cueB.line - cueA.line;
                }
                return cueA.line - cueB.line;
              });
              result.forEach(function(cue2) {
                return Object(_texttrack_utils__WEBPACK_IMPORTED_MODULE_2__["addCueToTrack"])(track, cue2);
              });
            }
            return result;
          }
        };
        __webpack_exports__["default"] = Cues;
      },
      "./src/utils/discontinuities.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "findFirstFragWithCC", function() {
          return findFirstFragWithCC;
        });
        __webpack_require__.d(__webpack_exports__, "shouldAlignOnDiscontinuities", function() {
          return shouldAlignOnDiscontinuities;
        });
        __webpack_require__.d(__webpack_exports__, "findDiscontinuousReferenceFrag", function() {
          return findDiscontinuousReferenceFrag;
        });
        __webpack_require__.d(__webpack_exports__, "adjustSlidingStart", function() {
          return adjustSlidingStart;
        });
        __webpack_require__.d(__webpack_exports__, "alignStream", function() {
          return alignStream;
        });
        __webpack_require__.d(__webpack_exports__, "alignPDT", function() {
          return alignPDT;
        });
        __webpack_require__.d(__webpack_exports__, "alignFragmentByPDTDelta", function() {
          return alignFragmentByPDTDelta;
        });
        __webpack_require__.d(__webpack_exports__, "alignMediaPlaylistByPDT", function() {
          return alignMediaPlaylistByPDT;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/logger.ts");
        var _controller_level_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/controller/level-helper.ts");
        function findFirstFragWithCC(fragments, cc) {
          var firstFrag = null;
          for (var i = 0, len = fragments.length; i < len; i++) {
            var currentFrag = fragments[i];
            if (currentFrag && currentFrag.cc === cc) {
              firstFrag = currentFrag;
              break;
            }
          }
          return firstFrag;
        }
        function shouldAlignOnDiscontinuities(lastFrag, lastLevel, details) {
          if (lastLevel.details) {
            if (details.endCC > details.startCC || lastFrag && lastFrag.cc < details.startCC) {
              return true;
            }
          }
          return false;
        }
        function findDiscontinuousReferenceFrag(prevDetails, curDetails) {
          var prevFrags = prevDetails.fragments;
          var curFrags = curDetails.fragments;
          if (!curFrags.length || !prevFrags.length) {
            _logger__WEBPACK_IMPORTED_MODULE_1__["logger"].log("No fragments to align");
            return;
          }
          var prevStartFrag = findFirstFragWithCC(prevFrags, curFrags[0].cc);
          if (!prevStartFrag || prevStartFrag && !prevStartFrag.startPTS) {
            _logger__WEBPACK_IMPORTED_MODULE_1__["logger"].log("No frag in previous level to align on");
            return;
          }
          return prevStartFrag;
        }
        function adjustFragmentStart(frag, sliding) {
          if (frag) {
            var start = frag.start + sliding;
            frag.start = frag.startPTS = start;
            frag.endPTS = start + frag.duration;
          }
        }
        function adjustSlidingStart(sliding, details) {
          var fragments = details.fragments;
          for (var i = 0, len = fragments.length; i < len; i++) {
            adjustFragmentStart(fragments[i], sliding);
          }
          if (details.fragmentHint) {
            adjustFragmentStart(details.fragmentHint, sliding);
          }
          details.alignedSliding = true;
        }
        function alignStream(lastFrag, lastLevel, details) {
          if (!lastLevel) {
            return;
          }
          alignDiscontinuities(lastFrag, details, lastLevel);
          if (!details.alignedSliding && lastLevel.details) {
            alignPDT(details, lastLevel.details);
          }
          if (!details.alignedSliding && lastLevel.details && !details.skippedSegments) {
            Object(_controller_level_helper__WEBPACK_IMPORTED_MODULE_2__["adjustSliding"])(lastLevel.details, details);
          }
        }
        function alignDiscontinuities(lastFrag, details, lastLevel) {
          if (shouldAlignOnDiscontinuities(lastFrag, lastLevel, details)) {
            var referenceFrag = findDiscontinuousReferenceFrag(lastLevel.details, details);
            if (referenceFrag && Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(referenceFrag.start)) {
              _logger__WEBPACK_IMPORTED_MODULE_1__["logger"].log("Adjusting PTS using last level due to CC increase within current level " + details.url);
              adjustSlidingStart(referenceFrag.start, details);
            }
          }
        }
        function alignPDT(details, lastDetails) {
          if (!lastDetails.fragments.length || !details.hasProgramDateTime || !lastDetails.hasProgramDateTime) {
            return;
          }
          var lastPDT = lastDetails.fragments[0].programDateTime;
          var newPDT = details.fragments[0].programDateTime;
          var sliding = (newPDT - lastPDT) / 1e3 + lastDetails.fragments[0].start;
          if (sliding && Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(sliding)) {
            _logger__WEBPACK_IMPORTED_MODULE_1__["logger"].log("Adjusting PTS using programDateTime delta " + (newPDT - lastPDT) + "ms, sliding:" + sliding.toFixed(3) + " " + details.url + " ");
            adjustSlidingStart(sliding, details);
          }
        }
        function alignFragmentByPDTDelta(frag, delta) {
          var programDateTime = frag.programDateTime;
          if (!programDateTime)
            return;
          var start = (programDateTime - delta) / 1e3;
          frag.start = frag.startPTS = start;
          frag.endPTS = start + frag.duration;
        }
        function alignMediaPlaylistByPDT(details, refDetails) {
          if (!refDetails.fragments.length || !details.hasProgramDateTime || !refDetails.hasProgramDateTime) {
            return;
          }
          var refPDT = refDetails.fragments[0].programDateTime;
          var refStart = refDetails.fragments[0].start;
          var delta = refPDT - refStart * 1e3;
          details.fragments.forEach(function(frag) {
            alignFragmentByPDTDelta(frag, delta);
          });
          if (details.fragmentHint) {
            alignFragmentByPDTDelta(details.fragmentHint, delta);
          }
          details.alignedSliding = true;
        }
      },
      "./src/utils/ewma-bandwidth-estimator.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_ewma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/ewma.ts");
        var EwmaBandWidthEstimator = /* @__PURE__ */ function() {
          function EwmaBandWidthEstimator2(slow, fast, defaultEstimate) {
            this.defaultEstimate_ = void 0;
            this.minWeight_ = void 0;
            this.minDelayMs_ = void 0;
            this.slow_ = void 0;
            this.fast_ = void 0;
            this.defaultEstimate_ = defaultEstimate;
            this.minWeight_ = 1e-3;
            this.minDelayMs_ = 50;
            this.slow_ = new _utils_ewma__WEBPACK_IMPORTED_MODULE_0__["default"](slow);
            this.fast_ = new _utils_ewma__WEBPACK_IMPORTED_MODULE_0__["default"](fast);
          }
          var _proto = EwmaBandWidthEstimator2.prototype;
          _proto.update = function update(slow, fast) {
            var slow_ = this.slow_, fast_ = this.fast_;
            if (this.slow_.halfLife !== slow) {
              this.slow_ = new _utils_ewma__WEBPACK_IMPORTED_MODULE_0__["default"](slow, slow_.getEstimate(), slow_.getTotalWeight());
            }
            if (this.fast_.halfLife !== fast) {
              this.fast_ = new _utils_ewma__WEBPACK_IMPORTED_MODULE_0__["default"](fast, fast_.getEstimate(), fast_.getTotalWeight());
            }
          };
          _proto.sample = function sample(durationMs, numBytes) {
            durationMs = Math.max(durationMs, this.minDelayMs_);
            var numBits = 8 * numBytes;
            var durationS = durationMs / 1e3;
            var bandwidthInBps = numBits / durationS;
            this.fast_.sample(durationS, bandwidthInBps);
            this.slow_.sample(durationS, bandwidthInBps);
          };
          _proto.canEstimate = function canEstimate() {
            var fast = this.fast_;
            return fast && fast.getTotalWeight() >= this.minWeight_;
          };
          _proto.getEstimate = function getEstimate() {
            if (this.canEstimate()) {
              return Math.min(this.fast_.getEstimate(), this.slow_.getEstimate());
            } else {
              return this.defaultEstimate_;
            }
          };
          _proto.destroy = function destroy() {
          };
          return EwmaBandWidthEstimator2;
        }();
        __webpack_exports__["default"] = EwmaBandWidthEstimator;
      },
      "./src/utils/ewma.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var EWMA = /* @__PURE__ */ function() {
          function EWMA2(halfLife, estimate, weight) {
            if (estimate === void 0) {
              estimate = 0;
            }
            if (weight === void 0) {
              weight = 0;
            }
            this.halfLife = void 0;
            this.alpha_ = void 0;
            this.estimate_ = void 0;
            this.totalWeight_ = void 0;
            this.halfLife = halfLife;
            this.alpha_ = halfLife ? Math.exp(Math.log(0.5) / halfLife) : 0;
            this.estimate_ = estimate;
            this.totalWeight_ = weight;
          }
          var _proto = EWMA2.prototype;
          _proto.sample = function sample(weight, value) {
            var adjAlpha = Math.pow(this.alpha_, weight);
            this.estimate_ = value * (1 - adjAlpha) + adjAlpha * this.estimate_;
            this.totalWeight_ += weight;
          };
          _proto.getTotalWeight = function getTotalWeight() {
            return this.totalWeight_;
          };
          _proto.getEstimate = function getEstimate() {
            if (this.alpha_) {
              var zeroFactor = 1 - Math.pow(this.alpha_, this.totalWeight_);
              if (zeroFactor) {
                return this.estimate_ / zeroFactor;
              }
            }
            return this.estimate_;
          };
          return EWMA2;
        }();
        __webpack_exports__["default"] = EWMA;
      },
      "./src/utils/fetch-loader.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "fetchSupported", function() {
          return fetchSupported;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _loader_load_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/loader/load-stats.ts");
        var _demux_chunk_cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/demux/chunk-cache.ts");
        function _inheritsLoose(subClass, superClass) {
          subClass.prototype = Object.create(superClass.prototype);
          subClass.prototype.constructor = subClass;
          _setPrototypeOf(subClass, superClass);
        }
        function _wrapNativeSuper(Class) {
          var _cache = typeof Map === "function" ? new Map() : void 0;
          _wrapNativeSuper = function _wrapNativeSuper2(Class2) {
            if (Class2 === null || !_isNativeFunction(Class2))
              return Class2;
            if (typeof Class2 !== "function") {
              throw new TypeError("Super expression must either be null or a function");
            }
            if (typeof _cache !== "undefined") {
              if (_cache.has(Class2))
                return _cache.get(Class2);
              _cache.set(Class2, Wrapper);
            }
            function Wrapper() {
              return _construct(Class2, arguments, _getPrototypeOf(this).constructor);
            }
            Wrapper.prototype = Object.create(Class2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });
            return _setPrototypeOf(Wrapper, Class2);
          };
          return _wrapNativeSuper(Class);
        }
        function _construct(Parent, args, Class) {
          if (_isNativeReflectConstruct()) {
            _construct = Reflect.construct;
          } else {
            _construct = function _construct2(Parent2, args2, Class2) {
              var a = [null];
              a.push.apply(a, args2);
              var Constructor = Function.bind.apply(Parent2, a);
              var instance = new Constructor();
              if (Class2)
                _setPrototypeOf(instance, Class2.prototype);
              return instance;
            };
          }
          return _construct.apply(null, arguments);
        }
        function _isNativeReflectConstruct() {
          if (typeof Reflect === "undefined" || !Reflect.construct)
            return false;
          if (Reflect.construct.sham)
            return false;
          if (typeof Proxy === "function")
            return true;
          try {
            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
            }));
            return true;
          } catch (e) {
            return false;
          }
        }
        function _isNativeFunction(fn) {
          return Function.toString.call(fn).indexOf("[native code]") !== -1;
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        function _getPrototypeOf(o) {
          _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf2(o2) {
            return o2.__proto__ || Object.getPrototypeOf(o2);
          };
          return _getPrototypeOf(o);
        }
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        function fetchSupported() {
          if (self.fetch && self.AbortController && self.ReadableStream && self.Request) {
            try {
              new self.ReadableStream({});
              return true;
            } catch (e) {
            }
          }
          return false;
        }
        var FetchLoader = /* @__PURE__ */ function() {
          function FetchLoader2(config) {
            this.fetchSetup = void 0;
            this.requestTimeout = void 0;
            this.request = void 0;
            this.response = void 0;
            this.controller = void 0;
            this.context = void 0;
            this.config = null;
            this.callbacks = null;
            this.stats = void 0;
            this.loader = null;
            this.fetchSetup = config.fetchSetup || getRequest;
            this.controller = new self.AbortController();
            this.stats = new _loader_load_stats__WEBPACK_IMPORTED_MODULE_1__["LoadStats"]();
          }
          var _proto = FetchLoader2.prototype;
          _proto.destroy = function destroy() {
            this.loader = this.callbacks = null;
            this.abortInternal();
          };
          _proto.abortInternal = function abortInternal() {
            var response = this.response;
            if (!response || !response.ok) {
              this.stats.aborted = true;
              this.controller.abort();
            }
          };
          _proto.abort = function abort() {
            var _this$callbacks;
            this.abortInternal();
            if ((_this$callbacks = this.callbacks) !== null && _this$callbacks !== void 0 && _this$callbacks.onAbort) {
              this.callbacks.onAbort(this.stats, this.context, this.response);
            }
          };
          _proto.load = function load(context, config, callbacks) {
            var _this = this;
            var stats = this.stats;
            if (stats.loading.start) {
              throw new Error("Loader can only be used once.");
            }
            stats.loading.start = self.performance.now();
            var initParams = getRequestParameters(context, this.controller.signal);
            var onProgress = callbacks.onProgress;
            var isArrayBuffer = context.responseType === "arraybuffer";
            var LENGTH = isArrayBuffer ? "byteLength" : "length";
            this.context = context;
            this.config = config;
            this.callbacks = callbacks;
            this.request = this.fetchSetup(context, initParams);
            self.clearTimeout(this.requestTimeout);
            this.requestTimeout = self.setTimeout(function() {
              _this.abortInternal();
              callbacks.onTimeout(stats, context, _this.response);
            }, config.timeout);
            self.fetch(this.request).then(function(response) {
              _this.response = _this.loader = response;
              if (!response.ok) {
                var status = response.status, statusText = response.statusText;
                throw new FetchError(statusText || "fetch, bad network response", status, response);
              }
              stats.loading.first = Math.max(self.performance.now(), stats.loading.start);
              stats.total = parseInt(response.headers.get("Content-Length") || "0");
              if (onProgress && Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(config.highWaterMark)) {
                return _this.loadProgressively(response, stats, context, config.highWaterMark, onProgress);
              }
              if (isArrayBuffer) {
                return response.arrayBuffer();
              }
              return response.text();
            }).then(function(responseData) {
              var response = _this.response;
              self.clearTimeout(_this.requestTimeout);
              stats.loading.end = Math.max(self.performance.now(), stats.loading.first);
              stats.loaded = stats.total = responseData[LENGTH];
              var loaderResponse = {
                url: response.url,
                data: responseData
              };
              if (onProgress && !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(config.highWaterMark)) {
                onProgress(stats, context, responseData, response);
              }
              callbacks.onSuccess(loaderResponse, stats, context, response);
            }).catch(function(error) {
              self.clearTimeout(_this.requestTimeout);
              if (stats.aborted) {
                return;
              }
              var code = error.code || 0;
              callbacks.onError({
                code,
                text: error.message
              }, context, error.details);
            });
          };
          _proto.getCacheAge = function getCacheAge() {
            var result = null;
            if (this.response) {
              var ageHeader = this.response.headers.get("age");
              result = ageHeader ? parseFloat(ageHeader) : null;
            }
            return result;
          };
          _proto.loadProgressively = function loadProgressively(response, stats, context, highWaterMark, onProgress) {
            if (highWaterMark === void 0) {
              highWaterMark = 0;
            }
            var chunkCache = new _demux_chunk_cache__WEBPACK_IMPORTED_MODULE_2__["default"]();
            var reader = response.body.getReader();
            var pump = function pump2() {
              return reader.read().then(function(data) {
                if (data.done) {
                  if (chunkCache.dataLength) {
                    onProgress(stats, context, chunkCache.flush(), response);
                  }
                  return Promise.resolve(new ArrayBuffer(0));
                }
                var chunk = data.value;
                var len = chunk.length;
                stats.loaded += len;
                if (len < highWaterMark || chunkCache.dataLength) {
                  chunkCache.push(chunk);
                  if (chunkCache.dataLength >= highWaterMark) {
                    onProgress(stats, context, chunkCache.flush(), response);
                  }
                } else {
                  onProgress(stats, context, chunk, response);
                }
                return pump2();
              }).catch(function() {
                return Promise.reject();
              });
            };
            return pump();
          };
          return FetchLoader2;
        }();
        function getRequestParameters(context, signal) {
          var initParams = {
            method: "GET",
            mode: "cors",
            credentials: "same-origin",
            signal,
            headers: new self.Headers(_extends({}, context.headers))
          };
          if (context.rangeEnd) {
            initParams.headers.set("Range", "bytes=" + context.rangeStart + "-" + String(context.rangeEnd - 1));
          }
          return initParams;
        }
        function getRequest(context, initParams) {
          return new self.Request(context.url, initParams);
        }
        var FetchError = /* @__PURE__ */ function(_Error) {
          _inheritsLoose(FetchError2, _Error);
          function FetchError2(message, code, details) {
            var _this2;
            _this2 = _Error.call(this, message) || this;
            _this2.code = void 0;
            _this2.details = void 0;
            _this2.code = code;
            _this2.details = details;
            return _this2;
          }
          return FetchError2;
        }(/* @__PURE__ */ _wrapNativeSuper(Error));
        __webpack_exports__["default"] = FetchLoader;
      },
      "./src/utils/imsc1-ttml-parser.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "IMSC1_CODEC", function() {
          return IMSC1_CODEC;
        });
        __webpack_require__.d(__webpack_exports__, "parseIMSC1", function() {
          return parseIMSC1;
        });
        var _mp4_tools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/mp4-tools.ts");
        var _vttparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/vttparser.ts");
        var _vttcue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/utils/vttcue.ts");
        var _demux_id3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/demux/id3.ts");
        var _timescale_conversion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/utils/timescale-conversion.ts");
        var _webvtt_parser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./src/utils/webvtt-parser.ts");
        function _extends() {
          _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          return _extends.apply(this, arguments);
        }
        var IMSC1_CODEC = "stpp.ttml.im1t";
        var HMSF_REGEX = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/;
        var TIME_UNIT_REGEX = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/;
        var textAlignToLineAlign = {
          left: "start",
          center: "center",
          right: "end",
          start: "start",
          end: "end"
        };
        function parseIMSC1(payload, initPTS, timescale, callBack, errorCallBack) {
          var results = Object(_mp4_tools__WEBPACK_IMPORTED_MODULE_0__["findBox"])(new Uint8Array(payload), ["mdat"]);
          if (results.length === 0) {
            errorCallBack(new Error("Could not parse IMSC1 mdat"));
            return;
          }
          var mdat = results[0];
          var ttml = Object(_demux_id3__WEBPACK_IMPORTED_MODULE_3__["utf8ArrayToStr"])(new Uint8Array(payload, mdat.start, mdat.end - mdat.start));
          var syncTime = Object(_timescale_conversion__WEBPACK_IMPORTED_MODULE_4__["toTimescaleFromScale"])(initPTS, 1, timescale);
          try {
            callBack(parseTTML(ttml, syncTime));
          } catch (error) {
            errorCallBack(error);
          }
        }
        function parseTTML(ttml, syncTime) {
          var parser = new DOMParser();
          var xmlDoc = parser.parseFromString(ttml, "text/xml");
          var tt = xmlDoc.getElementsByTagName("tt")[0];
          if (!tt) {
            throw new Error("Invalid ttml");
          }
          var defaultRateInfo = {
            frameRate: 30,
            subFrameRate: 1,
            frameRateMultiplier: 0,
            tickRate: 0
          };
          var rateInfo = Object.keys(defaultRateInfo).reduce(function(result, key) {
            result[key] = tt.getAttribute("ttp:" + key) || defaultRateInfo[key];
            return result;
          }, {});
          var trim = tt.getAttribute("xml:space") !== "preserve";
          var styleElements = collectionToDictionary(getElementCollection(tt, "styling", "style"));
          var regionElements = collectionToDictionary(getElementCollection(tt, "layout", "region"));
          var cueElements = getElementCollection(tt, "body", "[begin]");
          return [].map.call(cueElements, function(cueElement) {
            var cueText = getTextContent(cueElement, trim);
            if (!cueText || !cueElement.hasAttribute("begin")) {
              return null;
            }
            var startTime = parseTtmlTime(cueElement.getAttribute("begin"), rateInfo);
            var duration = parseTtmlTime(cueElement.getAttribute("dur"), rateInfo);
            var endTime = parseTtmlTime(cueElement.getAttribute("end"), rateInfo);
            if (startTime === null) {
              throw timestampParsingError(cueElement);
            }
            if (endTime === null) {
              if (duration === null) {
                throw timestampParsingError(cueElement);
              }
              endTime = startTime + duration;
            }
            var cue = new _vttcue__WEBPACK_IMPORTED_MODULE_2__["default"](startTime - syncTime, endTime - syncTime, cueText);
            cue.id = Object(_webvtt_parser__WEBPACK_IMPORTED_MODULE_5__["generateCueId"])(cue.startTime, cue.endTime, cue.text);
            var region = regionElements[cueElement.getAttribute("region")];
            var style = styleElements[cueElement.getAttribute("style")];
            cue.position = 10;
            cue.size = 80;
            var styles = getTtmlStyles(region, style);
            var textAlign = styles.textAlign;
            if (textAlign) {
              var lineAlign = textAlignToLineAlign[textAlign];
              if (lineAlign) {
                cue.lineAlign = lineAlign;
              }
              cue.align = textAlign;
            }
            _extends(cue, styles);
            return cue;
          }).filter(function(cue) {
            return cue !== null;
          });
        }
        function getElementCollection(fromElement, parentName, childName) {
          var parent = fromElement.getElementsByTagName(parentName)[0];
          if (parent) {
            return [].slice.call(parent.querySelectorAll(childName));
          }
          return [];
        }
        function collectionToDictionary(elementsWithId) {
          return elementsWithId.reduce(function(dict, element) {
            var id = element.getAttribute("xml:id");
            if (id) {
              dict[id] = element;
            }
            return dict;
          }, {});
        }
        function getTextContent(element, trim) {
          return [].slice.call(element.childNodes).reduce(function(str, node, i) {
            var _node$childNodes;
            if (node.nodeName === "br" && i) {
              return str + "\n";
            }
            if ((_node$childNodes = node.childNodes) !== null && _node$childNodes !== void 0 && _node$childNodes.length) {
              return getTextContent(node, trim);
            } else if (trim) {
              return str + node.textContent.trim().replace(/\s+/g, " ");
            }
            return str + node.textContent;
          }, "");
        }
        function getTtmlStyles(region, style) {
          var ttsNs = "http://www.w3.org/ns/ttml#styling";
          var styleAttributes = [
            "displayAlign",
            "textAlign",
            "color",
            "backgroundColor",
            "fontSize",
            "fontFamily"
          ];
          return styleAttributes.reduce(function(styles, name) {
            var value = getAttributeNS(style, ttsNs, name) || getAttributeNS(region, ttsNs, name);
            if (value) {
              styles[name] = value;
            }
            return styles;
          }, {});
        }
        function getAttributeNS(element, ns, name) {
          return element.hasAttributeNS(ns, name) ? element.getAttributeNS(ns, name) : null;
        }
        function timestampParsingError(node) {
          return new Error("Could not parse ttml timestamp " + node);
        }
        function parseTtmlTime(timeAttributeValue, rateInfo) {
          if (!timeAttributeValue) {
            return null;
          }
          var seconds = Object(_vttparser__WEBPACK_IMPORTED_MODULE_1__["parseTimeStamp"])(timeAttributeValue);
          if (seconds === null) {
            if (HMSF_REGEX.test(timeAttributeValue)) {
              seconds = parseHoursMinutesSecondsFrames(timeAttributeValue, rateInfo);
            } else if (TIME_UNIT_REGEX.test(timeAttributeValue)) {
              seconds = parseTimeUnits(timeAttributeValue, rateInfo);
            }
          }
          return seconds;
        }
        function parseHoursMinutesSecondsFrames(timeAttributeValue, rateInfo) {
          var m = HMSF_REGEX.exec(timeAttributeValue);
          var frames = (m[4] | 0) + (m[5] | 0) / rateInfo.subFrameRate;
          return (m[1] | 0) * 3600 + (m[2] | 0) * 60 + (m[3] | 0) + frames / rateInfo.frameRate;
        }
        function parseTimeUnits(timeAttributeValue, rateInfo) {
          var m = TIME_UNIT_REGEX.exec(timeAttributeValue);
          var value = Number(m[1]);
          var unit = m[2];
          switch (unit) {
            case "h":
              return value * 3600;
            case "m":
              return value * 60;
            case "ms":
              return value * 1e3;
            case "f":
              return value / rateInfo.frameRate;
            case "t":
              return value / rateInfo.tickRate;
          }
          return value;
        }
      },
      "./src/utils/logger.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "enableLogs", function() {
          return enableLogs;
        });
        __webpack_require__.d(__webpack_exports__, "logger", function() {
          return logger;
        });
        var noop = function noop2() {
        };
        var fakeLogger = {
          trace: noop,
          debug: noop,
          log: noop,
          warn: noop,
          info: noop,
          error: noop
        };
        var exportedLogger = fakeLogger;
        function consolePrintFn(type) {
          var func = self.console[type];
          if (func) {
            return func.bind(self.console, "[" + type + "] >");
          }
          return noop;
        }
        function exportLoggerFunctions(debugConfig) {
          for (var _len = arguments.length, functions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            functions[_key - 1] = arguments[_key];
          }
          functions.forEach(function(type) {
            exportedLogger[type] = debugConfig[type] ? debugConfig[type].bind(debugConfig) : consolePrintFn(type);
          });
        }
        function enableLogs(debugConfig) {
          if (self.console && debugConfig === true || typeof debugConfig === "object") {
            exportLoggerFunctions(debugConfig, "debug", "log", "info", "warn", "error");
            try {
              exportedLogger.log();
            } catch (e) {
              exportedLogger = fakeLogger;
            }
          } else {
            exportedLogger = fakeLogger;
          }
        }
        var logger = exportedLogger;
      },
      "./src/utils/mediakeys-helper.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "KeySystems", function() {
          return KeySystems;
        });
        __webpack_require__.d(__webpack_exports__, "requestMediaKeySystemAccess", function() {
          return requestMediaKeySystemAccess;
        });
        var KeySystems;
        (function(KeySystems2) {
          KeySystems2["WIDEVINE"] = "com.widevine.alpha";
          KeySystems2["PLAYREADY"] = "com.microsoft.playready";
        })(KeySystems || (KeySystems = {}));
        var requestMediaKeySystemAccess = function() {
          if (typeof self !== "undefined" && self.navigator && self.navigator.requestMediaKeySystemAccess) {
            return self.navigator.requestMediaKeySystemAccess.bind(self.navigator);
          } else {
            return null;
          }
        }();
      },
      "./src/utils/mediasource-helper.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "getMediaSource", function() {
          return getMediaSource;
        });
        function getMediaSource() {
          return self.MediaSource || self.WebKitMediaSource;
        }
      },
      "./src/utils/mp4-tools.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "bin2str", function() {
          return bin2str;
        });
        __webpack_require__.d(__webpack_exports__, "readUint16", function() {
          return readUint16;
        });
        __webpack_require__.d(__webpack_exports__, "readUint32", function() {
          return readUint32;
        });
        __webpack_require__.d(__webpack_exports__, "writeUint32", function() {
          return writeUint32;
        });
        __webpack_require__.d(__webpack_exports__, "findBox", function() {
          return findBox;
        });
        __webpack_require__.d(__webpack_exports__, "parseSegmentIndex", function() {
          return parseSegmentIndex;
        });
        __webpack_require__.d(__webpack_exports__, "parseInitSegment", function() {
          return parseInitSegment;
        });
        __webpack_require__.d(__webpack_exports__, "getStartDTS", function() {
          return getStartDTS;
        });
        __webpack_require__.d(__webpack_exports__, "getDuration", function() {
          return getDuration;
        });
        __webpack_require__.d(__webpack_exports__, "computeRawDurationFromSamples", function() {
          return computeRawDurationFromSamples;
        });
        __webpack_require__.d(__webpack_exports__, "offsetStartDTS", function() {
          return offsetStartDTS;
        });
        __webpack_require__.d(__webpack_exports__, "segmentValidRange", function() {
          return segmentValidRange;
        });
        __webpack_require__.d(__webpack_exports__, "appendUint8Array", function() {
          return appendUint8Array;
        });
        var _typed_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/typed-array.ts");
        var _loader_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/loader/fragment.ts");
        var UINT32_MAX = Math.pow(2, 32) - 1;
        var push = [].push;
        function bin2str(data) {
          return String.fromCharCode.apply(null, data);
        }
        function readUint16(buffer, offset) {
          if ("data" in buffer) {
            offset += buffer.start;
            buffer = buffer.data;
          }
          var val = buffer[offset] << 8 | buffer[offset + 1];
          return val < 0 ? 65536 + val : val;
        }
        function readUint32(buffer, offset) {
          if ("data" in buffer) {
            offset += buffer.start;
            buffer = buffer.data;
          }
          var val = buffer[offset] << 24 | buffer[offset + 1] << 16 | buffer[offset + 2] << 8 | buffer[offset + 3];
          return val < 0 ? 4294967296 + val : val;
        }
        function writeUint32(buffer, offset, value) {
          if ("data" in buffer) {
            offset += buffer.start;
            buffer = buffer.data;
          }
          buffer[offset] = value >> 24;
          buffer[offset + 1] = value >> 16 & 255;
          buffer[offset + 2] = value >> 8 & 255;
          buffer[offset + 3] = value & 255;
        }
        function findBox(input, path) {
          var results = [];
          if (!path.length) {
            return results;
          }
          var data;
          var start;
          var end;
          if ("data" in input) {
            data = input.data;
            start = input.start;
            end = input.end;
          } else {
            data = input;
            start = 0;
            end = data.byteLength;
          }
          for (var i = start; i < end; ) {
            var size = readUint32(data, i);
            var type = bin2str(data.subarray(i + 4, i + 8));
            var endbox = size > 1 ? i + size : end;
            if (type === path[0]) {
              if (path.length === 1) {
                results.push({
                  data,
                  start: i + 8,
                  end: endbox
                });
              } else {
                var subresults = findBox({
                  data,
                  start: i + 8,
                  end: endbox
                }, path.slice(1));
                if (subresults.length) {
                  push.apply(results, subresults);
                }
              }
            }
            i = endbox;
          }
          return results;
        }
        function parseSegmentIndex(initSegment) {
          var moovBox = findBox(initSegment, ["moov"]);
          var moov = moovBox[0];
          var moovEndOffset = moov ? moov.end : null;
          var sidxBox = findBox(initSegment, ["sidx"]);
          if (!sidxBox || !sidxBox[0]) {
            return null;
          }
          var references = [];
          var sidx = sidxBox[0];
          var version2 = sidx.data[0];
          var index = version2 === 0 ? 8 : 16;
          var timescale = readUint32(sidx, index);
          index += 4;
          var earliestPresentationTime = 0;
          var firstOffset = 0;
          if (version2 === 0) {
            index += 8;
          } else {
            index += 16;
          }
          index += 2;
          var startByte = sidx.end + firstOffset;
          var referencesCount = readUint16(sidx, index);
          index += 2;
          for (var i = 0; i < referencesCount; i++) {
            var referenceIndex = index;
            var referenceInfo = readUint32(sidx, referenceIndex);
            referenceIndex += 4;
            var referenceSize = referenceInfo & 2147483647;
            var referenceType = (referenceInfo & 2147483648) >>> 31;
            if (referenceType === 1) {
              console.warn("SIDX has hierarchical references (not supported)");
              return null;
            }
            var subsegmentDuration = readUint32(sidx, referenceIndex);
            referenceIndex += 4;
            references.push({
              referenceSize,
              subsegmentDuration,
              info: {
                duration: subsegmentDuration / timescale,
                start: startByte,
                end: startByte + referenceSize - 1
              }
            });
            startByte += referenceSize;
            referenceIndex += 4;
            index = referenceIndex;
          }
          return {
            earliestPresentationTime,
            timescale,
            version: version2,
            referencesCount,
            references,
            moovEndOffset
          };
        }
        function parseInitSegment(initSegment) {
          var result = [];
          var traks = findBox(initSegment, ["moov", "trak"]);
          for (var i = 0; i < traks.length; i++) {
            var trak = traks[i];
            var tkhd = findBox(trak, ["tkhd"])[0];
            if (tkhd) {
              var version2 = tkhd.data[tkhd.start];
              var _index = version2 === 0 ? 12 : 20;
              var trackId = readUint32(tkhd, _index);
              var mdhd = findBox(trak, ["mdia", "mdhd"])[0];
              if (mdhd) {
                version2 = mdhd.data[mdhd.start];
                _index = version2 === 0 ? 12 : 20;
                var timescale = readUint32(mdhd, _index);
                var hdlr = findBox(trak, ["mdia", "hdlr"])[0];
                if (hdlr) {
                  var hdlrType = bin2str(hdlr.data.subarray(hdlr.start + 8, hdlr.start + 12));
                  var type = {
                    soun: _loader_fragment__WEBPACK_IMPORTED_MODULE_1__["ElementaryStreamTypes"].AUDIO,
                    vide: _loader_fragment__WEBPACK_IMPORTED_MODULE_1__["ElementaryStreamTypes"].VIDEO
                  }[hdlrType];
                  if (type) {
                    var stsd = findBox(trak, ["mdia", "minf", "stbl", "stsd"])[0];
                    var codec = void 0;
                    if (stsd) {
                      codec = bin2str(stsd.data.subarray(stsd.start + 12, stsd.start + 16));
                    }
                    result[trackId] = {
                      timescale,
                      type
                    };
                    result[type] = {
                      timescale,
                      id: trackId,
                      codec
                    };
                  }
                }
              }
            }
          }
          var trex = findBox(initSegment, ["moov", "mvex", "trex"]);
          trex.forEach(function(trex2) {
            var trackId2 = readUint32(trex2, 4);
            var track = result[trackId2];
            if (track) {
              track.default = {
                duration: readUint32(trex2, 12),
                flags: readUint32(trex2, 20)
              };
            }
          });
          return result;
        }
        function getStartDTS(initData, fmp4) {
          return findBox(fmp4, ["moof", "traf"]).reduce(function(result, traf) {
            var tfdt = findBox(traf, ["tfdt"])[0];
            var version2 = tfdt.data[tfdt.start];
            var start = findBox(traf, ["tfhd"]).reduce(function(result2, tfhd) {
              var id = readUint32(tfhd, 4);
              var track = initData[id];
              if (track) {
                var baseTime = readUint32(tfdt, 4);
                if (version2 === 1) {
                  baseTime *= Math.pow(2, 32);
                  baseTime += readUint32(tfdt, 8);
                }
                var scale = track.timescale || 9e4;
                var startTime = baseTime / scale;
                if (isFinite(startTime) && (result2 === null || startTime < result2)) {
                  return startTime;
                }
              }
              return result2;
            }, null);
            if (start !== null && isFinite(start) && (result === null || start < result)) {
              return start;
            }
            return result;
          }, null) || 0;
        }
        function getDuration(data, initData) {
          var rawDuration = 0;
          var videoDuration = 0;
          var audioDuration = 0;
          var trafs = findBox(data, ["moof", "traf"]);
          for (var i = 0; i < trafs.length; i++) {
            var traf = trafs[i];
            var tfhd = findBox(traf, ["tfhd"])[0];
            var id = readUint32(tfhd, 4);
            var track = initData[id];
            if (!track) {
              continue;
            }
            var trackDefault = track.default;
            var tfhdFlags = readUint32(tfhd, 0) | (trackDefault === null || trackDefault === void 0 ? void 0 : trackDefault.flags);
            var sampleDuration = trackDefault === null || trackDefault === void 0 ? void 0 : trackDefault.duration;
            if (tfhdFlags & 8) {
              if (tfhdFlags & 2) {
                sampleDuration = readUint32(tfhd, 12);
              } else {
                sampleDuration = readUint32(tfhd, 8);
              }
            }
            var timescale = track.timescale || 9e4;
            var truns = findBox(traf, ["trun"]);
            for (var j = 0; j < truns.length; j++) {
              if (sampleDuration) {
                var sampleCount = readUint32(truns[j], 4);
                rawDuration = sampleDuration * sampleCount;
              } else {
                rawDuration = computeRawDurationFromSamples(truns[j]);
              }
              if (track.type === _loader_fragment__WEBPACK_IMPORTED_MODULE_1__["ElementaryStreamTypes"].VIDEO) {
                videoDuration += rawDuration / timescale;
              } else if (track.type === _loader_fragment__WEBPACK_IMPORTED_MODULE_1__["ElementaryStreamTypes"].AUDIO) {
                audioDuration += rawDuration / timescale;
              }
            }
          }
          if (videoDuration === 0 && audioDuration === 0) {
            var sidx = parseSegmentIndex(data);
            if (sidx !== null && sidx !== void 0 && sidx.references) {
              return sidx.references.reduce(function(dur, ref2) {
                return dur + ref2.info.duration || 0;
              }, 0);
            }
          }
          if (videoDuration) {
            return videoDuration;
          }
          return audioDuration;
        }
        function computeRawDurationFromSamples(trun) {
          var flags = readUint32(trun, 0);
          var offset = 8;
          if (flags & 1) {
            offset += 4;
          }
          if (flags & 4) {
            offset += 4;
          }
          var duration = 0;
          var sampleCount = readUint32(trun, 4);
          for (var i = 0; i < sampleCount; i++) {
            if (flags & 256) {
              var sampleDuration = readUint32(trun, offset);
              duration += sampleDuration;
              offset += 4;
            }
            if (flags & 512) {
              offset += 4;
            }
            if (flags & 1024) {
              offset += 4;
            }
            if (flags & 2048) {
              offset += 4;
            }
          }
          return duration;
        }
        function offsetStartDTS(initData, fmp4, timeOffset) {
          findBox(fmp4, ["moof", "traf"]).forEach(function(traf) {
            findBox(traf, ["tfhd"]).forEach(function(tfhd) {
              var id = readUint32(tfhd, 4);
              var track = initData[id];
              if (!track) {
                return;
              }
              var timescale = track.timescale || 9e4;
              findBox(traf, ["tfdt"]).forEach(function(tfdt) {
                var version2 = tfdt.data[tfdt.start];
                var baseMediaDecodeTime = readUint32(tfdt, 4);
                if (version2 === 0) {
                  writeUint32(tfdt, 4, baseMediaDecodeTime - timeOffset * timescale);
                } else {
                  baseMediaDecodeTime *= Math.pow(2, 32);
                  baseMediaDecodeTime += readUint32(tfdt, 8);
                  baseMediaDecodeTime -= timeOffset * timescale;
                  baseMediaDecodeTime = Math.max(baseMediaDecodeTime, 0);
                  var upper = Math.floor(baseMediaDecodeTime / (UINT32_MAX + 1));
                  var lower = Math.floor(baseMediaDecodeTime % (UINT32_MAX + 1));
                  writeUint32(tfdt, 4, upper);
                  writeUint32(tfdt, 8, lower);
                }
              });
            });
          });
        }
        function segmentValidRange(data) {
          var segmentedRange = {
            valid: null,
            remainder: null
          };
          var moofs = findBox(data, ["moof"]);
          if (!moofs) {
            return segmentedRange;
          } else if (moofs.length < 2) {
            segmentedRange.remainder = data;
            return segmentedRange;
          }
          var last = moofs[moofs.length - 1];
          segmentedRange.valid = Object(_typed_array__WEBPACK_IMPORTED_MODULE_0__["sliceUint8"])(data, 0, last.start - 8);
          segmentedRange.remainder = Object(_typed_array__WEBPACK_IMPORTED_MODULE_0__["sliceUint8"])(data, last.start - 8);
          return segmentedRange;
        }
        function appendUint8Array(data1, data2) {
          var temp = new Uint8Array(data1.length + data2.length);
          temp.set(data1);
          temp.set(data2, data1.length);
          return temp;
        }
      },
      "./src/utils/output-filter.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return OutputFilter;
        });
        var OutputFilter = /* @__PURE__ */ function() {
          function OutputFilter2(timelineController, trackName) {
            this.timelineController = void 0;
            this.cueRanges = [];
            this.trackName = void 0;
            this.startTime = null;
            this.endTime = null;
            this.screen = null;
            this.timelineController = timelineController;
            this.trackName = trackName;
          }
          var _proto = OutputFilter2.prototype;
          _proto.dispatchCue = function dispatchCue() {
            if (this.startTime === null) {
              return;
            }
            this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges);
            this.startTime = null;
          };
          _proto.newCue = function newCue(startTime, endTime, screen) {
            if (this.startTime === null || this.startTime > startTime) {
              this.startTime = startTime;
            }
            this.endTime = endTime;
            this.screen = screen;
            this.timelineController.createCaptionsTrack(this.trackName);
          };
          _proto.reset = function reset() {
            this.cueRanges = [];
          };
          return OutputFilter2;
        }();
      },
      "./src/utils/texttrack-utils.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "sendAddTrackEvent", function() {
          return sendAddTrackEvent;
        });
        __webpack_require__.d(__webpack_exports__, "addCueToTrack", function() {
          return addCueToTrack;
        });
        __webpack_require__.d(__webpack_exports__, "clearCurrentCues", function() {
          return clearCurrentCues;
        });
        __webpack_require__.d(__webpack_exports__, "removeCuesInRange", function() {
          return removeCuesInRange;
        });
        __webpack_require__.d(__webpack_exports__, "getCuesInRange", function() {
          return getCuesInRange;
        });
        var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.ts");
        function sendAddTrackEvent(track, videoEl) {
          var event;
          try {
            event = new Event("addtrack");
          } catch (err) {
            event = document.createEvent("Event");
            event.initEvent("addtrack", false, false);
          }
          event.track = track;
          videoEl.dispatchEvent(event);
        }
        function addCueToTrack(track, cue) {
          var mode = track.mode;
          if (mode === "disabled") {
            track.mode = "hidden";
          }
          if (track.cues && !track.cues.getCueById(cue.id)) {
            try {
              track.addCue(cue);
              if (!track.cues.getCueById(cue.id)) {
                throw new Error("addCue is failed for: " + cue);
              }
            } catch (err) {
              _logger__WEBPACK_IMPORTED_MODULE_0__["logger"].debug("[texttrack-utils]: " + err);
              var textTrackCue = new self.TextTrackCue(cue.startTime, cue.endTime, cue.text);
              textTrackCue.id = cue.id;
              track.addCue(textTrackCue);
            }
          }
          if (mode === "disabled") {
            track.mode = mode;
          }
        }
        function clearCurrentCues(track) {
          var mode = track.mode;
          if (mode === "disabled") {
            track.mode = "hidden";
          }
          if (track.cues) {
            for (var i = track.cues.length; i--; ) {
              track.removeCue(track.cues[i]);
            }
          }
          if (mode === "disabled") {
            track.mode = mode;
          }
        }
        function removeCuesInRange(track, start, end) {
          var mode = track.mode;
          if (mode === "disabled") {
            track.mode = "hidden";
          }
          if (track.cues && track.cues.length > 0) {
            var cues = getCuesInRange(track.cues, start, end);
            for (var i = 0; i < cues.length; i++) {
              track.removeCue(cues[i]);
            }
          }
          if (mode === "disabled") {
            track.mode = mode;
          }
        }
        function getFirstCueIndexAfterTime(cues, time) {
          if (time < cues[0].startTime) {
            return 0;
          }
          var len = cues.length - 1;
          if (time > cues[len].endTime) {
            return -1;
          }
          var left = 0;
          var right = len;
          while (left <= right) {
            var mid = Math.floor((right + left) / 2);
            if (time < cues[mid].startTime) {
              right = mid - 1;
            } else if (time > cues[mid].startTime && left < len) {
              left = mid + 1;
            } else {
              return mid;
            }
          }
          return cues[left].startTime - time < time - cues[right].startTime ? left : right;
        }
        function getCuesInRange(cues, start, end) {
          var cuesFound = [];
          var firstCueInRange = getFirstCueIndexAfterTime(cues, start);
          if (firstCueInRange > -1) {
            for (var i = firstCueInRange, len = cues.length; i < len; i++) {
              var cue = cues[i];
              if (cue.startTime >= start && cue.endTime <= end) {
                cuesFound.push(cue);
              } else if (cue.startTime > end) {
                return cuesFound;
              }
            }
          }
          return cuesFound;
        }
      },
      "./src/utils/time-ranges.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var TimeRanges = {
          toString: function toString(r) {
            var log = "";
            var len = r.length;
            for (var i = 0; i < len; i++) {
              log += "[" + r.start(i).toFixed(3) + "," + r.end(i).toFixed(3) + "]";
            }
            return log;
          }
        };
        __webpack_exports__["default"] = TimeRanges;
      },
      "./src/utils/timescale-conversion.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "toTimescaleFromBase", function() {
          return toTimescaleFromBase;
        });
        __webpack_require__.d(__webpack_exports__, "toTimescaleFromScale", function() {
          return toTimescaleFromScale;
        });
        __webpack_require__.d(__webpack_exports__, "toMsFromMpegTsClock", function() {
          return toMsFromMpegTsClock;
        });
        __webpack_require__.d(__webpack_exports__, "toMpegTsClockFromTimescale", function() {
          return toMpegTsClockFromTimescale;
        });
        var MPEG_TS_CLOCK_FREQ_HZ = 9e4;
        function toTimescaleFromBase(value, destScale, srcBase, round) {
          if (srcBase === void 0) {
            srcBase = 1;
          }
          if (round === void 0) {
            round = false;
          }
          var result = value * destScale * srcBase;
          return round ? Math.round(result) : result;
        }
        function toTimescaleFromScale(value, destScale, srcScale, round) {
          if (srcScale === void 0) {
            srcScale = 1;
          }
          if (round === void 0) {
            round = false;
          }
          return toTimescaleFromBase(value, destScale, 1 / srcScale, round);
        }
        function toMsFromMpegTsClock(value, round) {
          if (round === void 0) {
            round = false;
          }
          return toTimescaleFromBase(value, 1e3, 1 / MPEG_TS_CLOCK_FREQ_HZ, round);
        }
        function toMpegTsClockFromTimescale(value, srcScale) {
          if (srcScale === void 0) {
            srcScale = 1;
          }
          return toTimescaleFromBase(value, MPEG_TS_CLOCK_FREQ_HZ, 1 / srcScale);
        }
      },
      "./src/utils/typed-array.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "sliceUint8", function() {
          return sliceUint8;
        });
        function sliceUint8(array, start, end) {
          return Uint8Array.prototype.slice ? array.slice(start, end) : new Uint8Array(Array.prototype.slice.call(array, start, end));
        }
      },
      "./src/utils/vttcue.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_exports__["default"] = function() {
          if (typeof self !== "undefined" && self.VTTCue) {
            return self.VTTCue;
          }
          var AllowedDirections = ["", "lr", "rl"];
          var AllowedAlignments = ["start", "middle", "end", "left", "right"];
          function isAllowedValue(allowed, value) {
            if (typeof value !== "string") {
              return false;
            }
            if (!Array.isArray(allowed)) {
              return false;
            }
            var lcValue = value.toLowerCase();
            if (~allowed.indexOf(lcValue)) {
              return lcValue;
            }
            return false;
          }
          function findDirectionSetting(value) {
            return isAllowedValue(AllowedDirections, value);
          }
          function findAlignSetting(value) {
            return isAllowedValue(AllowedAlignments, value);
          }
          function extend(obj) {
            for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              rest[_key - 1] = arguments[_key];
            }
            var i = 1;
            for (; i < arguments.length; i++) {
              var cobj = arguments[i];
              for (var p in cobj) {
                obj[p] = cobj[p];
              }
            }
            return obj;
          }
          function VTTCue(startTime, endTime, text) {
            var cue = this;
            var baseObj = {
              enumerable: true
            };
            cue.hasBeenReset = false;
            var _id = "";
            var _pauseOnExit = false;
            var _startTime = startTime;
            var _endTime = endTime;
            var _text = text;
            var _region = null;
            var _vertical = "";
            var _snapToLines = true;
            var _line = "auto";
            var _lineAlign = "start";
            var _position = 50;
            var _positionAlign = "middle";
            var _size = 50;
            var _align = "middle";
            Object.defineProperty(cue, "id", extend({}, baseObj, {
              get: function get() {
                return _id;
              },
              set: function set(value) {
                _id = "" + value;
              }
            }));
            Object.defineProperty(cue, "pauseOnExit", extend({}, baseObj, {
              get: function get() {
                return _pauseOnExit;
              },
              set: function set(value) {
                _pauseOnExit = !!value;
              }
            }));
            Object.defineProperty(cue, "startTime", extend({}, baseObj, {
              get: function get() {
                return _startTime;
              },
              set: function set(value) {
                if (typeof value !== "number") {
                  throw new TypeError("Start time must be set to a number.");
                }
                _startTime = value;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "endTime", extend({}, baseObj, {
              get: function get() {
                return _endTime;
              },
              set: function set(value) {
                if (typeof value !== "number") {
                  throw new TypeError("End time must be set to a number.");
                }
                _endTime = value;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "text", extend({}, baseObj, {
              get: function get() {
                return _text;
              },
              set: function set(value) {
                _text = "" + value;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "region", extend({}, baseObj, {
              get: function get() {
                return _region;
              },
              set: function set(value) {
                _region = value;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "vertical", extend({}, baseObj, {
              get: function get() {
                return _vertical;
              },
              set: function set(value) {
                var setting = findDirectionSetting(value);
                if (setting === false) {
                  throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _vertical = setting;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "snapToLines", extend({}, baseObj, {
              get: function get() {
                return _snapToLines;
              },
              set: function set(value) {
                _snapToLines = !!value;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "line", extend({}, baseObj, {
              get: function get() {
                return _line;
              },
              set: function set(value) {
                if (typeof value !== "number" && value !== "auto") {
                  throw new SyntaxError("An invalid number or illegal string was specified.");
                }
                _line = value;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "lineAlign", extend({}, baseObj, {
              get: function get() {
                return _lineAlign;
              },
              set: function set(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                  throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _lineAlign = setting;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "position", extend({}, baseObj, {
              get: function get() {
                return _position;
              },
              set: function set(value) {
                if (value < 0 || value > 100) {
                  throw new Error("Position must be between 0 and 100.");
                }
                _position = value;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "positionAlign", extend({}, baseObj, {
              get: function get() {
                return _positionAlign;
              },
              set: function set(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                  throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _positionAlign = setting;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "size", extend({}, baseObj, {
              get: function get() {
                return _size;
              },
              set: function set(value) {
                if (value < 0 || value > 100) {
                  throw new Error("Size must be between 0 and 100.");
                }
                _size = value;
                this.hasBeenReset = true;
              }
            }));
            Object.defineProperty(cue, "align", extend({}, baseObj, {
              get: function get() {
                return _align;
              },
              set: function set(value) {
                var setting = findAlignSetting(value);
                if (!setting) {
                  throw new SyntaxError("An invalid or illegal string was specified.");
                }
                _align = setting;
                this.hasBeenReset = true;
              }
            }));
            cue.displayState = void 0;
          }
          VTTCue.prototype.getCueAsHTML = function() {
            var WebVTT = self.WebVTT;
            return WebVTT.convertCueToDOMTree(self, this.text);
          };
          return VTTCue;
        }();
      },
      "./src/utils/vttparser.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "parseTimeStamp", function() {
          return parseTimeStamp;
        });
        __webpack_require__.d(__webpack_exports__, "fixLineBreaks", function() {
          return fixLineBreaks;
        });
        __webpack_require__.d(__webpack_exports__, "VTTParser", function() {
          return VTTParser;
        });
        var _vttcue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/vttcue.ts");
        var StringDecoder = /* @__PURE__ */ function() {
          function StringDecoder2() {
          }
          var _proto = StringDecoder2.prototype;
          _proto.decode = function decode(data, options) {
            if (!data) {
              return "";
            }
            if (typeof data !== "string") {
              throw new Error("Error - expected string data.");
            }
            return decodeURIComponent(encodeURIComponent(data));
          };
          return StringDecoder2;
        }();
        function parseTimeStamp(input) {
          function computeSeconds(h, m2, s, f) {
            return (h | 0) * 3600 + (m2 | 0) * 60 + (s | 0) + parseFloat(f || 0);
          }
          var m = input.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
          if (!m) {
            return null;
          }
          if (parseFloat(m[2]) > 59) {
            return computeSeconds(m[2], m[3], 0, m[4]);
          }
          return computeSeconds(m[1], m[2], m[3], m[4]);
        }
        var Settings = /* @__PURE__ */ function() {
          function Settings2() {
            this.values = Object.create(null);
          }
          var _proto2 = Settings2.prototype;
          _proto2.set = function set(k, v) {
            if (!this.get(k) && v !== "") {
              this.values[k] = v;
            }
          };
          _proto2.get = function get(k, dflt, defaultKey) {
            if (defaultKey) {
              return this.has(k) ? this.values[k] : dflt[defaultKey];
            }
            return this.has(k) ? this.values[k] : dflt;
          };
          _proto2.has = function has(k) {
            return k in this.values;
          };
          _proto2.alt = function alt(k, v, a) {
            for (var n = 0; n < a.length; ++n) {
              if (v === a[n]) {
                this.set(k, v);
                break;
              }
            }
          };
          _proto2.integer = function integer(k, v) {
            if (/^-?\d+$/.test(v)) {
              this.set(k, parseInt(v, 10));
            }
          };
          _proto2.percent = function percent(k, v) {
            if (/^([\d]{1,3})(\.[\d]*)?%$/.test(v)) {
              var percent2 = parseFloat(v);
              if (percent2 >= 0 && percent2 <= 100) {
                this.set(k, percent2);
                return true;
              }
            }
            return false;
          };
          return Settings2;
        }();
        function parseOptions(input, callback, keyValueDelim, groupDelim) {
          var groups = groupDelim ? input.split(groupDelim) : [input];
          for (var i in groups) {
            if (typeof groups[i] !== "string") {
              continue;
            }
            var kv = groups[i].split(keyValueDelim);
            if (kv.length !== 2) {
              continue;
            }
            var _k = kv[0];
            var _v = kv[1];
            callback(_k, _v);
          }
        }
        var defaults = new _vttcue__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, "");
        var center = defaults.align === "middle" ? "middle" : "center";
        function parseCue(input, cue, regionList) {
          var oInput = input;
          function consumeTimeStamp() {
            var ts = parseTimeStamp(input);
            if (ts === null) {
              throw new Error("Malformed timestamp: " + oInput);
            }
            input = input.replace(/^[^\sa-zA-Z-]+/, "");
            return ts;
          }
          function consumeCueSettings(input2, cue2) {
            var settings = new Settings();
            parseOptions(input2, function(k, v) {
              var vals;
              switch (k) {
                case "region":
                  for (var i = regionList.length - 1; i >= 0; i--) {
                    if (regionList[i].id === v) {
                      settings.set(k, regionList[i].region);
                      break;
                    }
                  }
                  break;
                case "vertical":
                  settings.alt(k, v, ["rl", "lr"]);
                  break;
                case "line":
                  vals = v.split(",");
                  settings.integer(k, vals[0]);
                  if (settings.percent(k, vals[0])) {
                    settings.set("snapToLines", false);
                  }
                  settings.alt(k, vals[0], ["auto"]);
                  if (vals.length === 2) {
                    settings.alt("lineAlign", vals[1], ["start", center, "end"]);
                  }
                  break;
                case "position":
                  vals = v.split(",");
                  settings.percent(k, vals[0]);
                  if (vals.length === 2) {
                    settings.alt("positionAlign", vals[1], ["start", center, "end", "line-left", "line-right", "auto"]);
                  }
                  break;
                case "size":
                  settings.percent(k, v);
                  break;
                case "align":
                  settings.alt(k, v, ["start", center, "end", "left", "right"]);
                  break;
              }
            }, /:/, /\s/);
            cue2.region = settings.get("region", null);
            cue2.vertical = settings.get("vertical", "");
            var line = settings.get("line", "auto");
            if (line === "auto" && defaults.line === -1) {
              line = -1;
            }
            cue2.line = line;
            cue2.lineAlign = settings.get("lineAlign", "start");
            cue2.snapToLines = settings.get("snapToLines", true);
            cue2.size = settings.get("size", 100);
            cue2.align = settings.get("align", center);
            var position = settings.get("position", "auto");
            if (position === "auto" && defaults.position === 50) {
              position = cue2.align === "start" || cue2.align === "left" ? 0 : cue2.align === "end" || cue2.align === "right" ? 100 : 50;
            }
            cue2.position = position;
          }
          function skipWhitespace() {
            input = input.replace(/^\s+/, "");
          }
          skipWhitespace();
          cue.startTime = consumeTimeStamp();
          skipWhitespace();
          if (input.substr(0, 3) !== "-->") {
            throw new Error("Malformed time stamp (time stamps must be separated by '-->'): " + oInput);
          }
          input = input.substr(3);
          skipWhitespace();
          cue.endTime = consumeTimeStamp();
          skipWhitespace();
          consumeCueSettings(input, cue);
        }
        function fixLineBreaks(input) {
          return input.replace(/<br(?: \/)?>/gi, "\n");
        }
        var VTTParser = /* @__PURE__ */ function() {
          function VTTParser2() {
            this.state = "INITIAL";
            this.buffer = "";
            this.decoder = new StringDecoder();
            this.regionList = [];
            this.cue = null;
            this.oncue = void 0;
            this.onparsingerror = void 0;
            this.onflush = void 0;
          }
          var _proto3 = VTTParser2.prototype;
          _proto3.parse = function parse(data) {
            var _this = this;
            if (data) {
              _this.buffer += _this.decoder.decode(data, {
                stream: true
              });
            }
            function collectNextLine() {
              var buffer = _this.buffer;
              var pos = 0;
              buffer = fixLineBreaks(buffer);
              while (pos < buffer.length && buffer[pos] !== "\r" && buffer[pos] !== "\n") {
                ++pos;
              }
              var line2 = buffer.substr(0, pos);
              if (buffer[pos] === "\r") {
                ++pos;
              }
              if (buffer[pos] === "\n") {
                ++pos;
              }
              _this.buffer = buffer.substr(pos);
              return line2;
            }
            function parseHeader(input) {
              parseOptions(input, function(k, v) {
              }, /:/);
            }
            try {
              var line = "";
              if (_this.state === "INITIAL") {
                if (!/\r\n|\n/.test(_this.buffer)) {
                  return this;
                }
                line = collectNextLine();
                var m = line.match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                if (!m || !m[0]) {
                  throw new Error("Malformed WebVTT signature.");
                }
                _this.state = "HEADER";
              }
              var alreadyCollectedLine = false;
              while (_this.buffer) {
                if (!/\r\n|\n/.test(_this.buffer)) {
                  return this;
                }
                if (!alreadyCollectedLine) {
                  line = collectNextLine();
                } else {
                  alreadyCollectedLine = false;
                }
                switch (_this.state) {
                  case "HEADER":
                    if (/:/.test(line)) {
                      parseHeader(line);
                    } else if (!line) {
                      _this.state = "ID";
                    }
                    continue;
                  case "NOTE":
                    if (!line) {
                      _this.state = "ID";
                    }
                    continue;
                  case "ID":
                    if (/^NOTE($|[ \t])/.test(line)) {
                      _this.state = "NOTE";
                      break;
                    }
                    if (!line) {
                      continue;
                    }
                    _this.cue = new _vttcue__WEBPACK_IMPORTED_MODULE_0__["default"](0, 0, "");
                    _this.state = "CUE";
                    if (line.indexOf("-->") === -1) {
                      _this.cue.id = line;
                      continue;
                    }
                  case "CUE":
                    if (!_this.cue) {
                      _this.state = "BADCUE";
                      continue;
                    }
                    try {
                      parseCue(line, _this.cue, _this.regionList);
                    } catch (e) {
                      _this.cue = null;
                      _this.state = "BADCUE";
                      continue;
                    }
                    _this.state = "CUETEXT";
                    continue;
                  case "CUETEXT":
                    {
                      var hasSubstring = line.indexOf("-->") !== -1;
                      if (!line || hasSubstring && (alreadyCollectedLine = true)) {
                        if (_this.oncue && _this.cue) {
                          _this.oncue(_this.cue);
                        }
                        _this.cue = null;
                        _this.state = "ID";
                        continue;
                      }
                      if (_this.cue === null) {
                        continue;
                      }
                      if (_this.cue.text) {
                        _this.cue.text += "\n";
                      }
                      _this.cue.text += line;
                    }
                    continue;
                  case "BADCUE":
                    if (!line) {
                      _this.state = "ID";
                    }
                }
              }
            } catch (e) {
              if (_this.state === "CUETEXT" && _this.cue && _this.oncue) {
                _this.oncue(_this.cue);
              }
              _this.cue = null;
              _this.state = _this.state === "INITIAL" ? "BADWEBVTT" : "BADCUE";
            }
            return this;
          };
          _proto3.flush = function flush() {
            var _this = this;
            try {
              if (_this.cue || _this.state === "HEADER") {
                _this.buffer += "\n\n";
                _this.parse();
              }
              if (_this.state === "INITIAL" || _this.state === "BADWEBVTT") {
                throw new Error("Malformed WebVTT signature.");
              }
            } catch (e) {
              if (_this.onparsingerror) {
                _this.onparsingerror(e);
              }
            }
            if (_this.onflush) {
              _this.onflush();
            }
            return this;
          };
          return VTTParser2;
        }();
      },
      "./src/utils/webvtt-parser.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "generateCueId", function() {
          return generateCueId;
        });
        __webpack_require__.d(__webpack_exports__, "parseWebVTT", function() {
          return parseWebVTT;
        });
        var _home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/polyfills/number.ts");
        var _vttparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/utils/vttparser.ts");
        var _demux_id3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./src/demux/id3.ts");
        var _timescale_conversion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./src/utils/timescale-conversion.ts");
        var _remux_mp4_remuxer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./src/remux/mp4-remuxer.ts");
        var LINEBREAKS = /\r\n|\n\r|\n|\r/g;
        var startsWith = function startsWith2(inputString, searchString, position) {
          if (position === void 0) {
            position = 0;
          }
          return inputString.substr(position, searchString.length) === searchString;
        };
        var cueString2millis = function cueString2millis2(timeString) {
          var ts = parseInt(timeString.substr(-3));
          var secs = parseInt(timeString.substr(-6, 2));
          var mins = parseInt(timeString.substr(-9, 2));
          var hours = timeString.length > 9 ? parseInt(timeString.substr(0, timeString.indexOf(":"))) : 0;
          if (!Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(ts) || !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(secs) || !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(mins) || !Object(_home_runner_work_hls_js_hls_js_src_polyfills_number__WEBPACK_IMPORTED_MODULE_0__["isFiniteNumber"])(hours)) {
            throw Error("Malformed X-TIMESTAMP-MAP: Local:" + timeString);
          }
          ts += 1e3 * secs;
          ts += 60 * 1e3 * mins;
          ts += 60 * 60 * 1e3 * hours;
          return ts;
        };
        var hash = function hash2(text) {
          var hash3 = 5381;
          var i = text.length;
          while (i) {
            hash3 = hash3 * 33 ^ text.charCodeAt(--i);
          }
          return (hash3 >>> 0).toString();
        };
        function generateCueId(startTime, endTime, text) {
          return hash(startTime.toString()) + hash(endTime.toString()) + hash(text);
        }
        var calculateOffset = function calculateOffset2(vttCCs, cc, presentationTime) {
          var currCC = vttCCs[cc];
          var prevCC = vttCCs[currCC.prevCC];
          if (!prevCC || !prevCC.new && currCC.new) {
            vttCCs.ccOffset = vttCCs.presentationOffset = currCC.start;
            currCC.new = false;
            return;
          }
          while ((_prevCC = prevCC) !== null && _prevCC !== void 0 && _prevCC.new) {
            var _prevCC;
            vttCCs.ccOffset += currCC.start - prevCC.start;
            currCC.new = false;
            currCC = prevCC;
            prevCC = vttCCs[currCC.prevCC];
          }
          vttCCs.presentationOffset = presentationTime;
        };
        function parseWebVTT(vttByteArray, initPTS, timescale, vttCCs, cc, timeOffset, callBack, errorCallBack) {
          var parser = new _vttparser__WEBPACK_IMPORTED_MODULE_1__["VTTParser"]();
          var vttLines = Object(_demux_id3__WEBPACK_IMPORTED_MODULE_2__["utf8ArrayToStr"])(new Uint8Array(vttByteArray)).trim().replace(LINEBREAKS, "\n").split("\n");
          var cues = [];
          var initPTS90Hz = Object(_timescale_conversion__WEBPACK_IMPORTED_MODULE_3__["toMpegTsClockFromTimescale"])(initPTS, timescale);
          var cueTime = "00:00.000";
          var timestampMapMPEGTS = 0;
          var timestampMapLOCAL = 0;
          var parsingError;
          var inHeader = true;
          var timestampMap = false;
          parser.oncue = function(cue) {
            var currCC = vttCCs[cc];
            var cueOffset = vttCCs.ccOffset;
            var webVttMpegTsMapOffset = (timestampMapMPEGTS - initPTS90Hz) / 9e4;
            if (currCC !== null && currCC !== void 0 && currCC.new) {
              if (timestampMapLOCAL !== void 0) {
                cueOffset = vttCCs.ccOffset = currCC.start;
              } else {
                calculateOffset(vttCCs, cc, webVttMpegTsMapOffset);
              }
            }
            if (webVttMpegTsMapOffset) {
              cueOffset = webVttMpegTsMapOffset - vttCCs.presentationOffset;
            }
            if (timestampMap) {
              var duration = cue.endTime - cue.startTime;
              var startTime = Object(_remux_mp4_remuxer__WEBPACK_IMPORTED_MODULE_4__["normalizePts"])((cue.startTime + cueOffset - timestampMapLOCAL) * 9e4, timeOffset * 9e4) / 9e4;
              cue.startTime = startTime;
              cue.endTime = startTime + duration;
            }
            var text = cue.text.trim();
            cue.text = decodeURIComponent(encodeURIComponent(text));
            if (!cue.id) {
              cue.id = generateCueId(cue.startTime, cue.endTime, text);
            }
            if (cue.endTime > 0) {
              cues.push(cue);
            }
          };
          parser.onparsingerror = function(error) {
            parsingError = error;
          };
          parser.onflush = function() {
            if (parsingError) {
              errorCallBack(parsingError);
              return;
            }
            callBack(cues);
          };
          vttLines.forEach(function(line) {
            if (inHeader) {
              if (startsWith(line, "X-TIMESTAMP-MAP=")) {
                inHeader = false;
                timestampMap = true;
                line.substr(16).split(",").forEach(function(timestamp) {
                  if (startsWith(timestamp, "LOCAL:")) {
                    cueTime = timestamp.substr(6);
                  } else if (startsWith(timestamp, "MPEGTS:")) {
                    timestampMapMPEGTS = parseInt(timestamp.substr(7));
                  }
                });
                try {
                  timestampMapLOCAL = cueString2millis(cueTime) / 1e3;
                } catch (error) {
                  timestampMap = false;
                  parsingError = error;
                }
                return;
              } else if (line === "") {
                inHeader = false;
              }
            }
            parser.parse(line + "\n");
          });
          parser.flush();
        }
      },
      "./src/utils/xhr-loader.ts": function(module2, __webpack_exports__, __webpack_require__) {
        __webpack_require__.r(__webpack_exports__);
        var _utils_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/utils/logger.ts");
        var _loader_load_stats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./src/loader/load-stats.ts");
        var AGE_HEADER_LINE_REGEX = /^age:\s*[\d.]+\s*$/m;
        var XhrLoader = /* @__PURE__ */ function() {
          function XhrLoader2(config) {
            this.xhrSetup = void 0;
            this.requestTimeout = void 0;
            this.retryTimeout = void 0;
            this.retryDelay = void 0;
            this.config = null;
            this.callbacks = null;
            this.context = void 0;
            this.loader = null;
            this.stats = void 0;
            this.xhrSetup = config ? config.xhrSetup : null;
            this.stats = new _loader_load_stats__WEBPACK_IMPORTED_MODULE_1__["LoadStats"]();
            this.retryDelay = 0;
          }
          var _proto = XhrLoader2.prototype;
          _proto.destroy = function destroy() {
            this.callbacks = null;
            this.abortInternal();
            this.loader = null;
            this.config = null;
          };
          _proto.abortInternal = function abortInternal() {
            var loader = this.loader;
            self.clearTimeout(this.requestTimeout);
            self.clearTimeout(this.retryTimeout);
            if (loader) {
              loader.onreadystatechange = null;
              loader.onprogress = null;
              if (loader.readyState !== 4) {
                this.stats.aborted = true;
                loader.abort();
              }
            }
          };
          _proto.abort = function abort() {
            var _this$callbacks;
            this.abortInternal();
            if ((_this$callbacks = this.callbacks) !== null && _this$callbacks !== void 0 && _this$callbacks.onAbort) {
              this.callbacks.onAbort(this.stats, this.context, this.loader);
            }
          };
          _proto.load = function load(context, config, callbacks) {
            if (this.stats.loading.start) {
              throw new Error("Loader can only be used once.");
            }
            this.stats.loading.start = self.performance.now();
            this.context = context;
            this.config = config;
            this.callbacks = callbacks;
            this.retryDelay = config.retryDelay;
            this.loadInternal();
          };
          _proto.loadInternal = function loadInternal() {
            var config = this.config, context = this.context;
            if (!config) {
              return;
            }
            var xhr = this.loader = new self.XMLHttpRequest();
            var stats = this.stats;
            stats.loading.first = 0;
            stats.loaded = 0;
            var xhrSetup = this.xhrSetup;
            try {
              if (xhrSetup) {
                try {
                  xhrSetup(xhr, context.url);
                } catch (e) {
                  xhr.open("GET", context.url, true);
                  xhrSetup(xhr, context.url);
                }
              }
              if (!xhr.readyState) {
                xhr.open("GET", context.url, true);
              }
              var headers = this.context.headers;
              if (headers) {
                for (var header in headers) {
                  xhr.setRequestHeader(header, headers[header]);
                }
              }
            } catch (e) {
              this.callbacks.onError({
                code: xhr.status,
                text: e.message
              }, context, xhr);
              return;
            }
            if (context.rangeEnd) {
              xhr.setRequestHeader("Range", "bytes=" + context.rangeStart + "-" + (context.rangeEnd - 1));
            }
            xhr.onreadystatechange = this.readystatechange.bind(this);
            xhr.onprogress = this.loadprogress.bind(this);
            xhr.responseType = context.responseType;
            self.clearTimeout(this.requestTimeout);
            this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), config.timeout);
            xhr.send();
          };
          _proto.readystatechange = function readystatechange() {
            var context = this.context, xhr = this.loader, stats = this.stats;
            if (!context || !xhr) {
              return;
            }
            var readyState = xhr.readyState;
            var config = this.config;
            if (stats.aborted) {
              return;
            }
            if (readyState >= 2) {
              self.clearTimeout(this.requestTimeout);
              if (stats.loading.first === 0) {
                stats.loading.first = Math.max(self.performance.now(), stats.loading.start);
              }
              if (readyState === 4) {
                xhr.onreadystatechange = null;
                xhr.onprogress = null;
                var status = xhr.status;
                if (status >= 200 && status < 300) {
                  stats.loading.end = Math.max(self.performance.now(), stats.loading.first);
                  var data;
                  var len;
                  if (context.responseType === "arraybuffer") {
                    data = xhr.response;
                    len = data.byteLength;
                  } else {
                    data = xhr.responseText;
                    len = data.length;
                  }
                  stats.loaded = stats.total = len;
                  if (!this.callbacks) {
                    return;
                  }
                  var onProgress = this.callbacks.onProgress;
                  if (onProgress) {
                    onProgress(stats, context, data, xhr);
                  }
                  if (!this.callbacks) {
                    return;
                  }
                  var response = {
                    url: xhr.responseURL,
                    data
                  };
                  this.callbacks.onSuccess(response, stats, context, xhr);
                } else {
                  if (stats.retry >= config.maxRetry || status >= 400 && status < 499) {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].error(status + " while loading " + context.url);
                    this.callbacks.onError({
                      code: status,
                      text: xhr.statusText
                    }, context, xhr);
                  } else {
                    _utils_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn(status + " while loading " + context.url + ", retrying in " + this.retryDelay + "...");
                    this.abortInternal();
                    this.loader = null;
                    self.clearTimeout(this.retryTimeout);
                    this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay);
                    this.retryDelay = Math.min(2 * this.retryDelay, config.maxRetryDelay);
                    stats.retry++;
                  }
                }
              } else {
                self.clearTimeout(this.requestTimeout);
                this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), config.timeout);
              }
            }
          };
          _proto.loadtimeout = function loadtimeout() {
            _utils_logger__WEBPACK_IMPORTED_MODULE_0__["logger"].warn("timeout while loading " + this.context.url);
            var callbacks = this.callbacks;
            if (callbacks) {
              this.abortInternal();
              callbacks.onTimeout(this.stats, this.context, this.loader);
            }
          };
          _proto.loadprogress = function loadprogress(event) {
            var stats = this.stats;
            stats.loaded = event.loaded;
            if (event.lengthComputable) {
              stats.total = event.total;
            }
          };
          _proto.getCacheAge = function getCacheAge() {
            var result = null;
            if (this.loader && AGE_HEADER_LINE_REGEX.test(this.loader.getAllResponseHeaders())) {
              var ageHeader = this.loader.getResponseHeader("age");
              result = ageHeader ? parseFloat(ageHeader) : null;
            }
            return result;
          };
          return XhrLoader2;
        }();
        __webpack_exports__["default"] = XhrLoader;
      }
    })["default"];
  });
})(hls);
var Hls2 = /* @__PURE__ */ getDefaultExportFromCjs(hls.exports);
var dIcon_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const __default__$2 = {
  name: "d-icon"
};
function setup$2(__props) {
  const props = __props;
  const iconSize = computed(() => {
    let size = /^\d+$/.test(props.size) ? props.size + "px" : props.size;
    return { fontSize: size };
  });
  return (_ctx, _cache) => {
    return openBlock(), createElementBlock("i", {
      class: normalizeClass(["d-icon iconfont", __props.icon]),
      style: normalizeStyle(unref(iconSize))
    }, null, 6);
  };
}
const _sfc_main$7 = /* @__PURE__ */ Object.assign(__default__$2, {
  props: {
    icon: String,
    size: [Number, String]
  },
  setup: setup$2
});
var DIcon = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-0c690e66"]]);
var dPlayerTop_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$6 = { class: "d-player-top" };
const _hoisted_2$5 = { class: "top-title" };
const _hoisted_3$4 = { class: "top-title" };
const _sfc_main$6 = {
  props: {
    title: {
      default: ""
    }
  },
  setup(__props) {
    Date.prototype.format = function(fmt) {
      let o = {
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds()
      };
      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
          fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
      }
      return fmt;
    };
    let currTime = ref("00:00:00");
    currTime.value = new Date().format("hh:mm:ss");
    let timeout = null;
    timeout = setInterval(() => {
      currTime.value = new Date().format("hh:mm:ss");
    }, 1e3);
    onUnmounted(() => {
      clearInterval(timeout);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [
        createElementVNode("p", _hoisted_2$5, toDisplayString(__props.title || ""), 1),
        createElementVNode("p", _hoisted_3$4, toDisplayString(unref(currTime)), 1)
      ]);
    };
  }
};
var DPlayerTop = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-4cb76d59"]]);
var dStatus_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$5 = { class: "d-status" };
const _hoisted_2$4 = { class: "d-flex-center" };
const _hoisted_3$3 = { class: "d-flex-center" };
const _hoisted_4$3 = /* @__PURE__ */ createTextVNode("5X\u901F\u64AD\u653E\u4E2D ");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  props: ["state"],
  setup(__props) {
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", _hoisted_1$5, [
        withDirectives(createElementVNode("li", _hoisted_2$4, [
          createVNode(DIcon, {
            size: "18",
            class: "d-status-icon",
            icon: `icon-volume-${__props.state.volume == 0 ? "mute" : __props.state.volume > 0.5 ? "up" : "down"}`
          }, null, 8, ["icon"]),
          createTextVNode(" " + toDisplayString(~~(__props.state.volume * 100)) + "% ", 1)
        ], 512), [
          [vShow, __props.state.handleType == "volume"]
        ]),
        withDirectives(createElementVNode("li", _hoisted_3$3, [
          createVNode(DIcon, {
            size: "12",
            icon: "icon-play"
          }),
          createVNode(DIcon, {
            size: "12",
            icon: "icon-play",
            style: { "margin-right": "5px" }
          }),
          _hoisted_4$3
        ], 512), [
          [vShow, __props.state.handleType == "playbackRate" || __props.state.isMultiplesPlay]
        ])
      ], 512)), [
        [vShow, __props.state.handleType || __props.state.isMultiplesPlay]
      ]);
    };
  }
});
var DStatus = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-ac2469ec"]]);
var dSwitch_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$3 = (n) => (pushScopeId("data-v-385f7870"), n = n(), popScopeId(), n);
const _hoisted_1$4 = ["checked", "true-value", "false-value"];
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$3(() => /* @__PURE__ */ createElementVNode("span", { class: "d-switch_action" }, null, -1));
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: {
      type: [Number, String, Boolean]
    },
    width: {
      type: String,
      default: "40px"
    },
    trueValue: {
      type: [Number, String, Boolean],
      default: true
    },
    falseValue: {
      type: [Number, String, Boolean],
      default: true
    },
    activeColor: {
      type: [String],
      default: "#409EFF"
    }
  },
  emits: ["update:modelValue", "change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    useCssVars((_ctx) => ({
      "014e5dc0": __props.width,
      "e4e32852": __props.activeColor
    }));
    const input = ref(null);
    const checked = computed(() => {
      return props.modelValue === props.trueValue;
    });
    const handleInput = () => {
      nextTick(() => {
        const val = input.value.checked;
        emits("update:modelValue", val);
        emits("change", val);
      });
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["d-switch", { "is-checked": unref(checked) }])
      }, [
        createElementVNode("input", {
          class: "d-switch__input",
          ref: (_value, _refs) => {
            _refs["input"] = _value;
            input.value = _value;
          },
          type: "checkbox",
          checked: unref(checked),
          onChange: handleInput,
          "true-value": __props.trueValue,
          "false-value": __props.falseValue
        }, null, 40, _hoisted_1$4),
        _hoisted_2$3
      ], 2);
    };
  }
});
var DSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-385f7870"]]);
var dLoading_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-b2384226"), n = n(), popScopeId(), n);
const _hoisted_1$3 = { key: 0 };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "rotating iconfont icon-loading f50" }, null, -1));
const _hoisted_3$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "rotating iconfont icon-loading f50" }, null, -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("p", null, "\u6B63\u5728\u7F13\u51B2...", -1));
const _hoisted_5$2 = [
  _hoisted_3$2,
  _hoisted_4$2
];
const _hoisted_6$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "iconfont icon-replay f24 mr5" }, null, -1));
const _hoisted_7$2 = /* @__PURE__ */ createTextVNode("\u91CD\u65B0\u64AD\u653E ");
const _hoisted_8$2 = [
  _hoisted_6$2,
  _hoisted_7$2
];
const _hoisted_9$2 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createElementVNode("i", { class: "iconfont icon-replay f24 mr5" }, null, -1));
const _hoisted_10$2 = /* @__PURE__ */ createTextVNode("\u8BF7\u6C42\u9519\u8BEF ");
const _hoisted_11$2 = [
  _hoisted_9$2,
  _hoisted_10$2
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    loadType: String,
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const { proxy } = getCurrentInstance();
    const LOAD_TYPE = ["loadstart", "waiting", "ended", "error", "stalled"];
    const replayHandle = () => {
      proxy.$parent.play();
    };
    const loadingStyle = computed(() => {
      let style = "background: rgba(0, 0, 0, .1);z-index:1";
      if (props.loadType == "loadstart") {
        style = "background: rgba(0, 0, 0, 1);;z-index:3";
      }
      return style;
    });
    return (_ctx, _cache) => {
      return withDirectives((openBlock(), createElementBlock("div", {
        class: "d-loading",
        style: normalizeStyle(unref(loadingStyle))
      }, [
        createElementVNode("div", null, [
          __props.loadType == "loadstart" ? (openBlock(), createElementBlock("span", _hoisted_1$3, [
            _hoisted_2$2,
            createElementVNode("p", null, toDisplayString(__props.text), 1)
          ])) : createCommentVNode("", true),
          withDirectives(createElementVNode("span", null, _hoisted_5$2, 512), [
            [vShow, __props.loadType == "waiting"]
          ]),
          withDirectives(createElementVNode("span", null, [
            createElementVNode("p", {
              onClick: replayHandle,
              class: "d-flex-x d-pointer"
            }, _hoisted_8$2)
          ], 512), [
            [vShow, __props.loadType == "ended"]
          ]),
          withDirectives(createElementVNode("span", null, [
            createElementVNode("p", {
              onClick: replayHandle,
              class: "d-flex-x d-pointer"
            }, _hoisted_11$2)
          ], 512), [
            [vShow, __props.loadType == "error" || __props.loadType == "stalled"]
          ])
        ])
      ], 4)), [
        [vShow, LOAD_TYPE.includes(__props.loadType)]
      ]);
    };
  }
});
var DLoading = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-b2384226"]]);
const on = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.addEventListener(event, handler, useCapture);
  }
};
const off = function(element, event, handler, useCapture = false) {
  if (element && event && handler) {
    element.removeEventListener(event, handler, useCapture);
  }
};
var dSlider_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$2 = ["onMousedown"];
const __default__$1 = {
  name: "DSlider"
};
function setup$1(__props, { emit: emits }) {
  const props = __props;
  useCssVars((_ctx) => ({
    "1a7cd153": __props.size
  }));
  const refSlider = ref(null);
  const refTips = ref(null);
  const state = reactive({
    dragging: false,
    hoverPosition: 0,
    hoverTipsLeft: "50%"
  });
  const sliderBarStyle = computed(() => {
    let value = props.modelValue < 0 ? 0 : props.modelValue > 1 ? 1 : props.modelValue;
    return props.vertical ? `height:${value * 100}%` : `width:${value * 100}%`;
  });
  const preloadStyle = computed(() => {
    let value = props.preload < 0 ? 0 : props.preload > 1 ? 1 : props.preload;
    return props.vertical ? `height:${value * 100}%` : `width:${value * 100}%`;
  });
  const hoverStyle = computed(() => {
    let value = state.hoverPosition < 0 ? 0 : state.hoverPosition > 1 ? 1 : state.hoverPosition;
    return props.vertical ? `bottom:${value * 100}%` : `left:${value * 100}%`;
  });
  const contextmenuHandle = (ev) => {
    ev.preventDefault();
  };
  const mouseDownHandle = (ev) => {
    if (props.disabled)
      return;
    ev.preventDefault();
    state.dragging = true;
    setPosition(ev);
    on(window, "mousemove", onDragging);
    on(window, "touchmove", onDragging);
    on(window, "mouseup", onDragEnd);
    on(window, "touchend", onDragEnd);
  };
  const mousemoveHandle = (ev) => {
    if (!props.hover)
      return;
    let val = getPosition(ev);
    emits("onMousemove", ev, val);
    state.hoverPosition = val;
    if (props.vertical)
      return;
    let refSliderEl = refSlider.value;
    let refTipsWidth = refTips.value.clientWidth / 2;
    let movePositon = ev.clientX - refSliderEl.getBoundingClientRect().left;
    if (movePositon < refTipsWidth) {
      state.hoverTipsLeft = refTipsWidth - movePositon + "px";
    } else if (refSliderEl.clientWidth - movePositon < refTipsWidth) {
      state.hoverTipsLeft = refSliderEl.clientWidth - movePositon - refTipsWidth + "px";
    } else {
      state.hoverTipsLeft = "50%";
    }
  };
  const setPosition = (ev) => {
    let value = getPosition(ev);
    emits("update:modelValue", value);
    emits("change", ev, value);
  };
  const getPosition = (ev) => {
    let refSliderEl = refSlider.value;
    let value = 0;
    if (props.vertical) {
      let clientHeight = refSliderEl.clientHeight;
      value = (refSliderEl.getBoundingClientRect().bottom - ev.clientY) / clientHeight;
    } else {
      value = (ev.clientX - refSliderEl.getBoundingClientRect().left) / refSliderEl.clientWidth;
    }
    return value < 0 ? 0 : value > 1 ? 1 : value;
  };
  const onDragging = (ev) => {
    setPosition(ev);
  };
  const onDragEnd = (ev) => {
    if (state.dragging) {
      off(window, "mousemove", onDragging);
      off(window, "touchmove", onDragging);
      off(window, "mouseup", onDragEnd);
      off(window, "touchend", onDragEnd);
      off(window, "contextmenu", onDragEnd);
      setTimeout(() => {
        state.dragging = false;
      }, 0);
    }
  };
  return (_ctx, _cache) => {
    return openBlock(), createElementBlock("div", {
      ref: (_value, _refs) => {
        _refs["refSlider"] = _value;
        refSlider.value = _value;
      },
      class: normalizeClass(["d-slider", { "is-vertical": props.vertical }]),
      onMousedown: withModifiers(mouseDownHandle, ["stop"]),
      onContextmenu: contextmenuHandle
    }, [
      createElementVNode("div", {
        class: "d-slider__runway",
        onMousemove: mousemoveHandle
      }, [
        withDirectives(createElementVNode("div", {
          class: "d-slider__cursor",
          style: normalizeStyle(unref(hoverStyle))
        }, [
          withDirectives(createElementVNode("div", {
            class: "d-slider__tips",
            ref: (_value, _refs) => {
              _refs["refTips"] = _value;
              refTips.value = _value;
            },
            style: normalizeStyle({ left: unref(state).hoverTipsLeft })
          }, toDisplayString(props.hoverText), 5), [
            [vShow, props.hoverText]
          ])
        ], 4), [
          [vShow, props.hover]
        ]),
        createElementVNode("div", {
          class: "d-slider__preload",
          style: normalizeStyle(unref(preloadStyle))
        }, null, 4),
        createElementVNode("div", {
          class: "d-slider__bar",
          style: normalizeStyle(unref(sliderBarStyle))
        }, null, 4)
      ], 32)
    ], 42, _hoisted_1$2);
  };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  props: {
    modelValue: {
      required: true,
      type: Number,
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    },
    vertical: {
      type: Boolean,
      default: false
    },
    hover: { type: Boolean, default: true },
    hoverText: { type: String, default: "" },
    preload: { type: Number, default: 0 },
    size: {
      type: String,
      default: "10px"
    }
  },
  emits: ["update:modelValue", "change", "onMousemove"],
  setup: setup$1
}));
var DSlider = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-23288052"]]);
const version = "1.3.1-beta.6";
var dContextmenu_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId$1 = (n) => (pushScopeId("data-v-1475e6f9"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  key: 0,
  class: "d-player-dialog"
};
const _hoisted_2$1 = { class: "d-player-dialog-body" };
const _hoisted_3$1 = { class: "d-player-dialog-title" };
const _hoisted_4$1 = { class: "d-player-hotkey-panel" };
const _hoisted_5$1 = { class: "d-player-filter-panel" };
const _hoisted_6$1 = { class: "d-player-filter-panel-item" };
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", null, "\u9971\u548C\u5EA6", -1));
const _hoisted_8$1 = { class: "d-player-filter-panel-item" };
const _hoisted_9$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", null, "\u4EAE\u5EA6", -1));
const _hoisted_10$1 = { class: "d-player-filter-panel-item" };
const _hoisted_11$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("span", null, "\u5BF9\u6BD4\u5EA6", -1));
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  setup(__props) {
    const state = reactive({
      show: false,
      dialogType: "",
      dialogTitle: "",
      version,
      mouseX: 0,
      mouseY: 0
    });
    const menuList = [
      { label: "\u89C6\u9891\u8272\u5F69\u8C03\u6574", key: "filter" },
      { label: "\u5FEB\u6377\u952E\u8BF4\u660E", key: "hotkey" },
      { label: "\u590D\u5236\u89C6\u9891\u7F51\u5740", key: "copy" }
    ];
    const hotkeyList = [
      { key: "Space", label: "\u64AD\u653E/\u6682\u505C" },
      { key: "\u2192", label: "\u5355\u6B21\u5FEB\u8FDB10s\uFF0C\u957F\u63095\u500D\u901F\u64AD\u653E" },
      { key: "\u2190", label: "\u5FEB\u90005s" },
      { key: "\u2191", label: "\u97F3\u91CF\u589E\u52A010%" },
      { key: "\u2193", label: "\u97F3\u91CF\u589E\u52A0\u964D\u4F4E10%" },
      { key: "Esc", label: "\u9000\u51FA\u5168\u5C4F/\u9000\u51FA\u7F51\u9875\u5168\u5C4F" },
      { key: "F", label: "\u5168\u5C4F/\u9000\u51FA\u5168\u5C4F" }
    ];
    const filter = reactive({
      saturate: 0.392,
      brightness: 0.392,
      contrast: 0.392
    });
    computed(() => ({
      left: state.mouseX + "px",
      top: state.mouseY + "px"
    }));
    watch(filter, (val) => {
      let dPlayerVideoMain = document.querySelector("#dPlayerVideo");
      let saturate = (val.saturate * 2.55).toFixed(2);
      let brightness = (val.brightness * 2.55).toFixed(2);
      let contrast = (val.contrast * 2.55).toFixed(2);
      dPlayerVideoMain.style.filter = `saturate(${saturate}) brightness(${brightness}) contrast(${contrast})`;
    });
    const filterReset = () => {
      filter.saturate = 0.392;
      filter.brightness = 0.392;
      filter.contrast = 0.392;
    };
    const keydownHandle = (ev) => {
      if (ev.key == "Escape") {
        contextmenuHide(0);
      }
    };
    const contextmenuShow = (ev) => {
      ev.preventDefault();
      on(window, "keydown", keydownHandle);
      on(window, "click", contextmenuHide);
      let refPlayerWrap = document.querySelector("#refPlayerWrap");
      let clientWidth = refPlayerWrap.clientWidth;
      refPlayerWrap.clientHeight;
      state.mouseX = ev.clientX - refPlayerWrap.getBoundingClientRect().left;
      if (clientWidth - state.mouseX < 130) {
        state.mouseX = state.mouseX + (clientWidth - state.mouseX - 130);
      }
      state.mouseY = ev.clientY - refPlayerWrap.getBoundingClientRect().top;
      state.show = true;
    };
    const contextmenuHide = (ev) => {
      let tagName = ev.path[0].tagName == "LI";
      let keycode = ev.path[0].attributes.dplayerKeyCode && ev.path[0].attributes.dplayerKeyCode.value;
      let hotKeyArr = menuList.map((item) => item.key);
      if (tagName && hotKeyArr.includes(keycode)) {
        state.dialogTitle = ev.path[0].innerText;
        state.dialogType = keycode;
        if (keycode == "copy") {
          let copyText = document.querySelector(".d-player-copyText");
          copyText.value = window.location.href;
          copyText.select();
          document.execCommand("copy");
          state.dialogType = "";
        } else if (keycode == "version") {
          state.dialogType = "";
        }
      }
      state.show = false;
      off(window, "keydown", keydownHandle);
      off(window, "click", contextmenuHide);
    };
    onMounted(() => {
      let refPlayerWrap = document.querySelector("#refPlayerWrap");
      off(window, "keydown", keydownHandle);
      off(window, "click", contextmenuHide);
      off(refPlayerWrap, "contextmenu", contextmenuShow);
      on(refPlayerWrap, "contextmenu", contextmenuShow);
    });
    onUnmounted(() => {
      let refPlayerWrap = document.querySelector("#refPlayerWrap");
      off(window, "keydown", keydownHandle);
      off(window, "click", contextmenuHide);
      off(refPlayerWrap, "contextmenu", contextmenuShow);
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(Transition, { name: "d-fade-in" }, {
          default: withCtx(() => [
            unref(state).dialogType ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
              createElementVNode("div", _hoisted_2$1, [
                createElementVNode("h5", _hoisted_3$1, [
                  createTextVNode(toDisplayString(unref(state).dialogTitle) + " ", 1),
                  createElementVNode("i", {
                    onClick: _cache[0] || (_cache[0] = ($event) => unref(state).dialogType = false),
                    class: "icon icon-close"
                  }, "X")
                ]),
                withDirectives(createElementVNode("ul", _hoisted_4$1, [
                  (openBlock(), createElementBlock(Fragment, null, renderList(hotkeyList, (item) => {
                    return createElementVNode("li", {
                      class: "d-player-hotkey-panel-item",
                      key: item.key
                    }, [
                      createElementVNode("span", null, toDisplayString(item.key), 1),
                      createElementVNode("span", null, toDisplayString(item.label), 1)
                    ]);
                  }), 64))
                ], 512), [
                  [vShow, unref(state).dialogType == "hotkey"]
                ]),
                withDirectives(createElementVNode("ul", _hoisted_5$1, [
                  createElementVNode("li", _hoisted_6$1, [
                    _hoisted_7$1,
                    createVNode(DSlider, {
                      class: "filter-panel-slider",
                      size: "5px",
                      modelValue: unref(filter).saturate,
                      "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(filter).saturate = $event)
                    }, null, 8, ["modelValue"]),
                    createElementVNode("span", null, toDisplayString(Math.round(unref(filter).saturate * 255)), 1)
                  ]),
                  createElementVNode("li", _hoisted_8$1, [
                    _hoisted_9$1,
                    createVNode(DSlider, {
                      class: "filter-panel-slider",
                      size: "5px",
                      modelValue: unref(filter).brightness,
                      "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(filter).brightness = $event)
                    }, null, 8, ["modelValue"]),
                    createElementVNode("span", null, toDisplayString(Math.round(unref(filter).brightness * 255)), 1)
                  ]),
                  createElementVNode("li", _hoisted_10$1, [
                    _hoisted_11$1,
                    createVNode(DSlider, {
                      class: "filter-panel-slider",
                      size: "5px",
                      modelValue: unref(filter).contrast,
                      "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(filter).contrast = $event)
                    }, null, 8, ["modelValue"]),
                    createElementVNode("span", null, toDisplayString(Math.round(unref(filter).contrast * 255)), 1)
                  ]),
                  createElementVNode("span", {
                    onClick: filterReset,
                    title: "\u91CD\u7F6E",
                    "aria-label": "\u91CD\u7F6E",
                    class: "d-player-filter-reset"
                  }, "\u91CD\u7F6E")
                ], 512), [
                  [vShow, unref(state).dialogType == "filter"]
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 1
        })
      ]);
    };
  }
});
var DContextmenu = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-1475e6f9"]]);
const hexToRgba = (hex) => {
  return `${parseInt("0x" + hex.slice(1, 3))},${parseInt("0x" + hex.slice(3, 5))},${parseInt("0x" + hex.slice(5, 7))}`;
};
const firstUpperCase = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const timeFormat = (time) => {
  let hh = ~~(time / 3600);
  let mm = ~~(time % 3600 / 60);
  let ss = ~~(time % 60);
  hh = hh < 10 ? "0" + hh : hh;
  mm = mm < 10 ? "0" + mm : mm;
  ss = ss < 10 ? "0" + ss : ss;
  return `${hh}:${mm}:${ss}`;
};
const isMobile = !!("ontouchstart" in window);
const toggleFullScreen = (el) => {
  let documentEL = document;
  let isFullscreen = documentEL.webkitIsFullScreen || documentEL.fullscreen;
  if (!isFullscreen) {
    const inFun = el.requestFullscreen || el.webkitRequestFullScreen;
    inFun.call(el);
  } else {
    const exitFun = document.exitFullscreen || documentEL.webkitExitFullScreen;
    exitFun.call(documentEL);
  }
  return !isFullscreen;
};
const requestPictureInPicture = (el) => {
  if (document.pictureInPictureElement) {
    document.exitPictureInPicture().catch((error) => {
      console.log(error, "Video failed to leave Picture-in-Picture mode.");
    });
  } else {
    el.requestPictureInPicture().catch((error) => {
      console.log(error, "Video failed to enter Picture-in-Picture mode.");
    });
  }
};
const videoEmits = [
  "loadstart",
  "play",
  "pause",
  "playing",
  "seeking",
  "seeked",
  "waiting",
  "durationchange",
  "progress",
  "canplay",
  "timeupdate",
  "ended",
  "error",
  "stalled"
];
const defineProps = {
  width: { type: String, default: "800px" },
  height: { type: String, default: "350px" },
  color: { type: String, default: "#409eff" },
  src: { required: true, type: String, default: "" },
  title: { type: String, default: "" },
  type: { type: String, default: "video/mp4" },
  poster: { type: String, default: "" },
  webFullScreen: { type: Boolean, default: false },
  speed: { type: Boolean, default: true },
  currentTime: { type: Number, default: 0 },
  playsinline: { type: Boolean, default: false },
  muted: { type: Boolean, default: false },
  speedRate: {
    type: Array,
    default: () => ["2.0", "1.5", "1.25", "1.0", "0.75"]
  },
  autoPlay: { type: Boolean, default: false },
  loop: { type: Boolean, default: false },
  mirror: { type: Boolean, default: false },
  ligthOff: { type: Boolean, default: false },
  volume: { type: [String, Number], default: 0.3 },
  control: { type: Boolean, default: true },
  controlBtns: {
    type: Array,
    default: [
      "audioTrack",
      "quality",
      "speedRate",
      "volume",
      "setting",
      "pip",
      "pageFullScreen",
      "fullScreen"
    ]
  },
  preload: { type: String, default: "auto" }
};
var main_vue_vue_type_style_index_0_scoped_true_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-325ed447"), n = n(), popScopeId(), n);
const _hoisted_1 = {
  class: "d-player-video",
  id: "dPlayerVideo"
};
const _hoisted_2 = ["controls", "webkit-playsinline", "playsinline", "volume", "muted", "loop", "preload", "src", "poster"];
const _hoisted_3 = { class: "d-player-lightoff" };
const _hoisted_4 = {
  key: 1,
  class: "d-player-state"
};
const _hoisted_5 = { class: "d-play-btn" };
const _hoisted_6 = ["onKeyup", "onKeydown"];
const _hoisted_7 = { class: "d-control-progress" };
const _hoisted_8 = { class: "d-tool-bar" };
const _hoisted_9 = {
  key: 0,
  class: "d-tool-item d-tool-time audioTrack-btn"
};
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("span", { style: { "margin": "0 3px" } }, "/", -1));
const _hoisted_11 = { class: "total-time" };
const _hoisted_12 = { class: "d-tool-bar" };
const _hoisted_13 = {
  key: 0,
  class: "d-tool-item quality-btn"
};
const _hoisted_14 = { class: "d-tool-item-main" };
const _hoisted_15 = {
  class: "speed-main",
  style: { "text-align": "center" }
};
const _hoisted_16 = ["onClick"];
const _hoisted_17 = {
  key: 1,
  class: "d-tool-item speedRate-btn"
};
const _hoisted_18 = { class: "d-tool-item-main" };
const _hoisted_19 = { class: "speed-main" };
const _hoisted_20 = ["onClick"];
const _hoisted_21 = {
  key: 2,
  class: "d-tool-item volume-btn"
};
const _hoisted_22 = {
  class: "d-tool-item-main volume-box",
  style: { "width": "52px" }
};
const _hoisted_23 = { class: "volume-text-size" };
const _hoisted_24 = {
  key: 3,
  class: "d-tool-item setting-btn"
};
const _hoisted_25 = { class: "d-tool-item-main" };
const _hoisted_26 = { class: "speed-main" };
const _hoisted_27 = /* @__PURE__ */ createTextVNode(" \u955C\u50CF\u753B\u9762 ");
const _hoisted_28 = /* @__PURE__ */ createTextVNode(" \u5FAA\u73AF\u64AD\u653E ");
const _hoisted_29 = /* @__PURE__ */ createTextVNode(" \u5173\u706F\u6A21\u5F0F ");
const _hoisted_30 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "d-tool-item-main" }, "\u753B\u4E2D\u753B", -1));
const _hoisted_31 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "d-tool-item-main" }, "\u7F51\u9875\u5168\u5C4F", -1));
const _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "d-tool-item-main" }, "\u5168\u5C4F", -1));
const __default__ = {
  name: "vue3VideoPlay",
  inheritAttrs: false
};
function setup(__props, { expose, emit: emits }) {
  const props = __props;
  useCssVars((_ctx) => ({
    "2c8b44f1": unref(hexToRgbaColor),
    "8ab0ebe4": _ctx.width,
    "ff0a8442": _ctx.height
  }));
  const Hls = new Hls2({ fragLoadingTimeOut: 2e3 });
  const refPlayerWrap = ref(null);
  const refdVideo = ref(null);
  const refPlayerControl = ref(null);
  const refInput = ref(null);
  const state = reactive(__spreadProps(__spreadValues({
    dVideo: null
  }, props), {
    muted: props.muted,
    playBtnState: props.autoPlay ? "pause" : "play",
    loadStateType: "loadstart",
    fullScreen: false,
    handleType: "",
    currentTime: "00:00:00",
    preloadBar: 0,
    totalTime: "00:00:00",
    isVideoHovering: true,
    speedActive: "1.0",
    playProgress: 0,
    isMultiplesPlay: false,
    longPressTimeout: null,
    progressCursorTime: "00:00:00",
    qualityLevels: [],
    currentLevel: 0
  }));
  const compose = (...args) => (value) => args.reverse().reduce((acc, fn) => fn(acc), value);
  const videoEvents = videoEmits.reduce((events, emit) => {
    let name = `on${firstUpperCase(emit)}`;
    events[name] = (ev) => {
      state.loadStateType = emit;
      emits(emit, ev);
    };
    return events;
  }, {});
  videoEvents["onCanplay"] = compose(videoEvents["onCanplay"], () => {
    if (state.playBtnState != "play") {
      state.dVideo.play();
    }
    if (state.autoPlay) {
      state.dVideo.play();
      state.playBtnState = "pause";
    }
  });
  videoEvents["onEnded"] = compose(videoEvents["onEnded"], () => {
    state.playBtnState = "replay";
  });
  videoEvents["onDurationchange"] = (ev) => {
    emits("durationchange", ev);
    if (props.currentTime != 0) {
      state.dVideo.currentTime = props.currentTime;
    }
    videoEvents.onTimeupdate(ev);
  };
  videoEvents["onProgress"] = (ev) => {
    emits("progress", ev);
    let duration = ev.target.duration;
    let length = ev.target.buffered;
    let end = ev.target.buffered.length && ev.target.buffered.end(length - 1);
    state.preloadBar = end / duration;
  };
  videoEvents["onTimeupdate"] = (ev) => {
    emits("timeupdate", ev);
    let duration = ev.duration || ev.target.duration || 0;
    let currentTime = ev.currentTime || ev.target.currentTime;
    state.playProgress = currentTime / duration;
    state.currentTime = timeFormat(currentTime);
    state.totalTime = timeFormat(duration);
  };
  videoEvents["onError"] = compose(videoEvents["onError"], () => {
    state.playBtnState = "replay";
  });
  let attrs = useAttrs();
  for (let emit in attrs) {
    videoEvents[emit] = attrs[emit];
  }
  const hexToRgbaColor = hexToRgba(state.color);
  const clearHandleType = debounce(500, () => {
    state.handleType = "";
  });
  const volumeKeydown = (ev) => {
    ev.preventDefault();
    if (ev.code == "ArrowUp") {
      state.volume = state.volume + 0.1 > 1 ? 1 : state.volume + 0.1;
    } else {
      state.volume = state.volume - 0.1 < 0 ? 0 : state.volume - 0.1;
    }
    state.muted = false;
    state.handleType = "volume";
    clearHandleType();
  };
  const keydownLeft = (ev) => {
    if (!props.speed)
      return;
    state.dVideo.currentTime = state.dVideo.currentTime < 10 ? 0.1 : state.dVideo.currentTime - 10;
    videoEvents.onTimeupdate(state.dVideo);
    playHandle();
  };
  const keypress = (ev) => {
    ev.preventDefault();
    let pressType = ev.type;
    if (ev.key == "ArrowRight") {
      playHandle();
      if (pressType == "keyup") {
        clearTimeout(state.longPressTimeout);
        if (!props.speed && !state.longPressTimeout)
          return;
        if (state.isMultiplesPlay) {
          state.dVideo.playbackRate = state.speedActive;
          state.isMultiplesPlay = false;
        } else {
          state.dVideo.currentTime = state.dVideo.currentTime + 10;
          videoEvents.onTimeupdate(state.dVideo);
        }
      } else if (pressType == "keydown") {
        if (!props.speed)
          return;
        if (state.isMultiplesPlay) {
          clearTimeout(state.longPressTimeout);
        }
        state.longPressTimeout = setTimeout(() => {
          state.isMultiplesPlay = true;
          state.dVideo.playbackRate = 5;
          state.handleType = "playbackRate";
          clearHandleType();
        }, 500);
      }
    }
  };
  const inputFocusHandle = () => {
    if (isMobile)
      return;
    refInput.value.focus();
  };
  const playHandle = () => {
    state.loadStateType = "play";
    state.dVideo.play().catch(() => {
      setTimeout(() => {
        state.playBtnState = "replay";
        state.loadStateType = "error";
      }, 500);
    });
    state.playBtnState = "pause";
  };
  const pauseHandle = () => {
    state.dVideo.pause();
    state.playBtnState = "play";
  };
  const togglePlay = (ev) => {
    if (ev)
      ev.preventDefault();
    if (state.playBtnState == "play" || state.playBtnState == "replay") {
      playHandle();
    } else if (state.playBtnState == "pause") {
      pauseHandle();
    }
  };
  const mutedHandler = () => {
    state.muted = !state.muted;
    if (state.volume == 0) {
      state.volume = 0.05;
    }
  };
  const progressBarChange = (ev, val) => {
    let duration = state.dVideo.duration || state.dVideo.target.duration;
    state.dVideo.currentTime = duration * val;
    if (state.playBtnState == "play") {
      state.dVideo.play();
      state.playBtnState = "pause";
    }
  };
  const onProgressMove = (ev, val) => {
    state.progressCursorTime = timeFormat(state.dVideo.duration * val);
  };
  const hideControl = debounce(2500, () => {
    state.isVideoHovering = false;
  });
  const mouseMovewWarp = (ev) => {
    state.isVideoHovering = true;
    hideControl();
  };
  const qualityLevelsHandle = (row, index) => {
    Hls.currentLevel = index;
    state.currentLevel = index;
  };
  const playbackRate = (row) => {
    state.speedActive = row;
    state.dVideo.playbackRate = row;
  };
  const mirrorChange = (val) => {
    emits("mirrorChange", val, state.dVideo);
  };
  const loopChange = (val) => {
    emits("loopChange", val, state.dVideo);
  };
  const lightOffChange = (val) => {
    emits("lightOffChange", val, state.dVideo);
  };
  const requestPictureInPictureHandle = () => {
    requestPictureInPicture(state.dVideo);
  };
  const toggleFullScreenHandle = () => {
    state.fullScreen = toggleFullScreen(refPlayerWrap.value);
  };
  const init = () => {
    if (state.dVideo.canPlayType(props.type) || state.dVideo.canPlayType("application/vnd.apple.mpegurl")) {
      state.muted = props.autoPlay;
    } else if (Hls2.isSupported()) {
      Hls.detachMedia();
      Hls.attachMedia(state.dVideo);
      Hls.on(Hls2.Events.MEDIA_ATTACHED, () => {
        Hls.loadSource(props.src);
        Hls.on("hlsManifestParsed", (ev, data) => {
          state.currentLevel = data.level;
          state.qualityLevels = data.levels || [];
        });
      });
      Hls.on("hlsLevelSwitching", (ev, data) => {
      });
      Hls.on("hlsLevelSwitched", (ev, data) => {
        state.currentLevel = data.level;
      });
    }
  };
  watch(() => props.src, () => {
    nextTick(() => {
      init();
    });
  }, { immediate: true });
  onMounted(() => {
    state.dVideo = refdVideo;
    inputFocusHandle();
  });
  expose({
    play: playHandle,
    pause: pauseHandle,
    togglePlay
  });
  return (_ctx, _cache) => {
    return openBlock(), createElementBlock("div", {
      ref: (_value, _refs) => {
        _refs["refPlayerWrap"] = _value;
        refPlayerWrap.value = _value;
      },
      id: "refPlayerWrap",
      class: normalizeClass(["d-player-wrap", {
        "web-full-screen": unref(state).webFullScreen,
        "is-lightoff": unref(state).lightOff,
        "d-player-wrap-hover": unref(state).playBtnState == "play" || unref(state).isVideoHovering
      }]),
      onMousemove: mouseMovewWarp
    }, [
      createElementVNode("div", _hoisted_1, [
        createElementVNode("video", mergeProps({
          ref: (_value, _refs) => {
            _refs["refdVideo"] = _value;
            refdVideo.value = _value;
          },
          class: ["d-player-video-main", { "video-mirror": unref(state).mirror }],
          id: "dPlayerVideoMain",
          controls: unref(isMobile) && unref(state).speed ? true : false,
          "webkit-playsinline": props.playsinline,
          playsinline: props.playsinline
        }, unref(videoEvents), {
          volume: unref(state).volume,
          muted: unref(state).muted,
          loop: unref(state).loop,
          preload: _ctx.preload,
          width: "100%",
          height: "100%",
          src: props.src,
          poster: props.poster
        }), "\u60A8\u7684\u6D4F\u89C8\u5668\u4E0D\u652F\u6301Video\u6807\u7B7E\u3002", 16, _hoisted_2)
      ]),
      createVNode(Transition, { name: "d-fade-in" }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", _hoisted_3, null, 512), [
            [vShow, unref(state).lightOff]
          ])
        ]),
        _: 1
      }),
      unref(state).fullScreen ? (openBlock(), createBlock(DPlayerTop, {
        key: 0,
        title: props.title
      }, null, 8, ["title"])) : createCommentVNode("", true),
      !unref(isMobile) ? (openBlock(), createElementBlock("div", _hoisted_4, [
        createVNode(Transition, { name: "d-scale-out" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("div", _hoisted_5, [
              createVNode(DIcon, {
                icon: "icon-play",
                size: 40
              })
            ], 512), [
              [vShow, unref(state).playBtnState == "play"]
            ])
          ]),
          _: 1
        }),
        createVNode(DStatus, { state: unref(state) }, null, 8, ["state"])
      ])) : createCommentVNode("", true),
      !unref(isMobile) ? (openBlock(), createElementBlock("input", {
        key: 2,
        type: "input",
        readonly: "readonly",
        ref: (_value, _refs) => {
          _refs["refInput"] = _value;
          refInput.value = _value;
        },
        onDblclick: toggleFullScreenHandle,
        onKeyup: [
          withKeys(toggleFullScreenHandle, ["f"]),
          _cache[0] || (_cache[0] = withKeys(($event) => unref(state).webFullScreen = false, ["esc"])),
          keypress
        ],
        onClick: togglePlay,
        onKeydown: [
          withKeys(togglePlay, ["space"]),
          withKeys(keydownLeft, ["arrow-left"]),
          withKeys(volumeKeydown, ["arrow-up", "arrow-down"]),
          keypress
        ],
        class: "d-player-input",
        maxlength: "0"
      }, null, 40, _hoisted_6)) : createCommentVNode("", true),
      createVNode(DLoading, {
        loadType: unref(state).loadStateType
      }, null, 8, ["loadType"]),
      createVNode(DContextmenu),
      !unref(isMobile) && unref(state).control ? (openBlock(), createElementBlock("div", {
        key: 3,
        class: "d-player-control",
        ref: (_value, _refs) => {
          _refs["refPlayerControl"] = _value;
          refPlayerControl.value = _value;
        }
      }, [
        createElementVNode("div", _hoisted_7, [
          createVNode(DSlider, {
            class: "d-progress-bar",
            onOnMousemove: onProgressMove,
            onChange: progressBarChange,
            disabled: !unref(state).speed,
            hoverText: unref(state).progressCursorTime,
            modelValue: unref(state).playProgress,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(state).playProgress = $event),
            preload: unref(state).preloadBar
          }, null, 8, ["disabled", "hoverText", "modelValue", "preload"])
        ]),
        createElementVNode("div", {
          class: "d-control-tool",
          onClick: inputFocusHandle
        }, [
          createElementVNode("div", _hoisted_8, [
            createElementVNode("div", {
              class: "d-tool-item",
              onClick: togglePlay
            }, [
              createVNode(DIcon, {
                size: "24",
                icon: `icon-${unref(state).playBtnState}`
              }, null, 8, ["icon"])
            ]),
            props.controlBtns.includes("audioTrack") ? (openBlock(), createElementBlock("div", _hoisted_9, [
              createElementVNode("span", null, toDisplayString(unref(state).currentTime), 1),
              _hoisted_10,
              createElementVNode("span", _hoisted_11, toDisplayString(unref(state).totalTime), 1)
            ])) : createCommentVNode("", true)
          ]),
          createElementVNode("div", _hoisted_12, [
            unref(state).qualityLevels.length && props.controlBtns.includes("quality") ? (openBlock(), createElementBlock("div", _hoisted_13, [
              createTextVNode(toDisplayString(unref(state).qualityLevels.length && (unref(state).qualityLevels[unref(state).currentLevel] || {}).name) + " ", 1),
              createElementVNode("div", _hoisted_14, [
                createElementVNode("ul", _hoisted_15, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).qualityLevels, (row, index) => {
                    return openBlock(), createElementBlock("li", {
                      class: normalizeClass({ "speed-active": unref(state).currentLevel == index }),
                      onClick: ($event) => qualityLevelsHandle(row, index),
                      key: row
                    }, toDisplayString(row.name), 11, _hoisted_16);
                  }), 128))
                ])
              ])
            ])) : createCommentVNode("", true),
            props.controlBtns.includes("speedRate") ? (openBlock(), createElementBlock("div", _hoisted_17, [
              createTextVNode(toDisplayString(unref(state).speedActive == "1.0" ? "\u500D\u901F" : unref(state).speedActive + "x") + " ", 1),
              createElementVNode("div", _hoisted_18, [
                createElementVNode("ul", _hoisted_19, [
                  (openBlock(true), createElementBlock(Fragment, null, renderList(unref(state).speedRate, (row) => {
                    return openBlock(), createElementBlock("li", {
                      class: normalizeClass({ "speed-active": unref(state).speedActive == row }),
                      onClick: ($event) => playbackRate(row),
                      key: row
                    }, toDisplayString(row) + "x", 11, _hoisted_20);
                  }), 128))
                ])
              ])
            ])) : createCommentVNode("", true),
            props.controlBtns.includes("volume") ? (openBlock(), createElementBlock("div", _hoisted_21, [
              createElementVNode("div", _hoisted_22, [
                createElementVNode("div", {
                  class: normalizeClass(["volume-main", { "is-muted": unref(state).muted }])
                }, [
                  createElementVNode("span", _hoisted_23, toDisplayString(unref(state).muted ? 0 : ~~(unref(state).volume * 100)) + "%", 1),
                  createVNode(DSlider, {
                    onChange: _cache[2] || (_cache[2] = ($event) => unref(state).muted = false),
                    hover: false,
                    size: "5px",
                    vertical: true,
                    modelValue: unref(state).volume,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(state).volume = $event)
                  }, null, 8, ["modelValue"])
                ], 2)
              ]),
              createElementVNode("span", {
                onClick: mutedHandler,
                style: { "display": "flex" }
              }, [
                createVNode(DIcon, {
                  size: "20",
                  icon: `icon-volume-${unref(state).volume == 0 || unref(state).muted ? "mute" : unref(state).volume > 0.5 ? "up" : "down"}`
                }, null, 8, ["icon"])
              ])
            ])) : createCommentVNode("", true),
            props.controlBtns.includes("setting") ? (openBlock(), createElementBlock("div", _hoisted_24, [
              createVNode(DIcon, {
                size: "20",
                class: "rotateHover",
                icon: "icon-settings"
              }),
              createElementVNode("div", _hoisted_25, [
                createElementVNode("ul", _hoisted_26, [
                  createElementVNode("li", null, [
                    _hoisted_27,
                    createVNode(DSwitch, {
                      onChange: mirrorChange,
                      modelValue: unref(state).mirror,
                      "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(state).mirror = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  createElementVNode("li", null, [
                    _hoisted_28,
                    createVNode(DSwitch, {
                      onChange: loopChange,
                      modelValue: unref(state).loop,
                      "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(state).loop = $event)
                    }, null, 8, ["modelValue"])
                  ]),
                  createElementVNode("li", null, [
                    _hoisted_29,
                    createVNode(DSwitch, {
                      onChange: lightOffChange,
                      modelValue: unref(state).lightOff,
                      "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(state).lightOff = $event)
                    }, null, 8, ["modelValue"])
                  ])
                ])
              ])
            ])) : createCommentVNode("", true),
            props.controlBtns.includes("pip") ? (openBlock(), createElementBlock("div", {
              key: 4,
              class: "d-tool-item pip-btn",
              onClick: requestPictureInPictureHandle
            }, [
              createVNode(DIcon, {
                size: "20",
                icon: "icon-pip"
              }),
              _hoisted_30
            ])) : createCommentVNode("", true),
            props.controlBtns.includes("pageFullScreen") ? (openBlock(), createElementBlock("div", {
              key: 5,
              class: "d-tool-item pip-btn",
              onClick: _cache[7] || (_cache[7] = ($event) => unref(state).webFullScreen = !unref(state).webFullScreen)
            }, [
              createVNode(DIcon, {
                size: "20",
                icon: "icon-web-screen"
              }),
              _hoisted_31
            ])) : createCommentVNode("", true),
            props.controlBtns.includes("fullScreen") ? (openBlock(), createElementBlock("div", {
              key: 6,
              class: "d-tool-item fullScreen-btn",
              onClick: toggleFullScreenHandle
            }, [
              _hoisted_32,
              createVNode(DIcon, {
                size: "20",
                icon: "icon-screen"
              })
            ])) : createCommentVNode("", true)
          ])
        ])
      ], 512)) : createCommentVNode("", true)
    ], 34);
  };
}
const _sfc_main = /* @__PURE__ */ defineComponent(__spreadProps(__spreadValues({}, __default__), {
  props: defineProps,
  emits: [
    ...videoEmits,
    "mirrorChange",
    "loopChange",
    "lightOffChange"
  ],
  setup
}));
var videoPlay = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-325ed447"]]);
function install(app) {
  app.component(videoPlay.name, videoPlay);
}
videoPlay.install = install;
export { videoPlay as default, install, videoPlay };
