import { Providers } from "./components/Providers";
import NavBar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Try Next",
};

const status = !false; // for checking global-error.jsx

export default function RootLayout({ children }) {
  if (!status) throw new Error("global error");

  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/1111.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="438" />
        <meta property="og:description" content="Описание для try next" />
      </head>
      <body className={inter.className}>
        <Providers>
          <div className="wrapper">
            <NavBar />
            <div className="container">{children}</div>
            <footer>React/Redux/Next.js</footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
