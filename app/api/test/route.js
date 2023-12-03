export async function GET() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/todos?_limit=3",
    {
      next: { revalidate: 1 },
    }
  );
  const data = await res.json();
  console.log(data);
  return Response.json(data);
}
