//주어진 입력이 어떤 변수명으로 바뀌어 사용되는지 집중하기

const inequalityNumber = function (signs) {
    //idx-signs         //[체크용 배열]isVisited는 digits 체크용 배열
const aux = (idx, signs, nums, digits, isVisited) => {

//최종탈출 전까지 유일한 리턴구간
if (idx === signs.length) {
// 부등호 수를 만든 경우 (재귀를 돌면서 idx가 점점 늘어난다)
    //숫자로<-[숫자 문자열 합쳐서]
return parseInt(nums.join(''));
}

//부등호 하나 꺼내기: 첫번째 숫자가 아닌 경우에만 사용
const sign = signs[idx];

//오른쪽 숫자를 기준으로 탐색
for (let i = 0; i < digits.length; i++) {
// 숫자를 차례대로 검토한다.
// max를 구할 때는 9부터, min을 구할 때는 0부터
const right = digits[i];
// 이전 단계에서 사용한 숫자인 경우 스킵
if (isVisited[right]) continue;

// 첫번째 숫자가 아닌 경우에는 조건이 중요하다.
//입력값 sign의 역할->0~9까지 순서대로 숫자 나열시 조건으로서 역할 
//결국 해당문제는 오름/내림 차순의 숫자 나열의 문제
if (idx >= 0) {
// 항상 바로 직전의 숫자와 비교하면 된다.
const left = nums[nums.length - 1];
if (sign === '<' && left >= right) continue;
if (sign === '>' && left <= right) continue;
}

// 조건을 만족하거나 첫번째 숫자인 경우
isVisited[right] = true;      //nums: concat통해 nums는 전에 사용된 숫자들 저장
const target = aux(idx + 1, signs, nums.concat(right), digits, isVisited);
if (target !== undefined) {
// 부등호 수를 이미 찾은 경우 탐색을 더 할 필요가 없다. (최종탈출)
return target;
}
// 탐색에 실패한 경우, 시도한 숫자의 상태(사용중)를 원래대로(사용안함) 바꿔놔야 한다.
isVisited[right] = false;
}

return undefined;
};


//[입력값 정리] < or > 분리해서 각 요소를 배열 상태로 정리 
signs = signs.split(' ');
//[추론가능한 변수]
const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.reverse()는 in-place 함수(데이터 직접 변경)이므로 min과 max의 순서는 중요하다.
const min = aux(-1, signs, [], digits, Array(10).fill(false));
const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
return max - min;
};