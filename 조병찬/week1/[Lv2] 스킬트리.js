// 문제 접근
// 1. skill_trees 배열에서 각 요소를 순회하며 skills 배열에 포함된 요소만 추출한다.
// 2. 추출한 요소를 순서대로 temp 배열에 저장한다.
// 3. temp 배열의 요소와 skills 배열의 요소를 비교하여 순서가 같은지 확인한다.
// 4. 순서가 같다면 result를 증가시킨다.
// 5. result를 반환한다.
// 시간복잡도: O(n^2)

function solution(skill, skill_trees) {
  let result = 0;

  const skills = skill.split("");

  for (let skillTree of skill_trees) {
    const temp = [];
    let isValid = true;

    for (let st of skillTree) {
      if (skills.includes(st)) {
        temp.push(st);
      }
    }

    for (let i = 0; i < temp.length; i++) {
      if (temp[i] !== skills[i]) {
        isValid = false;
        break;
      }
    }

    if (isValid) result++;
  }

  return result;
}
