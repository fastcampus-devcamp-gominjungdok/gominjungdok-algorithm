// 문제 접근
// 1. arr의 각 요소를 divisor로 나눠 나머지가 0인 것만 필터링하고 오름차순으로 정렬
// 2. 요소가 없으면 [-1] 반환
// 시간 복잡도 O(nlogn) - 배열의 길이만큼 계산

function solution(arr, divisor) {
  const result = arr.filter((x) => !(x % divisor)).sort((a, b) => a - b);
  return result.length > 0 ? result : [-1];
}
