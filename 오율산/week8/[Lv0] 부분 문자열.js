// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181842
// 문제 접근
// 1. str2 문장에 str1이 포함되는지의 여부를 알 수 있는 includes() 메소드를 사용

// 실패 코드
// 사유: includes() 메소드는 true 혹은 false만을 return함
function solution(str1, str2) {
  return str2.includes(str1);
}

// 성공 코드
function solution(str1, str2) {
  return str2.includes(str1) ? 1 : 0;
}
