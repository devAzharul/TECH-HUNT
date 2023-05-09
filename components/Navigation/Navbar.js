import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavDrawer = () => {
    setIsNavOpen((prevState) => !prevState);
  };

  return (
    <header className="h-[70px] flex justify-center sticky top-0 z-30 w-full">
      <nav className="basis-11/12 md:basis-10/12 3xl:basis-9/12 flex justify-between items-center h-full mx-auto">
        <div>
          <h1 className="font-extrabold text-2xl lg:text-4xl">
            <Link href={`/`}>
              TECH HUNT
            </Link>
          </h1>
        </div>
        <div>
          <ul className="flex gap-x-2 lg:gap-x-6 items-center justify-end">
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`/about`}>About US</Link>
            </li>
            <li>
              <Link href={`/contact`}>Contact US</Link>
            </li>
            <li>
              <Link href={`/service`}>Services</Link>
            </li>
            <li>
              <Link href={`/blog`}>Blog</Link>
            </li>
            <li>
              <button className="bg-[#ffc600] hover:bg-[#099DFD] duration-200 text-black hover:text-white px-3 py-1.5 rounded-3xl font-semibold">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
