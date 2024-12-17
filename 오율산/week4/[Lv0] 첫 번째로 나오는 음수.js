// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181896
// 문제 접근
// 1. 배열의 각 원소를 순회하면서 현재 원소가 음수인지 확인
// 2. 음수라면 해당 인덱스 반환
// 3. 음수를 못 찾은 경우 -1 반환

function solution(num_list) {
  let result = -1;

  num_list.forEach((num, index) => {
    if (result === -1 && num < 0) {
      result = index;
      return;
    }
  });

  return result;
}
