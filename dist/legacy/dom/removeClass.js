/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-59a4e7e2.js"),require("./chunk-37a0aca0.js");var __chunk_3=require("./chunk-cae1bb77.js"),__chunk_4=require("./chunk-c4f6194a.js");require("./chunk-479d732e.js");var __chunk_6=require("./chunk-0a7dfc22.js");require("./chunk-132a4ff9.js");var prop=require("./prop.js"),removeClass=__chunk_4.classListSupported?function(r,e){e.forEach(function(e){r.classList.remove(e)})}:function(e,r){var s=__chunk_3.classesToArray(e.className),c=s.slice(0);r.forEach(function(e){var r=c.indexOf(e);-1<r&&c.splice(r,1)}),(s=s.join(" "))!==(c=c.join(" "))&&(e.className=c)};function removeClass$1(e,r){if(!arguments.length)return prop(e,"className","");var s=__chunk_3.classesToArray(r);return __chunk_6.checkDom(e,function(e){removeClass(e,s)}),e}module.exports=removeClass$1;
