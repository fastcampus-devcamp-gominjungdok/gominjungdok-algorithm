// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181904
// 문제 접근
// 1. 문자열을 m 글자씩 나누고 c번째 열의 문자를 추출
// 2. i번째 행의 c번째 열 문자 추가
function solution(my_string, m, c) {
  let result = "";

  [...my_string].forEach((_, index) => {
    if (index % m === c - 1) {
      result += my_string[index];
    }
  });

  return result;
}
