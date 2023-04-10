import Link from 'next/link'
import { getRandomUserData } from '../lib/getRandomData'
import { Card } from '../_utils/components/Card'

export default async function UsersPage() {
  const userData: Promise<User[]> = getRandomUserData()
  const users = await userData

  return (
    <>
      <div className="mb-5 text-lg">
        User data taken from{' '}
        <a
          href="https://jsonplaceholder.typicode.com/users"
          target="_blank"
          className="hover:underline"
        >
          https://jsonplaceholder.typicode.com/users
        </a>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {users.map((user) => {
          return (
            <Link key={user.id} href={`/users/${user.id}`}>
              <Card className="hover:translate-x-1 hover:-translate-y-1">
                <div className="flex gap-2 flex-col">
                  <h1>{user.name}</h1>
                  <div>
                    {user.address.street} {user.address.suite}{' '}
                    {user.address.city}
                  </div>
                  <div>{user.company.name}</div>
                  <div>
                    Email: {user.email} Tel: {user.phone}
                  </div>
                </div>
              </Card>
            </Link>
          )
        })}
      </div>
    </>
  )
}
