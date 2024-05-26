import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdPayment, MdReviews } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { TbBrandBooking } from "react-icons/tb";


const Dashboard = () => {
    return (
        <div className="bg-slate-50">
            <div className="flex justify-evenly"> 

            <div className=" px-8 border-2  bg-orange-400 min-h-screen">
    
    <ul className=" menu space-y-4 uppercase">

        <li>
            <NavLink to='cart'>
               <FaHome/> User Home
            </NavLink>
        </li>
        <li className="">
            <NavLink to='cart'>
               
                <SlCalender/> Reservation
            </NavLink>
        </li>
        <li className="">
            <NavLink to='cart'>
        <MdPayment/> Payment History
            </NavLink>
        </li>
        <li className="">
            <NavLink to='cart'>
        <FaCartShopping></FaCartShopping> My Cart
            </NavLink>
        </li>
        <li className="">
            <NavLink to='cart'>
         <MdReviews/> Add Review
            </NavLink>
        </li>
        <li className="">
            <NavLink to='cart'>
          <TbBrandBooking></TbBrandBooking> My Booking
            </NavLink>
        </li>
    </ul>
 
            </div>

            <div className="">
                <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;