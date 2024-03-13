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
      path: "/",
      icon: FaThLarge,
    },
    {
      title: "Doctors",
      path: "admin/doctors",
      icon: FaUserDoctor,
    },
    {
      title: "Users",
      path: "admin/Users",
      icon: FaUsers,
    },
    {
      title: "Setting",
      path: "admin/profile/",
      icon: IoSettingsOutline,
    },
    {
      title: "Logout",
      icon: LuLogOut,
    },
];

export {FaThLarge, FaUserDoctor, FaUsers, FaCalendarTimes};