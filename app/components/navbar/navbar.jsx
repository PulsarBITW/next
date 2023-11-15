"use client";

import Link from "next/link";
import classes from "./navbar.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logoSVG from "./logo.svg";

const NavBar = () => {
  const pathname = usePathname();

  const linksList = [
    { href: "/", id: 1, title: "Home" },
    { href: "/about", id: 2, title: "About" },
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
            >
              {el.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
