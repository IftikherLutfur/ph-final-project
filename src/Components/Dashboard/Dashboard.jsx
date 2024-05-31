import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { MdPayment, MdReviews } from "react-icons/md";
import { FaCartShopping, FaPeopleGroup } from "react-icons/fa6";
import { TbBrandBooking, TbMenu, TbPhone } from "react-icons/tb";
import { ImSpoonKnife } from "react-icons/im";
import UseCart from "../../Hooks/UseCart";
import { TiThMenu } from "react-icons/ti";
import { BiBook } from "react-icons/bi";
import useAdmin from "../../Hooks/useAdmin";


const Dashboard = () => {
    const [cart] = UseCart();

    //TO DO: //

    const [isAdmin] = useAdmin();
    
    return (
        <div className="bg-slate-50">
            <div className="flex "> 

            <div className=" px-8 border-2  bg-orange-400 min-h-screen">
    
    <ul className=" menu space-y-4 uppercase">

    {
        isAdmin ? 
        <>
            <li>
            <NavLink to='cart'>
               <FaHome/> Admin Home
            </NavLink>
        </li>
        <li className="">
            <NavLink to='/dashboard/addItems'>
                <ImSpoonKnife/> Add Item
            </NavLink>
        </li>
        <li className="">
            <NavLink to='/dashboard/manageItem'>
        <TiThMenu/> Manage Item
            </NavLink>
        </li>
        <li className="">
            <NavLink to='cart'>
         <BiBook/> Manage bookings
            </NavLink>
        </li>
        <li className="">
            <NavLink to='users'>
        <FaPeopleGroup/> All Users
            </NavLink>
        </li>

        
        </>
        :
        <>
            <li>
            <NavLink to='home'>
               <FaHome/> User Home
            </NavLink>
        </li>
        <li className="">
            <NavLink to='reserve'>
               
                <SlCalender/> Reservation
            </NavLink>
        </li>
        <li className="">
            <NavLink to='payment'>
        <MdPayment/> Payment History
            </NavLink>
        </li>
        <li className="">
            <NavLink to='/dashboard/cart'>
        <FaCartShopping></FaCartShopping> My Cart ({cart.length})
            </NavLink>
        </li>
        <li className="">
            <NavLink to='review'>
         <MdReviews/> Add Review
            </NavLink>
        </li>
        <li className="">
            <NavLink to='booking'>
          <TbBrandBooking></TbBrandBooking> My Booking
            </NavLink>
        </li>

        </>
    }
        {/*Shared Nav  */}

        <div className="divider"></div> 
        <li className="">
            <NavLink to='/'>
          <FaHome/> Home
            </NavLink>
        </li>
        <li className="">
            <NavLink to='menu'>
          <TbMenu/> Menu
            </NavLink>
        </li>
        <li className="">
            <NavLink to='contact'>
          <TbPhone/> Contact
            </NavLink>
        </li>
    </ul>

    
 
            </div>

            <div className="w-full">
                <Outlet></Outlet>
            </div>
            </div>
        </div>
    );
};

export default Dashboard;