# Gominjungdok-고민중독

> [!TIP]
> 알고리즘 해결을 위해 무수한 고민을 하고 **고민중독**에 빠져보아요.

&nbsp;

## 📣 스터디 참여 방법 및 규칙

1. 이 저장소를 자신의 로컬 저장소로 `clone` 해요.
2. `자신의 이름_week1`으로 브랜치를 생성해 `컨벤션에 맞게` 자유롭게 업로드해요.
3. 개인 폴더의 내부는 자유롭게 추가, 수정이 가능해요.
4. 코드리뷰는 성실히 진행하며, 건설적인 피드백을 해요.
5. 매주 하나의 주제로 한 사람씩 돌아가며 예제 코드를 통해 설명해요.
6. 코딩 스타일은 [**Google JavaScript 스타일 가이드**](https://steemit.com/wdev/@wonsama/javascript)를 따라요.

&nbsp;

## 📁 파일 컨벤션

- 개인 폴더에는 `js 파일`만 허용해요.
- 파일명은 `[문제레벨] 문제제목.js`로 생성해요.
- 각 파일 내 상단에 다음 내용을 주석으로 작성해요.

```js
// 문제 접근 (해결하기 위한 순서대로 작성)
// 1. 요구사항에 따른 정렬을 해요.
// 2. 배열을 객체로 변환해요.
// 3. bfs를 어떤 식으로 적용해요.
// 4. 최종 값을 리턴해요.
// 시간복잡도: O(n)
```

&nbsp;

## 📆 PR 방식

1. 자신이 해결한 문제에 대해 PR 템플릿에 맞게 작성해요.
2. 자신의 이름으로 된 브랜치에서 `main`브랜치로 merge PR을 생성해요.
3. PR 제목은 `[본인이름] n주차 문제 풀이 제출합니다.`로 작성해요.
4. 모든 인원의 `assign` 및 `리뷰`가 된다면 `main`으로 merge해요.

&nbsp;

## ✨ 커밋 컨벤션

- 컨벤션 사용 예시

```bash
git commit -m "feat(${플랫폼}): [${레벨/티어 중 택1}] ${문제 제목}"

git commit -m "feat(programmers): [Lv1] 완주하지 못한 선수"
git commit -m "feat(baekjoon): [Silver1] 최단경로"
```

&nbsp;

## 📑 일정 및 문제

|            주차            |        학습 주제         |        발표자        | 문제                                                                                                                                                                                                                                                                                                                                     | 완료 여부 |
| :------------------------: | :----------------------: | :------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------: |
| week1 (24.11.19~24.11.25)  |    배열과 문자열 처리    |          -           | [스킬트리](https://school.programmers.co.kr/learn/courses/30/lessons/49993) <br /> [두 개의 배열](https://www.acmicpc.net/problem/17124) <br /> [n^2 배열 자르기](https://school.programmers.co.kr/learn/courses/30/lessons/87390) <br /> [나누어 떨어지는 숫자 배열](https://school.programmers.co.kr/learn/courses/30/lessons/12910)   |    ✅     |
| week2 (24.11.26~24.12.02)  |       해시와 정렬        |        김여진        | [의상](https://school.programmers.co.kr/learn/courses/30/lessons/42578) <br /> [K번째 수](https://school.programmers.co.kr/learn/courses/30/lessons/42748) <br /> [H-Index](https://school.programmers.co.kr/learn/courses/30/lessons/42747) <br /> [베스트앨범](https://school.programmers.co.kr/learn/courses/30/lessons/42579)        |    ✅     |
| week3 (24.12.03~24.12.09)  |        스택과 큐         |        최영애        | [같은 숫자는 싫어](https://school.programmers.co.kr/learn/courses/30/lessons/12906) <br /> [크레인 인형뽑기 게임](https://school.programmers.co.kr/learn/courses/30/lessons/64061) <br /> [다리를 지나는 트럭](https://school.programmers.co.kr/learn/courses/30/lessons/42583) <br /> [회전초밥](https://www.acmicpc.net/problem/28107) |    ✅     |
| week4 (24.12.10~24.12.16)  | 완전탐색 <br /> 이분탐색 | 조병찬 <br /> 오율산 | [모음사전](https://school.programmers.co.kr/learn/courses/30/lessons/84512) <br /> [소수 찾기](https://school.programmers.co.kr/learn/courses/30/lessons/42839) <br /> [징검다리](https://school.programmers.co.kr/learn/courses/30/lessons/43236) <br /> [숫자카드](https://www.acmicpc.net/problem/10815)                              |    ✅     |
| week5 (24.12.17~24.12.23)  |    모의 코딩테스트(1)    |          -           | [OX](https://www.acmicpc.net/problem/27970) <br /> [단어 뒤집기2](https://www.acmicpc.net/problem/17413) <br /> [연산자 끼워넣기](https://www.acmicpc.net/problem/14888)                                                                                                                                                                 |    ✅     |
| week6 (24.12.24~24.12.30)  |          그리디          |        김여진        | [주유소](https://www.acmicpc.net/problem/13305) <br /> [구명보트](https://school.programmers.co.kr/learn/courses/30/lessons/42885) <br /> [잃어버린 괄호](https://www.acmicpc.net/problem/1541) <br /> [사과 담기 게임](https://www.acmicpc.net/problem/2828)                                                                            |    ✅     |
| week7 (24.12.31~25.01.06)  |         DFS/BFS          |        최영애        | [네트워크](https://school.programmers.co.kr/learn/courses/30/lessons/43162) <br /> [여행경로](https://school.programmers.co.kr/learn/courses/30/lessons/43164) <br /> [유기농 배추](https://www.acmicpc.net/problem/1012) <br /> [점프왕 쩰리](https://www.acmicpc.net/problem/16173)                                                    |    ✅     |
| week8 (25.01.07~25.01.13)  |           트리           |        조병찬        | [트리 만들기](https://www.acmicpc.net/problem/14244) <br /> [상근이의 여행](https://www.acmicpc.net/problem/9372) <br /> [트리의 부모 찾기](https://www.acmicpc.net/problem/11725) <br /> [표현 가능한 이진트리](https://school.programmers.co.kr/learn/courses/30/lessons/150367)                                                       |    ✅     |
| week9 (25.01.14~25.01.20)  |        최단 경로         |        오율산        | [친구](https://www.acmicpc.net/problem/1058) <br /> [배달](https://school.programmers.co.kr/learn/courses/30/lessons/12978) <br /> [산책 경로](https://www.acmicpc.net/problem/3097) <br /> [특정 거리의 도시 찾기](https://www.acmicpc.net/problem/18352)                                                                               |    🔲     |
| week10 (25.01.21~25.01.27) |      동적 계획법(1)      |        김여진        |                                                                                                                                                                                                                                                                                                                                          |    🔲     |
| week11 (25.01.28~25.02.03) |      동적 계획법(2)      |        최영애        |                                                                                                                                                                                                                                                                                                                                          |    🔲     |
| week12 (25.02.04~25.02.10) |    모의 코딩테스트(2)    |          -           |                                                                                                                                                                                                                                                                                                                                          |    🔲     |

&nbsp;

## 📂 폴더 구조

```bash
├─📂김여진
├─📂오율산
├─📂조병찬
│  ├─📁week1
│  │      [Lv1] 문제제목.js
│  │
│  ├─📁week2
│  └─📁week3
└─📂최영애
```

&nbsp;

## 😺 팀원

| [![bbjbc](https://avatars.githubusercontent.com/u/102457140?v=4)](https://github.com/bbjbc) | [![duwlsssss](https://avatars.githubusercontent.com/u/92291790?v=4)](https://github.com/duwlsssss) | [![yulsanoh](https://avatars.githubusercontent.com/u/156407033?v=4)](https://github.com/yulsanoh) | [![choiyoungae](https://avatars.githubusercontent.com/u/109134495?v=4)](http://github.com/choiyoungae) |
| :-----------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------: |
|                          **👑 [조병찬](https://github.com/bbjbc)**                          |                           **💎 [김여진](https://github.com/duwlsssss)**                            |                           **💎 [오율산](https://github.com/yulsanoh)**                            |                             **💎 [최영애](http://github.com/choiyoungae)**                             |
