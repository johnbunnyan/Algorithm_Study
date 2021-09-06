const robotPath2 = function (room, src, sDir, dst, dDir) {
    // 가로와 세로의 길이(R과 C 길이 서로 다를 수 있다)
    const R = room.length;
    const C = room[0].length;
    // 4가지 방향: 위(1), 오른쪽(2), 아래(3), 왼쪽(4)(시계방향 1234)
    // 차례대로 [방향, 상하이동, 좌우이동]
    //방향만 추가
    const MOVES = [
      [1, -1, 0], // UP
      [2, 0, 1], // RIGHT
      [3, 1, 0], // DOWN
      [4, 0, -1], // LEFT
    ];
  
    // 좌표가 유효한 좌표인지 확인하는 함수
    const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;
  
    // 각 위치별 최소의 동작으로 도달 가능한 경우의 방향을 저장
    const directions = [];
    // 각 위치별 최소 동작의 수를 저장. 편의상 거리(dist)로 표현 -> 최종리턴 시 사용될 변수
    const dist = [];
    for (let row = 0; row < R; row++) {
      //만들어놓은 각 배열(directions,dist)에 
      //R번만큼 반복하면서 C길이 만큼의 배열을 0이나 최댓값으로 채워서 넣는다
      directions.push(Array(C).fill(0));
      dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
    }
  
    // bfs 구현을 위해 큐를 선언한다.
    const queue = Array(R * C); //모든 요소개수만큼의 길이가진 1차원 배열
    let front = 0;
    let rear = 0;
  
    //while 반복종료조건
    const isEmpty = (queue) => front === rear;
  
    const enQueue = (queue, pos) => {
      queue[rear] = pos;
      rear++;
    };
    const deQueue = (queue) => {
      return queue[front++];
    };
  
    // 출발 지점의 좌표
    const [sRow, sCol] = src;//주어진 입력값(쓰기편하게 할당)
    directions[sRow][sCol] = sDir;//주어진 입력값(쓰기편하게 할당)
    dist[sRow][sCol] = 0; //시작 위치
  
    // 목표 지점의 좌표
    const [dRow, dCol] = dst;//주어진 입력값(쓰기편하게 할당)
  
    enQueue(queue, [sRow, sCol]);//초기 세팅
    while (isEmpty(queue) === false) {
      const [row, col] = deQueue(queue);
      const dir = directions[row][col];//현재 단계에서 동서남북 어디를 바라보고 있었냐
  
        //모든 방향 움직임에 대한 반복
      for (move of MOVES) {
          //다음 움직임의 방향
        const [nDir, rDiff, cDiff] = move;
        // 이동할 좌표(현재좌표+방향좌표)
        const nRow = row + rDiff;
        const nCol = col + cDiff;
  
        // 유효한 좌표가 아니거나
        // 해당 좌표가 장애물(1)인 경우 건너뛴다.
        if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;
  
        // 현재 위치의 방향과 목표 위치의 방향과의 차이
        const dDiff = Math.abs(nDir - dir);
        let candidate;//후보
        
        //1.
        if (dDiff === 0) {
          // 차이가 없는 경우
          // 출발 지점에서의 방향과 이동하려는 방향이 같은 경우
          // 직진만 하면 되지만 그러기 위해서는 1로 초기화 되어야 한다.
          candidate = dist[row][col] || 1; //유망한 좌표의 움직임 카운트가 없으면 1
                                         //dist[row][col] || ->  nRow,nCol 유망한 좌표가 현재좌표(row,col) 된 경우, 이전 candidate기록 그대로 가져오기
        } else if (dDiff === 2) {
          // 2번 회전해야 하는 경우: 회전 2 + 직진 1
          //(dist라는 다른 배열에 현재 row,col과 똑같은 위치에 표시)
          candidate = dist[row][col] + 3; //기존의 움직인 카운트에 새로운 움직임횟수 더해가기
        } else {
          // 1번만 회전해도 되는 경우: 회전 1 + 직진 1
          candidate = dist[row][col] + 2;
        }
      //실제로 움직인 게 아니라 candidate(움직인 횟수)만 계산
  
        //2. 
        if (nRow === dRow && nCol === dCol) {
          // 다음에 도달하는 곳이 목표 지점인 경우
          // 방향까지 고려해서 필요한 거리(candidate)를 더한다.
          const dDiff = Math.abs(nDir - dDir);//방향에 대한 것만 고려하면 된다
          if (dDiff === 0) {
            candidate = candidate;
          } else if (dDiff === 2) {
            candidate = candidate + 2;
          } else {
            candidate = candidate + 1;
          }
        }
        //실제로 움직인 것이 아니라, 이동할 좌표 기준으로 예측해서 candidate값 재설정
  
        
        //3. 현 row,col 기준으로 4방향 이동한 좌표-> nRow,nCol가 유망한 좌표
        //초기 dist[nRow][nCol]는 Number.MAX_SAFE_INTEGER넣어서 클 수 밖에 없다
        //즉 아래 조건문 진입을 하는 경우는 해당 nRow,nCol가 초기값일 때 뿐
        if (candidate < dist[nRow][nCol]) {
          // 유망한 좌표는 큐에 삽입한다.
          //큐에 넣으면 반복문 돌면서 각각 좌표가 현재 좌표(row,col)이 된다.
          enQueue(queue, [nRow, nCol]);
          dist[nRow][nCol] = candidate; //유망한 좌표의 카운트값 dist에 저장해놓기(dist에 값 저장되는 곳은 여기 뿐)
          
          // 다음에 큐(nRow,nCol)를 깠을 때 nRow,nCol 방향은 어디인지 저장
          //현 단계에서 nRow,nCol는  'const [nDir, rDiff, cDiff] = move' 통해 만들어졌기 때문에 동일
          directions[nRow][nCol] = nDir;
        }
      }
    }
  
    return dist[dRow][dCol];
  };