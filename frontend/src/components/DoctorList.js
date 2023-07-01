import React from "react";
import { useNavigate } from "react-router-dom";
export const DoctorList = ({ doctor }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className='card p-2'
        style={{cursor:'pointer'}}
        onClick={() => navigate(`doctor/book-appointment/${doctor._id}`)}
      >
        <div className='card-header'>
          Dr. {doctor.firstName} {doctor.lastName}
        </div>
        <div className='card-body'>
          <p>
            <b>Specialization</b> {doctor.specialization}
          </p>
          <p>
            <b>Experience</b> {doctor.experience} years
          </p>
          <p>
            <b>Fees Per Cunsaltation</b> {doctor.feesPerCunsaltation} JD
          </p>
          <p>
            <b>Timings</b> {doctor.timings[0]} - {doctor.timings[1]}
          </p>
        </div>
      </div>
    </>
  );
};
