// 문제 접근
// 1. 조합 방법으로 풀어본다.
// 시간복잡도 : O(caseCount * N)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
	const caseCount = Number(input[0]);
	const siteCount = input.slice(1).map(relation => relation.split(' '));
	const result = [];
	
	for (let i = 0; i < caseCount; i++) {
		const [ N, M ] = siteCount[i];
		const facList = new Array(Number(M)+1).fill(0);

		const factorial = (x) => {
			if (x === 0 || x === 1) return 1;
			if (facList[x] !== 0) return facList[x];
			return facList[x] = x * factorial(x - 1);
		}
		
		const combination = (r, n) => {
			return factorial(n) / (factorial(r) * factorial(n-r));
		}

		result.push(combination(Number(N), Number(M)));
	}

	for (let i = 0; i < caseCount; i++) {
		console.log(Math.round(result[i]));
	}
}

getAnswer(input)