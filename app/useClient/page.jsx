"use client";
import classes from "./testclient.module.css";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import CommonButton from "../ui/commonButton/commonButton";
import { cache } from "react";

import Link from "next/link";
const TestClient = () => {
  const [state1, setState1] = useState(1);

  const router = useRouter();
  const handle = () => {
    router.refresh();
  };
  //console.log("render"); // refresh() - вызовет ререндер, НО при этом state НЕ обновится

  const pathname = usePathname(); // /useClient - получение текущего url'a

  return (
    <div className={classes.cont}>
      <p>
        {
          "  router.refresh() - вызывает обновление маршрута - то есть выполняется новый запрос на сервер происходит повторный рендеринг компонентов и запросов, НО сохраняется state и состояние браузера (например полоса прокрутки)"
        }
      </p>
      <div className={classes.group}>
        <button onClick={handle}>{"router.refresh()"}</button>
        <button onClick={() => setState1((prev) => prev + 1)}>+1 state</button>
        <button onClick={() => router.back()}>back()</button>
      </div>
      <h2>{"Группа маршрутов"}</h2>
      <p>{"- создается путем указания папки в () скобках - (testgroup)"}</p>
      <p>
        {
          "Группирование маршрутов в группы позволяет делить маршруты на сегменты, а так же дает возможность добавить свои layout'ы для определенных групп"
        }
      </p>
      <p>
        {"        Так же группирование маршрутов позволяет создавать несколько корневыхlayout'ов - для этого необходимо удалить корневой layout самого верхнегоуровня и добавить свой layout для каждой группы маршрутов. При этомначальная страница - " /
          " должна находиться в какой-то группе маршрутов -иначе у него НЕ будет корневого layout'а"}
      </p>
      <p className={classes.important}>
        {
          "        Навигация по нескольким КОРНЕВЫМ layout'ам приведет к полной загрузке страницы - это применимо ТОЛЬКО к КОРНЕВЫМ layut'ам. Т.е. если у нас у всех группы свои корневые layout'ы - тогда переход по разным группам вызовет полную перезагрузку страницы"
        }
      </p>
      <p>
        {
          "*Имя папки группы маршрутов - НЕ имеет значения, так как это имя НЕ попадает в url"
        }
      </p>
      <Link className={classes.link} href="/testFirst">
        testFirst
      </Link>
      <Link className={classes.link} href="/testSecond">
        testSecond
      </Link>
      <h1>Page with loading</h1>
      <Link className={classes.link} href="/withLoad">
        withLoad
      </Link>
      <h1>Page with error</h1>
      <Link className={classes.link} href="/withError">
        withError
      </Link>
      <h1>Параллельные маршруты</h1>
      <Link className={classes.link} href="/useClient/paral">
        параллельные страницы
      </Link>
      <h1>Параллельные маршруты</h1>
      <Link className={classes.link} href="/useClient/fetch">
        кешированние запроса
      </Link>
      <h1>Параллельные маршруты</h1>
      <Link className={classes.link} href="/useClient/testTemplate">
        {"  template.jsx"}
      </Link>
    </div>
  );
};

export default TestClient;
