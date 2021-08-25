const merge = function (left, right) {
  let merged = [];
  let leftIdx = 0;
  let rightIdx = 0;
  const size = left.length + right.length;

  let i = 0;
  while (i < size) {
    // right 배열의 인덱스를 벗어나거나 right의 요소가 더 클때
    // merged 배열에 left 요소를 추가하고
    // 인덱스 값이 +1 증가한다.
    if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
      merged.push(left[leftIdx]);
      leftIdx++;
      // left 배열의 인덱스를 벗어나거나 left의 요소가 더 클때
    } else {
      merged.push(right[rightIdx]);
      rightIdx++;
    }
    i++;
  }
  return merged;
};
const mergeSort = function (arr) {
  // 배열의 요소가 2개 미만일 때 리턴한다.
  if (arr.length < 2) return arr;

  // 배열의 길이를 반으로 나눈다.
  // left, right로 나누어진 배열을 각각 재귀호출한다.
  // 가장 길이가 짧은 배열부터 차례로 merge 함수를 거치면서
  // 오름차순으로 정렬된 하나의 배열이 완성된다.
  const middle = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  const merged = merge(left, right);
  return merged;
};
