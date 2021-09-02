const createMatrix = (village) => {
  const matrix = [];
  village.forEach((line) => {
    const row = [];
    for (let i = 0; i < line.length; i++) row.push(line[i]);
    matrix.push(row);
  });
  return matrix;
};

const gossipProtocol = function (village, row, col) {
  const M = village.length;
  const N = village[0].length;
  const matrix = createMatrix(village);
  const MOVES = [
    [-1, 0], // 상
    [1, 0], // 하
    [0, -1], // 좌
    [0, 1], // 우
  ];
  const SIZE = M * N;
  // matrix 범위를 벗어나는지 확인
  const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;
  const queue = [];
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    queue[rear] = pos;
    rear++;
  };
  const deQueue = (queue) => {
    const pos = queue[front];
    front++;
    return pos;
  };
  let count = 0;
  enQueue(queue, [row, col]);
  // 소문이 퍼질 때마다 1씩 증가하기 때문에
  // 문자열 대신 숫자로 재할당한다.
  matrix[row][col] = 0;

  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    count = matrix[row][col];

    MOVES.forEach((move) => {
      const [rDiff, cDiff] = move;
      const nextRow = row + rDiff;
      const nextCol = col + cDiff;
      // matrix 범위를 벗어나지 않고 주민이 살고 있는 경우에
      // 큐에 추가하고
      // 해당 좌표값에 count를 1 증가시킨 값으로 재할당한다.
      if (isValid(nextRow, nextCol) && matrix[nextRow][nextCol] === "1") {
        enQueue(queue, [nextRow, nextCol]);
        matrix[nextRow][nextCol] = count + 1;
      }
    });
  }
  return count;
};
