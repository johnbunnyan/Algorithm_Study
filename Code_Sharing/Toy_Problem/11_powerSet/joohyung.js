const powerSet = function (str) {
  // 문자열을 배열로 바꾼다
  let arr = str.split("").sort();
  // 조합들을 담을 배열
  let result = [""];
  let pSet = function (target, result) {
    // 원형을 변화를 주지 않기 위해 배열복사
    let copyResult = result.slice();
    for (let i = 0; i < copyResult.length; i++) {
      //복사된 배열의 i번쨰를 [i] + target으로 변경 후 result배열에 추가
      copyResult[i] += target;
      result.push(copyResult[i]);
    }
  };

  for (let i = 0; i < arr.length; i++) {
    //중복된 값인지 아닌지 확인 (중복된 문자는 필요 없음)
    if (!result.includes(arr[i])) {
      pSet(arr[i], result);
    }
  }
  return result.sort();
};

/********************* 새로운 방법 *********************/
// 이 방법이 조금더 쉬운 것 같다. 일반적으로 powerSet구하는 방법도 가독성이 더 좋다
const powerSet = function (str) {
  let arr = overlap(str);
  let result = [""];
  for (let i = 0; i < arr.length; i++) {
    let len = result.length;
    for (let j = 0; j < len; j++) {
      result.push(result[j].concat(arr[i]));
    }
  }
  return result.sort();
};
// 중복되는 값이 있는지 확인 및 순서 정렬
function overlap(str) {
  let result = [];
  str = str.split("").sort();
  for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
      result.push(str[i]);
    }
  }
  return result;
}

// 멱집합을 구하는 문제이다. 멱집합은 주어진 집합의 모든 부분집합의 집합이다.
// 한마디로 그냥 str에서 나올 수 있는 모든 요소를 보여주는 것이다. 단 중복은 안 된다 ex) abc // a, b, c, abc, cba(이거는 안 됨)...
// 출력의 순서는 '', a, b, ab, c, ac, bc, abc 이렇게 된다.
