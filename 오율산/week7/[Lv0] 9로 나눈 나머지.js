// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181914
// 문제 접근
// 1. number 내부에 숫자의 합을 만들기 위해 for문 이용

function solution(number) {
  let plus = 0;
  for (let i = 0; i < number.length; i++) {
    plus = plus + Number(number[i]);
  }

  return plus % 9;
}
