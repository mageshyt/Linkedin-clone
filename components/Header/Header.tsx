import { Session } from "./Session";
import React from "react";
import { useUserStore } from "../../context/createStore";
import SearchBar from "./SearchBar";

import { FaUser } from "react-icons/fa";
import { UseUser } from "../../hooks/UserHook";
const styles = {
  wrapper:
    "w-full bg-[#1d2226]   justify-around flex items-center h-[65px] p-3",
};

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <div className="flex  items-center space-x-3">
        <img
          src="/images/linkedin.png"
          alt="logo"
          className="h-10 w-10 object-contain"
        />
        {/* Search bar */}
        <div className="flex-1 hidden md:block max-w-[300px]">
          <SearchBar />
        </div>
      </div>

      {/* Sessions */}
      <div className="h-[60px] sm:w-auto w-[70%]">
        <Session FaUser={FaUser} />
      </div>
    </div>
  );
};

export default Header;
