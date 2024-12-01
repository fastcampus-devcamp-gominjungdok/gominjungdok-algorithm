// 문제 접근
// 1. h는 주어진 배열의 요소 중 가장 큰 수보다 작거나 같다.
// 2. 주어진 배열의 가장 큰 값에서 시작해서 h 이상인 수가 h개 이상이고 나머지는 h번 이하인 수를 찾는다.
// 시간복잡도: descArr[0] 값 k, citations 길이 n => O(k * n)

function solution(citations) {
  let answer = 0;
  let descArr = citations.sort((a, b) => b-a);

  for (let i=descArr[0]; i>0; i--) {
    let countBigger = 0;
    let countSmaller = 0;
    let countSame = 0;
    for (let j=0; j<citations.length; j++) {
      if (citations[j] === i) countSame++
      else if (citations[j] > i) countBigger++;
      else if (citations[j] < i) countSmaller++;
    }

    if ((countSame + countBigger) >= i && (countSame + countSmaller) <= i) {
      answer = i;
      break;
    }
  }

  return answer;
}
