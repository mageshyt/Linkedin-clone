import type { GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import FeedSession from "../components/Feed/FeedSession";
import Header from "../components/Header/Header";
import EventCard from "../components/sidebar/EventCard";
import NewsCard from "../components/sidebar/NewsCard";
import UserCard from "../components/sidebar/UserCard";
import { useUserStore } from "../context/createStore";
import { CreateUser, GetUser } from "../lib/User.sanity";
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
      CreateUser(user);
    } else {
      setUser(user);
    }
  }, [status]);

  return (
    <div className="flex flex-col overflow-hidden   h-screen bg-black w-full ">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header />
      <main className="w-full  h-screen ">
        <section className="p-3   max-w-[1300px] flex space-x-3 h-full  mx-auto">
          <div className="space-y-4">
            <UserCard />
            <EventCard />
          </div>
          {/* Feed */}
          <FeedSession />
          {/* news Card */}
          <div className="hidden lg:block">
            <NewsCard />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
