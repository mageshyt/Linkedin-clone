import { User } from "../typing";
import { client } from "./sanityClient";

export const CreateUser = async (user: User) => {
  const { name, email, image } = user;
  const userId = email.split("@")[0];
  const userDoc = {
    _type: "user",
    _id: userId,
    username: name,
    profile_img: image,
  };
  const result = await client
    .createIfNotExists(userDoc)
    .then(() => {
      console.log("User created");
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export const GetUser = async (userId: string) => {
  const query = `
   *[_type == "user" && _id =='${userId}']{
        _id ,
        username,
        profile_img,
    details
  }
    `;
  const result = await client.fetch(query);
  return result[0];
};

//! to set user bio

export const SetUserBio = async (userId: string, bio: string) => {
  const doc = {
    _type: "user",
    _id: userId,
    details: bio,
  };
  const result = await client
    .patch(userId)
    .set(doc)
    .commit()
    .then((res) => console.log("success ☘️"))
    .then(() => window.location.reload())
    .catch((err) => console.log(err));
  return result;
};
