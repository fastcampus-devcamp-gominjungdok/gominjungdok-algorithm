// 문제 접근
// 1. 순열로 가능한 숫자 조합 생성 
// 주어진 number를 배열로 만들고 같은 길이의 used 배열을 만들어 false로 채움
// number 배열의 요소를 하나씩 선택해 curr이라는 배열에 추가하며 해당 인덱스의 used를 true로 바꿈
// 순열 생성 함수 재귀 호출
// 재귀 호출에서 curr이 있으면 isVisited에 없을때만, 숫자로 변환해 push 
// 다 체크됐으면 curr 배열에서 숫자 pop, 해당 숫자를 사용하지 않은 상태로 되돌림 (백트래킹)
// 2. 생성된 배열의 요소 중 소수인 것의 개수 계산
// 시간복잡도: O(n! * 10^n/2) - n은 numbers의 길이 

const generatePermutations = (arr, curr, used, permutations, isVisited) => {

  if (curr.length > 0) {
    const n = parseInt(curr.join(''), 10);
    if (!isVisited.has(n)) {
      isVisited.add(n); 
      permutations.push(n);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (!used[i]) {
      used[i] = true;
      curr.push(arr[i]);
      generatePermutations(arr, curr, used, permutations, isVisited);
      curr.pop();
      used[i] = false;
    }
  }
}

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true; 
}

function solution(numbers) {
  const permutations = [];
  const isVisited = new Set();

  generatePermutations(
    numbers.split(''),
    [],
    Array(numbers.length).fill(false),
    permutations,
    isVisited
  );

  return permutations.filter(isPrime).length;
}