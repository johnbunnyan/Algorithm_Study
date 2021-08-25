const LPS = function (str) {
  if (str.length < 2) return 0;

  // 문자열을 두 부분으로 나누고
  // 각 부분의 첫 인덱스를 저장
  let leftIdx = 0;
  // 문자열의 길이가 홀수일 수 있으므로, 올림한다.
  let rightIdx = Math.ceil(str.length / 2);

  while (rightIdx < str.length) {
    if (str[leftIdx] == str[rightIdx]) {
      // LPS 검사를 시작한 위치부터 지금까지 계속 같은 경우
      // 다음 문자도 같은지 확인하기 위해 인덱스를 이동한다.
      leftIdx++;
      rightIdx++;
    } else {
      // 중간에 일치하지 않는 경우가 있으면
      // rightIdx만 한칸 이동한다.
      // leftIdx가 증가한 만큼 rightIdx도 똑같이 증가했기 때문에
      // rightIdx에서 leftIdx만큼 빼주고 한칸 이동하기 위해 +1을 해준다.
      rightIdx = rightIdx - leftIdx + 1;
      leftIdx = 0;
    }
  }
  // leftIdx는 0부터 시작해서 rightIdx와 일치하는 만큼 증가하기 때문에
  // LPS의 길이를 의미하기도 한다.
  return leftIdx;
};
