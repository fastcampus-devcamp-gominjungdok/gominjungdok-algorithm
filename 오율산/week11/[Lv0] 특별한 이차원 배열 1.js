// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181833?language=javascript
// 문제 접근
// 1. 이차원 배열을 생성하는 방법을 배웠습니다.

function solution(n) {
    let answer = [];

    for (let i = 0; i < n; i++) {
        answer[i] = []; // 각 행을 초기화

        for (let j = 0; j < n; j++) {
            answer[i][j] = i === j ? 1 : 0;
        }
    }

    return answer;
}