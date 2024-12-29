// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181870
// 문제 접근
// includes() 메소드를 사용해서 풀기

// 기존 풀이
function solution(strArr) {
    let newArr = [];
    strArr.forEach((data) => {
        let isInAd = data.includes('ad');
        
        if(!isInAd) newArr.push(data);
    })
}

// 리팩토링 한 풀이
function solution(strArr) {
    return strArr.filter((data) => {
        return !data.includes('ad');
    })
}