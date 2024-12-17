// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181888
// 문제 접근
// 1. num_list를 순회해서 n의 배수를 반환
function solution(num_list, n) {
  return num_list.filter((_, index) => index % n === 0);
}
