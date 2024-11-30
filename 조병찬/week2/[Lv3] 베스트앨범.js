// 접근방법
// 1. 장르별 재생 횟수를 저장하는 객체를 만든다. → 정렬을 위해서
// 2. 고유 번호별 장르와 재생 횟수를 저장하는 객체를 만든다.
// 3. 장르별 재생 횟수를 내림차순으로 정렬한다.
// 4. 장르별로 재생 횟수가 높은 순으로 2개씩 추출한다.
// 5. 고유 번호를 result 배열에 저장한다.
// 6. result 배열을 반환한다.

function solution(genres, plays) {
  const result = [];
  const genresObj = {};
  const playsObj = {};

  for (let i = 0; i < genres.length; i++) {
    genresObj[genres[i]] = (genresObj[genres[i]] || 0) + plays[i];
    playsObj[i] = { genre: genres[i], play: plays[i] };
  }

  const sortedGenres = Object.keys(genresObj).sort(
    (a, b) => genresObj[b] - genresObj[a]
  );

  for (let genre of sortedGenres) {
    const filteredGenres = Object.values(playsObj).filter(
      (play) => play.genre === genre
    );
    const bestGenreSong = filteredGenres
      .sort((a, b) => b.play - a.play)
      .slice(0, 2);

    for (let song of bestGenreSong) {
      const uniqueId = Object.values(playsObj).indexOf(song);
      result.push(uniqueId);
    }
  }

  return result;
}
