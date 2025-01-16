// 문제 접근
// 1. 선분을 따라가며 현재 위치 추적하고 최종 위치 계산
// 2. 선분을 하나씩 제거했을때 거리를 각각 계산해 최단 거리 계산
// 시간 복잡도 O(N)
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const N = Number(input[0]);
const posArr = Array.from(Array(N), (_, i) => input[i + 1].split(' ').map(Number));

const solution = () => {
  let startPos = [0, 0];

  for (const [dx, dy] of posArr) {
    startPos[0] += dx;
    startPos[1] += dy;
  }

  let minDistance = Infinity;
 
  for (let i = 0; i < N; i++) {
    let newX = startPos[0];
    let newY = startPos[1];

    const [dx, dy] = posArr[i];
    newX -= dx;
    newY -= dy;

    const distance = Math.sqrt(newX ** 2 + newY ** 2);
    minDistance = Math.min(minDistance, distance);
  }
  console.log(startPos[0], startPos[1]);
  console.log(minDistance.toFixed(2));
};

solution();
