// 문제 접근
// 1. 바구니 크기에 따라 바구니의 왼쪽, 오른쪽 좌표를 구한다.
// 2. 사과의 위치가 바구니 오른쪽 좌표보다 클 경우와 왼쪽 좌표보다 작을 경우에 움직이는 거리를 판단한다.
// 3. 2에서 구한 거리만큼 이동거리를 더하고 바구니의 왼쪽, 오른쪽 좌표를 이동한다.
// 시간복잡도 : input.length n, appleCount m => O(n+m)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
  let answer = 0;

  const basketSize = input[0].split(" ").map(Number)[1];
  const appleCount = Number(input[1]);
  const appleLocations = input.slice(2).map(Number);
  
  let basketLeft = 1;
  let basketRight = basketSize;

  for (i = 0; i < appleCount; i++) {
    const appleLocation = appleLocations[i];

    if (appleLocation > basketRight) {
      const move = appleLocation - basketRight;
      answer += move;
      basketLeft += move;
      basketRight += move;
    } else if (appleLocation < basketLeft) {
      const move = basketLeft - appleLocation;
      answer += move;
      basketLeft -= move;
      basketRight -= move;
    }
  }

  return answer;
}

console.log(getAnswer(input));