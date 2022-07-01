import React, { useRef } from "react";
import { UseUser } from "../../hooks/UserHook";
import { AddComment } from "../../lib/post.sanity";
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
    setLoading(true);
    AddComment(id, comment, userId);

    setLoading(false);
  };

  return (
    <div className="px-4 ">
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
                handleSubmit(id, comment?.current.value, user?._id);
                comment.current.value = "";
              }
            }}
          />
          {/* emoji to send */}
          <button
            disabled={loading}
            onClick={() => {
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
