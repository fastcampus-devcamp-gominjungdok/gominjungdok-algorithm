// 문제 접근
// 1. 예제를 트리로 그려보고 이해했음.
// 2. 일단 인접 리스트를 생성해야 함.
// 3. 부모 노드를 2번부터 순서대로 출력해야 하기 때문에 parent 배열을 만들어야 함.
// 4. 1번 노드가 루트 노드이고 루트 노드의 부모 노드는 없기 때문에 -1로 설정함
// 5. bfs 탐색을 통해서 부모 배열에 업데이트 해줌
// 6. 탐색을 하다가 부모가 정해지지 않았으면(0) 현재 노드를 부모로 설정하고 큐에 넣어줌.
// 7. parent 배열에서 2번부터 출력

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const vertices = input.slice(1).map((vertex) => vertex.split(" ").map(Number));

function solution(N, vertices) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const parent = Array.from({ length: N + 1 }, () => 0);

  for (let [a, b] of vertices) {
    graph[a].push(b);
    graph[b].push(a);
  }

  const queue = [1];
  parent[1] = -1;

  while (queue.length > 0) {
    const node = queue.shift();
    for (let next of graph[node]) {
      if (parent[next] === 0) {
        parent[next] = node;
        queue.push(next);
      }
    }
  }

  return parent.slice(2).join("\n");
}

console.log(solution(N, vertices));
