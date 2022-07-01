import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import Spinner from "../../lib/Spinner";
export const UploadImageContainer = ({
  loading,
  uploadImage,
  imageUrl,
}: any) => {
  return (
    <div className="border-2 h-[200px] center flex-col w-[200px]   ">
      {imageUrl.length == 0 ? (
        <>
          {!loading ? (
            <UploadImage uploadImage={uploadImage} />
          ) : (
            <Spinner message="Uploading" />
          )}
        </>
      ) : (
        <>
          {imageUrl && (
            <div className="overflow-hidden">
              <img
                src={imageUrl}
                alt=""
                className="w-full h-full p-2 rounded-xl object-cover"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

const UploadImage = ({ uploadImage }: any) => {
  return (
    <>
      <div className="flex flex-col  cursor-pointer  justify-center items-center">
        <p className="font-bold -z-10 text-white text-xl">
          <AiOutlineCloudUpload />
        </p>
        <span className="text-lg relative  w-full">
          <p className="w-full  text-center">Click to upload </p>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => uploadImage(e)}
            className=" opacity-0 absolute top-1     h-full w-full"
          />
        </span>
      </div>
    </>
  );
};
