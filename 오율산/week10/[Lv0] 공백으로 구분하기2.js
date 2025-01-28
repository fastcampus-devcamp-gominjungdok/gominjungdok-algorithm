// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181868
// 문제 접근
// 1. 문자열을 공백 하나 이상으로 구분하여 단어를 추출

function solution(my_string) {
  return my_string.trim().split(/\s+/);
}
