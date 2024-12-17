// 풀이 1
// 문제 접근
// 1. 모든 가능한 단어를 DFS로 미리 탐색하여 사전을 구성
// 2. 주어진 word의 순서를 찾아 반환
// 시간복잡도: O(1) 

let answer = {};
let idx = 0;
let arr = ['A', 'E', 'I', 'O', 'U'];

const dfs = (now) => {
    if(now.length > 5) return;
    
    answer[now] = idx++;
    
    for(let i = 0; i < 5; i++){
        let next = now + arr[i];
        dfs(next);
    }
}

function solution(word) {
    dfs('');
    return answer[word];
}

// 풀이 2
// 문제 접근
// 1. 각 자리가 정해지면 뒤에 올 수 있는 글자의 경우의 수가 정해진다.
// 2. 각 자리마다 다음에 올 수 있는 경우의 수를 더하면 word의 순서를 알 수 있다.
// 시간복잡도: O(1) 
function solution(word) {
  return [...word].reduce((acc, c, i) => acc + 'AEIOU'.indexOf(c) * Math.floor(781/5**i) + 1, 0);
}