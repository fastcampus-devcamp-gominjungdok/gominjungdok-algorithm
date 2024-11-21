// 문제 접근
// 1. 각 셀은 행인덱스+1,열인덱스+1 중 최댓값으로 결정됨 
// 2. 일차원 배열의 인덱스 left, rignt를 변환하면 각 셀의 값은 max(Math.floor(left/n)+1,left%n+1)
// 3. left~right까지 1씩 증가시키며 각 셀 계산해 배열에 넣으면 됨
// 시간 복잡도 O(right - left + 1) - 배열의 길이만큼 계산

function solution(n, left, right) {
  return Array.from({length:right-left+1},(_,i)=>Math.max(Math.floor((left+i)/n), (left+i)%n+1));
}