const isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);
  //오름 차순 정렬
  let idx = 0;

  for (let i = 0; i < sample.length; i++) {
    for (let j = idx; j < base.length; j++) {
      if (sample[i] === base[j]) {
        idx = j;
        break;
      } else {
        return false;
      }
    }
    return true;
  }
};
