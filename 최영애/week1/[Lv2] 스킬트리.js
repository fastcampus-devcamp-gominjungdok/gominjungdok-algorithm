// 문제 접근
// 1. skill_trees의 스킬이 skill에서 몇번째 인덱스에 해당하는지 파악한다.
// 2. skill에 없는 스킬이라면 무시하고, skill에 존재하는 skill_trees의 스킬에 대해서만 생각한다.
// 3. skill 기준 0번째 스킬과 0번째 스킬이 아니고 n-1번째도 존재하는 n번째 스킬이 skill_trees에 존재하는지 파악한다.
// 4. 파악된 스킬들의 인덱스에 대해 0부터 시작하는 오름차순 정렬이 맞는지 확인한다.
// 시간복잡도: n : skill_trees의 길이, m : 각 skillTree의 최대 길이 => O(n * m^2)

function solution(skill, skill_trees) {
  var answer = 0;

  skill_trees.forEach((skillTree) => {
    let skillArr = [];

    for (let i = 0; i < skillTree.length; i++) {
      let index = skill.indexOf(skillTree[i]);
      if (index !== -1) {
        skillArr.push(index);
      }
    }

    if (skillArr.length === 0) {
      answer++;
    }
    
    if (skillArr.includes(0)) {
      let isValid = true;
      for (let i = 0; i < skillArr.length - 1; i++) {
        if (skillArr[i] >= skillArr[i + 1] || skillArr[i + 1] !== skillArr[i] + 1) {
          isValid = false;
        }
      }

      if (isValid) {
        answer++;
      }
    }
    
  })
  return answer;
}
