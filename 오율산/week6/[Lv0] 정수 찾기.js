// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181840
// 문제 접근
// 1. num_list가 배열이기 때문에 includes() 메소드를 사용한다.

// 실패한 접근
// 1. 후에 다시 시도했을 때 앞에 return문을 붙여줘야 하는군요
function solution(num_list, n) {
    num_list.includes(0) ? 1 : 0;
}

// 성공한 접근
function solution(num_list, n) {
    if (num_list.includes(n)) {
        return 1;
    } else {
        return 0;
    }
}