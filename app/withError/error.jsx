"use client";

import { useEffect } from "react";
import CommonButton from "../ui/commonButton/commonButton";
import { useContext } from "react";
import { ContextError } from "../contexts";

export default function Error({ error, reset }) {
  const { errorState, setErrorState } = useContext(ContextError);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h1>Something wrong</h1>
      <p>{error.message}</p>
      <h3>{`current stateError = ${errorState}`}</h3>
      <CommonButton onClick={() => setErrorState((prev) => !prev)}>
        Убрать/Добавить
      </CommonButton>
      <CommonButton onClick={() => reset()}>reset</CommonButton>
      <p>
        Эта страница отобразиться - если при открытии page.jsx - возникла ошибка
      </p>
      <p>true/false - toggle для создания ошибки при переходе на страницу</p>
      <p>
        reset() - функция для повторной попытки открытия страницы, данные
        функция предоставляется из props'ов для error.jsx
      </p>
    </>
  );
}
