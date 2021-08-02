const bubbleSort = function (arr) {
  for(let i = 0; i < arr.length; i++) {
    let swapped = false
    for(let j = 0; j < arr.length; j++) {
      if(arr[j] > arr[j + 1]) {
        swapped = true
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    if(swapped === false){
      break
    } 
  }
  return arr;
};

//오름차순으로 정렬 리턴한다.
//버블 정렬은 정렬중 가장 기본 형태이다
// 스왑을 하는 형태 [i]가 [i+n]보다 크면 자리를 스왑해준다. 계속 진행이 되면, 가장 큰 숫자가 맨 뒤로가게 된다.
// 위 방법을 다시 첫 요소부터 진행시켜준다. 과정을 총 n번(배열의 크기) 반복한다.
// 이떄 스왑을 하지않으면 break를 줘서 끝낸다. (이미 정렬이 되어있는 상태라고 볼 수 있다)
