import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../../Pages/Home/Home";
import Authentication from "../../Pages/Login/Authentication";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Dashboard from "../../Dashboard/Dashboard";
import UserHome from "../../Pages/Dashboard/UserHome";
import MyCart from "../../Pages/Dashboard/MyCart";
import Payment from "../../Pages/Dashboard/Payment";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import AllPets from "../../Pages/Home/AllPets/AllPets";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
            path: "allPets",
            element: <AllPets></AllPets>
        },
      ]
    },
    {
      path: "*",
      element: <ErrorPage></ErrorPage>
    },
    {
      path: "login",
      element: <Authentication></Authentication>

    },
    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: 'userHome',
          element: <UserHome></UserHome>
        },
        {
          path: 'cart',
          element: <MyCart></MyCart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
      ]

    },
  ]);