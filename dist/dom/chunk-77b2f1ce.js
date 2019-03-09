/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var __chunk_2=require("./chunk-37a0aca0.js"),__chunk_5=require("./chunk-479d732e.js"),__chunk_8=require("./chunk-984e61d1.js"),__chunk_11=require("./chunk-7eb269d7.js");function isFunction(n){return"function"==typeof n}function isNumber(n){return"number"==typeof n}function isArrayLike(n){return!__chunk_8.isNil(n)&&isNumber(n.length)&&!isFunction(n)}function forNumber(n,r,e){for(var u=__chunk_5.iteratorCallback(r,e),i=0,t=void 0;!1!==t&&i<n;i++)t=u(i,i,i)}function fragmentForList(n){var r=document.createDocumentFragment();return __chunk_5.forEach(n,function(n){1===n.nodeType?r.appendChild(n):!__chunk_2.isString(n)&&isArrayLike(n)?__chunk_5.forEach(n,function(n){r.appendChild(n)}):__chunk_11.fragment(n,null,function(n){r.appendChild(n)})}),r}function domManip(r,n,e,u){if(r){e&&document.body[e]&&(u=function(n,r){n[e](r)});var i,t=fragmentForList(n),c=r.length;if(c){var o=c-1;forNumber(o,function(n){return u(r[n],t.cloneNode(!0))}),i=r[o]}else i=r;u(i,t)}return r}exports.domManip=domManip;
