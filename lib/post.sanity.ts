import { client } from "./sanityClient";

export const GetAllPost = async () => {
  const query = `*[_type == "post"]{
    _id,
    "postedBY": author->{
      _id,
          username,
          profile_img
      },
      _createdAt,
    "image":image.asset->url,
  comment[]{
  comment,
  createdAt,
  "by": comment_by->{
  username,
  profile_img
  },

},
  likes,
  title,
  description,
}`;
  const result: [any] = await client.fetch(query);
  const filter_result = result.filter(
    (item: any) => item?.comment?.length !== 69
  );
  return filter_result;
};

export const AddLike = async (id: string, userId: string) => {
  const res = await client
    .patch(id)
    .inc({ likes: 1 })
    .insert("after", "isLiked[-1]", [
      {
        isLiked: true,
        _key: "comment-" + new Date().getTime(),
        likedBy: { _type: "reference", _ref: userId },
      },
    ])
    .commit();
  console.log(res);

  //! now make is likes s true and add the users

  return res;
};

export const removeLike = async (id: string) => {
  const res = await client
    .patch(id)
    .dec({ likes: 1 })
    .commit()
    .then((res) => console.log("success ☘️"))
    .catch((err) => console.log(err));

  return res;
};

//! add comment to post

export const AddComment = async (
  id: string,
  comment: string,
  userId: string
) => {
  console.log("userId", userId);
  const res = await client
    .patch(id)
    .setIfMissing({ comment: [] })
    .insert("after", "comment[-1]", [
      {
        comment,
        createdAt: new Date().toISOString(),
        _key: "comment-" + new Date().getTime(),
        comment_by: { _type: "reference", _ref: userId },
      },
    ])
    .commit();
  console.log(res);
  return res;
};

//! add post

export const AddPost = async (newPost: any, userId: string) => {
  const doc = {
    _type: "post",
    title: newPost.title,
    description: newPost.description,
    image: {
      asset: {
        _type: "reference",
        _ref: newPost.image._id,
      },
    },
    author: { _type: "reference", _ref: userId },
    likes: 0,
  };
  const res = await client.create(doc).then((res) => console.log(res));
};
