import "server-only";

export default async function UserPosts({ promise }) {
  const posts = await promise;
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        );
      })}
    </ul>
  );
}
