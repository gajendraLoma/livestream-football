"use client";

import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import Link from "next/link";
import SidebarSubmenu from "./sidebar-submenu";
import routes from "@/helper/sidebar-routes";
import { usePathname } from "next/navigation";

interface LeftSidebarProps {}

function LeftSidebar(props: LeftSidebarProps) {
  const pathname = usePathname();

  const close = () => {
    const leftSidebarDrawer = document.getElementById("left-sidebar-drawer");
    if (leftSidebarDrawer) leftSidebarDrawer.click();
  };

  return (
    <div className="drawer-side z-30 overflow-hidden">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300 btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={close}
        >
          <XMarkIcon className="h-5 inline-block w-5" />
        </button>
        <li className="mb-2 font-semibold text-xl pt-0">
        <Link href="/home">
        <img className="mask mask-squircle w-10" src="images/logos.png" alt="Onesport Logo" />
       
        livestream football
    </Link>
        
        </li>
        <div
          className="overflow-y-scroll pb-20 no-scrollbar"
          style={{ height: "85vh" }}
        >
           
          {routes.map((route, k: number) => (
            <li className="" key={k}>
              {route.submenu ? (
                <SidebarSubmenu {...route} />
              ) : (
                <Link
                  href={route.path}
                  className={`${
                    pathname == route.path
                      ? "font-semibold bg-base-200 "
                      : "font-normal"
                  }`}
                >
                  {route.icon} {route.pageName}
                  {pathname === route.path ? (
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-[#5742A9]"
                      aria-hidden="true"
                    ></span>
                  ) : null}
                </Link>
              )}
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
}

export default LeftSidebar;
