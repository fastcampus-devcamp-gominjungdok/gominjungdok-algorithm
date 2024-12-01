// 문제 접근
// 1. 주어진 배열을 slice로 i-1, j범위 자르고
// 2. 자른 배열을 sort로 정렬
// 3. 정렬된 배열의 k-1번째 요소 리턴
// 시간 복잡도 O(t*mlogn)) - 테스트 케이스 수만큼, A배열 길이만큼 B배열 이진 탐색

function solution(array, commands) {
  return commands.map(([i, j, k]) => 
    array
      .slice(i-1, j)
      .sort((a,b)=>a-b)[k-1]);
}