/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function newIterator(r,t){return t?r.bind(t):r}function forEach(r,t,e){for(var o=newIterator(t,e),n=0,a=r.length,c=void 0;!1!==c&&n<a;n++)c=o(r[n],n,r)}exports.forEach=forEach,exports.newIterator=newIterator;
