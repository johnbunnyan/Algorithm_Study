const largestRectangularArea = function (histogram) {
  const createMinIdxTree = (arr, ts, te) => {
    if (ts === te) return { idx: ts, val: arr[ts] };

    const mid = parseInt((ts + te) / 2);
    const left = createMinIdxTree(arr, ts, mid);
    const right = createMinIdxTree(arr, mid + 1, te);
    // val는 left와 right 둘 중에서 더 작은 값을 가지고
    // idx도 마찬가지로 left와 right 둘 중에서 더 작은 값의 idx 값을 가진다.
    return {
      val: Math.min(left.val, right.val),
      idx: left.val < right.val ? left.idx : right.idx,
      left,
      right,
    };
  };
  const tree = createMinIdxTree(histogram, 0, histogram.length - 1);

  const getMinIdx = (ts, te, rs, re, tree) => {
    if (rs <= ts && te <= re) return tree.idx;
    // 리턴값은 rs나 re 둘 다 가능
    // 구간의 처음이나 마지막으로 일관되게 하는 것이 중요한 것 같음
    if (te < rs || re < ts) return rs;

    const mid = parseInt((ts + te) / 2);
    const left = getMinIdx(ts, mid, rs, re, tree.left);
    const right = getMinIdx(mid + 1, te, rs, re, tree.right);
    return histogram[left] < histogram[right] ? left : right;
  };

  const getRangeArea = (start, end) => {
    if (start > end) return 0;
    const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);
    // 현재 구간에서 가장 작은 막대의 값이 높이가 되기 때문에
    // 구간의 길이만큼 곱해주면 면적을 구할 수 있다.
    return Math.max(
      (end - start + 1) * histogram[minIdx],
      getRangeArea(start, minIdx - 1),
      getRangeArea(minIdx + 1, end)
    );
  };

  return getRangeArea(0, histogram.length - 1);
};
