import NextAuth from "next-auth";
import LinkedInProvider from "next-auth/providers/linkedin";
export default NextAuth({
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
    }),
  ],
  secret: "LinkedInSecret",
  callbacks: {
    signIn: async (user, account, profile) => {
      // !Do something with the user and account

      return user;
    },
    //! after sign in, redirect to Home page
    redirect: (url, _baseUrl) => {
      if (url === "/login") {
        return Promise.resolve("/");
      }
      return Promise.resolve("/");
    },
  },
});
