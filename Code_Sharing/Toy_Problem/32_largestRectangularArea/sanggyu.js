//어제 31_rangeMinimum가 구간트리 문제의 응용
//참고 https://velog.io/@jeongho3786/Largest-rectangular-area-in-a-histogram
//https://afteracademy.com/blog/largest-rectangle-in-a-histogram
const largestRectangularArea = function (histogram) {
  
    //1. 주어진 histogram배열 기반으로 구간트리를 만든다(트리->재귀로 leaf만들기)
    const createMinIdxTree = (arr, ts, te) => {
      // 가장 작은 값의 '인덱스'를 구하기 위한 구간 트리
      //어제랑 구현은 같지만 각 노드에 idx추가
      //첫번째 base조건문-> 각 재귀 맨 밑까지 내려가게 함
      if (ts === te) return { idx: ts, val: arr[ts] };
  
      const mid = parseInt((ts + te) / 2);
      const left = createMinIdxTree(arr, ts, mid);
      const right = createMinIdxTree(arr, mid + 1, te);
      //첫번째 조건문으로 재귀 맨밑까지 스택 쌓인 후 대기 상태
  
      //마지막 리턴-> 역순으로 right부터 스택 빌드업
      return {
        val: Math.min(left.val, right.val),
        idx: left.val < right.val ? left.idx : right.idx,
        left,
        right,
      };
    };
    //1 -> 트리 적용
    const tree = createMinIdxTree(histogram, 0, histogram.length - 1);
  
  //입출력 예시 2번
  // let histogram = [6, 2, 5, 4, 5, 1, 6];
  // let output = largestRectangularArea(histogram);
  // //트리 모양
  //                1(5)
  //       2(1)                1(5)
  // 2(1)      4(3)        1(5)     6(6)
  //         5(2) 4(3)   5(4) 1(5)
  
  
    //2. 해당 범위에서 가장 작은 값의 인덱스
    //최종 getRangeArea메서드 위한 보조함수
    const getMinIdx = (ts, te, rs, re, tree) => {
      //재귀에 들어오면 해당 함수 내에서 변하는 인자에 주목
      //rs,re는 1차적으로 getMinIdx에서는 고정된 값 -> getRangeArea에서 2차 재귀로 변하는 값
      //ts,te가 변하는 값
      if (rs <= ts && te <= re) return tree.idx;
      if (te < rs || re < ts) return rs;
      //mid에 따라 ts,te 변동
      const mid = parseInt((ts + te) / 2);
      const left = getMinIdx(ts, mid, rs, re, tree.left);
      const right = getMinIdx(mid + 1, te, rs, re, tree.right);
      //tree는 가장 작은 인덱스를 구하는 과정에서 필요한 것일 뿐
      //결국 histogram 원 배열에서 값을 뽑아낸다(각 요소의 실제 값 비교)
      return histogram[left] < histogram[right] ? left : right;
    };
  
  
      //3. 2중 재귀 호출 구조(getRangeArea -> getMinIdx)
    const getRangeArea = (start, end) => {
      if (start > end) return 0;
  
      // 현재 구간에서 가장 작은 막대(가장작은 요소)를 찾는다.
      // 가장 작은 막대이므로 구간의 길이 * 높이만큼의 직사각형을 만들 수 있다. (첫번째 후보)
      //각 start-end 별로 mindIdx(범위 내 가장 작은 요소의 인덱스)를 구한다
      const minIdx = getMinIdx(0, histogram.length - 1, start, end, tree);
  
  
      //최종리턴값
      // 가장 작은 막대를 기준으로 왼쪽, 오른쪽 부분에 존재하는 모든 막대의 높이가 더 크다.
      // 재귀적으로 왼쪽 부분과 오른쪽 부분,
      // 즉 해당 구간에서 가장 작은 막대를 제외해서 만들 수 있는 가장 큰 직사각형의 넓이를 구한다.
      return Math.max(
                 //가로     x    높이
        (end - start + 1) * histogram[minIdx], // 첫번째 후보 작은 막대의 높이를 기준으로 구간 길이를 곱해, 첫번째 사각형을 만든다.
        //작은 막대를 기준으로 왼쪽 구간과 오른쪽 구간을 나눈다.
        getRangeArea(start, minIdx - 1),
        getRangeArea(minIdx + 1, end)
      );//첫번재 후보와 왼쪽 구간 후보, 오른쪽 구간 후보 중 가장 큰 값을 리턴한다.
      //왼쪽 구간 후보와 오른쪽 구간 후보는 각각 위의 과정을 거친 값이다. (재귀)
    };
  
    return getRangeArea(0, histogram.length - 1);
  };
  
  /*
  6 | x           x
  5 | x   x O O   x
  4 | x   O O O   x
  3 | x   O O O   x
  2 | x x O O O   x
  1 | x x O O O x x
  ------------------
  */
  //이 사각형의 높이는 이 구간의 막대 중 가장 낮은 높이를 가진 막대(histogram[k])의 높이와 같습니다.
  //:위 예시에서 0-1-2번째 줄
  
  // 이 사각형은 전체 구간(0 ~ n-1) 중 
  // 가장 낮은 막대를 포함하고 있거나(i === 0 && j === n-1)
  
  
  
  