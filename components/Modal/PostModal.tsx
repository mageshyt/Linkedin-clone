import { UploadImageContainer } from "./UploadImageContainer";
import React, { useState } from "react";
import { client } from "../../lib/sanityClient";
import PostForm from "./PostForm";
const PostModal = () => {
  const [loading, setLoading] = useState(false);
  const [imageAsset, setImageAsset] = useState();
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async (e: any) => {
    const selectedFile = e.target.files[0];
    setLoading(true);
    await client.assets
      .upload("image", selectedFile, {
        contentType: selectedFile.type, //! this is the content type of the file
        filename: selectedFile.name, //! this is the name of the file
      })
      // ! upload the image to the Sanity.io asset store
      .then((document: any) => {
        setImageAsset(document); //! set the image asset
        setImageUrl(document.url); //! set the image url
        setLoading(false);
      })
      .catch((error) => {
        console.log("Upload failed:", error.message);
      });
  };
  return (
    <div className="h-[500px] flex-col space-y-4 flex  items-center justify-around    w-[400px] lg:w-[500px] text-white rounded-xl p-3">
      <UploadImageContainer
        loading={loading}
        uploadImage={uploadImage}
        imageUrl={imageUrl}
      />
      <PostForm imageAsset={imageAsset} />
    </div>
  );
};

export default PostModal;
