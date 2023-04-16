'use client'

import Link from 'next/link'
import { Card } from './Card'
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

type searchInputType = {
  placeholder?: string
  className?: string
}

export function SearchInput({ className, placeholder }: searchInputType) {
  const [search, setSearch] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSearch('')
    router.push(`/${search}/`)
  }
  const data = ['TEST01', 'TEST02', 'TEST03', 'ABC']

  const filteredData = data.filter((data) =>
    data.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
  )

  return (
    <>
      <form className={className} onSubmit={handleSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
            id="character-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder={placeholder}
          ></input>
          <button
            type="submit"
            className="absolute right-2.5 bottom-2.5 bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      {search.length > 1 && (
        <Card className="mt-2 relative">
          {filteredData.length > 0 ? (
            filteredData.map((suggestion) => {
              return (
                <Link key={suggestion} href={`/${suggestion}`}>
                  <div className="hover:bg-gray-400">{suggestion}</div>
                </Link>
              )
            })
          ) : (
            <p>No data found</p>
          )}
        </Card>
      )}
    </>
  )
}
