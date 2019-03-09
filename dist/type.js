/*!
 * celia.js v2.1.0
 * (c) 2018-2019 Jesse Feng
 * Released under the MIT License.
 */
"use strict";var isNil=require("./isNil.js"),isFunction=require("./isFunction.js"),isObject=require("./isObject.js"),__chunk_6=require("./chunk-c8dfdf38.js"),RAW_DATA_TYPES={};function type(e){return isNil(e)?e+"":isObject(e)||isFunction(e)?RAW_DATA_TYPES[__chunk_6.toString(e)]||"object":typeof e}"Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol".split(",").forEach(function(e){RAW_DATA_TYPES["[object "+e+"]"]=e.toLowerCase()}),module.exports=type;
