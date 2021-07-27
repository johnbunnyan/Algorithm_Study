// naive solution: O(2^N)
// const knapsack = function (weight, items) {
//   const LENGTH = items.length;
//   function pickOrNot(idxToCheck, value, left) {
//     if (idxToCheck === LENGTH) return value;

//     const [wt, v] = items[idxToCheck];

//     if (wt > left) return pickOrNot(idxToCheck + 1, value, left);

//     return Math.max(
//       pickOrNot(idxToCheck + 1, value + v, left - wt),
//       pickOrNot(idxToCheck + 1, value, left)
//     );
//   }

//   return pickOrNot(0, 0, weight);
// };

// dynamic: O(weight * N)
const knapsack = function (weight, items) {
  let cached = Array(weight + 1).fill(0);
  items = items.filter((item) => item[0] <= weight);
  items.forEach(([wt, v]) => {
    const possible = Array(weight + 1).fill(0);
    for (let i = 1; i <= weight; i++) {
      possible[i] = cached[i];
      if (i - wt >= 0 && cached[i - wt] + v > cached[i])
        possible[i] = cached[i - wt] + v;
      if (cached[i - 1] > cached[i]) possible[i] = cached[i - 1];
    }
    cached = possible;
  });
  return cached[weight];
};
