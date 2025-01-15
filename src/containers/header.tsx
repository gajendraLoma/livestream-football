"use client";
import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
import BellIcon from "@heroicons/react/24/outline/BellIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";

interface HeaderProps {
  contentRef: React.RefObject<HTMLElement>;
}

function Header({ contentRef }: HeaderProps): JSX.Element {
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  useEffect(() => {
    themeChange(false);
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setCurrentTheme(savedTheme);
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
        localStorage.setItem("theme", "dark");
      } else {
        setCurrentTheme("light");
        localStorage.setItem("theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setCurrentTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme); 
  };

  
  return (
    <div className="navbar sticky top-0 bg-base-100 z-10 shadow-md z-50">
      {/* Menu toggle for mobile view or small screen */}
      <div className="flex-1">
        <label
          htmlFor="left-sidebar-drawer"
          className="btn btn-primary drawer-button lg:hidden"
        >
          <Bars3Icon className="h-5 inline-block w-5" />
        </label>
       
  <div className="container mx-auto px-4">
  <div className="hidden md:block">
    <label className="input input-bordered flex items-center gap-2 dark:bg-gray-700 w-full max-w-[600px]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="h-4 w-4 opacity-70"
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
      <input
        type="text"
        className="grow bg-transparent focus:outline-none"
        placeholder="Search leagues..."
      />
    </label>
  </div>
</div>


      </div>

      <div className="flex-none">

        {/* Light and dark theme selection toggle */}
        <label className="swap mr-4">
          <input
            type="checkbox"
            checked={currentTheme === "dark"}
            onChange={toggleTheme}
          />
          <SunIcon
            data-set-theme="light"
            data-act-class="ACTIVECLASS"
            className={`fill-current w-6 h-6 ${
              currentTheme === "dark" ? "swap-on" : "swap-off"
            }`}
          />
          <MoonIcon
            data-set-theme="dark"
            data-act-class="ACTIVECLASS"
            className={`fill-current w-6 h-6 ${
              currentTheme === "light" ? "swap-on" : "swap-off"
            }`}
          />
        </label>

        {/* User Profile Dropdown */}
        <div className="avatar online">
  <div className="w-10 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
      </div>
    </div>
  );
}

export default Header;
