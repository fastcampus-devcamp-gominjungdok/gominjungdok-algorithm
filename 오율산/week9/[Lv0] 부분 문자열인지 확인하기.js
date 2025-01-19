// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181843
// 문제 접근
// 1. includes() 메소드를 사용해서 문자열에 target이 포함되었는지 확인

function solution(my_string, target) {
  return my_string.includes(target) ? 1 : 0;
}
