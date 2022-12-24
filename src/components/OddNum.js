import React, { useState } from "react";

export default function OddNum() {
  function solution(A) {
    let result = 0;

    for (let element of A) {
      // Apply Bitwise XOR to the current and next element
      result ^= element;
      console.log(result);
    }
    // console.log(result);
    return result;
  }

  return (
    <>
      <div>
        <button
          className="like-button"
          onClick={() => solution([9, 3, 9, 3, 9, 6, 9])}
        >
          {"TEST".toUpperCase()}
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
