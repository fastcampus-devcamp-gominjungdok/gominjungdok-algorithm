// 문제 접근
// 1. genres로
// genre: genre,
// play: plays[i],
// index: i 
// 형태의 객체 배열 생성
// 2. 장르별 재생횟수 배열을 저장한 객체 genrePlayCnt생성
// 3. 장르별 등장횟수를 저장할 객체 genreCnt생성
// 4. 장르 내림차순 정럴, genrePlayCnt활용해 같은 장르에서 노래 재생횟수 내림차순,재생횟수가 같으면 같으면 인덱스 오름차순으로 정렬
// 5. genreCnt 이용해 같은 장르 3번째 이상이면 빼기
// 6. 인덱스만 출력
// 시간 복잡도 O(nlogn) - 배열 정렬 부분이 가장 높은 시간 복잡도를 가짐

function solution(genres, plays) {
  const genrePlayCnt = genres
    .map((g, i)=>[g,plays[i]])
    .reduce((obj, g)=> {
      obj[g[0]] = (obj[g[0]] ?? 0) + g[1];
      return obj;
    },{})

  const genreCnt = {};  

  return genres
    .map((g, i) => ({
        genre: g,
        play: plays[i],
        index: i
    }))
    .sort((a,b) => {
      if(a.genre !== b.genre) return genrePlayCnt[b.genre] - genrePlayCnt[a.genre];
      if(a.play !== b.play) return b.play - a.play;
      return a.index - b.index;
    })
    .filter((g)=> {
      if(genreCnt[g.genre] >= 2) return false;
      genreCnt[g.genre] = (genreCnt[g.genre] ?? 0) +1;
      return true;
    })
    .map(g => g.index)
}