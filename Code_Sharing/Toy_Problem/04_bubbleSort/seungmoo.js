const bubbleSort = function (arr) {
  let count = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let e = 0; e < arr.length - 1 - i; e++) {
      // 현재 요소가 다음 요소보다 크다면 위치를 바꿔준다.
      if (arr[e] > arr[e + 1]) {
        // 구조분해할당
        [arr[e], arr[e + 1]] = [arr[e + 1], arr[e]];
        count++;
      }
    }
    // 정렬이 한번도 이루어지지 않았다면 count가 0이므로
    // 이미 정렬된 상태라는 것을 알 수 있다.
    // 반복문에서 빠져나온다.
    if (count === 0) break;
  }
  return arr;
};

