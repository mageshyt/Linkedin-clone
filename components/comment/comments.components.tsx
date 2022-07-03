import React from "react";
import TimeAgo from "react-timeago";
interface Props {
  comment: {
    comment: string;
    by: {
      username: string;
      profile_img: string;
    };
    createdAt: any;
  };
}
const Comments = ({ comment }: Props) => {
  return (
    <div className="flex flex-col    justify-center">
      <div className="flex items-center space-x-4">
        {/* user image */}
        <img src={comment?.by?.profile_img} className="h-8 w-8 rounded-full" />
        <div className="space-y-3">
          <span className="text-sm text-white  space-x-3 flex ">
            <p> {comment.by.username} </p>
            <TimeAgo date={comment?.createdAt} className=" text-blue-400" />
          </span>
          {/* comment */}
          <span className="text-gray-300 text-sm">{comment.comment}</span>
        </div>
      </div>
    </div>
  );
};

export default Comments;
