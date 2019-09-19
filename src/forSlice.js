import forSlice from './_forSlice';
import transIndex from './_transIndex';
import isFunction from './isFunction';

export default function (value, start, end, iterator, context) {
  if (value) {
    const len = value.length;
    if (isFunction(start)) { // forEach like
      context = end;
      iterator = start;
      end = len;
      start = 0;
    } else if (isFunction(end)) {
      context = iterator;
      iterator = end;
      end = len;
    }
    // 如果是负数，就需要转成长度对应的正数
    start = transIndex(start, len);
    end = transIndex(end, len);

    forSlice(value, start, end, iterator, context);
  }
};
