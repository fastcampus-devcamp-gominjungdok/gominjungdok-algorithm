// 문제 접근
// 1. 첫째줄에 있는 테스트케이스 수만큼 줄 읽기 반복
// 2. B는 정렬해서 A의 각 요소별로 이진 탐색해 가까운 값 구함
// 2. 새 배열 값의 합 구함
// 시간 복잡도 O(t*mlogn)) - 테스트 케이스 수만큼, A배열 길이만큼 B배열 이진 탐색

const findCloset = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  if (target<=arr[left]) return arr[left];
  if (target>=arr[right]) return arr[right];

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return arr[mid];
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return Math.abs(arr[left] - target) < Math.abs(arr[left - 1] - target)
    ? arr[left]
    : arr[left - 1];
};

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const testCaseCnt = Number(input[0]);
const results = [];

let index = 1;
for (let t = 0; t < testCaseCnt; t++) {
  index++; //길이는 필요 없음
  const A = input[index++].split(" ").map(Number);
  const B = input[index++]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  results.push(A.reduce((acc, a) => acc + findCloset(B, a), 0));
}

results.forEach((result) => console.log(result));

