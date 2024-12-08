/*
  문제: 정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 두 값이 같을 경우 그 값을 return합니다.

  제한 사항:
  - 5 ≤ num_list의 길이 ≤ 50
  - -9 ≤ num_list의 원소 ≤ 9
*/

// 문제 접근
// 1. forEach() 메소드를 통해 배열의 내부를 탐색해서 짝수와 홀수의 조건을 통해 미리 생성한 변수에 더함
// 2. 왠지 reduce 함수로도 해결할 수 있을 것 같음

function solution(num_list) {
  let odd = 0;
  let even = 0;

  num_list.forEach((data, i) => {
    if (i % 2 === 0) {
      even += data;
    } else {
      odd += data;
    }
  });

  return odd < even ? even : odd;
}
