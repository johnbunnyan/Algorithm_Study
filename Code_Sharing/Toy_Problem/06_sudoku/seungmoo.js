const sudoku = function (board) {
  const N = board.length;
  // 박스에 번호를 붙여 3x3 칸을 구분한다.
  const boxes = [
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [0, 0, 0, 1, 1, 1, 2, 2, 2],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [3, 3, 3, 4, 4, 4, 5, 5, 5],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
    [6, 6, 6, 7, 7, 7, 8, 8, 8],
  ];
  const getBoxNum = (row, col) => boxes[row][col];

  const blanks = [];
  const rowUsed = [];
  const colUsed = [];
  const boxUsed = [];

  // 1부터 9까지의 숫자 중 퍼즐에 이미 존재하는 숫자인지 아닌지 구분한다.
  // boolean으로 방문기록을 남긴다.
  // 예시에서 0번째 row에 1,2,3,6,7이 있기 때문에
  // rowUsed[0][1]
  // rowUsed[0][2]
  // rowUsed[0][3]
  // rowUsed[0][6]
  // rowUsed[0][7]
  // 위의 값들은 true가 된다.
  for (let row = 0; row < N; row++) {
    rowUsed.push(Array(N + 1).fill(false));
    colUsed.push(Array(N + 1).fill(false));
    boxUsed.push(Array(N + 1).fill(false));
  }
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (board[row][col] === 0) {
        blanks.push([row, col]);
      } else {
        const num = board[row][col];
        const box = getBoxNum(row, col);
        rowUsed[row][num] = true;
        colUsed[col][num] = true;
        boxUsed[box][num] = true;
      }
    }
  }

  // 해당하는 숫자가 row, col, box에서 겹치지 않는지 확인한다.
  // 예시의 board[0][0]에서 이미 존재하는 숫자는
  // row에 1,2,3,6,7
  // col에 1,6,7,8
  // box에 1,3,6,7,9 이다.
  // 4, 5는 row, col, box에 겹치지 않기 때문에
  // board[0][0]에 들어갈 수 있다.
  const isValid = (row, col, num) => {
    const box = getBoxNum(row, col);
    return (
      rowUsed[row][num] === false &&
      colUsed[col][num] === false &&
      boxUsed[box][num] === false
    );
  };
  // 1.
  // 퍼즐에 1을 넣었다면 같은 row, col, box에는 1이 들어갈 수 없기 때문에
  // 방문기록을 false에서 true로 바꾼다.
  // 2.
  // 퍼즐에 잘못된 숫자를 넣었다면 제외시키고 다른 숫자로 다시 확인해야하기 때문에
  // 방문기록을 true에서 false로 되돌린다.
  const toggleNum = (row, col, num) => {
    const box = getBoxNum(row, col);
    board[row][col] = num;
    rowUsed[row][num] = !rowUsed[row][num];
    colUsed[col][num] = !colUsed[col][num];
    boxUsed[box][num] = !boxUsed[box][num];
  };

  // 퍼즐에서 비어있는, 값이 0인 칸들을 차례로 확인하면서 알맞은 숫자를 채워넣는다.
  // 만약 퍼즐이 규칙에 맞지 않는 값들로 채워졌다면 되돌려야 하기 때문에
  // 재귀를 사용한다.

  // 예시의 board[0][0]에 들어갈 수 있는 숫자는 4, 5이다.
  // 처음에 4를 먼저 넣고 차례로 퍼즐을 채워나가다가
  // 1부터 9까지 모든 숫자를 넣을 수 없는 상황이 오면
  // 재귀에서 빠져나와 4 대신에 5를 넣고
  // 다시 퍼즐을 채워나간다.
  const aux = (idx, blanks, board) => {
    if (idx === blanks.length) {
      return true;
    }

    const [row, col] = blanks[idx];
    for (let num = 1; num <= 9; num++) {
      if (isValid(row, col, num) === true) {
        toggleNum(row, col, num);
        if (aux(idx + 1, blanks, board) === true) {
          return true;
        }
        toggleNum(row, col, num);
      }
    }
    return false;
  };

  aux(0, blanks, board);
  return board;
};
