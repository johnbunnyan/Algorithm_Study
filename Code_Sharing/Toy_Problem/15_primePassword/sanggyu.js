//소수인지 판별하는 함수
const isPrime = (num) => {
    //1차 검증(2로 나누어 떨어지는지)
    if (num % 2 === 0) return false;
    //2차 검증(해당 숫자의 제곱근보다 작은 3,5,7..로 나누어 떨어지는지)
    let sqrt = parseInt(Math.sqrt(num));
    for (let divider = 3; divider <= sqrt; divider += 2) {
      if (num % divider === 0) {
        return false;
      }
    }
    return true;
  };
  
  // 4자리 수를 받아서 각 자리수의 수들의 배열로 변환하는 함수
  //  let output = splitNum(3359);
  //  console.log(output); // --> [3, 3, 5, 9]
  //배열
  const splitNum = (num) => {
    //숫자->문자열->숫자별로 나누기 및 배열화-
    //>요소들 숫자로 다시변환
    const digits = num.toString().split('');
    return digits.map((d) => Number(d));
  };
  
  // 길이의 4의 수 배열을 받아서, 4자리의 수로 변환하는 함수
  //배열->join으로 문자열화하여 합치기->숫자화
  //숫자
  const joinDigits = (digits) => Number(digits.join(''));
  //  let output = splitNum([3, 3, 5, 9]);
  //  console.log(output); // --> 3359
  
  
  //bfs를 사용하는 이유:숫자들의 자릿수(4,3,2,1)들을 각각 노드, 그리고 그 케이스를 하나의 층이라고 가정하고
  //각 노드가 고정된 상황에서 각각의 노드에서 파생되는 다른 경우의 수들이 각 노드마다 또 생겨나면 트리의 구조가 나온다.
  //각 큐요소별로 깊이가 깊지 않고(2층) 너비도 4(0,1,2,3)-10(0~9)
  const primePassword = (curPwd, newPwd) => {
    if (curPwd === newPwd) return 0;
    // bfs를 위해 queue를 선언
    let front = 0;
    let rear = 0;
    const queue = [];
    const isEmpty = (queue) => front === rear;
    const enQueue = (queue, item) => {
      queue.push(item);
      rear++;
    };
    const deQueue = (queue) => {
      return queue[front++];
      //현재 맨 앞의 요소를 꺼낸 다음, front를 1씩 뒤로 당겨놓는다. 
      // const item = queue[front];
      // front++;
      // return item;
    };
  
    // 각 4자리의 방문 여부를 저장하는 배열
    // 한 번 방문한 수(가장 최소의 동작으로 만든 수)는 다시 방문할 필요가 없다. ->bfs 포맷
    const isVisited = Array(10000).fill(false);
    //[false,false,false...10000개까지]
    isVisited[curPwd] = true;
  
  
    // bfs를 위한 시작점
    // 큐에는 [필요한 동작 수, 비밀번호]가 저장된다.
    enQueue(queue, [0, curPwd]);
    // bfs는 큐가 빌(empty) 때까지 탐색한다.
    while (isEmpty(queue) === false) {
      const [step, num] = deQueue(queue);
      // 각 자리수 마다 변경이 가능하므로 4번의 반복이 필요하다.
      for (let i = 0; i < 4; i++) {
        const digits = splitNum(num);
        // 0부터 9까지 시도한다.
        for (let d = 0; d < 10; d++) {
          // 각 자리수마다 원래 있던 수(digits[i])는 피해야 한다.
          if (d !== digits[i]) {
            // 현재 자리수의 수를 변경하고,
            digits[i] = d;
            // 변경한 후 4자리 수를 구한다.
            const next = joinDigits(digits);
  
            // 만약 이 수가 새 비밀번호와 같다면 리턴한다.
            // next는 deQueue된 num으로부터 1단계 다음에 도달한 수(바로 위의 자리수 변경과정이 1단계를 거친 것)이다.
            if (next === newPwd) return step + 1;
  
            // 1,000보다 큰 소수여야 하고, 방문된 적이 없어야 한다.
            //숫자를 바꾸는 조건(위 조건들을 충족하는 모든 가능성들을 모두 queue에 저장해두고 하나씩 꺼내서 탐색)
            if (next > 1000 && isPrime(next) && isVisited[next] === false) {
              // 방문 여부를 표시하고,
              isVisited[next] = true;
              // 큐에 넣는다(이 들어간 요소들을 가지고 또다시 위 과정을 반복한다.)
              enQueue(queue, [step + 1, next]);
            }
          }
        }
      }
    }
  
    // 큐가 빌 때까지, 즉 모든 경우의 수를 탐색할 때까지 리턴되지 않은 경우
    // 현재 비밀번호에서 새 비밀번호를 만들 수 없다.
    return -1;
  };