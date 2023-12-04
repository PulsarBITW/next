import { Providers } from "./components/Providers";
import NavBar from "./components/navbar/navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dany Wayne",
  description: "проверяю работа metadata и opengraph",
};

const status = !false; // for checking global-error.jsx

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
