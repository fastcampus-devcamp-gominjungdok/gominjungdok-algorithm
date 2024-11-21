// 문제 접근
// 1. skill_trees의 요소에서 skill에 있는 것만 필터링 
// 2. 그것이 skill의 시작과 동일한지 검사해 같으면 count
// 시간 복잡도 O(m*n) - skill_trees길이 m * 각 요소의 길이 n

function solution(skill, skill_trees){
  let answer = 0;

  for (const tree of skill_trees){
    const fillteredTree = [...tree].filter(c=>skill.includes(c)).join('');
    if(fillteredTree===skill.slice(0,fillteredTree.length)) answer++;
  }
   
  return answer;
}