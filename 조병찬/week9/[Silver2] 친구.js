// 문제 접근
// 1. 친구 관계를 나타내는 graph를 초기화
// 2. 친구 관계를 graph에 담음
// 3. 2-친구를 담아야함
// 4. 2-친구에 담을 때 직접 친구를 추가하고, 친구의 친구도 추가함
// 5. 2-친구를 담은 사이즈와 answer를 비교해 큰 값을 담음

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const N = parseInt(input[0]);
const friendArr = input.slice(1).map((v) => v.split("\r").join(""));

function solution(N, friendArr) {
  let answer = 0;
  const graph = Array.from({ length: N }, () => []);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (friendArr[i][j] === "Y") graph[i].push(j);
    }
  }

  for (let i = 0; i < N; i++) {
    let twoFriends = new Set();

    for (let friend of graph[i]) {
      twoFriends.add(friend);

      for (let friendOfFriend of graph[friend]) {
        if (friendOfFriend !== i) {
          twoFriends.add(friendOfFriend);
        }
      }
    }

    answer = Math.max(answer, twoFriends.size);
  }

  return answer;
}

console.log(solution(N, friendArr));
