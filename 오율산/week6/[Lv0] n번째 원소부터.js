// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181892
// 문제 접근
// 1. splice() 혹은 slice() 메소드를 사용

function solution(num_list, n) {
    return num_list.slice(n - 1);
}