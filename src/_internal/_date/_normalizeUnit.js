import isNil from '../../isNil';

const dateProto = Date.prototype;
/* eslint no-extend-native: 0 */
if (!dateProto.setDay) {
  dateProto.setDay = function (val) {
    const day = this.getDay();
    if (val !== day) {
      this.setTime(+this + ((val - day) * 86400000));
    }
  };
}

const UNITS = {};
export const fns = {};

function normalize(u, defaultValue) {
  return UNITS[u] || defaultValue;
}

function setter(longer, shorter, method) {
  const longerish = longer.slice(0, -1);
  UNITS[shorter] = UNITS[longer] = UNITS[longerish] = shorter;
  fns[shorter] = function (date, val) {
    if (isNil(val)) {
      return date[`get${method}`]();
    } else {
      date[`set${method}`](val);
      return date;
    }
  };
};
setter('years', 'Y', 'FullYear');
setter('months', 'M', 'Month');
setter('dates', 'D', 'Date');
setter('days', 'd', 'Day');
setter('hours', 'h', 'Hours');
setter('minutes', 'm', 'Minutes');
setter('seconds', 's', 'Seconds');
setter('milliseconds', 'ms', 'Milliseconds');
setter('times', 't', 'Time');

export default normalize;
