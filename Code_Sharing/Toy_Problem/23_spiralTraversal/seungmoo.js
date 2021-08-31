const spiralTraversal = function (matrix) {
  const RIGHT = [0, 1];
  const DOWN = [1, 0];
  const LEFT = [0, -1];
  const UP = [-1, 0];

  const MOVES = [RIGHT, DOWN, LEFT, UP];
  const M = matrix.length;
  const N = matrix[0].length;
  // 인덱스 값이 유효한지 확인한다.
  // 0 이상이고 배열의 길이보다 작아야 한다.
  const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;

  let count = 0;
  let row = 0;
  // 처음에는 col이 이동하는 것부터 시작한다.
  // [0,0]부터 시작하면 첫글자가 포함되지 않기 때문에 -1부터 시작한다.
  let col = -1;
  let direction = 0;
  let result = "";
  while (count < M * N) {
    const move = MOVES[direction];
    // 구조분해할당
    const [rd, cd] = move;
    row += rd;
    col += cd;

    while (isValid(row, col) && matrix[row][col] !== false) {
      result += matrix[row][col];
      // 이어붙인 후 해당요소에 다시 접근하지 않기 위해 false로 변경
      matrix[row][col] = false;
      row += rd;
      col += cd;
      count++;
    }
    // 유효한 위치까지 이동이 모두 끝나고
    // 범위를 벗어나면 다시 한칸 되돌아간다.
    row -= rd;
    col -= cd;

    // 모듈러 연산
    // 4로 나눈 나머지 값을 구하면
    // 항상 4보다 작은 값을 갖게된다.
    direction = (direction + 1) % 4;
  }
  return result;
};
