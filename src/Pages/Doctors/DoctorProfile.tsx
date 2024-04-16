import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";

import { useState, useEffect } from "react";
import TitilePage from "../../components/TitilePage";
import { Rating, Tabs } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@material-ui/lab";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import AddDoctor from "../../components/Doctors/AddDoctor";
import OverView from "../../components/Doctors/OverView";

function DoctorProfile(): ReactJSXElement {
  const [tab, setTab] = useState("1");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (
    event: React.SyntheticEvent<unknown>,
    newValue: string
  ) => {
    setTab(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  return (
    <>
      <TitilePage>Doctor Profile</TitilePage>

      <div className='flex flex-col justify-between p-6 mb-6 bg-white rounded-lg lg:flex-row'>
        {/* Card Doctor */}
        <div className='flex items-center gap-4 '>
          <div className='flex flex-shrink-0 h-[6rem] shadow-md aspect-square overflow-hidden rounded-sm'>
            <img
              src='../../src/img/profile1.jpg'
              alt='profile'
              className=' object-cover p-1'
            />
          </div>
          <div className='flex flex-col justify-between gap-1 '>
            <h2>Dr. Michael Sullivan</h2>
            <p className='text-Secondary text-sm'>Endocrinologist</p>
            <Rating name='read-only' value={4} readOnly />
          </div>
        </div>
        <button
          className='mx-auto px-4 py-3 mt-5 font-normal  md:font-semibold text-white rounded-lg bg-blueColor hover:bg-opacity-90 disabled:bg-opacity-80 md:self-end md:mx-0'
          type='button'
        >
          Book Appointment
        </button>
      </div>

      <div className='bg-white rounded-lg overflow-hidden '>
        <Box sx={{ width: "100%", typography: "Poppins" }}>
          <TabContext value={tab}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
              }}
            >
              <Tabs
                orientation={width < 360 ? "vertical" : "horizontal"}
                value={tab}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "transparent",
                  },
                }}
                variant={width < 360 ? "standard" : "fullWidth"}
                sx={{
                  "& button": {
                    minHeight: "60px",
                  },
                  "& .MuiTabs-root": {
                    backgroundColor: "white", // Default background color
                  },
                  "& .MuiTabs-indicator": {
                    backgroundColor: "rgb(0, 116, 217)", // Background color of active tab
                  },
                  "& .Mui-selected": {
                    backgroundColor: "rgb(0, 116, 217) !important", // Background color of selected tab
                    color: "white !important", // Text color of selected tab
                  },
                  "& .MuiButtonBase-root": {
                    color: "black", // Default text color
                  },
                  "& .MuiButtonBase-root:hover": {
                    color: "white", // Text color on hover
                    backgroundColor: "rgb(0, 116, 217)", // Background color on hover
                  },
                }}
                onChange={handleChange}
                aria-label='lab API tabs example'
              >
                <Tab label='Overview' value='1' />
                <Tab label='Bussiness Hours' value='2' />
                <Tab label='Setting' value='3' />
              </Tabs>
            </Box>
            <TabPanel value='1'>
              <OverView />
            </TabPanel>
            <TabPanel value='2'>Item 2</TabPanel>
            <TabPanel value='3'>
              <AddDoctor />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
  );
}

export default DoctorProfile;
