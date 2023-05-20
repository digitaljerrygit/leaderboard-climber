// https://www.hackerrank.com/challenges/climbing-the-leaderboard/ 

function climb_leader_board(ranked: number[], player: number[]): number[] {
  const unique_ranked: number[] = [...new Set<number>(ranked)];
  const result: number[] = [];

  for (const score of player) {
    let low = 0;
    let high = unique_ranked.length - 1;
    let curr_index = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      if (unique_ranked[mid] === score) {
        curr_index = mid;
        break;
      } else if (unique_ranked[mid] < score) {
        high = mid - 1;
        curr_index = mid;
      } else {
        low = mid + 1;
        curr_index = mid + 1;
      }
    }
    result.push(curr_index + 1);
  }

  return result;
}
