const isSubsetOf = function (base, sample) {
    // TODO: 여기에 코드를 작성합니다.
  
  //base에 해당하는 모든 부분집합들을 만듭니다.
  function powerSet(arr) {
    //check표시 해줄 배열을 만들고
    let check = new Array(arr.length).fill(0);
    //powerSetArr은 모든 부분집합이 담길 배열을 만듭니다
    let powerSetArr = [];
    //깊이우선탐색
    const dfs = (depth) => {
      //check에 1인 index와 같은 index에 있는 arr만 filter해서 넣어준다.
      if (depth === check.length) {
                        //부분집합  ->            조건(체크배열에 인덱스 중 1이 들어있는 인덱스까지만)
        powerSetArr.push(arr.filter((v, idx) => check[idx]));
  //ex
  //  arr: (5) [1, 2, 3, 4, 5]
  // check: (5) [1, 1, 1, 1, 0]
  // powerSetArr에 푸쉬되는 arr은 [1,2,3,4]  (0인덱스에 해당하는 5제외)
      } else {
        //포함되는 경우
        check[depth] = 1;
        dfs(depth + 1);
        //포함되지 않는 경우
        check[depth] = 0;
        dfs(depth + 1);
      }
    };
    dfs(0);
    return powerSetArr;
  }
  //save에는 모든 base의 부분집합들이 담기고
  const save = powerSet(base)
  
  //그것들 중에 조회를 해서 sample과 같은 것이 있는지 조회해서 
  //배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트해서
  //ture,false를 리턴하는 some메서드로 최종리턴합니다.
  const found = sample.some(r=> save.includes(r))
  return found
  
  };
  