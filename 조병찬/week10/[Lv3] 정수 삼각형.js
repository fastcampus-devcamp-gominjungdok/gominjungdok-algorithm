// 문제 접근
// 1. 위에서 아래로 접근하면 백트래킹을 해야 함
// 2. 아래에서 위로 차곡차곡 쌓아가면서 올라감
// 3. ㅅ 모양이 되도록 하나씩 더해서 그 윗줄에 값을 저장시킴
// 4. triangle의 맨 윗부분인 [0][0]을 리턴함

function solution(triangle) {
  for (let i = triangle.length - 1; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length - 1; j++) {
      triangle[i - 1][j] += Math.max(triangle[i][j], triangle[i][j + 1]);
    }
  }

  return triangle[0][0];
}
