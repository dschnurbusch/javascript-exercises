// const sumAll = function(int1, int2) {
//     let sum = 0;

//     if (typeof int1 !== 'number' || typeof int2 !== 'number') {
//         return 'ERROR';
//     }

//     if (int1 < 0 || int2 < 0) {
//         return 'ERROR';
//     }

//     if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
//         return 'ERROR';
//     }

//     if (int1 > int2) {
//         for (let i = int1; i >= int2; i--) {
//             sum += i;
//         }
//     } else {
//         for (let i = int1; i <= int2; i++) {
//             sum += i;
//         }
//     }
//     return sum;

    const sumAll = function(int1, int2) {
  if (typeof int1 !== 'number' || typeof int2 !== 'number' ||
      !Number.isInteger(int1) || !Number.isInteger(int2) ||
      int1 < 0 || int2 < 0) {
    return 'ERROR';
  }
  const [min, max] = [int1, int2].sort((a, b) => a - b);
  return (max * (max + 1) - min * (min - 1)) / 2;
};

// Do not edit below this line
module.exports = sumAll;



// Do not edit below this line
module.exports = sumAll;
