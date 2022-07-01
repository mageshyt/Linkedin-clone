export const post = {
  name: "post",
  title: "Post",
  type: "document",
  initialValue: () => ({
    createdAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      options: {
        dateFormat: "YYYY-MM-DD",
        timeFormat: "HH:mm:ss",
      },
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
      initialValue: 0,
    },
    {
      name: "isLiked",
      title: "Is Liked",
      type: "array",
      of: [{ type: "isLiked" }],
    },
    {
      name: "comment",
      title: "Comment",
      type: "array",
      of: [{ type: "comment" }],
    },
  ],
};
