//나의 수도코드
//src에서 dst로 가는 모든 경우의 수를 구하고
//해당 경우의 수만큼 배열로 만들어서 경로상의 모든 요소를 담는다
//각 배열 중 1이 들어있는 배열 제외
//나머지 배열 중 길이가 가장 짧은 것 리턴



//레퍼런스
const robotPath = function (room, src, dst) {
    //재귀함수 1개
    //분해할당 배열 1개
              //세로길이 가로길이 현재위치 걸린시간
      const aux = (M, N, candi, step) => {
        
        // 현재 위치
        const [row, col] = candi;
    
        // 배열의 범위를 벗어난 경우
        if (row < 0 || row >= M || col < 0 || col >= N) return;
    
          //다음스텝으로 넘어간 요소가 0으로 이동가능하거나, 과거에 이미찍었던 곳(->새 step으로 교환)
        if (room[row][col] === 0 || room[row][col] > step) {
          room[row][col] = step; //정답으로 리턴할 걸리는 시간 누적값(현재 위치에는 시간을 표시한다)
        } else {
          // 장애물(1)이거나 이미 최소 시간(1)으로 통과가 가능한 경우
          return;
        }
    
        // dfs로 4가지 방향에 대해 탐색을 한다.
        // 완전탐색을 해야하므로 bfs나 dfs가 큰 차이가 없다.
        // bfs의 경우 목적지에 도착하는 경우 탐색을 중단해도 되므로,
        // 약간 더 효율적이다.
        //상하좌우에 대한 경우들만 열어주면 재귀를 돌면서 전부 탐색(리턴하지 않는 한)
        aux(M, N, [row + 1, col], step + 1); // 상
        aux(M, N, [row - 1, col], step + 1); // 하
        aux(M, N, [row, col - 1], step + 1); // 좌
        aux(M, N, [row, col + 1], step + 1); // 우
      };
    
      // 로봇이 서 있는 위치를 1로 초기화하면 (다시 방문하지 않기 위해서),
      // 바로 옆 통로는 2가 된다.
      // 계산이 완료된 후에 최종값에 1을 빼주면 된다.
      aux(room.length, room[0].length, src, 1); //따로 변수에 담지 않으므로 함수 내부에서 조작
    
    //dst는 주어진 입력(조작되지x)
      const [r, c] = dst;
    //aux에서 조작된 room배열을 기반으로 정답 리턴
      return room[r][c] - 1;
    };