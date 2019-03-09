/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var classListSupported="classList"in document.body,firstElementChildSupported="firstElementChild"in document.body,propFix={for:"htmlFor",class:"className"};["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"].forEach(function(e){propFix[e.toLowerCase()]=e});var testEl=document.createElement("div"),cssPrefixes=["Webkit","Moz","ms"],emptyStyle=testEl.style;function vendorPropName(e){if(e in emptyStyle)return e;for(var t=e[0].toUpperCase()+e.slice(1),r=cssPrefixes.length;r--;)if((e=cssPrefixes[r]+t)in emptyStyle)return e}var siblingHooker={nextElementSibling:"nextSibling",previousElementSibling:"previousSibling"};exports.classListSupported=classListSupported,exports.testEl=testEl,exports.vendorPropName=vendorPropName,exports.siblingHooker=siblingHooker,exports.propFix=propFix,exports.firstElementChildSupported=firstElementChildSupported;
