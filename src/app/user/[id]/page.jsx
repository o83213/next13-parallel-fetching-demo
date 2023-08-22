import { getUserById } from "@/lib/getUserById";
import { getPostByUserId } from "@/lib/getPostByUserId";
import { Suspense } from "react";
import UserPosts from "@/components/UserPosts";

export default async function Page({ params: { id } }) {
  const userData = getUserById(id);
  const userPosts = getPostByUserId(id);

  const user = await userData;

  return (
    <div>
      <h1 className="text-5xl font-bold">User Information</h1>
      <p className="text-3xl mt-10">{user.name}</p>
      <Suspense fallback={<div>Loading user posts...</div>}>
        <UserPosts promise={userPosts} />
      </Suspense>
    </div>
  );
}
