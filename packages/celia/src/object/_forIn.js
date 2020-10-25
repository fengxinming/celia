export default function (value, iterator) {
  for (let key in value) {
    if (iterator(value[key], key) === false) {
      break;
    };
  }
};
