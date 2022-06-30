import React from "react";
import LeftContentComponents from "./LeftConten.components";
import RightContentComponents from "./RightConten.components";
const Content = () => {
  return (
    <div className="flex flex-col md:flex-row p-3 items-center space-x-3 space-y-6 justify-between  ">
      {/* left model */}
      <LeftContentComponents />

      {/* right model */}
      <RightContentComponents />
    </div>
  );
};

export default Content;
