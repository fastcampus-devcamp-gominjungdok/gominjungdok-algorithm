/*
    문제: 오늘 해야 할 일이 담긴 문자열 배열 todo_list와 각각의 일을 지금 마쳤는지를 나타내는 boolean 배열 finished가 매개변수로 주어질 때, todo_list에서 아직 마치지 못한 일들을 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.

    제한 사항:
      - 1 ≤ todo_list의 길이 1 ≤ 100
      - 2 ≤ todo_list의 원소의 길이 ≤ 20
          * todo_list의 원소는 영소문자로만 이루어져 있습니다.
          * todo_list의 원소는 모두 서로 다릅니다.
      - finished[i]는 true 또는 false이고 true는 todo_list[i]를 마쳤음을, false는 아직 마치지 못했음을 나타냅니다.
      - 아직 마치지 못한 일이 적어도 하나 있습니다.
*/
// 문제 접근
// 1. todo_list 배열을 순회하기 위해 forEach() 메소드를 사용
// 2. forEach()의 두 번째 매개변수인 index를 활용해서 순회중인 todo_list의 index와 동일한 finished의 index 요소를 뽑아내서 검사

// 첫 번째 실패 풀이
// 문제를 제대로 안 읽었습니다... 마치지 못한 일들을 담으라 했는데 마친걸 담아버렸군요 반성합니다
function solution(todo_list, finished) {
  const array = [];
  todo_list.forEach((_data, index) => {
    if (finished[index]) {
      array.push(todo_list[index]);
    }
  });

  return array;
}

// 성공 풀이
function solution(todo_list, finished) {
  const array = [];
  todo_list.forEach((_data, index) => {
    if (finished[index]) {
      array.push(todo_list[index]);
    }
  });

  return array;
}
