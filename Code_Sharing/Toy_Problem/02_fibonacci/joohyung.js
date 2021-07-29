function fibonacci(n, memo = []) {
  //n = 0 이거나 1이면 n을 반환하다
  if (n <= 1) {
    return n;
  }
  //만약 메모리에 n번째 값이 저장되어 있다면, 꺼내서 사용한다
  if (memo[n] !== undefined) {
    return memo[n];
  }
  // result 라는 변수에 값을 저장 한 후, memo의 n번째를 이 값으로 저장해준다, 그러면 나중에 꺼내쓰기 가능.
  //(인자에 memo도 줘야, 재귀에서도 memo에저장 된 값들 사용 가능)
  result = fibonacci(n - 2, memo) + fibonacci(n - 1, memo);
  memo[n] = result;
  return result;
}

// memoization은 똑같은 작업을 반복하는 경우에 자주 사용 할 수 있다.
// 그런면에서 fibonacci에서 아주 효율이 좋다.
// fib(3) 과 fib(4)를 구한 적이 있으면 그 값들은 memo에 저장이 되어있다, 그래서  fib(5)는 그냥 2 + 3 = 5 로 바로 답이 나올 수 있다.
// its all about saving the prev values in an array,
// so that we can load the value without calculation when its needed
