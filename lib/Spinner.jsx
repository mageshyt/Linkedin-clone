import React from "react";
import { Triangle } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Triangle
        color="blue"
        height={110}
        width={110}
        ariaLabel="three-circles-rotating"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
