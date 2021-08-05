 //리턴용 배열을 선언합니다. 재귀를 돌면서 스코프가 꼬이는 것을 방지하기 위해 함수 외부에 선언합니다.
 let output = []
 let dfs = function (node) {debugger
   // TODO: 여기에 코드를 작성합니다.
   
 //일단 재귀로 들어오든 아니든 첫 노드의 값은 넣어둡니다
   output.push(node.value)
   //재귀의 탈출 조건:자식노드가 없으면 탈출
   if(node.children.length === 0){
     return output
   }
 
 
 //자식 노드들을 순회합니다
   for(let i=0;i<node.children.length;i++){
   //만약 i반째 자식 노드가 또 그 자식을 가지고 있지 않으면
   //그 노드가 가장 깊게 들어간 것이므로 그 노드값만 넣고 다시 for문을 돕니다
    if(node.children[i].children.length === 0){
      output.push(node.children[i].value)
      //그렇지 않고 그 자식노드가 또 자식을 가지고 있다면
      //재귀를 들어가서 위의 과정을 그 해당 자식 노드를 기준으로 반복합니다
    }else{
      dfs(node.children[i])
    }
   }
   return output
 };
 