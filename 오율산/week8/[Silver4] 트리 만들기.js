// 문제 접근
// 1. 리프 노드를 먼저 생성해서 루트 노드에 연결
// 2. 이후에 남은 내부 노드들을 루트부터 체인 형식으로 연결

// 실패 코드
const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split(" ");
const n = input[0];
const m = input[1];

function createTree(n, m) {
  const edges = [];

  const leaves = Array.from({ length: m }, (_, i) => i);
  const internalNodes = Array.from({ length: n - m }, (_, i) => i + m);

  const root = internalNodes[0];
  for (const leaf of leaves) {
    edges.push([root, leaf]);
  }

  for (let i = 1; i < internalNodes.length; i++) {
    edges.push([internalNodes[i - 1], internalNodes[i]]);
  }

  edges.forEach((edge) => console.log(edge.join(" ")));
}

createTree(n, m);
