// 문제 접근
// 1. 행단위로 얻을 수 있는 최대 점수를 기록하는 일차원 배열 dp 생성
// 2. 행 수만큼 각 땅의 점수 + 이전 행에서 같은 열을 제외한 땅들의 최대 점수 (열이 달라야하니까)
// 3. 마지막으로 dp의 최댓값 반환
// 시간 복잡도 O(N)

const solution = (land) => {
  const n = land.length
  let dp = [...land[0]];

  for (let i = 1; i < n; i++) {
    const prevDp = [...dp]; // 이전 행의 결과를 복사
    dp[0] = land[i][0] + Math.max(prevDp[1], prevDp[2], prevDp[3]);
    dp[1] = land[i][1] + Math.max(prevDp[0], prevDp[2], prevDp[3]);
    dp[2] = land[i][2] + Math.max(prevDp[0], prevDp[1], prevDp[3]);
    dp[3] = land[i][3] + Math.max(prevDp[0], prevDp[1], prevDp[2]);
  }

  return Math.max(...dp); 
}

