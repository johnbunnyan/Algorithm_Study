let bfs = (node) => {
  let queue = [node];
  let result = [];

  while (queue.length > 0) {
    // 순차적으로 하나하나 값이 들어간다 (queue의 특성에 의해)
    // queue에서 확인 할 요소를 꺼내고, check에 담는다
    let check = queue.shift();
    // 값을 result에 담는다
    result.push(check.value);
    // 만약 check에 자식이 있다고 하면, 자식을 큐에 넣어준다. 이것을 que가 0이 될 때 까지 반복시켜 준다.
    // 쉽게 생각해서, queue에 확인 할 것들이 다 들어가고, 순차적으로 확인한다.
    check.children.forEach((el) => queue.push(el));
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
