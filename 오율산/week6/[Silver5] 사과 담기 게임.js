// 문제 접근
// 1. 사과가 바구니 왼쪽보다 왼쪽에 떨어지면 바구니를 왼쪽으로 이동
// 2. 사과가 바구니 오른쪽보다 오른쪽에 떨어지면 바구니를 오른쪽으로 이동

const input = require('fs').readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const J = Number(input[1]);
const applePositions = input.slice(2).map(Number);

let left = 1;
let right = M;
let totalMoves = 0;

for (let apple of applePositions) {
    if (apple < left) {
        const move = left - apple;
        totalMoves += move;
        left -= move;
        right -= move;
    } else if (apple > right) {
        const move = apple - right;
        totalMoves += move;
        left += move;
        right += move;
    }
}

console.log(totalMoves);
