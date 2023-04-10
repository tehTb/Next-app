export const getRandomUserData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')

  if (!res.ok) throw new Error('Failed to get user data')

  return res.json()
}
