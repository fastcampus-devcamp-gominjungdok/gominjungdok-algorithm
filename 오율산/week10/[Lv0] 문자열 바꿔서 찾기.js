// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181864
// 문제 접근
// 1. map() 메소드를 통해 A는 B로 B는 A로 변경
// 2. 변환된 문자열에서 pat을 찾기

function solution(myString, pat) {
  let transformedString = [...myString]
    .map((char) => (char === "A" ? "B" : "A"))
    .join("");

  return transformedString.includes(pat) ? 1 : 0;
}
