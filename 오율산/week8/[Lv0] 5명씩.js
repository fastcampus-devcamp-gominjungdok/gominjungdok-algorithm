// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181886
// 문제 접근
// 1. 처음에는 for문을 돌면서 5명씩 끊어서 해당 인덱스에 존재하는 데이터를 뽑아내야 하나 생각함
// 2. 문제를 읽으면서 곰곰히 생각해보니 단순히 5의 배수만 뽑아내면 될 것 같아서 아래와 같이 코드 작성

function solution(names) {
  return names.filter((_, i) => i % 5 === 0);
}
