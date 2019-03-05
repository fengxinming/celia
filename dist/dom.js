/*!
 * celia.js v3.0.0-beta.3
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.celia = factory());
}(this, function () { 'use strict';

  var fragmentRE = /^\s*<(\w+|!)[^>]*>/;
  var singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;
  var rnothtmlwhiteRE = /[^\x20\t\r\n\f]+/g;

  function isString (value) {
    return typeof value === 'string';
  }

  function classesToArray (value) {
    if (Array.isArray(value)) {
      return value;
    } else if (isString(value)) {
      return value.match(rnothtmlwhiteRE) || [];
    }
    return [];
  }

  var classListSupported = !!document.body.classList;

  var propFix = {
    'for': 'htmlFor',
    'class': 'className'
  };
  [
    'tabIndex',
    'readOnly',
    'maxLength',
    'cellSpacing',
    'cellPadding',
    'rowSpan',
    'colSpan',
    'useMap',
    'frameBorder',
    'contentEditable'
  ].forEach(function (prop) {
    propFix[prop.toLowerCase()] = prop;
  });

  var testEl = document.createElement('div');

  var cssPrefixes = ['Webkit', 'Moz', 'ms'];
  var emptyStyle = testEl.style;

  function vendorPropName(name) {
    if (name in emptyStyle) {
      return name;
    }
    var capName = name[0].toUpperCase() + name.slice(1);
    var i = cssPrefixes.length;
    while (i--) {
      name = cssPrefixes[i] + capName;
      if (name in emptyStyle) {
        return name;
      }
    }
  }

  var siblingHooker = {
    nextElementSibling: 'nextSibling',
    previousElementSibling: 'previousSibling'
  };

  function iteratorCallback (iterator, context) {
    return context ? iterator.bind(context) : iterator;
  }

  function forEach (value, iterator, context) {
    var cb = iteratorCallback(iterator, context);
    for (var i = 0, len = value.length, returnValue = (void 0); returnValue !== false && i < len; i++) {
      returnValue = cb(value[i], i, value);
    }
  }

  function firstNode(dom) {
    return dom && (dom.length > -1 ? dom[0] : dom);
  }

  function checkDom (dom, callback) {
    if (dom) {
      if (dom.length > -1) {
        forEach(dom, callback);
      } else {
        callback(dom);
      }
    }
    return dom;
  }

  function append (arr, obj) {
    arr[arr.length] = obj;
  }

  var addClass = classListSupported ? function (dom, classes) {
    classes.forEach(function (cls) {
      dom.classList.add(cls);
    });
  } : function (dom, classes) {
    var curClasses = classesToArray(dom.className);
    var oprClasses = curClasses.slice(0);
    classes.forEach(function (cls) {
      if (oprClasses.indexOf(cls) === -1) {
        append(oprClasses, cls);
      }
    });
    curClasses = curClasses.join(' ');
    oprClasses = oprClasses.join(' ');
    if (curClasses !== oprClasses) {
      dom.className = oprClasses;
    }
  };

  /**
   * 追加className
   * @param {Node|NodeList} dom
   * @param {String|Array} value
   */
  function addClass$1 (dom, value) {
    var classes = classesToArray(value);
    checkDom(dom, function (elem) {
      addClass(elem, classes);
    });
    return dom;
  }

  function isNil (value) {
    /* eslint eqeqeq: 0 */
    return value == null;
  }

  function isFunction (value) {
    return typeof value === 'function';
  }

  function isNumber (value) {
    return typeof value === 'number';
  }

  function isArrayLike (value) {
    return !isNil(value) && isNumber(value.length) && !isFunction(value);
  }

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

  function fragment (html, props, fn) {
    var matches = html.match(singleTagRE);
    if (matches) {
      var dom = document.createElement(matches[1]);
      forIn$1(props, function (prop, key) {
        dom.setAttribute(key, prop);
      });
      fn(dom);
    } else if (fragmentRE.test(html)) {
      testEl.innerHTML = html;
      childNodes(testEl, fn);
    } else {
      fn(document.createTextNode(html));
    }
  }

  function fragmentForList(arr) {
    var frag = document.createDocumentFragment();
    forEach(arr, function (content) {
      // Node
      if (content.nodeType === 1) {
        frag.appendChild(content);
      } else if (!isString(content) && isArrayLike(content)) {
        forEach(content, function (elem) {
          frag.appendChild(elem);
        });
      } else {
        fragment(content, null, function (elem) {
          frag.appendChild(elem);
        });
      }
    });
    return frag;
  }

  /**
   * 操作dom节点
   * @param {Node|NodeList} list
   * @param {Array} arr 待添加的元素
   * @param {String} method 操作函数
   * @param {Function} fallback 兼容方法
   */
  function domManip (list, arr, method, fallback) {
    if (list) {
      if (document.body[method]) {
        fallback = function (elem, child) {
          elem[method](child);
        };
      }
      var frag = fragmentForList(arr);
      var len = list.length;
      if (len) {
        var last = len - 1;
        for (var i = 0, j = last; i < j; i++) {
          fallback(list[i], frag.cloneNode(true));
        }
        fallback(list[last], frag);
      } else {
        fallback(list, frag);
      }
    }
    return list;
  }

  /**
   * 在node节点之后添加新元素
   * @param {Node|NodeList} dom
   * @param  {...any} args
   */
  function after (dom) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return domManip(dom, args, 'after', function (dom, node) {
      var parentNode = dom.parentNode;
      if (parentNode) {
        parentNode.insertBefore(node, dom.nextSibling);
      }
    });
  }

  /**
   * 向node节点添加新元素
   * @param {Node|Node} dom
   * @param  {...any} args
   */
  function append$1 (dom) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return domManip(dom, args, 'appendChild');
  }

  function isUndefined (value) {
    return typeof value === 'undefined';
  }

  function getAttribute(dom, k) {
    dom = firstNode(dom);
    return dom && dom.getAttribute(k);
  }
  function setAttribute(dom, k, v) {
    checkDom(dom, function (elem) {
      elem.setAttribute(k, v);
    });
    return dom;
  }

  /**
   * 读取或者设置属性
   * @param {Node|NodeList} dom
   * @param {String} key
   * @param {*} val
   */
  function attr (dom, key, val) {
    return isUndefined(val) ?
      getAttribute(dom, key) :
      setAttribute(dom, key, val);
  }

  /**
   * 在node节点之前添加新元素
   * @param {Node|Node} dom
   * @param  {...any} args
   */
  function before (dom) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return domManip(dom, args, 'before', function (dom, node) {
      var parentNode = dom.parentNode;
      if (parentNode) {
        parentNode.insertBefore(node, dom);
      }
    });
  }

  function append$2 (arr, obj) {
    if (arr) {
      arr[arr.length] = obj;
    }
  }

  function dir (dom, method, fn) {
    var arr = [];
    checkDom(dom, function (elem) {
      fn(elem, method, function (el) {
        append$2(arr, el);
      });
    });
    return arr;
  }

  function children (dom) {
    return dir(dom, '', function (elem, method, cb) {
      childNodes(cb);
    });
  }

  var DASH_ALPHA_REGEX = /-([a-z])/g;

  function camelCase (value) {
    return value.replace(DASH_ALPHA_REGEX, function (val, letter) {
      return letter.toUpperCase();
    });
  }

  var cssProps = {};

  function style (elem, origName, value) {
    var style = elem.style;
    origName = cssProps[origName] || (cssProps[origName] = vendorPropName(origName) || origName);
    if (isNil(value)) {
      return style[origName];
    } else {
      style[origName] = value;
    }
  }

  function getStyles (elem) {
    var view = elem.ownerDocument.defaultView;
    if (!view || !view.opener) {
      view = window;
    }
    return view.getComputedStyle(elem);
  }

  function curCSS (elem, name, computed) {
    computed = computed || getStyles(elem);
    var ret;
    if (computed) {
      ret = computed.getPropertyValue(name) || computed[name];
    }
    return ret;
  }

  function getter(dom, k) {
    dom = firstNode(dom);
    return dom ? curCSS(dom, k) : '';
  }

  function setter(dom, k, v) {
    checkDom(dom, function (elem) {
      style(elem, k, v);
    });
    return dom;
  }

  /**
   * 读取或者设置属性
   * @param {Node|NodeList} dom
   * @param {String} key
   * @param {*} val
   */
  function css (dom, key, val) {
    key = camelCase(key);
    return isUndefined(val) ?
      getter(dom, key) :
      setter(dom, key, val);
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

  /**
   * 缓存数据
   * @param {Node|NodeList} dom
   * @param {String} key
   * @param {*} val
   */
  function data (dom, key, value) {
    checkDom(dom, function (element) {
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
    });
    return dom;
  }

  function empty () {

  }

  function hasClass(dom, classes) {
    var exists = false;
    var curClasses = classesToArray(dom.className);
    forEach(classes, function (cls) {
      if (curClasses.indexOf(cls) > -1) {
        exists = true;
        return false;
      }
    });
    return exists;
  }
  /**
   * 判断节点是否包含指定className
   * @param {Node|NodeList} dom
   * @param {String|Array} args
   */
  function hasClass$1 (dom, args) {
    var exists = false;
    checkDom(dom, function (elem) {
      if (hasClass(elem, args)) {
        exists = true;
        return false;
      }
    });
    return exists;
  }

  function showHide (dom, show) {
    checkDom(dom, function (elem) {
      var display = elem.style.display || '';
      var originalDisplay = expandoStore(elem, 'display');
      if (isUndefined(originalDisplay)) {
        expandoStore(elem, 'display', display);
        originalDisplay = display;
      }
      if (show) {
        if (!display) {
          var cssDisplay = curCSS(elem, 'display');
          if (cssDisplay === 'none') {
            elem.style.display = 'block';
          }
        } else if (display === 'none') {
          elem.style.display = originalDisplay;
        }
      } else {
        elem.style.display = 'none';
      }
    });
    return dom;
  }

  /**
   * 显示元素
   * @param {Node|NodeList} dom
   */
  function hide (dom) {
    return showHide(dom);
  }

  function html (dom, val) {
    if (!isNil(val)) {
      var callback = val.nodeType === 1 ? function (elem) {
        append$1(elem, val);
      } : function (elem) {
        elem.innerHTML = String(val);
      };
      checkDom(dom, callback);
    }
    return dom;
  }

  function sibling (dom, method, fn) {
    var nextDom = dom[method];
    if (nextDom) {
      fn(nextDom);
    } else {
      method = siblingHooker[method];
      while ((dom = dom[method]) && dom.nodeType !== 1) { }
      dom && fn(dom);
    }
  }

  function next (dom) {
    return dir(dom, 'nextElementSibling', sibling);
  }

  function siblings (dom, prop, fn) {
    // 支持高级特性
    var modern = prop in dom;
    if (modern) {
      while ((dom = dom[prop])) {
        fn(dom);
      }
    } else {
      prop = siblingHooker[prop];
      while ((dom = dom[prop]) && dom.nodeType === 1) {
        fn(dom);
      }
    }
  }

  function nextAll (dom) {
    return dir(dom, 'nextElementSibling', siblings);
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

  /**
   * 移除dom事件
   * @param {Node|NodeList} dom
   * @param {String} types
   * @param {Function} fn
   */
  function off (dom, types, fn) {
    checkDom(dom, function (element) {
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
    });
    return dom;
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

  /**
   * 添加dom事件
   * @param {Node|NodeList} dom
   * @param {String} types
   * @param {Function} fn
   */
  function on (dom, types, fn) {
    checkDom(dom, function (element) {
      var events = expandoStore(element, 'events');
      var handle = expandoStore(element, 'handle');

      if (!events) {
        expandoStore(element, 'events', events = {});
      }    if (!handle) {
        expandoStore(element, 'handle', handle = createEventHandler(element, events));
      }    types.split(' ').forEach(function (type) {
        var eventFns = events[type];
        // 减少事件绑定
        if (!eventFns) {
          addEventListenerFn(element, type, handle);
          eventFns = events[type] = [];
        }
        eventFns[eventFns.length] = fn;
      });
    });
    return dom;
  }

  function parent (dom) {
    return dir(dom, '', function (elem, method, cb) {
      var parentNode = elem.parentNode;
      if (parentNode) {
        cb(parentNode);
      }
    });
  }

  /**
   * 向node节点添加新元素
   * @param {Node|Node} dom
   * @param  {...any} args
   */
  function prepend (dom) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    return domManip(dom, args, 'prepend', function (elem, node) {
      if (elem.nodeType === 1 || elem.nodeType === 11 || elem.nodeType === 9) {
        elem.insertBefore(node, elem.firstChild);
      }
    });
  }

  function prev (dom) {
    return dir(dom, 'previousElementSibling', sibling);
  }

  function prevAll (dom) {
    return dir(dom, 'previousElementSibling', siblings);
  }

  function getProperty(dom, k) {
    dom = firstNode(dom);
    return dom && dom[k];
  }
  function setProperty(dom, k, v) {
    k = propFix[k] || k;
    checkDom(dom, function (elem) {
      elem[k] = v;
    });
    return dom;
  }

  /**
   * 读取或者设置属性
   * @param {Node|NodeList} dom
   * @param {String} key
   * @param {*} val
   */
  function prop (dom, key, val) {
    return isUndefined(val) ?
      getProperty(dom, key) :
      setProperty(dom, key, val);
  }

  /**
   * 移除自己
   * @param {Node|NodeList} dom
   */
  function remove$1 (dom) {
    checkDom(dom, function (elem) {
      var parentNode = elem.parentNode;
      if (parentNode) {
        parentNode.removeChild(elem);
      }
    });
    return dom;
  }

  /**
   * 删除属性
   * @param {Node|NodeList} dom
   * @param {String} key
   */
  function removeAttr (dom, key) {
    var attrNames = classesToArray(key);
    checkDom(dom, function (elem) {
      attrNames.forEach(function (attrName) {
        elem.removeAttribute(attrName);
      });
    });
    return dom;
  }

  var removeClass = classListSupported ? function (dom, classes) {
    classes.forEach(function (cls) {
      dom.classList.remove(cls);
    });
  } : function (dom, classes) {
    var curClasses = classesToArray(dom.className);
    var oprClasses = curClasses.slice(0);
    classes.forEach(function (cls) {
      var idx = oprClasses.indexOf(cls);
      if (idx > -1) {
        oprClasses.splice(idx, 1);
      }
    });
    curClasses = curClasses.join(' ');
    oprClasses = oprClasses.join(' ');
    if (curClasses !== oprClasses) {
      dom.className = oprClasses;
    }
  };

  /**
   * 移除className
   * @param {Node|NodeList} dom
   * @param {String|Array} value
   */
  function removeClass$1 (dom, value) {
    if (!arguments.length) {
      return prop(dom, 'className', '');
    }
    var classes = classesToArray(value);
    checkDom(dom, function (elem) {
      removeClass(elem, classes);
    });
    return dom;
  }

  /**
   * 删除属性
   * @param {Node|NodeList} dom
   * @param {String} name
   * @param {*} val
   */
  function removeProp (dom, name) {
    checkDom(dom, function (elem) {
      delete elem[propFix[name] || name];
    });
    return dom;
  }

  /**
   * 显示元素
   * @param {Node|NodeList} dom
   */
  function show (dom) {
    return showHide(dom, true);
  }

  function wrap (proto) {
    proto.wrap = function (content) {
      if (content) {
        fragment(content, null, function (elem) {
          content = elem;
          return false;
        });
        return checkDom(function (elem, i) {
          var wrapNode = content;
          if (i) {
            wrapNode = content.cloneNode(true);
          }
          var pNode = elem.parentNode;
          if (pNode) {
            pNode.replaceChild(wrapNode, elem);
          }
          wrapNode.appendChild(elem);
        });
      }
      return this;
    };
  }

  var dom = {
    addClass: addClass$1,
    after: after,
    append: append$1,
    attr: attr,
    before: before,
    children: children,
    css: css,
    data: data,
    empty: empty,
    hasClass: hasClass$1,
    hide: hide,
    html: html,
    next: next,
    nextAll: nextAll,
    off: off,
    on: on,
    parent: parent,
    prepend: prepend,
    prev: prev,
    prevAll: prevAll,
    prop: prop,
    remove: remove$1,
    removeAttr: removeAttr,
    removeClass: removeClass$1,
    removeProp: removeProp,
    show: show,
    wrap: wrap
  };

  return dom;

}));
