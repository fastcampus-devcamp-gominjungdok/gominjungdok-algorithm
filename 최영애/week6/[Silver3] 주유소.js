// 문제 접근
// 1. 우선 기름값을 첫 도시의 기름값으로 설정하고, 다음 도시의 기름값과 비교하여 더 싼 값을 기준 기름값으로 지정한다.
// 2. 1에서 지정한 기름값과 도시간 거리를 곱하여 총 비용에 더한다.
// 시간복잡도 : O(n)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
  let answer = BigInt(0);

  const cityCount = Number(input[0]);
  const cityDistance = input[1].split(" ").map(Number);
  const cityOilPrice = input[2].split(" ").map(Number);

  let cheaperPrice = cityOilPrice[0];
  for (i = 0; i < cityCount - 1; i++) {
    cheaperPrice = cityOilPrice[i] < cheaperPrice ? cityOilPrice[i] : cheaperPrice;
    answer += BigInt(cityDistance[i]) * BigInt(cheaperPrice);
  }

  return String(answer);
}

console.log(getAnswer(input));