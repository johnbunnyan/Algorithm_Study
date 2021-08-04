// 퍼즐의 빈 자리를 확인한다 (0인). 만약 빈 자리가 없다면 -1,-1을 반환하고
// 만약 빈자리가 있다면, 그 위치를 반환한다
function nextEmptySpot(board) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) return [i, j];
    }
  }
  return [-1, -1];
}

// 열에 이미 등록되어 있는 숫자가 있는지 하나하나 확인한다.
// 이미 1이 있으면 같은 열에 1은 들어오지 못 한다. 그러므로 false를 반환한다.
// ### 한 숫자가 안 된다고 끝이아니라 다음 숫자도 다 확인해야 됨 ###
function checkRow(board, row, value) {
  for (let i = 0; i < board[row].length; i++) {
    if (board[row][i] === value) {
      return false;
    }
  }
  return true;
}

// 열과 마찬가지로 행도 확인을 한다, 1~9까지 이미 행에 숫자가 존재 할 경우
// 똑같이 false를 리턴하고 다음 숫자를 확인한다
//### 한 숫자가 안 된다고 끝이아니라 다음 숫자도 다 확인해야 됨 ###
function checkColumn(board, column, value) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][column] === value) {
      return false;
    }
  }
  return true;
}

/*
총 9개의 큰칸이 존재하고, 각 칸마다 9개의 숫자가 들어 갈 수 있다. 
이때 마찬가지로 각 칸안에는 하나의 고유한 숫자가 1~9까지 들어 갈 수 있다. 
지금 비어있는 칸의 위치가 몇번 째 칸에 있는지 쉽게파악 하려면, 3을 나누고 3을 곱하면 된다 (이 아래 테이블에서 어디 구역에 있는지)
[
[a,a,a,b,b,b,c,c,c],
[a,a,a,b,b,b,c,c,c],
[a,a,a,b,b,b,c,c,c],
[d,d,d,e,e,e,f,f,f],
[d,d,d,e,e,e,f,f,f],
[d.d.d,e.e.e,f.f.f],
[g.g.g,h.h.h,i.i.i],
[g.g.g,h.h.h,i.i.i],
[g.g.g,h.h.h,i.i.i],
]

행, 열과 마찬가지로 한 구역안에 같은 숫자가 있으면 false를 반환하고 다음 숫자를 확인한다.
### 한 숫자가 안 된다고 끝이아니라 다음 숫자도 다 확인해야 됨 ###
*/
function checkSquare(board, row, column, value) {
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(column / 3) * 3;

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (board[boxRow + r][boxCol + c] === value) return false;
    }
  }
  return true;
}

//행, 열, 3x3 9칸 모두 조건에 맞는지 확인한다. 모든 조건을 만족 시킬 떄 true를 반환한다
function checkValue(board, row, column, value) {
  if (
    checkRow(board, row, value) &&
    checkColumn(board, column, value) &&
    checkSquare(board, row, column, value)
  ) {
    return true;
  }
  return false;
}

// 입력받은 보드에서 빈 칸을 찾고 emptySpot에 저장한다.
// 만약 다 순환했는데 0이 없다면, 그건 완료된 스도쿠라고 간주하여 그냥 바로 리턴한다
// 빈 칸에 checkValue === true인 값을 찾으면, 그 값으로 board의 0자리를 채워준다
// 그리고 재귀를 사용하여 빈 칸이 나오지 않을 때 까지 계속 돌린다. ( (row === -1) => base케이스)
function sudoku(board) {
  let emptySpot = nextEmptySpot(board);
  let row = emptySpot[0];
  let col = emptySpot[1];

  if (row === -1) {
    return board;
  }

  for (let num = 1; num <= 9; num++) {
    if (checkValue(board, row, col, num)) {
      board[row][col] = num;
      sudoku(board);
    }
  }

  if (nextEmptySpot(board)[0] !== -1) board[row][col] = 0;

  return board;
}
