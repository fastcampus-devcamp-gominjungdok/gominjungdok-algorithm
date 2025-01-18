// 문제 접근
// 1. 주어진 산책 경로를 그대로 사용했을 때, 산책을 마치는 위치는 주어진 경로의 x값과 y값을 다 더한 값이다.
// 2. 첫번째 경로부터 마지막 경로까지 하나씩 빠졌을 때의 도착점을 구한다.
// 3. 2에서 구한 도착점을 기준으로 출발점부터의 거리를 구하고 그 중 최소값을 결과값에 갱신한다.
// 시간복잡도 : O(n)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const routeCount = Number(input[0]);
const routes = input.slice(1).map(route => route.split(' ').map(Number));
let answer1 = [0, 0];
let answer2 = '';
const newRoutes = new Array(routeCount); // 각 위치의 경로가 빠졌을 경우 도착점의 위치

for (let i = 0; i < routeCount; i++) {
	answer1[0] += routes[i][0];
	answer1[1] += routes[i][1];
}

for (let i = 0; i < routeCount; i++) {
	newRoutes[i] = [answer1[0] - routes[i][0], answer1[1] - routes[i][1]];
}

for (let i = 0; i < routeCount; i++) {
	const distance = Math.sqrt(Math.pow(newRoutes[i][0], 2) + Math.pow(newRoutes[i][1], 2));
	if (i === 0 || distance < answer2) {
		answer2 = distance;
	}
}

console.log(`${answer1[0]} ${answer1[1]}`);
console.log(answer2.toFixed(2));