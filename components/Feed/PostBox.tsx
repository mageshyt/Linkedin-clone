import React from "react";
import { useUserStore } from "../../context/createStore";

const PostBox = () => {
  const user = useUserStore((state) => state.user);
  const name = user?.name;
  const image = user?.image;
  return (
    <div className="w-full h-[100px] center p-2 rounded-xl bg-[#1d2226]">
      <div className="flex center space-x-4 w-full">
        <img src={image} className="w-12 h-12 rounded-full" />
        <span className="hover:bg-[#fff] animate hover:bg-opacity-[20%] flex-1 max-w-[70%] text-sm text-gray-300 rounded-lg p-3 cursor-pointer border">
          Start a post about a topic that excites you
        </span>
      </div>
    </div>
  );
};

export default PostBox;
