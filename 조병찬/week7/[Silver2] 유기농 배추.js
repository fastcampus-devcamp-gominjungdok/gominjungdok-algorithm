// 문제 접근
// 1. 테스트케이스별로 순회하며 배추밭을 만들어야함
// 2. 주어진 input 값을 통해 map에 배추를 심음
// 3. bfs를 통해 배추를 심은 좌표를 탐색하며 방문하지 않은 배추를 찾아 방문처리
// 4. 배추밭을 순회하며 1이고 방문하지 않은 곳에 지렁이를 풀고 bfs를 실행
// 5. 지렁이의 수를 출력

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCase = parseInt(input[0]);
let currentLine = 1;

for (let t = 0; t < testCase; t++) {
  let worm = 0;

  const [col, row, cabbage] = input[currentLine].split(" ").map(Number);
  const map = Array.from({ length: row }, () => Array(col).fill(0));
  const visited = Array.from({ length: row }, () => Array(col).fill(false));

  for (let j = 0; j < cabbage; j++) {
    const [x, y] = input[currentLine + 1 + j].split(" ").map(Number);
    map[y][x] = 1;
  }

  currentLine += cabbage + 1;

  const bfs = (x, y) => {
    const queue = [[x, y]];
    visited[x][y] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      const dx = [-1, 1, 0, 0];
      const dy = [0, 0, -1, 1];

      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];

        if (nx < 0 || ny < 0 || nx >= row || ny >= col) continue;
        if (map[nx][ny] === 0 || visited[nx][ny]) continue;

        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (map[i][j] === 1 && !visited[i][j]) {
        worm++;
        bfs(i, j);
      }
    }
  }

  console.log(worm);
}
