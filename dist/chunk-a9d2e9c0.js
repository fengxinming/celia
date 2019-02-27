/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function inArray(r,e,n){if(e){if(e.indexOf)return e.indexOf(r,n);for(var t=e.length,i=n?n<0?Math.max(0,t+n):n:0;i<t;i++)if(i in e&&e[i]===r)return i}return-1}function append(r,e){return r[r.length]=e}function removeAt(r,e){return r.splice(e,1),e}function remove(r,e){var n=inArray(e,r);return 0<=n?(removeAt(r,n),e):null}exports.inArray=inArray,exports.append=append,exports.remove=remove,exports.removeAt=removeAt;
