// 문제 접근
// 1. 다리를 건너고 있는 배열을 만든다.
// 2. 그 배열을 0으로 채워준다.
// 3. 다리를 건너고 있는 배열의 길이가 0이 될 때까지 반복문을 돌린다.
// 4. 다리를 건너고 있는 배열의 첫 번째 요소를 빼서 다리의 무게를 빼준다.
// 5. 무게의 한계치보다 작다면 다리를 건너고 있는 배열에 트럭의 첫 번째 요소를 넣어준다.
// 6. 무게의 한계치보다 크다면 0을 넣어준다.
// 7. 반복문이 끝나기 전에 시간을 1씩 더해준다.

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridgeWeight = 0; // 다리 위 트럭 무게
  let passingBridge = Array.from({ length: bridge_length }, () => 0); // 다리를 건너고 있는 트럭 배열

  while (passingBridge.length) {
    bridgeWeight -= passingBridge.shift();
    if (truck_weights.length) {
      if (truck_weights[0] + bridgeWeight <= weight) {
        bridgeWeight += truck_weights[0];
        passingBridge.push(truck_weights.shift());
      } else {
        passingBridge.push(0);
      }
    }
    time++;
  }

  return time;
}
