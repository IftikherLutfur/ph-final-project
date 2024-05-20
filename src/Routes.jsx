import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "./Components/Root";
import Home from "./Components/Home";
import OurMenu from "./Components/OurMenu/OurMenu";

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
        }
      ]
    },
  ]);

  export default router;