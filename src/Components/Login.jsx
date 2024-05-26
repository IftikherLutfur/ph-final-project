import {  useContext, useState } from 'react';
import logForm from '../../src/home/authentication2.png'
import { AuthContext } from './AuthProvider/AuthPRovider';
import { useLocation, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc';
import GoogleHook from '../Hooks/GoogleHook';


const Login = () => {

    const {login} = useContext(AuthContext)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const location = useLocation()
    const handleGoogle = GoogleHook()

    const formPath = location?.state?.form?.pathname || '/';
    console.log('state in the location login page', location.state);

    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
       console.log(email, password);

       login(email, password)
       .then(result=>{
        console.log(result.user);
        toast.success('Successfully toasted!')
        navigate(formPath, {replace:true})
       })
       .catch(result=>{
        console.log(result.user);
       })

    }
  


    return (
        <div>
<div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-white lg:max-w-4xl pt-11">
    <div className="hidden bg-cover lg:block ">
        <img src={logForm} alt="" />
    </div>

    <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
    

    <div><button onClick={handleGoogle} type="button" className="relative w-full px-8 py-4 ml-4 overflow-hidden font-semibold rounded dark:bg-gray-800 dark:text-gray-50">
                        <span className='flex gap-2 items-center text-center mx-12'>Login with Google <FcGoogle/></span>
	<span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-violet-600">Social</span>
</button></div>

        <div className="flex items-center justify-between mt-4 ">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

            <a href="#" className="text-xs text-center text-gray-500 uppercase  hover:underline">or login
                with email</a>

            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
        </div>
<form onSubmit={handleLogin}>
    
<div className="mt-4">
            <label className="block mb-2 text-sm font-medium  ">Email Address</label>
            <input id="LoggingEmailAddress" 
            name='email'
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
        </div>
        
        <div className="mt-4">
        <label className="block mb-2 text-sm font-medium dark:text-black" >Password</label>
            <input id="loggingPassword"
            name='password'
            className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" 
            type={show ? "text":"password" }/>
            <span className='relative bottom-8 left-[280px] text-white' onClick={()=>setShow(!show)}>
                {show ? "Hide" : "Show"}
                </span>
        <div className="flex justify-between">
               
                <a href="#" className="text-xs text-gray-500 dark:text-black hover:underline">Forget Password?</a>
            </div>
        
        </div>

        <div className="mt-6">
            <button
            className="w-full px-6 py-3 text-sm bg-pink-400 rounded-lg ">
                Sign In
            </button>
        </div>
                <Toaster/>

</form>

        <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

            <a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</a>

            <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
        </div>
    </div>
</div>   




     </div>
    );
};

export default Login;