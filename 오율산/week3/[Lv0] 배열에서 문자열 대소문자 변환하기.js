/*
  문제: 문자열 배열 strArr가 주어집니다. 모든 원소가 알파벳으로만 이루어져 있을 때, 배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

  제한 사항:
  - 1 ≤ strArr ≤ 20
    * 1 ≤ strArr의 원소의 길이 ≤ 20
    * strArr의 원소는 알파벳으로 이루어진 문자열 입니다.
*/

// 접근 방법
// 1. 매개변수로 들어오는 배열을 순회
// 2. 이를 map() 메소드를 통해 특정 조건에 따라 대문자 혹은 소문자 데이터로 수정

function solution(strArr) {
  return strArr.map((data, i) => {
    if (i % 2 === 0) {
      return data.toLowerCase();
    } else {
      return data.toUpperCase();
    }
  });
}
