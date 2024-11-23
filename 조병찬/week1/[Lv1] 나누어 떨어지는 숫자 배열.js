// 문제 접근
// 1. arr 요소 중 divisor로 나누어 떨어지는 요소만 추출한다.
// 2. 추출한 요소를 오름차순으로 정렬한다.
// 3. 추출한 요소가 있으면 result를 반환하고, 없으면 [-1]을 반환한다.
// 시간복잡도: sort() 메서드로 인해 O(nlogn)

function solution(arr, divisor) {
  const result = arr.filter((a) => a % divisor === 0).sort((a, b) => a - b);
  return result.length ? result : [-1];
}
