const UNITS = {};
const setter = function (val, key) {
  UNITS[val] = UNITS[val.slice(0, -1)] = UNITS[key] = key;
};
setter('years', 'Y');
setter('months', 'M');
setter('dates', 'D');
setter('days', 'd');
setter('hours', 'h');
setter('minutes', 'm');
setter('seconds', 's');
setter('milliseconds', 'ms');

export default function (u, defaultValue) {
  return UNITS[u] || defaultValue;
}
