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
