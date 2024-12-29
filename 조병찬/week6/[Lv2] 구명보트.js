// 문제 접근
// 1. 먼저 오름차순으로 정렬한다.
// 2. 정렬한 배열의 가장 작은 값과 가장 큰 값을 더한 값이 제한보다 작거나 같으면 index를 증가시킴
// 3. 오른쪽의 index는 감소시킴

function solution(people, limit) {
  let count = 0;
  let left = 0;
  let right = people.length - 1;

  people.sort((a, b) => a - b);

  while (left <= right) {
    if (people[left] + people[right] <= limit) {
      left++;
    }
    right--;
    count++;
  }

  return count;
}
