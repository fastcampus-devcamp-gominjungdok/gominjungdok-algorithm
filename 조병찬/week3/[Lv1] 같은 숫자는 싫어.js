// 문제 접근
// 1. filter를 통해 arr의 요소와 다음 요소가 같지 않은 경우만 반환한다.

function solution(arr) {
  return arr.filter((element, index) => element !== arr[index + 1]);
}
