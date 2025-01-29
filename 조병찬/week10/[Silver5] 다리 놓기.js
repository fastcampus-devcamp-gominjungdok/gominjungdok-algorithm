const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const t = parseInt(input[0]);
const cases = input
  .slice(1)
  .map((el) => el.split(" ").map((el) => parseInt(el)));

// 문제접근 1 → 조합 공식 사용
// 1. 예제를 보고 조합을 구하는 문제
// 2. 팩토리얼과 조합 공식으로 풀이

function solution1(t, cases) {
  const arr = [];

  for (let i = 0; i < t; i++) {
    const [r, n] = cases[i];
    arr.push(calculateCombination(n, r));
  }

  return arr.join("\n");
}

function calculateCombination(n, r) {
  return Math.round(
    calculateFactorial(n) / (calculateFactorial(r) * calculateFactorial(n - r))
  );
}

function calculateFactorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 문제 접근 2 → dp 사용
// 1. N, M은 30 미만이므로 최대 30까지의 2차원 배열 생성
// 2. 초기값 nC0, nCn은 1로 설정
// 3. 나머지는 파스칼의 삼각형 공식 사용용

function solution2(t, cases) {
  const dp = Array.from({ length: 30 }, () => Array(30).fill(0));
  const arr = [];

  for (let i = 0; i < 30; i++) {
    dp[i][0] = 1;
    dp[i][i] = 1;
  }

  for (let i = 1; i < 30; i++) {
    for (let j = 1; j < i; j++) {
      dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j];
    }
  }

  for (let i = 0; i < t; i++) {
    const [r, n] = cases[i];
    arr.push(dp[n][r]);
  }

  return arr.join("\n");
}

console.log(solution1(t, cases));
console.log(solution2(t, cases));
