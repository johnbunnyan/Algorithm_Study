//naive solution
// const insertionSort = function (arr) {
//   //첫번째 반복문 i로 비교의 기준이 되는 요소를 짚고
//   for(let i=0;i<arr.length;i++){
//     //두번째 반복문 j로 나머지 arr요소들을 각각 i요소와 비교
//   for(let j=0;j<arr.length;j++){
//     //비교했을때 기준으로 짚은 i요소가 j요소보다 작으면
//     if(arr[i]<arr[j]){
//       //save라는 변수 저장용으로 만들어서 서로 바꾸는 작업 
//       let save = arr[i]
//       arr[i]=arr[j]
//       arr[j]=save
//     }
//   }
//   }
//   return arr 
  
  
//   };


  //advanced aproach
  const insertionSort = function (arr, transform = (item) => item) {
    let sorted = [arr[0]];

    //1. 정렬되지 않은게 더 크면 그냥 맨 뒤에 push하는 작업

    //sorted와 arr 각각 요소를 비교하는데, 비교의 기준은 아직 정렬되지 않은 arr이다.
    for (let i = 1; i < arr.length; i++) {
      if (transform(arr[i]) >= transform(sorted[i - 1])) {
        //sorted, 즉 이미 정렬된 요소가 들어간 요소(i-1)보다 그 다음 인덱스의 요소(i)가 크면 오름차순이니 그대로 sorted에 푸쉬한다.
        sorted.push(arr[i]);
      } else {
        //2. 정렬된 것들 중에 arr요소보다 더 큰 요소값이 있으면 그 요소 앞으로 arr의 요소를 끼워넣는 작업

        //i는 arr즉 정렬되어있지 않는 arr 요소 중 하나를 짚은 상태이고, 그 요소인덱스보다 작은 sorted의 요소를 짚기 위해 j를 선언한다.
        //j는 i보다 항상 작은 인덱스를 가리킨다.
        for (let j = 0; j < i; j++) {
          if (transform(arr[i]) <= transform(sorted[j])) {
            //j번째 sorted요소가 i번째 arr요소보다 클때, sorted를 j번째 기준으로 오른쪽 왼쪽으로 잘라서 나누고
            const left = sorted.slice(0, j);
            const right = sorted.slice(j);
            //그 사이에 i번째 arr요소를 끼워넣는다
            sorted = left.concat(arr[i], right);
            break;
          }
        }
      }
    }
  
    return sorted;
  };
  console.log(insertionSort([13,1,12,2,44]))