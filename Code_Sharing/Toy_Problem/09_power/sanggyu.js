
//naive solution
function power(base, exponent) {
    
   //반복문으로 exponent가 될때까지 곱한다
   //곱할때 마다 94,906,249로 나눈다
  
    let res = base
    let limit = 0
    for(let i=0;i<exponent-1;i++){
  
      res *= base 
      limit = res% 94906249 
    }
    return limit
  }



  //O(logN)
  function power(base, exponent) {
    if (exponent === 0) return 1;
  
    //곱해야하는 횟수(지수)를 반으로 나누고
    const half = parseInt(exponent / 2);
    //다시 재귀에 반으로 나눈 지수를 넣어서 여기에서 콜스택이 쌓인다.
    //결국 최상단 콜스택에 가장 낮은 지수에 해당하는 temp가 저장된다.
    const temp = power(base, half);
    
    //여기서 재귀의 관점에서 첫 리턴은 첫줄의 if탈출문이다(return 1)
    const result = (temp * temp) % 94906249;
  
    //여기에서 exponent는 계속 줄어들어 탈출조건이 생기는데 여기서
    //지수가 짝수일때
    //그냥 그대로 리턴
    //지수가 홀수일때
    //base를 한번 더 곱해주기  
    if (exponent % 2 === 1) return (base * result) % 94906249;
    else return result;
  }