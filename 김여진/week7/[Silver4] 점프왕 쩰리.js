// 문제 접근
// 1. N*N 배열을 만들어 각 셀에 점프할 수 있는 숫자를 넣음
// 2. bfs로 쩰리가 방문한 노드를 표시하며 -1까지 갈 수 있는지 확인 
// 시간 복잡도 O(N*N)

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input[0])

const solution = () => {
  const field = Array.from(Array(N), (_, i) => input[i + 1].split(' ').map(Number))
  const visited = Array.from(Array(N), () => Array(N).fill(false))

  const directions = [
    [0, 1],
    [1, 0]
  ]
 
  const bfs = () => {
    const queue = [[0, 0]]
    visited[0][0] = true

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      const jump = field[x][y]

      if (jump === -1) return true

      for (const [dx, dy] of directions) {
        const nx = x + dx * jump
        const ny = y + dy * jump

        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < N &&
          ny < N &&
          !visited[nx][ny]
        ) {
          visited[nx][ny] = true;
          queue.push([nx, ny])
        }
      }
    }
    return false
  }

  console.log(bfs() ? 'HaruHaru' : 'Hing')
}

solution()