import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "antd";
import { Layout } from "../components/Layout";
import { DoctorList } from "../components/DoctorList";


const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  //login user data
  const getUserData = async () => {
    try {
      const res = await axios.post(
        "/api/v1/user/getAllDoctor",
        {},
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserData();

  }, []);

  return (
    <Layout>
      <h1 className='text-center'>HomePage</h1>
      <Row>
        { doctors.map((doctor) => <DoctorList doctor={doctor} />)}
      </Row>
    </Layout>
  );
};

export default HomePage;
