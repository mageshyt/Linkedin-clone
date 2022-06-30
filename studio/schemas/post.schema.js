export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "user" }],
    },
    {
      name: "likes",
      title: "Likes",
      type: "number",
    },
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "reference", to: [{ type: "comment" }] }],
    },
  ],
};
