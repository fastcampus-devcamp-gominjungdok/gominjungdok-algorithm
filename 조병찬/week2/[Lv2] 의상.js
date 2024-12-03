// 접근방법
// 1. 의상의 종류를 key로, 의상의 개수를 value로 하는 객체를 만든다.
// 2. 의상의 종류에 따른 의상의 개수를 곱한 후, 모든 의상을 입지 않은 경우를 빼준다.
// 3. 모든 의상을 입지 않는 경우는 없으므로 1을 빼준다.

function solution(clothes) {
  let answer = 1;
  const clothesType = {};

  for (let cloth of clothes) {
    clothesType[cloth[1]] = (clothesType[cloth[1]] || 0) + 1;
  }

  Object.values(clothesType).forEach((value) => {
    answer *= value + 1;
  });

  return answer - 1;
}
