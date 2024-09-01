import React from "react";
import CardDashboard from "../CardDashboard";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdPersonAddAlt1 } from "react-icons/md";
import { IoIosPeople } from "react-icons/io"; //
import { FaUserDoctor } from "react-icons/fa6";

function CardDashboardDoctor() {
  const DoctorCardDashboard = [
    {
      icon: <RiMoneyDollarCircleFill />,
      title: "Avg Earnings",
      count: "$" + 500,
    },
    {
      icon: <MdPersonAddAlt1 />,
      title: "Appointments",
      count: 30,
    },
    {
      icon: <IoIosPeople />,
      title: "Patients",
      count: 20,
    },
    {
      icon: <FaUserDoctor />,
      title: "All Doctors",
      count: 35,
    },
  ];

  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5'>
      {DoctorCardDashboard.map((item, index) => (
        <CardDashboard key={index} item={item} />
      ))}
    </div>
  );
}

export default CardDashboardDoctor;
