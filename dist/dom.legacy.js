/*!
 * celia.js v3.0.0-beta.2
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var fragmentRE=/^\s*<(\w+|!)[^>]*>/,singleTagRE=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,rnothtmlwhiteRE=/[^\x20\t\r\n\f]+/g;function isNumber(e){return"string"==typeof e}function classesToArray(e){return Array.isArray(e)?e:isNumber(e)&&e.match(rnothtmlwhiteRE)||[]}var classListSupported=!!document.body.classList,propFix={for:"htmlFor",class:"className"};["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"].forEach(function(e){propFix[e.toLowerCase()]=e});var testEl=document.createElement("div"),cssPrefixes=["Webkit","Moz","ms"],emptyStyle=testEl.style;function vendorPropName(e){if(e in emptyStyle)return e;for(var n=e[0].toUpperCase()+e.slice(1),t=cssPrefixes.length;t--;)if((e=cssPrefixes[t]+n)in emptyStyle)return e}var siblingHooker={nextElementSibling:"nextSibling",previousElementSibling:"previousSibling"};function iteratorCallback(e,n){return n?e.bind(n):e}function forEach(e,n,t){for(var r=iteratorCallback(n,t),o=0,i=e.length,a=void 0;!1!==a&&o<i;o++)a=r(e[o],o,e)}function firstNode(e){return e&&(-1<e.length?e[0]:e)}function checkDom(e,n){return e&&(-1<e.length?forEach(e,n):n(e)),e}function append(e,n){e[e.length]=n}var addClass=classListSupported?function(n,e){e.forEach(function(e){n.classList.add(e)})}:function(e,n){var t=classesToArray(e.className),r=t.slice(0);n.forEach(function(e){-1===r.indexOf(e)&&append(r,e)}),(t=t.join(" "))!==(r=r.join(" "))&&(e.className=r)};function addClass$1(e,n){var t=classesToArray(n);return checkDom(e,function(e){addClass(e,t)}),e}function isNil(e){return null==e}function isFunction(e){return"function"==typeof e}function isArrayLike(e){return!isNil(e)&&isNumber(e.length)&&!isFunction(e)}function forIn(e,n,t){var r=iteratorCallback(n,t);for(var o in e)if(!1===r(e[o],o,e))break}function forIn$1(e,n,t){return e&&forIn(e,n,t)}function childNodes(e,n){var t=[],r=n||function(e){append(t,e)};return forEach(e.childNodes,function(e,n){var t=0;1===e.nodeType&&r(e,++t,n)}),t}function fragment(e,n,t){var r=e.match(singleTagRE);if(r){var o=document.createElement(r[1]);forIn$1(n,function(e,n){o.setAttribute(n,e)}),t(o)}else fragmentRE.test(e)?(testEl.innerHTML=e,childNodes(testEl,t)):t(document.createTextNode(e))}function fragmentForList(e){var n=document.createDocumentFragment();return forEach(e,function(e){1===e.nodeType?n.appendChild(e):!isNumber(e)&&isArrayLike(e)?forEach(e,function(e){n.appendChild(e)}):fragment(e,null,function(e){n.appendChild(e)})}),n}function domManip(e,n,t,r){if(e){document.body[t]&&(r=function(e,n){e[t](n)});var o=fragmentForList(n),i=e.length;if(i){for(var a=i-1,c=0,u=a;c<u;c++)r(e[c],o.cloneNode(!0));r(e[a],o)}else r(e,o)}return e}function after(e){for(var n=[],t=arguments.length-1;0<t--;)n[t]=arguments[t+1];return domManip(e,n,"after",function(e,n){var t=e.parentNode;t&&t.insertBefore(n,e.nextSibling)})}function append$1(e){for(var n=[],t=arguments.length-1;0<t--;)n[t]=arguments[t+1];return domManip(e,n,"appendChild")}function isUndefined(e){return void 0===e}function getAttribute(e,n){return(e=firstNode(e))&&e.getAttribute(n)}function setAttribute(e,n,t){return checkDom(e,function(e){e.setAttribute(n,t)}),e}function attr(e,n,t){return isUndefined(t)?getAttribute(e,n):setAttribute(e,n,t)}function before(e){for(var n=[],t=arguments.length-1;0<t--;)n[t]=arguments[t+1];return domManip(e,n,"before",function(e,n){var t=e.parentNode;t&&t.insertBefore(n,e)})}function append$2(e,n){e&&(e[e.length]=n)}function dir(e,n,t){var r=[];return checkDom(e,function(e){t(e,n,function(e){append$2(r,e)})}),r}function children(e){return dir(e,"",function(e,n,t){childNodes(t)})}var DASH_ALPHA_REGEX=/-([a-z])/g;function camelCase(e){return e.replace(DASH_ALPHA_REGEX,function(e,n){return n.toUpperCase()})}var cssProps={};function style(e,n,t){var r=e.style;if(n=cssProps[n]||(cssProps[n]=vendorPropName(n)||n),isNil(t))return r[n];r[n]=t}function getStyles(e){var n=e.ownerDocument.defaultView;return n&&n.opener||(n=window),n.getComputedStyle(e)}function curCSS(e,n,t){var r;return(t=t||getStyles(e))&&(r=t.getPropertyValue(n)||t[n]),r}function getter(e,n){return(e=firstNode(e))?curCSS(e,n):""}function setter(e,n,t){return checkDom(e,function(e){style(e,n,t)}),e}function css(e,n,t){return n=camelCase(n),isUndefined(t)?getter(e,n):setter(e,n,t)}function isObject(e){return!isNil(e)&&"object"==typeof e}var expandoSequence=1,expandoKey="expando9527",cache={};function nextId(){return++expandoSequence}function expandoStore(e,n,t){var r=e[expandoKey],o=cache[r||-1];if(isUndefined(t))return o&&o[n];o||(e[expandoKey]=r=nextId(),o=cache[r]={}),o[n]=t}function data(e,i,a){return checkDom(e,function(e){var t=expandoStore(e,"data"),n=!isUndefined(a),r=!n&&!isUndefined(i),o=r&&!isObject(i);if(t||o||expandoStore(e,"data",t={}),n)t[i]=a;else{if(!r)return t;if(o)return t&&t[i];forIn$1(i,function(e,n){t[n]=e})}}),e}function empty(){}function hasClass(e,n){var t=!1,r=classesToArray(e.className);return forEach(n,function(e){if(-1<r.indexOf(e))return!(t=!0)}),t}function hasClass$1(e,n){var t=!1;return checkDom(e,function(e){if(hasClass(e,n))return!(t=!0)}),t}function showHide(e,r){return checkDom(e,function(e){var n=e.style.display||"",t=expandoStore(e,"display");(isUndefined(t)&&(expandoStore(e,"display",n),t=n),r)?n?"none"===n&&(e.style.display=t):"none"===curCSS(e,"display")&&(e.style.display="block"):e.style.display="none"}),e}function hide(e){return showHide(e)}function html(e,n){isNil(n)||checkDom(e,1===n.nodeType?function(e){append$1(e,n)}:function(e){e.innerHTML=String(n)});return e}function sibling(e,n,t){var r=e[n];if(r)t(r);else{for(n=siblingHooker[n];(e=e[n])&&1!==e.nodeType;);e&&t(e)}}function next(e){return dir(e,"nextElementSibling",sibling)}function siblings(e,n,t){if(n in e)for(;e=e[n];)t(e);else for(n=siblingHooker[n];(e=e[n])&&1===e.nodeType;)t(e)}function nextAll(e){return dir(e,"nextElementSibling",siblings)}function forEach$1(e,n,t){return e&&forEach(e,n,t)}function inArray(e,n,t){if(n){if(n.indexOf)return n.indexOf(e,t);for(var r=n.length,o=t?t<0?Math.max(0,r+t):t:0;o<r;o++)if(o in n&&n[o]===e)return o}return-1}function removeAt(e,n){return e.splice(n,1),n}function remove(e,n){var t=inArray(n,e);return 0<=t?(removeAt(e,t),n):null}var removeEventListenerFn=window.removeEventListener?function(e,n,t){e.removeEventListener(n,t,!1)}:function(e,n,t){e.detachEvent("on"+n,t)};function off(e,n,o){return checkDom(e,function(t){var r=expandoStore(t,"events");expandoStore(t,"handle")&&(isUndefined(n)?forEach$1(r,function(e,n){removeEventListenerFn(t,n,e),delete r[n]}):forEach$1(n.split(" "),function(e){isUndefined(o)?(removeEventListenerFn(t,e,r[e]),delete r[e]):remove(r[e],o)}))}),e}var addEventListenerFn=window.addEventListener?function(e,n,t){e.addEventListener(n,t,!1)}:function(e,n,t){e.attachEvent("on"+n,t)};function createEventHandler(t,r){var e=function(n){if(n.preventDefault||(n.preventDefault=function(){n.returnValue=!1}),n.stopPropagation||(n.stopPropagation=function(){n.cancelBubble=!0}),n.target||(n.target=n.srcElement||document),isUndefined(n.defaultPrevented)){var e=n.preventDefault;e=e.bind(n),n.preventDefault=function(){n.defaultPrevented=!0,e()},n.defaultPrevented=!1}n.isDefaultPrevented=function(){return n.defaultPrevented||!1===n.returnValue},forEach$1(r[n.type],function(e){return e.call(t,n)});try{delete n.preventDefault,delete n.stopPropagation,delete n.isDefaultPrevented}catch(e){n.preventDefault=null,n.stopPropagation=null,n.isDefaultPrevented=null}};return e.elem=t,e}function on(e,n,i){return checkDom(e,function(t){var r=expandoStore(t,"events"),o=expandoStore(t,"handle");r||expandoStore(t,"events",r={}),o||expandoStore(t,"handle",o=createEventHandler(t,r)),n.split(" ").forEach(function(e){var n=r[e];n||(addEventListenerFn(t,e,o),n=r[e]=[]),n[n.length]=i})}),e}function parent(e){return dir(e,"",function(e,n,t){var r=e.parentNode;r&&t(r)})}function prepend(e){for(var n=[],t=arguments.length-1;0<t--;)n[t]=arguments[t+1];return domManip(e,n,"prepend",function(e,n){1!==e.nodeType&&11!==e.nodeType&&9!==e.nodeType||e.insertBefore(n,e.firstChild)})}function prev(e){return dir(e,"previousElementSibling",sibling)}function prevAll(e){return dir(e,"previousElementSibling",siblings)}function getProperty(e,n){return(e=firstNode(e))&&e[n]}function setProperty(e,n,t){return n=propFix[n]||n,checkDom(e,function(e){e[n]=t}),e}function prop(e,n,t){return isUndefined(t)?getProperty(e,n):setProperty(e,n,t)}function remove$1(e){return checkDom(e,function(e){var n=e.parentNode;n&&n.removeChild(e)}),e}function removeAttr(e,n){var t=classesToArray(n);return checkDom(e,function(n){t.forEach(function(e){n.removeAttribute(e)})}),e}var removeClass=classListSupported?function(n,e){e.forEach(function(e){n.classList.remove(e)})}:function(e,n){var t=classesToArray(e.className),r=t.slice(0);n.forEach(function(e){var n=r.indexOf(e);-1<n&&r.splice(n,1)}),(t=t.join(" "))!==(r=r.join(" "))&&(e.className=r)};function removeClass$1(e,n){if(!arguments.length)return prop(e,"className","");var t=classesToArray(n);return checkDom(e,function(e){removeClass(e,t)}),e}function removeProp(e,n){return checkDom(e,function(e){delete e[propFix[n]||n]}),e}function show(e){return showHide(e,!0)}function wrap(e){e.wrap=function(o){return o?(fragment(o,null,function(e){return o=e,!1}),checkDom(function(e,n){var t=o;n&&(t=o.cloneNode(!0));var r=e.parentNode;r&&r.replaceChild(t,e),t.appendChild(e)})):this}}var dom={addClass:addClass$1,after:after,append:append$1,attr:attr,before:before,children:children,css:css,data:data,empty:empty,hasClass:hasClass$1,hide:hide,html:html,next:next,nextAll:nextAll,off:off,on:on,parent:parent,prepend:prepend,prev:prev,prevAll:prevAll,prop:prop,remove:remove$1,removeAttr:removeAttr,removeClass:removeClass$1,removeProp:removeProp,show:show,wrap:wrap};module.exports=dom;
