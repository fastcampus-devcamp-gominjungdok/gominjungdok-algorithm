// 문제 접근
// 1. i와 직접 친구인 사람을 찾는다
// 2. i와 친구인 사람들의 친구를 찾는다
// 3. 가장 유명한 사람을 찾는다
// 시간 복잡도 O(N*N)

const fs = require('fs')
const filePath = process.platform === 'linux' ? '/dev/stdin' : './example.txt'
const input = fs.readFileSync(filePath).toString().trim().split('\n')

const N = Number(input[0])
const graph = input.slice(1).map(isFriends => isFriends.split(''))

const solution = () => {
  let maxFriends = 0;

  const friendsMap = Array(N).fill().map(() => new Set());

  for (let i = 0; i < N; i++) {

    for (let j = 0; j < N; j++) {
      if (graph[i][j] === 'Y') {
        friendsMap[i].add(j);
      }
    }

    const twoFriends = new Set(friendsMap[i]);
    for (const friend of friendsMap[i]) {
      for (const friendOfFriend of friendsMap[friend]) {
        if (friendOfFriend !== i) twoFriends.add(friendOfFriend);
      }
    }
    maxFriends = Math.max(maxFriends, twoFriends.size);
  }
  
  console.log(result); 
  
}

solution()