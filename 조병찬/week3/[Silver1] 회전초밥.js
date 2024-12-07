// 문제 접근 1 (시간 초과)
// 1. remainSushi 객체에 필요로 하는 개수와 종류를 저장한다.
// 2. customerCount 배열에 손님이 먹은 초밥의 개수를 저장한다.
// 3. remainSushi를 순회하며 먹을 수 있다면 업데이트한다.
// 4. 손님이 먹은 초밥의 개수를 answer에 저장해 순회하며 반환한다.

// 입력 부분 코드 생략
// function solution(customer, sushi) {
//   let answer = [];
//   let remainSushi = {};
//   let customerCount = Array.from({ length: N + 1 }, () => 0);

//   for (let i = 0; i < customer.length; i++) {
//     remainSushi[i + 1] = {
//       need: customer[i][0],
//       types: customer[i].slice(1),
//     };
//   }

//   for (let sushiType of sushi) {
//     for (let i = 1; i <= N; i++) {
//       if (remainSushi[i].need > 0 && remainSushi[i].types.includes(sushiType)) {
//         remainSushi[i].need--;
//         remainSushi[i].types.splice(remainSushi[i].types.indexOf(sushiType), 1);
//         customerCount[i]++;
//         break;
//       }
//     }
//   }

//   for (let i = 1; i <= N; i++) {
//     answer.push(customerCount[i]);
//   }

//   return answer.join(" ");
// }

// console.log(solution(customer, sushi));

// 문제 접근 2 (시간 초과)
// 위 접근 방법에 Set을 사용하여 시간을 줄이려고 했으나 시간 초과 발생함.

// 입력 부분 코드 생략
// function solution(customer, sushi) {
//   let remainSushi = {};
//   let customerCount = Array.from({ length: N + 1 }, () => 0);

//   for (let i = 0; i < customer.length; i++) {
//     remainSushi[i + 1] = {
//       need: customer[i][0],
//       types: new Set(customer[i].slice(1)),
//     };
//   }

//   for (let sushiType of sushi) {
//     for (let i = 1; i <= N; i++) {
//       if (remainSushi[i].need > 0 && remainSushi[i].types.has(sushiType)) {
//         remainSushi[i].need--;
//         remainSushi[i].types.delete(sushiType);
//         customerCount[i]++;
//         break;
//       }
//     }
//   }

//   return customerCount.slice(1).join(" ");
// }

// console.log(solution(customer, sushi));

// 문제 접근 3 (시간 초과로 고통스러워 결국 찾아봄)
// 1. 입력 케이스를 프로그래머스처럼 세팅함.
// 2. 손님들이 먹은 초밥의 개수를 저장할 배열 customerCount를 만든다.
// 3. 손님이 먹은 초밥의 종류를 저장할 배열 eaten을 만든다.
// 4. 손님이 먹은 초밥의 종류를 저장할 Set을 만든다. -> 하나만 먹을 수 있기 때문
// 5. 초밥 종류에 따른 손님들의 목록을 저장할 Map을 만든다.
// 6. 초밥 종류별로 손님을 매핑한다.
// 7. 손님이 먹을 수 있는 초밥을 찾아서 customerCount와 eaten을 업데이트한다.

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
let index = 1;
const customer = [];

for (let i = 0; i < N; i++) {
  customer.push(input[index].split(" ").map(Number));
  index++;
}

const sushi = input[index].split(" ").map(Number);

function solution(customer, sushi) {
  const customerCount = Array(N).fill(0); // 손님이 먹은 초밥의 개수
  const eaten = Array(N)
    .fill()
    .map(() => new Set()); // 손님이 먹은 초밥의 종류
  const sushiToCustomers = new Map(); // 초밥 종류에 따른 손님들의 목록

  // 초밥 종류별 고객 매핑
  for (let i = 0; i < N; i++) {
    const types = customer[i].slice(1);
    for (const type of types) {
      if (!sushiToCustomers.has(type)) {
        sushiToCustomers.set(type, []);
      }
      sushiToCustomers.get(type).push(i);
    }
  }

  for (const sushiType of sushi) {
    if (!sushiToCustomers.has(sushiType)) continue;

    const canEatCustomers = sushiToCustomers.get(sushiType);

    for (const customerIdx of canEatCustomers) {
      if (!eaten[customerIdx].has(sushiType)) {
        customerCount[customerIdx]++;
        eaten[customerIdx].add(sushiType);
        break;
      }
    }
  }

  return customerCount.join(" ");
}

console.log(solution(customer, sushi));
