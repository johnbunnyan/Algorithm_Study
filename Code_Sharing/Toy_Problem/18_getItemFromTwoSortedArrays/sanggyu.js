// //반복문을 이용한 naive한 접근
// const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  
//   let cnt = 0,
//   //arr1의 인덱스
//     left = 0,
//     //arr2의 인덱스
//     right = 0;
//     //해당 인덱스일 때 리턴할 최종 값
//   let target;
  

//       //target에 해당하는 인덱스만 염두해두고,
//   while (cnt < k) {
//     //arr1과 arr2 두 배열을 두고 0인덱스부터 서로 비교
//     //양 배열 중 더 작은 값이 더 앞이니까 그 요소를 target으로 지정해두고
//     //인덱스 올리기
//     if (arr1[left] < arr2[right]) {
//       target = arr1[left];
//       left++;
//     } 
//     //arr1[left] >= arr2[right] 
//     else {
//       target = arr2[right];
//       right++;
//     }
//   //cnt값을 올리고 반복문 종료하므로
//     //이 시점에서의 target이 k번째
//     cnt++;
//   }
//   return target;
// };



//이진탐색으로 k를 각각 나눈 뒤
//각 배열의 0번째 인덱스까지 범위를 역으로 줄여가는 방식
const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
  //위 풀이와 동일한 변수지정
  //arr1의 현재 인덱스
  let leftIdx = 0,
  //arr2의 현재 인덱스
    rightIdx = 0;

//  반복마다 k에서 leftStep, rightStep을 빼므로 점점 줄어듦
  while (k > 0) {

    // 이진 탐색을 위해 각 배열에서 k를 절반으로 쪼개서 카운트 한다.   
    let cnt = Math.ceil(k / 2);
    let leftStep = cnt,
      rightStep = cnt;



    // 엣지 케이스
    // 카운트가 남았음에도 배열의 끝에 도달하면
    // 해당 배열에는 k인덱스가 없고 나머지 배열에 있다는 의미이므로
    // k를 나머지 배열쪽으로 넘긴다.
    if (leftIdx === arr1.length) {
      rightIdx = rightIdx + k;
      break;
    }

    if (rightIdx === arr2.length) {
      leftIdx = leftIdx + k;
      break;
    }

    // 엣지 케이스
    // 현재 카운트가 남아있는 후보 요소들보다 많을 경우(카운트의 잉여), leftStep(현재 할당량)을 남아있는 요소들의 개수로 바꾼다.
    //남아있는 후보 요소들 === 
    //ex.[1,2,3,!,?,?,?]
    //arr1.length ->7 
    //!에 해당하는 ->4
    if (cnt > arr1.length - leftIdx) leftStep = arr1.length - leftIdx;
    if (cnt > arr2.length - rightIdx) rightStep = arr2.length - rightIdx;


    // 두 배열의 현재 검사 요소 위치를 비교해서, 
    //그 값이 작은 배열(인덱싱으로 선택된 요소)은 비교한 위치 앞에 있는 요소들을 모두 후보군에서 제외시킨다.
    if (arr1[leftIdx + leftStep - 1] < arr2[rightIdx + rightStep - 1]) {
      leftIdx = leftIdx + leftStep;
      // 처리가 끝나면 k값을 절반으로 떨어뜨린다 (leftStep과 rightStep은 k값을 절반으로 나눈 값)
      k = k - leftStep;
    } else {
      rightIdx = rightIdx + rightStep;
      k = k - rightStep;
    }
  }

  leftMax = arr1[leftIdx - 1] || -1;
  rightMax = arr2[rightIdx - 1] || -1;

  return Math.max(leftMax, rightMax);
};
