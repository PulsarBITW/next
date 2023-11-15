import NavBar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Try Next",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="wrapper">
          <NavBar />
          <div className="container">{children}</div>
          <footer>React/Redux/Next.js</footer>
        </div>
      </body>
    </html>
  );
}
