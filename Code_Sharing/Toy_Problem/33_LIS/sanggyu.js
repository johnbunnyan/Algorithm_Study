//subsequence
//순서가 있는 데이터에서 순서의 대소 관계가 유지되는 모든 부분 문자열 또는 부분 배열
//'a', 'b', 'c', 'd'

// a-b / b-c / c-d 처럼 연속된 순서로 나와야 됨
//'ab', 'bc', 'cd'

//'abc', 'bcd'

//'abcd'

//substring
//연속된 형태의 부분 문자열 또는 부분 배열
//'a', 'b', 'c', 'd'

//ac ad bd 처럼 중간에 연속된 요소가 생략됨
//'ab', 'ac', 'ad', 'bc', 'bd', 'cd'

//'abc', 'abd', 'acd', 'bcd'

//'abcd'


const LIS = function (arr) {
    const N = arr.length;
  
    // lis[i]는 i에서 끝나는 LIS의 길이를 저장
    // 최소한 각 요소 하나로 LIS를 만들 수 있으므로 1(요소하나, ex.'a', 'b', 'c')로 초기화한다.
    const lis = Array(N).fill(1);
    //[1,1,1,1,1...N]
  
    for (let i = 1; i < N; i++) {
      // i에서 끝나는 LIS의 길이
      for (let j = 0; j < i; j++) {
        // i 이전의 인덱스만 검사하면 된다.
        // i는 1부터 시작하므로, 짧은 길이부터 검사한다. (bottom-up 방식)
        //for 범위상 오름차순이면 i요소가 j요소보다 항상 뒤이고 값이 커야한다
        if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
          //arr로는 입력배열의 요소값을 비교(엄격하게 오름차순인지 체크)
          //&&
          //[3, 10, 2, 1, 20]에서 i가 20을 픽하고
          //j가 3->1순으로 돌때마다, 각 요소별(lis[i]) 길이가 가장 긴 것을 갱신
          lis[i] = lis[j] + 1;
        }
      }
    }
    //lis의 모든 배열 요소를 ...(전개구문)으로 풀고 최댓값(최대길이)리턴
    return Math.max(...lis);
  };