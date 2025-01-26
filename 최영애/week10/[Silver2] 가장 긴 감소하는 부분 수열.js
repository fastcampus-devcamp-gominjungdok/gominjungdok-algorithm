// 문제 접근
// 1. 각 숫자로 시작했을 때 감소하는 부분 수열의 길이를 넣을 배열을 만든다.
// 2. 2중 for문을 돌면서 각 숫자별로 이전의 숫자들이 점점 감소하는 수일 경우 그 값까지의 부분 수열 길이를 계산한다.
// 3. 최종적으로 정해진 각 숫자별로 감소하는 부분 수열의 길이들 중 가장 긴 값을 반환한다.
// 시간복잡도 : caseCount n => O(n^2)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
	const caseCount = Number(input[0]);
	const numbers = input[1].split(' ').map(Number);
	const dp = new Array(caseCount).fill(0);
	
	for (let i = 0; i < caseCount; i++) {
		let maxCount = 0;

		for (let j = 0; j < i; j++) {
			if (numbers[i] < numbers[j] && dp[j] > maxCount) {
				maxCount = dp[j];
			}
		}

		dp[i] = maxCount + 1;
	}

	console.log(Math.max(...dp));
}

getAnswer(input)