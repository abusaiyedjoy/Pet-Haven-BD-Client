import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../../Pages/Home/Home";
import Authentication from "../../Pages/Login/Authentication";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Dashboard from "../../Dashboard/Dashboard";
import UserHome from "../../Pages/Dashboard/UserHome";
import MyCart from "../../Pages/Dashboard/MyCart";
import Payment from "../../Pages/Dashboard/Payment";




export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            index: true,
            element: <Home></Home>
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
      element: <Dashboard></Dashboard>,
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