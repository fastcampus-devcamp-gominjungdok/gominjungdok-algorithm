// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181867
// 문제 접근
// 1. 문자열을 split() 메소드뤄 나눠서 배열로 변환
// 해당 배열을 forEach문으로 돌면서 data의 길이를 반환한 것을 newArr에 담아서 return

function solution(myString) {
    let arr = myString.split('x');
    let newArr = [];
    arr.forEach(data => newArr.push(data.length))
    return newArr;
}