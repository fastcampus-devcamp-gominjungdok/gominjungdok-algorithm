// 문제 접근
// 1. 의상 종류별 개수를 셈
// 2. 각 의상종류의 의상개수+1을 곱하고, 아예 안입는 경우 1 제외
// 시간 복잡도 O(n+m) - n: 의상 개수, m: 의상종류 개수

function solution(clothes) {
  return Object.values(clothes.reduce((obj, c) => {
    obj[c[1]] = (obj[c[1]] ?? 0) + 1;
    return obj;
  }, {}))
  .reduce((acc, cur) => acc * (cur + 1), 1) - 1;
}
