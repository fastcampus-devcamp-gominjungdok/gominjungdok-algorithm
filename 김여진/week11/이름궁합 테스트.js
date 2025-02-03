// 문제 접근
// 1. 이름을 하나씩 꺼내 숫자로 바꿈
// 2. 숫자 배열을 하나의 요소, 그다음 하나의 요소를 더하고 그 숫자 배열 자체를 업데이트하며 최종 확률을 구함
// 시간 복잡도 O(n*n)

const input = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n');

const [name1, name2] = input[1].split(' ');

const strokeCnt = {
    A: 3, B: 2, C: 1, D: 2, E: 4, F: 3, G: 1, H: 3, I: 1, J: 1,
    K: 3, L: 1, M: 3, N: 2, O: 1, P: 2, Q: 2, R: 2, S: 1, T: 2,
    U: 1, V: 1, W: 1, X: 2, Y: 2, Z: 1
};

const solution = (name1, name2) => {
  const N1 = name1.length;
  const N2 = name2.length;
  let combinedName = [];
  const minLength = Math.min(N1, N2);
  
  for (let i = 0; i < minLength; i++) {
    combinedName.push(name1[i], name2[i]);
  }
  
  if (N1 > N2) combinedName.push(...name1.slice(N2));
  else if (N2 > N1) combinedName.push(...name2.slice(N1));
  
  let numbers = combinedName.map(char => strokeCnt[char]);
  
  while (numbers.length > 2) {
      let newNumbers = [];
      for (let i = 0; i < numbers.length - 1; i++) {
          newNumbers.push((numbers[i] + numbers[i + 1]) % 10);
      }
      numbers = newNumbers;
  }
  
  return `${parseInt(numbers.join(''))}%`
}

console.log(solution(name1, name2));