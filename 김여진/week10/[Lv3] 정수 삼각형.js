// 실패 풀이 - 시간 초과
// 문제 접근
// 1. 삼각형과 동일한 2차원 배열 dp를 만들어 0으로 채워놓음
// 2. 각 행에서 이전 행의 같은 열, 왼쪽 열의 최댓값을 비교해 더함
// 2. 마지막 행의 최댓값을 반환
// 시간 복잡도 O(N*N)

const solution = (triangle) => {
  const n = triangle.length;
  const dp = Array.from(Array(n), (_, i) => Array(i + 1).fill(0));

  dp[0][0] = triangle[0][0];

  for (let i = 1; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      if (j === 0) { // 맨 왼쪽
        dp[i][j] = dp[i - 1][j] + triangle[i][j];
      } else if (j === i) { // 맨 오른쪽
        dp[i][j] = dp[i - 1][j - 1] + triangle[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }

  return Math.max(...dp[n - 1]);
};

// 성공 풀이
// 문제 접근
// 1. 모든 삼각형을 반영하지 말고 삼각형의 행과 동일한 일차원 배열 dp 생성
// 2. 이전dp의 같은 열, 왼쪽 열의 최댓값을 비교해 더함
// 3. 이전dp를 현재dp로 업데이트
// 2. 마지막 행의 최댓값을 반환
// 시간 복잡도 O(N*N) 하지만 공간 복잡도를 O(N*N)에서 O(N)으로 줄임

const solution = (triangle) => {
  const n = triangle.length;
  let prevDp = triangle[0]; 

  for (let i = 1; i < n; i++) {
    const currDp = Array(i + 1).fill(0);

    for (let j = 0; j <= i; j++) {
      if (j === 0) { // 맨 왼쪽
        currDp[j] = prevDp[j] + triangle[i][j];
      } else if (j === i) { // 맨 오른쪽
        currDp[j] = prevDp[j - 1] + triangle[i][j];
      } else { // 가운데
        currDp[j] = Math.max(prevDp[j - 1], prevDp[j]) + triangle[i][j];
      }
    }

    prevDp = currDp; 
  }

  return Math.max(...prevDp);
};
