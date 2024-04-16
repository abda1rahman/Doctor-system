import { FaThLarge } from "react-icons/fa"; // dashboard
import { FaUserDoctor } from "react-icons/fa6"; // Doctor
import { FaUsers } from "react-icons/fa"; // Patients
import { FaCalendarTimes } from "react-icons/fa"; // Calender | Date
import { LuLogOut } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5"; // Profile
import { GrSchedulePlay } from "react-icons/gr"; // Schedule


export const doctorMenu = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: FaThLarge,
  },
  {
    title: "Doctor",
    icon: FaUserDoctor,
  },
  {
    title: "Appointment",
    icon: FaCalendarTimes,
  },
  {
    title: "Working time",
    icon: GrSchedulePlay,
  },
  {
    title: "Logout",
    icon: LuLogOut,
  },
];

export const AdminMenu = [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: FaThLarge,
    },
    {
      title: "Doctors",
      path: "/doctor/allDoctors",
      icon: FaUserDoctor,
    },
    {
      title: "Add Doctor",
      path: "/doctor/addDoctor",
      icon: FaUserDoctor,
    },
    {
      title: "Profile",
      path: "/doctor/profile",
      icon: FaUserDoctor,
    },
    {
      title: "Users",
      path: "/user/allUsers",
      icon: FaUsers,
    },
    {
      title: "Setting",
      path: "user/profile/:id",
      icon: IoSettingsOutline,
    },
    {
      title: "Logout",
      path: "/logout",
      icon: LuLogOut,
    },
];

export {FaThLarge, FaUserDoctor, FaUsers, FaCalendarTimes};