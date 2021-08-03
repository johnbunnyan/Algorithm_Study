let tiling = function (n) {
  // 피보나치
  // 앞의 두 경우의 수를 더하면 다음 경우의 수가 나온다.
  let fst = 1;
  let snd = 2;
  let result;
  if (n <= 2) return n;
  for (let i = 3; i <= n; i++) {
    result = fst + snd;
    fst = snd;
    snd = result;
  }
  return result;
};
