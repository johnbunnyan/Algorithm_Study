const largestProductOfThree = function (arr) {
  // 배열을 오름차순으로 정렬한다.
  arr.sort((a, b) => a - b);
  const N = arr.length;
  // 배열의 뒤에 있는 숫자 3개의 곱
  // 배열의 앞에 있는 숫자 2개, 뒤에 있는 숫자 1개의 곱
  // 각각 구해서 더 큰 숫자를 return한다.
  const positive = arr[N - 1] * arr[N - 2] * arr[N - 3];
  const withMinus = arr[N - 1] * arr[0] * arr[1];
  return Math.max(positive, withMinus);
};
