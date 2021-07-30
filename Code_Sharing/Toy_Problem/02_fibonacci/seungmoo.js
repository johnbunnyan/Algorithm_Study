function fibonacci(n) {
  const fiboArr = [0, 1];

  const recurFibo = (n) => {
    // 피보나치 수가 없다면 재귀를 통해 새롭게 추가해준다.
    if (fiboArr[n] === undefined) {
      // n번째 피보나치 수는 바로 직전의 두 피보나치 수의 합이다.
      fiboArr[n] = recurFibo(n - 2) + recurFibo(n - 1);
    }
    return fiboArr[n];
  };
  return recurFibo(n);
}
