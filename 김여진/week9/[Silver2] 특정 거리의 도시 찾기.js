// 문제 접근
// 1. 주어진 도로 정보로 그래프를 만듦
// 2. bfs로 도시 X로부터 모든 도시까지의 거리를 계산
// 3. 최단 거리가 K인 모든 도시의 번호를 한 줄에 하나씩 오름차순으로 출력, 없으면 -1 출력
// 시간 복잡도 O(N + M)

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, , K, X] = input[0].split(" ").map(Number);
const roads = input.slice(1).map(line => line.split(' ').map(Number));

const graph = Array.from(Array(N + 1), () => []);
roads.forEach(([a, b]) => {
  graph[a].push(b);
});

const solution = (n, k, x, graph) => {
  const distances = Array(N + 1).fill(-1);
  distances[x] = 0;

  const queue = [x];

  while (queue.length > 0) {
    const curr = queue.shift();

    for (const neighbor of graph[curr]) {
      if (distances[neighbor] === -1) {
        distances[neighbor] = distances[curr] + 1;
        queue.push(neighbor);
      }
    }
  }

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (distances[i] === k) {
      result.push(i);
    }
  }

  result.length > 0 ? console.log(result.join("\n")) : console.log(-1);
}

solution(N, K, X, graph);
