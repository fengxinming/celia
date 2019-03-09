/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-24292794.js");var __chunk_6=require("./chunk-ccb7a15b.js"),__chunk_13=require("./chunk-2b061e9c.js"),__chunk_16=require("./chunk-6597c236.js"),__chunk_20=require("./chunk-129c0294.js");function inArray(e,n,r){if(n){if(n.indexOf)return n.indexOf(e,r);for(var t=n.length,u=r?r<0?Math.max(0,t+r):r:0;u<t;u++)if(u in n&&n[u]===e)return u}return-1}function removeAt(e,n){return e.splice(n,1),n}function remove(e,n){var r=inArray(n,e);return 0<=r?(removeAt(e,r),n):null}var removeEventListenerFn=window.removeEventListener?function(e,n,r){e.removeEventListener(n,r,!1)}:function(e,n,r){e.detachEvent("on"+n,r)};function off(e,n,u){return __chunk_6.checkDom(e,function(r){var t=__chunk_16.expandoStore(r,"events");__chunk_16.expandoStore(r,"handle")&&(__chunk_13.isUndefined(n)?__chunk_20.forEach(t,function(e,n){removeEventListenerFn(r,n,e),delete t[n]}):__chunk_20.forEach(n.split(" "),function(e){__chunk_13.isUndefined(u)?(removeEventListenerFn(r,e,t[e]),delete t[e]):remove(t[e],u)}))}),e}module.exports=off;
