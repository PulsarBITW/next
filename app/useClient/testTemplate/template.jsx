"use client";

import CommonButton from "@/app/ui/commonButton/commonButton";
import { useState } from "react";

export default function Template({ children }) {
  const [state, setState] = useState(1);
  const handle = () => setState((prev) => prev + 1);
  return (
    <div>
      <p>{state}</p>
      <CommonButton onClick={handle}>+1</CommonButton>
      <p>
        {
          "template.jsx - Не сохраняет состояние и создает НОВЫЙ экземпляр для каждого из своих дочерних элементов (то есть при навигации по дочерним страницам - будет скидываться счетчик"
        }
      </p>
      <p>
        {
          "layout.jsx - Сохраняет состояние (если поменять название файла на layout.jsx - при навигации по страницам - будет сохранен счетчик"
        }
      </p>
      <div>{children}</div>
    </div>
  );
}
