// 힙(heap)은 최댓값 및 최솟값을 찾아내는 연산을 빠르게 하기 위해 고안된 완전이진트리(complete binary tree)를 기본
//으로 한 자료구조(tree-based structure)로서 다음과 같은 힙 속성(property)을 만족한다.
// A가 B의 부모노드(parent node) 이면, A의 키(key)값과 B의 키값 사이에는 대소관계가 성립한다.
// 힙에는 두가지 종류가 있으며, 부모노드의 키값이 자식노드의 키값보다 항상 큰 힙을 '최대 힙', 
//부모노드의 키값이 자식노드의 키값보다 항상 작은 힙을 '최소 힙'이라고 부른다.
// 키값의 대소관계는 오로지 부모노드와 자식노드 간에만 성립하며, 특히 형제 사이에는 대소관계가 정해지지 않는다.


// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    // 두 변수를 바꾸는 방법
  
    // 1) 임시 변수를 활용한 방법(가장 일반적)
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;
  
    // 2) 구조분해할당(Destructuring assignment)을 활용한 방법
    // arr이 reference type이라 가능
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  
    // 3) XOR 연산을 활용한 방법
    // arr이 reference type이라 가능
    // arr[idx1] ^= arr[idx2];
    // arr[idx2] ^= arr[idx1];
    // arr[idx1] ^= arr[idx2];
  }
  
  // 아래 코드는 수정하지 마세요.
  const binaryHeap = function (arr) {
                //누산기(heap) 현재 값(item)
    return arr.reduce((heap, item) => {
      //최종적으로 insert통해 binaryHeap구성
      return insert(heap, item);
    }, []);
  };
  
  //부모노드 인덱스찾기
  function getParentIdx(idx) {
    //floor내림(소수점 다버림)
    return Math.floor((idx - 1) / 2);
  }
  
         //누산기(heap) 현재 값(item)
  function insert(heap, item) {
    heap.push(item);
       //현재 인덱스
    let curIdx = heap.length - 1;
    //getParentIdx 사용(현재 인덱스로 부모인덱스 찾아서 할당)
    let pIdx = getParentIdx(curIdx);
  
    //부모 인덱스가 0이랑 같거나 크고 현재 인덱스요소가 부모인덱스 요소보다 크다면->부모가 되어야됨
    while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
     //swap 사용(실제 heap요소값을 swap)
      swap(curIdx, pIdx, heap);
      //인덱스는 swap하지 않았기에 직접변경
      curIdx = pIdx;
      pIdx = getParentIdx(curIdx);
    }
    return heap;
  }
  