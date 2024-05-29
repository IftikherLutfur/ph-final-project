import axios from "axios";
import UseAuth from "../Components/Shared/UseAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const AxiosSecure = () => {
    const {logOut} = UseAuth();
    const navigate = useNavigate();
    // request interceptors
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token');
        // console.log('request stopped for by interceptors', token);
        config.headers.authorization = `Bearer ${token}`
        // console.log("authori",config.headers.authorization);
        return config;
    }, function (error) {
        // Do something with response error
        return Promise.reject(error);
    });

    // response interceptors

    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, (error)=>{
        const status = error.response.status;
        // console.log('status error in the interceptors', status);
        if(status === 401 || status === 403){
          logOut()
          navigate('login')
        }
        return Promise.reject(error)
    })
    return axiosSecure;
};

export default AxiosSecure;