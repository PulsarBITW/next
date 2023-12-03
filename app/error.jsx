"use client";

import { useEffect } from "react";
import CommonButton from "./ui/commonButton/commonButton";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>{"error.jsx - Верхнего уровня"}</h1>
      <CommonButton onClick={() => reset()}>reset</CommonButton>
    </>
  );
}
