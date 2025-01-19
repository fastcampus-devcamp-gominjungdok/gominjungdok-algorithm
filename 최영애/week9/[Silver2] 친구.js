// 문제 접근
// 1. 모든 사람들의 모든 사람과의 관계를 구해야하기 때문에 플로이드-워셜 알고리즘을 적용한다.
// 2. 친구 여부를 판별하는 배열을 만들어서, 직접적인 친구이거나 2-친구 관계인 경우는 1, 아닌 경우는 0이라 한다.
// 3. 결과로 나온 친구 판별 배열에 대하여 각 사람별로 2-친구의 수를 구하고, 이 중 가장 큰 값을 반환한다.
// 시간복잡도 : O(N^3)

// 실패한 접근법 : 3중 for문을 돌면서 차트의 값을 바꾼다면, 이후에 2-친구인지 알 수 없게 됨
// const floid = (chart) => {
// 	for (let mid = 0; mid < chart.length; mid++) {
// 		for (let start = 0; start < chart.length; start++) {
// 			for (let end = 0; end < chart.length; end++) {
// 				if (start !== end && chart[start][mid] === 'Y' && chart[mid][end] === 'Y') {
//           chart[start][end] = 'Y';
//         }
// 			}
// 		}
// 	}
// 	return chart;
// }

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const floid = (chart, isFriends) => {

	for (let mid = 0; mid < chart.length; mid++) {
		for (let start = 0; start < chart.length; start++) {
			for (let end = 0; end < chart.length; end++) {
				if (start === end) continue;
				if (chart[start][end] === 'Y' || (chart[start][mid] === 'Y' && chart[mid][end] === 'Y')) {
					isFriends[start][end] = 1;
				}
			}
		}
	}

	return isFriends;
}

const getAnswer = (input) => {
	const peopleCount = Number(input[0]);
	const relations = input.slice(1).map(relation => relation.split(''));

	const isFriends = Array.from({ length: peopleCount }, () => Array(peopleCount).fill(0));
	floid(relations, isFriends);

	return isFriends
    .map(person => person.reduce((sum, num) => sum + num, 0)) // 각 배열의 합을 계산
    .reduce((max, current) => Math.max(max, current), 0);
}

console.log(getAnswer(input))