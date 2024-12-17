// 문제 접근
// 1. 순열의 경우의 수를 생각한다.
// 2. 가능한 순열 중 소수인 것만 준결과값 배열에 넣는다.
// 3. 준결과값 배열에서 set을 활용해 중복을 제거하고 숫자를 반환한다.
// 시간복잡도: numbers 길이 n => O(n!⋅ (루트n)!)

function solution(numbers) {
  let primeNumArr = [];

  // 1 ~ numbers의 길이만큼 순열을 만들어내기
  for (let j = 1; j <= numbers.length; j++) {
    primeNumArr.push(...permutation(numbers, j))
  }

  return new Set(primeNumArr).size;
}

function permutation(arr, r) {
  const result = [];
  const used = new Array(arr.length).fill(false);
  const temp = []; // 순열의 경우

  function dfs() {
    // 주어진 숫자를 기준으로 순열을 만들기
    if (temp.length === r) {
      const numCase = Number(temp.join(''));
      if (isPrime(numCase)) result.push(numCase);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (!used[i]) {
        used[i] = true;
        temp.push(arr[i]);
        dfs();
        temp.pop();
        used[i] = false;
      }
    }
  }
  dfs();
  return result;
}

function isPrime(num){
  if (num === 1 || num === 0) {
    return false;
  }
  
  for(let i=2; i*i<=num; i++){
      if(num % i == 0) return false;
  }
  return true;
}