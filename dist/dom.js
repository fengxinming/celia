/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.celia = factory());
}(this, function () { 'use strict';

  function iteratorCallback (iterator, context) {
    return context ? iterator.bind(context) : iterator;
  }

  function forEach (value, iterator, context) {
    var cb = iteratorCallback(iterator, context);
    for (var i = 0, len = value.length, returnValue = (void 0); returnValue !== false && i < len; i++) {
      returnValue = cb(value[i], i, value);
    }
  }

  function isNil (value) {
    /* eslint eqeqeq: 0 */
    return value == null;
  }

  function isFunction (value) {
    return typeof value === 'function';
  }

  var isArray = Array.isArray;

  function isArrayLike (value) {
    if (isNil(value) || isFunction(value)) {
      return false;
    }
    var length = value.length;
    return isArray(value) || length === 0 || (+length > 0 && (length - 1) in value);
  }

  var fragmentRE = /^\s*<(\w+|!)[^>]*>/;
  var singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;

  function forIn (value, iterator, context) {
    var cb = iteratorCallback(iterator, context);
    for (var key in value) {
      if (cb(value[key], key, value) === false) {
        break;
      }  }
  }

  function forIn$1 (value, iterator, context) {
    return value && forIn(value, iterator, context);
  }

  function append (arr, obj) {
    arr[arr.length] = obj;
    return obj;
  }

  function childNodes (dom, cb) {
    var nodes = [];
    var callback = cb || function (elem) {
      append(nodes, elem);
    };
    forEach(dom.childNodes, function (elem, i) {
      var j = 0;
      if (elem.nodeType === 1) {
        callback(elem, ++j, i);
      }
    });
    return nodes;
  }

  var fragDiv = document.createElement('div');

  function fragment (html, props, fn) {
    var matches = html.match(singleTagRE);
    if (matches) {
      var dom = document.createElement(matches[1]);
      forIn$1(props, function (prop, key) {
        dom.setAttribute(key, prop);
      });
      fn(dom);
    } else if (fragmentRE.test(html)) {
      fragDiv.innerHTML = html;
      childNodes(fragDiv, fn);
    }
  }

  function fragmentForList(arr) {
    var frag = document.createDocumentFragment();
    forEach(arr, function (content) {
      // NodeElement
      if (content && content.nodeType === 1) {
        frag.appendChild(content);
      } else if (isArrayLike(content)) {
        forEach(content, function (elem) {
          frag.appendChild(elem);
        });
      } else {
        fragment(String(content), null, function (elem) {
          frag.appendChild(elem);
        });
      }
    });
    return frag;
  }

  function domManip (list, arr, method, fallback) {
    var frag = fragmentForList(arr);
    if (isArrayLike(list)) {
      var iNoClone = list.length - 1;
      forEach(list, function (elem, i) {
        var node = frag;
        if (i !== iNoClone) {
          node = frag.cloneNode(true);
        }
        elem[method] ? elem[method](node) : fallback(elem, node);
      });
    } else {
      list[method] ? list[method](frag) : fallback(list, frag);
    }
    return list;
  }

  function after (nodeList) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return domManip(nodeList, args, 'after', function (dom, node) {
      var parentNode = dom.parentNode;
      if (parentNode) {
        parentNode.insertBefore(node, dom.nextSibling);
      }
    });
  }

  function append$1 (nodeList) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return domManip(nodeList, args, 'appendChild');
  }

  function before (nodeList) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return domManip(nodeList, args, 'before', function (dom, node) {
      var parentNode = dom.parentNode;
      if (parentNode) {
        parentNode.insertBefore(node, dom);
      }
    });
  }

  function isUndefined (value) {
    return typeof value === 'undefined';
  }

  function isObject (value) {
    return !isNil(value) && typeof value === 'object';
  }

  var expandoSequence = 1;
  var expandoKey = 'expando9527';
  var cache = {};

  function nextId() {
    return ++expandoSequence;
  }

  function expandoStore (element, key, value) {
    var expandoId = element[expandoKey];
    var exStore = cache[expandoId || -1];

    if (!isUndefined(value)) {
      if (!exStore) {
        element[expandoKey] = expandoId = nextId();
        exStore = cache[expandoId] = {};
      }
      exStore[key] = value;
    } else {
      return exStore && exStore[key];
    }
  }

  function data (element, key, value) {
    var data = expandoStore(element, 'data');
    var isSetter = !isUndefined(value);
    var keyDefined = !isSetter && !isUndefined(key);
    var isSimpleGetter = keyDefined && !isObject(key);

    if (!data && !isSimpleGetter) {
      expandoStore(element, 'data', data = {});
    }

    if (isSetter) {
      data[key] = value;
    } else {
      if (keyDefined) {
        if (isSimpleGetter) {
          return data && data[key];
        } else {
          forIn$1(key, function (n, k) {
            data[k] = n;
          });
        }
      } else {
        return data;
      }
    }
  }

  function forEach$1 (value, iterator, context) {
    return value && forEach(value, iterator, context);
  }

  function inArray (elem, arr, fromIndex) {
    if (arr) {
      if (arr.indexOf) {
        return arr.indexOf(elem, fromIndex);
      }
      var len = arr.length;
      var i = fromIndex ? fromIndex < 0 ? Math.max(0, len + fromIndex) : fromIndex : 0;
      for (; i < len; i++) {
        if (i in arr && arr[i] === elem) {
          return i;
        }
      }
    }
    return -1;
  }

  function removeAt (elems, index) {
    elems.splice(index, 1);
    return index;
  }

  function remove (elems, value) {
    var index = inArray(value, elems);
    if (index >= 0) {
      removeAt(elems, index);
      return value;
    }
    // 删除失败返回null
    return null;
  }

  var removeEventListenerFn = window.removeEventListener ?
    function (element, type, fn) {
      element.removeEventListener(type, fn, false);
    } :
    function (element, type, fn) {
      element.detachEvent(("on" + type), fn);
    };

  function off (element, types, fn) {
    var events = expandoStore(element, 'events');
    var handle = expandoStore(element, 'handle');

    if (!handle) {
      return; // 没有注册事件
    }
    if (isUndefined(types)) {
      forEach$1(events, function (eventHandler, type) {
        removeEventListenerFn(element, type, eventHandler);
        delete events[type];
      });
    } else {
      forEach$1(types.split(' '), function (type) {
        if (isUndefined(fn)) {
          removeEventListenerFn(element, type, events[type]);
          delete events[type];
        } else {
          remove(events[type], fn);
        }
      });
    }
  }

  var addEventListenerFn = window.addEventListener ?
    function (dom, name, fn) {
      dom.addEventListener(name, fn, false);
    } : function (dom, name, fn) {
      dom.attachEvent(("on" + name), fn);
    };

  function createEventHandler(element, events) {
    var eventHandler = function (event) {
      if (!event.preventDefault) {
        event.preventDefault = function () {
          event.returnValue = false; // ie
        };
      }

      if (!event.stopPropagation) {
        event.stopPropagation = function () {
          event.cancelBubble = true; // ie
        };
      }

      if (!event.target) {
        event.target = event.srcElement || document; // ie
      }

      if (isUndefined(event.defaultPrevented)) {
        var prevent = event.preventDefault;
        prevent = prevent.bind(event);
        event.preventDefault = function () {
          event.defaultPrevented = true;
          prevent();
        };
        event.defaultPrevented = false;
      }

      event.isDefaultPrevented = function () {
        return event.defaultPrevented || event.returnValue === false;
      };

      // return false 将中断后面的事件触发
      forEach$1(events[event.type], function (fn) { return fn.call(element, event); });

      try {
        delete event.preventDefault;
        delete event.stopPropagation;
        delete event.isDefaultPrevented;
      } catch (e) {
        // ie
        event.preventDefault = null;
        event.stopPropagation = null;
        event.isDefaultPrevented = null;
      }
    };
    eventHandler.elem = element;
    return eventHandler;
  }

  function on (element, types, fn) {
    var events = expandoStore(element, 'events');
    var handle = expandoStore(element, 'handle');

    if (!events) {
      expandoStore(element, 'events', events = {});
    }  if (!handle) {
      expandoStore(element, 'handle', handle = createEventHandler(element, events));
    }  types.split(' ').forEach(function (type) {
      var eventFns = events[type];
      // 减少事件绑定
      if (!eventFns) {
        addEventListenerFn(element, type, handle);
        eventFns = events[type] = [];
      }
      eventFns[eventFns.length] = fn;
    });
    return element;
  }

  function prepend (nodeList) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return domManip(nodeList, args, 'prepend', function (elem, node) {
      if (elem.nodeType === 1 || elem.nodeType === 11 || elem.nodeType === 9) {
        elem.insertBefore(node, elem.firstChild);
      }
    });
  }

  var dom = {
    after: after,
    append: append$1,
    before: before,
    data: data,
    off: off,
    on: on,
    prepend: prepend
  };

  return dom;

}));
