// 깊이 우선 탐색으로 모든 노드를 하나씩 방문한다. 이때 제일 아래까지 내려갔다가
// 다시 옆 노드로 움직이는 형식으로 함수를 작성해야 된다.
let dfs = function (node) {
  let result = [];
  let treeDFS = (node) => {
    if (node.value) {
      result.push(node.value);
    }
    if (node.children) {
      for (let i = 0; i < node.children.length; i++) {
        treeDFS(node.children[i]);
      }
    }
  };
  treeDFS(node);
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

// 처음에는 이런 식으로 dfs함수 자체를 재귀를 돌려서 작성을 하였는데,
// 문제는 이렇게 작성을 하면 result값이 초기화가 되지 않아 테스트를 돌릴때마다 값들이 중복이 되었다
// ex) dfs(node1) // [1,2,3] ,  dfs(node2) // [3,2,1]
// dfs(node1)을 하고 dfs(node2)를 하면 [3,2,1]이 아닌 [1,2,3,3,2,1] 이런식으로 중복값을 준다. 그래서 따로 재귀함수를 만들었다
let result = [];
let dfs = function (node) {
  let result = [];

  if (node.value) {
    result.push(node.value);
  }
  if (node.children) {
    for (let i = 0; i < node.children.length; i++) {
      dfs(node.children[i]);
    }
  }
  return result;
};
