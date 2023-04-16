import { Button } from './_utils/components/Button'
import { Card } from './_utils/components/Card'
import { SearchInput } from './_utils/components/SearchInput'
import ServerSelectDropdown from './components/ServerSelectDropdown'

export default async function Home() {
  return (
    <main className="flex flex-col">
      <div>
        <h1 className="pt-10 font-bold text-5xl">Hello!</h1>
        <div className="flex gap-4 my-5">
          <Card className="w-full min-w-min h-40 text-xl">
            <div>Character search</div>
            {/* <ServerSelectDropdown /> */}
            <SearchInput placeholder="Character name" className="pt-4" />
          </Card>
        </div>
        <Button className="w-1/3 min-w-min ">Hej knapp</Button>
      </div>
    </main>
  )
}
