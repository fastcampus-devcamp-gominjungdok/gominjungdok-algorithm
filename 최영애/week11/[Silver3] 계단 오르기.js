// 문제 접근
// 1. 계단을 어떻게 지나느냐에 따른 최댓값을 기억해야되기 때문에 dp로 접근한다.
// 2. 계단이 1개일 때는 당연히 그 한 개의 계단을 밟는 것이 최댓값이고,
//    계단이 2개일 때는 계단 2개를 모두 밟는 것이 최대값이므로, 두개를 합한 값이 늘 최대값이다.
//    계단이 3개일 때부터는 두칸씩 갔을 때와 한칸씩 갔을 때 중 최댓값을 저장해준다.
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