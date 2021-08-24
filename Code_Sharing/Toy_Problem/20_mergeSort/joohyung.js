const mergeSort = function (arr) {
  if (arr.length < 2) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  let merge = sort(left, right);
  return merge;
};

function sort(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left[0]);
      left.shift();
    } else {
      result.push(right[0]);
      right.shift();
    }
  }
  return result.concat(left, right);
}
/*
1. 주어진 배열이 "정렬된" 부분 리스트로 나뉘어집니다.
[4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

2. 인접한 부분 리스트 2개가 정렬된 부분 리스트로 병합됩니다.
[[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

2. 병합 과정 (반복) :
[[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

2. 병합 과정 (반복) :
[[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

3. 마무리 : 정렬된 배열이 리턴됩니다.
[1,2,3,4,4,7,9]
*/
