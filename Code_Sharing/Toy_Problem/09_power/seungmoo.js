function power(base, exponent) {
  // 재귀탈출
  // 지수가 0이면 값은 1이다.
  if (exponent === 0) return 1;

  // 거듭제곱을 분리하여 재귀함수로 그 값을 구해준다.
  // 2^2 === 2^1 * 2^1
  const half = parseInt(exponent / 2);
  const temp = power(base, half);
  const result = (temp * temp) % 94906249;

  // 지수를 반으로 나누어 parseInt를 사용했기 때문에 소수점은 계산에서 제외된다.
  // 그러므로 지수가 홀수일 때는 한번 더 곱해준다.
  // 2^5 === (2^2) * (2^2)
  // 32 !== 16
  // 32 === 16 * 2
  return exponent % 2 === 1 ? (result * base) % 94906249 : result;
}
