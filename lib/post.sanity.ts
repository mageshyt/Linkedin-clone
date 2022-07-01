import { client } from "./sanityClient";

export const GetAllPost = async () => {
  const query = `*[_type == "post"]{
    _id,
    "postedBY": author->{
          username,
          profile_img
      },
      _createdAt,
    "image":image.asset->url,
  comments[]{
      comment,
    comment_by->{
  username,
  profile_img
  }
},
  likes,
  title,
  description,
}`;
  const result = await client.fetch(query);

  return result;
};

export const AddLike = async (id: string) => {
  console.log("Working");

  const res = await client
    .patch(id)
    .inc({ likes: 1 })
    .commit()
    .then(() => console.log("success"))
    .catch((err) => console.log(err));
  console.log(res);
  return res;
};
