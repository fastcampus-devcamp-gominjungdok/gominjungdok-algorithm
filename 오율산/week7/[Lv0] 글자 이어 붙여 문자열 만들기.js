// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181915
// 문제 접근
// 1. index_list에 index가 담겨 있어서 이를 map() 메소드를 이용해서 각 index에 맞는 문자열을 추출
// 2. 이를 문자열로 변환

// 최초 코드
let arr = index_list.map((data) => my_string[data]);
let str = "";
arr.forEach((data) => (str += data));

return str;

// 리팩토링 코드
function solution(my_string, index_list) {
  return index_list.map((data) => my_string[data]).join("");
}
