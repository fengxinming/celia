/*!
 * celia.js v2.1.0-1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-ee0a2fc7.js"),require("./chunk-b17e0ab6.js");var __chunk_3=require("./chunk-b2b68f01.js"),__chunk_4=require("./chunk-4e3c1e04.js");require("./chunk-24292794.js");var __chunk_6=require("./chunk-ccb7a15b.js");require("./chunk-2b061e9c.js");var prop=require("./prop.js"),removeClass=__chunk_4.classListSupported?function(r,e){e.forEach(function(e){r.classList.remove(e)})}:function(e,r){var c=__chunk_3.classesToArray(e.className),s=c.slice(0);r.forEach(function(e){var r=s.indexOf(e);-1<r&&s.splice(r,1)}),(c=c.join(" "))!==(s=s.join(" "))&&(e.className=s)};function removeClass$1(e,r){if(!arguments.length)return prop(e,"className","");var c=__chunk_3.classesToArray(r);return __chunk_6.checkDom(e,function(e){removeClass(e,c)}),e}module.exports=removeClass$1;
