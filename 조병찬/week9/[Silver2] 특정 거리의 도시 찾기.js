// 문제 접근
// 1. 주어진 예제를 graph로 표현
// 2. 초기값은 X이고 X까지의 거리는 0으로 시작
// 3. 각 도시의 거리를 distance에 Infinity로 초기화함
// 4. BFS를 이용해 X에서부터 각 도시까지의 거리를 구함
// 5. 거리가 K인 도시를 answer에 담음
// 6. answer가 비어있으면 -1을 반환하고, 아니면 오름차순으로 정렬 후 반환

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M, K, X] = input[0].split(" ").map(Number);
const path = input.slice(1).map((v) => v.split(" ").map(Number));

function solution(N, M, K, X, path) {
  const answer = [];
  const graph = Array.from({ length: N + 1 }, () => []);
  const distance = Array.from({ length: N + 1 }, () => Infinity);

  for (let i = 0; i < M; i++) {
    const [a, b] = path[i];
    graph[a].push(b);
  }

  const queue = [X];
  distance[X] = 0;

  while (queue.length > 0) {
    const currentCity = queue.shift();

    for (let i = 0; i < graph[currentCity].length; i++) {
      const nextCity = graph[currentCity][i];

      if (distance[nextCity] === Infinity) {
        distance[nextCity] = distance[currentCity] + 1;
        queue.push(nextCity);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (distance[i] === K) answer.push(i);
  }

  return answer.length === 0 ? -1 : answer.sort((a, b) => a - b).join("\n");
}

console.log(solution(N, M, K, X, path));
