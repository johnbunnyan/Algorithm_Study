let bfs = function (node) {
  // 큐에 데이터를 추가하고 들어온 순서대로 return한다.
  // 인자로 전달받은 node의 children을 순회
  // children의 children을 순회
  // 순회하는 즉시 push하는 것이 아니라 큐에 넣어두고 차례로 진행한다. (BFS)
  const queue = [node];
  const result = [];
  while (queue.length > 0) {
    const head = queue[0];
    queue.shift();

    result.push(head.value);

    head.children.forEach((child) => queue.push(child));
  }
  return result;
};

// 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
let Node = function (value) {
  this.value = value;
  this.children = [];
};

// 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
// membership check(중복 확인)를 따로 하지 않습니다.
Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
