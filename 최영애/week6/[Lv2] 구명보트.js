// 문제 접근
// 1. 사람들의 몸무게를 역순으로 정렬한다.
// 2. 가장 무거운 사람을 보트에 먼저 태우고 가장 가벼운 사람을 태울 수 있으면 태우고 못 태우면 가장 무거운 사람만 보낸다.
// 시간복잡도: O(nlogn)

function solution(people, limit) {
  people.sort((a, b) => b - a); // 몸무게 역순으로 정렬
  let answer = 0;
  let heaviestIdx = 0;
  let lightestIdx = people.length - 1;
  
  while (heaviestIdx <= lightestIdx) {
    answer++; // 새로운 배 준비

    if (heaviestIdx !== lightestIdx) {  
      // 남은 사람 중 가장 가벼운 사람을 태울 수 있으면 태움
      if (people[heaviestIdx] + people[lightestIdx] <= limit) {
        lightestIdx--;
      }
    }

    heaviestIdx++;
  }

  return answer;
}