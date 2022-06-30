import type { NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import Header from "../components/Header/Header";
import { useUserStore } from "../context/createStore";
import { User } from "../typing";

const Home: NextPage = () => {
  const { data, status }: any = useSession();
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const user: User = data?.user || null;
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
    <div className="flex h-screen bg-black w-full ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
    </div>
  );
};

export default Home;
