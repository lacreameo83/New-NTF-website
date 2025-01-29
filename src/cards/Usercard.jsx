import React, { useState } from "react";
import { FaHeart } from "react-icons/fa6";

function Usercard({ total,bidind,users,width,visible}) {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(total);

  const handleLike = () => {
    setLiked(!liked);
    setCount((prev) => (liked ? prev - 1 : prev + 1)); 
  };

  return (
    <div className={`${width}  flex items-center justify-between`}>
      <div className={`${visible} `}>{users}</div>
      <div>
        <p
          className={`text-[rgba(119,128,161,1)] inter text-[14px] leading-[21px]  `}
        >
          {bidind} people are bidding
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div
          className={`${
            liked ? "text-[rgba(251,69,57,1)]" : "text-white"
          } cursor-pointer`}
          onClick={handleLike}
        >
          <FaHeart />
        </div>
        <p
          className={`${visible}  inter text-[14px] leading-[21px] text-[rgba(119,128,161,1)]  `}
        >
          {" "}
          {count}
        </p>
      </div>
    </div>
  );
}

export default Usercard;
