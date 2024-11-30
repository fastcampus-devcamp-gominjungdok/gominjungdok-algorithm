// 문제 접근
// 1. commands 배열을 매핑한다.
// 2. commands 배열의 요소를 구조분해 할당한다.
// 3. array 배열의 start - 1부터 end까지의 요소를 추출한다.
// 4. 추출한 요소를 오름차순으로 정렬한다.
// 5. 정렬한 요소 중 target - 1번째 요소를 반환한다.

function solution(array, commands) {
  const answer = commands.map((command) => {
    const [start, end, target] = command;
    return array.slice(start - 1, end).sort((a, b) => a - b)[target - 1];
  });
  return answer;
}
