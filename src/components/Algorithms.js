import React, { useState } from "react";

export default function Algorigthms() {
  const [likes, setLikes] = useState(100);

  const solution = (N) => {
    var maxGap = 0;
    var curMaxGap = 0;
    var binStr = N.toString(2);
    var startIndexFromEnd = binStr.length - 1;
    for (startIndexFromEnd; startIndexFromEnd >= 0; startIndexFromEnd--) {
      if (binStr.charAt(startIndexFromEnd) != "0") {
        break;
      }
    }
    for (var i = startIndexFromEnd - 1; i >= 0; i--) {
      if (binStr.charAt(i) == "0") {
        curMaxGap = curMaxGap + 1;
      } else {
        if (curMaxGap > maxGap) {
          maxGap = curMaxGap;
        }
        curMaxGap = 0;
      }
    }
    console.log("binary ", binStr);
    console.log("maxGap", maxGap);
    // return maxGap;
  };

  return (
    <>
      <div>
        <button
          className={`like-button ${likes > 100 ? "liked" : ""}`}
          onClick={() => solution(1610612737)}
        >
          Like | <span className="likes-counter">{likes}</span>
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
