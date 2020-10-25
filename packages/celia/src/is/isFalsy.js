const falseLike = {
  false: true,
  null: true,
  undefined: true,
  0: true,
  NaN: true,
  '': true
};
export default function (bool) {
  return !!falseLike[bool];
}
