import React from "react";

const Icon = ({ name, Icon }: any) => (
  <div className="flex select-none  justify-center space-x-3 p-2 cursor-pointer rounded-md hover:bg-white hover:bg-opacity-[18%] items-center  ">
    <Icon className="w-6 h-6  " />
    <span className="text-md text-white">{name}</span>
  </div>
);

export default Icon;
