export default function (value, iterator) {
  for (let i = 0; i < value;i++) {
    if(iterator(i+1, i, value) === false) {
      break;
    }
  }

  return value;
};
