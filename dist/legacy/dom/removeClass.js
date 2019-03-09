/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-e37cb146.js"),require("./chunk-fc07047e.js");var __chunk_3=require("./chunk-abd355a9.js"),__chunk_4=require("./chunk-619deb81.js");require("./chunk-7ad506f8.js");var __chunk_6=require("./chunk-cf5dc476.js");require("./chunk-13089cd6.js");var prop=require("./prop.js"),removeClass=__chunk_4.classListSupported?function(r,e){e.forEach(function(e){r.classList.remove(e)})}:function(e,r){var c=__chunk_3.classesToArray(e.className),s=c.slice(0);r.forEach(function(e){var r=s.indexOf(e);-1<r&&s.splice(r,1)}),(c=c.join(" "))!==(s=s.join(" "))&&(e.className=s)};function removeClass$1(e,r){if(!arguments.length)return prop(e,"className","");var c=__chunk_3.classesToArray(r);return __chunk_6.checkDom(e,function(e){removeClass(e,c)}),e}module.exports=removeClass$1;
