import isObject from '../is/isObject';
import forOwn from './forOwn';

const { isArray } = Array;

export default function (proto, mappings) {
  if (isObject(proto)) {
    forOwn(mappings, (mapping, key) => {
      const fn = proto[key];
      isArray(mapping)
        ? mapping.forEach((m) => {
          proto[m] = fn;
        })
        : (proto[mapping] = fn);
    });
  }
}
