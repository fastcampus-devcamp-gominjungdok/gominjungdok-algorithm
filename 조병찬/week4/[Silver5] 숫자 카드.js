// 접근 방법
// 1. 중복되는 숫자 카드는 없다고 하니 현재 가진 카드의 개수를 하나씩 올려준다.
// 2. 갖고 있는 카드인지 checkCardNumber에 있는 카드인지 확인한다.
// 3. 만약 checkCardNumber에 있는 카드가 있다면 해당 카드의 개수를 result에 넣어준다.
// 4. 만약 checkCardNumber에 있는 카드가 없다면 0을 result에 넣어준다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = Number(input[0]);
const hasCardNumber = input[1].split(" ").map((n) => Number(n));

const M = Number(input[2]);
const checkCardNumber = input[3].split(" ").map((n) => Number(n));

function solution(hasCardNumber, checkCardNumber) {
  const result = [];

  const hasCardNumberObj = {};

  hasCardNumber.forEach((number) => {
    hasCardNumberObj[number] = (hasCardNumberObj[number] || 0) + 1;
  });

  checkCardNumber.forEach((number) => {
    !hasCardNumberObj[number]
      ? result.push(0)
      : result.push(hasCardNumberObj[number]);
  });

  return result.join(" ");
}

console.log(solution(hasCardNumber, checkCardNumber));
