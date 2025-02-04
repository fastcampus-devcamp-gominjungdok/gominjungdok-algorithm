// 문제 접근
// 1. 두 문자열을 번갈아가면서 합쳐줌. 둘 중 최대 길이까지 반복해서 남은 문자열을 뒤에 붙이도록 함
// 2. 두 문자열을 합친 후, 획수로 변환해줌
// 3. 남은 문자열이 2개 이상이 될 때까지 반복해서 합을 구함
// 4. 결과값을 출력할 때 %를 붙여줌

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const [name1, name2] = input[1].split(" ");

const strokeCount = {
  A: 3,
  B: 2,
  C: 1,
  D: 2,
  E: 4,
  F: 3,
  G: 1,
  H: 3,
  I: 1,
  J: 1,
  K: 3,
  L: 1,
  M: 3,
  N: 2,
  O: 1,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 2,
  U: 1,
  V: 1,
  W: 2,
  X: 2,
  Y: 2,
  Z: 1,
};

function solution(N, M, name1, name2) {
  const maxLength = Math.max(N, M);
  const combinedName = [];

  for (let i = 0; i < maxLength; i++) {
    if (i < N) combinedName.push(name1[i]);
    if (i < M) combinedName.push(name2[i]);
  }

  let numbers = combinedName.map((name) => strokeCount[name]);

  while (numbers.length > 2) {
    let temp = [];
    for (let i = 0; i < numbers.length - 1; i++) {
      temp.push((numbers[i] + numbers[i + 1]) % 10);
    }
    numbers = temp;
  }

  return numbers[0] === 0 ? `${numbers[1]}%` : `${numbers[0]}${numbers[1]}%`;
}

console.log(solution(N, M, name1, name2));
