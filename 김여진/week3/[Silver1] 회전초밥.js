// 문제 접근
// 시간 초과
// 1. 손님 번호를 인덱스로 하는 선호 초밥 종류를 담은 배열을 만든다.
// 2. 요리되는 초밥을 손님 번호가 작은 순으로 확인해 없애고 result 배열로 손님 번호 인덱스에 각 손님이 먹은 초밥 개수를 기록한다.
// 시간 복잡도 O(m * k) - 요리된 초밥 수(m), 손님 초밥 목록 길이 합(k)

// 다시 접근
// 1. 초밥에 손님 리스트를 매핑한 Map을 생성해 모든 손님을 확인하지 않고, 초밥으로 선호 손님만 조회
// 시간 복잡도 O(k + m * 평균 손님 수) - 초밥, 손님 매핑에 O(K), 각 초밥에 대해 해당 손님 리스트 순회 O(m × 평균 손님 수)

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const customerCnt = Number(input[0].split(' ')[0]);
const cookedSushis = input[input.length-1].split(' ').map(Number);
const sushiToCustomers = new Map();
const customers = [];
const results = Array(customerCnt).fill(0);

// 각 손님의 선호 초밥 목록을 Set으로 저장, 초밥에 손님 목록을 매핑 - 해시테이블 사용해 빠르게 검색하기 위해 
for (let i = 1; i <= customerCnt; i++) {
  const [, ...sushis] = input[i].split(' ').map(Number);
  customers.push(new Set(sushis)); 
  for(const sushi of sushis){
      sushiToCustomers.has(sushi) 
          ? sushiToCustomers.get(sushi).push(i-1)
          : sushiToCustomers.set(sushi, [i-1]);
  }
}

// 요리된 초밥 처리
for (const cookedSushi of cookedSushis){
  if(sushiToCustomers.has(cookedSushi)){
      const customerList = sushiToCustomers.get(cookedSushi);
      for(const cIdx of customerList){
          if(customers[cIdx].has(cookedSushi)){
              customers[cIdx].delete(cookedSushi);
              results[cIdx]++;
              break;
          }
      }
  }
}

console.log(results.join(' '));