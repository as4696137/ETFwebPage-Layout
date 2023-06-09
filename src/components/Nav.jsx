import React, { useState } from "react";
import logo from "../img/logo.png";
import { Link } from "react-scroll";

const Nav = () => {
  const [IsMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className=" sticky top-0 w-full h-16 bg-white shadow-md flex justify-between items-center xl:justify-center z-50">
        <img
          className="relative transition md:left-[6vw] xl:mr-11 scale-75"
          src={logo}
          alt="logo"
        />
        <div className="hidden bg-white h-full xl:flex items-center justify-center xl:flex-row xl:ml-80">
          <Link
            to="page1"
            smooth={true}
            duration={500}
            className="relative h-full flex justify-center items-center font-normal text-lg hover:cursor-pointer hover:font-bold xl:hover:text-main-darkgreen xl:after:hover:transition-transform xl:after:h-1 xl:after:w-full xl:after:translate-y-4 xl:after:duration-300 xl:after:ease-out xl:after:scale-x-0 after:bg-yellow-500 after:absolute xl:after:hover:scale-x-100 xl:px-7"
          >
            佈局潔淨能源3大關鍵
          </Link>
          <Link
            to="page2"
            smooth={true}
            duration={500}
            className="relative h-full flex justify-center items-center font-normal text-lg hover:cursor-pointer hover:font-bold xl:hover:text-main-darkgreen xl:after:hover:transition-transform xl:after:h-1 xl:after:w-full xl:after:translate-y-4 xl:after:duration-300 xl:after:ease-out xl:after:scale-x-0 after:bg-yellow-500 after:absolute xl:after:hover:scale-x-100 xl:px-7"
          >
            立即參與·改變世界
          </Link>
          <Link
            to="page3"
            smooth={true}
            duration={500}
            className="relative h-full flex justify-center items-center font-normal text-lg hover:cursor-pointer hover:font-bold xl:hover:text-main-darkgreen xl:after:hover:transition-transform xl:after:h-1 xl:after:w-full xl:after:translate-y-4 xl:after:duration-300 xl:after:ease-out xl:after:scale-x-0 after:bg-yellow-500 after:absolute xl:after:hover:scale-x-100 xl:px-7"
          >
            能源新常態
          </Link>
        </div>
        <button
          className="w-20 h-full flex xl:hidden flex-col space-y-1.5 justify-center items-center"
          onClick={() => setMenuOpen(!IsMenuOpen)}
        >
          <div
            className={` w-1/3 h-0.5 bg-main-darkgreen transition-transform duration-300 ease-out ${
              IsMenuOpen ? "rotate-45 translate-y-2" : "rotate-0 translate-y-0"
            }`}
          ></div>
          <div
            className={` w-1/3 h-0.5 bg-main-darkgreen transition-opacity duration-300 ease-out ${
              IsMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={` w-1/3 h-0.5 bg-main-darkgreen transition-transform duration-300 ease-out ${
              IsMenuOpen
                ? "-rotate-45  -translate-y-2"
                : "rotate-0 translate-y-0"
            }`}
          ></div>
        </button>
      </div>

      <div
        className={`fixed top-16 w-full flex flex-col items-center xl:hidden transition-transform duration-700 ease-in-out z-40 ${
          IsMenuOpen ? "translate-y-0" : "-translate-y-60"
        }`}
      >
        <Link
          to="page1"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
          className="py-4 w-full text-center bg-white border-main-darkgreen border-t-[1px] font-bold hover:text-white hover:bg-main-darkgreen hover:transition-colors hover:duration-1000 hover:ease-out"
          href="#"
        >
          佈局潔淨能源3大關鍵
        </Link>
        <Link
          to="page2"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
          className="py-4 w-full text-center bg-white border-main-darkgreen border-t-[1px] font-bold hover:text-white hover:bg-main-darkgreen hover:transition-colors hover:duration-1000 hover:ease-out"
          href="#"
        >
          立即參與·改變世界
        </Link>
        <Link
          to="page3"
          smooth={true}
          duration={500}
          onClick={() => setMenuOpen(false)}
          className="py-4 w-full text-center bg-white border-main-darkgreen border-t-[1px] border-b-[1px] font-bold hover:text-white hover:bg-main-darkgreen hover:transition-colors hover:duration-1000 hover:ease-out"
          href="#"
        >
          能源新常態
        </Link>
      </div>
    </>
  );
};

export default Nav;
