import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
// import { CredentialsProvider } from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import { usersList } from "@/users";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      credentials: {
        username: {}, // username и password - это инпуты для страницы входа которая идет из коробки
        userpassword: {},
      },
      async authorize(credentials) {
        // console.log({ credentials });
        const currentUser = usersList.find(
          (el) =>
            el.name === credentials.username &&
            el.password === credentials.userpassword
        );
        if (currentUser) {
          const { password, ...otherUserOpt } = currentUser; // Возвращаем всего пользователя но БЕЗ пароля на фронтенд
          return otherUserOpt;
        }
      },
    }),
  ],
  //callbacks: {
  //   session({ session, token, user }) {
  //     session.token = token.jti;
  //     return session;
  //   },
  // },
  pages: {
    signIn: "/signin",
  },
});

export { handler as GET, handler as POST };
