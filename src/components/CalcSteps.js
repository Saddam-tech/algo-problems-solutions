import React, { useState } from "react";

export default function CalcSteps() {
  function solution(X, Y, D) {
    // write your code in JavaScript (Node.js 8.9.4)
    console.log(Math.ceil((Y - X) / D));
    return Math.ceil((Y - X) / D);
  }

  return (
    <>
      <div>
        <button className="like-button" onClick={() => solution(10, 85, 30)}>
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
