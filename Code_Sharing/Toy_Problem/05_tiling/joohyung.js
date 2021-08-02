let tiling = function (n, memoization = [1, 2, 3]) {
  if (n <= 3) {
    return n;
  } else {
    if (memoization[n] !== undefined) {
      return memoization[n];
    }
    memoization[n] = tiling(n - 2, memoization) + tiling(n - 1, memoization);
    return memoization[n];
  }
};

/*
세로길이는 2로 고정이 되어있고, 가로만 바뀐다.
n = 2 // 2
n = 3 // 3
n = 4 // 5
규칙이 존재한다, 규칙은 포보나치랑 똑같은 것 같다 
n = 5 => n(3) + n(4) // 8

효율적인 알고리즘 구사를 위해 피보나치 때 사용한 memoization을 사용하여 작성이 가능 할 것 같다.
*/
