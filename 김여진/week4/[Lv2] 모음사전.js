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