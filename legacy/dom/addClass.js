/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";require("./chunk-e37cb146.js"),require("./chunk-fc07047e.js");var __chunk_3=require("./chunk-abd355a9.js"),__chunk_4=require("./chunk-619deb81.js");require("./chunk-7ad506f8.js");var __chunk_6=require("./chunk-cf5dc476.js"),__chunk_7=require("./chunk-56b022d1.js"),addClass=__chunk_4.classListSupported?function(s,c){c.forEach(function(c){s.classList.add(c)})}:function(c,s){var n=__chunk_3.classesToArray(c.className),u=n.slice(0);s.forEach(function(c){-1===u.indexOf(c)&&__chunk_7.append(u,c)}),(n=n.join(" "))!==(u=u.join(" "))&&(c.className=u)};function addClass$1(c,s){var n=__chunk_3.classesToArray(s);return __chunk_6.checkDom(c,function(c){addClass(c,n)}),c}module.exports=addClass$1;
