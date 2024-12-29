// 문제 접근
// 0. 가장 작은 수가 되려면 빼는 값을 최대한 크도록 만들어주면 된다.
// 1. 주어진 문자열에 -가 존재한다면 다음 -를 만나기 전까지 괄호로 묶어준다.
// 2. 만약 다음 -가 없다면 식 마지막에 괄호로 닫아준다.
// 3. 완성된 식에 대해 계산을 진행한다.
// 시간복잡도 : text.length n, 괄호 쌍의 수 m => O(n⋅m)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
  const text = input[0];
  let expression = '';
  let isParenthesisOpen = false;
  
  for (i = 0; i < text.length; i++) {
    const char = text[i];
    if (char === '-') {
      if (isParenthesisOpen) {
        expression += ')' + char + '(';
      } else {
        expression += char + '(';
        isParenthesisOpen = true;
      }
    } else {
      expression += char;
    }
  }

  if (isParenthesisOpen) expression += ')';
  return expression;
}

const calculateExpression = (expression) => {
  // 괄호가 있을 경우, 괄호 안쪽부터 계산
  while (expression.includes("(")) {
    expression = expression.replace(/\(([^()]+)\)/g, (match, innerExpression) => {
      return calculateWithoutParentheses(innerExpression);
    });
  }

  // 괄호가 없는 최종 표현식 계산
  return calculateWithoutParentheses(expression);
};

const calculateWithoutParentheses = (expression) => {
  const tokens = expression.match(/[\+\-]?\d+/g); // 숫자와 부호 분리
  return tokens.reduce((sum, token) => sum + Number(token), 0); // 합산
};

console.log(calculateExpression(getAnswer(input)));