// 문제 접근 1 - 시간 초과 실패
// 1. 조합의 모든 경우의 수에 대해서 생각해본다.
// 2. 조합의 경우의 수마다 바위 간격의 최소값을 알아낸다.
// 3. 알아낸 최소값들 중 최대값을 반환한다.

// function solution(distance, rocks, n) {
//   rocks.push(0);
//   rocks.push(distance);
//   const sortedRocks = rocks.sort((a,b) => a-b)

//   return getMaxDistanceFromCombination(sortedRocks, n);
// }

// function getMaxDistanceFromCombination(arr, r) {
//   let max = 0;
//   let delList = [];

//   function dfs(start) {
//     if (delList.length === r) {
//       const checkMin = getMinDistance(arr, delList);
//       if (max < checkMin) max = checkMin;
//       return;
//     }
  
//     for (let i = start; i < arr.length - 1; i++) {
//       delList.push(arr[i]);
//       dfs(i + 1);
//       delList.pop();
//     }
//   }

//   dfs(1);
//   return max;
// }

// function getMinDistance(rocksList, delList) {
//   let min = rocksList[rocksList.length - 1];
//   // 주어진 조합대로 바위 제거
//   rocksList = rocksList.filter(el => !(delList.includes(el)));

//   // 바위 순서대로 최소값 찾기
//   for (let i = 0; i < rocksList.length - 1; i++) {
//     const distance = rocksList[i+1] - rocksList[i];
//     if (distance < min) min = distance;
//   }

//   return min;
// }

// 문제 접근 2 - signal: aborted (core dumped) 에러
// 1. 0 ~ 바위들 ~ 도착지 까지 각 바위들간의 간격은 고정되어있고, 특정 바위가 빠지면 그 바위 앞+뒤 간격으로 대체된다.
// 2. 위 생각을 바탕으로 구현해봤다.
// 3. 각 바위들간의 간격을 먼저 구하고, 조합에 따라 바뀐 바위의 간격을 구하여 최소값을 찾고, 그 중 최대값을 반환한다.

// function solution(distance, rocks, n) {
//   rocks.push(0);
//   rocks.push(distance);
//   const sortedRocks = rocks.sort((a,b) => a-b);
//   const distanceList = [];
//   const rockIdxCom = idxCombination(sortedRocks, n);
//   const minList = [];

//   for (let i = 0; i < rocks.length - 1; i++) {
//     distanceList.push(sortedRocks[i+1] - sortedRocks[i]);
//   }

//   for (let i = 0; i < rockIdxCom.length; i++) {
//     const tempDistanceList = [...distanceList]; // 조합에 따라 바위가 제거된 후 남은 바위들의 간격 list
//     for (let j = rockIdxCom[i].length - 1; j >= 0; j--) {
//       const distanceSum = tempDistanceList[rockIdxCom[i][j]] + tempDistanceList[rockIdxCom[i][j]+1];
//       tempDistanceList.splice(rockIdxCom[i][j], 2, distanceSum);
//     }
//     minList.push(Math.min(...tempDistanceList));
//   }

//   return Math.max(...minList);
// }

// function idxCombination(arr, r) {
//   let result = [];
//   let temp = [];

//   function dfs(start) {
//     if (temp.length === r) {
//       result.push([...temp]);
//       return;
//     }
  
//     for (let i = start; i < arr.length - 1; i++) {
//       temp.push(i-1);
//       dfs(i + 1);
//       temp.pop();
//     }
//   }

//   dfs(1);
//   return result;
// }

// 문제 접근 3
// 1. 이진탐색을 사용한다.
// 2. 지점간 최소 거리를 가정 하여 바위 사이의 간격과 비교하고, 기준보다 작으면 제거한다.
//    (가정한 최소 거리가 실제 최소 거리여야 하기 때문)
// 3. 이때 제거된 바위의 개수가 n개일 때의 최소 거리를 구한다.

function solution(distance, rocks, n) {
  let answer = 0;
  const sortedRocks = rocks.sort((a,b) => a-b)

  let left = 1;
  let right = distance;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (removedRockscount(sortedRocks, mid, distance) <= n) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

function removedRockscount(rocks, mid, distance) {
  let start = 0;
  let end = distance;
  let count = 0;

  for (let i = 0; i < rocks.length; i++) {
    if (rocks[i] - start < mid) {
      count++;
      continue;
    }

    start = rocks[i];
  }

  // 마지막 돌의 위치 ~ 종착지 까지의 거리도 비교한다.
  if (end - start < mid) count++;

  return count;
}