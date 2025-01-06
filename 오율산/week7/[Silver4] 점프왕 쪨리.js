// 문제 접근
// 1. input 값을 받아서 arr의 크기 구현

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const arr = [];
for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

const visited = Array(N).fill(false);

function DFS(arr) {
  visited[n] = true;
  console.log(n);

  function dfs(r, c, visited) {
    // 범위 밖이거나 이미 방문했다면 false
  }
}

const result = DFS(arr);
if (result) {
  console.log("HaruHaru");
} else {
  console.log("Hing");
}
