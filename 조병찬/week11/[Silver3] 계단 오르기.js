// 문제 접근
// 1. 각 계단에 최대 점수를 저장할할 dp 배열 생성
// 2. 1번 계단 -> 1번 계단의 점수
// 3. 2번 계단 -> 1번 계단 + 2번 계단의 점수
// 4. 3번 계단부터는 2가지 경우
//   1) 1칸 전 계단 + 현재 계단의 점수
//   2) 2칸 전 계단 + 1칸 전 계단 + 현재 계단의 점수
// 5. 마지막 계단의 최대 점수 출력

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const stairs = parseInt(input[0]);
const scores = input.slice(1).map(Number);

function solution(stairs, scores) {
  const dp = Array(stairs + 1).fill(0);

  dp[1] = scores[0];

  if (stairs > 1) {
    dp[2] = scores[0] + scores[1];
  }

  for (let i = 3; i <= stairs; i++) {
    dp[i] = Math.max(
      dp[i - 2] + scores[i - 1],
      dp[i - 3] + scores[i - 2] + scores[i - 1]
    );
  }

  return dp[stairs];
}

console.log(solution(stairs, scores));
