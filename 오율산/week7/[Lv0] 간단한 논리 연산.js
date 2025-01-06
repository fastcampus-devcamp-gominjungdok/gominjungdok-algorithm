// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181917
// 문제 접근
// 항상 문자열이나 숫자를 return 하는 문제들만 보다가 이런 류의 문제는 처음 봐서 당황했습니다.
// 1. 입출력 예시를 보고 어떻게 동작하는지 파악하고 논리식을 작성
function solution(x1, x2, x3, x4) {
  if ((x1 || x2) && (x3 || x4)) return true;
  else return false;
}
