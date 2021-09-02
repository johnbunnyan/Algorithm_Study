let LSCS = function (arr) {
  let result = -99999;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if (sum > result) {
      result = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return result;
};

// 배열의 모든 요소를 하나하나 더한다, 더할때 마다 그 전에 합과 비교를 한다.
// 더 크면 합에다가 더하고 작으면 합에다 포함시키지 않는다.
// 음수가 나와서 sum < result일 경우에 sum이 0보다 큰지 작은지 확인을 해야 된다.
// 뒤에 수와 더해서 도움이 1이라도 되면 그대로 두고, 0보다 작아서 - 영향을 주면 0으로 세팅
