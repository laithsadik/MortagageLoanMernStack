import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import SideMenu from "./SideMenu";

export default function SideBar() {
  const [nav, setNav] = useState(false);

  const handleCloseNav = () => {
    setNav(false);
  };
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center mt-1 shadow-sm">
      {/* Left side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
      </div>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 right-0 w-[360px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 right-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          משכנתתות <span className="font-bold">הלוואות</span>
        </h2>
        <nav>
          <SideMenu handleCloseNav={handleCloseNav} />
        </nav>
      </div>
    </div>
  );
}
