import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import AllDoctor from "./Pages/Doctors/AllDoctor";
import AllUsers from "./Pages/Users/AllUsers";
import Profile from "./Pages/Profile";
import Error404 from "./components/Error404";
import DoctorProfile from "./Pages/Doctors/DoctorProfile";
import NewDoctor from "./Pages/Doctors/NewDoctor";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error404 />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/doctor",
          element: <Dashboard />,
        },
        {
          path: "/doctor/profile",
          element: <DoctorProfile />,
        },
        {
          path: "/doctor/allDoctors",
          element: <AllDoctor />,
        },
        {
          path: "/doctor/addDoctor",
          element: <NewDoctor />,
        },
        {
          path: "/user/allUsers",
          element: <AllUsers />,
        },
        {
          path: "/user/profile/:id",
          element: <Profile />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
