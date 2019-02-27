/*!
 * celia.js v2.1.0-0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.celia = factory());
}(this, function () { 'use strict';

  var NotImplementedError = /*@__PURE__*/(function (Error) {
    function NotImplementedError(method) {
      var message = method + "() is not implemented";
      Error.call(this, message);
      this.name = 'NotImplementedError';
      this.code = 'ERR_METHOD_NOT_IMPLEMENTED';
    }

    if ( Error ) NotImplementedError.__proto__ = Error;
    NotImplementedError.prototype = Object.create( Error && Error.prototype );
    NotImplementedError.prototype.constructor = NotImplementedError;

    return NotImplementedError;
  }(Error));

  var error = {
    NotImplementedError: NotImplementedError
  };

  return error;

}));
