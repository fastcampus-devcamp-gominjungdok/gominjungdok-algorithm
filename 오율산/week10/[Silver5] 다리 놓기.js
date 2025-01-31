// 문제 접근
// 1. 조합 계산 함수
// C(M, N) = M! / (N! * (M-N)!)
// 팩토리얼 계산 없이 반복문으로 조합을 계산
// @param {number} m - 총 선택 가능한 사이트 수 (동쪽 사이트 수)
// @param {number} n - 선택할 사이트 수 (서쪽 사이트 수)
// @returns {number} 조합의 결과 값

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const testCases = input.slice(1).map((line) => line.split(" ").map(Number));

function combination(m, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= m - i; // M * (M-1) * ... * (M-N+1)
    result /= i + 1; // 나누기 (1 * 2 * ... * N)
  }
  return result;
}

const results = testCases.map(([n, m]) => combination(m, n));
console.log(results.join("\n"));
