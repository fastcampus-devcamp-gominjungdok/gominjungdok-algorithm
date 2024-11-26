// 인수로 받은 skill_trees의 각 아이템들을 분리해서 스킬트리들의 문자열의 순서에 맞게
// indexOf로 각각의 필요한 문자열들의 index 번호를 확인한 뒤에 이를 > 혹은 < 연산자를 통해
// 찾아내는 방법일까 고민을 했습니다.

function solution(skill, skill_trees) {
  var answer = -1;
  let skillarr = [];
  for (let i = 0; i < skill.length; i++) {
    skillarr.push(skill[i]);
  }

  //   skill_trees.forEach((item) => {
  //     for(let i = 0; i < item.length; i++) {

  //     }
  //   })
  console.log(skillarr);
  return answer;
}
