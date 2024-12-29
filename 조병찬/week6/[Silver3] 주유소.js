// 문제 접근
// 1. 리터 당 최소 가격을 최솟값으로 초기화
// 2. 반복문을 순회하며 최솟값보다 작은 값이 나오면 최솟값을 갱신
// 3. 최솟값 * 거리를 더한 값을 반환
// 4. BigInt로 반환해야 하는 이유는 리터당 가격이 10억 이하이기 때문에 최대 10억 * 10억이 되어 오버플로우가 발생할 수 있음

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

const pathLength = input[1].split(" ").map(Number);
const pricePerLiter = input[2].split(" ").map(Number);

function solution(pathLength, pricePerLiter) {
  let minPrice = pricePerLiter[0];
  let totalPrice = BigInt(0);

  for (let i = 0; i < pathLength.length; i++) {
    if (minPrice > pricePerLiter[i]) {
      minPrice = pricePerLiter[i];
    }
    totalPrice += BigInt(minPrice) * BigInt(pathLength[i]);
  }

  return totalPrice.toString();
}

console.log(solution(pathLength, pricePerLiter));
