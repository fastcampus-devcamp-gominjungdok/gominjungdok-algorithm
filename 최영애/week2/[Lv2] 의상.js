// 문제 접근 - 실패
// 1. 종류별로 옷의 개수를 파악한다.
// 2. 종류 1~n개까지 조합을 생각해서 n개일 때 조합으로 뽑힌 요소들의 곱을 결과값에 더한다.
// 3. 실패 이유 : 조합에서 시간 소요가 너무 오래 걸림
// 시간복잡도: 의상 개수 n, 의상종류 수 m => O(n + m * 2^m)

function solution(clothes) {
  let answer = 0;

  let clothesCount = new Map();
  clothes.forEach(cloth => {
    if (clothesCount.has(cloth[1])) {
      clothesCount.set(cloth[1], clothesCount.get(cloth[1]) + 1);
    } else {
      clothesCount.set(cloth[1], 1);
    }
  });

  const values = Array.from(clothesCount.values());

  // 모든 경우의 수 계산
  for (let i = 1; i <= values.length; i++) {
    const combinations = getCombinations(values, i);
    combinations.forEach(combination => {
      answer += combination.reduce((product, num) => product * num, 1);
    });
  }

  return answer;
}

// 조합 생성 함수
const getCombinations = function (arr, k) {
  const result = [];
  const indices = Array.from({ length: k }, (_, i) => i);

  while (true) {
    result.push(indices.map(index => arr[index]));

    let i = k - 1;
    while (i >= 0 && indices[i] === arr.length - k + i) i--;
    if (i < 0) break;

    indices[i]++;
    for (let j = i + 1; j < k; j++) {
      indices[j] = indices[j - 1] + 1;
    }
  }

  return result;
};

// 문제 접근 - 성공
// 1. 종류별로 옷의 개수를 파악한다.
// 2. 입는 경우, 안 입는 경우를 생각해서 각 종류에 + 1을 해서 곱한다.
// 3. 모두 안 입는 경우를 생각해서 1을 뺀다.
// 시간복잡도 : 의상 종류 수 n => O(n)

function solution(clothes) {
  let answer = 0;

  let clothesCount = new Map();
  clothes.forEach(cloth => {
    if (clothesCount.has(cloth[1])) {
      clothesCount.set(cloth[1], clothesCount.get(cloth[1]) + 1);
    } else {
      clothesCount.set(cloth[1], 1);
    }
  });

  if (clothes.length > 0) {
    answer = 1;
    for (const value of clothesCount.values()) {
      answer *= value + 1;
    }
  }

  answer --;

  return answer;
}
