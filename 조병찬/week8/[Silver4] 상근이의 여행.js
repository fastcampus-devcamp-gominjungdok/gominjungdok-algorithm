// 문제 접근
// 1. 트리의 성질을 이용하는 문제인듯
// 2. N개의 노드를 가진 트리는 항상 N-1 개의 간선을 가진다.
// 3. N개의 국가를 방문하기 위해서는 N-1 개의 간선만 있으면 됨

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = parseInt(input[0]);
let currentLine = 1;

for (let t = 0; t < T; t++) {
  const [N, M] = input[currentLine].split(" ").map(Number);
  console.log(N - 1);

  currentLine += M + 1;
}
