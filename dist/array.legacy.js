/*!
 * celia.js v3.0.10
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function i(n,r){return n[n.length]=r}function c(n,r){return r?n.bind(r):n}function u(n,r,t){!function(n,r,t,u,e){for(var i=c(u,e),o=r,f=void 0;!1!==f&&o<t;o++)f=i(n[o],o,n)}(n,0,n.length,r,t)}function o(n,r,t){return n&&u(n,r,t)}function e(n,r,t){if(r){if(r.indexOf)return r.indexOf(n,t);for(var u=r.length,e=t?(o=u,(i=t)<0?(c=o+i)<=(f=0)?f:c:i):0;e<u;e++)if(e in r&&r[e]===n)return e}var i,o,f,c;return-1}var f=Array.isArray;function a(r,n){var t=r.length;return o(n,function(n){r[t++]=n}),f(r)||(r.length=t),r}function v(n){return null==n}function l(n){return"number"==typeof n}function p(n){return!v(n)&&l(n.length)&&!("function"==typeof n)}var h=Array.prototype.push;function s(n,r,t){n&&(p(n)?u(n,r,t):l(n)?function(n,r,t){for(var u=c(r,t),e=0,i=void 0;!1!==i&&e<n;e++)i=u(e,e,e)}(n,r,t):function(n,r,t){var u=c(r,t);for(var e in n)if(!1===u(n[e],e,n))break}(n,r,t))}function y(n,r){return n.splice(r,1),r}var n={append:function(n,r){if(n)return i(n,r)},forEach:o,grep:function(n,t,u){var e=[];return u=!!u,o(n,function(n,r){!t(n,r)===u&&i(e,n)}),e},inArray:e,includes:function(n,r){return-1!==e(r,n)},join:a,makeArray:function(n,r){var t=r||[];return n&&(p(Object(n))?a(t,"string"==typeof n?[n]:n):t.push?t.push(n):h.call(t,n)),t},map:function(n,r,t){var u=[],e=c(r,t);return s(n,function(n,r){v(n=e(n,r))||i(u,n)}),u},remove:function(n,r){var t=e(r,n);return 0<=t?(y(n,t),r):null},removeAt:y,toArray:function(n){return n&&[].concat(n)}};module.exports=n;
