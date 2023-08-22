export async function getUserById(id) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );

  if (!response.ok) {
    throw new Error("Error fetching user");
  }
  return await response.json();
}
