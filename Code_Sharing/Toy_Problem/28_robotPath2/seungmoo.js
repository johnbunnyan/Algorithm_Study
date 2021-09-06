const robotPath2 = function (room, src, sDir, dst, dDir) {
  const R = room.length;
  const C = room[0].length;

  const MOVES = [
    [1, -1, 0], // UP
    [2, 0, 1], // RIGHT
    [3, 1, 0], // DOWN
    [4, 0, -1], // LEFT
  ];

  const isValid = (row, col) => row >= 0 && row < R && col >= 0 && col < C;

  // 방향
  const directions = [];
  // 동작의 횟수
  const dist = [];
  for (let row = 0; row < R; row++) {
    directions.push(Array(C).fill(0));
    dist.push(Array(C).fill(Number.MAX_SAFE_INTEGER));
  }

  const queue = Array(R * C);
  let front = 0;
  let rear = 0;
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, pos) => {
    queue[rear] = pos;
    rear++;
  };
  const deQueue = (queue) => queue[front++];
  // 출발 지점 좌표
  const [sRow, sCol] = src;
  directions[sRow][sCol] = sDir;
  dist[sRow][sCol] = 0;
  // 목표 지점 좌표
  const [dRow, dCol] = dst;
  // 출발지점 좌표를 queue에 넣으면서 시작된다.
  enQueue(queue, [sRow, sCol]);
  while (isEmpty(queue) === false) {
    const [row, col] = deQueue(queue);
    const dir = directions[row][col];
    // 모든 방향에 대해 동작을 시도한다.
    for (move of MOVES) {
      const [nDir, rDiff, cDiff] = move;

      const nRow = row + rDiff;
      const nCol = col + cDiff;
      // 지도의 범위를 벗어나거나, 장애물이 있다면 건너뛴다.
      if (isValid(nRow, nCol) === false || room[nRow][nCol] === 1) continue;
      // 방향의 차이를 절대값으로 구해서
      // 그 차이만큼 회전한다.
      // 동작횟수이기 때문에 candidate에는 회전 동작과 함께 한칸 이동하는 동작도 포함된다.
      const dDiff = Math.abs(nDir - dir);
      let candidate;
      if (dDiff === 0) {
        // 방향이 같고 앞으로 더 나아갈 수 있다면
        // 여러칸 직진이 가능하기 때문에
        // candidate 값은 그대로 가져간다.

        // 가장 처음 동작할 때에는 방향이 같다면
        // 기본값이 0이고 회전이 필요없다.
        // 한칸 이동만 하면 되기 때문에 값을 1로 준다.
        candidate = dist[row][col] || 1;
      } else if (dDiff === 2) {
        // 2번 회전, 1칸 이동
        candidate = dist[row][col] + 3;
      } else {
        // 1번 회전, 1칸 이동
        candidate = dist[row][col] + 2;
      }

      // 목표지점에 도착했기 때문에 방향만 바꾸면 된다.
      if (nRow === dRow && nCol === dCol) {
        const dDiff = Math.abs(nDir - dDir);
        if (dDiff === 0) {
          // 아무것도 하지 않는다.
          // 생략가능
          candidate = candidate;
        } else if (dDiff === 2) {
          // 2번 회전
          candidate += 2;
        } else {
          // 1번 회전
          candidate += 1;
        }
      }
      // dist는 최대값(Math.MAX_SAFE_INTEGER)으로 이루어져 있기 때문에
      // 처음 방문하는 것이라면 candidate보다 항상 크다.
      if (candidate < dist[nRow][nCol]) {
        enQueue(queue, [nRow, nCol]);
        dist[nRow][nCol] = candidate;

        directions[nRow][nCol] = nDir;
      }
    }
  }
  return dist[dRow][dCol];
};
