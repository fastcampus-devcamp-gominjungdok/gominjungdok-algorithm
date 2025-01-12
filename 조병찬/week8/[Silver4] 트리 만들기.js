// 문제 접근
// 1. 실제 트리에서 정의하는 리프노드와 문제에서의 리프노드가 다름
// 2. N-M+1개 만큼 연결 -> 확정적인 리프노드를 만들어줘야함.
// 3. 루트노드와 마지막 노드는 이미 차수가 1인 리프노드임.
// 4. 이미 2개는 만들어져 있으니 M-2개만큼 1번 노드에 연결

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

function solution(N, M) {
  const result = [];

  for (let i = 0; i < N - M + 1; i++) {
    result.push(`${i} ${i + 1}`);
  }

  for (let i = 0; i < M - 2; i++) {
    result.push(`1 ${N - M + 2 + i}`);
  }

  return result.join("\n");
}

console.log(solution(N, M));
