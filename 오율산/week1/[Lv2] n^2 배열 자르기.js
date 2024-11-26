// 문제 접근 (해결하기 위한 순서대로 작성)
// 1. 이차원 배열을 몰라서 이에 대해서 찾아봤습니다.
// 2. 예제를 보고 순서대로 구현을 이를 for문으로 작성을 해봤는데 감이 안잡힙니다 ㅠ_ㅠ
// 시간복잡도: ???

function solution(n, left, right) {
  var answer = [];
  answer.push([]);
  answer[0].push(1);
  answer[0].push(2);
  answer[0].push(3);
  answer.push([]);
  answer[1].push(2);
  answer[1].push(2);
  answer[1].push(3);
  answer.push([]);
  answer[2].push(3);
  answer[2].push(3);
  answer[2].push(3);
  console.log(answer);
  return answer;
}

solution(3, 2, 5);

const arr = [];
for (let i = 0; i < 3; i++) {
  arr.push([]);
  for (let j = 0; j < 3; j++) {
    arr[i].push(j + 1);
  }
}

console.log(arr);
