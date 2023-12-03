"use client";
import Image from "next/image";
import classes from "./mediaButton.module.css";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const MediaButton = (props) => {
  const searchParams = useSearchParams();

  const callbackUrl = searchParams.get("callbackUrl") || "/"; // в целом достаточно в handleclick'e написать callbackUrl: "/"  !!!

  const handleClick = async () => {
    await signIn(`${props.title}`, { callbackUrl });
  };
  return (
    <button className={classes.btn} onClick={handleClick}>
      <Image src={props.svg} alt={props.title} className={classes.svg} />
    </button>
  );
};

export default MediaButton;
