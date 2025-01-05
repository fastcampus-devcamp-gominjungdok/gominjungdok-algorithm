// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181907
// 문제 접근
// 1. 처음에는 반복문으로 돌려야 하나 했는데 얼마 안가서 slice() 메소드를 떠올렸습니다! 점점 메소드와 친해지는 것 같아 기분이 좋군요
function solution(my_string, n) {
  return my_string.slice(0, n);
}
