// 문제 접근 
// 0. 우선 그림과 같은 2차원 배열을 만든다.
// 1. 문제대로 시작점을 (1, 1)로 하고, 주어진 웅덩이의 좌표값에 대해 접근 불가의 의미로 -1 값을 넣는다.
// 2. 좌표값이 변함에 따라 가능한 값을 dp에 담아준다. 이때, 크기가 너무 커질 수 있으므로 미리 문제에서 요구하는 값으로 해당 값을 나눈 후 담아준다.
// 3. 2번을 전체를 대상으로 반복하고 결과값을 요구값으로 나눈 후 반환한다.
// 시간복잡도 : O(m * n)

function solution(m, n, puddles) {
  const dp = new Array(n+1).fill(0).map(_ => new Array(m+1).fill(0));
	dp[1][1] = 1;
  
  puddles.forEach(([col, row]) => {
		dp[row][col] = -1;
	});

	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= m; j++) {
			if ((i === 1 && j === 1) || dp[i][j] === -1) continue;

			if (i > 1 && dp[i-1][j] > 0) dp[i][j] += dp[i-1][j] % 1000000007;
			if (j > 1 && dp[i][j-1] > 0) dp[i][j] += dp[i][j-1] % 1000000007;
		}
	}
  
  return dp[n][m] % 1000000007;
}

console.log(solution(4, 3, [[2, 2]]));