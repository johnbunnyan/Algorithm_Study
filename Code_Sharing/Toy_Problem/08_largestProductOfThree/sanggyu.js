//테스트는 다 통과했으나, 테스트 입출력 예시를 위주로 접근했더니 로직이 이상해졌다.
//이 문제의 핵심은 곱하는 3개의 요소 안에 음수와 양수가 어떻게 들어있느냐인데
//배열전체의 관점에서 문제를 바라보고 로직을 짰다.
//아마 배열 전체의 곱이 최대인 것을 리턴하라는 문제를 푼 경험 때문인 것 같은데
//다음에는 문제가 요구하는 바가 무엇인지 더 생각해봐야겠다.
//이번 문제에서는 일단 arr을 오름차순으로 정렬해놓은 다음에
//어떻게 3개를 곱해야 최대값이 나오는지 관찰하는 방식의 접근이 필요했다.

const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
  
  //arr안에 음수의 개수
  let negativeCount =arr.filter((el)=>{
  return el <0}).length
  //arr안에 양수의 개수
  let positiveCount =arr.filter((el)=>{
  return el >0}).length
  
  //해당하는 배열의 3번째 요소까지 곱해주는 리듀서함수
  let reducer = (acc,cur,i,arr)=>{
    if(i===2) arr.splice(1)
    return acc * cur
    }
  //리턴용 변수 초기값
  let output=0
  
  //arr을 절댓값으로 바꿔주는 맵퍼
  let absMapper=arr.map((el)=>Math.abs(el))
  
  
  //만약 양수가 3개이상이고 음수도 짝수개이면
   if(negativeCount>1&&positiveCount>2){
  // 절대값으로 다 바꾼다
  // 3개컷 리듀스
   output =  absMapper.sort((a,b)=>{return b-a}).reduce(reducer)
  
  }
  //만약 양수가 1개나 2개이고 나머지는 음수일 경우
  //음수에서 가장 낮은 차례로 값을 두개 곱하고 양수에서 가장 큰 값을 곱한다
  //=== 오름차순으로 정렬된 배열에서 맨 뒤에서 두개 맨 앞에서 한 개 곱하기
  else if(negativeCount>1 && 0<positiveCount && positiveCount<3){
  let pre= arr.sort((a,b)=>{return b-a})
  output = pre[pre.length-1] * pre[pre.length-2] * pre[0]
  
  }
  //그 나머지의 경우 모두 양수이거나 음수일때이므로 오름차순 정렬 한 것에서 맨 앞순으로 요소 3개를 곱한다
  else{
     output = arr.sort((a,b)=>{return b-a}).reduce(reducer)
   }
  
  return output
  }