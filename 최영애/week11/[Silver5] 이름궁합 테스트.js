// 문제 접근
// 1. 두 이름의 길이를 비교하여 더 짧은 것의 길이만큼 번갈아가며 이름배열에 집어넣는다.
// 2. 그리고 더 긴 것의 남은 이름을 배열에 집어넣는다.
// 3. 문제에서 주어진 문자:수 쌍에 대입하여 값을 계산한다.
// 4. 계산된 값이 한자리 수일 경우 01과 같이 출력되는 것을 막기 위해 숫자로 계산한 후 뒤에 % 기호를 붙여 반환한다.
// 시간복잡도 : O(N)

const fs = require('fs');
const filePath = process.platform === "linux" ? "/dev/stdin" : "example.txt";
const input = fs.readFileSync(filePath).toString().replace(/\r/g, "").trim().split("\n");

const getAnswer = (input) => {
	const [aNameLength, bNameLength] = input[0].split(' ').map(Number);
	const [aName, bName] = input[1].split(' ');
	const minLength = Math.min(aNameLength, bNameLength);
	const maxLength = Math.max(aNameLength, bNameLength);
	const nameArr = new Array();
	
	for (let i = 0; i < minLength; i++) {
		nameArr.push(aName[i]);
		nameArr.push(bName[i]);
	}

	for (let i = minLength; i < maxLength; i++) {
    nameArr.push(aNameLength > bNameLength ? aName[i] : bName[i]);
}

	let nameStrokes = nameArr.map((name) => strokeCount[name]);

	while (nameStrokes.length > 2) {
		let temp = new Array();
		for (let i = 0; i < nameStrokes.length - 1; i++) {
			temp.push((nameStrokes[i] + nameStrokes[i + 1]) % 10);
		}
		nameStrokes = temp;
	}

  console.log((nameStrokes[0] * 10 + nameStrokes[1]) + '%');
}

const strokeCount = {
  A: 3,
  B: 2,
  C: 1,
  D: 2,
  E: 4,
  F: 3,
  G: 1,
  H: 3,
  I: 1,
  J: 1,
  K: 3,
  L: 1,
  M: 3,
  N: 2,
  O: 1,
  P: 2,
  Q: 2,
  R: 2,
  S: 1,
  T: 2,
  U: 1,
  V: 1,
  W: 2,
  X: 2,
  Y: 2,
  Z: 1,
};

getAnswer(input)