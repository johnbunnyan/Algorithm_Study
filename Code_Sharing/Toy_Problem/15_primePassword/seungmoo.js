// 소수여부
const isPrime = (num) => {
  if (num % 2 === 0) return false;
  let sqrt = parseInt(Math.sqrt(num));
  for (let divider = 3; divider <= sqrt; divider += 2) {
    if (num % divider === 0) {
      return false;
    }
  }
  return true;
};
// 4자리 수를 배열로 변환
const splitNum = (num) => {
  const digits = num.toString().split("");
  return digits.map((d) => Number(d));
};
// 배열을 4자리 수로 변환
const joinDigits = (digits) => Number(digits.join(""));

const primePassword = (curPwd, newPwd) => {
  if (curPwd === newPwd) return 0;
  let front = 0;
  let rear = 0;
  const queue = [];
  const isEmpty = (queue) => front === rear;
  const enQueue = (queue, item) => {
    queue.push(item);
    rear++;
  };
  const deQueue = (queue) => {
    // queue의 가장 앞 요소를 반환하고
    // front를 한칸 이동한다.
    return queue[front++];
  };

  // 방문 여부
  const isVisited = Array(9999).fill(false);
  isVisited[curPwd] = true;

  enQueue(queue, [0, curPwd]);

  while (isEmpty(queue) === false) {
    const [step, num] = deQueue(queue);

    // 각 자리수마다 변경을 해본다.
    for (let i = 0; i < 4; i++) {
      const digits = splitNum(num);
      // 각 자리수에 들어갈 수 있는 숫자는 0부터 9까지
      for (let d = 0; d <= 9; d++) {
        // 원래 자리수의 숫자는 건너뛴다.
        if (d === digits[i]) continue;

        digits[i] = d;
        // 새로 바뀐 숫자가 newPwd와 같다면 리턴한다.
        // queue에 넣지 않고 리턴하기 때문에
        // 변경횟수를 +1 해준다.
        const next = joinDigits(digits);
        if (next === newPwd) return step + 1;

        // 1000보다 크고, 소수이고, 방문기록이 없다면
        // 변경횟수를 +1 해서 queue에 넣는다.
        if (next > 1000 && isPrime(next) && isVisited[next] === false) {
          isVisited[next] = true;
          enQueue(queue, [step + 1, next]);
        }
      }
    }
  }
  // 큐가 빌 때까지 리턴된 값이 없다면
  // 새 비밀번호로 변경할 수 있는 경우의 수가 없는 것이다.
  return -1;
};
