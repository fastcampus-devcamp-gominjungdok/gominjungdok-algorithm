// 0 0 0 0 0
// 0 0 1 0 3
// 0 2 5 0 1
// 4 2 4 4 2
// 3 5 1 3 1
// 문제 접근
// 0. board에 모든 요소를 담는 것이 아님
// 1. moves의 요소를 moves-1로 해서 board의 열을 순회한다.
// 2. board의 행을 순회하며 0이 아니고 basket의 마지막 요소와 같지 않다면 basket에 push한다.
// 3. 같다면 basket의 마지막 요소를 pop하고 result에 2를 더한다.
// 4. board의 해당 요소를 0으로 바꾼다.
// 5. 반복문으로 moves의 요소를 순회하며 result를 반환한다.

function solution(board, moves) {
  let result = 0;
  const basket = [];

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      if (board[i][move - 1]) {
        if (board[i][move - 1] !== basket[basket.length - 1]) {
          basket.push(board[i][move - 1]);
        } else {
          basket.pop();
          result += 2;
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  });

  return result;
}
