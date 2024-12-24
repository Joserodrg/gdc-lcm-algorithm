import { criba } from "../utils/criba.js";

export function descFactoresPrimos(a) {
  const primos = criba(a);

  const primosNum1 = [];

  let numA = a;
  for (let i = 0; i < primos.length; i++) {
    const primo = primos[i];

    while (numA % primo === 0) {
      primosNum1.push(primo);
      numA = numA / primo;
    }

    if (numA === 1) {
      break;
    }
  }

  return primosNum1;
}
