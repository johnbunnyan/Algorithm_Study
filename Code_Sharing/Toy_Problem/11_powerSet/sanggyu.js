const powerSet = function (str) {
    // TODO: 여기에 코드를 작성합니다.
  
  //중복되는 알파벳 정리하고 알파벳 순으로 정렬한다
  let ordered = Array.from(new Set(str.split(''))).sort()
  
  //주어진 str의 멱집합을 구하는 문제
  const getSubsets = function (arr) {
    //배열길이만큼 flag배열을 만들어서 재귀의 층을 표시
    let flag = new Array(arr.length).fill(false);
    //부분집합들을 담는 배열
    const subSets = [];
  
    const subSet = function DFS (depth) {// 부분 집합 구하는 재귀 함수, DFS 알고리즘
      if (depth === arr.length) { // 트리의 끝에 다다른 것 ==> 재귀 종료 조건
        const subSet = arr.filter((value, index) => flag[index]).toString() // 해당 flag가 true => 부분집합 포함
        const comma = subSet.replace(/,/g, "");//콤마제거하는 정규식
        subSets.push(comma); // 부분집합들을 담는 배열에 push
  
        return;
      }
  
      flag[depth] = true; // 해당 depth의 flag true = 트리의 왼쪽(아래 재귀를 들어가니 이미 찍었다는 의미에서 true)
      subSet(depth + 1); // 트리의 왼쪽에 대해 재귀호출
  
      flag[depth] = false; // 해당 depth의 flag false = 트리의 오른쪽
      subSet(depth + 1); // 트리의 오른쪽에 대해 재귀 호출
    }
    
    subSet(0); // depth 0 부터 시작
    return subSets;
  }
  
  //정렬이 안됀 요소들 다시 sort로 lexical order정렬한다
  const result = getSubsets(ordered).sort();
  
  return result
  
  
  };
  