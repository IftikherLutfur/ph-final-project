import { useContext, useEffect, useRef, useState } from 'react';
import { LoadCanvasTemplate, loadCaptchaEnginge, validateCaptcha } from 'react-simple-captcha';
import logForm from '../../src/home/authentication2.png'
import { AuthContext } from './AuthProvider/AuthPRovider';
import { useNavigate } from 'react-router-dom';


const Register = () => {

    const {signUp,update} = useContext(AuthContext)
    const navigate = useNavigate()
    const captchaRef = useRef(null)
    const [show, setShow] = useState(false)
    const [disable, setDisable] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleValidate = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value)) {
            alert('Captcha Matched')
            setDisable(false)
        }
        else {
          alert('Captcha dose not matched')
          setDisable(true)
        }
    }
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const image = form.image.value;
        const email = form.email.value;
        const password = form.password.value;
        const logInfo = {name, image, email, password}
        console.log(logInfo);
        signUp(email,password)
        .then(result=>{
            console.log(result.user);
            navigate('/')
            update(name, image)
            .then(result=>{
                console.log(result.user);
                
            })
            .catch(error=>{
    console.log(error);
            })

        })
        .catch(error=>{
            console.log(error);
        })
    }
   


    return (
        <div>
            <div className="flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg bg-white lg:max-w-4xl">
                <div className="hidden bg-cover lg:block ">
                    <img src={logForm} alt="" />
                </div>

                <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">

                    <div className="flex items-center justify-between mt-4 ">
                        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                        <a href="#" className="text-xs text-center text-gray-500 uppercase  hover:underline">or login
                            with email</a>

                        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                    </div>
                    <form onSubmit={handleLogin}>

            
                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium  ">Name</label>
                            <input
                                name='name'
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                        </div>


                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium  ">Photo</label>
                            <input
                                name='image'
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="url" />
                        </div>


                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium  ">Email Address</label>
          <input
              name='email'
              className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                        </div>

                        <div className="mt-4">
                            <label className="block mb-2 text-sm font-medium dark:text-black" >Password</label>
                            <input
                                name='password'
                              
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                                type={show ? "text" : "password"} />
                            <span className='relative bottom-8 left-[280px] text-white' onClick={() => setShow(!show)}>
                                {show ? "Hide" : "Show"}
                            </span>
                            <div className="flex justify-between">

                                <a href="#" className="text-xs text-gray-500 dark:text-black hover:underline">Forget Password?</a>
                            </div>

                        </div>



                        <div className="mt-4">

                            <label className="block mb-2 text-sm font-medium dark:text-black" ><LoadCanvasTemplate /></label>
                            <input id="loggingPassword"
                                name='captcha'
                                ref={captchaRef}
                                className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="text" />
                            <span onClick={handleValidate} className=" btn w-full btn-xs btn-outline">validate</span>
                            <div className="flex justify-between">
                            </div>

                        </div>

                        <div className="mt-6">
                            <button
                                disabled={disable}
                                className="w-full px-6 py-3 text-sm bg-pink-400 rounded-lg ">
                                Sign In
                            </button>
                        </div>

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

export default Register;