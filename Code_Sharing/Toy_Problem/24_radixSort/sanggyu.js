// 계수정렬:각 원소를 사이에 비교하지 않는 정렬(안정성)
// 임시작업에 사용되는 메모리 필요(각 숫자 counting하여 누적시킬 배열/정렬된 배열)
// 정렬할 배열의 원소와 숫자를 counting하여 누적시킨 후 그 값들을 정렬된 배열의 인덱스로 사용
// 비교 연산을 하지 않으며 안정성을 가지는 정렬
// 최대 값이 배열의 원소의 개수보다 작은 경우 공간 효율이 뛰어남
// (단점)가장 큰 숫자에 영향을 받음 -> 즉, 최댓 값에 의해 메모리 공간이 낭비될 수 있음 

// 기수정렬:자리 수를 비교해서 정렬하는 방식
// 가장 낮은 자리수부터 비교하여 정렬(비교연산x)
// 시간복잡도가 O(dn)이라는 매우 빠른 정렬이며 이론상 O(nlogn)을 넘을 수 없음
// 부동 소수점 실수처럼 특수한 비교 연산이 필요한 데이터에는 적용할 수 없음(데이터 타입이 한정적)
// (단점)제자리 정렬이 아니므로 추가적인 메모리 공간이 필요


function getMax(arr) {
    return arr.reduce((max, item) => {
      if (item > max) return item;
      return max;
    }, 0);
  }
  
  function countingSort(arr, radix) {
    const N = arr.length;
    const output = Array(N).fill(0);
    const count = Array(10).fill(0);
  
    // 현재 자리수를 기준으로 0~9의 개수를 센다.
    arr.forEach((item) => {
      const idx = Math.floor(item / radix) % 10;
      count[idx]++;
    });
  
    // count[i]가 i까지의 누적 개수가 되도록 만든다.
    count.reduce((totalNum, num, idx) => {
      count[idx] = totalNum + num;
      return totalNum + num;
    });
  
    // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다.
    //  1. 가장 큰 값을 먼저 본다.
    //  2. 가장 큰 값을 가장 마지막에 놓는다.
    let i = N - 1;
    while (i >= 0) {
      const idx = Math.floor(arr[i] / radix) % 10;
      // count[idx]: 현재 radix의 idx까지 누적 개수
      // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
      output[count[idx] - 1] = arr[i];
      count[idx] -= 1;
      i--;
    }
  
    return output;
  }
  
  
  // naive solution
  // 양의 정수만 정렬 가능
  // function radixSort(arr) {
  //   const max = getMax(arr);
  //   let radix = 1;
  //   while (parseInt(max / radix) > 0) {
  //     arr = countingSort(arr, radix);
  //     radix *= 10;
  //   }
  //   return arr;
  // }
  
  // 음의 정수를 포함한 기수 정렬
  // 1. 주어진 배열을 음수 부분과 양수 부분으로 나눈다.
  // 2. 음수는 절대값을 기준으로, 즉 양수로 변환하여 기수 정렬한다.
  // 3. 양수를 정렬한다.
  // 4. 정렬된 음수 부분을 다시 음수로 바꾸고 순서를 뒤짚는다.
  // 5. 음수 부분과 양수 부분을 붙인다.
  function radixSort(arr) {
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
  
    return left
      .reverse()
      .map((item) => item * -1)
      .concat(right);
  }