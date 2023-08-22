import Link from "next/link";

export default async function Home() {
  return (
    <div className="text-center">
      <div className="text-5xl font-bold">Home</div>
      <Link href="/user">Go to user page</Link>
    </div>
  );
}
