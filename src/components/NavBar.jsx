/* eslint-disable react/prop-types */
import { IoMenu } from "react-icons/io5"; // Menu
import { IoMdNotifications } from "react-icons/io"; // Notification

function NavBar({ handleClick }) {
  return (
    <>
      {/* Global Container */}
      <nav className='bg-white w-full shadow-md '>
        <section className='flex items-center justify-between px-6 h-[4.5rem]'>
          {/* Icon */}
          <button
            onClick={handleClick}
            className='p-2 rounded-full bg-lightblueColor shadow-md shadow-indigo-200'
          >
            <IoMenu className='text-2xl  text-blueColor' />
          </button>

          <div className='flex items-center space-x-3'>
            {/* notification */}
            <button
              onClick={handleClick}
              className='p-2 rounded-full bg-lightblueColor shadow-md shadow-indigo-200'
            >
              <IoMdNotifications className='text-2xl  text-blueColor' />
            </button>
            <div className='flex items-center justify-center  p-2 rounded-md shadow-md duration-100 shadow-indigo-100 md:space-x-4 md:px-3'>
              <div className='hidden flex-col items-end md:flex'>
                <h4 className='text-sm font-semibold'>Dr Roberts</h4>
                <p className='text-xs font-medium text-gray-400'>Admin</p>
              </div>
              <div className='w-9 h-9 bg-iconBgColor'>
                <img className='' src='../../src/img/profile1.jpg' alt='' />
              </div>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}

export default NavBar;
