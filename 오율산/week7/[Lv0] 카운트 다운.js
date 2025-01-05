// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181899?language=javascript
// 문제 접근
// start_num과 end_num을 반복문에 할당해서 진행

function solution(start_num, end_num) {
  let answer = [];
  for (let i = start_num; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}
