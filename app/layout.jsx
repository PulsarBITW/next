import { Providers } from "./components/Providers";
import NavBar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dany Wayne",
  description: "проверяю работа metadata и opengraph",
};

const status = !false; // for checking global-error.jsxs

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:image"
          content="https://i.postimg.cc/DwfwGF7t/3.png"
        />
        <meta property="og:image:alt" content="Jinx" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="436" />
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
