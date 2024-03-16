import { useState } from "react";
import React from "react";
import SideBar from "./SideBar";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

function Layout() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClick() {
    setOpenMenu((open) => !open);
  }

  return (
    // eslint-disable-next-line react/jsx-no-undef
    <div className='flex font-Inter'>
      <SideBar openMenu={openMenu} />
      <div className='flex flex-col w-full'>
        <NavBar handleClick={handleClick} />
        <section className='bg-darkgray p-6 h-full'>
          <Outlet />
        </section>
      </div>
    </div>
  );
}

export default Layout;
