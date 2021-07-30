let isSubsetOf = function (base, sample) {
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  let result = false;
  for (let i = 0; i < sample.length; i++) {
    for (let j = i; j < base.length; j++) {
      if (sample[i] === base[j]) {
        result = true;
        break;
      } else {
        result = false;
      }
    }
    if (result === false) {
      return false;
    }
  }
  return result;
};

/*
sample에 있는 모든 요소가 base에 포함이 되어있으면 true를 반환하는 문제이다. 
배열의 요소가 7만개 이상을 가질 수 있어서, 시간 복잡도도 생각을 하며 작성을 해야 된다.
이중 반복문으로 작성을 하였다, 이중이라 시간 복잡도 문제가 있을 수 있지만, sample과 base를 정렬 하고 
j = i로 줌으로 서 시간을 절약하였다 (정렬을 해서 j = 0부터 할 필요없이 i 부터 시작하면 됨)
그리고 만약 sample[i] === base[j]를 찾게 되면 result = true로 주고 뒤는 더 확인하지 않고 break문으로 포문을 빠져나왔다.
만약 base를 끝까지 확인했는데 sample을 찾지 못 하면 result = false로 주고, 결과값을 false로 주고 끝냈다. (하나라도 없으면 false이기 떄문)
*/
//isSubsetOf([1, 3, 5, 6 , 7, 8], [1, 3,4, 8]); // false

// every를 사용하여 쉽게 작성도 해보았다. 하지만 시간 복잡도에서 문제가 생겨 base가 일정 수를 넘어서게 되면 시간이 너무 오래걸려 오류가 난다.
const isSubsetOf = (base, sample) => {
  return sample.every((element) => base.includes(element));
};
// every는 배열안에 모든 요소들을 확인한 후 boolean을 리턴한다. 필터와 비슷하게 다 통과되면 true를 하나라도 실패하면 false를 반환한다.
// returns true if all elements in an array pass a test (provided as a function).

// ex
const ages = [5, 4, 3, 2, 1];
function checkAge(age) {
  return age < 6;
}
ages.every(checkAge); // true
