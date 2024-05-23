"use client";

import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";
import TextGradient from "./TextGradient";
import InputSearch from "./InputSearch";
import NavLink from "./NavLink";
import { FaCrown } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky z-10 -top-1 bg-color-primary/75 dark:bg-color-secondary/75 backdrop-blur-xl">
      <nav className="container flex items-center justify-between px-4 py-2 mx-auto">
        <div className="flex items-center space-x-4">
          <div className="text-2xl font-bold">
            <Link href="/">
              <TextGradient body={"Kyoto.Net"} className="text-3xl font-bold" />
            </Link>
          </div>
          <div className="hidden space-x-4 md:flex">
            <NavLink href={"/"} gradient={"G"} text={"enre"} />
            <NavLink href={"/"} gradient={"M"} text={"ovies"} />
            <NavLink href={"/"} gradient={"N"} text={"ews"} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitch />
          <Link
            href="/"
            className="relative items-center hidden space-x-1 font-bold transition-all duration-100 ease-in-out md:flex group hover:scale-105"
          >
            <FaCrown className="text-2xl text-color-quaternary" />
            <h1 className="inline-block text-transparent bg-gradient-to-r to-color-quaternary from-color-quinary bg-clip-text">
              Premium
            </h1>
            <span className="absolute -bottom-2 left-0 w-0 transition-all h-0.5  bg-gradient-to-r to-color-quaternary from-color-quinary  group-hover:w-full"></span>
          </Link>
          <div className="hidden md:block">
            <InputSearch placeholder={"Search anime ..."} />
          </div>

          <button
            className="flex flex-col items-center justify-center w-10 h-10 rounded md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            <span
              className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current my-1.5 transition duration-300 ease-in-out ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transform transition duration-300 ease-in-out ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </nav>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:hidden py-4 flex-col space-y-5`}
      >
        <div className="flex items-center justify-center">
          <NavLink href={"/"} gradient={"G"} text={"enre"} />
          <NavLink href={"/"} gradient={"M"} text={"ovies"} />
          <NavLink href={"/"} gradient={"N"} text={"ews"} />
        </div>
        <div className="flex items-center justify-center ">
          <Link
            href="/"
            className="relative flex items-center space-x-1 font-bold transition-all duration-100 ease-in-out md:flex group hover:scale-105"
          >
            <FaCrown className="text-2xl text-color-quaternary" />
            <h1 className="inline-block text-transparent bg-gradient-to-r to-color-quaternary from-color-quinary bg-clip-text">
              Premium
            </h1>
            <span className="absolute -bottom-2 left-0 w-0 transition-all h-0.5  bg-gradient-to-r to-color-quaternary from-color-quinary  group-hover:w-full"></span>
          </Link>
        </div>
        <div className="flex items-center justify-center ">
          <InputSearch placeholder={"Search anime ..."} />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
