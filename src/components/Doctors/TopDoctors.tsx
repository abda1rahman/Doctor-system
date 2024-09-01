import React, { useEffect, useState } from "react";
import { Doctors } from "../type";
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

interface TopDoctorProps {
  className?: string;
}

function TopDoctors({ className }: TopDoctorProps) {
  const [doctors, setDoctors] = useState<Doctors[]>([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      const res = await fetch(`http://localhost:3004/doctors`);
      const data: any = await res.json();
      setDoctors(data);
    };
    fetchDoctor();
  }, []);

  return (
    <div
      className={
        className +
        " flex flex-col bg-white p-4 shadow-lg shadow-shadowDark rounded-lg overflow-hidden md:p-6 "
      }
    >
      <h3 className='text-lg font-semibold mb-4'>Top Doctors</h3>
      <hr className='mb-4 -mx-8' />

      <div className='flex flex-col gap-4'>
        {doctors &&
          doctors.map((doctor, index, arr) => (
            <SmallCardDoctor
              key={index}
              index={index}
              {...doctor}
              length={arr.length}
            />
          ))}
      </div>
    </div>
  );
}

export default TopDoctors;

type SmallCardDoctor = {
  length: number;
  index: number;
} & Doctors;
export function SmallCardDoctor({
  firstname,
  lastname,
  department,
  path,
  length,
  index,
}: SmallCardDoctor) {
  if (index > 4) return;
  return (
    <Link to="/doctor/profile" className='flex gap-4'>
      <div className='h-16 w-16 rounded-full overflow-hidden shadow-sm shadow-shadowColor'>
        <img className=' ' src={path} alt='profile' />
      </div>
      <div className='flex flex-col justify-between '>
        <h3 className="font-medium text-[1rem]">Dr.{firstname + lastname}</h3>
        <p className='text-Secondary text-[0.9rem]'>{department}</p>
        <Rating value={5} readOnly size="small"/>
      </div>
    </Link>
  );
}
