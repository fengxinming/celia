/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-59a4e7e2.js"),require("./chunk-37a0aca0.js");var __chunk_3=require("./chunk-cae1bb77.js"),__chunk_4=require("./chunk-c4f6194a.js");require("./chunk-479d732e.js");var __chunk_6=require("./chunk-0a7dfc22.js"),__chunk_7=require("./chunk-b5694aee.js"),addClass=__chunk_4.classListSupported?function(s,c){c.forEach(function(c){s.classList.add(c)})}:function(c,s){var a=__chunk_3.classesToArray(c.className),e=a.slice(0);s.forEach(function(c){-1===e.indexOf(c)&&__chunk_7.append(e,c)}),(a=a.join(" "))!==(e=e.join(" "))&&(c.className=e)};function addClass$1(c,s){var a=__chunk_3.classesToArray(s);return __chunk_6.checkDom(c,function(c){addClass(c,a)}),c}module.exports=addClass$1;
