import { getServerSession } from "next-auth";

const Profile = async () => {
  const session = await getServerSession();
  console.log(session);

  return (
    <>
      <h1>Your account</h1>
      <h3>{session?.user?.name}</h3>
      <img src={session?.user?.image} />
    </>
  );
};

export default Profile;
