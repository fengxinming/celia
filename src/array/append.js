export default function (arr, obj) {
  if (arr) {
    arr[arr.length] = obj;
    return obj;
  }
}
