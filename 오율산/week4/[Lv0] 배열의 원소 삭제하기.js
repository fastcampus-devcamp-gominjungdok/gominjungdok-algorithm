// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181844
// 문제 접근
// 1. arr의 각 원소를 순회
// 2. delete_list에 현재 원소가 포함되어 있는지를 확인
// 3. 포함되어 있지 않으면 결과를 배열에 추가

function solution(arr, delete_list) {
  const result = [];

  arr.forEach((item) => {
    if (!delete_list.includes(item)) {
      result.push(item);
    }
  });

  return result;
}
