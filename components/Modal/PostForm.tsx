import React, { useRef, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UseUser } from "../../hooks/UserHook";
import { AddPost } from "../../lib/post.sanity";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";
interface FormData {
  description: string;
  title: string;
}

const styles = {
  input:
    "outline-none text-black rounded-xl  text-sm w-full font-medium border-b-2 border-gray-200 p-2",
};

const PostForm = ({ imageAsset }: any) => {
  //! to keep track the title and destination, and image
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  //! current user
  const user: any = UseUser(); //! custom hook to get current user
  //! react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const router = useRouter();
  const onSubmitForm = handleSubmit(async (data: FormData) => {
    setLoading(true);
    const load = toast.loading("Please wait...");
    const newDoc = {
      title: data.title,
      description: data.description,
      image: imageAsset,
      createdAt: new Date().toISOString(),
    };
    const UserID = user?._id;
    const res = await AddPost(newDoc, UserID).then(() => {
      toast.update(load, {
        render: "Successfully uploaded",
        type: "success",
        autoClose: 2000,
        isLoading: false,
      });
    });

    setTimeout(() => {
      router.push("/");
      setLoading(false);
      setTitle("");
      setDescription("");
    }, 2200);
  });
  return (
    <div>
      <ToastContainer />
      <form className=" flex flex-col space-y-3" onSubmit={onSubmitForm}>
        {/* Title */}
        <label>
          <span>Title</span>
          <input
            {...register("title", { required: true })}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className={styles.input}
          />
        </label>
        {/*  Description */}
        <label>
          <span>Description</span>
          {/* Test area */}
          <textarea
            {...register("description", { required: true })}
            onChange={(e) => setDescription(e.target.value)}
            rows={2}
            value={description}
            maxLength={200}
            placeholder="Description"
            className={styles.input}
          />
        </label>

        {/*  Link */}

        {/* Submit btn */}
        <button
          disabled={loading}
          type="submit"
          className={
            loading
              ? "bg-blue-500 hover:bg-blue-600 rounded-xl  px-4 p-2 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600   rounded-xl px-4 p-2 "
          }
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default PostForm;
