import { Inter } from 'next/font/google'
import { Button } from './_utils/components/Button'
import { Card } from './_utils/components/Card'
import { SearchInput } from './_utils/components/SearchInput'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  return (
    <main className="flex flex-col">
      <>
        <h1 className="pt-10 font-bold text-5xl">Hello!</h1>
        <div className="flex gap-4 my-5">
          <Card className="w-1/2 h-40 text-xl">
            Character search
            <SearchInput placeholder="Character name" className="pt-4" />
          </Card>
        </div>
        <Button className="w-1/2">Hej knapp</Button>
      </>
    </main>
  )
}
