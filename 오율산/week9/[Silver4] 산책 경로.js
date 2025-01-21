// 문제 접근
// 주어진 모든 선분의 좌표를 (0,0)에서 시작해 차례로 더하기
// 선분들이 (−1,1),(1,1),(1,0),(0,−2) 이라면
// 첫 번째 선분: (0,0)+(−1,1)=(−1,1)
// 두 번째 선분: (−1,1)+(1,1)=(0,2)
// 세 번째 선분: (0,2)+(1,0)=(1,2)
// 네 번째 선분: (1,2)+(0,−2)=(1,0)
// 최종 위치는 (1,0)(1,0)

function calculateDistance(x, y) {
  return Math.sqrt(x * x + y * y);
}

function main() {
  const input = require("fs")
    .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
    .trim();
  const lines = input.split("\n");
  const n = parseInt(lines[0], 10);
  const segments = lines.slice(1).map((line) => line.split(" ").map(Number));

  let totalX = 0,
    totalY = 0;
  for (const [x, y] of segments) {
    totalX += x;
    totalY += y;
  }

  console.log(`${totalX} ${totalY}`);

  let minDistance = Infinity;
  for (const [x, y] of segments) {
    const newX = totalX - x;
    const newY = totalY - y;
    const distance = calculateDistance(newX, newY);
    minDistance = Math.min(minDistance, distance);
  }

  console.log(minDistance.toFixed(2));
}

main();
