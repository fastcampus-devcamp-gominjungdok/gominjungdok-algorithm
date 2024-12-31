// // 문제 접근
// // 1. 기름값 변수를 만들고 각 도시에서 다음 도시의 기름값이 더 싸면 기름값을 업데이트하며 총 기름값 계산
// // 시간복잡도 O(n)

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input[0])
const distances = input[1].split(' ').map(BigInt)
const prices = input[2].split(' ').map(BigInt)

let answer = 0n;
let currentPrice = prices[0];

for (let i = 0; i < N - 1; i++) {
  answer += currentPrice * distances[i];

  if (prices[i + 1] < currentPrice) {
    currentPrice = prices[i + 1];
  }
}

console.log(String(answer))