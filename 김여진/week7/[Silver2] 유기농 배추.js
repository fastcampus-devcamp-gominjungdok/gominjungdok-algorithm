// 문제 접근
// M*N 배열을 탐색하며 지렁이 발견시 bfs로 주변 탐색, 지렁이 + 1
// 시간 복잡도 O(M*N)

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const T = Number(input[0])

const solution = () => {
  let idx = 1
  for (let t = 0; t < T; t++){
    const [M, N, K] = input[idx++].split(' ').map(Number) 

    const field = Array.from(Array(N), () => Array(M).fill(0))
    const visited = Array.from(Array(N), () => Array(M).fill(false))

    for (let k = 0; k < K; k++) {
      const [x, y] = input[idx++].split(' ').map(Number)
      field[y][x] = 1
    }

    const directions = [
      [0, 1], 
      [1, 0], 
      [0, -1], 
      [-1, 0],
    ]

    const bfs = (startX, startY) => {
      const queue = [[startX, startY]]
      visited[startY][startX] = true

      while (queue.length > 0) {
        const [x, y] = queue.shift();

        for (const [dx, dy] of directions) {
          const nx = x + dx;
          const ny = y + dy;

          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < M &&
            ny < N &&
            field[ny][nx] === 1 &&
            !visited[ny][nx]
          ) {
            visited[ny][nx] = true;
            queue.push([nx, ny]);
          }
        }
      }
    }

    let wormCnt = 0;
    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (field[y][x] === 1 && !visited[y][x]) {
          bfs(x, y);
          wormCnt++;
        }
      }
    }

    console.log(wormCnt);
  }
}

solution()