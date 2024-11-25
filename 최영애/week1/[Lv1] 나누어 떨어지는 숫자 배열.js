// 문제 접근
// 1. arr 요소 중 divisor로 나누어 떨어지는 요소를 결과값 배열에 모은다.
// 2. 위에 해당하는 요소가 있으면 오름차순으로 정렬하고 없으면 -1을 넣는다.
// 3. 결과값 배열을 반환한다.
// 시간복잡도: map(), sort() => O(nlogn)

function solution(arr, divisor) {
       
  var answer = [];
  
  arr.map((el) => {
      if (el % divisor === 0) {
          answer.push(el);
      }
  })
  
  if (answer.length > 0) {
      answer.sort((a, b) => a - b);
  } else {
      answer.push(-1);
  }
  
  return answer;
}