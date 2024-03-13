import { useState } from "react";

import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";

function App() {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClick () {
    setOpenMenu((open)=>!open) 
  }
  return (
    <>
      <div className='flex items-start'>
        <SideBar openMenu={openMenu} />
        <NavBar handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
