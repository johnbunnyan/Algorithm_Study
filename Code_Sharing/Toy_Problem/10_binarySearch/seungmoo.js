const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    // 배열의 중간에 있는 인덱스를 기준으로 target과 비교하여
    // 경우의 수를 반으로 줄인다.
    let middle = parseInt((left + right) / 2);
    if (arr[middle] === target) return middle;
    // 가운데 요소가 target보다 크면 오른쪽 인덱스를 -1
    // 가운데 요소가 target보다 작으면 왼쪽 인덱스를 +1
    if (target < arr[middle]) right = middle - 1;
    else {
      left = middle + 1;
    }
  }
  return -1;
};
