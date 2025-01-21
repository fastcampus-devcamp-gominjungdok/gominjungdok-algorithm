// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181838
// 문제 접근
// 1. date1과 date2를 비교하여 date1이 더 앞선 날짜라면 1, 아니면 0 반환

function solution(date1, date2) {
  if (date1[0] < date2[0]) return 1; // 연도 비교
  if (date1[0] === date2[0] && date1[1] < date2[1]) return 1; // 연도가 같으면 월 비교
  if (date1[0] === date2[0] && date1[1] === date2[1] && date1[2] < date2[2]) return 1; // 연도와 월이 같으면 일 비교
  return 0;
}
