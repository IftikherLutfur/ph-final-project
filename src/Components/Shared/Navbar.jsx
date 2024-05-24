import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthPRovider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
    }



    return (
        <div className="fixed z-10 w-full bg-opacity-45 bg-black text-white">
            <nav className="relative ">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <a href="#">
                            {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt=""/> */}
                            <div className="text-white">
                                <h1 className="text-4xl">BISTRO BOSS</h1>
                                <p>R E S T U A R A N T</p>
                            </div>
                        </a>


                        <div className="flex lg:hidden">
                            <button type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">


                            </button>
                        </div>
                    </div>


                    <div className="absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white  md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
                        <div className="flex flex-col md:flex-row md:mx-6 uppercase">

                            <a className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" href="#">

                                <div className="flex gap-2 items-center mr-5">

                                <div>
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z" stroke="currentColor" />
                                </svg>
                                </div>
                         <div>
                              <span className=" top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full">+55</span>
                              </div>
                                </div>
                            </a>
                            <NavLink to='/'><a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Home</a></NavLink>
                            <NavLink to='/menu'> <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Menu</a></NavLink>
                            <NavLink to='/order/drinks'><a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Order Food</a></NavLink>
                            <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">About</a>

                            {user ?
                                <div>
                                    <button onClick={() => setIsOpen(!isOpen)} >
                                        <span className="mx-1">
                                            <div className="avatar">
    <div className="w-12 rounded-full">
    <img src={user.photoURL} />
  </div>
</div>
                                        </span>
                                    
                                    </button>


                                    <div>
                                        {isOpen || <div
                                            className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right  rounded-md shadow-xl bg-orange-600"
                                        >
                                            <a href="#" className="block px-4 py-3 font-bold capitalize transition-colors duration-300 transform text-white">
                                                {user.displayName}
                                            </a>
                                           
                                            <a href="#" className="block px-4 py-3 font-bold capitalize transition-colors duration-300 transform text-white">
                                                Settings
                                            </a>

                                   


                                            <a onClick={handleLogOut} href="#" className="block px-4 py-3 font-bold capitalize transition-colors duration-300 transform text-white">
                                                Sign Out
                                            </a>
                                        </div>}
                                    </div>
                                </div>
                                :
                                <div>
                                    <NavLink to='/login'>
                                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Login</a>
                                    </NavLink>
                                    <NavLink to='/register'>
                                        <a className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0" href="#">Register</a>
                                    </NavLink>
                                </div>
                            }

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;