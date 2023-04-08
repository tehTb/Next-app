import Link from "next/link";

export const Navbar = () => {
  const navItems = ["Home", "About"];

  return (
    <nav className=" border-b border-gray-300 py-5">
      <div className="mx-60 flex gap-3 text-lg font-mono">
        <a href="https://nextjs.org" target="_blank" className="mr-10 mt-2">
            <img src="/next.svg" width={75} height={75}  />
        </a>
        {navItems.map((item, index) => {
          const route = item === "Home" ? "/" : `/${item}`;
          return (
            <>
              <Link href={route.toLowerCase()}>{item}</Link>
              {index === navItems.length - 1 ? "" : "|"}
            </>
          );
        })}
      </div>
    </nav>
  );
};
