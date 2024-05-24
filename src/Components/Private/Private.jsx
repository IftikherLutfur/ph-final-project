import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthPRovider";
import { Navigate, useLocation } from "react-router-dom";
import { Circles } from 'react-loader-spinner'

const Private = ({children}) => {

    const {user, load} = useContext(AuthContext)
  const location = useLocation()

    if(load){
       return <div className="mx-[600px] my-80">
        <Circles
       height="200"
       width="500"
       color="#4fa94d"
       ariaLabel="circles-loading"
       wrapperStyle={{}}
       wrapperClass=""
       visible={true}
       />
       <h2 className="text-2xl font-bold text-orange-400">LOADING.......</h2>
       </div>
    }

    if(user){
        return children;
    }


    return (
        <Navigate to='/login' state={{form:location}} replace>
            
        </Navigate>
    );
};

export default Private;