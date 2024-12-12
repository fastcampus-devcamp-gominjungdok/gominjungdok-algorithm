// 문제 접근 1
// 1. 가지고 있는 카드를 순서대로 정렬한다.
// 2. 주어진 카드들의 순서대로 상근이가 갖고있는 카드의 배열과 비교한다.
// 3. 존재하면 1, 없으면 0을 정답 배열에 넣는다.
// 시간복잡도 : 상근이가 갖고 있는 카드 수 N, 주어진 카드 수 M => O(NlogN+MlogN)


const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");
let answer = [];

const searchBinary = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (arr[mid] === target) {
          return 1;
      } else if (arr[mid] < target) {
          left = mid + 1;
      } else {
          right = mid - 1;
      }
  }

  return 0;
}

const arr = input[1].split(" ").map(Number).sort((a, b) => a - b)
const targetArr = input[3].split(" ").map(Number);

for (let i = 0; i<targetArr.length; i++) {
  answer.push(searchBinary(arr, targetArr[i]))
}

console.log(answer.join(' '))