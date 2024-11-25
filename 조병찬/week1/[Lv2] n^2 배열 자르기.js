// 문제 접근
// 1. n x n 배열을 생성한다.
// 2. 배열의 요소를 1부터 n까지 채운다.
// 3. 2차원 배열을 1차원 배열로 변환한다.
// 4. left부터 right까지의 요소를 반환한다.
// 시간복잡도: O(n^2)

// 첫 번째 실패 풀이
function solution(n, left, right) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < n; j++) {
      row.push(Math.max(i, j) + 1);
    }
    arr.push(row);
  }

  const result = [].concat(...arr).slice(left, right + 1);
  return result;
}

// 성공 풀이
// 1. 2차원 배열에 값을 모두 넣지 않고, left부터 right까지의 요소만 반환한다.
// 2. 행 = i / n, 열 = i % n으로 구한다.
// 3. Math.max(row, col) + 1로 값을 구한 후 배열에 push한다.

function solution(n, left, right) {
  const arr = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n);
    const col = i % n;
    arr.push(Math.max(row, col) + 1);
  }

  return arr;
}
