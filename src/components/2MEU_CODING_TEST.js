export default function CodingTest() {
  function solution(numArr, colorArr) {
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
        console.log({ counter });
        resultArr.push(colorArr[counter]);
      }
    }
    return resultArr;
  }

  return (
    <>
      <div>
        <button
          className="like-button"
          onClick={() => {
            console.log(
              solution(
                [6, 6, 6, 0, 0, 11, 11, 0, 0, 0, 1, 3, 0, 4],
                ["green", "red", "violet"]
              )
              //   solution([0, 3, 3, 1, 1, 1, 0, 0, 2, 2, 2, 8, 8], ["red", "blue"])
            );
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
