/*
    문제: 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱합니다. 그 결과인 정수 배열을 return 하는 solution 함수를 완성해 주세요.
    
    제한 사항:
      - 1 ≤ arr의 길이 ≤ 1,000,000
        * 1 ≤ arr의 원소의 값 ≤ 100
*/
// 문제 접근
// 1. arr의 원소들을 하나씩 확인하기 위해 forEach() 메소드 사용
// 2. 반복문 내에서 조건문 생성

// 첫 번째 실패 풀이
// 아래와 같이 작성하면 50보다 크거나 같은 홀수와 50보다 작은 짝수의 조건에 대한 연산이 없어서 실패를 한 것 같습니다.
function solution(arr) {
  var answer = [];
  arr.forEach((data) => {
    if (data >= 50 && data % 2 === 0) {
      answer.push(data / 2);
    } else {
      answer.push(data * 2);
    }
  });
  return answer;
}

// 성공 풀이
function solution(arr) {
  var answer = [];
  arr.forEach((data) => {
    if (data >= 50 && data % 2 === 0) {
      answer.push(data / 2);
    } else if (data < 50 && data % 2 === 1) {
      answer.push(data * 2);
    } else {
      answer.push(data);
    }
  });
  return answer;
}
