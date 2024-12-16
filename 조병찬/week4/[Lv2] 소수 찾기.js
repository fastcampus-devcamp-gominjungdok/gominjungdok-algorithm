// 접근 방법
// 1. 소수인지 판별하기 위해 함수를 만든다.
// 2. 모든 경로를 완전탐색하기 위해서 dfs를 사용한다.
// 3. dfs 함수에서 판단할 때 소수이면 result에 추가한다.
// 4. 방문한 노드는 visited 배열을 통해 관리한다.
// 5. 방문한 노드의 숫자와 순회하고자 하는 숫자를 이어붙여 dfs 호출
// 6. visited[i] = 0으로 초기화하는 이유는 다른 경로에서도 사용할 수 있도록 하기 위함이다. (백트래킹)
// 7. result의 size를 반환한다.

function solution(numbers) {
  const visited = new Array(numbers.length).fill(0);
  const result = new Set();

  const dfs = (number, count) => {
    if (isPrime(Number(number)) && count > 0) {
      result.add(Number(number));
    }
    for (let i = 0; i < numbers.length; i++) {
      if (!visited[i]) {
        visited[i] = 1;
        dfs(number + numbers[i], count + 1);
        visited[i] = 0;
      }
    }
  };

  dfs("", 0);

  return result.size;
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}
