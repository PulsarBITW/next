"use client";
export default function ErrorPage({ error }) {
  return (
    <h1>
      {"Страница ошибки для paral ---"} {error.message}
    </h1>
  );
}
