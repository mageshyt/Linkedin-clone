import React from "react";
import { BsInfoSquareFill } from "react-icons/bs";
import { news } from "../../lib/data";

const style = {
  wrapper: "h-[300px] bg-[#1d2226] w-[250px] rounded-md",
  Header: "flex w-full items-center justify-between p-2",
  Title: " text-md text-white font-bold",
};
const NewsCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.Header}>
        <span className={style.Title}>LinkedIn News</span>
        <BsInfoSquareFill />
      </div>
      {/* Dummy news */}
      <div>
        {news.map((item: any) => {
          return (
            <div className="p-2 flex flex-col items-start space-y-1 hover:bg-gray-300 hover:bg-opacity-[15%] cursor-pointer ">
              {/* title */}
              <span className="text-md text-gray-200">{item?.title}</span>
              {/* description */}
              <span className="text-sm text-green-400">
                {""}
                {item?.detail}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewsCard;
