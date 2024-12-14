// 문제 접근
// 1. distance가 엄청 크니 이분 탐색으로 진행
// 2. 최솟값이 될 수 있는 값을 정하고 들어간다. -> mid
// 3. 바위 사이의 거리가 mid보다 작다면 바위를 제거
// 4. 바위 사이의 거리가 mid보다 크다면 prev에 현재 바위를 넣어준다.
// 5. 마지막 바위와 도착점 사이의 거리를 비교 (추가)
// 6. 제거한 바위의 개수가 n보다 크다면 right를 mid - 1로 설정 아니라면 left를 mid + 1로 설정

function solution(distance, rocks, n) {
  rocks.sort((a, b) => a - b);

  const binarySearch = (left, right) => {
    if (left > right) return right;

    let mid = Math.floor((left + right) / 2);
    let prev = 0;
    let removedRockCount = 0;

    for (let i = 0; i < rocks.length; i++) {
      if (rocks[i] - prev < mid) {
        removedRockCount++;
      } else {
        prev = rocks[i];
      }
    }

    // 마지막 바위와 도착점 사이의 거리 비교
    if (distance - prev < mid) removedRockCount++;

    return removedRockCount > n
      ? binarySearch(left, mid - 1)
      : binarySearch(mid + 1, right);
  };

  return binarySearch(1, distance);
}
