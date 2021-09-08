// 아래 코드는 수정하지 마세요.
//insert, removeRoot 메서드에서 사용
function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  
  //insert 메서드에 사용
  function getParentIdx(idx) {
    return Math.floor((idx - 1) / 2);
  }
  
  function insert(heap, item) {
    //누적된 배열에 현재 아이템을 넣고
    heap.push(item);
    if (heap.length > 1) {
      //현재인덱스는 배열에 push하기 때문에 맨 뒤 인덱스
      let curIdx = heap.length - 1;
      //현재 인덱스의 부모 인덱스
      let pIdx = getParentIdx(curIdx);
     //최소 힙이기 때문에 현재 인덱스의 요소가 더 작다면 부모랑 위치가 바뀌어야 됨
     //바꾸고 나서 curIdx는 위쪽으로 올라간 상태
     //이 상태에서 부모 인덱스를 찾고 똑같이 반복 (방향: 밑에서 위로)
      while (pIdx >= 0 && heap[curIdx] < heap[pIdx]) {
        swap(curIdx, pIdx, heap);
        curIdx = pIdx;
        pIdx = getParentIdx(curIdx);
      }
    }
    return heap;
  }
  
  //1.
  // 아래 코드는 수정하지 마세요.
  //최종 heapSort 구현단계에서 사용
  const binaryHeap = function (arr) {
    //heap(누산기) item(현재요소)
    return arr.reduce((heap, item) => {
      return insert(heap, item);
    }, []);
  };
  
  //2. root가 remove된 상태에서 재정렬하는 메소드
  function removeRoot(heap) {
    //heap의 0번째랑 마지막 서로 바꾸기
    swap(0, heap.length - 1, heap);
    //pop하면 결국 0번째에 있던 요소 빼냄(heapSort에서 sorted에 들어갔으니 필요없음)
    heap.pop();
    if (heap.length === 0) return [];
  
    let curIdx;
    let minIdx = 0;//맨처음 최소 인덱스는 0 (초기세팅)
  
    while (curIdx !== minIdx) {
      curIdx = minIdx;//0번째부터 작업 
      //curIdx는 minIdx의 leaf(left,right)인덱스 구하는 용도
      let left = curIdx * 2 + 1; //0번째 인덱스 기준 양옆 leaf
      let right = curIdx * 2 + 2;
  
  // 01234567
  // 0 -12
  // 1 -34
  // 2 -56
  
      //if문들은 부모랑 자식 관계를 바꾸는 작업
      //각 자식이 더 작으면 부모랑 바꾼다
      if (left < heap.length && heap[left] < heap[minIdx]) {
        minIdx = left;
      }
  
      if (right < heap.length && heap[right] < heap[minIdx]) {
        minIdx = right;
      }
  //위 if문에서 minIdx갈아넣고서 현재 인덱스 요소랑 바꾸기
  //현재 curIdx는 minIdx 원본이 담겨져 있는 상황
  //minIdx원본과 부모랑 비교해서 더 작다고 판정되어 올라온 자식 노드랑 swap
      swap(curIdx, minIdx, heap);
    }
  
    return heap;
  }
  
  const heapSort = function (arr) {
    let minHeap = binaryHeap(arr);//여기까지는 최소힙 구현
    const sorted = [];
    while (minHeap.length > 0) {
      sorted.push(minHeap[0]);//최소힙 앞에서부터 넣는다(맨 꼭대기 층부터 넣고 ex.힌트예시에서 숫자 2)
      minHeap = removeRoot(minHeap); //최상위 root(2)가 사라졌으니 재정렬
    }
    return sorted;
  };