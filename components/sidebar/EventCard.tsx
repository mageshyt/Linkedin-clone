import React from "react";
import { FaUserGraduate } from "react-icons/fa";
const EventCard = () => {
  return (
    <div className="h-[300px] flex flex-col space-y-4 bg-[#1d2226] p-2 w-[220px] rounded-md">
      <span className="text-xs mt-3 text-gray-400">Recent Event</span>

      <InfoCard />
      {/* Groups */}
      <div className="flex flex-col space-y-2">
        <span className="text-md text-[#82bffb] hover:underline cursor-pointer">
          Groups
        </span>
        <InfoCard />
        <p className="text-xs text-[#82bffb] hover:underline cursor-pointer">
          see all
        </p>
      </div>
      {/* Events */}
      <span className="text-md text-[#82bffb] hover:underline cursor-pointer">
        Events
      </span>
      {/* Discover more */}
      <div className=" flex-1 flex items-end">
        <span className="text-md text-gray-300 text-center w-full p-2 rounded-b-md animate hover:bg-[#fff] hover:bg-opacity-[18%] cursor-pointer">
          Discover more
        </span>
      </div>
    </div>
  );
};

export default EventCard;

const InfoCard = () => (
  <div className="flex w-full hover:p-1 animate hover:bg-[#fff] hover:bg-opacity-[18%] cursor-pointer items-center space-x-2">
    <FaUserGraduate className="text-md text-gray-300" />
    <span className="text-[#ffff] text-opacity-90 text-sm">
      zerotomastery.io
    </span>
  </div>
);
