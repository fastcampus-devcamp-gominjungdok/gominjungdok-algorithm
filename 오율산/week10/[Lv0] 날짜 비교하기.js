// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181838?language=javascript
// 접근 방법
// 1. 배열을 순회하며 각 원소들의 크기를 비교한 후 answer에 저장

// 실패 코드
// 사유: forEach는 return을 만나도 계속해서 반복을 진행한다고 합니다. 그 이유로 return 값이 계속 변경될 수 있어서 원하는 값이 반환되지 않을 수도 있습니다.
function solution(date1, date2) {
  let answer = 0;
  date1.forEach((data, i) => {
    if (data < date2[i]) {
      answer = 1;
    } else {
      answer = 0;
    }
  });

  return answer;
}

// 성공 코드
function solution(date1, date2) {
  for (let i = 0; i < date1.length; i++) {
    if (date1[i] < date2[i]) {
      return 1;
    } else if (date1[i] > date2[i]) {
      return 0;
    }
  }
  return 0;
}
