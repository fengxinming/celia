/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function append(e,r){if(e)return e[e.length]=r}function inArray(e,r,n){if(r){if(r.indexOf)return r.indexOf(e,n);for(var t=r.length,i=n?n<0?Math.max(0,t+n):n:0;i<t;i++)if(i in r&&r[i]===e)return i}return-1}function append$1(e,r){e[e.length]=r}function removeAt(e,r){return e.splice(r,1),r}function remove(e,r){var n=inArray(r,e);return 0<=n?(removeAt(e,n),r):null}exports.inArray=inArray,exports.append=append$1,exports.append$1=append,exports.remove=remove,exports.removeAt=removeAt;
