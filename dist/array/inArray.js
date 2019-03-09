/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function inArray(r,n,i){if(n){if(n.indexOf)return n.indexOf(r,i);for(var e=n.length,t=i?i<0?Math.max(0,e+i):i:0;t<e;t++)if(t in n&&n[t]===r)return t}return-1}module.exports=inArray;
