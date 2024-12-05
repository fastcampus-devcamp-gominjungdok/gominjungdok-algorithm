// 문제 접근
// 1. 옮긴 인형을 담는 배열 s 생성
// 2. moves 배열을 순회하며 board[board.length-1][moves[i]-1]에 값이 있으면 s에 넣음, 그리고 그 자리를 0으로 바꿈
// board[0][moves[i]-1] 까지 검사했는데 모두 0이면 넘어감
// 3. s에 추가할때 이전 인형이 같은 인형이면 없애고 answer+2
// 시간 복잡도 O(n * m) - moves.length(n), board.length(m)

function solution(board, moves) {
  let answer = 0;
  const s = [];

  for (const move of moves){
    const col = move - 1;
    for (let row = 0; row < board.length; row++) {
      if (board[row][col] !== 0) {
        // 인형 집기
        const doll = board[row][col];
        board[row][col] = 0; 

        // s 검사
        if(s[s.length - 1] === doll){
          s.pop();
          answer += 2; 
        } else {
          s.push(doll); 
        } 
        break;
      }
    }
  }
  return answer;
}

