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
    <div className='flex max-h-screen flex-col font-Inter'>
      <div className='grid grid-cols-[auto,1fr] overflow-auto flex-grow'>
        <SideBar openMenu={openMenu} />
        <section className='bg-darkgray overflow-auto'>
          <NavBar handleClick={handleClick} />
          {/* Children */}
          <div className='p-6 overflow-auto '>
            <Outlet />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Layout;
