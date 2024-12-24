export function multiply(arr) {
  let multiplyArr = 1;

  for (let i = 0; i < arr.length; i++) {
    multiplyArr = multiplyArr * arr[i];
  }

  return multiplyArr;
}
