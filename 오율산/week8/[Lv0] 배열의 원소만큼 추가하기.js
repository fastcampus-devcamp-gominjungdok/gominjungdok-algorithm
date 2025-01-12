// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181861
// 문제 접근
// 1. arr 내부 원소들을 추출해서 해당 원소까지 인덱스를 늘리는 조건을 가진 for문 작성
function solution(arr) {
  let X = [];
  arr.forEach((data) => {
    for (let i = 0; i < data; i++) {
      X.push(data);
    }
  });

  return X;
}
