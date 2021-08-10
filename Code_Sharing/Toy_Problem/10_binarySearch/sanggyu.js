const binarySearch = function (arr, target) {
    //맨 왼쪽 값을 짚기 위한 변수 선언
    let left = 0,
    //맨 오른쪽 값을 짚기 위한 변수선언
      right = arr.length - 1;
      
      //반복이 진행될수록 right와 left의 간격이 줄어든다 간격이 최대 일치하는 상황까지만 반복
    while (left <= right) {
        //중앙값을 구한다 parseInt를 쓰면 특정 진수(수의 진법 체계에 기준이 되는 값)의 정수를 반환
      let middle = parseInt((right + left) / 2);
      
      //리턴조건
      if (arr[middle] === target) {
        return middle;
      }
      //타겟이 arr의 절반인덱스요소보다 작으면 가장 오른쪽 인덱스를 그 중앙보다 1인덱스 낮게 재설정한다
      if (target < arr[middle]) {
        right = middle - 1;
         //타겟이 arr의 절반인덱스요소보다 작으면 가장 왼쪽 인덱스를 그 중앙보다 1인덱스 낮게 재설정한다
      } else {
        left = middle + 1;
      }
    }
    //아무것도 해당되지 않는다면 타겟이랑 arr요소 중에 맞는게 없다는 뜻이므로 -1리턴
    return -1;
  };