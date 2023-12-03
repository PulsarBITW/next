"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>conti page - продолжение от @team</h1>
      <h2>{"@team -> /conti"}</h2>
      <Link href="/useClient/paral">back</Link>
    </div>
  );
}
