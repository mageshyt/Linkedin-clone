import Image from "next/image";
import React, { useRef } from "react";
import { AiOutlineLike, AiFillDislike } from "react-icons/ai";
import { FaRegCommentDots, FaShare } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import TimeAgo from "react-timeago";
import { toast, ToastContainer } from "react-toastify";
import { UseUser } from "../../hooks/UserHook";
import { AddLike, removeLike } from "../../lib/post.sanity";
import CommentBox from "../comment/CommentBox";
import Comments from "../comment/comments.components";
import Icon from "../Feed/Icons";
const Posts = ({ post }: any) => {
  const [active, setActive] = React.useState(false);
  const user: any = UseUser();
  const [like, setLike] = React.useState(false);

  return (
    <div className=" flex flex-col  space-y-3 ">
      <ToastContainer />
      {/* post details */}
      <div className="flex flex-col items-center space-x-3">
        <div className=" flex w-full items-center space-x-4">
          {/* user image */}
          <img
            src={post?.postedBY?.profile_img}
            alt="user-pic"
            className="sm:h-12 sm:w-12 h-8 w-8 rounded-full"
          />
          {/* user name */}
          <div className="flex  flex-col">
            <span className="text-sm text-white">
              {post.postedBY?.username}
              {/* posted time */}
            </span>
            <TimeAgo date={post?._createdAt} className=" text-blue-400" />
          </div>
        </div>
        {/* title */}
        <span className="text-white md:text-xl text-lg text-center font-bold">
          {post?.title}
        </span>
      </div>

      {/* description */}
      <span className=" text-gray-300">{post?.description}</span>
      {/*  post image */}
      <div className=" border ">
        <img src={post?.image} className="w-full h-full  object-cover" />
      </div>
      {/* post likes comments */}
      <PostInfoCard likes={post?.likes} comments={post?.comment?.length} />
      <hr className="bg-gray-400" />
      {/*  post actions  */}
      <PostFunction
        userId={post.postedBY?._id}
        active={active}
        setActive={setActive}
        id={post?._id}
        curr_user={user?._id}
        like={like}
        setLike={setLike}
      />
      {active && <CommentBox comments={post?.comment} id={post?._id} />}
      {active && (
        <>
          {post?.comment?.map((comment: any, idx: number) => {
            return <Comments comment={comment} key={idx} />;
          })}
        </>
      )}
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

const PostFunction = ({
  id,
  active,
  setActive,
  curr_user,
  like,
  setLike,
}: any) => {
  console.log(like);
  return (
    <div className=" w-full overflow-x-scroll  flex space-x-2 items-center justify-around">
      {like ? (
        //! dislike
        <div
          onClick={() => {
            removeLike(id);
            setLike(false);
          }}
        >
          <Icon name={"dislike"} Icon={AiFillDislike} />
        </div>
      ) : (
        //! Like
        <div
          onClick={() => {
            if (!curr_user) return toast.error("Please login to like");
            AddLike(id, curr_user);
            setLike(true);
          }}
        >
          <Icon name={"like"} Icon={AiOutlineLike} />
        </div>
      )}
      {/* comment */}
      <div onClick={() => setActive(!active)}>
        <Icon name={"Comments"} Icon={FaRegCommentDots} />
      </div>
      <Icon name={"Share"} Icon={FaShare} />
      <Icon name="Send" Icon={FiSend} />
    </div>
  );
};
