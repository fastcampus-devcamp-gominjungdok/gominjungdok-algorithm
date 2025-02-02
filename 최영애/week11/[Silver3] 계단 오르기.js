// 문제 접근
// 1. 주어진 input 값에 대하여 각 줄의 글자가 숫자인지를 먼저 판단한다.
// 시간복잡도 : O(N)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
	const N = Number(input[0]);
  const scores = input.slice(1).map(Number);
  const dp = new Array(N + 1).fill(0);

  dp[1] = scores[0];
  dp[2] = scores[0] + scores[1];

  for (let i = 3; i <= N; i++) {
    dp[i] = Math.max(dp[i - 2] + scores[i - 1], dp[i - 3] + scores[i - 2] + scores[i - 1]);
  }

  console.log(dp[N]);
}

getAnswer(input)