import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { GithubProfile } from "next-auth/providers/github";
import { JWT } from "next-auth/jwt";
import services from "../../../../services";
import { prisma } from "../../../../../lib/prisma";

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      async profile(profile: GithubProfile) {
        try {
          const [status, user] = await services.form.getOne({
            email: profile.email!,
          });

          if (!status) {
            const [status, user] = await services.form.create({
              firstName: "",
              lastName: "",
              username: profile.login!,
              description: profile.bio || "",
              email: profile.email!,
              regno: "",
              avatar: profile.avatar_url!,
              image: profile.avatar_url! || "",
              github: profile.html_url!,
            });
          }
          return {
            id: profile.id.toString(),
            email: profile.email!,
            name: profile.name || "", // Add the user's name
            image: profile.avatar_url, // Add the user's avatar URL
          };
        } catch (error) {
          console.log(error);
          return {
            id: profile.id.toString(),
            email: profile.email!,
            name: profile.name || "", // Add the user's name
            image: profile.avatar_url, // Add the user's avatar URL
          };
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.name = user.name; // Add the user's name to the token
        token.image = user.image; // Add the user's avatar URL to the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user!.email = token.email;
      session.user!.name = token.name; // Assign the user's name to the session
      session.user!.image = token.image as string; // Assign the user's avatar URL to the session
      return session;
    },
  },
});

export { handler as GET, handler as POST };
