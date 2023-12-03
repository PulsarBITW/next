import { withAuth } from "next-auth/middleware";

// import { getServerSession } from "next-auth";

export { default } from "next-auth/middleware";
// export default withAuth(
//   function middleware(req) {
//     console.log(!!req.nextauth.token);
//   },
//   {
//     callbacks: {
//       authorized: (session) => {
//         return !!session.token;
//       },
//       session: (session) => {
//         console.log("ses", session);
//       },
//     },
//   }
// );

export const config = { matcher: ["/profile"] };
