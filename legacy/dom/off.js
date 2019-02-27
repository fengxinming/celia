/*!
 * celia.js v2.0.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-ad3cda5b.js"),require("./chunk-1b8cb8e3.js");var __chunk_5=require("./chunk-9058df49.js"),__chunk_6=require("./chunk-039b1f78.js");function inArray(e,n,r){if(n){if(n.indexOf)return n.indexOf(e,r);for(var t=n.length,i=r?r<0?Math.max(0,t+r):r:0;i<t;i++)if(i in n&&n[i]===e)return i}return-1}function removeAt(e,n){return e.splice(n,1),n}function remove(e,n){var r=inArray(n,e);return 0<=r?(removeAt(e,r),n):null}var removeEventListenerFn=window.removeEventListener?function(e,n,r){e.removeEventListener(n,r,!1)}:function(e,n,r){e.detachEvent("on"+n,r)};function off(r,e,n){var t=__chunk_5.expandoStore(r,"events");__chunk_5.expandoStore(r,"handle")&&(__chunk_5.isUndefined(e)?__chunk_6.forEach(t,function(e,n){removeEventListenerFn(r,n,e),delete t[n]}):__chunk_6.forEach(e.split(" "),function(e){__chunk_5.isUndefined(n)?(removeEventListenerFn(r,e,t[e]),delete t[e]):remove(t[e],n)}))}module.exports=off;
