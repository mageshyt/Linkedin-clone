export const liked = {
  name: "isLiked",
  title: "Is Liked",
  type: "document",
  fields: [
    {
      name: "isLiked",
      title: "Is Liked",
      type: "boolean",
    },
    {
      name: "likedBy",
      title: "Liked By",
      type: "reference",
      to: [{ type: "user" }],
    },
  ],
};
