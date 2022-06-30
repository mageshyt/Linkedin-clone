import React from "react";

const Posts = ({ post }: any) => {
  console.log(post);
  return (
    <div className=" border-2 rounded-lg ">
      <span>
        <img
          src={post.image}
          className="w-full h-full rounded-xl object-cover"
        />
      </span>
    </div>
  );
};

export default Posts;
