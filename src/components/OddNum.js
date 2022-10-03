import React, { useState } from "react";

export default function OddNum() {
  const [likes, setLikes] = useState(100);

  function solution(A) {
    let result = 0;

    for (let element of A) {
      // Apply Bitwise XOR to the current and next element
      result ^= element;
    }
    console.log(result);
    return result;
  }

  return (
    <>
      <div>
        <button
          className={`like-button ${likes > 100 ? "liked" : ""}`}
          onClick={() => solution([9, 3, 9, 2, 9, 3, 9])}
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
