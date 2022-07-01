import React from "react";
import {
  FcAddImage,
  FcCalendar,
  FcFilm,
  FcVideoProjector,
} from "react-icons/fc";
import { useUserStore } from "../../context/createStore";
import Icons from "../Icon/Icons.components";
import Icon from "./Icons";

const PostBox = () => {
  const user = useUserStore((state) => state.user);
  const name = user?.name;
  const image = user?.image;
  return (
    <div className="w-full h-[120px] space-y-3 items-center p-2 rounded-xl flex-col bg-[#1d2226]">
      <div className="flex  space-x-4 w-full">
        <img src={image} className="w-12 h-12 rounded-full" />
        <span
          className="hover:bg-[#fff] animate hover:bg-opacity-[20%] flex-1 
        text-sm text-gray-300 rounded-lg p-3 cursor-pointer border"
        >
          Start a post about a topic that excites you
        </span>
      </div>
      <div className="flex w-full justify-around space-x-3">
        <Icon name={"Image"} Icon={FcAddImage} />
        <Icon name={"Video"} Icon={FcVideoProjector} />
        <Icon name={"Calendar"} Icon={FcCalendar} />
        <Icon name={"Article"} Icon={FcFilm} />
      </div>
    </div>
  );
};

export default PostBox;

