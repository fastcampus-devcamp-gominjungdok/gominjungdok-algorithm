// 문제 접근
// 1. citations 내림차순 정렬 후 
// 2. 각 논문 인용 횟수가 그때까지의 논문 개수를 이상인 것만 남김
// ㄴ 각 논문 인용 횟수가 그때까지의 논문 개수보다 적은 것 필터링
// 3. 필터링된 배열의 길이가 h번 이상 인용된 논문수를 나타냄
// 시간 복잡도 O(nlogn)

function solution(citations) {
  return citations
    .sort((a, b) => b - a)
    .filter((c, i) => c >= i + 1)
    .length;
}