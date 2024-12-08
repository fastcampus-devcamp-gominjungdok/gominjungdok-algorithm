/*
  문제: 문자열 myString이 주어집니다. myString에서 알파벳 "a"가 등장하면 전부 "A"로 변환하고, "A"가 아닌 모든 대문자 알파벳은 소문자 알파벳으로 변환하여 return 하는 solution 함수를 완성하세요.

  제한 사항:
  - 1 ≤ myString의 길이 ≤ 20
    * myString은 알파벳으로 이루어진 문자열입니다.
*/

// 문제 접근
// 1. 모든 알파벳을 소문자로 미리 만든 후 소문자 a를 대문자 A로 변환

function solution(myString) {
  var answer = "";
  answer += myString.toLowerCase();
  answer = answer.replaceAll("a", "A");

  return answer;
}
