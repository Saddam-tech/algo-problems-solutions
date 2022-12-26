export default function CodingTest() {
  function solution1(numArr, colorArr) {
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

  function solution2(arr) {
    let left = {};
    let write = {};
    for (let i = 0; i <= arr.length - 1; i++) {
      let item = arr[i].split(" ");
      let action = item[0];
      let uid = item[1];
      let nickname = arr[i]?.split(" ")[2];

      switch (action) {
        case "Leave":
          left[uid] = { action, uid, nickname };
          break;
        case "Write":
          write[uid] = { action, uid, nickname };
          break;
        default:
          return "";
      }
    }
    for (let j = 0; j <= arr.length - 1; j++) {
      if (arr[j].split(" ")[0] !== "Leave") {
        if (left[arr[j].split(" ")[1]]) {
          arr[j] = `떠난 더비님이 방명록에 새글을 남겼습니다.`;
          continue;
        }
        if (write[arr[j].split(" ")[1]]) {
          arr[j] = `${
            write[arr[j].split(" ")[1]].nickname
          } 님이 방명록에 새글을 남겼습니다.`;
        }
      } else {
        arr[j] = "";
      }
    }
    return arr.join(" ");
  }

  return (
    <>
      <div>
        <button
          className="like-button"
          onClick={() => {
            console.log(
              solution2([
                "Write uid1234 Black",
                "Write uid4567 Josh",
                "Write uid1234 White",
                "Write uid4567 White",
                "Leave uid1234",
              ])
            );
            // console.log(
            //   solution2([
            //     "Write uid1234 Black",
            //     "Write uid4567 Josh",
            //     "Write uid1234 White",
            //     "Write uid4567 White",
            //     "Leave uid1234",
            //   ])
            // );
          }}
        >
          Test
        </button>
      </div>
      <style>{`
          .like-button {
              font-size: 1rem;
              padding: 5px 10px;
              color:  #585858;
          }
          .liked {
              font-weight: bold;
              color: #1565c0;
          }
      `}</style>
    </>
  );
}
