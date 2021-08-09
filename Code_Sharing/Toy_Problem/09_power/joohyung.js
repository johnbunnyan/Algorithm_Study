function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  }
  let half = power(base, Math.floor(exponent / 2));
  let result = (half * half) % 94906249;

  return exponent % 2 === 0 ? result : (result * base) % 94906249;
}

/*
거듭 제곱을 반환하면 되는 문제이다. Math.pow는 사용 할 수 없다. 
시간 복잡도 O(logN)으로 작성을 해야 된다. 
exponent가 늘어나도 데이터 처리량은 비슷하거나 줄어들어야 된다. 
exponent를 나눈 값을 power로 넣고 그걸 두 번 곱해주면 된다. power(x, n/2) * power(x, n/2)
Math.floor이기 때문에 exponent가 짝수가 아니라면 base를 한 번 더 곱해줘야 된다. 
*/
