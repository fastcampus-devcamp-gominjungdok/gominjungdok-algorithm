// 문제 접근 1 : 시간초과
// 1. 주어진 삼각형과 똑같은 모양의 dp 삼각형을 그린다.
// 2. 제일 위 값은 그대로 두고, 두번째 줄부터는 이전 줄의 양 옆 값을 더한 것 중 가장 큰 값으로 대체한다.
// 		이때, 양끝 값은 한쪽으로만 올 수 있기 때문에 해당 값 + 자기 자신 값으로 대체한다.
// 3. 마지막 줄까지 2번을 반복하고 마지막 줄의 값 중 가장 큰 값을 반환한다.

// function solution(triangle) {
// 	const dp = Array.from(Array(triangle.length), (_, i) => Array(i + 1).fill(0));
// 	dp[0][0] = triangle[0][0];

// 	for (let i = 1; i < triangle.length; i++) {
// 		for (let j = 0; j < triangle[i].length; j++) {
// 			if (j === 0) {
// 				dp[i][j] = dp[i - 1][j] + triangle[i][j];
//       } else if (j === i) {
//         dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
//       } else {
//         dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
//       }
// 		}
// 	}
	
// 	return Math.max(...dp[triangle.length - 1]);
// }


// 문제 접근 
// 1. 위에서부터 접근하는 방법에서 시간초과가 발생했으므로 아래에서부터 접근하는 방법을 생각한다.
// 2. 주어진 삼각형의 가장 밑줄부터 시작하여 그 윗줄의 값에 대해 아래의 두개 중 더 큰 값을 더해서 바꿔준다.
// 3. 2번을 제일 윗줄에 갈 때까지 반복하고 제일 윗줄의 값을 반환한다.
// 시간복잡도 : 마지막 행의 길이 n => O(n^2)

function solution(triangle) {
	for(let i = triangle.length - 1; i >= 0; i--){
			for(let j = 0; j < triangle[i].length - 1; j++){
					triangle[i - 1][j] = Math.max(triangle[i - 1][j] + triangle[i][j], triangle[i - 1][j] + triangle[i][j + 1]);
			}
	}
	return triangle[0][0];
}