const LPS = function (str) {
  if (str.length <= 1) return 0;

  let result;
  let len = str.length / 2;

  for (let i = 0; i <= len; i++) {
    let prefix = str.slice(0, i);
    let suffix = str.slice(str.length - i);
    if (prefix === suffix) {
      result = prefix;
    }
  }
  return result.length;
};

/*
prefix(접두어)는 문자열의 첫 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.
suffix(접미어)는 문자열의 마지막 인덱스부터 시작하는 모든 부분 문자열을 의미합니다.

반복문은 str.length의 반만 돌린다. prefix와 suffix가 같아야 되니 서로 반씩만 오면 된다. 
prefix는 앞에서 출발하고, suffix는 뒤에서 출발하는데 만약 진행하다 둘의 문자가 같아지면 result에 담는다
그리고 그 result의 길이를 반환하면 된다. 

ex) achiac
i = 0
p = ''
s = ''

i = 1
p = a
s = c

i = 2
p = ac
s = ac
result = ac 

이런식
*/
