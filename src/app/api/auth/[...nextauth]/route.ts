import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GithubProfile } from "next-auth/providers/github";
import services from "../../../../../services";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      async profile(profile: GithubProfile) {
        try {
          const userExists = await services.form.getOne({
            email: profile.email!,
          });

          if (!userExists) {
            await services.form.create({
              firstName: "",
              lastName: "",
              username: profile.login!,
              description: profile.bio || "",
              email: profile.email!,
              avatar: profile.avatar_url!,
              image: profile.avatar_url! || "",
              github: profile.html_url!,
            });
          }
          return { id: profile.id.toString() };
        } catch (error) {
          console.log(error);
          return { id: profile.id.toString() };
        }
      },
    }),
  ],
});

export { handler as GET, handler as POST };
