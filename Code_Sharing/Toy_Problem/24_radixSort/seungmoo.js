function getMax(arr) {
  return arr.reduce((max, item) => {
    if (item > max) return item;
    return max;
  }, 0);
}

function countingSort(arr, radix) {
  const N = arr.length;
  const output = Array(N).fill(0);
  // 0부터 9까지의 개수를 저장하는 배열
  const count = Array(10).fill(0);

  // 현재 자리수인 radix를 기준으로 0~9의 개수를 센다.
  arr.forEach((item) => {
    // 나누기 10은 모듈러 연산
    const idx = Math.floor(item / radix) % 10;
    count[idx]++;
  });
  // count의 요소를 누적 개수가 되도록 한다.
  // 현재 자리수 1을 기준으로 0을 세개 포함하고 있는 배열에서
  // 0은 인덱스 2까지를 차지하고
  // 1은 인덱스 3부터 위치할 수 있다.
  count.reduce((totalNum, num, idx) => {
    count[idx] = totalNum + num;
    return totalNum + num;
  });
  let i = N - 1;
  while (i >= 0) {
    const idx = Math.floor(arr[i] / radix) % 10;
    output[count[idx] - 1] = arr[i];
    count[idx] -= 1;
    i--;
  }
  return output;
}

function radixSort(arr) {
  // 배열을 음수와 양수를 구분하여 나눈다.
  // 음수는 양수로 변환하여 정렬한다.
  let left = [];
  let right = [];
  arr.forEach((item) => {
    if (item >= 0) right.push(item);
    else left.push(item * -1);
  });

  let max = getMax(left);
  let radix = 1;
  while (parseInt(max / radix) > 0) {
    left = countingSort(left, radix);
    radix *= 10;
  }

  max = getMax(right);
  radix = 1;
  while (parseInt(max / radix) > 0) {
    right = countingSort(right, radix);
    radix *= 10;
  }
  // 양수로 변환하여 정렬했던 left를 다시 음수로 바꾸고
  // 순서를 뒤집는다.
  // right와 합쳐서 리턴한다.
  return left
    .reverse()
    .map((item) => item * -1)
    .concat(right);
}
