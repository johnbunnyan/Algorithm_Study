const LSCS = function (arr) {
  let sum = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    // i번째 요소가 이전 요소들과 더했을 때보다 크다면
    // i번째 요소부터 부분배열이 새로 시작된다.
    sum = Math.max(sum + arr[i], arr[i]);
    // 합이 더 큰 새로운 연속된 부분 배열이 있다면 값이 바뀐다.
    max = Math.max(max, sum);
  }
  return max;
};
