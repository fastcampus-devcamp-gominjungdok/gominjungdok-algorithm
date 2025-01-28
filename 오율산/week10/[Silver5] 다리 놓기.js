const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const testCases = input.slice(1).map((line) => line.split(" ").map(Number));

// 조합 계산 함수 (팩토리얼 없이 직접 계산)
function combination(m, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= m - i; // M * (M-1) * ... * (M-N+1)
    result /= i + 1; // 나누기 (1 * 2 * ... * N)
  }
  return result;
}

// 결과 계산
const results = testCases.map(([n, m]) => combination(m, n));

// 출력
console.log(results.join("\n"));
