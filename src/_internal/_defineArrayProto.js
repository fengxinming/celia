import { checkProto } from './_defineProto';

const arrayProto = Array.prototype;

export default function (name, val) {
  name = checkProto(arrayProto, name);
  arrayProto[name] = val;
};
