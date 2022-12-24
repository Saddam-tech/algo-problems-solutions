export default function LinearSearch() {
  function solution(nums, target) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
    }
    return -1;
  }

  return (
    <>
      <div>
        <button
          className="like-button"
          onClick={() => {
            console.log(solution([1, 4, 8, 9, 10, 17], 17));
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
