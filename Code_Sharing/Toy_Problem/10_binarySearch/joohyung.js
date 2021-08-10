const binarySearch = function (arr, target) {
  let start = 0;
  let end = arr.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (target > arr[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

//target의 인덱스를 리턴해야 된다.
// 이런식으로 바로 리턴해줘도 되지만, 이진법을 사용해야 된다
const binarySearch = function (arr, target) {
  return arr.indexOf(target);
};

/* 이진법을 사용하려면 일단 배열이 오름차순이나 내림차순이어야 된다.
 문제에 이미 오름차순으로 정렬이 되어 있다하니, 정렬은 안 해줘도 될 것 같다.
이진법은 배열의 중간을 기준으로 타겟이 왼쪽에 있나 오른쪽에 있나 확인을 하는거다
만약 중간이 타겟이 맞다면 그 인덱스를 반환하면 된다, 중간이 타겟이랑 맞을 때 까지 돌린다. 
한번 확인 할 때 마다 확인해야 되는 요소가 반은 준다. 그러므로 (O(logN)) 이다
*/
