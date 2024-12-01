// 접근 방법
// 1. 2차원 배열 commands의 각각의 item들을 먼저 도출해냄
// 2. 각 item들의 0, 1번째 원소를 활용해서 array의 slice 메소드를 이용해 배열을 잘라냄
// 3. 잘라낸 배열을 sort() 함수를 이용해 오름차순 정렬
// 4. 정렬된 아이템의 item[2]의 수를 활용해 값 도출
// 시간복잡도: O(n⋅mlogm) (ChatGPT 피셜)

function solution(array, commands) {
  var answer = [];
  commands.forEach((data) => {
    answer.push((filtered = array.slice(data[0] - 1, data[1]).sort((a, b) => a - b)[data[2] - 1]));
  });
  return answer;
}
