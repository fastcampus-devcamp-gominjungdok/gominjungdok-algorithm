// 문제 접근
// 1. 주어진 문자열에서 숫자를 제외한 문자열을 제거한다.
// 2. 정규표현식을 통해 숫자만 추출해낸다.
// 3. 숫자만 추출해서 result에 넣어주고 오름차순으로 정렬해준다.
// 중요: 100자리의 수를 일반적인 Number로 비교가 어렵기 때문에 BigInt로 변환해준다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const M = input.slice(1).map((v) => v.split("\r").join(""));

function solution(N, M) {
  const result = [];

  for (let i = 0; i < N; i++) {
    const numbers = M[i].match(/\d+/g);
    if (numbers) {
      result.push(...numbers.map((number) => BigInt(number)));
    }
  }

  result.sort((a, b) => (a > b ? 1 : -1));

  return result.map((num) => num.toString()).join("\n");
}

console.log(solution(N, M));
