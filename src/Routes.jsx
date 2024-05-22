import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import OurMenu from "./Components/OurMenu/OurMenu";
import Order from "./Components/Order/Order";
import Login from "./Components/Login";

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
          element:<Order></Order>
        },
        {
          path:'login',
          element:<Login/>
        }
      ]
    },
  ]);

  export default router;