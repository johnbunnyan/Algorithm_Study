function orderOfPresentation(N, K) {
  let num = [];
  for (let i = 1; i <= N; i++) {
    num.push(i);
  }
  let str = num.join("");
  let result2 = [];
  let permutation = (str, result) => {
    if (str.length === 0) {
      result2.push(result);
    }
    for (let i = 0; i < str.length; i++) {
      let rest = str.slice(0, i) + str.slice(i + 1);
      permutation(rest, result + str[i]);
    }
  };
  permutation(str, "");
  return result2.indexOf(K.join(""));
}

/*
N = 총 조의 수 , K = 발표 순서 
N = 3 일 경우. 총 3개의 조가 있다. 3개의 조가 가질 수 있는 모든 경우의 수를 구해야 된다. 

이문제는 수열을 통해 풀 수 있을 것 같다. N의 갯수만큼 반목문을 사용해 작성 할 수 있겠지만, 
그러면 하나 증가 할 때마다 시간 복잡도가 O(N^2)이 되기 때문에 
재귀를 통해 구하는 것이 나을 것 같다

1. 수열의 인자로 사용하게 될 N을 구한다
  ex) N = 3이면 [1,2,3] , N = 4이면 [1,2,3,4]

2. 수열을 구하는 함수를 만든다. 재귀함수를 사용하여 작성한다 

문제 = N을 최대 10 까지만 지정이 가능하다. 10을 넘어가면 연산을 하지 못한다, 시간 복잡도를 더 줄일 수 있는 방식으로 작성을 해야 된다
*/

// 기본 순열 공식 (구냥 외우자)
let str = "abc";
let permutation = (result, str) => {
  if (str.length === 0) {
    console.log(result);
  }
  for (let i = 0; i < str.length; i++) {
    let rest = str.slice(0, i) + str.slice(i + 1);
    permutation(result + str[i], rest);
  }
};

permutation("", str); // abc acb bac bca cab cba

// 순열 배열 공식. ex) [1,2,3] // [1,2,3], [1,3,2], [2,1,3] .....
let permute = function (nums) {
  const result = [];
  const dfs = (cur, rest) => {
    if (rest.length === 0) {
      result.push(cur);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      dfs([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };
  dfs([], nums);

  return result;
};
/*
slice와 substring의 차이점 

substring 경우에는 마이너스 값은 0으로 인식된다. 그리고 시작 위치가 종료 위치보다 크면 값이 바뀌게 돤다.
     ex) str.substring(4, -2) => str.substring(4, 0) => str.substring(0,4)

slice는 마이너스 값을 입력해서도 사용 가능하다. 마이너스 값을 입력한 경우에는 뒤에서부터 이동하게 된다.
    ex) str = '123456' 
        str.slice(2, -1) // 345
*/
