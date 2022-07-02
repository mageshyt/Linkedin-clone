import React, { useEffect } from "react";
import { UseUser } from "../../hooks/UserHook";
import { GetAllPost } from "../../lib/post.sanity";
import PostBox from "../post/PostBox";
import Posts from "../post/Posts";

const FeedSession = () => {
  const [posts, setPosts] = React.useState([]);
  const [refresh, setRefresh] = React.useState(false);
  useEffect(() => {
    const fetchPosts = async () => {
      const result: any = await GetAllPost();
      setPosts(result);
    };
    fetchPosts();
  }, [refresh]);
  UseUser();
  return (
    <div className=" space-y-4 flex flex-col overflow-hidden rounded-xl h-full w-[600px] max-w-[700px]">
      <PostBox setRefresh={setRefresh} refresh={refresh} />
      <div className="  rounded-xl  overflow-y-scroll p-4 bg-[#1d2226] ">
        <div className="space-y-4 pb-10 overflow-hidden">
          {posts.map((post, index) => (
            <Posts key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedSession;
