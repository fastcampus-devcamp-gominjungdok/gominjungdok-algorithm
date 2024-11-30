// 접근방법
// 6 5 3 1 0
// 0번 이상 인용된 논문이 5편
// 1번 이상 인용된 논문이 4편
// 2번 이상 인용된 논문이 3편
// 3번 이상 인용된 논문이 3편 (O)
// 4번 이상 인용된 논문이 2편
// 5번 이상 인용된 논문이 1편
// i>=citations[i] 임.

// 1. 먼저 내림차순으로 정렬한다.
// 2. 논문의 개수만큼 순회하면서 인용횟수가 논문의 개수보다 작거나 같을 때까지 반복한다.
// 3. 없다면 논문의 개수를 반환한다.

function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] <= i) return i; // i는 i번째로 인용 수가 많은 논문
  }
  return citations.length;
}
