"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

import classes from "./page.module.css";
import MediaButton from "../ui/mediaButton/mediaButton";

import googleSVG from "./google.svg";
import gitHubSVG from "./github.svg";

const SignOn = () => {
  const router = useRouter();

  // ЕБАННЫЙ КОСТЫЛЬ для редиректа если ты авторизирован
  // const session = useSession();
  // useEffect(() => {
  //   if (session.status === "authenticated") {
  //     router.push("/profile");
  //   }
  // }, [session.status]);

  const handle = async (e) => {
    e.preventDefault();
    const data1 = new FormData(e.currentTarget);

    const res = await signIn("credentials", {
      username: data1.get("name"),
      userpassword: data1.get("password"),
      redirect: false,
    });

    if (res && res.ok) {
      router.push("/");
    }
  };

  return (
    <div className={classes.cont}>
      <h1>Sign in</h1>
      <form onSubmit={handle}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Login</label>
          <input name="name" required />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>Password</label>
          <input name="password" required />
        </div>
        <button type="submit">sign in</button>
      </form>
      <div>Forgot password / Sign up</div>
      <div className={classes.authMedia}>
        <h3>Sign in with:</h3>
        <div className={classes.mediaList}>
          <MediaButton svg={googleSVG} title="google"></MediaButton>
          <MediaButton svg={gitHubSVG} title="github"></MediaButton>
        </div>
      </div>
    </div>
  );
};

export default SignOn;
