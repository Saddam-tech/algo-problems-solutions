import React, { useState } from "react";

export default function SwappingArray() {
  const [likes, setLikes] = useState(100);

  function solution(A, K) {
    // if A is meant to be shifted by its own length (K) then just return the array
    if (A.length === K || K === 0) {
      console.log(A);
      return A;
    }

    // Run K number of times saving last element in the array as a temporary variable, adding it to the front of the array and removing the last element
    for (let i = 0; i < K; i++) {
      let lastElement = A[A.length - 1];
      A.unshift(lastElement);
      A.pop();
    }
    console.log(A);
    return A;
  }

  return (
    <>
      <div>
        <button
          className={`like-button ${likes > 100 ? "liked" : ""}`}
          onClick={() => solution([1, 2, 3, 4, 5, 6], 3)}
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
