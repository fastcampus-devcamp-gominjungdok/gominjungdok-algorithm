// 문제 접근
// 1. 시작점에서 출발해서 오른쪽, 아래쪽 두가지의 방향만을 통해 목적지에 도달할 수 있는 문제이므로 DFS 방식을 적용한다.
// 시간복잡도: mapSize n => O(n^2)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");
const mapSize = Number(input[0]);
const gameMap = input.slice(1).map(line => line.split(' ').map(Number));

const dfs = (map, position=[0, 0]) => {
  let [x, y] = position;
  if (map[x][y] === -1) {
    return 'HaruHaru';
  }

  if (map[x][y] !== -2) {
    const jump = map[x][y];
    map[x][y] = -2; // 방문 표시
  
    let directions = [
      [0, 1],
      [1, 0]
    ]
  
    for (const [dx, dy] of directions) {
      let newX = x + dx * jump;
      let newY = y + dy * jump;
      
      if (
        newX < mapSize
        && newY < mapSize
      ) {
        const result = dfs(map, [newX, newY]);
        if (result === 'HaruHaru') return result;
      }
    }
  }


  return 'Hing';
}

console.log(dfs(gameMap))