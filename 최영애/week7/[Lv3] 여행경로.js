// 문제 접근 1 - 제일 첫 시작에서도 도착지를 판별해서 티켓을 골라야 한다는 점을 놓침
// 1. 일단 경로를 알아야되니까 DFS로 접근한다.
// 2. 티켓들 중 첫번째 티켓이 ICN에서 출발하는 게 아닐 수 있기 때문에 주어진 티켓 중 ICN에서 출발하는 첫번째 티켓을 찾아 시작한다.
// 3. DFS에서는 해당 티켓의 도착지를 결과 배열에 넣고 해당 인덱스를 used에 true로 바꾼다.
// 4. 티켓들 중 used가 false이고 출발지가 기존 티켓의 도착지인 것들을 알파벳 순서대로 정렬하여 알파벳 순서가 앞서는 것부터 탐색한다.
// 5. 모든 티켓을 사용했을 때까지 반복한다.

// const solution = (tickets) => {
//   const visited = new Array(tickets.length).fill(false);
//   const start = tickets.findIndex(tickets => tickets[0] === "ICN");

//   return dfs(tickets, start, visited);
// }

// const dfs = (tickets, idx, visited, route=[]) => {
//   route.push(tickets[idx][0]);
//   visited[idx] = true;
//   const land = tickets[idx][1];
//   const possibleTicketsIdx = tickets
//     .map((ticket, index) => (ticket[0] === land && visited[index] === false ? index : -1))
//     .filter(index => index !== -1);

//   // 현재 티켓의 종착지 출발 티켓 중 종착지의 알파벳 순서가 앞서는 티켓 찾기
//   let nextTicketIdx = possibleTicketsIdx[0];
//   for (i=0; i<possibleTicketsIdx.length; i++) {
//     let newTicketArrive = tickets[possibleTicketsIdx[i]][1];
//     if (tickets[nextTicketIdx][1] > newTicketArrive) {
//       nextTicketIdx = possibleTicketsIdx[i];
//     }
//   }

//   if (visited.indexOf(false) >= 0) {
//     dfs(tickets, nextTicketIdx, visited, route);
//   } else {
//     route.push(tickets[idx][1]);
//   }
//   return route;
// }


// 문제 접근 2 - 무조건 도착지의 알파벳 순서가 앞서는 티켓으로 시작하면 모든 티켓을 사용할 수 없는 경우가 있음을 놓침 & visited, route를 얕은 복사로 넘겨주는 게 아니라 문제
// 1. 1번 접근에서의 깨달음을 바탕으로 제일 첫 시작 티켓도 도착지의 알파벳 순서가 앞서는 티켓을 골라야 한다고 생각했다.
// 2. 또한 다음 티켓에 해당하는 possibleTicketsIdx가 빈 배열일 경우 에러가 날 수 있다는 것을 알았다.
// 3. 따라서 해당 부분들을 수정했다.

// const solution = (tickets) => {
//   const visited = new Array(tickets.length).fill(false);
//   const possibleStartTicketsIdx = tickets
//   .map((ticket, index) => (ticket[0] === "ICN" ? index : -1))
//   .filter(index => index !== -1)
//   .sort((a, b) => (tickets[a][1] > tickets[b][1] ? 1 : -1));
//   const startIdx = possibleStartTicketsIdx[0];

//   return dfs(tickets, startIdx, visited, ["ICN"]);
// }

// const dfs = (tickets, idx, visited, route=[]) => {
//   visited[idx] = true;
//   const land = tickets[idx][1];
//   route.push(land);
//   const possibleTicketsIdx = tickets
//     .map((ticket, index) => (ticket[0] === land && visited[index] === false ? index : -1))
//     .filter(index => index !== -1)
//     .sort((a, b) => (tickets[a][1] > tickets[b][1] ? 1 : -1));
//   if (possibleTicketsIdx.length > 0) {
//     const nextTicketIdx = possibleTicketsIdx[0];
//     dfs(tickets, nextTicketIdx, visited, route);
//   }

//   return route;
// }


// 문제 접근 3
// 1. 2번 접근에서의 깨달음을 바탕으로 무조건 도착지의 알파벳 순서가 앞서는 티켓을 고른다면 모든 공항을 갈 수 없을 수 있다는 것을 알았다.
// 2. 또한 시작 티켓을 여러번 시도할 수 있으므로 visited 배열도 매 시작 티켓마다 새로고침 되어야 하고,
//    DFS를 돌면서 visited와 used를 얕은 복사로 전달해야 다른 경우의 수를 가더라도 원본 데이터가 훼손되지 않은 상태로 확인할 수 있다는 것을 알았다.
// 3. 따라서 위의 것들을 수정하고, 방문 공항 순서 배열의 개수가 티켓의 수 + 1이 되면 결과값으로 반환하도록 했다.
// 시간복잡도: tickets.length n => O(n^2 logn)


const solution = (tickets) => {
  const possibleStartTicketsIdx = tickets
  .map((ticket, index) => (ticket[0] === "ICN" ? index : -1))
  .filter(index => index !== -1)
  .sort((a, b) => (tickets[a][1] > tickets[b][1] ? 1 : -1));
  
  for (const startIdx of possibleStartTicketsIdx) {
    const visited = new Array(tickets.length).fill(false);
    const result = dfs(tickets, startIdx, visited, ["ICN"]);
    if (result.length === tickets.length + 1) {
      return result;
    }
  }
}

const dfs = (tickets, idx, visited, route=[]) => {
  visited[idx] = true;
  const land = tickets[idx][1];
  route.push(land);
  const possibleTicketsIdx = tickets
    .map((ticket, index) => (ticket[0] === land && visited[index] === false ? index : -1))
    .filter(index => index !== -1)
    .sort((a, b) => (tickets[a][1] > tickets[b][1] ? 1 : -1));
  if (possibleTicketsIdx.length > 0) {
    for (const nextTicketIdx of possibleTicketsIdx) {
      const result = dfs(tickets, nextTicketIdx, [...visited], [...route]);
      if (result.length === tickets.length + 1) return result;
    }
  }

  return route;
}