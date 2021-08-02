let bubbleSort = function (arr) {

    //arr의 i번째와 i+1번째를 바꾸는데 사용할 변수를 save라는 이름으로 선언합니다.
    let save=[]
    
    //이중반복문 i선언으로 arr의 길이만큼 반복해 모든 arr의 요소들이 비교되도록 합니다.
    for (let i = 0; i < arr.length;i++) {
    //바꿔진 개수를 세는 swaps를 선언합니다.
    let swaps = 0;
    //아래 반복문에서 실질적인 크기 비교를 하는데
    //아래의 매 반복마다 i번째로 큰 수가 마지막에서(arr.length-1) i번째 위치(- i)하게 됩니다.
    //이미 정렬된 요소(N - 1 - i)는 고려할 필요가 없으므로, 이를 제외한 범위(j < N - 1 - i)만 비교하면 됩니다.
    for(let j=0;j<arr.length-1-i;j++){
    
    if(arr[j] > arr[j+1]){
    save =arr[j]
    arr[j]=arr[j+1]
    arr[j+1]=save
     swaps++;
    }
    }
    //만약 arr의 전체를 다 돌았는데도 한번의 swaps도 일어나지 않았다면 그 arr는 정렬된 상태이었던 것이므로
    //반복문을 탈출해서 그대로 리턴합니다.
     if(swaps === 0){
      break;
      }
    
      }
      return arr
    };
    