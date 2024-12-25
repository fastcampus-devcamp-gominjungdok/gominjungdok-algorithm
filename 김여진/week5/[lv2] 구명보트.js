// 문제 접근
// 1. 몸무게 배열 people을 오름차순으로 정렬해 가장 가벼운 사람, 가장 무거운 사람을 더해 limit을 넘으면 무거운 사람만 태움
// 2. 최종 보트 개수 반환
// 시간복잡도 O(nlogn)

function solution(people, limit) {
  let answer = 0

  let left = 0
  let right = people.length - 1

  people.sort((a, b) => a - b)

  while (left <= right) {
    if(people[left] + people[right] <= limit){
      left++
    }
    right--
    answer++
  }

  return answer;
}