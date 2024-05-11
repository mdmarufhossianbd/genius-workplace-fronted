import {
  createBrowserRouter,
} from "react-router-dom";
import Root from "../Layout/Root";
import AddJob from "../Pages/AddJob/AddJob";
import AllJobs from "../Pages/AllJobs/AllJobs";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import JobDetails from "../Pages/JobDetails/JobDetails";
import Login from "../Pages/LoginPage/Login";
import MyJobs from "../Pages/MyJobs/MyJobs";
import Register from "../Pages/RegisterPage/Register";
import UpdateJob from "../Pages/UpdateJob/UpdateJob";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/add-job',
          element:<PrivateRoutes><AddJob>s</AddJob></PrivateRoutes>
        },
        {
          path: '/all-jobs',
          element: <AllJobs></AllJobs>
        },
        {
          path: 'my-jobs',
          element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
        },
        {
          path: '/job-details/:id',
          element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/job-details/${params.id}`)
        },
        {
          path: '/update-job/:id',
          element: <PrivateRoutes><UpdateJob></UpdateJob></PrivateRoutes>,
          loader: ({params}) => fetch(`http://localhost:5000/job-details/${params.id}`)
        }

    ]
  },
]);

export default router;