const rotateMatrix = function (matrix, K = 1) {
  // 4번 회전하면 원래대로 돌아오기 때문에
  // 바로 리턴해준다.
  K = K % 4;
  if (K === 0) return matrix;

  const N = matrix.length;
  // 빈 배열일 경우 length를 사용할 수 없다.
  // 에러가 발생하지 않고 undefined 값을 할당하게 된다.
  const M = matrix[0] && matrix[0].length;
  const result = [];
  // row, col의 길이가 각각 다르기 때문에
  // 회전하는 횟수가 홀수일 경우 길이가 서로 바뀐다.
  const RC = K % 2 === 1 ? [M, N] : [N, M];

  for (let row = 0; row < RC[0]; row++) {
    // result의 row에 해당하는 부분에 빈 배열을 할당해준다.
    result[row] = [];
    for (let col = 0; col < RC[1]; col++) {
      // 1번 회전할때 첫번째 row에는 회전하기 전 각 row의 첫번째 요소들이 들어간다.
      if (K === 1) result[row][col] = matrix[N - col - 1][row];
      // 2번 회전할때 첫번째 row의 요소는 회전하기 전 마지막 row의 요소들이 거꾸로 들어간다.
      else if (K === 2) result[row][col] = matrix[N - row - 1][M - col - 1];
      // 3번 회전할때 첫번째 row의 요소는 회전하기 전 각 row의 마지막 요소들이 들어간다.
      else result[row][col] = matrix[col][M - row - 1];
    }
  }
  return result;
};
