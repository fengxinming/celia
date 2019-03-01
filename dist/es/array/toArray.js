export default function (arrLike) {
  return arrLike && [...arrLike];
  // return arrLike && slice.call(arrLike, 0);
}
