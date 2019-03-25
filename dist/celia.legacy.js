/*!
 * celia.js v3.0.9
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function o(e,n){e[e.length]=n}function c(e,n){return n?e.bind(n):e}function i(e,n,t,r,u){for(var i=c(r,u),a=n,o=void 0;!1!==o&&a<t;a++)o=i(e[a],a,e)}function a(e,n,t){i(e,0,e.length,n,t)}function s(e,n,t){return e&&a(e,n,t)}function r(e,n,t){if(n){if(n.indexOf)return n.indexOf(e,t);for(var r=n.length,u=t?t<0?Math.max(0,r+t):t:0;u<r;u++)if(u in n&&n[u]===e)return u}return-1}var u=Array.isArray;function d(n,e){var t=n.length;return s(e,function(e){n[t++]=e}),u(n)||(n.length=t),n}function f(e){return null==e}function l(e){return"function"==typeof e}function m(e){return"number"==typeof e}function h(e){return!f(e)&&m(e.length)&&!l(e)}function g(e){return"string"==typeof e}var v=Array.prototype.push;function p(e,n,t){var r=c(n,t);for(var u in e)if(!1===r(e[u],u,e))break}function M(e,n,t){for(var r=c(n,t),u=0,i=void 0;!1!==i&&u<e;u++)i=r(u,u,u)}function Y(e,n,t){e&&(h(e)?a(e,n,t):m(e)?M(e,n,t):p(e,n,t))}function e(e,n,t){var r=[],u=c(n,t);return Y(e,function(e,n){f(e=u(e,n))||o(r,e)}),r}function y(e,n){return e.splice(n,1),n}var n={append:function(e,n){if(e)return o(e,n),n},forEach:s,grep:function(e,t,r){var u=[];return r=!!r,s(e,function(e,n){!t(e,n)===r&&o(u,e)}),u},inArray:r,includes:function(e,n){return-1!==r(n,e)},join:d,makeArray:function(e,n){var t=n||[];return e&&(h(Object(e))?d(t,g(e)?[e]:e):t.push?t.push(e):v.call(t,e)),t},map:e,remove:function(e,n){var t=r(n,e);return 0<=t?(y(e,t),n):null},removeAt:y,toArray:function(e){return e&&[].concat(e)}},t=/-([a-z])/g;function S(e){return!f(e)&&"object"==typeof e}function D(e,n){return n?new Date(Date.UTC(e[0],e[1]||0,f(e[2])?1:e[2],e[3]||0,e[4]||0,e[5]||0,e[6]||0)):new Date(e[0],e[1]||0,f(e[2])?1:e[2],e[3]||0,e[4]||0,e[5]||0,e[6]||0)}var b=Date.prototype;b.setDay||(b.setDay=function(e){var n=this.getDay();e!==n&&this.setTime(+this+864e5*(e-n))});var H={},w={};function A(e,n){return H[e]||n}function k(e,n,t){var r=e.slice(0,-1);H[n]=H[e]=H[r]=n,w[n]=function(e,n){return f(n)?e["get"+t]():(e["set"+t](n),e)}}k("years","Y","FullYear"),k("months","M","Month"),k("dates","D","Date"),k("days","d","Day"),k("hours","h","Hours"),k("minutes","m","Minutes"),k("seconds","s","Seconds"),k("milliseconds","ms","Milliseconds"),k("times","t","Time");var O={Y:0,M:1,d:2,h:3,m:4,s:5,ms:6};function x(e){return e=A(e,"ms"),O[e]}function T(e,n,t){var r=[e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()];if(S(n))p(n,function(e,n){var t=x(n);r[t]+=e});else{var u=x(t);r[u]+=n}return e.setTime(+D(r)),e}function j(e){return new Date(+e)}function C(e){var n=e.getFullYear();return n%4==0&&n%100!=0||n%400==0}var F=[31,28,31,30,31,30,31,31,30,31,30,31],I=[31,29,31,30,31,30,31,31,30,31,30,31];function Z(e){return C(e)?I:F}function U(e){return void 0===e}var E=/^\/?Date\((-?\d+)/i,N=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,B=[["YYYY-MM-DD",/(\d{4})-(\d\d)-(\d\d)/],["YYYY-MM",/(\d{4})-(\d\d)/,!1],["YYYYMMDD",/(\d{4})(\d\d)(\d\d)/],["YYYYMM",/(\d{4})(\d\d)/,!1],["YYYY",/\d{4}/,!1]],z=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)\s*([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,L=/\[.*?\]|Y{2,4}|y{2,4}|M{1,2}|D{1,2}|d{1,2}|H{1,2}|h{1,2}|m{1,2}|s{1,2}|SSS|Z{1,2}/g,R=[["HH:mm:ss.SSSS",/(\d\d):(\d\d):(\d\d)\.(\d+)/],["HH:mm:ss,SSSS",/(\d\d):(\d\d):(\d\d),(\d+)/],["HH:mm:ss",/(\d\d):(\d\d):(\d\d)/],["HH:mm",/(\d\d):(\d\d)/],["HHmmss.SSSS",/(\d\d)(\d\d)(\d\d)\.(\d+)/],["HHmmss,SSSS",/(\d\d)(\d\d)(\d\d),(\d+)/],["HHmmss",/(\d\d)(\d\d)(\d\d)/],["HHmm",/(\d\d)(\d\d)/],["HH",/\d\d/]],W=/(Z)|[+-](\d\d)(?::?(\d\d))?/,P=(new Date).getTimezoneOffset(),$=Object.prototype.toString;function V(e){return $.call(e)}function q(e){return"[object Date]"===V(e)}function _(e,n,t){if(!g(e))return D(e,!0===n);if(g(n))return D(function(t,r){var e,n=r.length,u=[],i=!1;if(M(n,function(e){var n=t.charAt(e);switch(r.charAt(e)){case"Y":case"y":u[0]=(u[0]||"")+n;break;case"M":u[1]=(u[1]||"")+n;break;case"D":case"d":u[2]=(u[2]||"")+n;break;case"H":case"h":u[3]=(u[3]||"")+n;break;case"m":u[4]=(u[4]||"")+n;break;case"s":u[5]=(u[5]||"")+n;break;case"S":u[6]=(u[6]||"")+n;break;case"Z":i=!0}}),u=u.map(function(e){return parseInt(e,10)}),i)if(e=W.exec(t.slice(-1<r.indexOf("ZZ")?-5:-6))){var a=P;if(!e[1]){var o="+"===e[0].charAt(0)?1:-1;u[3]-=e[2]*o,u[4]-=(e[3]||0)*o}u[4]-=a}else u.isUTC=i&-1<t.indexOf("Z");return f(u[1])||(u[1]-=1),u}(e,n),t);var r=function(e){var t,r,u=[],i=z.exec(e)||N.exec(e);if(i){if(a(B,function(e,n){if(r=e[1].exec(i[1]))return M(3,function(e){u[e]=parseInt(r[e+1]||1,10)}),u[1]-=1,t=!1!==e[2],!1}),e.indexOf(u[0]))return e;if(r=null,i[3]&&a(R,function(e){if(r=e[1].exec(i[3]))return u=u.concat(r.slice(1).map(function(e){return parseInt(e,10)})),!1}),!t&&r)return u;if(r=null,i[4]){r=W.exec(i[4]);var n=P;r[1]||(u[3]-=r[2],u[4]-=r[3]||0),u[4]-=n}return u}return 4===e.length&&B[4][1].test(e)?((u=[parseInt(e,10),0,1]).isUTC=!0,u):e}(e);if(r!==e)return D(r,r.isUTC||!0===n);var u=E.exec(e);return new Date(null!==u?+u[1]:e)}function G(e,n,t){return e=f(e)?new Date:e.length?_(e,n,t):m(e)?new Date(e):q(e)?new Date(+e):e._i&&e.isValid()?new Date(+e):new Date}function J(e,n){var t=12*(n.getFullYear()-e.getFullYear())+(n.getMonth()-e.getMonth()),r=T(j(e),t,"months");return-(t+(n<r?(n-r)/(r-T(j(e),t-1,"months")):(n-r)/(T(j(e),t+1,"months")-r)))||0}function K(e,n){switch(n=A(n)){case"Y":e.setMonth(0);case"M":e.setDate(1);case"D":case"d":e.setHours(0);case"h":e.setMinutes(0);case"m":e.setSeconds(0);case"s":e.setMilliseconds(0)}return e}function Q(e,n){return"ms"===(n=A(n,"ms"))||(K(e,n),T(e,1,n),T(e,-1,"ms")),e}function X(e,n){return void 0===n&&(n=2),("000000"+e).slice(-n)}function ee(e,n){var t;return e<0?(t="+",e=Math.abs(e)):t="-",""+t+X(Math.floor(e/60))+(n?"":":")+X(Math.floor(e%60))}function ne(e){return 12<(e=e||24)?e-12:e}function te(e,n,t,r){if(n=G(n),"ms"===(t=A(t,"ms")))switch(r){case"before":return+e<+n;case"after":return+n<+e;default:return+e==+n}else{var u=+n;switch(r){case"before":return+Q(j(e),t)<u;case"after":return+K(j(e),t)>u;default:return+K(j(e),t)<=u&&u<=+Q(j(e),t)}}}function re(e,n,t){return te(e,n,t,"after")}function ue(e,n,t){return te(e,n,t,"before")}var ie={add:T,clone:j,dayOfYear:function(e,n){var t=Z(e),r=e.getMonth(),u=0;return M(r,function(e){u+=t[e]}),u+=e.getDate(),U(n)?u:(e.setTime(+e+864e5*(n-u)),e)},daysInMonth:function(e){return Z(e)[e.getMonth()]},diff:function(e,n,t,r){var u,i;switch(n=G(n),t=A(t)){case"Y":u=J(e,n)/12;break;case"M":u=J(e,n);break;case"s":u=(e-n)/1e3;break;case"m":u=(e-n)/6e4;break;case"h":u=(e-n)/36e5;break;case"d":u=(e-n)/864e5;break;default:u=e-n}return r?u:(i=u)<0?Math.ceil(i)||0:Math.floor(i)},endOf:Q,format:function(n,e){return e&&"UTC"!==e?e.replace(L,function(e){switch(e){case"YY":return String(n.getFullYear()).slice(-2);case"YYYY":case"yyyy":return n.getFullYear();case"M":return n.getMonth()+1;case"MM":return X(n.getMonth()+1);case"D":case"d":return n.getDate();case"DD":case"dd":return X(n.getDate());case"H":return n.getHours();case"HH":return X(n.getHours());case"h":return ne(n.getHours());case"hh":return X(ne(n.getHours()));case"m":return n.getMinutes();case"mm":return X(n.getMinutes());case"s":return n.getSeconds();case"ss":return X(n.getSeconds());case"SSS":return X(n.getMilliseconds(),3);case"Z":return ee(P);case"ZZ":return ee(P,!0);default:return e}}):n.toISOString()},get:function(e,n){return n=A(n,"t"),w[n](e)},isAfter:re,isBefore:ue,isBetween:function(e,n,t,r,u){return("("===(u=u||"()").charAt(0)?re(e,n,r):!ue(e,n,r))&&(")"===u.charAt(1)?ue(e,t,r):!re(e,t,r))},isLeapYear:C,isSame:function(e,n,t){return te(e,n,t)},isSameOrAfter:function(e,n,t){return!ue(e,n,t)},isSameOrBefore:function(e,n,t){return!re(e,n,t)},isValid:function(e){return"Invalid Date"!==e.toString()},parse:G,set:function(e,n,t){return(n=A(n))&&w[n](e,t),e},startOf:K,subtract:function(e,n,t){return T(e,-n,t)}};function ae(e,n,t){return S(e)&&function(e,n,t){var r=c(n,t);for(var u in e)if(e.hasOwnProperty(u)&&!1===r(e[u],u,e))break}(e,n,t)}function oe(e){return decodeURIComponent(e.replace(/\+/g," "))}var ce=Array.isArray;var se={parse:function(e,n,i){void 0===n&&(n="&"),void 0===i&&(i="=");var a={};return g(e)&&e.split(n).forEach(function(e){var n=e.split(i),t=n[0],r=n[1],u=a[t];U(u)?a[t]=oe(r):ce(u)?o(u,oe(r)):a[t]=[u,oe(r)]}),a},prepend:function(e,n){return n=g(n)?n:"",e?n+e:e},stringify:function(e,n,t){void 0===n&&(n="&"),void 0===t&&(t="=");var r=[];return ae(e,function(e,n){e||!f(e)&&!isNaN(e)||(e=""),o(r,encodeURIComponent(n)+t+encodeURIComponent(e))}),r.length?r.join(n):""}};var de={};"Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol".split(",").forEach(function(e){de["[object "+e+"]"]=e.toLowerCase()});var fe={isAbsolute:function(e){return/^([a-z][a-z0-9+\-.]*:)?\/\//i.test(e)},join:function(e){var n=arguments,t=n.length;f(e)?1<t&&(e=""):e=e.replace(/\/+$/,"");var r="";return i(n,1,t,function(e){r+="/",r+=e||""}),r&&(e+=r.replace(/\/+/g,"/")),e}},le={array:n,camelCase:function(e){return e.replace(t,function(e,n){return n.toUpperCase()})},date:ie,each:Y,forEach:s,forIn:function(e,n,t){return S(e)&&p(e,n,t)},forNumber:function(e,n,t){return e&&M(e,n,t)},forOwn:ae,forSlice:function(e,n,t,r,u){e&&(l(t)&&(u=r,r=t,t=e.length),i(e,n,t||e.length,r,u))},isArrayLike:h,isAsyncFunction:function(e){return"[object AsyncFunction]"===V(e)},isBoolean:function(e){return"boolean"==typeof e},isDate:q,isFunction:l,isNil:f,isNumber:m,isObject:S,isPromiseLike:function(e){return!!e&&l(e.then)},isString:g,isUndefined:U,map:e,qs:se,sleep:function(n){return new Promise(function(e){setTimeout(e,n)})},type:function(e){return f(e)?e+"":S(e)||l(e)?de[V(e)]||"object":typeof e},url:fe};module.exports=le;
