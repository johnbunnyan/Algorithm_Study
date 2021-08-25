const inequalityNumber = function (signs) {
  const aux = (idx, signs, nums, digits, isVisited) => {
    // 부등호가 1개일 때 2개의 숫자가 필요하다
    // idx는 -1부터 시작해서 1씩 증가하고
    // idx가 1이 될 때까지 재귀함수가 2번 호출되어 부등호 수가 완성된다.
    // 부등호 수가 완성된 경우 리턴한다.
    if (idx === signs.length) return parseInt(nums.join(""));

    const sign = signs[idx];
    for (let i of digits) {
      const right = i;
      if (isVisited[right]) continue;

      // 첫번째 수가 아닌 경우
      if (idx >= 0) {
        const left = nums[nums.length - 1];
        if (sign === "<" && left >= right) continue;
        if (sign === ">" && left <= right) continue;
      }

      // 같은 숫자는 비교할 필요가 없기때문에 기록을 남긴다.
      isVisited[right] = true;
      const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
      if (target !== undefined) return target;
      // target을 찾지 못했다면 기록을 다시 되돌린다.
      isVisited[right] = false;
    }
    return undefined;
  };
  // 부등호를 배열로 만든다.
  signs = signs.split(" ");
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};
