## 💡 풀이한 문제

- [나누어 떨어지는 숫자 배열](https://school.programmers.co.kr/learn/courses/30/lessons/12910)
- [스킬 트리](https://school.programmers.co.kr/learn/courses/30/lessons/49993)
- [n^2 배열 자르기](https://school.programmers.co.kr/learn/courses/30/lessons/87390?language=javascript)

## 📌 접근 방식

1️⃣ 나누어 떨어지는 숫자 배열
`arr` 배열을 순회해서 `data`와 `divisor`를 나눈 값의 나머지가 0인 요소를 찾아서 찾은 요소를 `answer` 배열에 `push`하고 이를 `sort()` 메소드를 통해 오름차순 정렬 했습니다. 그리고 `answer` 내부에 값이 없다면 `-1`을 `push` 했습니다.

2️⃣ 스킬 트리
인수로 받은 skill_trees의 각 아이템인 문자열들을 하나씩 분리해서 skill의 문자열에 순서에 맞게 indexOf를 사용해서 나온 index들의 크기를 비교할까 고민했었습니다.

3️⃣ n^2 배열 자르기
기본적으로 1차원 배열과 2차원 배열을 서로 변환하는 방법조차도 몰랐어서 이에 대해서 공부를 해서 변환까지는 감이 잡히는데 그 이후는 잘 모르겠습니다.

## 🔑 고민한 부분

문제에 어떻게 접근해야 하는지 감이 오지 않네요. 너무 기본적인 내용도 숙지를 못한 상태에서 급하게 스터디를 찾은 건지 살짝 죄송하네요 😥

## 🤔 궁금한 점

1️⃣ 나누어 떨어지는 숫자 배열을 더 효율적인 코드로 바꾸는 방법이 있을까요?
