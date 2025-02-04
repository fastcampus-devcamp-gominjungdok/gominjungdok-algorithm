// 문제 접근
// 1. 주어진 input 값에 대하여 각 줄의 글자가 숫자인지를 먼저 판단한다.
// 2. 숫자라면 이를 임의의 변수에 담아 몇글자의 숫자로 이루어져있는지 알아낸다.
// 3. 이때 몇글자인지를 알아내는 기준은 다음 글자가 숫자가 아니거나 해당 줄이 끝났을 경우이다.
// 4. 알아낸 숫자들을 answer 배열에 넣고, 결과적으로 이를 반환할 때는 오름차순으로 정렬한다.
// 5. 한 줄의 최대 길이가 100이므로 100글자의 숫자가 올 수 있기 때문에 BigInt를 사용하고, 
//    sort는 Number 형식에만 적용할 수 있으므로 -1 1 0 을 결과값으로 하는 방식을 활용한다.
// 시간복잡도 : answer.length M, 각 문자열의 길이 중 최대값 L_max => O(N * L_max + M log M)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
	const N = Number(input[0]);
  const answer = [];
  
  for (let i = 1; i <= N; i++) {
    let cash = '';
    for (let j of input[i]) {
      if (!isNaN(j)) {
        cash += j;
      } else if (isNaN(j)) {
        if (cash.length > 0){
          answer.push(BigInt(cash));
        }
        cash = '';
      }
    }
    if (cash.length > 0){
      answer.push(BigInt(cash));
    }
  }

  answer.sort((a, b) => (a < b) ? -1 : ((a > b) ? 1 : 0));
  console.log(answer.join('\n').trim());
}

getAnswer(input)