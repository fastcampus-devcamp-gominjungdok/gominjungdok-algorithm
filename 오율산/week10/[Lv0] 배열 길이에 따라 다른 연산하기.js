// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181854
// 문제 접근
// 1. map() 메소드를 이용해서 값을 변경 후 리턴

function solution(arr, n) {
  return arr.map((value, index) => {
    if (arr.length % 2 === 1 && index % 2 === 0) {
      return value + n;
    }

    if (arr.length % 2 === 0 && index % 2 === 1) {
      return value + n;
    }

    return value;
  });
}
