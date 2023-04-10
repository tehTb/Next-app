export const getUser = async (userId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  )

  if (!res.ok) throw new Error('Failed to get user')

  return res.json()
}
