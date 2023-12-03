import Link from "next/link";

export default function Page() {
  return (
    <>
      <p>Для проверки:</p>
      <Link
        style={{
          border: "1px solid red",
          textDecoration: "none",
          padding: "2px 4px",
        }}
        href="/useClient/testTemplate/page1"
      >
        {" "}
        page1
      </Link>
      <Link
        style={{
          border: "1px solid red",
          textDecoration: "none",
          padding: "2px 4px",
        }}
        href="/useClient/testTemplate/page2"
      >
        {" "}
        page2
      </Link>
    </>
  );
}
