// 문제 접근
// 1. n*n 배열을 만들어 방문 여부를 false로 저장해둠
// 2. 컴퓨터 개수만큼 dfs로 각 셀을 재귀적으로 방문하며 방문 여부 표시, 네트워크 카운트 
// 시간 복잡도 O(n*n)

function solution(n, computers) {
  const visited = Array(n).fill(false)

  function dfs(idx){
    visited[idx] = true
    for (let i = 0; i < n; i++) {
      if (computers[idx][i] === 1 && !visited[i]) {
        dfs(i)
      }
    }
  }

  let networkCnt = 0
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i)
      networkCnt++
    }
  }
  return networkCnt
}