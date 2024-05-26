import { useContext } from "react";
import { AuthContext } from "../Components/AuthProvider/AuthPRovider";
import UseAxiosPublic from "./UseAxiosPublic";
import { Result } from "postcss";
import { useNavigate } from "react-router-dom";


const GoogleHook = () => {
    const {googleLogin} = useContext(AuthContext)
    const axiosPublic = UseAxiosPublic();
    const navigate = useNavigate()
    const handleGoogle = () =>{
     googleLogin()
     .then(result=>{
         console.log(result.user);
         const userInfo ={
            email: result.user?.email,
            name: result.user?.displayName 
         }
         axiosPublic.post('/users', userInfo)
         .then(res=>{
            console.log(res.data);
            navigate('/')
         })
     })

    }

    return handleGoogle
};

export default GoogleHook;