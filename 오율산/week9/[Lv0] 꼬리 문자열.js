// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181841
// 문제 접근
// 1. filter() 메소드를 사용해서 배열을 변환해서 반환

function solution(str_list, ex) {
  return str_list.filter((str) => !str.includes(ex)).join("");
}
