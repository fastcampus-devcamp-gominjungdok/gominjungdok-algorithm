// 문제 접근
// 1. routes 객체에 키를 공항 값을 각 공항에서 갈 수 있는(연결된) 공항 배열로 추가, 알파벳 내림차순 정렬 - 알파벳순으로 앞선 공항을 먼저 방문하기 위해 
// 2. dfs로 각 공항을 방문하며 해당 공항에서 출발하는 티켓을 다 사용 후 그 공항을 결과 배열에 추가, 뒤집어서 반환
// 시간 복잡도 O(n*n)

function solution(tickets) {
  const routes = {}

  tickets.forEach(([from, to]) => {
    if(!routes[from]) {
      routes[from] = []
    }
    routes[from].push(to)
  })
  
  for (let airport in routes) {
    routes[airport].sort().reverse()
  }

  const answer = []

  function dfs(airport){
    while (routes[airport]?.length > 0) {
      const nextAirport = routes[airport].pop()
      dfs(nextAirport)
    }
    answer.push(airport)
  }

  dfs("ICN")
  return answer.reverse()
}