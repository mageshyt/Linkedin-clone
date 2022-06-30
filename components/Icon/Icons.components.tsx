import React, { JSXElementConstructor } from "react";

interface IconProps {
  name: string;
  Icon: JSXElementConstructor<any>;
}

const Icons = ({ name, Icon }: IconProps) => {
  return (
    <div className="flex  justify-center mx-2  space-y-1 items-center flex-col ">
      <Icon className="text-2xl" />
      <span className="text-sm">{name}</span>
    </div>
  );
};

export default Icons;
