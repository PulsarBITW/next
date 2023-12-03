import Link from "next/link";

export default function Page() {
  //throw new Error("new error"); // эта ошибка вызовет error только для @team - другие параллельные маршруты будут отображаться по прежнему
  return (
    <div>
      <h2>team.jsx - параллельная страница</h2>
      <p>*страница для разработчиков</p>
      <Link href="/useClient/paral/conti">{"->conti"}</Link>
    </div>
  );
}
