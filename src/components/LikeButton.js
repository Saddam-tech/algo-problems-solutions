import React, { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(100);

  const handleLike = () => {
    if (likes > 100) {
      setLikes((prevState) => prevState - 1);
    } else if (likes <= 100) {
      setLikes((prevState) => prevState + 1);
    }
  };

  return (
    <>
      <div>
        <button
          className={`like-button ${likes > 100 ? "liked" : ""}`}
          onClick={() => handleLike()}
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
