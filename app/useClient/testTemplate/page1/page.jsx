import Link from "next/link";

export default function Page() {
  return (
    <div>
      {" Page 1(children) для template"}
      <Link href="/useClient/testTemplate/page2"> page2</Link>
      <p>на template</p>
      <Link
        style={{
          border: "1px solid red",
          textDecoration: "none",
          padding: "2px 4px",
        }}
        href="/useClient/testTemplate"
      >
        template
      </Link>
    </div>
  );
}
