// 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/181834
// 문제 접근
// 1. a-k까지의 알파벳들을 배열에 담아서 includes() 메소드로 있는지 확인 후 있다면 l을 넣고 아니라면 해당 문자를 넣음

function solution(myString) {
    let newStr = '';
    let alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    
    for(str of myString) {
        if(alphabets.includes(str)) {
            newStr += 'l';
        } else {
            newStr += str;
        }
    }
    
    return newStr;
}