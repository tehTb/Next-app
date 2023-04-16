import './globals.css'
import { Navbar } from './_utils/components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 h-screen ">
        <Navbar />
        <div className="mx-52 pb-5">{children}</div>
      </body>
    </html>
  )
}
