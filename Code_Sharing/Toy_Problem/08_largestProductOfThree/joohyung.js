const largestProductOfThree = function (arr) {
  let negativeNum = 0;
  let positiveNum = 0;
  let negativeCnt = 0;
  arr.sort((a, b) => a - b);

  for (let el of arr) {
    if (el < 0) {
      negativeCnt++;
    }
  }

  if (negativeCnt <= 1 || negativeCnt === arr.length) {
    return arr.slice(-3).reduce((a, b) => a * b);
  }

  negativeNum = arr.slice(0, 2).reduce((a, b) => a * b);
  positiveNum = arr.slice(-3, -1).reduce((a, b) => a * b);

  return positiveNum < negativeNum
    ? negativeNum * arr.slice(-1)
    : positiveNum * arr.slice(-1);
};

/* 
  3개의 요소를 곱해 나올 수 있는 최대값을 리턴해야 된다. 순열을 이용해 모든 경우의 수를 구하고 그중에 가장 큰 수를 리턴하면 된다.
  하지만 이문제는 그냥 3개의 수를 곱하는 것이기 때문에 굳이 순열은 사용하지 않았다. 
  
  2가지의 경우가 있다. 
  1. 배열에 음수가 없거나, 하나만 있거나, 모두 음수일 떄. 이 경우는 그냥 오름차순 정렬을 한 뒤 마지막 3 요소만 곱하면 된다. 
  2. 배열에 음수가 2개 이상일 떄. 이 경우는 일단 배열의 가장 끝 숫자는 고정이다. 그 다음 배열의 처음 두 수와 마지막 두 수를 비교한다(가장 끝 수를 제외한)  
    ex) [-a, -b, -c, d, e, f]
    ㄴ (-a * -b) : (d * e)  더 큰 쪽을 마지막 끝 숫자(f)와 곱하고 반환한다. 

*/

// 수열을 이용한 방법인다. 일단 모든 경우의 수를 구하고 새로운 배열에 넣어준다. 그리고 내림차순으로 정렬하고 0번째 index를 반환한다
const largestProductOfThree = function (arr) {
  let combination = [];
  let sum = [];
  let permute = function (nums) {
    let dfs = (cur, rest) => {
      if (rest.length === 0) {
        combination.push(cur);
        return;
      }
      for (let i = 0; i < rest.length; i++) {
        dfs([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
      }
    };
    dfs([], nums);
  };
  permute(arr);
  sum.push(combination.map((a) => a.slice(0, 3).reduce((a, b) => a * b)));
  let result = sum.flat().sort((a, b) => b - a);
  return result[0];
};
