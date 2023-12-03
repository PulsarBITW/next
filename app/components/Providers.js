"use client";
import { SessionProvider } from "next-auth/react";
import { useState } from "react";
import { ContextError } from "../contexts";

export const Providers = ({ children }) => {
  const [errorState, setErrorState] = useState(false);

  return (
    <SessionProvider>
      <ContextError.Provider
        value={{ errorState: errorState, setErrorState: setErrorState }}
      >
        {children}
      </ContextError.Provider>
    </SessionProvider>
  );
};
