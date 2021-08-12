let bfs = function (node) {
    // TODO: 여기에 코드를 작성합니다.
   //node객체를 배열에 담기
    let queue = [node];
  //처음에는 0번째요소 뿐
  
   //리턴할 변수 선언
    const values = [];
    while (queue.length > 0) {
      const head = queue[0];
      //1순위. 큐는 다음 반복에서 쓰이는 값(층,layer),0은 head에서 썼으니까 그 다음것들만 새로 갱신
      queue = queue.slice(1);
    //부모노드값만 먼저  넣어주고
      values.push(head.value);
  //2순위.해당 부모의 자식노드들은 다음 반복 시 저장해서 순회할 queue에 다 넣는다
      head.children.forEach((child) => queue.push(child));
    }
    return values;
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
  