// 문제 접근
// 1. dp를 사용해 각 계단의 최대 점수를 구한다
// 세 계단을 밟을 수 없으니 3번째 계단부터는 두 칸을 한 번에 뛰거나, 두 칸 뛰고 한 칸 뛰는 경우만 가능
// 2. 최종 최대 점수 구하기
// 시간 복잡도 O(n)

const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");

const scores = input.slice(1).map(Number);

const solution = (scores) => {
  const N = scores.length;
  // 계단이 2개 이하일 경우 바로 리턴
  if (N === 1) return scores[0]; 
  if (N === 2) return scores[0] + scores[1];

  const dp = Array(N).fill(0);

  dp[0] = scores[0];
  dp[1] = scores[0] + scores[1];
  dp[2] = Math.max(scores[0] + scores[2], scores[1] + scores[2]);

  for (let i = 3; i < N; i++) {
    dp[i] = Math.max(
      dp[i - 2] + scores[i],
      dp[i - 3] + scores[i - 1] + scores[i]
    );
  }

  return dp[N - 1];
};

console.log(solution(scores));
