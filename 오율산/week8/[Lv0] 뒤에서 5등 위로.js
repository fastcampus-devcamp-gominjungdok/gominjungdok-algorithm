// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181852?language=javascript
// 문제 접근
// 1. num_list를 오름차순으로 먼저 정렬
// 2. 해당 배열에서 4번째 인덱스 이후의 값을 반환
// filter()를 제대로 사용하지 못해서 다시 공부하게 되었습니다.

function solution(num_list) {
  return num_list
    .sort((a, b) => a - b)
    .filter((data, i) => {
      return i > 4;
    });
}
