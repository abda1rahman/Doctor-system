/* eslint-disable react/prop-types */
import { doctorMenu, FaThLarge, FaUserDoctor } from "../../data/sidebar";

function SideBar({ openMenu }) {
  console.log(doctorMenu);
  return (
    <>
      {/* Global Container */}
      <aside className='bg-gray-100 min-h-screen shadow-md'>
        <section
          className={`flex flex-col ${
            openMenu && "w-[15rem]"
          } w-20 duration-100 md:w-[19rem]`}
        >
          {/* Logo */}
          <div className='flex items-center justify-center w-full h-[4.5rem] bg-white shadow-md z-10'>
            {/* mobile image */}
            <img
              className={`w-12 p-2 ${openMenu && "hidden"} md:hidden`}
              src='../../src/img/mobile-logo-jordan-doctors.png'
              alt='logo'
            />
            {/* Desctop image */}
            <img
              className={`${openMenu ? "block" : "hidden"} md:block w-36`}
              src='../../src/img/logo-jordan-doctors.png'
              alt='logo'
            />
          </div>
          {/* Menu List */}
          <div
            className={`flex flex-col text-iconColor py-6 space-y-3 ${
              openMenu ? "mx-0 px-3" : "mx-auto"
            } md:px-3 md:mx-0`}
          >
            {doctorMenu.map((list, index) => (
              <div
                key={index}
                className={`group w-full flex items-center rounded-lg ${
                  openMenu && "space-x-6"
                } md:space-x-6`}
              >
                <span className='bg-iconBgColor px-3 py-3 rounded-lg'>
                  {<list.icon className=' group-hover:text-blueColor ' />}
                </span>
                <h4
                  className={`group-hover:text-blueColor font-medium ${
                    openMenu ? "block" : "hidden"
                  } md:block`}
                >
                  {list.title}
                </h4>
              </div>
            ))}

          </div>
        </section>
      </aside>
    </>
  );
}

export default SideBar;
