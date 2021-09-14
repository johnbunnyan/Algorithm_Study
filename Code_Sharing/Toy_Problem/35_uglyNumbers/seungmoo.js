const uglyNumbers = function (n) {
  // 1은 2, 3, 5로 나누어 떨어지지 않는 수이기 때문에
  // 처음부터 배열에 포함한다.
  const numbers = [1];
  let idx2 = 0,
    idx3 = 0,
    idx5 = 0;

  for (let i = 0; i < n; i++) {
    // 각 인덱스를 기준으로 2, 3, 5를 곱한 값을 구한다.
    // 오름차순으로 정렬해야 하기 때문에
    // 작은 수부터 차례로 배열에 추가한다.
    const nextMultipleOf2 = numbers[idx2] * 2;
    const nextMultipleOf3 = numbers[idx3] * 3;
    const nextMultipleOf5 = numbers[idx5] * 5;
    const nextUglyNum = Math.min(
      nextMultipleOf2,
      nextMultipleOf3,
      nextMultipleOf5
    );
    numbers.push(nextUglyNum);

    if (nextUglyNum === nextMultipleOf2) idx2++;
    if (nextUglyNum === nextMultipleOf3) idx3++;
    if (nextUglyNum === nextMultipleOf5) idx5++;
  }
  return numbers[n - 1];
};
