import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import DoctorProfile from "./Pages/DoctorProfile";
import AllDoctor from "./Pages/AllDoctor";
import AllUsers from "./Pages/AllUsers";
import Profile from "./Pages/Profile";
import AddDoctor from "./Pages/AddDoctor";
import Error404 from "./components/Error404";

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
          element: <AddDoctor />,
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
