import { createBrowserRouter } from "react-router-dom";
import Root from './../Root/Root';
import Home from "../../Pages/Home/Home";
import Authentication from "../../Pages/Login/Authentication";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Dashboard from "../../Dashboard/Dashboard";
import UserHome from "../../Pages/Dashboard/UserHome";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
import AllPets from "../../Pages/Home/AllPets/AllPets";
import AddPets from "../../Pages/Dashboard/AddPets";
import MyAddedPets from "../../Pages/Dashboard/MyAddedPets";
import MyCampaign from "../../Pages/Dashboard/MyCampaign";
import CreateCampaign from "../../Pages/Dashboard/CreateCampaign";
import Adoption from './../../Pages/Dashboard/Adoption';
import MyDonation from "../../Pages/Dashboard/MyDonation";
import PetListing from './../../Pages/PetListing/PetListing';
import Services from './../../Pages/ServicePage/Services';
import About from './../../Pages/About/About';
import Campaign from './../../Pages/Campaign/Campaign';
import PetDetails from "../Pet Details/PetDetails";
import DonationDetailsPage from "../../Pages/Campaign/DonationDetails/DonationDetails";
import AllUsers from "../../Pages/Dashboard/AdminPage/AllUsers";
import Contact from "../../Pages/Contact/Contact";
import MyCart from "../../Pages/My Cart/MyCart";




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
        {
            path: "petListing",
            element: <PetListing></PetListing>
        },
        {
          path: "petListing/:id",
          element: <PrivateRoute><PetDetails /></PrivateRoute>
      },      
        {
            path: "services",
            element: <Services></Services>
        },
        {
            path: "about",
            element: <About></About>
        },
        {
            path: "contact",
            element: <Contact></Contact>
        },
        {
            path: "campains",
            element: <Campaign></Campaign>
        },
        {
          path: 'viewCart',
          element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
        },
        {
            path: "donation",
            element: <DonationDetailsPage></DonationDetailsPage>
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
          path: 'addPets',
          element: <AddPets></AddPets>
        },
        {
          path: 'addedPets',
          element: <MyAddedPets></MyAddedPets>
        },
        {
          path: 'adoption',
          element: <Adoption></Adoption>
        },
        {
          path: 'campaign',
          element: <CreateCampaign></CreateCampaign>
        },
        {
          path: 'myDonation',
          element: <MyDonation></MyDonation>
        },
        {
          path: 'myCampaign',
          element: <MyCampaign></MyCampaign>
        },
        

        // Admin Route Manage

        {
          path: "users",
          element: <AllUsers></AllUsers>
        }
      ]

    },
  ]);