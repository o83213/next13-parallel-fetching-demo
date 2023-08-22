async function getPostByUserId(userId) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );

  if (!response.ok) {
    throw new Error("Error fetching posts");
  }

  return await response.json();
}

export { getPostByUserId };
