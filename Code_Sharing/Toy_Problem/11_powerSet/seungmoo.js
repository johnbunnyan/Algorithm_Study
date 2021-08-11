const powerSet = function (str) {
  // 정렬
  let arr = str.split("").sort();

  // 중복 제거
  const deduplicated = arr.reduce((acc, cur) => {
    const N = acc.length;
    return acc[N - 1] === cur ? acc : acc.concat(cur);
  });
  // 멱집합
  let result = [];
  const aux = (idx, temp) => {
    if (idx === deduplicated.length) {
      result.push(temp);
      return;
    }

    aux(idx + 1, temp);

    aux(idx + 1, temp + deduplicated[idx]);
  };

  aux(0, "");
  return result.sort();
};
