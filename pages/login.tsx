import React from "react";
import Content from "../components/Login Components/content/Content.components";
import LoginHeader from "../components/Login Components/LoginHeader";
const styles = {
  wrapper: "flex flex-col p-3 mx-auto max-w-[1200px]   ",
};
const login = () => {
  return (
    <div className={styles.wrapper}>
      {/* Header */}
      <LoginHeader />
      {/* Content */}
      <Content />
    </div>
  );
};

export default login;
