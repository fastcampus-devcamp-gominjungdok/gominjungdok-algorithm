// 문제 접근
// 1. 마을과 마을 사이의 정보를 담고 있는 graph를 초기화
// 2. distance는 각 마을까지의 최단거리를 담음
// 3. 각 마을에서 길에 대한 비용을 표현
// 4. bfs 탐색을 통해 graph를 돌면서 각 마을까지의 최단 거리를 갱신함
// 5. 최단 거리가 K보다 작거나 같으면 answer에 추가함

function solution(N, road, K) {
  let answer = 0;
  const graph = Array.from({ length: N + 1 }, () => []);
  const distance = Array.from({ length: N + 1 }, () => Infinity);

  road.forEach(([a, b, c]) => {
    graph[a].push({ end: b, cost: c });
    graph[b].push({ end: a, cost: c });
  });

  let queue = [1];
  distance[1] = 0;

  while (queue.length > 0) {
    let currentVillage = queue.shift();

    for (let i = 0; i < graph[currentVillage].length; i++) {
      const nextVillage = graph[currentVillage][i].end;
      const nextVillageCost = graph[currentVillage][i].cost;

      if (distance[nextVillage] > distance[currentVillage] + nextVillageCost) {
        distance[nextVillage] = distance[currentVillage] + nextVillageCost;
        queue.push(nextVillage);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    answer += distance[i] <= K ? 1 : 0;
  }

  return answer;
}
