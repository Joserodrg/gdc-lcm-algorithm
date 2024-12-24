export function group(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if (obj[element]) {
      obj[element].push(element);
    } else {
      obj[element] = [element];
    }
  }
  return obj;
}
