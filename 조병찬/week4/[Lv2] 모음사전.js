// 접근 방법
// 1. 모든 사전을 완전탐색하기 위해 dfs를 사용한다.
// 2. dfs 함수에서 길이가 5이하일 때까지 반복하면서 사전에 있는 문자를 추가한다.
// 3. 초기화를 해주고 word의 인덱스를 반환한다.

function solution(word) {
  const dictionary = ["A", "E", "I", "O", "U"];
  const answer = [];

  const dfs = (alphabet, length) => {
    if (length <= 5) {
      answer.push(alphabet);
      for (let i = 0; i < dictionary.length; i++) {
        dfs(alphabet + dictionary[i], length + 1);
      }
    }
  };

  dfs("", 0);

  return answer.indexOf(word);
}
