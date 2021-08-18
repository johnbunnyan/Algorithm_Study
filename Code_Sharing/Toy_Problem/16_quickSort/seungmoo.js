const quickSort = function (arr, transform = (item) => item) {
  // 재귀 탈출
  if (arr.length <= 1) return arr;

  const temp = arr[0];
  const left = [];
  const right = [];
  // 배열의 0번째 요소를 기준으로
  // 작으면 left에, 크면 right에 push한다.
  for (let i = 1; i < arr.length; i++) {
    transform(arr[i]) < transform(temp)
      ? left.push(arr[i])
      : right.push(arr[i]);
  }
  // left, right로 나뉘어진 각각의 배열들도
  // 길이가 1이 될 때까지 반복해서 정렬한다.
  const leftSort = quickSort(left, transform);
  const rightSort = quickSort(right, transform);
  return [...leftSort, temp, ...rightSort];
};
