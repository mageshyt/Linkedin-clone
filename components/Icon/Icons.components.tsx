import React, { JSXElementConstructor } from "react";

interface IconProps {
  name: string;
  Icon: JSXElementConstructor<any>;
}

const Icons = ({ name, Icon }: IconProps) => {
  return (
    <div className="flex  items-center flex-col mx-2">
      <Icon className="text-2xl" />
      <span className="text-md">{name}</span>
    </div>
  );
};

export default Icons;
