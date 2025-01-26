// 문제 접근 1 - 실패
// : [[1, 2, 3], [3, 1, 100], ...] 과 같은 경우 이 풀이법이면 첫번째 행에서 3, 두번째 행에서 1을 고르게 되는데,
// 	 이것보다 첫번째 행에서 2, 두번째 행에서 100을 고르는 경우의 합이 더 큼
// 1. 각 행마다 최대값을 찾아서 answer에 더해준다.
// 2. 이때 접근한 행이 0번째 행이 아닌 경우 이전 행에서 가장 큰 값의 인덱스의 수를 0으로 바꾸어 선택되지 않도록 한다.

// function solution(land) {
// 	let answer = 0;
// 	let maxIdx = 0;
// 	// 매 행마다 최대값 찾기
// 	for (let i = 0; i < land.length; i++) {
// 		let max = 0;
// 		// 행 안에서 최대값 찾기
// 		if (i !== 0) land[i][maxIdx] = 0;
// 		for (let j = 0; j < land[0].length; j++) {
// 			if (j === 0) {
// 				max = land[i][j];
// 			} else {
// 				if (land[i][j] > max) {
// 					max = land[i][j];
// 					maxIdx = j;
// 				}
// 			}
// 		}

// 		answer += max;
// 	}

// 	return answer;
// }


// 문제 접근
// 1. 위에서 현재 행에서 다음 행을 바라볼 때를 생각했을 경우에 틀렸으므로 다음 행에서 이전 행을 바라볼 때를 생각했다.
// 2. 행, 열을 기준으로 2중 for문을 도는데, 첫번째 행은 이전 행이 없으므로 넘어가고
// 		두번째 행부터 각 열의 값(A)마다 이전 행에서 해당 열의 인덱스를 제외한 값들 중 최대값(B)을 더한다.
// 		이때 제외하는 방법은 위와 동일하게 해당 인덱스의 값을 0으로 설정한다.
// 3. 그리고 A+B의 값으로 해당 셀의 값을 바꾼다.
// 4. 2-3 방식을 통해 최대값을 결과값으로 반환한다.
// 시간복잡도 : O(n)

function solution(land) {
	let answer = 0;
	
	for (let i = 0; i < land.length; i++) {
		for (let j = 0; j < land[0].length; j++) {
				 if (i === 0) {
						 continue;
				 } else {
						 let arr = land[i-1].slice();
						 arr[j] = 0;
						 land[i][j] += Math.max(...arr);
						 answer = Math.max(land[i][j], answer);
				 }
		 }       
	}
	
	return answer;
}