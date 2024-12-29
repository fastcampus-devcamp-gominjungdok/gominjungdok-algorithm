// 문제 접근
// 1. people 배열을 정렬 함
// 2. 정렬 한 배열을 순회하면서 한 명씩 이를 더해 무게가 한도를 초과하면 보트를 하나 추가

// 실패한 코드
function solution(people, limit) {
    let boat = 0;
    let weight = 0;
    let count = 0;

    for(person of people) {
        weight += person;
        count += 1;

        if(weight > limit) {
            boat += 1;
        }
    }

    return boats;
}