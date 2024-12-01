/*
    문제: 세 정수 A, B, C가 주어진다. 이때, 두 번째로 큰 정수를 출력하는 프로그램을 작성하시오. 
    입력: 첫째 줄에 세 정수 A, B, C가 공백으로 구분되어 주어진다. (1 ≤ A, B, C ≤ 100)
    출력: 두 번째로 큰 정수를 출력한다.
*/
// 접근 방법
// 1. 주어진 문자열에 접근을 하는 방법을 검색해서 찾아봤습니다.
// 2. FileSystem 모듈의 readFileSync는 동기식으로 파일을 읽어들입니다.
// 3. process.platform은 NodeJS에서 제공하는 API이며 컴파일된 운영 체제 플랫폼을 식별하는 문자열을 반환합니다. 예) "win32", "linux"
//    여기서 백준 시스템은 linux라고 합니다.
// 4. 불러온 문자열의 공백을 기준으로 분리하기 위해 split() 메소드를 사용
// 5. 이를 정렬하기 위해 sort() 메소드 사용

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt")
  .toString()
  .trim();

console.log(input.split(" ").sort((a, b) => a - b)[1]);
