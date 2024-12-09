// 문제 접근
// 1. 배열을 순회했을 때 현재 인덱스의 값이 이전 인덱스의 값과 같다면 이를 넘김
// 2. 만약 두 개가 다르다면 해당 인덱스의 값을 배열에 추가

function solution(arr) {
  let answer = [];

  arr.forEach((data, index, array) => {
    if (data !== array[index - 1]) {
      answer.push(data);
    }
  });

  return answer;
}
