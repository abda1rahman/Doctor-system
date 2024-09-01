import React from "react";
import TitilePage from "../../components/TitilePage";
import CardDashboardDoctor from "../../components/Doctors/CardDashboardDoctor";
import Charts from "../../components/Charts";
import TopDoctors from "../../components/Doctors/TopDoctors";
import { ClassNames } from "@emotion/react";

function Dashboard() {
  return (
    <>
      <TitilePage>Dashboard</TitilePage>

      <CardDashboardDoctor />

      <div className='grid grid-cols-12 gap-5 mt-8 h-full'>
        <Charts className='col-span-12 md:col-span-8' />
        <TopDoctors className='col-span-12 md:col-span-4' />
      </div>
    </>
  );
}

export default Dashboard;
