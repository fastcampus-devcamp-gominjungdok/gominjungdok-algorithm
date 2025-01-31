// 문제 접근
// 1. 30*30 2차원 배열 dp 생성해 0으로 채움
// 2. n = 0, n = m일때는 경우의 수가 1이니까 이를 먼저 dp에 넣어주고
// n이 1 ~ m-1 일때 파스칼 삼각형의 규칙을 사용해 dp를 업데이트
// 3. 각 테스트 케이스에서 dp[m][n]의 값을 반환
// 시간 복잡도 O(900)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
const testCases = input
  .slice(1, T + 1)
  .map((line) => line.split(" ").map(Number));

const solution = (testCases) => {
  const dp = Array.from(Array(30), () => Array(30).fill(0));

  for (let m = 1; m < 30; m++) {
    dp[m][0] = 1; // n = 0일 때 경우의 수는 1
    dp[m][m] = 1; // n = m일 때 경우의 수는 1
    
    for (let n = 1; n < m; n++) {
      dp[m][n] = dp[m - 1][n - 1] + dp[m - 1][n];
    }
  }

  const results = [];
  for (const [n, m] of testCases) {
    results.push(dp[m][n]);
  }

  return results;
};

console.log(solution(testCases).join('\n'));