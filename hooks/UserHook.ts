import { useEffect, useState } from "react";
import { useUserStore } from "../context/createStore";
import { GetUser } from "../lib/User.sanity";

export const UseUser = () => {
  const sessionUser = useUserStore((state) => state.user);
  const userID = sessionUser?.userId;
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const user = await GetUser(userID);
      setUser(user);
    };
    fetchUser();
  }, [userID]);

  return user;
};
