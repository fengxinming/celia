import isObject from 'celia.is/isObject';
import forOwn from './forOwn';

const { isArray } = Array;

export default function (proto, mappings) {
  if (!isObject(proto)) {
    return proto;
  }

  forOwn(mappings, (mapping, key) => {
    const fn = proto[key];
    if (isArray(mapping)) {
      mapping.forEach((m) => {
        proto[m] = fn;
      });
    } else {
      proto[mapping] = fn;
    }
  });

  return proto;
}
