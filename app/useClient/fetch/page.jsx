// revalidate : 10 - каждые 10с СЕРВЕР выполняет запрос за данными, поэтому в худшем случае у нас не будет свежих данных примерно 10с (НУЖНО ОБНОВИТЬ СТРАНИЦУ)
export const getData = async () => {
  const res = await fetch("http://localhost:57943/cates", {
    next: { revalidate: 10 },
  });
  return res.json();
};

export default async function Page() {
  const data = await getData();

  return (
    <>
      <h1>{"Кешированние запроса"}</h1>
      <>
        {data.map((el) => (
          <p key={el.id * Math.random()}>{el.title}</p>
        ))}
      </>
    </>
  );
}
