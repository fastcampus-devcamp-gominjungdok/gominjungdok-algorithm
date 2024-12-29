// 문제 접근
// 1. 떨어지는 사과의 위치를 순회하며 왼쪽 모서리와 오른쪽 모서리의 위치를 찾음
// 2. 사과의 위치가 왼쪽 모서리의 위치보다 작으면 왼쪽 모서리와 사과의 위치의 차이를 answer에 더함
// 3. 사과의 위치가 오른쪽 모서리의 위치보다 크면 오른쪽 모서리와 사과의 위치의 차이를 answer에 더함
// 4. answer를 반환

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const fallingApple = input.slice(2).map(Number);

function solution(M, fallingApple) {
  let answer = 0;
  let leftEdge = 1;
  let rightEdge = M;

  for (let apple of fallingApple) {
    if (apple < leftEdge) {
      answer += leftEdge - apple;
      leftEdge = apple;
      rightEdge = apple + M - 1;
    } else if (apple > rightEdge) {
      answer += apple - rightEdge;
      rightEdge = apple;
      leftEdge = apple - M + 1;
    }
  }

  return answer;
}

console.log(solution(M, fallingApple));
