let dfs = function (node) {
  let result = [node.value];
  // 노드의 children을 순회하면서 value를 result에 추가한다.
  // children 노드가 children을 가진다면
  // 재귀함수이기 때문에
  // 노드의 children보다 먼저 탐색이 된다.
  for (let i of node.children) {
    result = result.concat(dfs(i));
  }
  return result;
};

let Node = function (value) {
  this.value = value;
  this.children = [];
};

Node.prototype.addChild = function (child) {
  this.children.push(child);
  return child;
};
