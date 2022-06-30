import { signIn } from "next-auth/react";
import React from "react";
import { RiCompassDiscoverLine } from "react-icons/ri";
import { BsPeopleFill, BsFillBriefcaseFill, BsDisplay } from "react-icons/bs";
const styles = {
  wrapper: "flex h-[100px] p-3 w-full  items-center justify-between ",
  image: "absolute  w-[150px] object-contain",
  IconContainer: "md:flex h-[45px]  hidden mr-2 space-x-4",
  joinBtn:
    " hover:bg-gray-200   hover:text-black text-gray-600 animate duration-100  text-lg font-semibold py-2 px-4 rounded-3xl",
  siginBtn:
    "border-blue-500 text-black hover:bg-opacity-[10%] hover:bg-[#70b5f9] border-[1px]   font-semibold py-3 px-4 rounded-3xl",
};
import Icons from "../Icon/Icons.components";

const LoginHeader = () => {
  return (
    <div className={styles.wrapper}>
      <div className="flex   items-center ">
        <img src="/images/login-logo.svg" className={styles.image} alt="logo" />
      </div>

      <div className="flex  space-x-4 items-center justify-around">
        {/* Icons */}
        <div className={styles.IconContainer}>
          <Icons name="discovery" Icon={RiCompassDiscoverLine} />
          <Icons name="people" Icon={BsPeopleFill} />
          <Icons name="Learning" Icon={BsDisplay} />
          <Icons name="job" Icon={BsFillBriefcaseFill} />
          <hr className="border-r border-[1px] border-gray-700 h-full" />
        </div>
        <div className="space-x-3 flex items-center">
          <button className={styles.joinBtn}>Join now</button>
          <button onClick={() => signIn()} className={styles.siginBtn}>
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginHeader;
