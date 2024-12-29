// 문제 접근
// 1. 주어진 식을 -를 기준으로 나눔
// 2. 나눈 배열을 다시 +를 기준으로 나눔
// 3. 나눈 배열을 순회하며 더한 값을 answer에 더함
// 4. i가 0이면 더하고 아니면 뺌

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const expression = input[0];

function solution(expression) {
  let answer = 0;

  const minusParse = expression.split("-");
  const plusParse = minusParse.map((v) => v.split("+"));

  for (let i = 0; i < plusParse.length; i++) {
    const sum = plusParse[i].reduce((acc, curr) => {
      return acc + parseInt(curr);
    }, 0);

    i === 0 ? (answer += sum) : (answer -= sum);
  }

  return answer;
}

console.log(solution(expression));
