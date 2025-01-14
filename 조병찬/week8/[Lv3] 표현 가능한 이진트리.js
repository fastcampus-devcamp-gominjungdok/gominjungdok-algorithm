// 문제 접근
// 1. 각 수를 이진수로 변환 했을 때 이진 탐색을 진행해 각자의 가운데 값이 비면 변환 불가능한거임.
// 2. 먼저 수를 이진수로 변환시킴
// 3. 높이가 n이면 이진수의 길이는 2^n - 1임.
// 4. 0을 앞에 붙여야하는 길이 만큼 binaryTree에 앞에 붙여줌.
// 5. 이진 탐색이 올바르면 1, 아니면 0을 answer에 push함.
// 6. 이진 탐색은 재귀적인 방법으로 진행함.
// 7. mid 값이 0이면 자식노드가 존재할 수 없음.

function solution(numbers) {
  const answer = [];
  for (let number of numbers) {
    let binaryNumber = number.toString(2); // 이진수 변환
    let binaryLength = binaryNumber.length; // 이진수 길이
    let height = binaryLength.toString(2).length; // 트리의 높이
    let binaryTree = "0".repeat(Math.pow(2, height) - 1 - binaryLength);

    binaryTree += binaryNumber;

    const isValid = checkBinaryTree(binaryTree);
    answer.push(isValid ? 1 : 0);
  }

  return answer;
}

function checkBinaryTree(tree) {
  if (tree.length === 1) return true;

  const mid = Math.floor(tree.length / 2);
  const left = tree.slice(0, mid);
  const right = tree.slice(mid + 1);

  if (tree[mid] === "0") {
    if (left.includes("1") | right.includes("1")) return false;
  }

  return checkBinaryTree(left) && checkBinaryTree(right);
}
