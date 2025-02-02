// 문제 접근
// 1. 알파벳들의 획을 저장한 객체 생성
// 2. 각 이름들을 하나씩 분해해서 배열에 추가
// 3. 이름을 분해한 배열을 map() 메소드를 통해 획을 저장한 객체에서 숫자 뽑기
// 4. 숫자들의 배열 길이가 1이 될 때 까지 계산

const input = require('fs').readFileSync('/dev/stdin', 'utf-8').toString().trim().split('\n');

const [nameALength, nameBLength] = input[0].split(' ').map(Number);
const [nameA, nameB] = input[1].split(' ');

const alphabets = {
    A: 3, B: 2, C: 1, D: 2, E: 4, F: 3, G: 1, H: 3, I: 1, J: 1,
    K: 3, L: 1, M: 3, N: 2, O: 1, P: 2, Q: 2, R: 2, S: 1, T: 2,
    U: 1, V: 1, W: 1, X: 2, Y: 2, Z: 1
};

let combinedName = [];
const minLength = Math.min(nameALength, nameBLength);

for (let i = 0; i < minLength; i++) {
    combinedName.push(nameA[i], nameB[i]);
}

if (nameALength > nameBLength) combinedName.push(...nameA.slice(nameBLength));
else if (nameBLength > nameALength) combinedName.push(...nameB.slice(nameALength));

let numbers = combinedName.map(char => alphabets[char]);

while (numbers.length > 2) {
    let newNumbers = [];
    for (let i = 0; i < numbers.length - 1; i++) {
        newNumbers.push((numbers[i] + numbers[i + 1]) % 10);
    }
    numbers = newNumbers;
}

const result = numbers.join('');
console.log(`${parseInt(result)}%`);