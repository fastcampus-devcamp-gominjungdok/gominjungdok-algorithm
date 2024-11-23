// 문제 접근
// 1. B의 원소를 오름차순으로 정렬한다.
// 2. A의 원소를 순회하면서 B에서 가장 가까운 수를 찾는다.
// 3. 이진 탐색을 통해 가장 가까운 수를 찾는다.
// 4. 찾은 수를 sum에 더한다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
let line = 1;
let answer = [];

for (let tc = 0; tc < T; tc++) {
  const n = input[line].split(" ")[0];
  const A = input[line + 1].split(" ").map(Number);
  const B = input[line + 2].split(" ").map(Number);

  let result = solve(n, A, B);
  answer.push(result);

  line += 3;
}

console.log(answer.join("\n"));

function solve(n, A, B) {
  let sum = 0;
  B.sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    sum += findClosest(B, A[i]);
  }

  return sum;
}

function findClosest(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  if (target <= arr[left]) return arr[left];
  if (target >= arr[right]) return arr[right];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return arr[mid];

    if (target < arr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return Math.abs(arr[left] - target) < Math.abs(arr[right] - target)
    ? arr[left]
    : arr[right];
}
