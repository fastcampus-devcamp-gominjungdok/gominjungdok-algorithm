// 문제 접근
// 1. 테스트 케이스 기준으로 입력값을 나눠 생각한다.
// 2. 정수 배열을 순서대로 A, B라고 할 때, A의 매 요소마다 B의 요소 중 가장 가까운 요소를 찾는다.
// 3. 위에서 찾은 요소를 바탕으로 C를 만들어 결과값 배열에 넣는다.
// 시간복잡도: => O(totalCaseCount×(AlogB+BlogB))

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
let answer = [];

const totalCaseCount = Number(input[0]);

const getCaseArray = (caseNumber) => {
  const caseStartIndex = (caseNumber - 1) * 3 + 1
  return input.slice(caseStartIndex, caseStartIndex + 3);
}

const getCArraySum = (caseArr) => {
  let cArrSum = 0;
  const aArr = caseArr[1].split(' ').map(Number);
  const bArr = caseArr[2].split(' ').map(Number).sort((a, b) => a - b);

  for (let i = 0; i<aArr.length; i++) {
    cArrSum += findClosest(aArr[i], bArr);
  }

  return cArrSum;
}

function findClosest(aNum, bArr) {
  let left = 0;
  let right = bArr.length - 1;

  if (aNum <= bArr[left]) return bArr[left];
  if (aNum >= bArr[right]) return bArr[right];

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (bArr[mid] === aNum) return bArr[mid];

    if (aNum < bArr[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (Math.abs(bArr[left] - aNum) < Math.abs(bArr[right] - aNum)) {
    return bArr[left]
  } else {
    return bArr[right]
  }
}

const getAnswer = () => {
  for (let i = 0; i<totalCaseCount; i++) {
    answer.push(getCArraySum(getCaseArray(i + 1)));
  }

  console.log(answer.join('\n'));
}

getAnswer();