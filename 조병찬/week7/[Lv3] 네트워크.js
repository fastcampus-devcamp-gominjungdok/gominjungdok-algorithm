// 문제 접근
// 1. bfs를 통해 탐색한다.
// 2. 방문한 노드는 visited 배열을 통해 체크
// 3. bfs를 통해 computer의 값이 1이고 방문하지 않은 곳이면 방문
// 4. bfs를 통해 방문한 노드의 개수를 반환

function solution(n, computers) {
  let answer = 0;
  let visited = Array.from({ length: n }, () => false);

  const bfs = (start) => {
    let queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();
      for (let i = 0; i < n; i++) {
        if (computers[node][i] === 1 && !visited[i]) {
          visited[i] = true;
          queue.push(i);
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }

  return answer;
}
