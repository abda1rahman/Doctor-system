import { useEffect, useState } from "react";
import TitilePage from "../../components/TitilePage";
import { Link } from "react-router-dom";

interface Doctors {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  gender: string;
  address: string;
  department: string;
  bio: string;
  path: string;
}

function AllDoctor() {
  const [doctors, setDoctors] = useState<Doctors[]>([]);

  useEffect(() => {
    const fetchDoctor = async () => {
      const res = await fetch(`http://localhost:3004/doctors`);
      const data: any = await res.json();
      setDoctors(data);
    };
    fetchDoctor();
  }, []);

  console.log(doctors);
  return (
    <>
      <TitilePage>Doctor List</TitilePage>

      {/* Container */}
      <section className='flex-grow grid gap-5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(180px,1fr))]'>
        {doctors.map((doctor) => (
          <CardDoctor key={doctor.id} {...doctor} />
        ))}
      </section>
    </>
  );
}

function CardDoctor({ firstname, lastname, department, path }: any) {
  return (
    <Link to="/doctor/profile" className='group cursor-pointer flex flex-col max-w-[17rem] mx-auto  rounded-lg flex-shrink-0'>
      <div className=' overflow-hidden rounded-t-lg aspect-square'>
        <img
          className='flex justify-center items-center   
          object-cover'
          src={path}
          alt='profile-image'
        />
      </div>
      <div className='flex flex-col bg-white py-3 text-center items-center group-hover:bg-blueColor group-hover:text-white duration-200 rounded-b-lg'>
        <h2 className=' w-[12rem] text-wrap'>
          Dr. {`${firstname} ${lastname}`}
        </h2>
        <p className='text-Secondary group-hover:text-[#9fbade]'>
          {department}
        </p>
      </div>
    </Link>
  );
}

export default AllDoctor;
