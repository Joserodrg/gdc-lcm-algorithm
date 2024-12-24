export function flatten(arr) {
  let arrFlattened = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    for (let j = 0; j < current.length; j++) {
      arrFlattened.push(current[j]);
    }
  }
  return arrFlattened;
}
