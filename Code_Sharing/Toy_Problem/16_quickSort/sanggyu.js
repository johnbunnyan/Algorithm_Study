//재귀를 기반으로 pivot이라는 이름으로 0번째 요소를 기준점 삼음
//left와 right라는 배열에 비교된 다른 요소들을 넣고 각 배열을 다시 재귀로 돌림
//pivot을 기준으로 작은값은 오른쪽배열,큰값은 왼쪽배열에 넣고
//이를 재귀로 반복하는 정렬방식
function quickSort(arr, transform = (item) => item) {
    if (arr.length <= 1) return arr;
  
  //pivot은 항상 0번째 요소로 고정
  //재귀로 들어왔을 때에도 0번째랑 다른 요소들이랑 비교
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      //처음 요소보다 작거나 left배열로 || 같거나 크면 right배열로 
      if (transform(arr[i]) < transform(pivot)) left.push(arr[i]);
      else right.push(arr[i]);
    }
  //재귀의 활용
  //첫 탈출조건에서 반환된 배열들이 각각 변수에 저장되고
    const lSorted = quickSort(left, transform);
    const rSorted = quickSort(right, transform);
  
  //재귀를 반복하면서 다시 위 변수들에 아래 리턴값들이 누적
    return [...lSorted, pivot, ...rSorted];
  }
  