// 문제 접근
// 1. 인접도시와 시간을 넣은 양방향 그래프를 만든다
// 2. 우선순위 큐를 활용해 가장 짧은 시간을 갖는 마을부터 최단시간을 기록한다
// 3. 최단 시간이 K 이하인 마을의 개수를 반환한다
// 시간 복잡도 O(n*n)

function solution(N, road, K) {
  const graph = Array.from(Array(N + 1), () => []);

  for (const [a, b, time] of road) {
    graph[a].push([b, time]);
    graph[b].push([a, time]);
  }

  const distances = Array(N + 1).fill(Infinity);
  distances[1] = 0;

  const pq = [[1, 0]];

  while (pq.length > 0) {
    const [node, time] = pq.shift();

    if (time > distances[node]) continue;

    for (const [next, weight] of graph[node]) {
      const newTime = time + weight;

      if (newTime < distances[next]) {
        distances[next] = newTime;
        pq.push([next, newTime]);
        pq.sort((a, b) => a[1] - b[1]);
      }
    }
  }

  return distances.filter(distance => distance <= K).length;
}