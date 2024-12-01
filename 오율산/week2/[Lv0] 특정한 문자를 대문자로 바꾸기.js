/*
    문제: 영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.
    제한사항:
      - 1 ≤ my_string의 길이 ≤ 1,000
*/
// 문제 접근
// 1. 반복문으로 my_string의 index를 비교하면서 해야할 지 고민하다가 문자열 메소드를 한번 쭉 살펴봤습니다
// 2. replace() 메소드를 이용해서 문자를 찾아서 바꿔주는 것으로 사용했습니다.
// 3. 그리고 alp를 toUpperCase()를 이용해 대문자로 치환해줬습니다.
// 4. 문제 제출 했는데 실패해서 다시 살펴보니 문제에서 '모든 글자'를 바꾸라고 한 것을 보고 replaceAll() 메소드로 바꿔서 사용했습니다.

// 첫 번째 실패 풀이
function solution(my_string, alp) {
  return my_string.replace(alp, alp.toUpperCase());
}

// 성공 풀이
function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}
