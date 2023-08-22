import Link from "next/link";
import { getUsers } from "../../lib/getUsers";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div className="text-center mt-20">
      <h1 className="text-5xl font-bold">Users:</h1>
      {users.map((user) => {
        return (
          <div className="text-3xl mt-10" key={user.id}>
            <Link href={`/user/${user.id}`}>{user.name}</Link>
          </div>
        );
      })}
    </div>
  );
}
