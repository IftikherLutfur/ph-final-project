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
        {
          path:'cart', 
          element:<UserCarts/>
        },
        {
          path:'users',
          element:<AllUsers/>
        }
      ]
    }
  ]);

  export default router;