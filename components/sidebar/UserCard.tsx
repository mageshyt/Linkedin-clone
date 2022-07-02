import React, { useEffect, useState } from "react";
import { UseUser } from "../../hooks/UserHook";
import { customStyles, randomImage } from "../../lib/data";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import { useRouter } from "next/router";
import Link from "next/link";
import { Input } from "antd";
import { SetUserBio } from "../../lib/User.sanity";
import AddBio from "./Addbio";
const UserCard = () => {
  const image = randomImage(); //! random image
  const user: any = UseUser(); //! user data
  const userImage: any = user?.profile_img || "images/user.svg";
  const userName: any = user?.username;



  return (
    <div className="h-[300px] flex flex-col items-center  bg-[#1d2226] w-[220px] rounded-md">
      <ToastContainer />
      <div className="center w-full flex-col">
        <img src={image} alt="user" className="rounded-t-xl h-[65px]  w-full" />

        {/* User image */}
        {user && (
          <img
            src={userImage}
            className="h-14 w-14 -mt-10 rounded-full"
            alt=""
          />
        )}
      </div>
      <span className="text-xl text-white">{userName}</span>
      <span className="text-sm text-center font-medium  text-gray-500">
        {user?.details ? user?.details : "No bio"}
      </span>
      {/* If no bio then add it  */}
      <AddBio />
      <hr className=" bg-slate-200 w-full mt-4" />

      {/* Connection with alumni */}
      <div className=" cursor-pointer  w-full mt-2">
        <div className="flex w-full flex-col p-1 animate hover:bg-[#fff] hover:bg-opacity-[18%] cursor-pointer ">
          <span className="text-md text-start font-medium  text-gray-50">
            connect
          </span>
          <span className="text-sm text-start font-medium  text-gray-300">
            connection with alumni
          </span>
        </div>
      </div>
      <hr className=" bg-slate-200 w-full mt-4" />
    </div>
  );
};

export default UserCard;
