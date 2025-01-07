// 문제 접근
// 1. 모든 노드를 방문하면 되는 문제이므로 DFS 방식을 적용한다.
// 2. 가로, 세로 너비를 기준으로 2차원 배열을 만들고, 배추의 좌표들의 값을 1로 하고 나머지는 0으로 한다.
// 3. 배추의 좌표를 시작점으로 밭의 좌표들을 방문한다.
// 4. 이때 방문한 좌표는 0으로 바꾸고 해당 좌표를 체크한 후 값이 0이 아닌 좌표에 대하여 DFS를 반복한다.
// 5. 4의 반복이 끝났다는 것은 인접해있는 배추들 한 덩어리에 대한 조사가 끝났다는 것을 의미한다.
// 6. 모든 배추의 좌표에 대해 3-4의 반복을 진행하고 체크된 좌표가 0개가 아닌 경우 answer를 ++ 한다.
// 시간복잡도: O(caseCount * width * height)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");
const caseCount = Number(input[0]);
let caseIdx = 1;
let answer = 0;
let checkedCount = 0;

const dfs = (field, position=[0,0], check=[]) => {
  let [x, y] = position;

  if (x <= field.length && y <= field[0].length) {

    if (field[x][y] !== 0) {
      field[x][y] = 0; // 방문 표시
      checkedCount++;
      check.push([x, y]);
    
      let directions = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0]
      ]
    
      for (const [dx, dy] of directions) {
        let newX = x + dx;
        let newY = y + dy;
        
        if (
          0 <= newX && newX < field.length
          && 0 <= newY && newY < field[0].length
          && field[newX][newY] === 1
        ) {
          dfs(field, [newX, newY], check);
        }
      }
    }
  }
  return check;
}

for (a=0; a<caseCount; a++) {
  answer = 0;
  checkedCount = 0;

  const [width, height, cabbageCount] = input[caseIdx].split(" ").map(Number);
  const cabbagePositions = input.slice(caseIdx + 1, caseIdx + cabbageCount + 1).map(line => line.split(' ').map(Number));
  caseIdx += cabbageCount + 1;

  const field = Array.from({ length: width }, () => Array(height).fill(0));
  for (b=0; b<cabbageCount; b++) {
    const x = cabbagePositions[b][0];
    const y = cabbagePositions[b][1];
    field[x][y] = 1;
  }

  for (c=0; c<cabbageCount; c++) {
    if (dfs(field, [cabbagePositions[c][0], cabbagePositions[c][1]]).length !== 0) answer++;
  }
  console.log(answer);
}