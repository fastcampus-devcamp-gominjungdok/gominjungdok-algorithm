// 문제 접근 1- 시간 초과 실패
// 1. 손님 당 배열 하나씩 만들고 전체 손님 배열로 감싼다.
// 2. 손님의 순서대로 목록 값과 주어진 초밥의 값을 비교해서 일치하면 해당 요소를 빼고 순회를 멈춘다.
// 3. 이때 shift를 실행할 때 각 손님이 먹은 초밥의 개수를 ++한다.
// 시간복잡도: 곡 수 n => O(n log n)

// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");
// let answer = new Array(Number(input[0].split(" ")[0])).fill(0);
// let customersArr = [];
// let sushiArr = input[input.length - 1].split(" ");

// for (let i = 0; i < Number(input[0].split(" ")[0]); i++) {
//   customersArr.push(input[i+1].split(" ").slice(1));
// }

// for (let i = 0; i < sushiArr.length; i++) {
//   for (let j = 0; j < customersArr.length; j++) {
//     let sushiNum = customersArr[j].indexOf(sushiArr[i]);
//     if (sushiNum != -1) {
//       customersArr[j].splice(customersArr[j].indexOf(sushiArr[i]), 1);
//       answer[j]++;
//       break;
//     }
//   }
// }

// console.log(answer.join(' '))



// 문제 접근 2
// 1. 위의 방법으로 하니 시간 초과가 떠서 시간을 줄일 수 있는 방법을 생각했다.
// 2. indexOf, splice가 시간복잡도가 커서 set을 사용해봤다.

// const fs = require('fs');
// const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
// const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");
// const customerCount = Number(input[0].split(" ")[0]);
// const sushiCount = Number(input[0].split(" ")[1]);
// let orderList = new Array(sushiCount).fill(null).map(() => []);
// let answer = new Array(customerCount).fill(0);

// for (let i = 0; i < customerCount; i++) { // i = customerIdx
//   const customerOrder = input[i+1].split(" ").slice(1);

//   for (let j = 0; j < customerOrder.length; j++) {
//     const sushiIdx = Number(customerOrder[j]) - 1;
//     if (sushiIdx >= 0 && sushiIdx < sushiCount) {
//       orderList[sushiIdx].push(i);
//     }
//   }
// }

// for (let i = 0; i < orderList.length; i++) {
//   if (orderList[i].length != 0) {
//     answer[orderList[i][0]]++;
//   }
// }

// console.log(answer.join(' '))



// 문제 접근 3
// 1. 위의 풀이가 틀렸다고 해서 왜 그럴까 생각해보니, 다음 두 가지를 고려하지 못했다는 것을 깨달았다.
// 1-1. 주어진 초밥의 종류에 없는 초밥의 종류를 손님이 원하는 경우가 있다.
// 1-2. 같은 종류의 초밥이 여러번 만들어질 수 있다.
// 3. 따라서 orderList를 초밥의 값을 key로 하고 원하는 손님의 index 순 배열을 value로 하는 map 형식으로 만들고
//    손님은 같은 초밥을 한 번만 먹을 수 있기 때문에 초밥을 먹은 손님은 ++ 후 orderList에서 제외했다.
// 시간복잡도 : 고객의 수 n, 초밥의 수 m => O(N * M)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");
const customerCount = Number(input[0].split(" ")[0]);
const sushiCount = Number(input[0].split(" ")[1]);
const sushiList = input[input.length - 1].split(" ");
let orderList = new Map();
let answer = new Array(customerCount).fill(0);

for (let i = 0; i < customerCount; i++) { // i = customerIdx
  const customerOrder = input[i+1].split(" ").slice(1);

  for (let j = 0; j < customerOrder.length; j++) {
    const sushi = customerOrder[j];
    if (orderList.has(sushi)) {
      orderList.get(sushi).push(i);
    } else {
      orderList.set(sushi, [i]);
    }
  }
}
for (let i = 0; i < sushiCount; i++) {
  const sushi = sushiList[i];
  if (orderList.has(sushi)) {
    const customers = orderList.get(sushi);
    if (customers.length > 0) {
      const firstCustomer = customers.shift();
      answer[firstCustomer]++;
    }
  }
}

console.log(answer.join(' '))