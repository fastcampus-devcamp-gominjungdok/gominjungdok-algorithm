// 문제 접근
// 1. `-` 연산자 기준으로 식을 그룹화 
// 2. 그룹화한 배열을 순회하며 `+`로 나눠 합 계산
// 3. 첫번째 요소를 제외한 나머지 요소들 합 빼서 반환 
// 시간복잡도 O(n)

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(filePath).toString().trim()

const groups = input.split('-');

const groupSums = groups.map(group => {
    return group
      .split('+')
      .reduce((sum, n) => sum + Number(n), 0)
  }
);

const answer = groupSums[0] - groupSums.slice(1).reduce((sum, n) => sum + n, 0);

console.log(answer)