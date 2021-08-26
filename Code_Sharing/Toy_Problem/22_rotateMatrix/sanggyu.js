const rotateMatrix = function (matrix, rotateNum = 1) {
  
    //N 가로길이
    const N = matrix.length;
    //M 세로길이
    // 빈 배열을 입력받을 수 있다.(matrix[0]는 빈배열 방지용)
    const M = matrix[0] && matrix[0].length;
  
    // rotateNum 이 0일 수 있으므로 아래와 같은 초기화는 지양해야 함
    // rotateNum = rotateNum || 1
    //4번 이상부터는 돌려도 1,2,3과 똑같은 형태이기 때문에 %로 값 걸러내기
    rotateNum = rotateNum % 4;
    
    // 회전하지 않는경우 그대로 리턴
    if (rotateNum === 0) return matrix;
  
    const rotated = [];
    // 홀수번 회전 시 M x N, 짝수번 회전 시 N x M
    const RC = rotateNum % 2 === 1 ? [M, N] : [N, M];
  
  
           //똑같이 이중 반복문 사용시 가로->세로 순으로 순회한다
    for (let row = 0; row < RC[0]; row++) {
      rotated[row] = [];
      for (let col = 0; col < RC[1]; col++) {
        
        if (rotateNum === 1)      //전체길이-col-1
        rotated[row][col] = matrix[N - col - 1][row];
        // case 1
        //홀수번 회전
        // 1번 회전
        // 13   9  5  1
        // 14  10  6  2
        // 15  11  7  3
        // 16  12  8  4
  
        //3번 회전
        // 4  8  12  16
        // 3  7  11  15
        // 2  6  10  14
        // 1  5   9  13
        
        else if (rotateNum === 2)
          rotated[row][col] = matrix[N - row - 1][M - col - 1];
        // case 2
        //짝수번 회전
        //2번 회전
        // 16 15 14  13
        // 12 11 10   9
        // 8   7  6   5
        // 4   3  2   1
  
        // 4번 회전(==1)
        //  1  2  3  4
        //  5  6  7  8
        //  9 10 11 12
        // 13 14 15 16
  
        // case 3
        else rotated[row][col] = matrix[col][M - row - 1];
      }
    }
  
    return rotated;
  };