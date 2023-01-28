function solution(nums) {
  let stones = 0;
  let steps = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (stones > 0) {
      stones--;
    } else {
      stones = nums[i];
      steps++;
    }
  }
  return steps;
}

// console.log(solution([4, 1, 2, 3, 1, 0, 5]));

function solution1(scores) {
  let rankArr = [];
  let totalScores = [];
  let sum = 0;
  let q1 = 0;
  let q2 = 0;
  for (let i = 0; i < scores.length; i++) {
    sum = 0;
    for (let j = 0; j < scores[i].length; j++) {
      sum += scores[i][j];
      q1 += scores[i][0];
      q2 += scores[i][1];
    }
    totalScores.push({ q1, q2, sum });
  }
  //   return totalScores.map((x, y, z) => z.filter((w) => w > x).length + 1);
  return totalScores.map(
    (x, y, z) =>
      z.filter((w) => {
        if (w.sum === x.sum) {
          if (q1 < q2) {
            return w.q1 > q1;
          } else {
            return w.q2 > q2;
          }
        } else if (w.sum > x.sum) {
          return w.sum > x.sum;
        }
      }).length + 1
  );
}

console.log(
  solution1([
    [85, 90],
    [91, 87],
    [88, 87],
  ])
);
