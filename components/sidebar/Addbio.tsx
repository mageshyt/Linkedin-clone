import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UseUser } from "../../hooks/UserHook";
import { SetUserBio } from "../../lib/User.sanity";

const AddBio = () => {
  const [bio, SetBio] = useState("");
  const [Active, setActive] = useState(false);
  const user: any = UseUser();
  return (
    <div>
      {!user?.details && !Active && user && (
        <button
          onClick={() => setActive(true)}
          className="bg-blue-500 mt-8 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Add Bio
        </button>
      )}
      {/* Add bio btn */}
      {Active && (
        <div className=" flex space-y-3 mt-4 items-center flex-col  ">
          <input
            className="p-2 bg-white h-full w-full caret-black outline-none text-black  rounded-xl"
            placeholder="Add bio"
            value={user?.details}
            onChange={(e) => {
              SetBio(e.target.value);
            }}
          />
          {/* // Add bio */}
          <button
            onClick={() => {
              SetUserBio(user?._id, bio);
              toast.success("Bio added successfully", {
                position: "top-right",
                autoClose: 2000,
                type: "success",
              });
              setActive(false);
            }}
            disabled={!bio}
            className="bg-green-400 px-4 py-2 rounded-md"
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default AddBio;
