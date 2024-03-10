"use client";

import Link from "next/link";
import MainMenu from "../(menus)/MainMenu";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Links = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center lg:mt-[250px] mt-[130px] bg-gradient-radial from-green-400 to-green-800 border-b-[1px] border-black">
        <h1
          className="mt-16 lg:mt-32 lg:mb-12 mb-8 text-3xl lg:text-4xl cursor-pointer ml-4 lg:ml-8"
          onClick={handleMenu}
        >
          {menuOpen ? <RxCross2 /> : <MdMenuOpen />}
        </h1>
        <Link
          href="/"
          className="lg:mt-16 mt-6 p-2 font-semibold lg:text-xl text-md mr-6 lg:mr-12 uppercase"
        >
          Contact
        </Link>
      </div>
      {menuOpen && <MainMenu />}
    </>
  );
};

export default Links;
