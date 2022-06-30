import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const LeftContentComponents = () => {
  return (
    <div className="max-w-[560px] space-y-10">
      <span className="lg:text-5xl md:text-4xl text-2xl text-start font-light  text-[#8f5849] ">
        Welcome to your professional community
      </span>
      {/* Info box */}
      <div className="space-y-6">
        <Card title="Search for a job" />
        <Card title="Find a person you know" />
        <Card title="Learn a new skill" />
      </div>
    </div>
  );
};

export default LeftContentComponents;

const Card = ({ title }: { title: string }) => (
  <div className="bg-[#ffffff] animate cursor-pointer rounded-xl border flex items-center px-2 justify-between h-16 md:w-[350px] w-full shadow_btn ">
    <span>{title}</span>
    <AiOutlineRight className=" text-2xl" />
  </div>
);
