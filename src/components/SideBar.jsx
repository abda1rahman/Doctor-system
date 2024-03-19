/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import { AdminMenu, doctorMenu, FaThLarge, FaUserDoctor } from "../../data/sidebar";

function SideBar({ openMenu }) {
  return (
    <>
      {/* Global Container */}
      <aside className='bg-white min-h-screen'>
        <section
          className={`flex flex-col ${
            openMenu && "w-[15rem]"
          } w-20 duration-100 lg:w-[19rem]`}
        >
          {/* Logo */}
          <div className='flex items-center justify-center w-full h-[4.5rem] bg-white shadow-sm z-10'>
            {/* mobile image */}
            <img
              className={`w-12 p-2 ${openMenu && "hidden"} lg:hidden`}
              src='../../src/img/mobile-logo-jordan-doctors.png'
              alt='logo'
            />
            {/* Desctop image */}
            <img
              className={`${openMenu ? "block" : "hidden"} lg:block w-36`}
              src='../../src/img/logo-jordan-doctors.png'
              alt='logo'
            />
          </div>
          {/* Menu List */}
          <div
            className={`flex flex-col text-iconColor mt-6 py-6 space-y-4 ${
              openMenu ? "mx-0 px-3" : "mx-auto"
            } lg:px-3 lg:mx-0`}
          >
            {AdminMenu.map((list, index) => (
              <NavLink
                to={list.path}
                key={index}
                className={`group w-full flex items-center rounded-lg ${
                  openMenu && "space-x-6"
                } lg:space-x-6`}
              >
                <span className='bg-iconBgColor px-3 py-3 rounded-lg'>
                  {<list.icon className=' group-hover:text-blueColor ' />}
                </span>
                <h4
                  className={`group-hover:text-blueColor font-medium ${
                    openMenu ? "block" : "hidden"
                  } lg:block`}
                >
                  {list.title}
                </h4>
              </NavLink>
            ))}

          </div>

          {/* Image Bottom */}
          <div className="w-44 h-44 self-center mt-10  hidden lg:block">
            <img src="../../src/img/logo-sidebar-bottom.jpg" alt="" />
          </div>
        </section>
      </aside>
    </>
  );
}

export default SideBar;
