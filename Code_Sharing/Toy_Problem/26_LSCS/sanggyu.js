// const LSCS = function (arr) {
//   let subArrSum = 0; // 연속 배열의 합
//   let max = Number.MIN_SAFE_INTEGER; // 정답의 후보를 저장
//   //Number.MIN_SAFE_INTEGER: JavaScript에서 안전한 최소 정수값을 나타냅니다
//   //console.log(Number.MIN_SAFE_INTEGER);
//   // expected output: -9007199254740991
//   //-(2^53 - 1)과 2^53 - 1 사이의 수만 안전하게 표현할 수 있습니다.

//   for (let i = 0; i < arr.length; i++) {
//     //arr의 0번째 요소부터 누적으로 하나씩 더해감
//     subArrSum = subArrSum + arr[i];
//     //더해놓고 그 값에 대한 판별

//     //1. max보다 큰지
//     if (subArrSum > max) max = subArrSum;

//     //2. 0보다 큰지
//     // 연속된 구간의 합이 음수인 경우,
//     // 해당 부분은 버리고 다시 시작해도 된다. 연속이니까 ok
//     if (subArrSum < 0) {
//       subArrSum = 0;
//     }
//   }

//   return max;
// };


//also dynamic 2: O(N)
const LSCS = function (arr) {
    let subArrSum = arr[0];////후보들
    let max = arr[0]; // 정답의 후보를 저장
    for (let i = 1; i < arr.length; i++) {
      // subArrSum는 바로 직전의 요소까지 검토했을 때 가장 연속합
      // 연속합에 추가로 검토하는 요소, 즉 arr[i]를 더하는 것보다
      // arr[i] 하나의 값이 더 큰 경우 (subArrSum가 음수일 경우)
      // subArrSum를 버리는 게 좋다.
      // 쭉 더해서 음수인 부분은 굳이 더할 필요가 없다.
                                // arr[i] 하나의 값이 더 큰 경우
      subArrSum = Math.max(subArrSum + arr[i], arr[i]);
      //기존의 max랑 최종비교
      max = Math.max(max, subArrSum);
    }
  
    return max;
  };