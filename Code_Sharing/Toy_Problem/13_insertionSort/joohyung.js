// 일반 삽입 정렬
function insertionSort(arr) {
  // 뒤에 거랑 비교를 해야 돼서 i =1 부터 시작한다.
  for (let i = 1; i < arr.length; i++) {
    // 뒤꺼랑 비교니 --
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}
//배열의 모든 요소를 앞에서부터 차례대로 이미 정렬된 배열 부분과 비교 하여, 알맞은 위치를 찾아 삽입하여 정렬한다.
// 버블 정렬과 가장 큰 차이점은, 삽입 정렬은 한 배열안에 가상으로 sorted, unsorted가(portion) 존재한다. sorted로 간 요소들은
//이미 정렬을 마친 상태라고 생각한다. 반면 버블 정렬은, 한 번 사이클을 돈 후에 다시 바뀐게 있으면 한 번 더 돌아서 변경 할 게 있는지 확인해야 된다.
// 둘다 O(n²)

/************advanced************/
// 두번째 인자로 두 번째 인자로 callback 함수를 받아서, 그 함수의 리턴값을 기준으로 요소들을 정렬하세요.
// 크게 다를 것 없없다. 두 번째 인자로, 리턴하는 함수를 넣어줬다.
function insertionSort(arr, func = (el) => el) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (func(arr[j]) < func(arr[j - 1])) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else {
        break;
      }
    }
  }
  return arr;
}
