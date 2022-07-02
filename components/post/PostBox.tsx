import React from "react";
import {
  FcAddImage,
  FcCalendar,
  FcFilm,
  FcRefresh,
  FcVideoProjector,
} from "react-icons/fc";
import { UseUser } from "../../hooks/UserHook";
import Icon from "../Feed/Icons";
import Modal from "react-modal";
import Link from "next/link";
import { useRouter } from "next/router";
import { customStyles } from "../../lib/data";
import PostModal from "../Modal/PostModal";
Modal.setAppElement("#__next");
const PostBox = ({ setRefresh, refresh }: any) => {
  const user: any = UseUser();
  const image = user?.profile_img;
  const router = useRouter();
  return (
    <div className="w-full h-[120px] space-y-3 items-center p-2 rounded-xl flex-col bg-[#1d2226]">
      {/* Title */}
      <div className="flex  space-x-4 w-full">
        {image && (
          <img src={image} className="sm:h-12 sm:w-12 h-10 w-10 rounded-full" />
        )}
        <Link href={"/?transfer=1"}>
          <span
            className="hover:bg-[#fff] animate hover:bg-opacity-[20%] flex-1 
         text-gray-300 rounded-xl p-3 text-xs cursor-pointer border"
          >
            Start a post about a topic that excites you
          </span>
        </Link>
      </div>
      <div className="flex w-full justify-around overflow-x-scroll space-x-3">
        <Icon name={"Image"} Icon={FcAddImage} />
        <Icon name={"Video"} Icon={FcVideoProjector} />
        <Icon name={"Calendar"} Icon={FcCalendar} />
        <Icon name={"Article"} Icon={FcFilm} />

        <div onClick={() => setRefresh(!refresh)}>
          <Icon name={"Refresh"} Icon={FcRefresh} />
        </div>
      </div>
      <Modal
        //! if the query exit then open the modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push("/")}
        style={customStyles}
      >
        <PostModal />
      </Modal>
    </div>
  );
};

export default PostBox;
