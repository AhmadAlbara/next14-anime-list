import githubAuth from "next-auth/providers/github";

export const authOptions = {
  providers: [
    githubAuth({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};
