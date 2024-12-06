// 문제 접근
// 1. 주어진 배열에 대해 각 인덱스의 요소가 전 인덱스 요소 값과 다른 경우에만 결과값 배열에 넣어준다.
// 시간복잡도: => O(n)

function solution(arr) {
  let answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[i-1])  {
      answer.push(arr[i]);
    }
  }

  return answer;
}