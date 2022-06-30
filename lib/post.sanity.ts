import { client } from "./sanityClient";

export const GetAllPost = async () => {
  const query = `*[_type == "post"]{
    "postedBY": author->{
          username,
          profile_img
      },
    "image":image.asset->url,
  comment,
  likes,
  title,
}`;
  const result = await client.fetch(query);

  return result;
};
