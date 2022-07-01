import React, { useEffect } from "react";
import { UseUser } from "../../hooks/UserHook";
import { randomImage } from "../../lib/data";

const UserCard = () => {
  const image = randomImage();
  const user: any = UseUser();
  const userImage: any = user?.profile_img || "images/user.svg";
  const userName: any = user?.username;
  return (
    <div className="h-[300px] flex flex-col items-center  bg-[#1d2226] w-[220px] rounded-md">
      <div className="center w-full flex-col">
        {user && (
          <img
            src={image}
            alt="user"
            className="rounded-t-xl h-[65px]  w-full"
          />
        )}
        {/* User image */}
        <img src={userImage} className="h-14 w-14 -mt-10 rounded-full" alt="" />
      </div>
      <span className="text-xl text-white">{userName}</span>
      <span className="text-sm text-center font-medium  text-gray-500">
        {user?.details}
      </span>
    </div>
  );
};

export default UserCard;
