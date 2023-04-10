import Link from 'next/link'

export const Navbar = () => {
  const navItems = ['Home', 'About', 'Users']

  return (
    <nav className="border-b border-gray-600 py-5 bg-gray-800 mb-5">
      <div className="mx-52 flex gap-3 text-lg font-mono">
        <a href="https://nextjs.org" target="_blank" className="mr-10 mt-1">
          <img
            src="/next.svg"
            className="bg-white p-1"
            width={75}
            height={75}
          />
        </a>

        {navItems.map((item, index) => {
          const route = item === 'Home' ? '/' : `/${item}`
          return (
            <>
              <Link key={index} href={route.toLowerCase()}>
                <div className="hover:text-gray-400">{item}</div>
              </Link>
              {index === navItems.length - 1 ? '' : '|'}
            </>
          )
        })}
      </div>
    </nav>
  )
}
