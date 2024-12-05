// 문제 접근
// 1. arr을 filter로 순회하며 다음 요소와 같으면 제외
// 시간 복잡도 O(n)

function solution(arr) {
  return arr.filter((v,i)=>v!==arr[i+1]);
}

