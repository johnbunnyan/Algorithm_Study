const sudoku = function (board) {

    //배열의 길이는 문제를 해결할 때 자주 사용되므로 미리 변수에 담아 사용하는 것이 가독성을 높여준다
      const N = board.length;
      
     // boxes와 getBoxNum은 세트
     // 각 요소가 몇 번째 3x3박스에 속해있는지 알려준다
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
    
     // 각 배열은 체킹용
     // 초기에는 동등한 길이만큼 false로 세팅된다
    //  가로(10)x세로(9)만큼의 false가 들어있는 배열
    //  세로사이즈는 모든 가로,세로,3x3요소들이 0부터 8까지 있기 때문
    //  가로는 그 요소들 안에 들어갈 수 있는 숫자들이 0부터 9까지 이기 때문
      const rowUsed = [];
      const colUsed = [];
      const boxUsed = [];
      for (let row = 0; row < N; row++) {
        rowUsed.push(Array(N + 1).fill(false));
        colUsed.push(Array(N + 1).fill(false));
        boxUsed.push(Array(N + 1).fill(false));
      }
    
    
      for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
          //만약 0이면 blanks라는 초깃값 없는 배열에 해당 배열을 넣는다(이중배열이 된다)
          //실질적으로 각Used는 체킹용이고 blanks를 위주로 0을 토글하는 것이 문제해결의 중심이다
          if (board[row][col] === 0) {
            blanks.push([row, col]);
          } else {
            //0이 아닌 다른 숫자가 이미 사용된 적이 있으면 각 Used에 true로 표시를 남긴다
            const num = board[row][col];
            const box = getBoxNum(row, col);
            rowUsed[row][num] = true;
            colUsed[col][num] = true;
            boxUsed[box][num] = true;
          }
        }
      }
    
    
      const isValid = (row, col, num) => {
        const box = getBoxNum(row, col);
        return (
          //가로,세로,3x3에 하나라도 이미 해당 num이 사용된 적이(true) 있다면
          //false가 리턴되고 전부 false라면 true가 리턴된다 
          rowUsed[row][num] === false &&
          colUsed[col][num] === false &&
          boxUsed[box][num] === false
        );
      };
    
    
      const toggleNum = (row, col, num) => {
        const box = getBoxNum(row, col);
        //여기에서 원본 board에 숫자를 0대신 바꿔 넣어줌
        board[row][col] = num;
        rowUsed[row][num] = !rowUsed[row][num];
        colUsed[col][num] = !colUsed[col][num];
        boxUsed[box][num] = !boxUsed[box][num];
      };
    
      const aux = (idx, blanks, board) => {
        if (idx === blanks.length) {
          return true;
        }
          //0부터 하나씩 꺼내서 1~9가 되는지 확인한다
        const [row, col] = blanks[idx];
        for (let num = 1; num <= 9; num++) {
          
          //1) 만약 재귀를 타고 넘어온 상태에서 true가 나오지 않는다면 더이상 재귀를 들어가지 못하고 for문으로 넘어가 num을 증가시킨다
          //끝까지 돌아도 isValid를 통과하지 못하고 반복문마저 탈출하면 false를 리턴하고
          //재귀함수들을 한층씩 탈출하면서 
          if (isValid(row, col, num) === true) {
            //가능한 숫자면 토글로 해당 0이 있던 자리의 row,col,box에 해당 num이 토글되었다고 표시
            toggleNum(row, col, num);
            //재귀를 통해 다음 blanks의 요소(aux(idx + 1, blanks, board))를 blanks.length를 다 돈다.
            if (aux(idx + 1, blanks, board) === true) {
              return true;
            }
            //2) 맞는걸로 예상하고 true로 넣어놓은 토글을 다시 푼다
            toggleNum(row, col, num);
            //3)그리고 다시 반복문을 돌며 가장 최근에 토글했던 num을 바꾸어서 다시 aux과정을 진행한다
          }
        }
        //반복문을 끝까지 다 돌고 나왔을때의 리턴->재귀탈출(=그 이전 단계로 돌아가서 다시 다른 num을 넣은 케이스로 다시 확인한다)
        return false;
      };
    
      aux(0, blanks, board);
      return board;
    };