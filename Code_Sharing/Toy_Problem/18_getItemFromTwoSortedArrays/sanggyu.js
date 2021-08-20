//반복문을 이용한 naive한 접근
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  
  let cnt = 0,
  //arr1의 인덱스
    left = 0,
    //arr2의 인덱스
    right = 0;
    //해당 인덱스일 때 리턴할 최종 값
  let target;
  

      //target에 해당하는 인덱스만 염두해두고,
  while (cnt < k) {
    //arr1과 arr2 두 배열을 두고 0인덱스부터 서로 비교
    //양 배열 중 더 작은 값이 더 앞이니까 그 요소를 target으로 지정해두고
    //인덱스 올리기
    if (arr1[left] < arr2[right]) {
      target = arr1[left];
      left++;
    } 
    //arr1[left] >= arr2[right] 
    else {
      target = arr2[right];
      right++;
    }
  //cnt값을 올리고 반복문 종료하므로
    //이 시점에서의 target이 k번째
    cnt++;
  }
  return target;
};
