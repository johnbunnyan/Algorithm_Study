
const rotatedArraySearch = function (rotated, target) {
    //변동이 자주 있을 인덱스는 변수로 미리 지정해둔다
    //가장 왼쪽의 인덱스
    let left = 0,
    //가장 오른쪽의 인덱스
      right = rotated.length - 1;
  
  //일반적인 바이너리 서치 패턴
  //left와 right 범위가 점점 좁혀지고 같아질때까지만 반복
    while (left <= right) {
      //가운데 인덱스
      let middle = parseInt((right + left) / 2);
  
  //바이너리 서치로 찾으면 리턴
      if (rotated[middle] === target) {
        return middle;
      }
  
   // 왼쪽 절반이 정렬되어 있는 상태(내림차순 정렬이니까 가운데 요소는 왼쪽 요소보다 당연히 크다)
      if (rotated[left] < rotated[middle]) {
             //원래 바이너리 서치의 범위 조절 구간 + rotate 가능한 배열에서는 가장 왼쪽이 타겟보다 작을 수 있다
        if (target < rotated[middle] && rotated[left] <= target) {
          right = middle - 1;
        //target >= rotated[middle] || rotated[left] > target
        } else {
          //타켓이 왼쪽에 있다
          left = middle + 1;
        }
         // 오른쪽 절반이 정렬되어 있는 상태
      } else {
        if (target <= rotated[right] && rotated[middle] < target) {
          left = middle + 1;
        } else {
          right = middle - 1;
        }
      }
    }
  
    return -1;
  };