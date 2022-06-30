export const comments = {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "string",
    },
    {
      name: "comment_by",
      title: "Posted By",
      type: "reference",
      to: [{ type: "user" }],
    },
  ],
};
