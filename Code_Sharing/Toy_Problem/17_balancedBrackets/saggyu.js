const balancedBrackets = function (str) {
  
    //queue방식
    //앞순부터 꺼내 비교할 것이기 때문에 배열로 저장하는 것이 효과적
    const stack = [];
  
    //비교를 위한 폼을 만든다
    //객체를 활용한 이유는 그 해당요소와  반대모양이
    //키-값의 1대1 관계가 성립하기 때문에 값을 꺼내기 편하다.
    const opener = {
      '{': '}',
      '[': ']',
      '(': ')',
    };
    const closer = '}])';
  //
  
    for (let i = 0; i < str.length; i++) {
      //(,{,[ 처럼 정방향인 것들이 있다면 stack배열에 넣어두고
      if (str[i] in opener) {
        stack.push(str[i]);
      } 
      //닫는 요소가 나왔을 때
      //.includes:문자열에서 해당요소 있는지 true,false파악
      else if (closer.includes(str[i])) {
        //stack맨 앞에 쌓여있는 요소를 꺼내서
        const top = stack.pop();
        //그 반대 방향으로 변환한 다음, 
        const pair = opener[top];
        //그 변환한 반대모양이 현재 반대모양인 요소와 같은지 비교해서 다르면 false
        if (pair !== str[i]) {
          return false;
        }
      }
    }
  //stack에는 결국 정방향((,{,[)들이 쌓이다가 반대방향이 나올때마다 pop으로 꺼내지기 때문에
  //짝이 딱 떨어져 맞으면 길이는 0이 됨
    return stack.length === 0;
  };