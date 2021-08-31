//반복적 접근
// 1. 주어진 배열이 "정렬된" 부분 리스트로 나뉘어집니다.
// [4,7,4,3,9,1,2] -> [[4],[7],[4],[3],[9],[1],[2]]

// 2. 인접한 부분 리스트 2개가 정렬된 부분 리스트로 병합됩니다.
// [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]].  -->> 해당 부분에서 잘게 나누어진 리스트를 병합한 후 버블소트로 정렬

// 2. 병합 과정 (반복) :
// [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

// 2. 병합 과정 (반복) :
// [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]

// 3. 마무리 : 정렬된 배열이 리턴됩니다.
// [1,2,3,4,4,7,9]


function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      for (var i = 1; i < array.length; i += 1) {
        if (array[i - 1] > array[i]) {
          done = false;
          var tmp = array[i - 1];
          array[i - 1] = array[i];
          array[i] = tmp;
        }
      }
    }
  
    return array;
  }
  
  const mergeSort = function (arr) {
  
  //1. 주어진 배열이 "정렬된" 부분 리스트로 나뉘어집니다.
  let splited = arr.map((el)=>[el])
  // 새롭게 합쳐진 배열을 담는 임시변수
  let newSplited=[]
  
  // 2. 병합 과정 반복
  //splited의 길이가 1이 될 때까지 반복
  let done=splited.length
  while(done > 1){
    //0번째 부터 인접한 부분을 합치므로 i는 0기준으로 2씩 커짐
  for(let i=0;i<done;i+=2){
   //i가 짝수번째여서 바로 뒤에 합칠 요소가 있을 때
    if(splited[i+1] !== undefined){
      //합치기
     let merge = splited[i].concat(splited[i+1])
     //버블정렬
     let ordered = bubbleSort(merge)
  //합쳐서 정렬된 요소 빈 배열에 새롭게 넣기
  newSplited.push(ordered)
  }
   //i가 홀수번째여서 i+1요소가 없어 undefined로 뜰때
  else{
    //해당 요소만 넣기
    let merge = splited[i]
    newSplited.push(merge)
  }
  }
  //매 반복마다 순회할 배열의 길이는 전 배열을 반으로 나눈 것의 올림이다.
  //[[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]] ->  [[3,4,4,7], [1,2,9]]
    done = Math.ceil(done/2)
    //순회를 돌 배열에 새롭게 할당하고
    splited = newSplited
    //다음 순회에서 새롭게 담을 변수 비워놓기
    newSplited = []
  }
  return splited
  };
  
  //크롬 개발자 도구에서 제시된 테스트 케이스는 다 정상출력하나, 실행시간 초과가 뜨는 걸 보면 입력값이 큰 경우에 시간이 오래 걸리는 것 같다.
  //버블 소트를 쓰는 것이 아니라 다른 방식으로 정렬해야 하는 듯


  //레퍼런스
  const merge = function (left, right) {
    let merged = [];
    let leftIdx = 0,
      rightIdx = 0;
    const size = left.length + right.length;
  
    for (let i = 0; i < size; i++) {
      if (leftIdx >= left.length) {
        merged.push(right[rightIdx]);
        rightIdx++;
      } else if (rightIdx >= right.length || left[leftIdx] <= right[rightIdx]) {
        merged.push(left[leftIdx]);
        leftIdx++;
      } else {
        merged.push(right[rightIdx]);
        rightIdx++;
      }
    }
  
    return merged;
  };
  
  const mergeSort = function (arr) {
    if (arr.length < 2) return arr;
    const middle = parseInt(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    const merged = merge(left, right);
    return merged;
  };