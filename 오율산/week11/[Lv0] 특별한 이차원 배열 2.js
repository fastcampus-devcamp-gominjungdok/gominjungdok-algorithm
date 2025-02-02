// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181831
// 문제 접근
// 1. 기본적으로 return 값은 1이라고 가정
// 2. arr[i][j]와 arr[j][i]가 같지 않다면 곧바로 0을 return

function solution(arr) {
    let answer = 1;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i][j] !== arr[j][i]) { 
                return 0;
            }
        }
    }

    return answer;
}
