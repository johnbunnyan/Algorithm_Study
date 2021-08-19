const balancedBrackets = function (str) {
  const stack = [];
  const opener = {
    "[": "]",
    "{": "}",
    "(": ")",
  };
  const closer = "]})";

  for (let i = 0; i < str.length; i++) {
    // i번째 요소가 열린 괄호라면 stack에 추가한다.
    if (str[i] in opener) {
      stack.push(str[i]);
    }
    // i번째 요소가 닫힌 괄호라면
    // stack의 앞에 있는 요소를 stack에서 빼고
    // 현재 요소와 쌍이 맞는지 확인한다.
    else if (closer.includes(str[i])) {
      const top = stack.pop();
      const pair = opener[top];
      if (pair !== str[i]) return false;
    }
  }
  // stack에서 빠지지 않고 남아있는 요소가 있다면
  // 짝이 맞지않는 것이다.
  return stack.length === 0;
};
