// 문제 접근
// 1. n*n 배열의 각 요소의 값은 max(행의 인덱스, 열의 인덱스) + 1 이라는 것을 알게 되었다.
// 2. n*n 배열을 일차원 배열로 변환했을 때, 행의 인덱스는 배열의 인덱스를 n으로 나눈 것의 몫, 열의 인덱스는 배열의 인덱스를 n으로 나눈 것의 나머지임을 알게 되었다.
// 3. 따라서 결과값 배열은 max(시작점을 n으로 나눈 것의 몫, 시작점을 n으로 나눈 것의 나머지) + 1 로 구성되어 있음을 알 수 있었다.
// 시간복잡도: left와 right 값에 따라 달라짐 => O(right - left + 1)

function solution(n, left, right) {
  var answer = [];
  
  for(i=left; i<=right; i++) {
      answer.push(Math.max(Math.floor(i/n), i%n) + 1)
  }
  return answer;
}