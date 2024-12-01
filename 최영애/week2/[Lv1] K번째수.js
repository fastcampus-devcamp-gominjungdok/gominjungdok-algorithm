// 문제 접근
// 1. 주어진 commands의 요소에 따라 array 배열을 자른다.
// 2. 자른 배열을 오름차순으로 정렬한다.
// 3. 원하는 인덱스의 값을 answer에 넣는다.
// 시간복잡도: array 배열 길이 n, commands 배열 길이 m => O(m⋅nlogn)

function solution(array, commands) {
  let answer = [];
  
  commands.map((command) => {
    let newArray = array.slice(command[0] - 1, command[1])
    
    newArray.sort((a, b) => a-b);

    answer.push(newArray[command[2]-1]);
  })

  return answer;
}
