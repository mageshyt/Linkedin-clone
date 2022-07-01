import React from "react";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots, FaShare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import TimeAgo from "react-timeago";
import { AddLike } from "../../lib/post.sanity";
import Icon from "./Icons";
const Posts = ({ post }: any) => {
  return (
    <div className=" flex flex-col space-y-3 ">
      {/* post details */}
      <div className="flex items-center space-x-3">
        {/* user image */}
        <img
          src={post?.postedBY?.profile_img}
          alt="user-pic"
          className="h-12 w-12 rounded-full"
        />
        <div className=" flex items-center space-x-4">
          {/* user name */}
          <span className="text-sm text-white flex-col flex">
            <p> {post.postedBY?.username} </p>
            {/* posted time */}
            <TimeAgo date={post?._createdAt} className=" text-blue-400" />
          </span>
          {/* title */}
          <span className="text-white text-md">{post?.title}</span>
        </div>
      </div>

      {/* description */}
      <span className=" text-gray-300">{post?.description}</span>
      {/*  post image */}
      <div className=" border ">
        <img src={post?.image} className="w-full h-full  object-cover" />
      </div>
      {/* post likes comments */}
      <PostInfoCard likes={post?.likes} comments={post?.comments?.length} />
      <hr className="bg-gray-400" />
      {/*  post actions  */}
      <PostFunction id={post?._id} />
    </div>
  );
};

export default Posts;
interface Props {
  likes: number;
  comments: number;
}

const PostInfoCard = ({ likes, comments }: Props) => {
  return (
    <div className="flex items-center space-x-3 justify-between">
      <span className="text-pink-400 text-sm">{likes} likes</span>
      {/* comment */}
      <span className="text-gray-300 text-sm">{comments} comments</span>
    </div>
  );
};

const PostFunction = ({ id }: any) => {
  return (
    <div className="  flex space-x-2 items-center justify-around">
      <div onClick={() => AddLike(id)}>
        <Icon name={"Likes"} Icon={AiOutlineLike} />
      </div>
      <Icon name={"Comments"} Icon={FaRegCommentDots} />
      <Icon name={"Share"} Icon={FaShare} />
      <Icon name="Send" Icon={FiSend} />
    </div>
  );
};
