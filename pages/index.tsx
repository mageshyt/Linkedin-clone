import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { useUserStore } from "../context/createStore";
import { undefined_user } from "../lib/data";
import { User } from "../typing";

const Home: NextPage = () => {
  const { data, status }: any = useSession();
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    const user: User = data?.user || undefined_user;

    if (data) {
      //! add userId to user
      const id: any = user?.email?.split("@")[0];
      Object.assign(user, { userId: id });
      setUser(user);
    } else {
      setUser(user);
    }
  }, [status]);
  
  return (
    <div className="flex ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Linked in clone</h1>
    </div>
  );
};

export default Home;
