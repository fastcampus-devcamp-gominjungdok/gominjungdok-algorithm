// 문제 접근
// 1. 장르별 전체 플레이 수를 파악한다.
// 2. 장르별로 각 곡의 인덱스값과 플레이 수를 모은다.
// 3. 모은 장르별 곡을 플레이 수 기준 내림차순으로 정렬한다.
// 4. 장르별 전체 플레이 수도 내림차순으로 정렬한다.
// 5. 내림차순 된 장르별 전체 플레이 수에 따라 각 장르에 해당하는 곡 2개씩의 인덱스값을 결과 배열에 넣는다.
// 시간복잡도: 곡 수 n => O(n log n)

function solution(genres, plays) {
  let answer = [];

  let totalPlayCount = new Map;
  let genrePlayCount = new Map;
  for (let i=0; i<genres.length; i++) {
    totalPlayCount.set(genres[i], totalPlayCount.has(genres[i]) ? totalPlayCount.get(genres[i]) + plays[i] : plays[i]);
    // 장르별 인덱스와 플레이 수를 저장
    if (genrePlayCount.has(genres[i])) {
      genrePlayCount.get(genres[i]).push({ index: i, playCount: plays[i]});
    } else {
      genrePlayCount.set(genres[i], [{ index: i, playCount: plays[i] }]);
    }
  }

  // Map을 배열로 변환하여 내림차순 정렬
  totalPlayCount = new Map(
    [...totalPlayCount.entries()]
      .sort((a, b) => b[1] - a[1])
  );

  // 각 장르별로 플레이 수를 기준으로 내림차순 정렬
  genrePlayCount.forEach((playList, _) => {
    playList.sort((a, b) => b.playCount - a.playCount);
  });

  for (const key of totalPlayCount.keys()) {
    const playList = genrePlayCount.get(key);
    const indices = playList.map(item => item.index);
    answer.push(...indices.slice(0, 2));
  }
  return answer;
}