// 문제 접근 1 - 시간초과..
// 1. 단방향 도로이기 때문에 방향을 가진 알고리즘 중 벨만-포드 알고리즘을 적용해본다.
// 2. 단, 음수 가중치가 포함되지 않기 때문에 음수 사이클 여부는 판단하지 않는다.
// 3. 주어진 경로를 바탕으로 그래프를 만들어 출발지부터 각 도착지까지의 최단거리를 구한다.
// 4. 도착지들의 최단거리가 목표한 거리와 같은 경우 결과배열에 추가한다.

// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

// function bellmanFord(graph, start) {
//   const distances = {};
//   const edges = [];

//   // 초기화: 거리 무한대로 설정
//   for (const node in graph) {
//     distances[node] = Infinity;
//     for (const neighbor in graph[node]) {
//       edges.push({ from: node, to: neighbor, weight: 1 });
//     }
//   }
//   distances[start] = 0; // 시작 노드의 거리는 0

//   const numVertices = Object.keys(graph).length;

//   // 간선 완화 반복 (V-1번)
//   for (let i = 0; i < numVertices - 1; i++) {
//     for (const edge of edges) {
//       const { from, to, weight } = edge;
//       if (distances[from] + weight < distances[to]) {
//         distances[to] = distances[from] + weight;
//       }
//     }
//   }
//   return distances;
// }

// const getAnswer = (input) => {
// 	const answer = [];
// 	const [cityCount, roadCount, distance, startCity] = input[0].split(' ').map(Number);
// 	const routes = input.slice(1).map(route => route.split(' ').map(Number));

// 	const graph = {};

// 	// 모든 노드를 초기화
//   for (let i = 1; i <= cityCount; i++) {
//     graph[i] = {}; // 각 노드를 빈 객체로 초기화
//   }

//   // 각 노드와 연결된 정보를 그래프에 추가
//   const addEdge = (graph, from, to) => {
//     if (!graph[from][to]) {
//       graph[from][to] = 1;
//     }
//   };

//   // 입력 배열을 순회하면서 그래프 생성
//   routes.forEach(([from, to]) => {
//     addEdge(graph, from, to); // 출발 → 도착
//   });

//   const distances = bellmanFord(graph, startCity);

// 	for (let i = 1; i <= cityCount; i++) {
// 		if (distances[i] === distance) answer.push(i);
// 	}

// 	if (answer.length > 0) {
// 		for (let i = 0; i < answer.length; i++) {
// 			console.log(answer[i]);
// 		}
// 	} else {
// 		console.log('-1');
// 	}
// }

// getAnswer(input);


// 문제 접근 2
// 1. 다익스트라 알고리즘도 적용해봤는데 메모리 초과, 시간 초과 에러가 떠서.. 다른 방법으로 접근한다.
// 2. BFS 방식을 사용한다.
// 3. BFS 방식으로 출발 도시로부터 모든 도시까지의 최단 거리를 구한다.
// 4. 구한 최단 거리 중 목표 거리(K)와 같은 거리에 있는 도시들을 결과 배열에 담는다.
// 시간복잡도 : O(N+M)


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
	const answer = [];
	const [N, M, K, X] = input[0].split(' ').map(Number);
	const routes = input.slice(1).map(route => route.split(' ').map(Number));

	const graph = Array.from(Array(N + 1), () => []);
	const distance = Array.from({ length: N + 1 }, () => Infinity);

	routes.forEach(([from, to]) => graph[from].push(to));

	const queue = [X];
  distance[X] = 0;

  while (queue.length > 0) {
    const currCity = queue.shift();

    for (let i = 0; i < graph[currCity].length; i++) {
      const nextCity = graph[currCity][i];

      if (distance[nextCity] === Infinity) {
        distance[nextCity] = distance[currCity] + 1;
        queue.push(nextCity);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (distance[i] === K) answer.push(i);
  }

	answer.length > 0 ? console.log(answer.join("\n")) : console.log(-1);
}

getAnswer(input);