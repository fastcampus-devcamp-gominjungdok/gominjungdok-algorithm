// 문제 접근
// 1. 주어진 행, 열로 dp 생성해 물에 잠긴 지역은 -1로 초기화하고
// 나머지 부분 위에서 오는 경우, 옆에서 오는 경우 최소 경로 더해서 업데이트
// 2. 최종 최소 경로 반환
// 시간 복잡도 O(n*m)

function solution(m, n, puddles) {
  const DIVISOR = 1000000007;
  let dp = Array.from(Array(n), () => Array(m).fill(0));

  // 시작점
  dp[0][0] = 1;

  // 물에 잠긴 지역 처리
  for (let [x, y] of puddles) {
    dp[y - 1][x - 1] = -1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dp[i][j] === -1) continue; 
      if (i > 0 && dp[i - 1][j] !== -1) dp[i][j] += dp[i - 1][j];
      if (j > 0 && dp[i][j - 1] !== -1) dp[i][j] += dp[i][j - 1];
      dp[i][j] %= DIVISOR;
    }
  }

  return dp[n - 1][m - 1];
}
