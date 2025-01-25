// 문제 접근
// 1. 일차원 dp를 만들어 1로 채워두고(그 수를 포함하는 감소하는 수열의 최소길이는 1) 
// 2. 수열의 수가 그 앞 수보다 작으면(감소하면)
// 현재 수로 끝나는 수열의 길이, 전의 작은 수로 끝나는 수열의 길이+1을 비교해 더 긴 걸 담음
// 3. dp 중 최댓값 즉 가장 긴 수열 반환
// 시간 복잡도 O(N*N)
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const nums = input[1].split(' ').map(Number);

const solution = (nums) => {
  const dp = Array(N).fill(1);

  for (let i = 1; i < N; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] < nums[j]) { 
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
};

console.log(solution(nums));