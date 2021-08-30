function radixSort(arr) {
  const base = 10;
  let divider = 1;
  let max = 0;

  while (divider === 1 || divider <= max) {
    const buckets = [...Array(100)].map(() => []);

    for (let el of arr) {
      buckets[Math.floor((el / divider) % base)].push(el);
      max = el > max ? el : max;
    }

    arr = [].concat(...buckets);
    divider *= base;
  }
  return arr;
}
//기수정렬을 한다
// 내부적으로 counting sort를 사용한다
// 사이트 참고
