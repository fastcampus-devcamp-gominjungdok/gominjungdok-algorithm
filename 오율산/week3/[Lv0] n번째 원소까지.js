/*
  문제: 정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

  제한 사항:
  - 2 ≤ num_list의 길이 ≤ 30
  - 1 ≤ num_list의 원소 ≤ 9
  - 1 ≤ n ≤ num_list의 길이 ___
*/

// 문제 접근
// 1. n번째 데이터라고해서 처음에는 n번째 포함인 줄 알고 i <= n 조건을 썼었으나 아니어서 수정

function solution(num_list, n) {
  return num_list.filter((data, i) => i < n);
}
