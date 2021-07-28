function orderOfPresentation (N, K) {
    // TODO: 여기에 코드를 작성합니다.


//N에 대한 모든 경우의 수
//배열 만들어서 담기




//일단 N의 개수만큼 1~N까지의 모든 경우의 수(순열)를 구합니다
//이를 위해 현재 숫자만 제시되어 있는 N을 위에 해당하는 경우의 수를 담은 배열로 만듭니다.
//n을 선언해서 1부터 N까지 숫자를 먼저 뽑아내고
let n=[]
for(let index=1;index<=N;index++){
  n.push(index)
}
//ex)3 -> [1,2,3]   //5 -> [1,2,3,4,5]
//뽑아낸 n을 가지고 경우의 수들을 새롭게 getPermutations라는 함수를 통해 뽑아냅니다.

const getPermutations= function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]); // 1개씩 택할 때, 바로 모든 배열의 원소 return

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)] // 해당하는 fixed를 제외한 나머지 배열 
    const permutations = getPermutations(rest, selectNumber - 1); // 나머지에 대해 순열을 구함.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // 돌아온 순열에 대해 떼 놓은(fixed) 값 붙이기
    results.push(...attached); // 배열 spread syntax 로 모두다 push
  });

  return results; // 결과 담긴 results return
};

let possible = getPermutations(n,5)
return possible

//이렇게 되면 위 possible은 n에 대한 모든 경우의 수들이 담긴 배열로 이차배열로 리턴이 됩니다.
//이 이차배열 안에서 K배열과 똑같은 배열이 있을텐데
//그 배열의 인덱스를 최종적으로 리턴하면 됩니다.
//이 과정은 Search부분이기 때문에 시간복잡도를 줄이기 위해 바이너리 서치로 해당하는 요소를 찾습니다.

const binarySearch = (arr, x , strt=0, end=arr.length) => {
  if(end < strt) return false;
  let mid = Math.floor((strt + end) / 2);
 
  if(arr[mid] === x) {
    return mid;
  }
  if(arr[mid].length < x) {
    return binarySearch(arr, x, mid+1, end);
  }
  if(arr[mid].length > x) {
    return binarySearch(arr, x , strt, mid-1);
  }
}

return binarySearch(n, K); // Returns true



}