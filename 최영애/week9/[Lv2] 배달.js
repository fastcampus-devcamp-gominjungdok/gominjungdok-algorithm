// 문제 접근 
// 1. 양방향 거리이므로 다익스트라 알고리즘으로 접근한다.
// 2. 주어진 도로의 정보를 바탕으로 그래프를 그리고 그래프를 바탕으로 최단거리를 구한다.
// 3. 구해진 최단거리들 중 목표시간(K) 이하인 것들에 대해서 answer++ 해준다.
// 시간복잡도 : 간선의 수 E, 노드의 수 N => O(ElogN)

const dijkstra = (graph, start) => {
	const distances = {}; // 시작점에서 각 노드까지의 거리
	const visited = new Set(); // 방문한 노드 추적
	const priorityQueue = []; // 우선순위 큐
	
	// 초기화
	for (const node in graph) {
		distances[node] = Infinity; // 모든 노드까지의 거리를 무한대로 설정
	}
	distances[start] = 0; // 시작점의 거리는 0
	priorityQueue.push({node: start, distance: 0});
	
	while (priorityQueue.length > 0) {
		// 가장 짧은 거리를 가진 노드를 선택
		priorityQueue.sort((a, b) => a.distance - b.distance); // 거리순
		const {node: currentNode, distance: currentDistance} = priorityQueue.shift();
		
		if (visited.has(currentNode)) continue; // 이미 방문한 노드는 무시
		visited.add(currentNode);
		
		// 현재 노드의 이웃 노드를 탐색
		for (const neighbor in graph[currentNode]) {
			const newDistance = currentDistance + graph[currentNode][neighbor];
			
			// 더 짧은 경로 발견시 거리 갱신
			if (newDistance < distances[neighbor]) {
				distances[neighbor] = newDistance;
				priorityQueue.push({node: neighbor, distance: newDistance});
			}
		}
	}
	
	return distances;
}

function solution(N, road, K) {
  let answer = 0;
  const graph = {};

  // 각 노드와 연결된 정보를 그래프에 추가
  const addEdge = (graph, from, to, weight) => {
    if (!graph[from]) {
      graph[from] = {}; // 노드가 없으면 초기화
    }
    // 기존 간선의 가중치와 비교하여 더 작은 값 저장
    if (!graph[from][to] || graph[from][to] > weight) {
      graph[from][to] = weight;
    }
  };

  // 입력 배열을 순회하면서 그래프 생성
  road.forEach(([from, to, weight]) => {
    addEdge(graph, from, to, weight); // 출발 → 도착
    addEdge(graph, to, from, weight); // 도착 → 출발 (양방향 그래프)
  });

  const distances = dijkstra(graph, '1');

  for (let i = 1; i < N + 1; i++) {
    if (distances[i] <= K) answer++;
  }

  return answer;
}