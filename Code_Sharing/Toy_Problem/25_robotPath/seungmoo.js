const robotPath = function (room, src, dst) {
  const aux = (M, N, candi, step) => {
    const [row, col] = candi;

    // 배열의 범위를 벗어나면 리턴한다.
    if (row < 0 || row >= M || col < 0 || col >= N) return;
    // 통로(0) 이거나 더 짧은 시간으로 통과할 수 있다면
    // 값을 바꿔준다.
    if (room[row][col] === 0 || room[row][col] > step) {
      room[row][col] = step;
    } else return;

    // 모든 통로를 지나갈 때까지 함수가 실행된다.
    // 목적지에 도달할 수 있는 방법이 여러가지일 때
    // 이전 방법보다 적은 시간이 걸린다면
    // 값을 바꿔준다.
    aux(M, N, [row + 1, col], step + 1);
    aux(M, N, [row - 1, col], step + 1);
    aux(M, N, [row, col - 1], step + 1);
    aux(M, N, [row, col + 1], step + 1);
  };

  // 다시 방문하지 않기 위해 로봇이 서있는 위치부터 1로 시작하고
  // 계산이 완료된 후에 1을 빼준다.
  aux(room.length, room[0].length, src, 1);
  const [r, c] = dst;
  return room[r][c] - 1;
};
