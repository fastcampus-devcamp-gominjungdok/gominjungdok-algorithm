// 문제 접근
// 1. ICN을 초기값으로 시작해 dfs를 통해 탐색
// 2. tickets에서 요소의 0번째가 현재 공항과 일치하면 해당 티켓을 사용
// 3. 사용한 티켓은 splice를 통해 제거하고 제거하고자 하는 배열의 첫번째 요소로 dfs
// 4. tickets를 모두 돌아 결국 다 제거되면 answer에 push
// 5. answer를 sort한 후 가장 앞에 있는 요소를 반환

function solution(tickets) {
  let answer = [];

  const dfs = (airport, tickets, path) => {
    let newPath = [...path, airport];

    if (tickets.length === 0) {
      answer.push(newPath);
    } else {
      tickets.map((ticket, index) => {
        if (ticket[0] === airport) {
          let copyTicket = [...tickets];
          const [[from, to]] = copyTicket.splice(index, 1);
          dfs(to, copyTicket, newPath);
        }
      });
    }
  };

  dfs("ICN", tickets, []);
  return answer.sort()[0];
}
