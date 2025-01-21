// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181906
// 문제 접근
// 1. startsWith() 메소드가 있어서 설명을 읽어보고 사용해봤습니다!

function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}
