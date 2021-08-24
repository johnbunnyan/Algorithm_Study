const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  let count = 0;
  // 각 배열의 인덱스
  let left = 0;
  let right = 0;

  // 가장 작은 수부터 시작해서
  // count가 k와 같아지는 순간까지 반복한다.
  let target;
  while (count < k) {
    // arr1과 arr2의 요소를 비교해서
    // 작은 수가 target이 되고
    // 해당 배열의 인덱스가 1 증가한다.
    if (arr1[left] < arr2[right]) {
      target = arr1[left];
      left++;
    } else {
      target = arr2[right];
      right++;
    }
    count++;
  }
  return target;
};
