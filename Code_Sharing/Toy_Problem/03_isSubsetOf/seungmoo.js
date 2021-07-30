const isSubsetOf = function (base, sample) {
  // base, sample 오름차순 정렬
  // base를 순회하며 sample의 요소와 같으면
  // result에 true를 push하고 반복문 break

  // 오름차순이기 때문에 이미 순회했던 base의 요소는 sample의 다음 요소보다 작다.
  // 순회했던 base의 인덱스를 기억해두고 그 다음부터 순회한다.

  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  let result = [];
  let idx = 0;
  for (let i of sample) {
    for (let e = idx; e < base.length; e++) {
      if (base[e] === i) {
        result.push(true);
        idx = e;
        break;
      }
    }
  }
  return result.length === sample.length;
};
