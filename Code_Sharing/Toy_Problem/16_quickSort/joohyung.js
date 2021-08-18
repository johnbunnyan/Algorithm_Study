const quickSort = function (arr, func = (el) => el) {
  if (arr.length <= 1) return arr;
  // 배열의 첫 번째 요소를 피벗으로 정한다.
  const pivot = arr[0];
  const left = [];
  const right = [];
  // i번째 인덱스가 피벗이랑 같거나 작으면 왼쪽, 아니면 오른쪽에 담는다
  // 0번째는 피벗이니 i = 1부터 시작한다.
  for (let i = 1; i < arr.length; i++) {
    if (func(arr[i]) <= func(pivot)) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
};
// quickSort는 피벗이라는 기준점을 하나 잡고, 피벗보다 작거나 같은 모임, 피벗보다 큰 모임
// 이런식으로 나눈다. 그 다음 그 모임에서도 피벗을 정하고 계속 정하다 보면, 결국 배열은 1까지 가게 된다
// 그러면 리턴한다

//naive solution
const quickSort = function (arr) {
  let result = [];
  let newArr = arr.slice();

  let recursion = (newArr) => {
    if (newArr.length === 0) {
      return;
    }
    result.push(Math.min(...newArr));
    newArr.splice(newArr.indexOf(result[result.length - 1]), 1);
    recursion(newArr);
  };
  recursion(newArr);
  return result;
};

// 단순한 방식으로 풀어 보았다. 이렇게 작성 할 경우 100,000 넘어가는 배열이 있을 경우 오류가 뜬다.
// time complexity문제 인 것같다
