// 문제 접근 1
// 1. 주어진 board 배열에 대해서 각 열에 해당하는 0이 아닌 요소만 역순으로 한 새로운 배열을 만든다.
// 2. moves의 각 move에 맞는 배열의 마지막 요소를 pop한다.
// 3. 그리고 pop된 숫자를 새로운 임시 배열에 넣는다.
// 4. 임시 배열에 담긴 마지막 요소와 그 전 요소가 같다면 answer에 2를 더하고 두 요소를 없앤다.
// 시간복잡도 : board.length는 n, moves.length는 m, tempStack.length는 t => O(n² + m + t²)

function solution(board, moves) {

  let answer = 0;
  let tempStack = [];

  let stacks = Array.from({ length: board[0].length }, () => []);
  
  for (let i = 0; i < board.length; i++) {
    for (let j = board.length - 1; j >= 0; j--) {
      if(board[j][i] != 0) stacks[i].push(board[j][i]);
    }
  }
  
  for (let i = 0; i < moves.length; i++) {
    const popIdx = moves[i];
    if (stacks[popIdx - 1].length > 0) {
      const peek = stacks[popIdx-1][stacks[popIdx-1].length-1];
      tempStack.push(peek);
      stacks[popIdx-1].pop();
    }

  }

  let i = 1;
  while (i < tempStack.length) {
    if (tempStack[i] === tempStack[i - 1]) {
      answer += 2;
      tempStack.splice(i - 1, 2);
      i = 1;
    } else {
      i++;
    }
  }

  return answer;
}

// 문제 접근 2
// 0. 위 접근 방법의 시간복잡도가 너무 높은 것 같아서 약간 다른 방식을 생각해 보았습니다.
// 1. 주어진 board 배열에 대해서 각 열에 해당하는 0이 아닌 요소만 역순으로 한 새로운 배열을 만든다.
// 2. moves의 각 move에 맞는 배열의 마지막 요소를 pop한다.
// 3. 그리고 pop된 숫자를 새로운 임시 배열에 넣는다.
// 4. 이때 배열에 담길 요소와 임시 배열의 마지막 요소가 같다면 answer에 2를 더하고 임시 배열의 마지막 요소를 pop한다..
// 시간복잡도 : board.length는 n, moves.length는 m => O(n² + m)

function solution(board, moves) {

  let answer = 0;
  let tempStack = [];

  let stacks = Array.from({ length: board[0].length }, () => []);
  
  for (let i = 0; i < board.length; i++) {
    for (let j = board.length - 1; j >= 0; j--) {
      if(board[j][i] != 0) stacks[i].push(board[j][i]);
    }
  }
  
  for (let i = 0; i < moves.length; i++) {
    const popIdx = moves[i];
    if (stacks[popIdx - 1].length > 0) {
      const peek = stacks[popIdx-1][stacks[popIdx-1].length-1];
      if (peek === tempStack[tempStack.length-1]) {
        answer += 2;
        tempStack.pop();
      } else {
        tempStack.push(peek);
      }
      stacks[popIdx-1].pop();
    }
  }

  return answer;
}
