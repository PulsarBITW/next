"use client";

import Link from "next/link";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoSVG from "./logo.svg";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import CommonButton from "@/app/ui/commonButton/commonButton";

const NavBar = () => {
  const pathname = usePathname();

  const session = useSession();

  const linksList = [
    { href: "/", id: 1, title: "Home" },
    { href: "/useClient", id: 4, title: "use Client" },
    { href: "/about", id: 2, title: "About" },
    { href: "/clone", id: 3, title: "clone" },
  ];

  return (
    <div className={classes.navbar}>
      <div className={classes.logo}>
        <Link href="/" className={classes.logolink}>
          <Image src={logoSVG} className={classes.logosvg} alt="cupLogo" />
        </Link>
      </div>
      <ul className={classes.linksList}>
        {linksList.map((el) => (
          <li key={el.id}>
            <Link
              href={el.href}
              className={
                el.href === pathname ? classes.activeLink : classes.noneActive
              }
              scroll={false}
            >
              {el.title}
            </Link>
          </li>
        ))}
        {session.status === "authenticated" ? (
          <>
            <li>
              <Link
                href="/profile"
                className={
                  "/profile" === pathname
                    ? classes.activeLink
                    : classes.noneActive
                }
              >
                {<img src={session.data.user?.image} alt="profileImg" />}
              </Link>
            </li>
            <li>
              <CommonButton onClick={() => signOut()}>sign out</CommonButton>
            </li>
          </>
        ) : (
          <li>
            <Link
              href="/api/auth/signin"
              className={
                "/signin" === pathname ? classes.activeLink : classes.noneActive
              }
            >
              Sign In
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default NavBar;
