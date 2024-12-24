export function criba(n) {
  let primos = [];

  for (let i = 2; i <= n; i++) {
    primos[i] = true;
  }

  for (let i = 2; i * i <= n; i++) {
    if (primos[i]) {
      for (let x = i * i; x <= n; x += i) {
        primos[x] = false;
      }
    }
  }

  let res = [];
  for (let i = 2; i <= n; i++) {
    if (primos[i]) res.push(i);
  }

  return res;
}
