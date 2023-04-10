// 'use client';

import Link from 'next/link';
import { Card } from './Card';
import { useState } from 'react';

interface searchInputProps {
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({ className, placeholder }: searchInputProps) => {
  // const [textBoxData, setTextBoxData] = useState('');
  const data = ['TEST01', 'TEST02', 'TEST03'];
  return (
    <>
      <form className={className}>
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
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
      {
        <Card className="mt-2 relative">
          {data.map((suggestion) => {
            return (
              <div key={suggestion} className="hover:bg-gray-400">
                <Link href={`/${suggestion}`}>{suggestion}</Link>
              </div>
            );
          })}
        </Card>
      }
    </>
  );
};
