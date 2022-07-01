export const comments = {
  name: "comment",
  title: "Comment",
  type: "document",
  initialValue: () => ({
    createdAt: new Date().toISOString(),
  }),
  fields: [
    {
      name: "comment",
      title: "Comment",
      type: "string",
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
      name: "comment_by",
      title: "Posted By",
      type: "reference",
      to: [{ type: "user" }],
    },
  ],
};
