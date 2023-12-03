"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <h2>global-error.jsx</h2>
        <p>
          Так как для перехвата ошибок в корневом layout'e или tempate нужно
          сделать error.jsx уровнем выше - возникает проблема, так как корневые
          макеты и так на самом высоком уровне
        </p>
        <p>
          Для решения этой проблемы есть global-error.jsx - который
          перехватывает ВСЕ ошибки приложения и так как он в случае ошибки
          заменяет собой корневой layout - то нужно в global-error.jsx указать
          теги html и body
        </p>
        <h3>{`Ошибка - ${error.message}`}</h3>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
