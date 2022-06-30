import { signIn } from "next-auth/react";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const RightContentComponents = () => {
  return (
    <div>
      {/* right model */}
      <div className=" relative center overflow-hidden flex-1">
        <img
          src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAEVvdO3Jm6iVQXG5SP9qTlx0OQ.jpg"
          alt="banner-image"
          className="object-cover w-full  md:w-[80%] "
        />
        {/* Button */}
        <div className="absolute bottom-3">
          {/* Login with google */}
          <button
            onClick={() => signIn("google")}
            className="center bg-white p-2 rounded-2xl"
          >
            <FcGoogle className=" md:text-2xl lg:text-4xl " />
            Login With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightContentComponents;
