const insertionSort = function (arr, func = (param) => param) {
  let result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    // arr의 i번째 요소가 result의 마지막 요소보다 클 경우
    // if ( func(arr[i]) >= func(result[result.length - 1])) result.push(arr[i])
    if (func(arr[i]) >= func(result[i - 1])) result.push(arr[i]);
    // result를 처음부터 순회하며
    // arr의 i번째 요소보다 크거나 같은 순간에
    // result의 j번째 바로 앞에 추가해준다.
    // result의 j번째 뒤에 있는 요소 또한 arr의 i번째 요소보다 크기 때문에
    // 추가로 확인해줄 필요가 없으므로 반복문에서 탈출한다.
    else {
      for (let j = 0; j < i; j++) {
        if (func(arr[i]) <= func(result[j])) {
          const left = result.slice(0, j);
          const right = result.slice(j);
          result = left.concat(arr[i], right);
          break;
        }
      }
    }
  }
  return result;
};
