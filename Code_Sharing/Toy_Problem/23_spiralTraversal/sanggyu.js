const spiralTraversal = function (matrix) {
    // 각 방향마다 row와 col의 변화를 저장
    const RIGHT = [0, 1]; //'y'
    const DOWN = [1, 0];  //'i'
    const LEFT = [0, -1]; //
    const UP = [-1, 0];   //
    // 각 방향을 위한 lookup table 순서는 회전하는 방향에 따라
    const MOVES = [RIGHT, DOWN, LEFT, UP];
    
    //M과 N은 가로세로 길이 같은 2차원 배열이기 때문에 기본적으로 같다.
    const M = matrix.length;
    const N = matrix[0].length;
    //여기까지 row와 column 변수를 보조하며 사용되는 보조변수들
  
  //LEFT와 UP으로 인해 매트릭스 밖으로 나가는 것을 방지하기 위한 함수->조건문으로 활용
    const isValid = (row, col) => row >= 0 && row < M && col >= 0 && col < N;
  
    let cnt = 0;
  
    let row = 0,
        col = -1;
    let direction = 0;
    let result = '';
    
    //M * N -> 모든 배열 요소
    while (cnt < M * N) {
    
      const move = MOVES[direction]; //ex.[0, 1]
      const [rd, cd] = move; //row direction=0, column direction=1
    //'~방향으로 이동한다'를 코드로 표현하는 방법
      row = row + rd;
      col = col + cd;
  
      while (isValid(row, col) && matrix[row][col] !== false) {
        result = result + matrix[row][col];
        // 한 요소를 두 번 접근하지 않게 하기 위해서, 접근된 요소를 false로 변경한다.
        matrix[row][col] = false;
        //현재 값을 저장한 후에 이동한다.
        row = row + rd;
        col = col + cd;
        cnt++; //이동한 다음에야 카운트
      }
      // row, col 이 행렬의 범위를 벗어났기 때문에,
      // 진행된 방향의 반대로 한 칸 이동한다.
      // right-left /up-down
      row = row - rd; 
      col = col - cd;
  
      // 각 방향이 순환되기 때문에 모듈러 연산을 사용한다.
      //const MOVES = [RIGHT, DOWN, LEFT, UP] -> 해당 배열 반복순회
      direction = (direction + 1) % 4;
    }
    return result;
  };