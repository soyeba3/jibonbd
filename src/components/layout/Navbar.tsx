import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b backdrop-blur-md bg-white/80 border-slate-100">
      <div className="container flex justify-between items-center px-4 mx-auto h-16">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/assets/images/logo/jibon-logo.png"
            alt="Jibon BD"
            width={160}
            height={160}
            className="object-contain w-40 h-40"
          />
        </Link>

        <div className="hidden gap-8 items-center md:flex">
          <Link
            href="#"
            className="font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            Home
          </Link>
          <Link
            href="#"
            className="font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            Products
          </Link>
          <Link
            href="#"
            className="font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            Categories
          </Link>
          <Link
            href="#"
            className="font-medium transition-colors text-slate-600 hover:text-emerald-600"
          >
            About
          </Link>
        </div>

        <div className="flex gap-4 items-center">
          <button className="p-2 transition-colors text-slate-600 hover:text-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
          <button className="relative p-2 transition-colors text-slate-600 hover:text-emerald-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              />
            </svg>
            <span className="absolute right-0 top-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};
