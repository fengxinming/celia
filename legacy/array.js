/*!
 * celia.js v2.0.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_1=require("./chunk-bdd0d3b2.js"),__chunk_2=require("./chunk-5eff1713.js"),isNumber=require("./isNumber.js"),isUndefined=require("./isUndefined.js"),isNil=require("./isNil.js");require("./isFunction.js");var isArrayLike=require("./isArrayLike.js"),isString=require("./isString.js");require("./chunk-3e6acf32.js"),require("./chunk-e79a056b.js");var each=require("./each.js");function forEach(r,e,n){return r&&__chunk_2.forEach(r,e,n)}function grep(r,e,n){for(var i=[],u=0,a=r.length,t=!n;u<a;u++)!e(r[u],u)!==t&&i.push(r[u]);return i}function inArray(r,e,n){if(e){if(e.indexOf)return e.indexOf(r,n);for(var i=e.length,u=n?n<0?Math.max(0,i+n):n:0;u<i;u++)if(u in e&&e[u]===r)return u}return-1}function includes(r,e){return-1!==inArray(e,r)}function merge(r,e){var n=+e.length,i=0,u=r.length;if(isNumber(n))for(;i<n;)r[u++]=e[i++];else for(;!isUndefined(e[i]);)r[u++]=e[i++];return r.length=u,r}var ref=Array.prototype,push=ref.push;function makeArray(r,e){var n=e||[];return r&&(isArrayLike(Object(r))?merge(n,isString(r)?[r]:r):push.call(n,r)),n}function map(r,e,n){var i=[],u=__chunk_1.newIterator(e,n);return each(r,function(r){r=u(r),isNil(r)||(i[i.length]=r)}),i}function remove(r,e){var n=inArray(e,r);return 0<=n&&r.splice(n,1),e}function toArray(r){return r&&[].concat(r)}var array={forEach:forEach,grep:grep,inArray:inArray,includes:includes,makeArray:makeArray,map:map,merge:merge,remove:remove,toArray:toArray};module.exports=array;