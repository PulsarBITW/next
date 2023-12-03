"use client";
import { useContext } from "react";
import { ContextError } from "@/app/contexts";
import CommonButton from "@/app/ui/commonButton/commonButton";

export default function Layout({ team, lead, children }) {
  const { errorState, setErrorState } = useContext(ContextError);

  return (
    <>
      <h1>Layout для paral</h1>
      <p>
        {
          "Параллельная маршрутизация также позволяет условно отображать слот на основе определенных условий, например состояния аутентификации."
        }
      </p>
      <p>
        {
          " Параллельная маршрутизация позволяет определять независимые состояния ошибок и загрузки для каждого маршрута, поскольку они передаются независимо."
        }
      </p>
      <p>
        {
          "     Параллельная маршрутизация позволяет одновременно или условно отображать одну или несколько страниц в одном макете."
        }
      </p>
      <CommonButton
        onClick={() => setErrorState((prev) => !prev)}
      >{`По условию - ${errorState}`}</CommonButton>
      {children}
      <div className="paral">
        {!errorState ? (
          <>
            {team}
            {lead}
          </>
        ) : (
          <>{team}</>
        )}
      </div>
    </>
  );
}
