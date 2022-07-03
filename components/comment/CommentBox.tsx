import React, { useRef } from "react";
import { UseUser } from "../../hooks/UserHook";
import { AddComment } from "../../lib/post.sanity";
import { ToastContainer, toast } from "react-toastify";
interface Props {
  id: string;
  comments: [any];
}

const CommentBox = ({ id }: Props) => {
  const user: any = UseUser();
  const image = user?.profile_img || "images/user.svg";
  const comment: any = useRef(null);
  const [loading, setLoading] = React.useState(false);

  const handleSubmit = async (id: string, comment: any, userId: string) => {
    const load = toast.loading("Posting wait...");
    setLoading(true);
    AddComment(id, comment, userId);

    setLoading(false);
    setTimeout(() => {
      toast.update(load, {
        render: "Successfully uploaded ,Click on the refresh button",
        type: "success",
        autoClose: 2000,
        isLoading: false,
      });
    }, 2000);
  };

  return (
    <div className="px-4 ">
      <ToastContainer />
      <div className="flex  space-x-4 w-full">
        <img src={image} className="w-12 h-12 rounded-full" />
        {/* input field */}
        <div
          className="hover:bg-[#fff]  bg-transparent animate hover:bg-opacity-[10%] flex-1 
        text-sm text-gray-300 rounded-xl p-3 outline-none cursor-pointer border flex items-center justify-between "
        >
          <input
            className=" bg-transparent text-sm h-full w-full outline-none "
            type="text"
            placeholder="Add a comment"
            ref={comment}
            disabled={loading}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                if (!user)
                  return toast.error("You must be logged in to comment");
                handleSubmit(id, comment?.current.value, user?._id);
                comment.current.value = "";
              }
            }}
          />
          {/* emoji to send */}
          <button
            disabled={loading}
            onClick={() => {
              if (!user) return toast.error("You must be logged in to comment");
              handleSubmit(id, comment?.current.value, user?._id);
              comment.current.value = "";
            }}
            className="animate hover:rotate-45 hover:duration-300 text-lg cursor-pointer"
          >
            😇
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentBox;
