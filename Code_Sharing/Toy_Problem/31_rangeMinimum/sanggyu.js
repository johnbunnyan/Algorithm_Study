// solution with segment tree: O(logN) (search only)
// object implementaion(직관적인 객체구현)

const rangeMinimum = function (arr, ranges) {
  // ts: tree start. te: tree end
  // arr의 ts부터 te까지를 tree로 만든다.

  //1. 주어진 입력배열로 트리만드는 함수(트리는 기본적으로 재귀형태이다)
  const createMinTree = (arr, ts, te) => {
    // base case(재귀의 가장 끝단을 생각하고 만든다)
    //재귀가 할당되고 있는 left,right부터 역으로 빌드업
    if (ts === te) {
      return { value: arr[ts] };
    }

    // recursive case
    // 현재 범위를 절반을 기준으로 왼쪽과 오른쪽으로 나눈다
    const mid = parseInt((ts + te) / 2);
    const left = createMinTree(arr, ts, mid);
    const right = createMinTree(arr, mid + 1, te);

    return {
      value: Math.min(left.value, right.value),
      left,
      right,
    };
  };

  //1->실행
                                //ts(배열의 첫요소), te(배열의 마지막요소)
  const tree = createMinTree(arr, 0, arr.length - 1);


  //2. 범위별 최소 숫자 찾는 함수
  // rs: range start, re: reange end
  const findMin = (ts, te, rs, re, tree) => {
    // 현재 tree와 구간이 정확히 일치하거나
    // 구간이 tree를 포함할 경우
    if (rs <= ts && te <= re) {
      return tree.value;//트리의 최상단 노드가 리턴
    }

    // 현재 tree에 주어진 구간이 겹치지 않는 경우
    if (te < rs || re < ts) {
      return Number.MAX_SAFE_INTEGER;
    }

    // (위 조건들 해당안되서) 겹치는 부분이 존재하는 경우
    const mid = parseInt((ts + te) / 2);
    return Math.min(
      //똑같이 범위를 절반씩 나누어 재귀탐색
      //re,re는 고정
      //첫번째,두번째 파라미터 값 계속 조정
                              //(용도)범위 조건 충족하면 해당 노드의 값 리턴
      findMin(ts, mid, rs, re, tree.left), 
      findMin(mid + 1, te, rs, re, tree.right)
    );
  };


  //2->실행                이차원배열
  const mins = ranges.map((range) => {
    const [start, end] = range;
                //트리의 시작, 끝은 기존 배열 이용
    return findMin(0, arr.length - 1, start, end, tree);
  });
  return mins;
};


//트리모양 예시
//const arr = [1, 3, 2, 7, 9, 11];
  //          1
  //     1         7
  //   1   2     7   11
  // 1  3       7 9