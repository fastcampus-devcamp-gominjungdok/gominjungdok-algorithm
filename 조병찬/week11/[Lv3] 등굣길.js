// 문제 접근
// 1. 맵만큼의 2차원 dp 배열 생성
// 2. 물웅덩이가 있는 곳은 -1로 표시
// 3. 첫번째 행과 열에 물웅덩이가 있는 경우, 해당 행과 열의 물웅덩이 이후의 값은 -1로 표시
// 4. 위에서 오는 경우와 왼쪽에서 오는 경우를 더해줌
// 5. 최종 위치 반환

function solution(m, n, puddles) {
  const CONSTANT = 1000000007;

  let dp = Array.from({ length: n }, () => Array(m).fill(0));

  dp[0][0] = 1;

  for (let [x, y] of puddles) {
    dp[y - 1][x - 1] = -1;

    if (x === 1) {
      for (let i = y - 1; i < n; i++) {
        dp[i][0] = -1;
      }
    }

    if (y === 1) {
      for (let i = x - 1; i < m; i++) {
        dp[0][i] = -1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dp[i][j] === -1) continue;
      if (i > 0 && dp[i - 1][j] !== -1) dp[i][j] += dp[i - 1][j] % CONSTANT;
      if (j > 0 && dp[i][j - 1] !== -1) dp[i][j] += dp[i][j - 1] % CONSTANT;
    }
  }

  return dp[n - 1][m - 1] % CONSTANT;
}
