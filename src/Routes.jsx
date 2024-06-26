import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import OurMenu from "./Components/OurMenu/OurMenu";
import Order from "./Components/Order/Order";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Dashboard from "./Components/Dashboard/Dashboard";
import UserCarts from "./Components/Dashboard/Carts/UserCarts";
import Private from "./Components/Private/Private";
import AllUsers from "./Components/Dashboard/AllUsers/AllUsers";
import AddItems from "./Components/Dashboard/Additems/AddItems";
import AdminRoutes from "./Components/AdminRoutes/AdminRoutes";
import ManageItems from "./Components/Dashboard/ManageItems/ManageItems";
import UpdateItems from "./Components/Dashboard/UpdateItems/UpdateItems";
import Payment from "./Components/Dashboard/Payment/Payment";
import PaymentHistory from "./Components/Dashboard/PaymentHGistory/PaymentHistory";


  const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/menu',
          element:<OurMenu/>
        },
        {
          path:'/order/:category',
          element:<Order/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        }
      ]
    },

    {
      path:'dashboard',
      element:<Private><Dashboard/></Private> ,
      children:[
        // Normal users routes
        {
          path:'cart', 
          element:<UserCarts/>
        },
        {
          path:"payment",
          element:<Payment/>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory/>,
          
        },


        // Admin routes
        {
          path:'users',
          element:<AllUsers/>
        },
        {
          path:'addItems',
          element:<AdminRoutes><AddItems/></AdminRoutes>
        },
        {
          path:'manageItem',
          element:<AdminRoutes><ManageItems/></AdminRoutes>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoutes><UpdateItems/></AdminRoutes>,
          loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
        }
      ]
    }
  ]);

  export default router;