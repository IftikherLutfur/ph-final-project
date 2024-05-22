import { Outlet, useLocation } from "react-router-dom";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

const Root = () => {
    const location = useLocation()
    console.log(location);
    const isLoggedIn = location.pathname.includes('/login') ||
     location.pathname.includes( '/register')
    return (
        <div>
            {isLoggedIn|| <Navbar></Navbar>}
            <Outlet></Outlet>
           {isLoggedIn || <Footer></Footer>}
        </div>
    );
};

export default Root;