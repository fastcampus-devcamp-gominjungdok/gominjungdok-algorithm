/*
    문제: 정수가 담긴 리스트 num_list가 주어질 때, 리스트의 길이가 11 이상이면 리스트에 있는 모든 원소의 합을 10 이하이면 모든 원소의 곱을 return하도록 solution 함수를 완성해주세요.
    제한 사항
      - 2 ≤ num_list의 길이 ≤ 20
      - 1 ≤ num_list의 원소 ≤ 9
      - num_list의 원소를 모두 곱했을 때 2,147,483,647를 넘는 입력은 주어지지 않습니다.
*/
// 문제 접근
// 1. answer 변수를 생성
// 2. 조건문을 통해 num_list의 길이에 따라 다른 연산을 진행한다.
// 3. 이를 반환한다.

// 첫 번째 실패 풀이
// answer를 0으로 셋팅해두어 곱셈 연산이 제대로 처리되지 않음
function solution(num_list) {
  let answer = 0;
  num_list.length <= 10 ? num_list.forEach((data) => (answer *= data)) : num_list.forEach((data) => (answer += data));
  return answer;
}

// 성공 풀이
function solution(num_list) {
  let answer = 0;
  if (num_list.length > 10) {
    num_list.forEach((data) => (answer += data));
  } else {
    answer += 1;
    num_list.forEach((data) => (answer *= data));
  }

  return answer;
}
