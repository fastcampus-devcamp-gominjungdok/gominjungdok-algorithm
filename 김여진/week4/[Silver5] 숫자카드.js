// 문제 접근
// 1. 두번째 줄의 카드로 셋을 만듦
// 2. 네번째 줄의 카드로 배열을 만들어 그 배열의 요소가 셋에 들어있는지 확인하고 있으면 1, 없으면 0으로 바꿈
// 시간복잡도: O(n + m) - n은 가지고 있는 카드, m은 확인할 카드 개수

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const cardHasArr = new Set(input[1].split(' ').map(Number));
const cardCheckArr = input[3].split(' ').map(Number);

const result = cardCheckArr.map((c) => (cardHasArr.has(c) ? 1 : 0)).join(' ');
console.log(result);