//공통으로 존재
//연속되지 않는(연속되지 않을 수도 있는) 
//부분 문자열

// dynamic programming: O(M * N)
// memoization을 활용해 중복 계산되는 문제를 제거한다.
// LCS('ABCD', 'ACEB')의 경우 재귀 호출을 적어보면 아래와 같다.
// => 1) LCS('BCD', 'CEB') :공통된 0번째 요소만 뺀다
//  => 1-1) LCS('CD', 'CEB'), 1-2) LCS('BCD', 'EB'): left와 right 각각에 대해 첫번째 요소를 뺀다
//    => 1-1-1) LCS('D', 'CEB'), 1-1-2) LCS('CD', 'EB')
//    => 1-2-1) LCS('CD', 'EB'), 1-2-2) LCS('BCD', 'B')
// 더 볼 필요 없이 1-1-2)와 1-2-1)은 같은 문제임을 알 수 있다.

const LCS = function (str1, str2) {
    const M = str1.length;
    const N = str2.length;
  
    const memo = [];
    
    // 중복 계산을 방지하기 위해 left입력배열, right입력배열(memo[left][right])
    //    => 1-1-1) LCS('D', 'CEB'), 1-1-2) LCS('CD', 'EB')
  //    => 1-2-1) LCS('CD', 'EB'), 1-2-2) LCS('BCD', 'B')
  // 더 볼 필요 없이 1-1-2)와 1-2-1)은 같은 문제임을 알 수 있다.
    for (let i = 0; i < M + 1; i++) memo.push(Array(N + 1).fill(-1));
  
  
    const compareOneByOne = (left, right, len) => {
      
      //2.기존 memo가 기록되어 있어서(중복등장) 수정이 되어 있었다면
      if (memo[left][right] !== -1) return memo[left][right];
  
  
      //1-1) 범위를 벗어난 경우
      if (left === str1.length || right === str2.length) return 0;
  
  
      //1-2) 공통문자가 발견되면 left,right 모두 다음 인덱스로 넘어감
      // => 1) LCS('BCD', 'CEB') :공통된 0번째 요소만 뺀다
      if (str1[left] === str2[right]) {           //각각 문자열의 다음 인덱스 확인      len은 역할x
        memo[left][right] = 1 + compareOneByOne(left + 1, right + 1, len + 1);
        return memo[left][right];
      }
  
      //3. left,right 하나씩 픽스해두고 반대편 문자열이 매칭되는지 재귀로 확인
      //  => 1-1) LCS('CD', 'CEB'), 1-2) LCS('BCD', 'EB'): left와 right 각각에 대해 첫번째 요소를 뺀다
      memo[left][right] = Math.max(
        compareOneByOne(left + 1, right, len), 
        compareOneByOne(left, right + 1, len)
      );
  
      return memo[left][right];
    };
  
                      //left, right, len
    return compareOneByOne(0, 0, 0);
  };