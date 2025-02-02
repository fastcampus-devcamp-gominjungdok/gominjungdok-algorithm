// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181872
// 문제 접근
// 1. indexOf를 사용해서 index를 찾은 후 slice() 메소드로 분리

// 최초 코드
// indexOf로 pat의 마지막까지 찾아내야 하는 단점이 있음
function solution(myString, pat) {
    const a = myString.indexOf(pat);
    const b = pat.length;
    const c = myString.slice(0, a + b);
    
    return c;
}

// 최종 코드
function solution(myString, pat) {
    const a = myString.lastIndexOf(pat); // `lastIndexOf` 사용
    const b = pat.length;
    const c = myString.slice(0, a + b);
    
    return c;
}