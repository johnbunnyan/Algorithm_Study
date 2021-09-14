const LCS = function (str1, str2) {
  const M = str1.length;
  const N = str2.length;
  const memo = [];
  // 문자열의 길이를 벗어났을 때 compareOneByOne 함수의
  // 첫번째 조건이 적용되지 않기 위해
  // 각 문자열의 길이보다 1만큼 크게 배열을 만든다.
  for (let i = 0; i < M + 1; i++) memo.push(Array(N + 1).fill(-1));

  const compareOneByOne = (left, right) => {
    // 계산한 적이 있다면 바로 빠져나온다.
    if (memo[left][right] !== -1) return memo[left][right];
    // 문자열의 범위를 벗어나면 LCS가 존재할 수 없기 때문에 0을 리턴한다.
    if (left === str1.length || right === str2.length) return 0;
    // 두 문자가 일치한다면 1을 더하고 다음 인덱스를 확인한다.
    if (str1[left] === str2[right]) {
      memo[left][right] = 1 + compareOneByOne(left + 1, right + 1);
      return memo[left][right];
    }

    memo[left][right] = Math.max(
      compareOneByOne(left + 1, right),
      compareOneByOne(left, right + 1)
    );
    return memo[left][right];
  };

  return compareOneByOne(0, 0);
};
