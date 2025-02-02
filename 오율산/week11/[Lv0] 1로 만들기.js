// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181880
// 문제 접근
// 1. count를 변수로 만들어 특정 조건 이후 count 증가하게 한 후 반환

function solution(num_list) {
    let count = 0;

    for (let num of num_list) {
        while (num > 1) {
            if (num % 2 === 0) num /= 2; // 짝수인 경우 반으로 나누기
            else num = (num - 1) / 2; // 홀수인 경우 1 빼고 반으로 나누기
            count++; // 연산 횟수 증가
        }
    }

    return count;
}