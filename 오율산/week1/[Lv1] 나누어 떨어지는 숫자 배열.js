// 문제 접근 (해결하기 위한 순서대로 작성)
// 1. arr 배열을 순회하며 data와 divisor를 나눈 값의 나머지가 0인 요소를 찾음
// 2. 찾은 요소를 anwser 배열에 push
// 3. 끝난 후 answer 배열을 오름차순 정렬
// 4. 배열의 내부에 요소가 없다면 answer에 -1을 push
// 시간복잡도: ???

function solution(arr, divisor) {
  var answer = [];

  arr.forEach((data) => {
    if (data % divisor === 0) {
      answer.push(data);
    }
  });

  answer.sort((a, b) => a - b);

  if (answer.length === 0) {
    answer.push(-1);
  }

  return answer;
}
