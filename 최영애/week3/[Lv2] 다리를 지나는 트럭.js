// 문제 접근
// 1. 다리 역할을 할 배열을 만든다.
// 2. 트럭 순서대로 다리 역할의 배열에 넣는다.
// 3. 이때, 새로 들어갈 트럭의 무게를 더한 다리 역할의 각 요소의 합이 최대 무게를 넘지 않을 때만 넣는다.
// 4. 시간이 지나며 트럭은 들어간 순서대로 다리 역할의 배열의 0부터 마지막 인덱스를 지나간다.
// 5. 마지막 인덱스를 지난 트럭은 새로운 결과값 배열에 들어간다.
// 6. 이때, 트럭이 지나가는 동안 결과값인 초를 ++ 해준다.
// 7. 지나간 트럭이 담긴 배열의 길이가 트럭 전체의 배열의 길이보다 작을동안 반복한다.
// 시간복잡도: 트럭의 개수 n => O(n)

function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridgeArr = new Array(bridge_length).fill(0);
  let truckArr = [];
  let truckIdx = 0;
  let bridgeWeight = 0;

  while(truckArr.length < truck_weights.length) {
    answer++;

    if (bridgeArr.length >= bridge_length) {
      if (bridgeArr[0] != 0) {
        bridgeWeight -= bridgeArr[0];
        truckArr.push(bridgeArr.shift());
      } else {
        bridgeArr.shift();
      }
    }

    if (bridgeWeight + truck_weights[truckIdx] <= weight) {
      bridgeWeight += truck_weights[truckIdx];
      bridgeArr.push(truck_weights[truckIdx++]);
    } else {
      bridgeArr.push(0);
    }
  }

  return answer;
}