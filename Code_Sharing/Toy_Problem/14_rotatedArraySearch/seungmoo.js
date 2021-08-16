const rotatedArraySearch = function (rotated, target) {
  const N = rotated.length;
  let left = 0;
  let right = N - 1;

  // left와 right의 범위를 좁혀나가면서
  // 가운데 인덱스 값인 middle과 target을 비교하여
  // target의 위치를 찾는다.
  while (left <= right) {
    let middle = parseInt((left + right) / 2);

    if (rotated[middle] === target) return middle;

    // middle을 기준으로 왼쪽이 정렬된 상태
    if (rotated[left] < rotated[middle]) {
      // target이 왼쪽 부분 정렬 배열에 포함되는 경우
      if (rotated[left] <= target && target < rotated[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    // middle을 기준으로 오른쪽이 정렬된 상태
    else {
      // target이 오른쪽 부분 정렬 배열에 포함되는 경우
      if (rotated[middle] < target && target <= rotated[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }
  return -1;
};
