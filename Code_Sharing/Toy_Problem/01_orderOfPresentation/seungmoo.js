function orderOfPresentation (N, K) {
  // 조의 수 N
  // 발표 순서 K
  
  const factorial = (n) => {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
  }

  const isVisited = new Array(N).fill(0);
  let result = 0;
  for (let i = 0; i < K.length; i++) {
    const num = K[i];
    // 인덱스는 0부터 시작하기 때문에 -1을 해준다.
    isVisited[num - 1] = 1;

    const temp = isVisited.slice(0, num);
    const validCnt = temp.filter(el => el === 0).length;
    const formerCnt = validCnt * factorial(N - 1 - i);
    result += formerCnt;
  }
  return result;
  // orderOfPresentation(4, [1,4,3,2])인 경우
  // 전체 경우의 수는 : 4!, 24 

  // [1,2,3,4] [1,2,4,3] [1,3,2,4] [1,3,4,2] [1,4,2,3] [1,4,3,2]
  // 첫번째 숫자가 1이고 두번째 숫자가 x인 경우의 수는 : 3 * 2! = 6
  // 2,3,4 중에 4가 제일 큰 숫자이다.
  // 두번째 숫자가 2또는 3인 경우의 수는 : 2 * 2! = 4
  // 2보다 3이 크다. [1,4,3,2]는 6번째 숫자
  // index는 0부터 시작하기 때문에 result = 5
}