import isObject from './isObject';
import forOwn from './forOwn';

const { isArray } = Array;

export default function (proto, mappings) {
  if (isObject(proto)) {
    forOwn(mappings, (mapping, key) => {
      key = proto[key];
      isArray(mapping)
        ? mapping.forEach(m => (proto[m] = key))
        : (proto[mapping] = key);
    });
  }
};
