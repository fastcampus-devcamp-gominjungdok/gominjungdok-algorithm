// 문제 접근
// 1. land.length행 4열의 2차원 dp 배열 생성
// 2. dp[0]에 land[0]을 할당한다. (초기값 설정)
// 3. 첫번째 반복문은 행을 나타냄
// 4. 두번째 반복문은 열을 나타냄
// 5. 세번째 반복문은 이전 행의 열을 나타냄 (이전 행의 열과 현재 행의 열을 구분하기 위함)
// 6. 같지 않다면 dp에 메모이제이션해놨던 값을 사용해 현재 값에 더해준 후 비교하여 할당
// 7. 마지막 반복문을 통해 dp의 마지막 행의 최대값을 구함

function solution(land) {
  let answer = 0;
  const dp = Array.from({ length: land.length }, () => Array(4).fill(0));

  dp[0] = land[0];

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < 4; j++) {
      for (let k = 0; k < 4; k++) {
        if (j !== k) {
          dp[i][j] = Math.max(dp[i][j], dp[i - 1][k] + land[i][j]);
        }
      }
    }
  }

  for (let i = 0; i < dp.length; i++) {
    answer = Math.max(...dp[i]);
  }

  return answer;
}
