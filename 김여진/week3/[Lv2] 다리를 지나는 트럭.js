// 문제 접근
// 1. 트럭의 무게 합이 weight를 넘지 않으면 다리에 최대 bridge_length개 올라갈 수 있음
// 2. 하나의 트럭이 다리를 건너는 시간은 bridge_length초

// 3. [트럭의 무게(truck_weights[i]), 나갈 시간(time+bridge_length)]을 담아 다리 위의 트럭을 선형 큐 형태로 만듦 - 불필요한 시간 카운트 줄임
// 4. 다리 위에 트럭이 있을 동안
// 큐의 front 트럭 나갈 시간이 시간과 같으면 뺌
// 다리에 올라가있는 무게 + 트럭의 무게가 최대 무게 이하이면 트럭 올리고, 아니면 큐의 front 트럭이 빠지는 시간으로 시간을 업데이트
// 5. 최종 시간을 리턴 
// 시간 복잡도 O(n)

function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge_weight = 0;
  const q = [[0,0]];

  while(q.length > 0){
    if(q[0][1] === time) bridge_weight -= q.shift()[0];

    if(bridge_weight + truck_weights[0] <= weight){
      bridge_weight += truck_weights[0];
      q.push([truck_weights.shift(), time + bridge_length]);
    }else{
      if(q[0]) time = q[0][1] - 1;
    }

    time++;
  }
  return time;
}