const createMinTree = (arr, ts, te) => {
  if (ts === te) {
    return { value: arr[ts] };
  }

  const mid = parseInt((ts + te) / 2);
  const left = createMinTree(arr, ts, mid);
  const right = createMinTree(arr, mid + 1, te);
  // tree는 value, left, right를 갖는다.
  // 배열을 반으로 나누어
  // left, right에 담고
  // 둘 중 작은 값이 value가 된다.
  return {
    value: Math.min(left.value, right.value),
    left,
    right,
  };
};

const findMin = (ts, te, rs, re, tree) => {
  // tree가 구간 내에 포함된다면
  // tree의 최상단 노드 값이 최소값이므로
  // tree의 value를 리턴한다.
  if (rs <= ts && te <= re) {
    return tree.value;
  }
  // 주어진 구간을 벗어나면 비교할 필요가 없기 때문에
  // 최대값을 넣어준다.
  if (te < rs || re < ts) {
    return Number.MAX_SAFE_INTEGER;
  }

  const mid = parseInt((ts + te) / 2);
  return Math.min(
    findMin(ts, mid, rs, re, tree.left),
    findMin(mid + 1, te, rs, re, tree.right)
  );
};

const rangeMinimum = function (arr, ranges) {
  const tree = createMinTree(arr, 0, arr.length - 1);

  const mins = ranges.map((range) => {
    const [start, end] = range;
    return findMin(0, arr.length - 1, start, end, tree);
  });
  return mins;
};
