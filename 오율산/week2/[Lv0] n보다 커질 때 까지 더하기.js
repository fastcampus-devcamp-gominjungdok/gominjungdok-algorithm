/*
    문제: 정수 배열 numbers와 정수 n이 매개변수로 주어집니다. numbers의 원소를 앞에서부터 하나씩 더하다가 그 합이 n보다 커지는 순간 이때까지 더했던 원소들의 합을 return 하는 solution 함수를 작성해 주세요.
    
    제한 사항:
      - 1 ≤ numbers의 길이 ≤ 100
      - 1 ≤ numbers의 원소 ≤ 100
      - 0 ≤ n < numbers의 모든 원소의 합
*/

// 문제 접근
// 1. numbers 배열의 원소를 하나 씩 더하기 위해 원소에 접근해야 해야함
// 2. 처음에는 forEach() 메소드를 사용하려 했으나 n보다 합이 커지는 순간을 제어할 조건문 처리 방법이 떠오르지 않아 for문으로 변경

function solution(numbers, n) {
  let answer = 0;
  for (let i = 0; i < numbers.length; i++) {
    answer += numbers[i];

    if (n < answer) break;
  }
  return answer;
}
