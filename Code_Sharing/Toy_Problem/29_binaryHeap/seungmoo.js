// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
  // 두 변수를 바꾸는 방법

  // 1) 임시 변수를 활용한 방법
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp;

  // 2) Destructuring assignment를 활용한 방법
  // arr이 reference type이라 가능
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

  // 3) XOR 연산을 활용한 방법
  // arr이 reference type이라 가능
  // arr[idx1] ^= arr[idx2];
  // arr[idx2] ^= arr[idx1];
  // arr[idx1] ^= arr[idx2];
}

function getParentIdx(idx) {
  return Math.floor((idx - 1) / 2);
}

function insert(heap, item) {
  heap.push(item);
  // 현재 노드의 인덱스
  let curIdx = heap.length - 1;
  // 부모 노드의 인덱스
  let pIdx = getParentIdx(curIdx);
  // 부모 노드가 존재하고, 현재 노드가 부모 노드보다 큰 경우
  while (pIdx >= 0 && heap[curIdx] > heap[pIdx]) {
    // 부모 노드와 현재 노드의 위치를 바꾸고
    // 바뀐 인덱스 값을 기준으로 다시 부모 노드의 인덱스를 구해서
    // 비교한다
    swap(curIdx, pIdx, heap);
    curIdx = pIdx;
    pIdx = getParentIdx(curIdx);
  }
  return heap;
}

// 아래 코드는 수정하지 마세요.
const binaryHeap = function (arr) {
  return arr.reduce((heap, item) => {
    return insert(heap, item);
  }, []);
};
