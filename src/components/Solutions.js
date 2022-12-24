// 문제 #1

function problem1(numArr, colorArr) {
  let resultArr = [];
  let counter = 0;
  for (let i = 0; i <= numArr.length - 1; i++) {
    if (i > 0 && numArr[i - 1] !== 0) {
      if (numArr[i] !== numArr[i - 1]) {
        counter++;
      }
    }
    if (numArr[i] === 0) {
      resultArr.push(null);
    } else {
      if (counter > colorArr.length - 1) {
        counter = 0;
      }
      resultArr.push(colorArr[counter]);
    }
  }
  return resultArr;
}

console.log(problem1([0, 3, 3, 1, 1, 1, 0, 0, 2, 2, 2, 8, 8], ["red", "blue"]));
console.log(problem1([6, 6, 6, 0, 0, 11, 11], ["green", "red", "violet"]));

// 문제 #2
