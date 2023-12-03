"use client";
import { useContext } from "react";
import { ContextError } from "../contexts";

export default function Page() {
  const { errorState, setErrorState } = useContext(ContextError);

  // if (!errorState) {
  //   throw new Error("error for testing error.jsx");
  // }

  return (
    <>
      <h1>{"Page with error"}</h1>
      <p>{"Page for tesh error.jsx"}</p>
      <p>
        {
          "Если в state = true - тогда Эта страница отобразиться, если false - отработает error.jsx"
        }
      </p>
    </>
  );
}
