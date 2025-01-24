// 문제 접근
// 1. dp를 길이 N만큼 생성하고, 각 수열의 길이를 저장
// 2. 앞에 수가 뒤에 수보다 작으면 dp에 저장된 값과 비교해서 최댓값 저장

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const sequence = input[1].split(" ").map(Number);

function solution(N, sequence) {
  const dp = Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (sequence[i] < sequence[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

console.log(solution(N, sequence));
