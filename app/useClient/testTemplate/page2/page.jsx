import Link from "next/link";
export default function Page() {
  return (
    <div>
      {"    Page 2(children) для template"}
      <Link href="/useClient/testTemplate/page1"> page1</Link>
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
