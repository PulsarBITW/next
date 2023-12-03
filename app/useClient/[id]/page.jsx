export async function generateStatisParams() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10&"
  ).then((res) => res.json());

  return posts.map((post) => ({ id: post.id }));
}

export default function DynamicsPage({ params }) {
  // console.log(params);
  return (
    <>
      <h1>Динамическая страница c id = {params.id}</h1>
    </>
  );
}
