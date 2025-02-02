// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181921
// 문제 접근
// 1. 반복문을 통해 l부터 r까지의 수까지 모두 반복
// 2. String()을 통해 i를 문자열로 바꾼 후 every() 메소드를 통해 '0'과 '5'를 모두 포함하는지 확인

function solution(l, r) {
    let answer = [];
    
    for(let i = l; i <= r; i++) {
        if ([...String(i)].every(num => num === '0' || num === '5')) {
            answer.push(i);
        }
    }
    
    return answer.length ? answer : [-1];
}