import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import {
  BsPeopleFill,
  BsFillBriefcaseFill,
  BsFillBellFill,
} from "react-icons/bs";
import { UseUser } from "../../hooks/UserHook";
export const Session = ({ FaUser }: any) => {
  const user: any = UseUser();
  const router = useRouter();
  const image = user?.profile_img;
  const name = user?.username;
  return (
    <div className="flex  space-x-4 justify-between h-full  items-end text-[#ffffff] text-opacity-75">
      <Icons name="Home" Icon={AiFillHome} />
      <Icons name="My netWork" Icon={BsPeopleFill} />
      <Icons name="Job" Icon={BsFillBriefcaseFill} />
      <Icons name="Message" Icon={AiFillMessage} />
      <Icons name="Notification" Icon={BsFillBellFill} />
      {/* User */}
      {user ? (
        <div className="center  h-full flex-col">
          <img
            src={image}
            onClick={() => signOut()}
            alt="user"
            className="h-8 w-8 rounded-full cursor-pointer object-contain"
          />
          <span className="text-sm hidden md:block">{name}</span>
        </div>
      ) : (
        <Icons name="Login" Icon={FaUser} router={router} />
      )}
    </div>
  );
};

const Icons = ({ name, Icon, router }: any) => {
  return (
    <div
      onClick={() => {
        if (name == "Login") {
          router.push("/login");
        }
      }}
      className="flex cursor-pointer  justify-center mx-2 h-full  space-y-1 items-center flex-col "
    >
      <Icon className="text-2xl" />
      <span className="text-sm hidden md:block">{name}</span>
    </div>
  );
};
