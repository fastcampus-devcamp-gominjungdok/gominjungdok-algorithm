// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181919
// 1. 반복문과 내부에 if문을 통해 배열에 push 후 return

function solution(n) {
  const result = []; // 콜라츠 수열을 저장할 배열

  while (n !== 1) {
    // n이 1이 될 때까지 반복
    result.push(n); // 현재 n을 결과에 추가
    if (n % 2 === 0) {
      n = n / 2; // 짝수인 경우 2로 나누기
    } else {
      n = 3 * n + 1; // 홀수인 경우 3 * n + 1
    }
  }
  result.push(1); // 마지막으로 1을 추가

  return result; // 콜라츠 수열 반환
}

// 테스트 예제
console.log(solution(10)); // [10, 5, 16, 8, 4, 2, 1]
