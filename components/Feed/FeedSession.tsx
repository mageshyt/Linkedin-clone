import React, { useEffect } from "react";
import { GetAllPost } from "../../lib/post.sanity";
import PostBox from "./PostBox";
import Posts from "./Posts";

const FeedSession = () => {
  const [posts, setPosts] = React.useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const result = await GetAllPost();
      setPosts(result);
    };
    fetchPosts();
  }, []);

  return (
    <div className=" space-y-4 flex flex-col overflow-hidden rounded-xl h-full w-[700px] max-w-[700px]">
      <PostBox />
      <div className=" h-[750px] rounded-xl  overflow-y-scroll p-4 bg-[#1d2226] ">
        <div className=" space-y-4 overflow-hidden  ">
          {posts.map((post, index) => (
            <Posts key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedSession;
