// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181865
// 접근 방법
// 1. binomial을 띄어쓰기를 기준으로 분리 한 다음에 각각 항목들을 알맞은 데이터 형식으로 변환
// 2. 방법을 찾아보니 new Function() 생성자를 알게되어 적용해봤습니다.

function solution(binomial) {
  const arr = binomial.split(" ").map((data, i) => {
    if (i === 1) return data;
    return +data;
  });

  function calculate(num1, num2, operator) {
    const operation = new Function(
      "num1",
      "num2",
      `return num1 ${operator} num2`
    );
    return operation(num1, num2);
  }

  return calculate(arr[0], arr[2], arr[1]);
}
