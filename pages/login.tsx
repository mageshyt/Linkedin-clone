import { signIn, signOut } from "next-auth/react";
import React from "react";

const login = () => {
  return (
    <div>
      <button onClick={() => signIn()}>Login</button>
      <button onClick={() => signOut()}>Logout</button>
    </div>
  );
};

export default login;
