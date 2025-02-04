// 문제 접근
// 숫자를 꺼내 오름차순으로 정렬
// 시간 복잡도 O(n)

const input = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n');

const texts = input.slice(1);

const solution = (texts) => {
  const result = [];
  const re = /\d+/g; 

  for (let text of texts) {
    const numbers = text.match(re);
    if (numbers) {
      result.push(...numbers.map(BigInt)); 
    }
  }

  result.sort((a, b) => (a > b ? 1 : -1)); 

  return result.join('\n');
};

console.log(solution(texts));