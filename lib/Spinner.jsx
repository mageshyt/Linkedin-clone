import React from "react";
import { Triangle } from "react-loader-spinner";
import { HashLoader, RingLoader, GridLoader } from "react-spinners";
const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col space-y-4 justify-center items-center w-full h-full">
      <GridLoader color="#fff" size={25} />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
};

export default Spinner;
