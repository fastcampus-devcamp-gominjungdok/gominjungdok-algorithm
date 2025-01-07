// 문제 접근
// 1. 각 좌표에 방문 여부를 체크해야함
// 2. 초기값은 0,0에서 시작하고 방문처리로 시작
// 3. bfs를 통해 각 좌표의 값을 가져와서 다음 좌표를 계산
// 4. 현재 x, y 좌표에서 jump를 더한 값이 맵 안에 있고 방문하지 않았다면 방문처리하고 큐에 삽입
// 5. 최종 끝에 도달하면 bfs는 참인데, 참이라면 HaruHaru를 반환하고 아니라면 Hing을 반환

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const n = parseInt(input[0]);
const map = input.slice(1).map((v) => v.split(" ").map(Number));

function solution(n, map) {
  let visited = Array.from({ length: n }, () => Array(n).fill(false));

  const bfs = () => {
    let queue = [[0, 0]];
    visited[0][0] = true;

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      const jump = map[x][y];

      if (x === n - 1 && y === n - 1) return true;
      if (jump === 0) continue;

      const nx = x + jump;
      const ny = y + jump;

      if (nx < n && !visited[nx][y]) {
        visited[nx][y] = true;
        queue.push([nx, y]);
      }
      if (ny < n && !visited[x][ny]) {
        visited[x][ny] = true;
        queue.push([x, ny]);
      }
    }
  };

  return isPossibleSuccess(bfs());
}

function isPossibleSuccess(possible) {
  return possible ? "HaruHaru" : "Hing";
}

console.log(solution(n, map));
