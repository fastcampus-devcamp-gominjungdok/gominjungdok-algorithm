// 문제 접근
// 1. 바구니는 [1,M]의 범위이므로 [left, right]로 해서 
// 2. 사과가 바구니의 left보다 작은 위치에 떨어지면 left-사과위치 거리를 left, rignt에서 뺌, answer에 더함 
// 3. 사과가 바구니의 right보다 큰 위치에 떨어지면 +rignt한 거리를 left, rignt에 더함, answer에 더함
// 사과 개수만큼 반복
// 4. 최종 이동 횟수 반환  
// 시간복잡도 O(n)

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const [N, M] = input[0].split(' ').map(Number)
const applePosArr = input.slice(2).map(Number)

let answer = 0;

let left = 1;
let right = M;

for (const applePos of applePosArr){
  if(applePos < left){
    const distance  = left - applePos
    left -= distance
    right -= distance
    answer += distance
  } else if (applePos > right){
    const distance  = applePos - right
    left += distance
    right += distance
    answer += distance
  }
}

console.log(answer)