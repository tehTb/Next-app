import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <>
        <h1 className="pt-10 text-purple-400 font-bold text-5xl">Hello!</h1>
      </>
    </main>
  );
}
