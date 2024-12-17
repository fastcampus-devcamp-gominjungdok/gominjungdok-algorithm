// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181891
// 문제 접근
// 1. n번째 이후의 원소들과 n번째까지의 원소들을 slice() 메소드를 이용해 잘라냄
// 2. concat() 메소드로 두 배열을 붙여서 반환

function solution(num_list, n) {
  const afterN = num_list.slice(n);
  const upToN = num_list.slice(0, n);
  return afterN.concat(upToN);
}
