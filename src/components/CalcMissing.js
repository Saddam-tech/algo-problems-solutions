import React, { useState } from "react";

export default function CalcMissing() {
  function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (!A.length) return 1;
    let n = A.length + 1;
    return n + (n * n - n) / 2 - A.reduce((a, b) => a + b);
  }

  return (
    <>
      <div>
        <button className="like-button" onClick={() => solution(1, 3, 4, 5, 6)}>
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
