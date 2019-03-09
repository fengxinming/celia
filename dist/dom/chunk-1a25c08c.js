/*!
 * celia.js v2.1.1
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";function getStyles(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=window),t.getComputedStyle(e)}function curCSS(e,t,r){var u="";return(r=r||getStyles(e))&&(u=r.getPropertyValue(t)||r[t]),u}exports.curCSS=curCSS;
