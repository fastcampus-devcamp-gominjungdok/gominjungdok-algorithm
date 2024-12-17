// 문제 접근
// 1. rocks 오름차순 sort
// 2. 탐색 범위를 1(최소 거리의 최솟값) ~ distance(최소 거리의 최댓값)로 설정하고, 최소거리를 mid로 정한 후 이진탐색
// 출발지점 ~ 바위 거리가 mid보다 작으면 바위 제거(mid를 유지할 수 없는 경우임), 크거나 같으면 출발지점을 그 바위 위치로 옮김(다음 바위와 거리 계산)
// 삭제한 바위 개수가 삭제할 바위 개수(n) 보다 크면 최소 거리를 줄임(mid를 유지할 수 없는 경우임)
// 이하이면 그 mid가 최소값 중 최대값, answer를 mid로 업데이트, 최소 거리를 늘림(mid를 유지 가능)
// 시간복잡도: O(rlogr + r * logd) R은 바위의 개수. d는 거리

function solution(distance, rocks, n) {
  rocks.sort((a,b)=>a-b);
  rocks.push(distance);

  let left = 1; 
  let right = distance;
  let answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let start = 0; 
    let removeCnt = 0; 
    
    for (let rock of rocks) {
      if (rock - start < mid) {
        removeCnt++;
      } else {  
        start = rock;
      }
    }

    if (removeCnt > n) {
      right = mid - 1; 
    } else {
      answer = mid;
      left = mid + 1; 
    }
  }
  return answer;
}