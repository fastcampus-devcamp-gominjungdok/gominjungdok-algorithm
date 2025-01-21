// 문제 접근
// 1. 끝나는 지점을 endX, endY에 담음
// 2. 각 선분을 하나씩 없애가며 최소 거리를 구함
// 3. 여기서 선분을 없애는 것은 그냥 포함을 시키지 않으면 됨.
// 4. i와 j가 같지 않은 모든 선분의 값을 더해줌
// 5. 거리를 구한 후, 최소 거리를 구함

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const lines = input.slice(1).map((v) => v.split(" ").map(Number));

function solution(N, lines) {
  let endX = 0;
  let endY = 0;
  let minDistance = Infinity;

  for (let [dx, dy] of lines) {
    endX += dx;
    endY += dy;
  }

  for (let i = 0; i < N; i++) {
    let x = 0;
    let y = 0;

    for (let j = 0; j < N; j++) {
      if (i !== j) {
        x += lines[j][0];
        y += lines[j][1];
      }
    }

    const distance = getDistance(x, y);
    minDistance = Math.min(minDistance, distance);
  }

  return `${endX} ${endY} \n${minDistance.toFixed(2)}`;
}

function getDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

console.log(solution(N, lines));
