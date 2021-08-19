const balancedBrackets = function (str) {
  const brackets = "(){}[]";
  if (str === "") return true;
  if (str.length % 2 !== 0) return false;

  let result = [];

  for (let i = 0; i < str.length; i++) {
    // i 번째가 무슨 괄호인지 확인
    let pairIdx = brackets.indexOf(str[i]);
    if (pairIdx % 2 === 0) {
      // 짝수면 (,{,[
      // result에 (,{,[ 들의 짝을 넣는다. 그래서 + 1
      result.push(pairIdx + 1);
    } else {
      // 홀수면, ),},]
      // 위에서 짝(홀수)을 넣는다고 + 1 했기 때문에, 갑이 같지 않다면 false
      if (result.pop() !== pairIdx) return false;
    }
  }
  // 짝이 다 있다는 뜻으로 true
  if (result.length === 0) return true;
};

// 모든 괄호의 짝이 맞는지 여부 리턴 true/ false
// 빈 문자는 true를 리턴
