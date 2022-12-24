export default function BinarySearch() {
  function solution(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] > target) right = mid - 1;
      else if (nums[mid] < target) left = mid + 1;
    }
    return -1;
  }

  return (
    <>
      <div>
        <button
          className="like-button"
          onClick={() => {
            console.log(solution([1, 4, 8, 9, 10, 17], 9));
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
