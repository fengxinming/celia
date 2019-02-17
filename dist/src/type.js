import { getRawType } from './_internal/func';
import isNil from './isNil';
import isObject from './isObject';
import isFunction from './isFunction';

const RAW_DATA_TYPES = {};
'Boolean,Number,String,Function,Array,Date,RegExp,Object,Error,Symbol'.split(',').forEach((name) => {
  RAW_DATA_TYPES[`[object ${name}]`] = name.toLowerCase();
});

export default function (value) {
  if (isNil(value)) {
    return value + '';
  }
  return (isObject(value) || isFunction(value)) ? (RAW_DATA_TYPES[getRawType(value)] || 'object') : typeof value;
};
