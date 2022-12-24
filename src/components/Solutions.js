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

function problem2(arr) {
  let leftArr = [];
  let modifyArr = [];
  let nicknames = [];
  let resultArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    let item = arr[i].split(" ");
    let action = item[0];
    let uid = item[1];
    let nickname = arr[i]?.split(" ")[2];

    switch (action) {
      case "Leave":
        leftArr.push(uid);
        break;
      case "Write":
        for (let l = 0; l <= arr.length - 1; l++) {
          if (arr[l].split(" ")[0] === "Leave") {
            continue;
          } else {
            if (arr[l].split(" ")[1] === uid) {
              if (modifyArr.includes(uid)) {
                for (let k of nicknames) {
                  k.nickname = nickname;
                }
              } else {
                modifyArr.push(uid);
                nicknames.push({ uid, nickname });
              }
            }
          }
        }
        break;
      default:
        return "";
    }
  }
  for (let j = 0; j <= arr.length - 1; j++) {
    console.log({ leftArr });
    console.log({ modifyArr });
    console.log({ nicknames });
    if (
      leftArr.includes(arr[j].split(" ")[1]) &&
      arr[j].split(" ")[0] !== "Leave"
    ) {
      arr[j] = "떠난 더비님이 방명록에 새글을 남겼습니다.";
    }
    if (
      modifyArr.includes(arr[j].split(" ")[1]) &&
      arr[j].split(" ")[0] !== "Leave"
    ) {
      arr[j] = `${
        nicknames.find((el) => el.uid === arr[j].split(" ")[1]).nickname
      } 님이 방명록에 새글을 남겼습니다.`;
    }
    if (arr[j].split(" ")[0] === "Leave") {
      arr[j] = "";
    }
  }
  return arr.join(" ");
}

console.log(
  problem2([
    "Write uid1234 Black",
    "Write uid4567 Josh",
    "Write uid1234 White",
    "Write uid4567 White",
    "Leave uid1234",
  ])
);

console.log(
  problem2([
    "Write uid1234 Black",
    "Write uid4567 Josh",
    "Write uid1234 White",
    "Write uid4567 White",
    "Write uid8901 Tom",
    "Write uid1234 Blue",
    "Leave uid1234",
    "Write uid4567 Josh",
    "Leave uid8901",
  ])
);
