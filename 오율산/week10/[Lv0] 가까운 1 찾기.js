// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181898
// 문제 접근
// 1. 배열을 순회하면서 값이 1인 첫 번째 요소의 index 찾기

function solution(arr, idx) {
  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) {
      return i;
    }
  }
  return -1;
}
